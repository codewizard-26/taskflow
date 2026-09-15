import TaskCounter from "./TaskCounter";

export default function TasksPage() {
  console.log("Hello from Tasks Page");

  return (
    <main>
      <h1>Tasks</h1>
      <p>Check your terminal.</p>
      <TaskCounter />
    </main>
  );
}