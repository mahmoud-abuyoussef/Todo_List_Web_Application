import "@/styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo List Web Application",
  description:
    "A professional training project for building a responsive and modern Todo List Web Application, developed by a team of front-end developers under the supervision of a Senior Front-End Developer. This project simulates a real-world development environment—from receiving designs in Figma to deploying the final product.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
