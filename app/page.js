"utiliser le client";

importer { utiliserMemo, utiliserÉtat } de "réagir";
importer { Vérification du bouclier, Utilisateurs, Liste du presse-papiers, Courrier, Téléphone } de "réaction lucide";

const WHATSAPP_LINK = "https://wa.me/2250708690080";

exporter défaut fonction Page d'accueil() {
  const offres = utiliserMemo(
    () => [
      {
        id: "yakro",
        titre: "Yamoussoukro",
        pays: "Côte d'Ivoire",
        prix: « 280 000 F »,
        durée: "14 jours",
        tag: "Populaire",
        image: "/images/offres/yakro.jpg",
      },
      {
        id: "Hosanna",
        titre: "Christ au Hosanna",
        pays: "Afrique",
        prix: "187 000 F",
        durée: "14 jours",
        tag: « Plan de bonus »,
        image: "/images/offres/hosanna.jpg",
      },
      {
        id: "Europe",
        titre: « Europe, Madrid, Istanbul »,
        pays: "Europe",
        prix: "2 100 000 F",
        durée: "14 jours",
        tag: "Premium",
        image: "/images/offres/europe.jpg",
      },
    ],
    []
  );

  const [destination, setDestination] = utiliserÉtat(");
  const [période, définirPériode] = utiliserÉtat(");
  const [âge, définirAge] = utiliserÉtat(");

  function onSearch() {
    // Plus tard: rediriger vers /sejours avec filtres.
    // Pour l’instant: simple scroll vers Offres.
    const el = document.getElementById("offres");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-slate-900 text-white grid place-items-center font-bold">
              JC
            </div>
            <div className="leading-tight">
              <div className="font-extrabold">Les Jolies Colonies</div>
              <div className="text-xs text-slate-500">Voyages & Colonies de Vacances</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <a href="#offres" className="hover:text-slate-700">Offres</a>
            <a href="#decouvrir" className="hover:text-slate-700">Découvrir</a>
            <a href="#securite" className="hover:text-slate-700">Sécurité</a>
            <a href="#contact" className="hover:text-slate-700">Contact</a>
          </nav>

          <a
            href={WHATSAPP_LINK}
            className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-white font-bold hover:bg-orange-600"
          >
            Réserver WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        {/* Image de fond (à remplacer) */}
        <div
          className="h-[520px] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(2,6,23,.35), rgba(2,6,23,.55)), url('/images/hero.jpg')",
          }}
        />

        {/* Vague */}
        <svg
          className="-mt-24 block w-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 50C120 70 240 100 360 100C520 100 640 40 820 40C1000 40 1100 90 1240 100C1320 106 1400 95 1440 90V120H0V50Z"
            fill="#F8FAFC"
          />
        </svg>

        <div className="absolute inset-0">
          <div className="mx-auto max-w-6xl px-4 pt-16">
            <div className="max-w-3xl">
              <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
                Explorez, apprenez et profitez{" "}
                <span className="text-orange-300">avec les Jolies Colonies</span> !
              </h1>
              <p className="mt-4 text-white/90 text-base md:text-lg">
                Des séjours en Côte d’Ivoire, en Afrique et en Europe — encadrement,
                sécurité et souvenirs garantis.
              </p>

              {/* Barre de recherche */}
              <div className="mt-8 rounded-2xl bg-white shadow-lg p-4 md:p-5">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-600">Destinations</label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
                    >
                      <option value="">Sélectionner</option>
                      <option value="yakro">Yamoussoukro</option>
                      <option value="abidjan">Abidjan</option>
                      <option value="hosanna">Hosanna</option>
                      <option value="europe">Europe</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-600">Période</label>
                    <select
                      value={periode}
                      onChange={(e) => setPeriode(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
                    >
                      <option value="">Période</option>
                      <option value="vacances">Vacances scolaires</option>
                      <option value="weekend">Week-end</option>
                      <option value="ete">Été</option>
                      <option value="noel">Noël</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-600">Âge</label>
                    <select
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
                    >
                      <option value="">Âge</option>
                      <option value="6-9">6–9 ans</option>
                      <option value="10-13">10–13 ans</option>
                      <option value="14-17">14–17 ans</option>
                    </select>
                  </div>

                  <button
                    onClick={onSearch}
                    className="mt-5 md:mt-0 rounded-xl bg-orange-500 px-4 py-3 text-white font-extrabold hover:bg-orange-600"
                  >
                    Rechercher
                  </button>
                </div>

                <div className="mt-3 text-xs text-slate-500">
                  Astuce : clique sur “Rechercher” pour voir les offres populaires.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offres populaires */}
      <section id="offres" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-extrabold text-center">Offres populaires</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((o) => (
            <div
              key={o.id}
              className="overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-200 hover:shadow-md transition"
            >
              <div className="relative h-44 bg-slate-100">
                {/* Image offre */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${o.image}')` }}
                />
                <div className="absolute left-4 top-4 rounded-xl bg-orange-500 px-3 py-1 text-xs font-extrabold text-white">
                  {o.tag}
                </div>
              </div>

              <div className="p-5">
                <div className="text-lg font-extrabold">{o.title}</div>
                <div className="text-sm text-slate-500">{o.country}</div>

                <div className="mt-4 flex items-end justify-between">
                  <div className="text-xs text-slate-500">{o.duration}</div>
                  <div className="text-2xl font-extrabold text-orange-600">{o.price}</div>
                </div>

                <a
                  href={WHATSAPP_LINK}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-4 py-3 text-white font-extrabold hover:bg-slate-800"
                >
                  Réserver
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={WHATSAPP_LINK}
            className="rounded-2xl bg-blue-900 px-6 py-3 text-white font-extrabold hover:bg-blue-950"
          >
            Voir tous les séjours
          </a>
        </div>
      </section>

      {/* Découvrir */}
      <section id="decouvrir" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Découvrez nos séjours{" "}
              <span className="text-orange-600">en Côte d’Ivoire</span>,{" "}
              <span className="text-orange-600">en Afrique</span> et{" "}
              <span className="text-orange-600">en Europe</span>
            </h3>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <StatCard title="17 ans" subtitle="d’expérience" />
              <StatCard title="+5 000" subtitle="jeunes accueillis" />
              <StatCard title="+6 200" subtitle="années encadrées" />
              <StatCard title="+100" subtitle="partenaires" />
            </div>

            <div className="mt-8">
              <a
                href={WHATSAPP_LINK}
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-white font-extrabold hover:bg-slate-800"
              >
                Voir nos séjours
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ImageTile src="/images/gallery/1.jpg" />
            <ImageTile src="/images/gallery/2.jpg" />
            <div className="col-span-2">
              <ImageTile src="/images/gallery/3.jpg" tall />
            </div>
          </div>
        </div>
      </section>

      {/* Sécurité & Encadrement */}
      <section id="securite" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-extrabold text-center">
          Sécurité & <span className="text-orange-600">Encadrement</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <Feature icon={<Users size={22} />} title="Personnel qualifié" desc="Équipe formée & expérimentée" />
          <Feature icon={<ShieldCheck size={22} />} title="Suivi & sécurité" desc="Encadrement et vigilance 24/7" />
          <Feature icon={<ClipboardList size={22} />} title="Programme varié" desc="Activités ludiques & éducatives" />
          <Feature icon={<Mail size={22} />} title="Infos parents" desc="Communication claire et régulière" />
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={WHATSAPP_LINK}
            nom de classe="arrondi-2xl bg-teal-600 px-6 py-3 texte-blanc police-extra-gras hover:bg-teal-700"
          >
            Réserver locataire
          </a>
        </div>
      </section>

      {/* TikTok */}
      <section nom de classe="bg-blanc">
        <div nom de classe="mx-auto max-w-6xl px-4 py-14">
          <h2 nom de classe=« Texte-3xl police-extra-gras texte-centre »>Vidéos TikTok</h2>
          <p nom de classe="mt-3 text-center text-slate-600">
            Sur entier tes 4 privilèges TikTok ici (intégrer) dès la prochaine ruban adhésif.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <TikTokPlaceholder title="Vidéo 1" />
            <TikTokPlaceholder title="Vidéo 2" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
        <div nom de classe="arrondi-3xl bg-slate-900 texte-blanc p-8 md:p-10 flex flex-col md:flex-row gap-8 éléments-début md:éléments-centre justifier-entre">
          <div>
            <h3 nom de classe="texte-2xl md:texte-3xl police-extra-gras">Prét(e) à réserver ?</h3>
            <p nom de classe="mt-2 texte-blanc/80">
              WhatsApp officiel : <portée nom de classe="police en gras">+225 07 08 690 080</portée>
              <br />
              Courriel : <portée nom de classe="police en gras">informations@colonies de lesbiennes.com</portée>
            </p>
          </div>

          <div nom de classe="flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_LINK}
              nom de classe=« En ligne-fléchir articles-centre justificateur-centre écart-2 arrondis-2xl bg-orange-500 px-6 py-3 texte-blanc police-extrabold hover:bg-orange-600 »
            >
              <Téléphone taille={18} /> WhatsApp
            </a>
            <a
              href="mailto:info@lesjoliescolonies.com"
              nom de classe=« En ligne-fléchir articles-centre justifier-centre écart-2 arrondi-2xl bg-blanc/10 px-6 py-3 texte-blanc police-extra-gras hover:bg-white/15 »
            >
              <Courrier taille={18} /> Envoyé un email
            </a>
          </div>
        </div>

        <tarte de page nom de classe="mt-10 texte-centre texte-xs texte-ardoise-500">
          © {nouveau Date().obtenirAnnée complice()} Les Jolies Colonies de Vacances — Tous droits serviteurs.
        </pied de page>
      </section>
    </principal>
  );
}

fonction Carte de statistiques({ titre, sous-titre }) {
  retour (
    <div nom de classe="arrondi-2xl bordure bordure-ardoise-200 bg-ardoise-50 p-4">
      <div nom de classe="texte-2xl police-extra-gras texte-ardoise-900">{titre}</div>
      <div nom de classe="texte-sm texte-ardoise-600">{sous-titre}</div>
    </div>
  );
}

fonction ImageTile({ source, grand = faux }) {
  retour (
    <div
      nom de classe={`arrondi-3xl bg-slate-100 débordement-bordure cachée border-slate-200 ${
        grand ? "h-64" : "h-44"
      }`}
    >
      <div nom de classe="h-plein w-plein fond-couverture fond-centre" style={{ image d'arrière-plan: `url('${source}')` }} />
    </div>
  );
}

fonction Fonctionnalité({ icône, titre, desc }) {
  retour (
    <div nom de classe="bordure arrondie-3xl bordure-ardoise-200 bg-blanc p-5 ombré-sm">
      <div nom de classe="h-11 w-11 arrondis-2xl bg-ardoise-900 texte-grille blanche place-éléments-centre">
        {icône}
      </div>
      <div nom de classe="police mt-4 extra-gras">{titre}</div>
      <div nom de classe="mt-1 texte-sm texte-ardoise-600">{desc}</div>
    </div>
  );
}

fonction Espace servir TikTok({ titre }) {
  retour (
    <div nom de classe="bordure arrondie-3xl bordure-ardoise-200 bg-ardoise-50 p-6">
      <div nom de classe=« Extra-gras de la police »>{titre}</div>
      <div nom de classe="mt-2 texte-sm texte-ardoise-600">
        (Intégrateur TikTok à Jouteur : privilège vidéo + script d'intégration)
      </div>
      <div nom de classe="mt-4 h-56 arrondi-2xl bg-bordure blanche bordure-ardoise-200" />
    </div>
  );
}
