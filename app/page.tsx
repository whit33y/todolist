import { fetchTodos, deleteTodo } from "@/lib/action";
import Form from "./ui/create-form";
import { DeleteTodo } from "./ui/buttons";

export default async function Home() {
  const todos = await fetchTodos();
  return (
    <main className="flex flex-col items-center">
      <div>
        <h1 className="text-3xl text-center font-bold ">Todo list 📝</h1>
        <Form />
        <p className="text-lg text-center font-semibold">Your todos</p>
      </div>
      <ul className="block align-center w-80">
        {todos?.map((todo) => (
          <li key={todo.id} className="flex justify-between">
            <p>{todo.name}</p>
            <DeleteTodo id={todo.id} />
          </li>
        ))}
      </ul>
    </main>
  );
}
