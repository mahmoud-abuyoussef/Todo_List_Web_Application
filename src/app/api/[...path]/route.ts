import { NextRequest } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL;

function sanitizResponseHeader(headers: Headers): Headers {
  const filtered = new Headers();
  const allowedHeaders = ["content-type"];

  for (const [key, value] of headers.entries()) {
    if (allowedHeaders.includes(key.toLowerCase())) {
      filtered.set(key, value);
    }
  }
  return filtered;
}

async function handelRequest(req: NextRequest, method: string) {
  const url = new URL(req.url);
  const path = url.pathname;
  const targetURL = `${BACKEND_URL}${path}`;

  const hasBody = ["POST", "PUT", "DELETE"];

  const fetchOptions: RequestInit = {
    method,
    headers: Object.fromEntries(req.headers.entries()),
    ...(hasBody && { body: req.body, duplex: "half" as const }),
  };

  const response = await fetch(targetURL, fetchOptions);

  const cleanHeaders = sanitizResponseHeader(response.headers);

  if ([204, 304, 101].includes(response.status)) {
    return new Response(null, {
      status: response.status,
      headers: cleanHeaders,
    });
  }

  const data = await response.arrayBuffer();

  return new Response(data, {
    status: response.status,
    headers: cleanHeaders,
  });
}

export async function GET(req: NextRequest) {
  return handelRequest(req, "GET");
}

export async function POST(req: NextRequest) {
  return handelRequest(req, "POST");
}

export async function PUT(req: NextRequest) {
  return handelRequest(req, "PUT");
}

export async function DELETE(req: NextRequest) {
  return handelRequest(req, "DELETE");
}
