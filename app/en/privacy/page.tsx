import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'Privacy',
  robots: { index: false, follow: true },
};

export default function EnglishPrivacyPage() {
  return (
    <SiteShell locale="en" alternateHref="/confidentialite/">
      <main className="page-content standard-page legal-page">
        <article className="legal-copy">
          <h1 className="eyebrow">PRIVACY</h1>
          <p className="legal-draft">
            Working draft based on the website’s current operation. The identity of the data
            controller, retention periods and arrangements involving service providers must
            still be confirmed before publication.
          </p>

          <section>
            <h2>Controller and contact</h2>
            <p>
              For any question concerning your data, you may write to{' '}
              <a href="mailto:sourceprimaire.fr@gmail.com">sourceprimaire.fr@gmail.com</a>. The
              legal identity of the data controller will be specified in the{' '}
              <a href="/en/legal-notice/">legal notice</a>.
            </p>
          </section>

          <section>
            <h2>Contact form</h2>
            <p>
              The form asks for your first name, last name, email address and the details of your
              request. These fields are required in order to use the form.
            </p>
            <p>
              The “Send” button opens your email application, depending on its configuration.
              You must then confirm that the message should be sent to Source Primaire. The form
              does not transmit this information to a website database. Once sent, the message
              is processed by the email services used, including Gmail for the receiving
              address.
            </p>
          </section>

          <section>
            <h2>Purposes and legal bases</h2>
            <p>
              The information provided is used to understand your request, reply to you and
              prepare discussions concerning a potential project.
            </p>
            <p>
              Proposed legal bases, to be confirmed according to the chosen organisation: steps
              taken at your request prior to entering into a contract for a project, and the
              legitimate interest in responding to other enquiries.
            </p>
          </section>

          <section>
            <h2>Recipients and retention</h2>
            <p>
              The intended recipients are the people responsible for handling your request
              within Source Primaire and the email service providers required for the exchange.
            </p>
            <p>
              Retention periods, deletion procedures and safeguards applicable to any transfers
              outside the European Union must be confirmed before publication.
            </p>
          </section>

          <section>
            <h2>Browsing</h2>
            <p>
              No advertising or audience measurement tool is integrated into the current
              version of the website. Technical logs and any cookies used by hosting services
              must be reviewed for the published version.
            </p>
          </section>

          <section>
            <h2>Your rights</h2>
            <p>
              Subject to the conditions provided by applicable regulations, you may request
              access to, rectification or erasure of your data, as well as restriction of its
              processing. The right to object and the right to data portability apply according
              to the relevant legal basis.
            </p>
            <p>
              You may send your request to{' '}
              <a href="mailto:sourceprimaire.fr@gmail.com">sourceprimaire.fr@gmail.com</a>. You
              may also lodge a complaint with the{' '}
              <a href="https://www.cnil.fr/fr/plaintes">CNIL</a>.
            </p>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}
