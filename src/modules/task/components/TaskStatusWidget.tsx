"use client";
import { GoChecklist } from "react-icons/go";
import type { StatusTask } from "@/modules/task/types/taskTyps";

export default function TaskStatusWidget() {
  const tasks: StatusTask[] = [
    { label: "Completed", value: 70, color: "bg-status-completed" },
    { label: "In Progress", value: 40, color: "bg-status-inprogress" },
    { label: "Not Started", value: 20, color: "bg-status-notstarted" },
  ];

  return (
    <div className="bg-background max-h-fit min-h-fit w-full max-w-2xl rounded-2xl p-6 shadow-md">
      <div className="mb-6 flex items-center gap-3">
        <GoChecklist className="text-text-muted h-6 w-6" />
        <h3 className="text-main-color text-xl font-semibold">Task Status</h3>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {tasks.map((t, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="relative flex h-[190px] w-[190px] items-center justify-center rounded-full">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(var(--${t.color.replace("bg-", "color-")}) ${t.value * 3.6}deg, #e5e7eb 0)`,
                }}
              >
                <div className={`${t.color} invisible`} />
              </div>
              <div className="bg-background absolute inset-6 rounded-full" />
              <span className="z-10 text-[20px] font-medium">{t.value}%</span>
            </div>

            <div className="flex items-center gap-2">
              <span className={`h-3 w-3 rounded-full ${t.color}`} />
              <span className="text-text-muted font-medium">{t.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
