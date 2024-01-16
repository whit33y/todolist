"use server";
import { sql } from "@vercel/postgres";
import { Todos } from "./defintions";
import { unstable_noStore as noStore } from "next/cache";
import { redirect } from "next/navigation";

export async function createTodo(formData: FormData) {
  const rawFormData = {
    text: formData.get("text"),
  };
  const text = rawFormData.text?.toString();
  console.log(typeof text);
  try {
    await sql`
          INSERT INTO todos (name) VALUES(${text})`;
  } catch (error) {
    console.error("Database error: ", error);
  }
  redirect("/");
}

export async function deleteTodo(id: string) {
  try {
    await sql`
    DELETE FROM todos WHERE id = ${id}`;
  } catch (error) {
    console.error("Database error:", error);
  }
  redirect("/");
}

export async function fetchTodos() {
  noStore();
  try {
    const data = await sql<Todos>`
          SELECT *
          FROM todos
          `;
    return data.rows;
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Failed to fetch todos");
  }
}
