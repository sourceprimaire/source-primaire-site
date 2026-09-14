import type { Edition } from '@/lib/editions';
import type { Locale } from '@/components/site-shell';

export function EditionCard({ edition, locale = 'fr' }: { edition: Edition; locale?: Locale }) {
  return (
    <a
      className="edition-card"
      href={`${locale === 'en' ? '/en' : ''}/editions/${edition.slug}/`}
    >
      <figure>
        <img src={edition.cover} alt={edition.title} />
      </figure>
      <div className="edition-caption">
        <span>{edition.index}&nbsp;{edition.title}</span>
        <span>{edition.type}</span>
      </div>
    </a>
  );
}
