const LIEN_PAIEMENT = "Touche Commit changes";

export default function Accueil() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-16">
      <header className="flex items-center justify-between py-5">
        <span className="font-titre text-2xl font-extrabold">Doublon</span>
      </header>

      <section className="pt-6">
        <h1 className="font-titre text-4xl font-extrabold leading-tight">
          Vous payez des logiciels que personne n'utilise.
        </h1>
        <p className="mt-4 text-lg">
          Doublon liste tous les abonnements de votre entreprise, repère les
          comptes inutilisés et les outils en double, et vous prévient avant
          chaque renouvellement.
        </p>
        <a
          href={LIEN_PAIEMENT}
          className="mt-6 block rounded-lg bg-brique px-6 py-4 text-center text-lg font-semibold text-white"
        >
          Commencer
        </a>
        <p className="mt-3 text-center text-sm">
          Remboursé sous 30 jours si ça ne vous fait rien économiser.
        </p>
      </section>

      <section className="mt-12 rounded-lg border border-trait p-5">
        <p className="text-sm font-semibold uppercase tracking-wide">
          Un exemple
        </p>
        <p className="mt-2 text-lg">
          Un outil à 25 € par mois, resté actif après un départ :{" "}
          <strong>300 € par an</strong>. Avec dix outils comme celui-là,{" "}
          <strong>3 000 €</strong>.
        </p>
        <p className="mt-2">
          Chaque service souscrit dans son coin. Personne n'a la liste
          complète. La facture monte sans que quiconque décide.
        </p>
      </section>

      <section className="mt-12 space-y-6">
        <div>
          <h2 className="font-titre text-xl font-extrabold">
            Une seule liste, enfin
          </h2>
          <p className="mt-1">
            Tous vos abonnements au même endroit, avec le coût annuel par outil
            et par personne.
          </p>
        </div>
        <div>
          <h2 className="font-titre text-xl font-extrabold">
            Ce qui ne sert à rien est signalé
          </h2>
          <p className="mt-1">
            Comptes inutilisés, outils qui font la même chose : vous voyez ce
            que vous pouvez résilier.
          </p>
        </div>
        <div>
          <h2 className="font-titre text-xl font-extrabold">
            Plus de renouvellement subi
          </h2>
          <p className="mt-1">
            Vous recevez un rappel avant chaque renouvellement annuel, à temps
            pour décider.
          </p>
        </div>
      </section>

      <section id="tarif" className="mt-12 rounded-lg border-2 border-encre p-5">
        <h2 className="font-titre text-2xl font-extrabold">
          79 € par mois pour toute l'entreprise
        </h2>
        <p className="mt-1">
          Soit environ 2,60 € par jour. Pour les entreprises de 10 à 100
          personnes.
        </p>
        <a
          href={LIEN_PAIEMENT}
          className="mt-5 block rounded-lg bg-brique px-6 py-4 text-center text-lg font-semibold text-white"
        >
          Commencer
        </a>
        <p className="mt-3 text-center text-sm font-semibold">
          Sans engagement, résiliable à tout moment.
        </p>
        <div className="mt-5 rounded-md bg-trait p-4 text-sm">
          <p className="font-semibold">Garantie satisfait ou remboursé, 30 jours</p>
          <p className="mt-1">
            Écrivez-nous à ettorespagnuolo73@gmail.com dans les 30 jours
            suivant votre paiement. Nous vous remboursons intégralement sous 5
            jours ouvrés, sans question.
          </p>
        </div>
        <p className="mt-4 text-sm">
          Doublon est en cours de finalisation : votre accès est ouvert sous 7
          jours maximum, et la garantie court à partir de cette ouverture.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-titre text-2xl font-extrabold">Questions fréquentes</h2>
        <div className="mt-4 divide-y divide-trait border-y border-trait">
          <details className="py-4">
            <summary className="cursor-pointer font-semibold">
              Est-ce que ça marche pour mon entreprise ?
            </summary>
            <p className="mt-2">
              Si vous avez entre 10 et 100 personnes, pas de service
              informatique et des abonnements logiciels pris par plusieurs
              personnes, oui. Si vous n'en avez presque pas, ce n'est pas pour
              vous, et la garantie vous protège.
            </p>
          </details>
          <details className="py-4">
            <summary className="cursor-pointer font-semibold">
              Combien de temps ça me prend ?
            </summary>
            <p className="mt-2">
              Environ une heure pour saisir ou importer vos abonnements, puis
              quelques minutes par mois. Les rappels arrivent tout seuls.
            </p>
          </details>
          <details className="py-4">
            <summary className="cursor-pointer font-semibold">
              Et si je veux arrêter ?
            </summary>
            <p className="mt-2">
              Vous résiliez quand vous voulez, sans préavis ni frais. Dans les
              30 jours, vous êtes en plus remboursé.
            </p>
          </details>
          <details className="py-4">
            <summary className="cursor-pointer font-semibold">
              À quoi sert exactement ce que je paie ?
            </summary>
            <p className="mt-2">
              À l'accès à Doublon : l'inventaire de vos abonnements, le coût
              par outil et par personne, le repérage des comptes inutilisés et
              des doublons, et les rappels avant renouvellement.
            </p>
          </details>
        </div>
      </section>

      <footer className="mt-12 border-t border-trait pt-5 text-sm">
        <nav className="flex flex-wrap gap-x-4 gap-y-2">
          <a href="/mentions-legales" className="underline">Mentions légales</a>
          <a href="/cgv" className="underline">CGV</a>
          <a href="/confidentialite" className="underline">Confidentialité</a>
        </nav>
      </footer>
    </main>
  );
}
