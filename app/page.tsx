import { fetchTodos } from "@/lib/action";
import Form from "./ui/create-form";
import { DeleteTodo, EditTodo } from "./ui/buttons";
import EditForm from "./ui/edit-form";
import { Suspense } from "react";
import { BounceLoader } from "react-spinners";

export default async function Home() {
  const todos = await fetchTodos();
  return (
    <main className="flex flex-col items-center">
      <Suspense fallback={<BounceLoader color="#36b7d6" />}>
        <div className="bg-purple-200 border rounded-lg shadow-sm m-4 p-2 w-96 ">
          <h1 className="text-3xl text-center mb-2 text-white">T O D O</h1>
          <Form />
        </div>
      </Suspense>
      <Suspense fallback={<BounceLoader color="#36b7d6" />}>
        <ul className="block align-center w-96 bg-white rounded-lg shadow-md m-2 p-2">
          <p className="text-xl">📌 My todos:</p>

          {todos?.map((todo) => (
            <li key={todo.id} className="flex justify-between border-b-2 mb-1">
              <p className={todo.edit ? "hidden" : "block"}>{todo.name}</p>
              <div className="flex">
                <EditTodo id={todo.id} edit={todo.edit} />
                <div className={todo.edit ? "flex" : "hidden"}>
                  <EditForm nameValue={todo.name} id={todo.id} />
                </div>
                <DeleteTodo id={todo.id} />
              </div>
            </li>
          ))}
        </ul>
      </Suspense>
    </main>
  );
}
