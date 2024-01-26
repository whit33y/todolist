import { createTodo } from "@/lib/action";
import { AddTodo } from "./buttons";
export default function Form() {
  return (
    <form action={createTodo}>
      <div className="flex flex-col justify-center items-center mb-2">
        <input
          name="text"
          id="text"
          placeholder="Type your todo..."
          type="text"
          className="rounded-md mx-2"
          maxLength={26}
        />
        <AddTodo />
      </div>
    </form>
  );
}
