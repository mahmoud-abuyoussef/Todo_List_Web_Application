"use client";
import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useLoginForm } from "../hooks/useLoginForm";
import { FaUser, FaLock, FaFacebook } from "react-icons/fa";
export default function LoginForm() {
  const { register, errors, isSubmitting, onSubmit, handleSubmit } = useLoginForm();
  return (
    <div className="rounded-[10px] bg-white p-5 shadow-lg max-md:w-full md:flex md:justify-between lg:px-12 lg:py-8">
      <div className="mb-4 md:w-1/2">
        <h2 className="mb-6 text-2xl font-bold">Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <div className="flex items-center rounded-md border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500">
              <FaUser className="ml-3 text-black" />
              <input
                type="text"
                placeholder="Enter Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                className="flex-1 bg-transparent px-3 py-2 focus:outline-none"
              />
            </div>
            {errors.email && <p className="text-priority-heigh mt-2 text-sm">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <div className="flex items-center rounded-md border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500">
              <FaLock className="ml-3 text-black" />
              <input
                type="password"
                placeholder="Enter Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Your password should contain at least 8 characters for better security",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
                    message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character ",
                  },
                })}
                className="flex-1 bg-transparent px-3 py-2 focus:outline-none"
              />
            </div>
            {errors.password && <p className="text-priority-heigh mt-2 max-w-[250px] text-sm">{errors.password.message}</p>}
          </div>
          <div className="mb-4 flex items-center">
            <input id="remember" {...register("remember")} type="checkbox" className="mr-2" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <button type="submit" disabled={isSubmitting} className="mb-4 w-fit rounded-[5px] bg-[#ff9090] px-7 py-4 text-white hover:bg-[#f87272] disabled:opacity-50">
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="mt-8 flex items-center p-3">
          <span className="mr-2">Or, Login with</span>
          <FaFacebook className="mx-1 cursor-pointer text-blue-600" size={20} />
          <FcGoogle className="mx-1 cursor-pointer" size={20} />
          <FaSquareXTwitter className="mx-1 cursor-pointer" size={20} />
        </div>
        <p className="mt-2 text-sm">
          Don&apos;t have an account?
          <Link href="/auth/register" className="ml-1 text-blue-600 hover:underline">
            Create One
          </Link>
        </p>
      </div>
      <div className="mt-10 flex w-full items-center justify-center md:w-1/2">
        <Image
          src="/images/login.webp"
          alt="A woman uses her smartphone to make a successful online payment transaction, with a credit card and a green check mark displayed on the phone screen, symbolizing safe and easy online or mobile payment."
          width={613}
          height={500}
          className="hidden md:block"
          priority
        />
      </div>
    </div>
  );
}
