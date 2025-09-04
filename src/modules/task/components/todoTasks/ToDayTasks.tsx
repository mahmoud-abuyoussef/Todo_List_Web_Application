import Image from "next/image";
import { BiRadioCircle } from "react-icons/bi";
import type { Task } from "@/modules/task/types/taskType";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";

export default function ToDayTasks({ toDayTasks }: { toDayTasks: Task }) {
  const { image, title, description, priority, status, date } = toDayTasks;

  const statusColor = status === "not started" ? "text-status-notstarted" : status === "in progress" ? "text-status-inprogress" : status === "completed" ? "text-status-completed" : "";
  return (
    <div className="border-border bg-background relative mx-2.5 mb-2.5 flex gap-1 rounded-2xl border-1 p-[13px] pt-[9px] xl:justify-between">
      <span>
        <BiRadioCircle className={`mt-[-2px] text-3xl ${statusColor}`} />
      </span>
      <div className="w-full p-1">
        <div>
          <h2 className="mr-9 line-clamp-2 text-[14px] font-bold break-words whitespace-normal sm:w-[232px] sm:text-[16px]">{title}</h2>
        </div>

        <div className="my-1 flex w-fit flex-col-reverse flex-wrap items-center justify-center gap-2 sm:flex-row sm:flex-nowrap sm:items-start sm:justify-between">
          <p className="text-text-muted line-clamp-2 text-sm break-words whitespace-normal sm:w-[232px] sm:pt-2.5">{description}</p>
          <div className="bg-background max-h-[88px] max-w-[88px] rounded-[14px] pt-[7px] sm:mr-5 sm:pt-0">
            <Image className="rounded-[14px]" src={`${image}`} alt={`${title}`} height={88} width={88} />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-4 text-[10px] font-normal text-black">
          <p>
            Priority: <span className="text-priority-moderate">{priority}</span>
          </p>
          <p>
            Status: <span className={`${statusColor} capitalize`}>{status}</span>
          </p>
          <p className="text-text-muted">
            Created on: <span className="tracking-[1px]">{date}</span>
          </p>
        </div>
        <IoEllipsisHorizontalOutline className="text-text-muted absolute top-0 right-2 w-fit rounded text-end text-3xl" />
      </div>
    </div>
  );
}
