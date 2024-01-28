import React from "react";
import {
  CheckIcon,
  PencilIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

import { deleteTodo, showEdit } from "@/lib/action";
export function DeleteTodo({ id }: { id: string }) {
  const deleteTodoWithId = deleteTodo.bind(null, id);
  return (
    <form action={deleteTodoWithId}>
      <button className="border-b-2 mb-1 mx-2 flex border-gray-200 hover:border-gray-300">
        <p>finished</p>
        <CheckIcon className="w-4 mt-1" />
      </button>
    </form>
  );
}

export function EditTodo({ id, edit }: { id: string; edit: boolean }) {
  const showEditWithId = showEdit.bind(null, id, edit);
  return (
    <form action={showEditWithId} className={edit ? "hidden" : "flex"}>
      <button className="flex border-b-2 border-gray-200 mb-1 hover:border-gray-300">
        <p>edit</p>
        <PencilIcon className="w-4 mt-1" />
      </button>
    </form>
  )
}

export function AddTodo() {
  return (
    <button
      type="submit"
      className="flex font-bold mt-2 px-4 shadow-sm rounded-md bg-purple-100 hover:shadow-lg"
    >
      New todo
      <PaperAirplaneIcon className="w-4 mt-1" />
    </button>
  );
}
