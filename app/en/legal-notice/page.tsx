import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'Legal notice',
  robots: { index: false, follow: true },
};

export default function EnglishLegalNoticePage() {
  return (
    <SiteShell locale="en" alternateHref="/mentions-legales/">
      <main className="page-content standard-page legal-page">
        <article className="legal-copy">
          <h1 className="eyebrow">LEGAL NOTICE</h1>
          <p className="legal-draft">
            Working draft. The information indicated below must be completed before the website
            is published.
          </p>

          <section>
            <h2>Website publisher</h2>
            <p>
              Source Primaire presents its research, inventory, documentation and publishing
              activities.
            </p>
            <dl>
              <dt>Name or registered name of the publisher</dt>
              <dd>To be confirmed.</dd>
              <dt>Legal status and registration</dt>
              <dd>To be completed according to the publisher’s status.</dd>
              <dt>Business address and telephone number</dt>
              <dd>To be completed.</dd>
              <dt>Share capital and VAT number, where applicable</dt>
              <dd>To be confirmed.</dd>
              <dt>Publication director</dt>
              <dd>To be confirmed.</dd>
            </dl>
            <p>
              Contact:{' '}
              <a href="mailto:sourceprimaire.fr@gmail.com">sourceprimaire.fr@gmail.com</a>
            </p>
          </section>

          <section>
            <h2>Hosting</h2>
            <p>
              The name, address and telephone number of the host of the published version will
              be specified before it goes online.
            </p>
          </section>

          <section>
            <h2>Texts, images and publications</h2>
            <p>
              Rights to the texts, photographs, documents and publications presented belong to
              their respective authors or rights holders. For any request concerning
              reproduction or reuse, please contact Source Primaire. Exceptions provided for by
              law remain applicable.
            </p>
          </section>

          <section>
            <h2>Personal data</h2>
            <p>
              Information concerning the contact form and personal data is provided on the{' '}
              <a href="/en/privacy/">Privacy</a> page.
            </p>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}
