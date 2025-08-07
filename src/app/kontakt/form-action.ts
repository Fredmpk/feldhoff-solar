// app/contact/form-action.ts
"use server";

import { send } from "@/lib/email";
import { formSchema } from "@/lib/schemas";

export async function sendAction(formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  const result = formSchema.safeParse(data);
  if (!result.success) {
    throw new Error("Ungültige Eingabe");
  }

  await send(result.data);
}
