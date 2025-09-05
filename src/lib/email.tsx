"use server";

import { Resend } from "resend";
import { render } from "@react-email/render";
import { EmailTemplate } from "@/components/ui/email-template";
import { formSchema } from "./schemas";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY!);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  console.log("Sending email with data:", emailFormData);

  // confirmation email for the client
  const confirmationHtml = await render(
    <EmailTemplate
      firstName={emailFormData.firstName}
      lastName={emailFormData.lastName}
      message={emailFormData.message}
    />
  );

  try {
    // ✅ 1) Confirmation email to the customer
    await resend.emails.send({
      from: `Feldhoff Solar <${process.env.RESEND_FROM_EMAIL}>`,
      to: [emailFormData.email],
      subject: "Danke für Ihre Anfrage",
      html: confirmationHtml,
    });

    // ✅ 2) Notification email to you (IONOS mailbox)
    await resend.emails.send({
      from: `Feldhoff Solar <${process.env.RESEND_FROM_EMAIL}>`,
      to: [process.env.RESEND_FROM_EMAIL!], // your IONOS address
      subject: "Neue Anfrage über das Kontaktformular",
      html: `
        <p><strong>Von:</strong> ${emailFormData.firstName} ${emailFormData.lastName}</p>
        <p><strong>Email:</strong> ${emailFormData.email}</p>
        <p><strong>Telefon:</strong> ${emailFormData.phone || "-"}</p>
        <p><strong>Nachricht:</strong><br/>${emailFormData.message}</p>
      `,
      replyTo: emailFormData.email, // ✅ lets you reply directly to the customer
    });

    console.log("Emails sent successfully!");
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
};
