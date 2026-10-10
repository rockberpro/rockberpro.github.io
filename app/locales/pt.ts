import type en from "./en";

// pt-BR drafts: review for tone before shipping. Keys mirror en.ts
export default {
  title: "Samuel Oberger Rockenbach · Engenheiro de Software",
  role: "Engenheiro de Software",
  language: "Idioma",
  searchPlaceholder: "projetos, tecnologias…",
  clearSearch: "Limpar busca",
  nothingMatches: "Nenhum resultado para",
  hero: {
    before: "Eu crio aplicações e",
    highlight: "ferramentas para desenvolvedores",
    subtitle:
      "Desenvolvedor de software desde 2021 · concluindo o bacharelado em Engenharia de Software na Univates em 2026.",
    viewProjects: "Ver projetos",
    getInTouch: "Entre em contato",
  },
  sections: {
    projects: "Projetos",
    about: "Bio",
    stack: "Tecnologias",
    beyond: "Além do código",
    contact: "Contato",
    experience: "Experiência",
  },
  experience: {
    boleto: {
      title: "Boleto Híbrido (boleto + Pix)",
      org: "Universidade do Vale do Taquari (Univates)",
      period: "Em andamento",
      text: "Implementando o novo Boleto Híbrido, que traz um QR Code Pix junto ao boleto para pagamento instantâneo.",
    },
    pix: {
      title: "Integração nativa com o Pix",
      org: "Universidade do Vale do Taquari (Univates)",
      period: "jan. 2025 – jun. 2025",
      text: "Ajudei a construir uma integração nativa com o Pix, o sistema de pagamentos instantâneos do Brasil, substituindo as ferramentas de terceiros que a universidade usava.",
    },
    nfe: {
      title: "Reescrita do emissor de NFS-e",
      org: "Universidade do Vale do Taquari (Univates) · Projeto da Reforma Tributária",
      period: "out. 2025 – atual",
      text: "Reescrevi do zero o emissor de notas fiscais de serviço (NFS-e) da universidade com Laravel 13 e Nuxt 4, adequando-o às novas regras da Reforma Tributária (IBS/CBS). A primeira versão, emergencial, foi entregue em três meses (janeiro de 2026), e o desenvolvimento segue conforme a legislação muda.",
    },
    erp: {
      title: "Manutenção do ERP da universidade",
      org: "Universidade do Vale do Taquari (Univates)",
      period: "Contínuo",
      text: "Faço a manutenção contínua do ERP da universidade, que controla o fluxo financeiro (títulos) e a gestão de clientes.",
    },
    legacy: {
      title: "Robustez em sistemas PHP legados",
      org: "Universidade do Vale do Taquari (Univates)",
      period: "Contínuo",
      text: "Entre os diversos sistemas da universidade, os que eram legados, ao invés de serem reescritos eles receberam um melhorias: propus a adoção de observabilidade com Sentry e de um tratamento de erros mais robusto. Como a reescrita completa ainda não era viável (devido ao prazo e custo), a nova camada de observabilidade tem revelado uma série de problemas que há muito tempo ficavam ocultos.",
    },
  } as Record<
    string,
    { title: string; org: string; period: string; text: string }
  >,
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
  beyondIntro: "Quando eu fecho o terminal, é aqui que você me encontra!",
  hobbies: {
    miku: "Vocaloid",
    mihoyo: "miHoYo",
    anime: "Anime",
  },
  contact: {
    title: "Entre em contato",
    text: "Fique à vontade para me enviar uma mensagem.",
  },
} satisfies typeof en;
