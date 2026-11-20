export const metadata = { title: "Mentions légales · Doublon" };

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-xl px-5 py-10">
      <a href="/" className="font-titre text-2xl font-extrabold">Doublon</a>
      <h1 className="mt-8 font-titre text-3xl font-extrabold">Mentions légales</h1>

      <h2 className="mt-6 font-titre text-xl font-extrabold">Éditeur du site</h2>
      <p className="mt-2">
        Doublon est édité par [À COMPLÉTER : prénom et nom], entrepreneur
        individuel (micro-entrepreneur).
        <br />SIRET : [À COMPLÉTER]
        <br />Adresse : [À COMPLÉTER]
        <br />Email : ettorespagnuolo73@gmail.com
        <br />Directeur de la publication : [À COMPLÉTER : prénom et nom]
        <br />TVA non applicable, article 293 B du Code général des impôts.
      </p>

      <h2 className="mt-6 font-titre text-xl font-extrabold">Hébergeur</h2>
      <p className="mt-2">
        Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
        Site : vercel.com
      </p>

      <h2 className="mt-6 font-titre text-xl font-extrabold">Paiements</h2>
      <p className="mt-2">
        Les paiements sont traités par Stripe. Doublon ne conserve aucun numéro
        de carte bancaire.
      </p>

      <h2 className="mt-6 font-titre text-xl font-extrabold">Propriété intellectuelle</h2>
      <p className="mt-2">
        Les textes, la marque et le contenu du site sont la propriété de
        l'éditeur. Toute reproduction sans autorisation est interdite.
      </p>

      <p className="mt-8 text-sm">
        <a href="/" className="underline">Retour à l'accueil</a>
      </p>
    </main>
  );
}
