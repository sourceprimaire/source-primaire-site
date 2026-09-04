import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Source Primaire',
    template: '%s | Source Primaire',
  },
  description:
    'Inventaire, documentation, édition et valorisation des œuvres, objets et collections.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
