import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = { title: 'Inventories' };

const steps = [
  {
    number: '01 -',
    title: 'CATALOGUE',
    text: 'We undertake the systematic cataloguing of artworks, archives, precious objects and objects of memory to establish a precise understanding of each collection. Every item is identified, described and photographed. This initial assessment provides the essential basis for any programme of research, transmission or presentation.',
  },
  {
    number: '02 -',
    title: 'DOCUMENT',
    text: 'We research, gather and verify the information needed to reconstruct the history of artworks, objects and collections, document them and place them in context. Sources, archives, correspondence, publications, provenance histories and oral accounts are cross-referenced to establish the facts and deepen knowledge of each item. The information gathered is structured and linked to images, files and metadata to form a coherent, usable documentary corpus.',
  },
  {
    number: '03 -',
    title: 'PRESERVE',
    text: 'We advise clients on the conditions required to preserve artworks and objects over time, providing recommendations suited to their nature and condition. We also help ensure the long-term preservation of archives by organising and digitising them. These digital resources make the archives easier to consult and help ensure they can be passed on over time.',
  },
  {
    number: '04 -',
    title: 'TRANSMIT',
    text: 'A collection may be intended for different audiences and serve different purposes. We devise the appropriate means of sharing it: inventories, research files, catalogues or websites, tailored to each client’s needs. Whether preparing the transfer of an estate, passing on a family history or opening a collection to researchers, every project is conceived with respect for its history and individual character.',
  },
  {
    number: '',
    title: 'COLLECTION MANAGEMENT',
    text: 'In addition to these specific assignments, Source Primaire also supports clients in the long-term management of their collections: tracking the movement of artworks, deposits and loans; supporting the organisation of exhibitions and events, from transport to installation; gathering publications and press coverage relating to works in the collection; creating a dedicated website to present the collection; and managing its presence on social media.',
  },
];

export default function EnglishInventoriesPage() {
  return (
    <SiteShell
      locale="en"
      active="/en/inventories/"
      alternateHref="/recherche/"
    >
      <main className="page-content research-page">
        <div className="research-composition">
          <figure className="research-sequence">
            <img
              src="/assets/pages/recherche-photo-soft-v2.png"
              alt="Archival photograph, translucent paper and a black square"
              width="1024"
              height="1024"
            />
          </figure>

          <div className="research-intro-copy">
            <h1 className="section-heading">
              <span>INVENTORIES</span>
            </h1>
            <p className="research-lead">
              We assist collectors, artists, families, rights holders, researchers,
              institutions and businesses with the inventory, documentation, conservation and
              transmission of their collections, archives and heritage. Through a rigorous
              methodology, each item reveals its history and value.
            </p>
            <section className="research-index" aria-label="Method">
              {steps.map((step) => (
                <article
                  className={`research-index-item${step.number ? '' : ' research-index-section'}`}
                  key={step.number}
                >
                  <div
                    className={`research-index-heading${step.number ? '' : ' research-index-heading-section'}`}
                  >
                    {step.number && <span>{step.number}</span>}
                    <span>{step.title}</span>
                  </div>
                  <p>{step.text}</p>
                </article>
              ))}
            </section>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
