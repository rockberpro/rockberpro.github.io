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
    before: "Aedifico applicationes interretiales et",
    highlight: "instrumenta programmatorum",
    subtitle:
      "Programmator interretialis ab anno MMXXI · baccalaureatum in Ingeniaria Programmatum apud Univates anno MMXXVI perficiens.",
    viewProjects: "Incepta vide",
    getInTouch: "Mecum loquere",
  },
  sections: {
    projects: "Incepta",
    about: "Vita",
    stack: "Instrumenta",
    beyond: "Ultra codicem",
    contact: "Contactus",
  },
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
