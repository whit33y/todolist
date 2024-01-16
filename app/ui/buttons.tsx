import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

import { deleteTodo } from "@/lib/action";
export function DeleteTodo({ id }: { id: string }) {
  const deleteTodoWithId = deleteTodo.bind(null, id);
  return (
    <form action={deleteTodoWithId}>
      <button className="border-0 mx-2">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
