import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = { title: 'Tools' };

export default function ToolsPage() {
  return (
    <SiteShell locale="en" active="/en/tools/" alternateHref="/outils/">
      <main className="page-content research-page">
        <div className="research-composition">
          <div className="research-intro-copy tools-copy">
            <section aria-labelledby="meetings-heading">
              <h1 id="meetings-heading" className="section-heading">SOURCE PRIMAIRE — MEETINGS</h1>
              <p className="research-lead">
                We have developed <strong>Source Primaire – Réunions</strong>, a tool designed
                to organise and document professional meetings: preparing agendas, tracking
                meetings, writing minutes and preserving discussions.
                <br />
                Developed to meet our own needs, it will soon be made available to other
                professionals.
              </p>
            </section>
            <section aria-labelledby="inventories-heading">
              <h2 id="inventories-heading" className="section-heading">INVENTORIES &amp; RESEARCH</h2>
              <p className="research-lead">
                For our inventory and research work, we use a version of <strong>Omeka S</strong>,
                adapted and enhanced to meet the specific needs of our projects. This tool
                allows us to structure data, document artworks and objects, and link information,
                images and sources.
              </p>
            </section>
            <section aria-labelledby="websites-heading">
              <h2 id="websites-heading" className="section-heading">WEBSITES</h2>
              <p className="research-lead">
                The websites we design for our clients are hosted on <strong>Cloudflare</strong>.
                This solution is free and requires no subscription. Our clients therefore have
                no monthly hosting fees to pay.
              </p>
            </section>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
