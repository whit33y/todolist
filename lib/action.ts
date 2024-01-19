"use server";
import { sql } from "@vercel/postgres";
import { Todos } from "./defintions";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTodo(formData: FormData) {
  const rawFormData = {
    text: formData.get("text"),
  };
  const text = rawFormData.text?.toString();
  const date = new Date().toISOString().split("T")[0];
  try {
    await sql`
          INSERT INTO todos (name, date, edit) VALUES(${text}, ${date}, false)`;
  } catch (error) {
    console.error("Database error: ", error);
  }
  revalidatePath("/");
  redirect("/");
}

export async function deleteTodo(id: string) {
  try {
    await sql`
    DELETE FROM todos WHERE id = ${id}`;
  } catch (error) {
    console.error("Database error:", error);
  }
  revalidatePath("/");
  redirect("/");
}

export async function updateTodo(formData: FormData) {
  const rawFormData = {
    text: formData.get("text"),
  };
  const text = rawFormData.text?.toString();
  try {
    await sql`
     UPDATE todos
    SET name = ${text}, edit = false
    WHERE id = '8bd1719e-1e04-4817-ab40-d1b09ed702c2'`;
  } catch (error) {
    console.error("Database error:", error);
  }
  revalidatePath("/");
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

export async function showEdit(id: string, edit: boolean) {
  try {
    await sql`
    UPDATE todos
    SET edit = ${!edit}
    WHERE id = ${id}
    `;
  } catch (error) {
    return { message: "Db error", error };
  }
  revalidatePath("/");
  redirect("/");
}
