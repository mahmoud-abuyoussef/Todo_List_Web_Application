import CompletedTaskWedgit from "@/modules/task/components/CompletedTaskWidget";
import TodoTasksWedgit from "@/modules/task/components/todoTasks/TodoTasksWedgit";
export default function Dashboard() {
  return (
    <>
      <TodoTasksWedgit />
      <CompletedTaskWedgit />
    </>
  );
}
