import Link from 'next/link';
import type { ReactNode } from 'react';

const navigation = [
  { href: '/recherche/', label: 'RECHERCHE' },
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
        <Link className="site-name" href="/" aria-label="Source Primaire, accueil">
          <span>SOURCE PRIMAIRE</span>
        </Link>
      </header>

      <nav className="site-nav" aria-label="Navigation principale">
        <ol>
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} aria-current={active === item.href ? 'page' : undefined}>
                <span>{item.label}</span>
              </Link>
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
