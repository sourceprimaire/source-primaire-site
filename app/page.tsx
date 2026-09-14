import { SiteShell } from '@/components/site-shell';

export default function Home() {
  return (
    <SiteShell alternateHref="/en/">
      <main className="page-content home-content">
        <h1 className="visually-hidden">Source Primaire</h1>
        <figure className="home-figure">
          <img
            src="/assets/pages/editions-photo-soft-v2.png"
            alt="Livre cousu à la main, pages translucides et carré rouge"
            width="1254"
            height="1254"
          />
        </figure>
      </main>
    </SiteShell>
  );
}
