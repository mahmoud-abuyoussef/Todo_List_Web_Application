"use client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { LoginTypes } from "../types/loginTypes";
import { login } from "../services/loginServices";
export function useLoginForm() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginTypes>();
  const onSubmit = async (data: LoginTypes) => {
    const response = await login({ email: data.email, password: data.password, remember: data.remember });
    if (response.status == 200) {
      toast.success(response.message);
      router.push("/");
    } else {
      toast.error(response.message);
    }
  };
  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  };
}
