"use client";
import { createTodo } from "@/lib/action";
import { PencilIcon } from "@heroicons/react/24/outline";
export default function Form() {
  return (
    <form action={createTodo}>
      <label htmlFor="text">Your new todo:</label>
      <input name="text" id="text" placeholder="Write here" type="text" />

      <button type="submit">
        Add todo <PencilIcon className="w-5" />
      </button>
    </form>
  );
}
