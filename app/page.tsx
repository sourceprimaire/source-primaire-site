import { SiteShell } from '@/components/site-shell';

export default function Home() {
  return (
    <SiteShell>
      <main className="page-content home-content">
        <h1 className="visually-hidden">Source Primaire</h1>
        <figure className="home-figure">
          <img
            src="/assets/pages/recherche.webp"
            alt="Composition d’archive associant photographie, verre et matière"
            width="1500"
            height="1793"
          />
        </figure>
        <p className="home-statement">Toute collection raconte une histoire</p>
      </main>
    </SiteShell>
  );
}
