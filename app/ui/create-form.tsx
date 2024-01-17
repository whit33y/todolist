import { createTodo } from "@/lib/action";
import { PencilIcon } from "@heroicons/react/24/outline";
export default function Form() {
  return (
    <form action={createTodo}>
      <div className="flex justify-center">
        <label htmlFor="text" className="mx-2 font-bold">
          Add new todo{" "}
        </label>
        <input
          name="text"
          id="text"
          placeholder="Type here..."
          type="text"
          className="rounded-md border mx-2"
        />
        <button type="submit" className="flex font-bold">
          Add todo <PencilIcon className="w-5" />
        </button>
      </div>
    </form>
  );
}
