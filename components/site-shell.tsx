import type { ReactNode } from 'react';

export type Locale = 'fr' | 'en';

const navigation = {
  fr: [
    { href: '/recherche/', label: 'INVENTAIRES' },
    { href: '/editions/', label: 'ÉDITIONS' },
    { href: '/a-propos/', label: 'À PROPOS' },
    { href: '/outils/', label: 'OUTILS' },
    { href: '/contact/', label: 'CONTACT' },
  ],
  en: [
    { href: '/en/inventories/', label: 'INVENTORIES' },
    { href: '/en/editions/', label: 'EDITIONS' },
    { href: '/en/about/', label: 'ABOUT' },
    { href: '/en/tools/', label: 'TOOLS' },
    { href: '/en/contact/', label: 'CONTACT' },
  ],
};

type SiteShellProps = {
  active?: string;
  alternateHref?: string;
  children: ReactNode;
  locale?: Locale;
};

export function SiteShell({ active, alternateHref = '/en/', children, locale = 'fr' }: SiteShellProps) {
  const isFrench = locale === 'fr';

  return (
    <div className="site-shell" lang={locale}>
      <header className="site-header">
        <a
          className="site-name"
          href={isFrench ? '/' : '/en/'}
          aria-label={isFrench ? 'Source Primaire, accueil' : 'Source Primaire, home'}
        >
          <span>SOURCE PRIMAIRE</span>
          <span className="site-signature-dot" aria-hidden="true" />
        </a>
      </header>

      <nav className="site-nav" aria-label={isFrench ? 'Navigation principale' : 'Main navigation'}>
        <ol>
          {navigation[locale].map((item) => (
            <li key={item.href}>
              <a href={item.href} aria-current={active === item.href ? 'page' : undefined}>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ol>
        <div className="language-switch" aria-label={isFrench ? 'Langue' : 'Language'}>
          {isFrench ? (
            <>
              <span aria-current="page">FR</span>
              <span aria-hidden="true">/</span>
              <a href={alternateHref} lang="en">EN</a>
            </>
          ) : (
            <>
              <a href={alternateHref} lang="fr">FR</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">EN</span>
            </>
          )}
        </div>
      </nav>

      {children}

      <footer className="site-footer">
        <span>© 2026 SOURCE PRIMAIRE</span>
      </footer>
    </div>
  );
}
