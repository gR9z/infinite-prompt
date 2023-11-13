import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { frFR } from '@clerk/localizations';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Infinite Prompt',
  description:
    "Mettez l'intelligence artificielle à votre service pour générer une infinité de contenus créatifs. Découvrez des possibilités illimitées en création d'images, vidéos, musiques etc. le tout propulsé par les dernières avancées en IA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={frFR}>
      <html lang="fr">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
