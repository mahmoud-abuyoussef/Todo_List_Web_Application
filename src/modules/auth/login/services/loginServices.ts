import axios from "axios";
import { LoginTypes } from "../types/loginTypes";
import { setCookie } from "cookies-next";

export async function login({ email, password }: LoginTypes) {
  try {
    const response = await axios.post("/api/auth/login", { email, password });
    if (response.status === 200 && response.data.token) {
      const { token, ...data } = response.data;
      setCookie("token", token, {
        path: "/",
        sameSite: "strict",
      });
      setCookie("user", data, {
        path: "/",
        sameSite: "strict",
      });
    }
    return { status: response.status, message: response.data.message };
  } catch (error: any) {
    return {
      message: error.response?.data?.message,
    };
  }
}
