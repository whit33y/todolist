import { updateTodo } from "@/lib/action";
import { PencilIcon } from "@heroicons/react/24/outline";
export default function EditForm({ nameValue, id }: any) {
  const valueName = nameValue;
  return (
    <form action={updateTodo}>
      <div className="flex justify-center">
        <input
          name="text"
          id="text"
          placeholder="Type here..."
          type="text"
          className="rounded-md border mr-16"
          defaultValue={`${valueName}`}
          maxLength={26}
        />
        <input
          name="id"
          id="id"
          type="text"
          defaultValue={`${id}`}
          className="hidden"
        />
        <button
          type="submit"
          className="flex border-b-2 ml-2 border-gray-200 mb-1 hover:border-gray-300"
        >
          Apply
          <PencilIcon className="w-4 mt-1" />
        </button>
      </div>
    </form>
  );
}
