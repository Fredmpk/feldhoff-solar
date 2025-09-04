import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  message: string;
}

export function EmailTemplate({
  firstName,
  lastName,
  message,
}: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.5" }}>
      <h1>
        Guten Tag {firstName} {lastName},
      </h1>

      <p>
        vielen Dank für Ihre Nachricht – und Glückwunsch zu Ihrem Interesse,
        etwas Gutes für die Umwelt <em>und</em> Ihren Geldbeutel zu tun!
      </p>
      <p>
  Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich persönlich bei Ihnen.
</p>
      <p>
        Mit sonnigen Grüßen
        <br />
        Töge Feldhoff
        <br />
        i.A. Feldhoff Solar
      </p>

      <p>
        <strong>Ihre Anfrage:</strong>
      </p>
      <p>{message}</p>
    </div>
  );
}
