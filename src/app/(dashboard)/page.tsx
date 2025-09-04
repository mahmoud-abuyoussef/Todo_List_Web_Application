import TodoTasksWedgit from "@/modules/task/components/todoTasks/TodoTasksWedgit";
import CompletedTaskWedgit from "@/modules/auth/task/components/CompletedTaskWidget";
export default function Dashboard() {
  return (
    <>
      <TodoTasksWedgit />
      <CompletedTaskWedgit />
    </>
  );
}
