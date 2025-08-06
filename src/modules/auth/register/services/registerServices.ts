import axios from "axios";
import { RegisterTypes } from "../types/registerTypes";

export async function registerUser({ data }: { data: RegisterTypes }) {
  const response = await axios.post(`/api/auth/register`, { ...data });

  return {
    status: response.status,
    message: response.data.message,
  };
}
