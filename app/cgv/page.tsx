export const metadata = { title: "Conditions générales de vente · Doublon" };

export default function Cgv() {
  return (
    <main className="mx-auto max-w-xl px-5 py-10">
      <a href="/" className="font-titre text-2xl font-extrabold">Doublon</a>
      <h1 className="mt-8 font-titre text-3xl font-extrabold">
        Conditions générales de vente
      </h1>

      <h2 className="mt-6 font-titre text-xl font-extrabold">1. Vendeur et clients</h2>
      <p className="mt-2">
        Doublon est édité par [À COMPLÉTER : prénom et nom], SIRET [À COMPLÉTER].
        Le service s'adresse uniquement aux professionnels (entreprises,
        associations, indépendants).
      </p>

      <h2 className="mt-6 font-titre text-xl font-extrabold">2. Le service</h2>
      <p className="mt-2">
        Doublon permet d'inventorier les abonnements logiciels d'une
        entreprise, de calculer leur coût annuel par outil et par personne, de
        repérer les comptes inutilisés et les outils en double, et de recevoir
        un rappel avant chaque renouvellement annuel.
      </p>

      <h2 className="mt-6 font-titre text-xl font-extrabold">3. Prix et paiement</h2>
      <p className="mt-2">
        L'abonnement coûte 79 € par mois et par entreprise, TVA non applicable
        (article 293 B du CGI). Le paiement est prélevé chaque mois par carte
        bancaire via Stripe, dès la souscription.
      </p>

      <h2 className="mt-6 font-titre text-xl font-extrabold">4. Accès au service</h2>
      <p className="mt-2">
        L'accès à Doublon est ouvert par email au plus tard 7 jours après le
        paiement. Si l'accès n'est pas ouvert dans ce délai, le client peut
        demander le remboursement intégral.
      </p>

      <h2 className="mt-6 font-titre text-xl font-extrabold">5. Garantie satisfait ou remboursé</h2>
      <p className="mt-2">
        Le client peut demander le remboursement de son paiement dans les 30
        jours suivant l'ouverture de son accès, sans avoir à se justifier, en
        écrivant à ettorespagnuolo73@gmail.com. Le remboursement est effectué
        sous 5 jours ouvrés sur le moyen de paiement utilisé.
      </p>

      <h2 className="mt-6 font-titre text-xl font-extrabold">6. Durée et résiliation</h2>
      <p className="mt-2">
        L'abonnement est mensuel, sans engagement, et se renouvelle chaque mois.
        Le client peut le résilier à tout moment en écrivant à
        ettorespagnuolo73@gmail.com. La résiliation prend effet à la fin de la
        période déjà payée, sans autre frais.
      </p>

      <h2 className="mt-6 font-titre text-xl font-extrabold">7. Responsabilité</h2>
      <p className="mt-2">
        Doublon fournit un outil d'aide à la décision : les économies
        constatées dépendent des décisions du client. La responsabilité de
        l'éditeur est limitée au montant payé par le client sur les 12 derniers
        mois.
      </p>

      <h2 className="mt-6 font-titre text-xl font-extrabold">8. Données personnelles</h2>
      <p className="mt-2">
        Le traitement des données est décrit dans la{" "}
        <a href="/confidentialite" className="underline">politique de confidentialité</a>.
      </p>

      <h2 className="mt-6 font-titre text-xl font-extrabold">9. Droit applicable</h2>
      <p className="mt-2">
        Les présentes conditions sont soumises au droit français. En cas de
        litige, les tribunaux français sont compétents.
      </p>

      <p className="mt-8 text-sm">
        <a href="/" className="underline">Retour à l'accueil</a>
      </p>
    </main>
  );
}
