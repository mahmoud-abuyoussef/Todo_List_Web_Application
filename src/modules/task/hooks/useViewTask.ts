import { useParams } from "next/navigation";
import { viewTask } from "@/modules/task/fakeData/viewTask";

export function useViewTask() {
  const params = useParams();
  const taskId = Number(params.taskId);
  const task = viewTask.find(t => t.id === taskId);
  return { task, taskId };
}
