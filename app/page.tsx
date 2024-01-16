import { fetchTodos, deleteTodo } from "@/lib/action";
import Form from "./ui/create-form";
import { DeleteTodo } from "./ui/buttons";

export default async function Home() {
  const todos = await fetchTodos();
  return (
    <main>
      <h1 className="text-3xl text-center font-bold">Todo list 📝</h1>
      <p className="text-lg text-center">Your todos</p>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            {todo.name}
            <DeleteTodo id={todo.id} />
          </li>
        ))}
      </ul>
      <Form />
    </main>
  );
}
