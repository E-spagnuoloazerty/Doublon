"use client";

export default function Erreur({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto max-w-xl px-5 py-16">
      <a href="/" className="font-titre text-2xl font-extrabold">Doublon</a>
      <h1 className="mt-10 font-titre text-4xl font-extrabold leading-tight">
        Un problème est survenu.
      </h1>
      <p className="mt-4 text-lg">
        Ce n'est pas de votre faute. Réessayez, et si le problème continue,
        écrivez-nous à ettorespagnuolo73@gmail.com.
      </p>
      <button
        onClick={() => reset()}
        className="mt-6 block w-full rounded-lg bg-brique px-6 py-4 text-center text-lg font-semibold text-white"
      >
        Réessayer
      </button>
      <a href="/" className="mt-4 block text-center underline">
        Retour à l'accueil
      </a>
    </main>
  );
}
