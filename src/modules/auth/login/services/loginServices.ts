import axios, { AxiosError } from "axios";
import { setCookie } from "cookies-next";
import { LoginTypes } from "../types/loginTypes";

export async function login({ email, password, remember }: LoginTypes) {
  const expireToken = new Date();
  expireToken.setDate(expireToken.getDate() + 7);
  try {
    const response = await axios.post("/api/auth/login", { email, password });
    if (response.status === 200 && response.data.token) {
      const { token, ...data } = response.data;
      if (remember) {
        setCookie("token", token, {
          path: "/",
          sameSite: "strict",
          expires: expireToken,
        });
        setCookie("user", JSON.stringify(data), {
          path: "/",
          sameSite: "strict",
          expires: expireToken,
        });
      } else {
        setCookie("token", token, {
          path: "/",
          sameSite: "strict",
        });
        setCookie("user", JSON.stringify(data), {
          path: "/",
          sameSite: "strict",
        });
      }
    }
    return { status: response.status, message: response.data.message };
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return {
      message: err.response?.data?.message,
    };
  }
}
