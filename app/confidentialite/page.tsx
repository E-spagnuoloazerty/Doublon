export const metadata = { title: "Politique de confidentialité · Doublon" };

export default function Confidentialite() {
  return (
    <main className="mx-auto max-w-xl px-5 py-10">
      <a href="/" className="font-titre text-2xl font-extrabold">Doublon</a>
      <h1 className="mt-8 font-titre text-3xl font-extrabold">
        Politique de confidentialité
      </h1>

      <h2 className="mt-6 font-titre text-xl font-extrabold">Qui est responsable de vos données</h2>
      <p className="mt-2">
        [À COMPLÉTER : prénom et nom], SIRET [À COMPLÉTER], joignable à
        ettorespagnuolo73@gmail.com.
      </p>

      <h2 className="mt-6 font-titre text-xl font-extrabold">Les données que nous collectons</h2>
      <p className="mt-2">
        Lors du paiement : votre nom, votre email et le nom de votre
        entreprise. Lors de l'utilisation du service : les informations
        d'abonnements que vous saisissez vous-même. Les données de carte
        bancaire sont traitées uniquement par Stripe, jamais par Doublon.
      </p>

      <h2 className="mt-6 font-titre text-xl font-extrabold">À quoi elles servent</h2>
      <p className="mt-2">
        À traiter votre paiement, vous ouvrir l'accès au service, vous envoyer
        les rappels de renouvellement et répondre à vos demandes. Nous ne les
        vendons pas et ne les utilisons pas à d'autres fins.
      </p>

      <h2 className="mt-6 font-titre text-xl font-extrabold">Qui les reçoit</h2>
      <p className="mt-2">
        Stripe pour les paiements, et Vercel pour l'hébergement du site. Ces
        prestataires peuvent traiter des données hors de l'Union européenne,
        dans le cadre de garanties prévues par le RGPD.
      </p>

      <h2 className="mt-6 font-titre text-xl font-extrabold">Combien de temps</h2>
      <p className="mt-2">
        Pendant la durée de votre abonnement, puis jusqu'à 3 ans après sa fin
        pour répondre à d'éventuelles demandes. Les données de facturation sont
        conservées 10 ans, comme la loi l'impose.
      </p>

      <h2 className="mt-6 font-titre text-xl font-extrabold">Cookies et suivi</h2>
      <p className="mt-2">
        Ce site n'utilise aucun cookie de suivi publicitaire. [À METTRE À JOUR
        quand la mesure d'audience sera ajoutée.]
      </p>

      <h2 className="mt-6 font-titre text-xl font-extrabold">Vos droits</h2>
      <p className="mt-2">
        Vous pouvez demander l'accès à vos données, leur correction, leur
        suppression ou leur export en écrivant à ettorespagnuolo73@gmail.com.
        Vous pouvez aussi saisir la CNIL (cnil.fr).
      </p>

      <p className="mt-8 text-sm">
        <a href="/" className="underline">Retour à l'accueil</a>
      </p>
    </main>
  );
}
