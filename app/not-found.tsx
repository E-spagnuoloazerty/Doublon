export default function PageIntrouvable() {
  return (
    <main className="mx-auto max-w-xl px-5 py-16">
      <a href="/" className="font-titre text-2xl font-extrabold">Doublon</a>
      <h1 className="mt-10 font-titre text-4xl font-extrabold leading-tight">
        Cette page n'existe pas.
      </h1>
      <p className="mt-4 text-lg">
        Le lien est peut-être erroné, ou la page a été déplacée.
      </p>
      <a
        href="/"
        className="mt-6 block rounded-lg bg-brique px-6 py-4 text-center text-lg font-semibold text-white"
      >
        Retour à l'accueil
      </a>
    </main>
  );
}
