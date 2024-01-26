import { fetchTodos } from "@/lib/action";
import Form from "./ui/create-form";
import { DeleteTodo, EditTodo } from "./ui/buttons";
import EditForm from "./ui/edit-form";

export default async function Home() {
  const todos = await fetchTodos();
  return (
    <main className="flex flex-col items-center">
      <div className="bg-purple-200 border rounded-lg shadow-sm m-4 p-2 w-96">
        <h1 className="text-2xl text-center font-bold mb-2">Todo list 📝</h1>
        <Form />
      </div>
      <ul className="block align-center w-96 bg-white rounded-lg shadow-sm m-2 p-2">
        {todos?.map((todo) => (
          <li key={todo.id} className="flex justify-between">
            <p>{todo.name}</p>
            <div className="flex">
              <EditTodo id={todo.id} edit={todo.edit} />
              <div className={todo.edit ? "block" : "hidden"}>
                <EditForm nameValue={todo.name} id={todo.id} />
              </div>
              <DeleteTodo id={todo.id} />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
