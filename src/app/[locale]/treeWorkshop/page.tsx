import React from 'react';
import {Metadata} from "next";
import Link from "next/link";

const shortenedLink = 'https://drive.google.com/drive/folders/1-X2jDBnjREeiWcCLza69iEZLuGM_43S7';

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(shortenedLink),
    title: `Arboles prueba escritorio, segunda parte | Adrian Gaitan`,
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

const ShortenedLinkPage = () => {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <h1>Arboles Prueba Escritorio, segunda prueba</h1>
      <Link href={shortenedLink}>Link: https://drive.google.com/drive/folders/1-X2jDBnjREeiWcCLza69iEZLuGM_43S7</Link>
      <p>Type: Google Drive Folder</p>
      <p>Owner: Adrián Gaitán</p>
    </div>
    </main>
  );
};

export default ShortenedLinkPage;