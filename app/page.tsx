import { fetchTodos, deleteTodo } from "@/lib/action";
import Form from "./ui/create-form";
import { DeleteTodo } from "./ui/buttons";

export default async function Home() {
  const todos = await fetchTodos();
  return (
    <main>
      <div>
        <h1 className="text-3xl text-center font-bold">Todo list 📝</h1>
        <Form />
        <p className="text-lg text-center">Your todos</p>
      </div>
      <ul className="block align-center">
        {todos?.map((todo) => (
          <li key={todo.id} className="flex justify-around">
            {todo.name}
            <DeleteTodo id={todo.id} />
          </li>
        ))}
      </ul>
    </main>
  );
}
