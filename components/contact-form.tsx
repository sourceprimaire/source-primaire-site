'use client';

import type { FormEvent } from 'react';

export function ContactForm() {
  function openEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const firstName = String(data.get('Prénom') ?? '');
    const lastName = String(data.get('Nom') ?? '');
    const email = String(data.get('Email') ?? '');
    const details = String(data.get('Détails') ?? '');
    const subject = 'Demande depuis source-primaire.fr';
    const body = [
      `Prénom : ${firstName}`,
      `Nom : ${lastName}`,
      `Email : ${email}`,
      '',
      details,
    ].join('\n');

    window.location.href = `mailto:sourceprimaire.fr@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={openEmail}>
      <div className="field-row">
        <label>
          <span>PRÉNOM</span>
          <input type="text" name="Prénom" autoComplete="given-name" required />
        </label>
        <label>
          <span>NOM</span>
          <input type="text" name="Nom" autoComplete="family-name" required />
        </label>
      </div>
      <label>
        <span>EMAIL</span>
        <input type="email" name="Email" autoComplete="email" required />
      </label>
      <label>
        <span>DÉTAILS</span>
        <textarea name="Détails" rows={3} required />
      </label>
      <button type="submit">ENVOYER</button>
    </form>
  );
}
