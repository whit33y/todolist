export default function EditForm({ nameValue }: any) {
  return (
    <form>
      <div className="flex justify-center">
        <input
          name="text"
          id="text"
          placeholder="Type here..."
          type="text"
          className="rounded-md border mx-2"
          value={`${nameValue}`}
        />
        <button type="submit" className="flex font-bold">
          Apply
        </button>
      </div>
    </form>
  );
}
