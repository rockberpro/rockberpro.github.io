import type en from "./en";

// pt-BR drafts: review for tone before shipping. Keys mirror en.ts
export default {
  title: "Samuel Oberger Rockenbach · Engenheiro de Software",
  role: "Engenheiro de Software",
  location: "Brasil · UTC−3",
  language: "Idioma",
  searchPlaceholder: "projetos, tecnologias…",
  clearSearch: "Limpar busca",
  nothingMatches: "Nenhum resultado para",
  hero: {
    before: "Eu crio aplicações web e",
    highlight: "ferramentas para desenvolvedores",
    subtitle:
      "Desenvolvedor web desde 2021 · concluindo o bacharelado em Engenharia de Software na Univates em 2026.",
    viewProjects: "Ver projetos",
    sayHi: "Dá um alô!",
  },
  sections: {
    projects: "Projetos",
    about: "Bio",
    stack: "Tecnologias",
    beyond: "Além do código",
    contact: "Contato",
  },
  projectsIntro:
    "Coisas que construí, principalmente ferramentas que facilitam a vida de quem desenvolve.",
  lead: "Software bom não é luxo. É necessidade.",
  about: [
    "Sou apaixonado por tecnologia desde criança. Os computadores capturaram minha atenção desde cedo. Ingressei em um curso técnico e passei três anos trabalhando com manutenção de computadores. Em 2021 migrei para o desenvolvimento web e, desde então, construo para a web. Estou concluindo o bacharelado em Engenharia de Software na Univates no fim de 2026.",
    "Também adoro criar ferramentas para desenvolvedores, pequenos utilitários que deixam o trabalho do dia a dia mais fluido. Seja o que for, busco código limpo e uma arquitetura bem pensada: fácil de ler, sólida, fácil de manter e feita para durar.",
    "Eu já escrevia software alguns anos antes de os agentes de código surgirem, e eles não mudaram a forma como penso. Hoje fazem parte do meu dia a dia: eu cuido da arquitetura e das decisões, dou aos agentes o contexto de que precisam e reviso tudo o que escrevem antes de ir para produção.",
  ],
  groups: {
    AI: "IA",
    Languages: "Linguagens",
    Frontend: "Frontend",
    Backend: "Backend e Bancos de Dados",
    DevOps: "DevOps",
    Observability: "Observabilidade",
  },
  beyondIntro: "Quando eu fecho o terminal, é aqui que você me encontra",
  hobbies: {
    miku: "Hatsune Miku",
    mihoyo: "miHoYo",
    anime: "Anime",
  },
  contact: {
    title: "Dá um alô!",
    text: "Ficou curioso sobre algum projeto ou só quer bater um papo sobre código? Me manda uma mensagem!",
  },
} satisfies typeof en;
