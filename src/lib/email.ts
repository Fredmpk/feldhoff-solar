"use server";

import { formSchema } from "./schemas";
import { z } from "zod";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/ui/email-template";
import { createElement } from "react";

const resend = new Resend(process.env.RESEND_API_KEY!);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    await resend.emails.send({
      from: `Acme <${process.env.RESEND_FROM_EMAIL}>`,
      to: [emailFormData.email],
      subject: "Danke für Ihre Anfrage",
      react: EmailTemplate({
        firstName: emailFormData.firstName,
      }),
    });
  } catch (error) {
    // Log oder Error Handling
    throw error;
  }
};
