"use client";
import Link from "next/link";
import { MdLogout } from "react-icons/md";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants/sidebarLinks";

export default function Sidebar({ sidebarState }: { sidebarState: boolean }) {
  const pathname = usePathname();

  return (
    <div>
      <aside
        className={`${sidebarState ? "ml-0" : "ml-[-400px] lg:ml-0"} bg-main-color fixed z-50 mt-15 flex h-[calc(100vh-140px)] flex-col justify-between rounded-t-xs rounded-r-lg p-5 transition-all duration-700`}
      >
        <div>
          <div className="mt-[-65px]">
            <div className="mx-auto h-[86px] w-[86px] rounded-full border border-gray-100 bg-white p-[2px] shadow-2xl"></div>

            <div className="my-3 text-center text-white">
              <span className="block text-2xl font-semibold">Sundar Gurung</span>
              <span>sundargurung360@gmail.com</span>
            </div>
          </div>

          <nav>
            <ul>
              {sidebarLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className={`${pathname === link.path ? "text-main-color rounded-[8px] bg-white" : "text-white"} hover:text-main-color flex items-center gap-5 p-5 font-medium hover:rounded-[8px] hover:bg-white`}
                  >
                    <span className="text-2xl">{link.icon}</span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="logout">
          <button className="flex cursor-pointer items-center gap-5 font-medium text-white">
            <MdLogout />
            Logout
          </button>
        </div>
      </aside>
    </div>
  );
}
