import type {ReactNode} from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Providers from "@/providers";
import {unstable_setRequestLocale} from 'next-intl/server';
import {NextIntlClientProvider, useMessages} from 'next-intl';
import "../globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Adrián Gaitán",
  description: "Adrián Fernando Gaitán Londoño personal portfolio, Adrián is a Full Stack developer in React and Node.js, he is also a software engineer and a computer science student. He is passionate about technology and software development. He is a self-taught person and he is always learning new things. He is a person who loves to work in a team and he is always looking for new challenges. He is a person who loves to work in a team and he is always looking for new challenges. He is a person who loves to work in a team and he is always looking for new challenges. He is a person who loves to work in a team and he is always looking for new challenges. He is a person who loves to work in a team and he is always looking for new challenges. He is a person who loves to work in a team and he is always looking for new challenges. He is a person who loves to work in a team and he is always looking for new challenges. He is a person who loves to work in a team and he is always looking for new challenges. He is a person who loves to work in a team and he is always looking for new challenges. He is a person who loves to work in a team and he is always looking for new challenges.",
  keywords: ["Adrián", "Sitio web de Adrián", "adrian", "Adrián Gaitán", "Adrián FullStack Developer", "Portafolio de Adrian", "adrian gaitan", "desarrollador full stack", "Adrián Gaitán Engineer"],
  authors: {name: "Adrián Gaitán", url: "https://www.adriangaitan.engineer/"},
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    title: 'Adrián Gaitán',
    url: 'https://adriangaitan.engineer/',
    description: 'Adrián Fernando Gaitán Londoño personal portfolio, Adrián is a Full Stack developer in React and Node.js, he is also a software engineer and a computer science student. He is passionate about technology and software development. He is a self-taught person and he is always learning new things. He is a person who loves to work in a team and he is always looking for new challenges.',
    siteName: 'Adrián Gaitán',
    images: ['https://adriangaitan.engineer/assets/face9-55fa287d.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adrián Gaitán',
    description: 'Adrián Fernando Gaitán Londoño personal portfolio, Adrián is a Full Stack developer in React and Node.js, he is also a software engineer and a computer science student. He is passionate about technology and software development. He is a self-taught person and he is always learning new things. He is a person who loves to work in a team and he is always looking for new challenges.',
    creator: '@adriancho91s',
    creatorId: '@adriancho91s',
    images: ['https://adriangaitan.engineer/assets/face9-55fa287d.webp'],
  },
};

const supportLocales = ["en", "es"];

export function generateStaticParams() {
  return supportLocales.map((locale) => ({locale}));
}

export default function RootLayout({children, params: {locale}}: Readonly<{
  children: ReactNode;
  params: {
    locale: string;
  }
}>) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale}>
    <body className={inter.className}>
    <NextIntlClientProvider messages={messages}>
      <Providers>
        {children}
      </Providers>
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
