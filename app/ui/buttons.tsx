import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

import { deleteTodo } from "@/lib/action";
export function DeleteTodo({ id }: { id: string }) {
  const deleteTodoWithId = deleteTodo.bind(null, id);
  return (
    <form action={deleteTodoWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
