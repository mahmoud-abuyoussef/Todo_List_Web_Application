"use client";

import Link from "next/link";
import { toast } from "sonner";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { IoMdLock } from "react-icons/io";
import { useRouter } from "next/navigation";
import { RiUserFill } from "react-icons/ri";
import { FaUserPen } from "react-icons/fa6";
import { LuUserRoundPen } from "react-icons/lu";
import { RegisterTypes } from "../types/registerTypes";
import { registerUser } from "../services/registerServices";

export default function RegisterForm() {
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
    } catch (error: any) {
      if (error.response?.status === 400) {
        toast.error(error.response.message);
      } else if (error.response?.status === 429) {
        toast.error(error.response.message);
      } else {
        toast.error(error.response.message);
      }
    }
  }
  return (
    <div className="bg-background container mx-4 flex-1 rounded-[10px] p-5 max-md:w-full md:flex md:items-center md:justify-center md:gap-20 md:px-10 lg:max-w-4xl">
      <div className="hidden md:block md:w-1/2">
        <Image
          src="/images/register.webp"
          alt="Flat illustration of a man standing and interacting with floating digital forms, including checklists and documents, on a large virtual touchscreen interface"
          width={333}
          height={452}
          className="mx-auto"
          priority
        />
      </div>
      <div className="w-full md:flex-1/2">
        <h1 className="mb-2 text-4xl font-bold">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex w-full flex-col gap-3">
            <div className="border-border flex w-full items-center gap-4 rounded-lg border-2 p-2">
              <FaUserPen className="text-xl" />
              <input
                type="text"
                placeholder="Enter First Name"
                className="w-full outline-0"
                {...register("firstName", {
                  required: "First Name Is Required",
                  pattern: {
                    value: /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,20}$/,
                    message: "First Name Must Be 2-20 Letters",
                  },
                  maxLength: {
                    value: 20,
                    message: "The Maximum Character Limit Is 20 Char",
                  },
                  minLength: {
                    value: 2,
                    message: "The Minimum Number Of Characters Is 2",
                  },
                })}
              />
            </div>

            {errors.firstName && <p className="text-priority-heigh text-sm">{errors.firstName.message}</p>}

            <div className="border-border flex w-full items-center gap-4 rounded-lg border-2 p-2">
              <LuUserRoundPen className="text-xl font-extrabold" />
              <input
                type="text"
                placeholder="Enter Last Name"
                className="w-full outline-0"
                {...register("lastName", {
                  required: "Last Name Is Required",
                  pattern: {
                    value: /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,20}$/,
                    message: "First Name Must Be 2-20 Letters",
                  },
                  maxLength: {
                    value: 20,
                    message: "The Maximum Character Limit Is 20 Char",
                  },
                  minLength: {
                    value: 2,
                    message: "The Minimum Number Of Characters Is 2",
                  },
                })}
              />
            </div>

            {errors.lastName && <p className="text-priority-heigh text-sm">{errors.lastName.message}</p>}

            <div className="border-border flex w-full items-center gap-4 rounded-lg border-2 p-2">
              <RiUserFill className="text-xl" />
              <input
                type="text"
                placeholder="Enter Username"
                className="w-full outline-0"
                {...register("username", {
                  required: "Username Is Required",
                  pattern: {
                    value: /^(?!.*[_.]{2})(?!.*[_.]$)[a-z][a-z0-9._]{2,18}[a-z0-9]$/,
                    message:
                      "Username Must Start With A Lowercase Letter, Be 4–20 Characters Long, And Can Include Lowercase Letters, Numbers, Underscores, And Dots. It Must Not End With _ Or ., Or Contain Consecutive Symbols.",
                  },
                })}
              />
            </div>

            {errors.username && <p className="text-priority-heigh text-sm">{errors.username.message}</p>}

            <div className="border-border flex w-full items-center gap-4 rounded-lg border-2 p-2">
              <MdEmail className="text-xl" />
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full outline-0"
                {...register("email", {
                  required: "Email Is Required",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                    message: "Email Must Be Lowercase And Valid, Like example@domain.com",
                  },
                })}
              />
            </div>

            {errors.email && <p className="text-priority-heigh text-sm">{errors.email.message}</p>}

            <div className="border-border flex w-full items-center gap-4 rounded-lg border-2 p-2">
              <IoMdLock className="text-xl" />
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full outline-0"
                {...register("password", {
                  required: "Password Is Required",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "Password Must Be At Least 8 Characters Long And Include Uppercase, Lowercase, A Number, And One Special Character (@, $, !, %, *, ?, &).",
                  },
                })}
              />
            </div>

            {errors.password && <p className="text-priority-heigh text-sm">{errors.password.message}</p>}

            <div className="flex w-full items-center gap-4">
              <input
                type="checkbox"
                className="cursor-pointer outline-0"
                {...register("agreeToAllTerms", {
                  required: "You Must Agree To The Terms And Conditions To Continue.",
                })}
              />
              <span>I agree to all terms</span>
            </div>
            {errors.agreeToAllTerms && <p className="text-priority-heigh text-sm">{errors.agreeToAllTerms.message}</p>}
          </div>
          <button type="submit" className="bg-main-color text-date mt-3 cursor-pointer rounded px-6 py-4">
            Register
          </button>
        </form>
        <p className="mt-2 text-sm">
          Already have an account?
          <Link href="/auth/login" className="mx-2 cursor-pointer font-medium text-blue-500">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
