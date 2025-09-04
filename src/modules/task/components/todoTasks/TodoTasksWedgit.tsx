import ToDayTasks from "./ToDayTasks";
import LastDayTasksItem from "./LastDayTasks";
import { toDaytaskItems } from "@/modules/task/fakeData/todayTasks";
import { lastDayTaskItems } from "@/modules/task/fakeData/lastDayTasks";

export default function TodoTasksWedgit() {
  return (
    <div className="mt-12 w-full p-3.5 lg:mr-4">
      <h2 className="pb-6 text-xl font-semibold sm:text-3xl md:text-4xl">Welcome back, Sundar 👋</h2>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:max-w-[466px] min-lg:flex-nowrap">
        <div className="bg-background rounded-[14px] px-[23px] py-5 shadow max-lg:w-full lg:mx-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="text-text-muted text-xl font-medium" width="29" height="33" viewBox="0 0 29 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23.8511 26.2698L22.4285 25.4499V22.6013C22.4285 22.5211 22.3965 22.4442 22.3397 22.3875C22.2829 22.3308 22.2059 22.299 22.1255 22.299C22.0452 22.299 21.9681 22.3308 21.9113 22.3875C21.8545 22.4442 21.8226 22.5211 21.8226 22.6013V25.6246C21.8226 25.6777 21.8366 25.7298 21.8631 25.7758C21.8897 25.8218 21.928 25.8599 21.974 25.8865L23.5482 26.7935C23.5825 26.8135 23.6205 26.8266 23.66 26.8319C23.6994 26.8372 23.7395 26.8346 23.778 26.8243C23.8164 26.814 23.8524 26.7962 23.8839 26.7719C23.9154 26.7476 23.9418 26.7173 23.9614 26.6828C24.0016 26.6134 24.0126 26.531 23.9919 26.4535C23.9713 26.3761 23.9206 26.31 23.8511 26.2698ZM22.1255 19.578C18.7791 19.578 16.0664 22.2851 16.0664 25.6246C16.0664 28.9642 18.7791 31.6713 22.1255 31.6713C25.4701 31.6676 28.181 28.9624 28.1846 25.6246C28.1846 22.2851 25.4719 19.578 22.1255 19.578ZM22.1255 31.0666C21.4094 31.0666 20.7003 30.9259 20.0387 30.6524C19.3771 30.3789 18.7759 29.978 18.2695 29.4727C17.7631 28.9674 17.3615 28.3674 17.0874 27.7072C16.8134 27.0469 16.6723 26.3393 16.6723 25.6246C16.6723 24.91 16.8134 24.2023 17.0874 23.5421C17.3615 22.8818 17.7631 22.2819 18.2695 21.7766C18.7759 21.2712 19.3771 20.8704 20.0387 20.5969C20.7003 20.3234 21.4094 20.1827 22.1255 20.1827C23.5713 20.1843 24.9574 20.7581 25.9797 21.7784C27.0021 22.7986 27.5771 24.1818 27.5787 25.6246C27.5787 27.0679 27.0042 28.4521 25.9815 29.4727C24.9588 30.4933 23.5718 31.0666 22.1255 31.0666Z"
                  fill="#888888"
                  stroke="#A1A3AB"
                />
                <path
                  d="M15.8909 2.39129H13.5073V1.59419C13.506 1.17178 13.3382 0.767019 13.0404 0.468322C12.7427 0.169626 12.3392 0.00126159 11.9182 0H5.56182C5.14075 0.00126159 4.73729 0.169626 4.43955 0.468322C4.14181 0.767019 3.97398 1.17178 3.97273 1.59419V2.39129H1.58909C1.16802 2.39255 0.764563 2.56092 0.466823 2.85961C0.169083 3.15831 0.00125755 3.56307 0 3.98549V20.7245C0.00125755 21.1469 0.169083 21.5517 0.466823 21.8504C0.764563 22.1491 1.16802 22.3175 1.58909 22.3187H8.74V20.7245H1.58909V3.98549H3.97273V6.37678H13.5073V3.98549H15.8909V12.7536H17.48V3.98549C17.4787 3.56307 17.3109 3.15831 17.0132 2.85961C16.7154 2.56092 16.312 2.39255 15.8909 2.39129ZM11.9182 4.78258H5.56182V1.59419H11.9182V4.78258Z"
                  fill="#A1A3AB"
                />
              </svg>
              <span className="text-main-color text-[15px] font-medium">To-Do</span>
            </div>
            <button className="text-text-muted flex cursor-pointer items-center gap-1">
              <p className="text-main-color text-3xl font-medium">+</p> <p>Add Task</p>
            </button>
          </div>

          <div className="flex items-center gap-0.5 pt-2.5 pb-[18px]">
            <p className="pr-[13px] text-sm">20 June</p>
            <li className="text-text-muted text-sm"></li>
            <p className="text-text-muted ml-[-12px] text-sm">Today</p>
          </div>

          <div>
            {toDaytaskItems?.map(toDaytaskItems => (
              <ToDayTasks key={toDaytaskItems.id} toDayTasks={toDaytaskItems} />
            ))}

            <hr className="text-border my-8" />

            {lastDayTaskItems?.map(lastDayTasksItems => (
              <LastDayTasksItem key={lastDayTasksItems.id} lastDayTasks={lastDayTasksItems} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
