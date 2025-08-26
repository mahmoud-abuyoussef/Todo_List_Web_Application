import { GrTask } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { BiTask, BiSolidHelpCircle } from "react-icons/bi";

export const sidebarLinks = [
  {
    icon: <BsFillGrid1X2Fill />,
    title: "Dashboard",
    path: "/",
  },
  {
    icon: <BiTask />,
    title: "Vital Task",
    path: "/vitaltask",
  },
  {
    icon: <GrTask />,
    title: "Task Categories",
    path: "/taskcategories",
  },
  {
    icon: <IoMdSettings />,
    title: "Settings",
    path: "/settings",
  },
  {
    icon: <BiSolidHelpCircle />,
    title: "Help",
    path: "/help",
  },
];
