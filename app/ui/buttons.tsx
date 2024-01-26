import React from "react";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";

import { deleteTodo, showEdit } from "@/lib/action";
export function DeleteTodo({ id }: { id: string }) {
  const deleteTodoWithId = deleteTodo.bind(null, id);
  return (
    <form action={deleteTodoWithId}>
      <button className="border-0 mx-2 flex">
        <p>delete</p>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}

export function EditTodo({ id, edit }: { id: string; edit: boolean }) {
  const showEditWithId = showEdit.bind(null, id, edit);
  return (
    <form action={showEditWithId} className={edit ? "hidden" : "flex"}>
      <button className="flex">
        <p>edit</p>
        <PencilIcon className="w-5" />
      </button>
    </form>
  );
}

export function AddTodo() {
  return (
    <button type="submit" className="flex font-bold mt-2">
      Add todo <PencilIcon className="w-5" />
    </button>
  );
}
