import Image from "next/image";
import { FaRegCircle } from "react-icons/fa";
import { tasks } from "@/modules/task/fakeData/completedTasks";

export default function CompletedTaskWidget() {
  return (
    <div className="w-full p-6">
      <div className="min-h-[420px] max-w-[423px] rounded-2xl p-6 shadow-lg">
        <div className="mb-6 flex items-center gap-3">
          <div className="">
            <svg width="21" height="23" viewBox="0 0 21 23" fill="none">
              <path
                d="M2.33333 22.5417H18.6667C19.9535 22.5417 21 21.5429 21 20.3146V3.6115C21 2.38326 19.9535 1.38442 18.6667 1.38442H16.3333C16.3333 1.08909 16.2104 0.805853 15.9916 0.597023C15.7728 0.388193 15.4761 0.270874 15.1667 0.270874H5.83333C5.52391 0.270874 5.22717 0.388193 5.00838 0.597023C4.78958 0.805853 4.66667 1.08909 4.66667 1.38442H2.33333C1.0465 1.38442 0 2.38326 0 3.6115V20.3146C0 21.5429 1.0465 22.5417 2.33333 22.5417ZM2.33333 3.6115H4.66667V5.83859H16.3333V3.6115H18.6667V20.3146H2.33333V3.6115Z"
                fill="#A1A3AB"
              />
              <path d="M9.68093 13.3994L7.62296 11.1413L6 12.9221L9.68093 16.9611L15.6574 10.4033L14.0345 8.62244L9.68093 13.3994Z" fill="#A1A3AB" />
            </svg>
          </div>
          <h2 className="text-second-color text-xl font-medium">Completed Task</h2>
        </div>

        {tasks?.map(task => (
          <div key={task.id} className="border-border mb-4 flex items-start gap-4 rounded-xl border px-7 py-3">
            <div className="mb-1">
              <FaRegCircle className="text-status-completed" />
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <h3 className="font-semibold">{task.title}</h3>
                <svg className="ml-auto cursor-pointer" width="16" height="6" viewBox="0 0 16 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.57444 4.53396C3.44398 4.53396 4.14888 3.749 4.14888 2.78071C4.14888 1.81242 3.44398 1.02747 2.57444 1.02747C1.7049 1.02747 1 1.81242 1 2.78071C1 3.749 1.7049 4.53396 2.57444 4.53396Z"
                    stroke="#A1A3AB"
                  />
                  <path
                    d="M8.08518 4.53396C8.95472 4.53396 9.65963 3.749 9.65963 2.78071C9.65963 1.81242 8.95472 1.02747 8.08518 1.02747C7.21564 1.02747 6.51074 1.81242 6.51074 2.78071C6.51074 3.749 7.21564 4.53396 8.08518 4.53396Z"
                    stroke="#A1A3AB"
                  />
                  <path
                    d="M13.5954 4.53396C14.465 4.53396 15.1699 3.749 15.1699 2.78071C15.1699 1.81242 14.465 1.02747 13.5954 1.02747C12.7259 1.02747 12.021 1.81242 12.021 2.78071C12.021 3.749 12.7259 4.53396 13.5954 4.53396Z"
                    stroke="#A1A3AB"
                  />
                </svg>
              </div>
              <div className="mt-1 flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-border flex-1 text-sm">{task.description}</p>
                <Image src={task.image} alt={task.title} width={24} height={20} className="my-5 h-20 w-24 rounded-lg object-cover" />
              </div>
              <div className="mt-1 text-sm">
                Status:
                <span className="text-status-completed font-medium"> {task.status}</span>
              </div>
              <span className="text-border text-xs">{task.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
