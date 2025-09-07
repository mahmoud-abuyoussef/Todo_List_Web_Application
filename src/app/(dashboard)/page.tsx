import TaskStatusWidget from "@/modules/task/components/TaskStatusWidget";
import TodoTasksWedgit from "@/modules/task/components/todoTasks/TodoTasksWedgit";
import CompletedTaskWedgit from "@/modules/task/components/CompletedTaskWidget";

export default function Dashboard() {
  return (
    <>
      <TodoTasksWedgit />
      <TaskStatusWidget />
      <CompletedTaskWedgit />
    </>
  );
}
