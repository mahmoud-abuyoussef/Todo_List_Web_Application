"use client";
import axios from "axios";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { RegisterTypes } from "../types/registerTypes";
import { registerUser } from "../services/registerServices";

export function useRegisterForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterTypes>();

  const router = useRouter();

  async function onSubmit(data: RegisterTypes) {
    try {
      const response = await registerUser({ data });

      if (response.status === 201) {
        router.push("/auth/login");
        toast.success(response.message);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (!error.response) {
          toast.error(error.message);
        } else if (error.response.status === 404) {
          toast.error(error.response.data?.message);
        } else if (error.response.status === 400) {
          toast.error(error.response.data?.message);
        } else if (error.response.status === 429) {
          toast.error(error.response.data?.message);
        } else {
          toast.error(error.response.data?.message);
        }
      }
    }
  }
  return {onSubmit, register, errors, handleSubmit};
}
