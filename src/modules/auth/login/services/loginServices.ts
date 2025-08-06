import axios from "axios";
import { LoginTypes } from "../types/loginTypes";

export async function login({ email, password }: LoginTypes) {
  try {
    const response = await axios.post("https://todolistwebapp.up.railway.app/api/auth/login", { email, password });
    if (response.status === 200 && response.data.token) {
      localStorage.setItem("token", response.data.token);

      return {
        success: true,
        message: response.data.message || "User Logged in Successfully",
      };
    }
    return {
      success: false,
      message: response.data.message || "Invalid email or password",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || "An error occurred. Please try again.",
    };
  }
}
