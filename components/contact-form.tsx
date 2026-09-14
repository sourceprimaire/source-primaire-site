'use client';

import type { FormEvent } from 'react';
import type { Locale } from '@/components/site-shell';

type ContactFormProps = {
  locale?: Locale;
};

export function ContactForm({ locale = 'fr' }: ContactFormProps) {
  const isFrench = locale === 'fr';

  function openEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const firstName = String(data.get('Prénom') ?? '');
    const lastName = String(data.get('Nom') ?? '');
    const email = String(data.get('Email') ?? '');
    const details = String(data.get('Détails') ?? '');
    const subject = isFrench
      ? 'Demande depuis source-primaire.fr'
      : 'Enquiry from source-primaire.fr';
    const body = [
      `${isFrench ? 'Prénom' : 'First name'} : ${firstName}`,
      `${isFrench ? 'Nom' : 'Last name'} : ${lastName}`,
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
          <span>{isFrench ? 'PRÉNOM' : 'FIRST NAME'}</span>
          <input type="text" name="Prénom" autoComplete="given-name" required />
        </label>
        <label>
          <span>{isFrench ? 'NOM' : 'LAST NAME'}</span>
          <input type="text" name="Nom" autoComplete="family-name" required />
        </label>
      </div>
      <label>
        <span>EMAIL</span>
        <input type="email" name="Email" autoComplete="email" required />
      </label>
      <label>
        <span>{isFrench ? 'DÉTAILS' : 'DETAILS'}</span>
        <textarea name="Détails" rows={3} required />
      </label>
      <button type="submit">{isFrench ? 'ENVOYER' : 'SEND'}</button>
    </form>
  );
}
