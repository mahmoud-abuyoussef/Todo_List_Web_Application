import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FiSidebar } from "react-icons/fi";
import CustomButton from "@/ui/CustomButton";
import { Dispatch, SetStateAction } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiBellSimpleLight } from "react-icons/pi";

export default function Header({ setSidebarState }: { setSidebarState: Dispatch<SetStateAction<boolean>> }) {
  return (
    <header className="bg-background-navbar sticky top-0 z-50 px-5">
      <div className="container mx-auto flex items-center justify-between py-5">
        <Link href="/" className="font-bold md:text-3xl">
          <span className="text-main-color">Dash</span>board
        </Link>

        <div className="flex items-center justify-between gap-1">
          <div className="rounded-[8px] md:mr-20 md:flex md:bg-white md:shadow">
            <input type="text" placeholder="Search your task here..." className="hidden text-[15px] outline-0 md:block md:w-full md:px-5" />
            <CustomButton icon={<FaSearch />} />
          </div>

          <div className="lg:hidden">
            <CustomButton icon={<FiSidebar onClick={() => setSidebarState(prev => !prev)} />} />
          </div>

          <div>
            <CustomButton icon={<PiBellSimpleLight />} />
          </div>

          <div>
            <CustomButton icon={<FaRegCalendarAlt />} />
          </div>
        </div>
      </div>
    </header>
  );
}
