"use server";

import { Resend } from "resend";
import { render } from "@react-email/render";
import { EmailTemplate } from "@/components/ui/email-template";
import { formSchema } from "./schemas";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY!);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  console.log("Sending email with data:", emailFormData);

  // Await the render since it returns a Promise<string>
  const html = await render(
    <EmailTemplate
      firstName={emailFormData.firstName}
      lastName={emailFormData.lastName}
      message={emailFormData.message}
    />
  );

  try {
    await resend.emails.send({
      from: `Acme <${process.env.RESEND_FROM_EMAIL}>`,
      to: [emailFormData.email],
      subject: "Danke für Ihre Anfrage",
      html, // now this is a string
    });
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
};
