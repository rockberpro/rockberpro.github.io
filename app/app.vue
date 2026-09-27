<script setup lang="ts">
const links = {
  github: "https://github.com/rockberpro",
  linkedin: "https://www.linkedin.com/in/samuel-oberger-rockenbach/",
  email: "mailto:rockberpro@gmail.com",
};

const about = [
  "I care about software that is well designed, tested and easy to maintain. That means a clear project structure, well-applied design patterns, disciplined Git history and versioning, CI that catches problems early, and observability in production so errors surface before users report them.",
  "AI coding agents are part of my daily workflow, and I use them the way I'd use any good tool: I own the architecture and the decisions, give the agents the context they need, and review everything they write before it ships.",
];

const projects = [
  {
    name: "agent-kit",
    description:
      "Claude Code plugin that sets up a project's agent harness: guards, an .agents/ structure, and skills that map the codebase into memory and rules.",
    language: "Shell",
  },
  {
    name: "unimcp",
    description: "Generic codebase-awareness MCP server.",
    language: "TypeScript",
  },
  {
    name: "git-code-review",
    description: "Review a whole branch as one staged diff in your editor.",
    language: "Shell",
  },
  {
    name: "pure",
    description: "PHP linting tool for your CI.",
    language: "Shell",
  },
  {
    name: "rosa-router",
    description: "Smart REST router for PHP.",
    language: "PHP",
  },
  {
    name: "rosa-client",
    description: "Smart REST client for PHP.",
    language: "PHP",
  },
  { name: "git-lga", description: "Logical Git Aliases.", language: "Shell" },
  {
    name: "docker-lda",
    description: "Logical Docker Aliases.",
    language: "Shell",
  },
  { name: "bash-lba", description: "Logical Bash Aliases.", language: "Shell" },
  {
    name: "powerhash",
    description:
      "A modular, lightweight PowerShell toolkit for file integrity management.",
    language: "PowerShell",
  },
];

const stack: Record<string, string[]> = {
  AI: ["Claude Code", "MCP", "Ollama"],
  Languages: ["TypeScript", "PHP", "Python", "Bash"],
  Frontend: ["Nuxt", "Tailwind CSS", "Vite"],
  "Backend & Databases": [
    "Laravel",
    "Node.js",
    "Bun",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
  ],
  DevOps: ["Docker", "Linux", "GitHub Actions", "GitLab"],
  Observability: ["Prometheus", "Grafana", "Sentry", "GlitchTip"],
};

const sections = [
  {
    label: "About",
    value: "about",
    icon: "i-lucide-user",
    slot: "about" as const,
  },
  {
    label: "Projects",
    value: "projects",
    icon: "i-lucide-folder-git-2",
    slot: "projects" as const,
  },
  {
    label: "Tech Stack",
    value: "stack",
    icon: "i-lucide-layers",
    slot: "stack" as const,
  },
  {
    label: "Contact",
    value: "contact",
    icon: "i-lucide-mail",
    slot: "contact" as const,
  },
];

const query = ref("");
const q = computed(() => query.value.trim().toLowerCase());
const hit = (...texts: string[]) =>
  !q.value || texts.some((t) => t.toLowerCase().includes(q.value));

const shownProjects = computed(() =>
  projects.filter((p) => hit(p.name, p.description, p.language)),
);
const shownStack = computed(() =>
  Object.entries(stack)
    .map(
      ([group, items]) =>
        [group, hit(group) ? items : items.filter((i) => hit(i))] as const,
    )
    .filter(([, items]) => items.length),
);
const shownSections = computed(() =>
  sections.filter((s) => {
    if (hit(s.label)) return true;
    if (s.value === "about") return hit(...about);
    if (s.value === "projects") return shownProjects.value.length > 0;
    if (s.value === "stack") return shownStack.value.length > 0;
    return hit("email", "linkedin", "github");
  }),
);

const open = ref<string[]>(["about"]);
watch(
  q,
  (v) => (open.value = v ? shownSections.value.map((s) => s.value) : ["about"]),
);

const menuOpen = ref(false);
function goTo(value: string) {
  menuOpen.value = false;
  if (!open.value.includes(value)) open.value.push(value);
  nextTick(() =>
    document
      .getElementById(value)
      ?.scrollIntoView({ behavior: "smooth", block: "start" }),
  );
}

