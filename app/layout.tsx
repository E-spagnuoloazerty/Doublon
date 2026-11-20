import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["600", "800"],
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500", "600"],
});

const titre = "Doublon : les logiciels que vous payez et que personne n'utilise";
const description =
  "Repérez les comptes inutilisés et les doublons dans vos abonnements logiciels. Pour les entreprises de 10 à 100 personnes. 79 €/mois, remboursé si ça ne vous fait rien économiser.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://doublon-gkgi.vercel.app"
  ),
  title: titre,
  description,
  openGraph: {
    title: titre,
    description,
    locale: "fr_FR",
    type: "website",
    siteName: "Doublon",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${plex.variable}`}>
      <body>
  {children}
  <Analytics />
</body>

    </html>
  );
}
