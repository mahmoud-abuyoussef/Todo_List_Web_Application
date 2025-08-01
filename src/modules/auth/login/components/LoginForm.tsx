"use client";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaUser, FaLock, FaFacebook } from "react-icons/fa";

export default function LoginForm() {
  return (
    <div className="rounded-[10px] bg-white p-5 shadow-lg max-md:w-full  md:flex md:justify-between lg:px-12 lg:py-8">
      <div className="mb-4 md:w-1/2">
        <h2 className="mb-6 text-2xl font-bold">Sign In</h2>
        <form>
          <div className="relative mb-4">
            <FaUser className="absolute top-3 left-3 text-black" />
            <input type="text" placeholder="Enter Username" className="w-full rounded-md border border-gray-300 py-2 pr-4 pl-10 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>

          <div className="relative mb-4">
            <FaLock className="absolute top-3 left-3 text-black" />
            <input type="password" placeholder="Enter Password" className="w-full rounded-md border border-gray-300 py-2 pr-4 pl-10 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>

          <div className="mb-4 flex items-center">
            <input id="remember" type="checkbox" className="mr-2" />
            <label htmlFor="remember">Remember Me</label>
          </div>

          <button type="submit" className="mb-4 w-fit rounded-[5px] bg-[#ff9090] px-7 py-4 text-white hover:bg-[#f87272]">
            Login
          </button>
        </form>

        <div className="mt-8 flex items-center p-3">
          <span className="mr-2">Or, Login with</span>
          <FaFacebook className="mx-1 cursor-pointer text-blue-600" size={20} />
          <FcGoogle className="mx-1 cursor-pointer" size={20} />
          <FaSquareXTwitter className="mx-1 cursor-pointer" size={20} />
        </div>

        <p className="mt-2 text-sm">
          Don't have an account?
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
