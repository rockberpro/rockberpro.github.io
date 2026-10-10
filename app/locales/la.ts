import type en from "./en";

// Latin drafts: tech words follow Vicipaedia coinages. Keys mirror en.ts
export default {
  title: "Samuel Oberger Rockenbach · Ingeniarius Programmatum",
  role: "Ingeniarius Programmatum",
  language: "Lingua",
  searchPlaceholder: "incepta, artes…",
  clearSearch: "Quaesitum dele",
  nothingMatches: "Nihil invenitur pro",
  hero: {
    before: "Aedifico applicationes et",
    highlight: "instrumenta programmatorum",
    subtitle:
      "Programmator instrumentorum computatralium ab anno MMXXI · baccalaureatum in Ingeniaria Programmatum apud Univates anno MMXXVI perficiens.",
    viewProjects: "Incepta vide",
    getInTouch: "Mecum loquere",
  },
  sections: {
    projects: "Incepta",
    about: "Vita",
    stack: "Instrumenta",
    beyond: "Ultra codicem",
    contact: "Contactus",
    experience: "Peritia",
  },
  experience: {
    boleto: {
      title: "Boleto hybridum (boleto + Pix)",
      org: "Universidade do Vale do Taquari (Univates)",
      period: "In cursu",
      text: "Novum boleto hybridum perficio, schedulam solutionis quae etiam signum QR Pix fert, ut statim solvi possit.",
    },
    pix: {
      title: "Pix coniunctum proprium",
      org: "Universidade do Vale do Taquari (Univates)",
      period: "Ian. MMXXV – Iun. MMXXV",
      text: "Coniunctionem propriam cum Pix, systemate solutionum instantanearum Brasiliae, aedificare adiuvi, instrumentis alienis relictis.",
    },
    nfe: {
      title: "Emissor tabularum fiscalium servitiorum (NFS-e) rescriptus",
      org: "Universidade do Vale do Taquari (Univates) · Inceptum Reformationis Tributariae",
      period: "Oct. MMXXV – hodie",
      text: "Emissorem tabularum fiscalium servitiorum (NFS-e) universitatis ab integro rescripsi, Laravel 13 et Nuxt 4 adhibitis, ad novas leges reformationis tributariae Brasiliae (IBS/CBS) accommodatum. Primam editionem urgentem tribus mensibus (Ianuario MMXXVI) tradidi, et opus pergit dum leges mutantur.",
    },
    erp: {
      title: "ERP universitatis curatum",
      org: "Universidade do Vale do Taquari (Univates)",
      period: "Perpetuo",
      text: "ERP universitatis assidue curo, quod fluxum pecuniae (titulos) et clientium administrationem regit.",
    },
    legacy: {
      title: "Systemata PHP vetera firmata",
      org: "Universidade do Vale do Taquari (Univates)",
      period: "Perpetuo",
      text: "Systematis PHP veteribus et fragilibus observabilitatem per Sentry et errorum tractationem firmiorem adhibere proposui, et ea penitus reficio. Cum nec rescribere iam liceat nec ita pergere, hoc opus systemata a praematura abiectione servat.",
    },
  } as Record<
    string,
    { title: string; org: string; period: string; text: string }
  >,
  projectsIntro:
    "Quae aedificavi, plerumque instrumenta quae programmatoribus vitam faciliorem reddunt.",
  lead: "Programmata bona luxus non sunt. Necessitas sunt.",
  about: [
    "Iam a puero technologiae studeo. Computatra me mature ceperunt, itaque cursum technicum inii et tres annos in computatris reficiendis laboravi. Anno MMXXI ad programmationem interretialem transii et ex eo tempore pro interreti aedifico. Baccalaureatum in Ingeniaria Programmatum apud Univates exeunte anno MMXXVI perficio.",
    "Instrumenta quoque programmatoribus facere amo, parva utensilia quae cotidianum laborem leniorem reddunt. Quidquid aedifico, codicem mundum et architecturam sanam peto: facilem lectu, solidam ut saxum, sustentabilem, et ad bene senescendum factam.",
    "Programmata per annos scribebam antequam agentes codicis advenerunt, nec modum quo cogito mutaverunt. Hodie cotidiani laboris mei pars sunt: architecturam et consilia ipse teneo, agentibus contextum quo egent do, et omnia quae scribunt recenseo antequam emittuntur.",
  ],
  groups: {
    AI: "Intellegentia Artificialis",
    Languages: "Linguae",
    Frontend: "Frons",
    Backend: "Tergum et Bases Datorum",
    DevOps: "DevOps",
    Observability: "Observatio",
  },
  beyondIntro: "Clauso terminali, hic me invenies!",
  hobbies: {
    miku: "Vocaloid",
    mihoyo: "miHoYo",
    anime: "Anime",
  },
  contact: {
    title: "Mecum loquere",
    text: "Libenter mihi scribe.",
  },
} satisfies typeof en;