const nav = computed(() =>
  sections.map((s) => ({
    label: s.label,
    icon: s.icon,
    onSelect: () => goTo(s.value),
  })),
);
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />

    <div class="blob top-[-12%] left-[-8%] h-[38rem] w-[46rem] bg-teal-500" />
    <div
      class="blob top-[34%] right-[-12%] h-[30rem] w-[34rem] bg-emerald-600 [animation-delay:-9s]"
    />
    <div
      class="blob bottom-[-8%] left-[38%] h-[14rem] w-[18rem] bg-amber-400 opacity-20! [animation-delay:-17s]"
    />

    <div class="mx-auto flex min-h-screen max-w-7xl gap-6 p-4 lg:p-6">
      <aside
        class="glass sticky top-6 hidden h-[calc(100vh-3rem)] w-64 shrink-0 flex-col p-5 lg:flex"
      >
        <div class="flex flex-col items-center text-center">
          <UAvatar
            src="https://avatars.githubusercontent.com/u/99848589"
            alt="Samuel Oberger Rockenbach"
            size="3xl"
            class="rounded-xl ring-1 ring-primary/40 ring-offset-4 ring-offset-transparent"
          />
          <h1 class="mt-4 text-lg leading-tight font-semibold">
            Samuel Oberger<br />Rockenbach
          </h1>
          <p class="mt-1 font-mono text-xs text-primary">@rockberpro</p>
        </div>
        <UNavigationMenu :items="nav" orientation="vertical" class="mt-8" />
        <div class="mt-auto flex justify-center gap-1">
          <UButton
            :to="links.github"
            target="_blank"
            icon="i-simple-icons-github"
            color="neutral"
            variant="ghost"
            aria-label="GitHub"
          />
          <UButton
            :to="links.linkedin"
            target="_blank"
            icon="i-simple-icons-linkedin"
            color="neutral"
            variant="ghost"
            aria-label="LinkedIn"
          />
          <UButton
            :to="links.email"
            icon="i-lucide-mail"
            color="neutral"
            variant="ghost"
            aria-label="Email"
          />
          <UColorModeButton />
        </div>
      </aside>

      <div class="min-w-0 flex-1 space-y-6">
        <header
          class="glass sticky top-4 z-10 flex items-center gap-2 p-2 lg:top-6"
        >
          <UButton
            class="lg:hidden"
            icon="i-lucide-menu"
            color="neutral"
            variant="ghost"
            aria-label="Menu"
            @click="menuOpen = true"
          />
          <label
            for="search"
            class="flex shrink-0 items-center gap-1.5 ps-2 font-mono text-sm select-none"
          >
            <span class="text-primary">❯</span>
            <span class="hidden text-muted sm:inline">grep -i</span>
          </label>
          <UInput
            id="search"
            v-model="query"
            placeholder="projects, skills…"
            variant="none"
            size="lg"
            class="flex-1"
            :ui="{ base: 'px-0 font-mono caret-primary placeholder:text-dimmed' }"
            @keydown.esc="query = ''"
          >
            <template v-if="query" #trailing>
              <UButton
                icon="i-lucide-x"
                color="neutral"
                variant="link"
                size="sm"
                aria-label="Clear search"
                @click="query = ''"
              />
            </template>
          </UInput>
        </header>

        <section class="glass relative p-8 sm:p-10">
          <span
            class="pointer-events-none absolute -top-16 -right-10 font-mono text-[13rem] leading-none font-bold text-primary/10 select-none"
            aria-hidden="true"
            >{ }</span
          >
          <p class="caret font-mono text-xs text-muted">
            <span class="text-primary">~/rockberpro</span> $ whoami
          </p>
          <h2
            class="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl"
          >
            I build web apps and
            <span
              class="text-primary underline decoration-primary/40 decoration-wavy decoration-2 underline-offset-8"
              >developer tools</span
            >.
          </h2>
          <p class="mt-5 max-w-xl text-muted">
            Software Engineer · B.Sc. in Software Engineering at Univates. I
            work proficiently with AI.
          </p>
        </section>

        <UAccordion
          v-model="open"
          type="multiple"
          :items="shownSections"
          :ui="{
            root: 'space-y-4',
            item: 'glass border-0 px-6',
            trigger: 'py-5 text-lg font-medium',
          }"
        >
          <template #leading="{ item, index }">
            <span :id="item.value" class="scroll-mt-28" />
            <span class="w-6 font-mono text-xs text-primary">
              {{ String(index + 1).padStart(2, "0") }}
            </span>
          </template>

          <template #about>
            <div class="space-y-3 pb-6 text-muted">
              <p v-for="p in about" :key="p">{{ p }}</p>
            </div>
          </template>

          <template #projects>
            <div class="grid gap-4 pb-6 sm:grid-cols-2">
              <a
                v-for="p in shownProjects"
                :key="p.name"
                :href="`${links.github}/${p.name}`"
                target="_blank"
                class="glass group rounded-xl p-4 transition hover:border-primary/40 hover:bg-white/60 dark:hover:bg-teal-900/20"
              >
                <div class="flex items-center justify-between">
                  <span class="font-mono text-sm font-medium group-hover:text-primary">{{
                    p.name
                  }}</span>
                  <UIcon
                    name="i-lucide-arrow-up-right"
                    class="size-4 text-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                  />
                </div>
                <p class="mt-2 text-sm text-muted">{{ p.description }}</p>
                <p class="mt-3 flex items-center gap-1.5 font-mono text-xs text-dimmed">
                  <span class="size-2 rounded-full bg-primary/70" />{{ p.language }}
                </p>
              </a>
            </div>
          </template>

          <template #stack>
            <div class="space-y-4 pb-6">
              <div v-for="[group, items] in shownStack" :key="group">
                <p
                  class="mb-2 font-mono text-xs text-dimmed"
                >
                  // {{ group.toLowerCase() }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <UBadge
                    v-for="i in items"
                    :key="i"
                    :label="i"
                    color="neutral"
                    variant="outline"
                    class="bg-white/5 ring-teal-900/15 dark:ring-teal-200/15"
                  />
                </div>
              </div>
            </div>
          </template>

          <template #contact>
            <div class="flex flex-wrap gap-2 pb-6">
              <UButton
                :to="links.email"
                icon="i-lucide-mail"
                label="rockberpro@gmail.com"
              />
              <UButton
                :to="links.linkedin"
                target="_blank"
                icon="i-simple-icons-linkedin"
                label="LinkedIn"
                color="neutral"
                variant="subtle"
              />
              <UButton
                :to="links.github"
                target="_blank"
                icon="i-simple-icons-github"
                label="GitHub"
                color="neutral"
                variant="subtle"
              />
            </div>
          </template>
        </UAccordion>

        <p
          v-if="!shownSections.length"
          class="glass p-8 text-center text-muted"
        >
          Nothing matches “{{ query }}”.
        </p>
      </div>
    </div>

    <USlideover
      v-model:open="menuOpen"
      side="left"
      title="Samuel Oberger Rockenbach"
      description="Software Engineer"
    >
      <template #body>
        <UNavigationMenu :items="nav" orientation="vertical" />
      </template>
    </USlideover>
  </UApp>
</template>
