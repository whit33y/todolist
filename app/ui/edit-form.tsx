import { updateTodo } from "@/lib/action";

export default function EditForm({ nameValue }: any) {
  const valueName = nameValue;
  return (
    <form action={updateTodo}>
      <div className="flex justify-center">
        <input
          name="text"
          id="text"
          placeholder="Type here..."
          type="text"
          className="rounded-md border mx-2"
          defaultValue={`${valueName}`}
        />
        <button type="submit" className="flex font-bold">
          Apply
        </button>
      </div>
    </form>
  );
}
