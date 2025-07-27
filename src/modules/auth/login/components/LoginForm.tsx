"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaUser, FaLock, FaFacebook } from "react-icons/fa";

export default function LoginForm() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-screen-xl rounded-[10px] shadow-lg p-5 sm:p-10 md:px-10 md:py-6 lg:px-12 lg:py-8 flex flex-col md:flex-row">
        {/* النموذج */}
        <div className="w-full md:w-1/2 mb-4 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6">Sign In</h2>

          {/* اسم المستخدم */}
          <div className="relative mb-4">
            <FaUser className="absolute left-3 top-3 text-black" />
            <input
              type="text"
              placeholder="Enter Username"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* كلمة المرور */}
          <div className="relative mb-4">
            <FaLock className="absolute left-3 top-3 text-black" />
            <input
              type="password"
              placeholder="Enter Password"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* تذكرني */}
          <div className="flex items-center mb-4">
            <input id="remember" type="checkbox" className="mr-2" />
            <label htmlFor="remember">Remember Me</label>
          </div>

          {/* زر تسجيل الدخول */}
          <button
            type="submit"
            className="bg-[#ff9090] hover:bg-[#f87272] text-white px-7 py-4 rounded-[5px] mb-4 w-fit"
            onClick={() => router.push("/auth/register")}
          >
            Login
          </button>

          {/* تسجيل دخول عبر الشبكات */}
          <div className="flex items-center mt-8 p-3">
            <span className="mr-2">Or, Login with</span>
            <FaFacebook className="text-blue-600 mx-1 cursor-pointer" size={20} />
            <FcGoogle className="mx-1 cursor-pointer" size={20} />
            <FaSquareXTwitter className="mx-1 cursor-pointer" size={20} />
          </div>

          {/* إنشاء حساب */}
          <p className="text-sm mt-2">
            Don't have an account?
            <Link href="/auth/register" className="text-blue-600 hover:underline ml-1">
              Create One
            </Link>
          </p>
        </div>

        {/* الصورة */}
        <div className="md:w-1/2 w-full mt-10 flex justify-center items-center">
          <Image
            src="/images/login.webp"
            alt="Login Illustration"
            width={613}
            height={500}
            className="hidden md:block"
            priority
          />
        </div>
      </div>
    </div>
  );
}
