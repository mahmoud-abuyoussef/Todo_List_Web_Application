"use client";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "@/ui/CustomButton";
import { useViewTask } from "../hooks/useViewTask";
import { FaEdit, FaTrash, FaExclamation } from "react-icons/fa";

export default function ViewTask() {
  const { task } = useViewTask();
  if (!task) {
    return <p>Task not found</p>;
  }
  return (
    <div className="border-border mx-3 my-5 w-full rounded-2xl border shadow-2xl sm:mx-7 sm:my-7">
      <div key={task.id} className="flex min-h-[calc(100vh-120px)] flex-col">
        <div className="m-3 flex justify-end">
          <Link href="/" className="cursor-pointer font-semibold">
            Go Back
          </Link>
        </div>
        <div className="p-5">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
            <Image src={task.image} alt={task.title} width={210} height={217} className="rounded-lg object-cover" />
            <div className="flex flex-col gap-2 text-center text-lg sm:text-left">
              <h1 className="text-xl font-semibold sm:text-2xl">{task.title}</h1>
              <p>
                Priority: <span className="text-priority-moderate font-semibold">{task.Priority}</span>
              </p>
              <p>
                Status: <span className="text-status-notstarted font-semibold">{task.status}</span>
              </p>
              <p className="text-border">Created on: {task.date}</p>
            </div>
          </div>
        </div>
        <div className="text-text-muted px-4 pt-4 pb-6 text-lg sm:px-6">
          <p className="mb-4">{task.description}</p>
        </div>
        <div className="mt-auto flex items-center justify-end gap-4 p-4">
          <CustomButton icon={<FaTrash />} />
          <CustomButton icon={<FaEdit />} />
          <CustomButton icon={<FaExclamation />} />
        </div>
      </div>
    </div>
  );
}
