import { fetchTodos } from "@/lib/action";
import Form from "./ui/create-form";
import { DeleteTodo } from "./ui/buttons";
import { PencilIcon } from "@heroicons/react/24/outline";
import EditForm from "./ui/edit-form";

export default async function Home() {
  const todos = await fetchTodos();
  return (
    <main className="flex flex-col items-center">
      <div>
        <h1 className="text-3xl text-center font-bold ">Todo list 📝</h1>
        <Form />
        <p className="text-lg text-center font-semibold">Your todos</p>
      </div>
      <ul className="block align-center w-96">
        {todos?.map((todo) => (
          <li key={todo.id} className="flex justify-between">
            <p>{todo.name}</p>
            <div className="flex">
              <button className="flex">
                <p>edit</p>
                <PencilIcon className="w-5" />
              </button>
              <div className="hidden">
                <EditForm nameValue={todo.name} />
              </div>
              <DeleteTodo id={todo.id} />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
