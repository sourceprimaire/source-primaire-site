import type { ReactNode } from 'react';

const navigation = [
  { href: '/recherche/', label: 'RECHERCHES' },
  { href: '/editions/', label: 'ÉDITIONS' },
  { href: '/a-propos/', label: 'À PROPOS' },
  { href: '/contact/', label: 'CONTACT' },
];

type SiteShellProps = {
  active?: string;
  children: ReactNode;
};

export function SiteShell({ active, children }: SiteShellProps) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="site-name" href="/" aria-label="Source Primaire, accueil">
          <span>SOURCE PRIMAIRE</span>
        </a>
      </header>

      <nav className="site-nav" aria-label="Navigation principale">
        <ol>
          {navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href} aria-current={active === item.href ? 'page' : undefined}>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {children}

      <footer className="site-footer">
        <span>© 2026 SOURCE PRIMAIRE</span>
      </footer>
    </div>
  );
}
