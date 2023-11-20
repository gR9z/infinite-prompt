import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { frFR } from '@clerk/localizations';
import { ModalProvider } from '@/components/modal-provider';
import { ToasterProvider } from '@/components/toaster-provider';
import { CrispProvider } from '@/components/crisp-provider';

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
        <CrispProvider />
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
