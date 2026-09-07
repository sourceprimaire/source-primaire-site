import { SiteShell } from '@/components/site-shell';

export default function Home() {
  return (
    <SiteShell>
      <main className="page-content home-content">
        <h1 className="visually-hidden">Source Primaire</h1>
        <figure className="home-figure">
          <img
            src="/assets/pages/home-paper-red-v1.webp"
            alt="Papiers d’archive translucides et fragment rouge sur fond ivoire"
            width="1254"
            height="1254"
          />
        </figure>
      </main>
    </SiteShell>
  );
}
