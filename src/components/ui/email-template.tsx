import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
    message: string;
}

export function EmailTemplate({ firstName, lastName, message }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.5" }}>
      <h1>
        Hallo {firstName} {lastName}!
      </h1>
      <p>
        Vielen Dank für Ihre Anfrage. Wir werden melden uns so schnell wie möglich bei Ihnen.
      </p>
      <p>Mit freundlichen Grüßen</p>
      <p>Töge Feldhoff i.A. Feldhoff Solar</p>
      <p>
        <strong>Ihre Anfrage:</strong>
      </p>
      <p>{message}</p>
    </div>
  );
}
