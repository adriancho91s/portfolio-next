import { redirect } from 'next/navigation'
import Link from "next/link";
import React from "react";

const shortenedLink = 'https://drive.google.com/drive/folders/1-X2jDBnjREeiWcCLza69iEZLuGM_43S7';

const RedirectPage = async () => {

redirect(shortenedLink);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Arboles Prueba Escritorio, segunda prueba</h1>
        <Link href={shortenedLink}>Link: https://drive.google.com/drive/folders/1-X2jDBnjREeiWcCLza69iEZLuGM_43S7</Link>
        <p>Type: Google Drive Folder</p>
        <p>Owner: Adrián Gaitán</p>
      </div>
      <div>
        Redirecting
        ...
      </div>
    </main>)
};

export default RedirectPage;