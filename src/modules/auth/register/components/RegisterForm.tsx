import Link from "next/link";
import Image from "next/image";
import { IoMdLock } from "react-icons/io";
import { FaUserPen } from "react-icons/fa6";
import { RiUserFill } from "react-icons/ri";
import { LuUserRoundPen } from "react-icons/lu";
import { MdEmail, MdLockOutline } from "react-icons/md";

export default function RegisterForm() {
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
        <form>
          <div className="flex w-full flex-col gap-3">
            <div className="border-border flex w-full items-center gap-4 rounded-lg border-2 p-2">
              <FaUserPen className="text-xl" />
              <input type="text" placeholder="Enter First Name" className="w-full outline-0" />
            </div>

            <div className="border-border flex w-full items-center gap-4 rounded-lg border-2 p-2">
              <LuUserRoundPen className="text-xl font-extrabold" />
              <input type="text" placeholder="Enter Last Name" className="w-full outline-0" />
            </div>

            <div className="border-border flex w-full items-center gap-4 rounded-lg border-2 p-2">
              <RiUserFill className="text-xl" />
              <input type="text" placeholder="Enter Username" className="w-full outline-0" />
            </div>

            <div className="border-border flex w-full items-center gap-4 rounded-lg border-2 p-2">
              <MdEmail className="text-xl" />
              <input type="email" placeholder="Enter Email" className="w-full outline-0" />
            </div>

            <div className="border-border flex w-full items-center gap-4 rounded-lg border-2 p-2">
              <IoMdLock className="text-xl" />
              <input type="password" placeholder="Enter Password" className="w-full outline-0" />
            </div>

            <div className="border-border flex w-full items-center gap-4 rounded-lg border-2 p-2">
              <MdLockOutline className="text-xl" />
              <input type="password" placeholder="Confirm Password" className="w-full outline-0" />
            </div>

            <div className="flex w-full items-center gap-4">
              <input type="checkbox" className="cursor-pointer outline-0" />
              <span>I agree to all terms</span>
            </div>
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
