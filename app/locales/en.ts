export default {
  title: "Samuel Oberger Rockenbach · Software Engineer",
  role: "Software Engineer",
  language: "Language",
  searchPlaceholder: "projects, skills…",
  clearSearch: "Clear search",
  nothingMatches: "Nothing matches",
  hero: {
    before: "I build apps and",
    highlight: "developer tools",
    subtitle:
      "Software developer since 2021 · finishing a B.Sc. in Software Engineering at Univates in 2026.",
    viewProjects: "View projects",
    getInTouch: "Get in touch",
  },
  sections: {
    projects: "Projects",
    about: "Bio",
    stack: "Tech stack",
    beyond: "Beyond code",
    contact: "Contact",
    experience: "Experience",
  },
  experience: {
    boleto: {
      title: "Instant-payable bank slips (hybrid boleto)",
      org: "Universidade do Vale do Taquari (Univates)",
      period: "In progress",
      text: "Implementing the new hybrid boleto, a Brazilian bank payment slip that also carries a QR code for Pix, the country's instant payment system, so it can be paid instantly.",
    },
    pix: {
      title: "Native instant-payment integration (Pix)",
      org: "Universidade do Vale do Taquari (Univates)",
      period: "Jan 2025 – Jun 2025",
      text: "Helped build a native integration with Pix, Brazil's instant payment system, replacing the third-party tools the university relied on.",
    },
    nfe: {
      title: "Service invoice (NFS-e) emitter rewrite",
      org: "Universidade do Vale do Taquari (Univates) · Tax Reform project",
      period: "Oct 2025 – present",
      text: "Rewrote the university's electronic service invoice (NFS-e) emitter from scratch with Laravel 13 and Nuxt 4 to meet the rules of Brazil's tax reform (IBS/CBS). Delivered an urgent first release in three months (January 2026), and development continues as the regulations change.",
    },
    erp: {
      title: "University ERP maintenance",
      org: "Universidade do Vale do Taquari (Univates)",
      period: "Ongoing",
      text: "Maintaining the university's ERP, which manages its cash flow, receivables and client records.",
    },
    legacy: {
      title: "Hardening legacy PHP systems",
      org: "Universidade do Vale do Taquari (Univates)",
      period: "Ongoing",
      text: "Proposed adding Sentry observability and sturdier error handling to brittle legacy PHP systems, and have been carrying out the deep refactors it takes. With a rewrite not yet possible and the status quo unsustainable, the work is keeping the systems alive instead of letting them be scrapped too early.",
    },
  } as Record<
    string,
    { title: string; org: string; period: string; text: string }
  >,
  projectsIntro:
    "Things I've built, mostly tools that make developers' lives easier.",
  lead: "Good software isn't a luxury. It's a necessity.",
  about: [
    "I've been into technology since I was a kid. Computers hooked me early, so I enrolled in a technician course and went on to spend three years working in computer maintenance. In 2021 I moved into web development and have been building for the web ever since. I'm finishing my B.Sc. in Software Engineering at Univates at the end of 2026.",
    "I also love building developer tools, the small utilities that make everyday work smoother. Whatever I build, I aim for clean code and sound architecture: easy to read, solid as a rock, maintainable, and built to age well.",
    "I was writing software for years before coding agents came along, and they haven't changed how I think about it. Today they're part of my daily workflow: I own the architecture and the decisions, give the agents the context they need, and review everything they write before it ships.",
  ],
  groups: {
    AI: "AI",
    Languages: "Languages",
    Frontend: "Frontend",
    Backend: "Backend & Databases",
    DevOps: "DevOps",
    Observability: "Observability",
  } as Record<string, string>,
  beyondIntro: "When the terminal's closed, this is where you'll find me!",
  hobbies: {
    miku: "Vocaloid",
    mihoyo: "miHoYo",
    anime: "Anime",
  } as Record<string, string>,
  contact: {
    title: "Get in touch",
    text: "Feel free to drop me a line.",
  },
};
