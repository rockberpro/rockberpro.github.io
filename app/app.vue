<script setup lang="ts">
const links = {
  github: "https://github.com/rockberpro",
  linkedin: "https://www.linkedin.com/in/samuel-oberger-rockenbach/",
  email: "mailto:rockberpro@gmail.com",
};

const about = [
  "I've been into technology since I was a kid. Computers hooked me early, so I enrolled in a technician course and went on to spend three years working in computer maintenance. In 2021 I moved into web development and have been building for the web ever since. I'm finishing my B.Sc. in Software Engineering at Univates at the end of 2026.",
  "I also love building developer tools, the small utilities that make everyday work smoother. Whatever I build, I aim for clean code and sound architecture: easy to read, solid as a rock, maintainable, and built to age well.",
  "I was writing software for years before coding agents came along, and they haven't changed how I think about it. Today they're part of my daily workflow: I own the architecture and the decisions, give the agents the context they need, and review everything they write before it ships.",
];

const projects = [
  {
    name: "agent-kit",
    description:
      "Claude Code plugin that sets up a project's agent harness: guards, an .agents/ structure, and skills that map the codebase into memory and rules.",
    language: "Shell",
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
  DevOps: ["Docker", "Linux", "GitHub", "GitHub Actions", "GitLab"],
  Observability: ["Prometheus", "Grafana", "Sentry", "GlitchTip"],
};

// GitHub linguist colors
const langColor: Record<string, string> = {
  Shell: "#89e051",
  TypeScript: "#3178c6",
  PHP: "#777bb4",
};

// simple-icons slug + brand hex; black brands inherit the text color
const brand: Record<string, [string, string?]> = {
  "Claude Code": ["claude", "#D97757"],
  MCP: ["modelcontextprotocol"],
  Ollama: ["ollama"],
  TypeScript: ["typescript", "#3178C6"],
  PHP: ["php", "#777BB4"],
  Python: ["python", "#3776AB"],
  Bash: ["gnubash", "#4EAA25"],
  Nuxt: ["nuxt", "#00DC82"],
  "Tailwind CSS": ["tailwindcss", "#06B6D4"],
  Vite: ["vite", "#9135FF"],
  Laravel: ["laravel", "#FF2D20"],
  "Node.js": ["nodedotjs", "#5FA04E"],
  Bun: ["bun"],
  PostgreSQL: ["postgresql", "#4169E1"],
  MySQL: ["mysql", "#4479A1"],
  MongoDB: ["mongodb", "#47A248"],
  Docker: ["docker", "#2496ED"],
  Linux: ["linux", "#FCC624"],
  GitHub: ["github"],
  "GitHub Actions": ["githubactions", "#2088FF"],
  GitLab: ["gitlab", "#FC6D26"],
  Prometheus: ["prometheus", "#E6522C"],
  Grafana: ["grafana", "#F46800"],
  Sentry: ["sentry"],
};

const sections = [
  {
    label: "Projects",
    value: "projects",
    icon: "i-lucide-folder-git-2",
    slot: "projects" as const,
  },
  {
    label: "About",
    value: "about",
    icon: "i-lucide-user",
    slot: "about" as const,
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

const defaultOpen = ["projects"];
// contact renders as its own card after the accordion, but stays in nav and scroll-spy
const accordionSections = computed(() =>
  shownSections.value.filter((s) => s.value !== "contact"),
);

const open = ref<string[]>([...defaultOpen]);
watch(
  q,
  () =>
    (open.value = q.value
      ? shownSections.value.map((s) => s.value)
      : [...defaultOpen]),
);

// feeds the cursor position to the .spotlight glow and border
function spot(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--x", `${e.clientX - r.left}px`);
  el.style.setProperty("--y", `${e.clientY - r.top}px`);
}

const menuOpen = ref(false);
function goTo(value: string) {
  menuOpen.value = false;
  if (!open.value.includes(value)) open.value.push(value);
  nextTick(() => {
    const el = document.getElementById(value);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    // one soft teal pulse on the landed card; the delay lets the scroll finish
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el?.closest(".glass")?.animate(
      [
        { outline: "2px solid rgb(45 212 191 / 0)", outlineOffset: "2px" },
        { outline: "2px solid rgb(45 212 191 / 0.7)", outlineOffset: "2px" },
        { outline: "2px solid rgb(45 212 191 / 0)", outlineOffset: "2px" },
      ],
      { duration: 1200, delay: 350, easing: "ease-in-out" },
    );
  });
}

const active = ref("projects");
function spy() {
  const shown = sections.filter((s) => document.getElementById(s.value));
  const atBottom =
    innerHeight + scrollY >= document.documentElement.scrollHeight - 2;
  const passed = shown.filter(
    (s) => document.getElementById(s.value)!.getBoundingClientRect().top < 160,
  );
  active.value = (atBottom ? shown : passed).at(-1)?.value ?? "projects";
}
onMounted(() => {
  spy();
  addEventListener("scroll", spy, { passive: true });
});
onUnmounted(() => removeEventListener("scroll", spy));

const nav = computed(() =>
  sections.map((s) => ({
    label: s.label,
    icon: s.icon,
    active: active.value === s.value,
    onSelect: () => goTo(s.value),
  })),
);
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />


    <div class="mx-auto flex min-h-screen max-w-7xl gap-6 p-4 lg:p-6">
      <aside
        class="glass sticky top-6 hidden h-[calc(100vh-3rem)] w-64 shrink-0 flex-col p-5 lg:flex"
      >
        <div class="flex flex-col items-center text-center">
          <UAvatar
            src="/resources/images/profile.webp"
            alt="Samuel Oberger Rockenbach"
            size="3xl"
            class="size-32 rounded-2xl ring-1 ring-primary/40 ring-offset-4 ring-offset-transparent"
          />
          <h1 class="mt-4 text-lg leading-tight font-semibold">
            Samuel Oberger<br />Rockenbach
          </h1>
          <p class="mt-1 font-mono text-xs text-primary">@rockberpro</p>
        </div>
        <UNavigationMenu
          :items="nav"
          orientation="vertical"
          highlight
          class="mt-8"
        />
        <div class="mt-auto mb-4 flex flex-col items-center">
          <span class="font-mono text-xs text-dimmed">Brazil · UTC−3</span>
        </div>
        <div class="flex justify-center gap-1">
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

        <section class="glass p-8 sm:p-10">
          <div class="mb-6 flex items-center gap-3 lg:hidden">
            <UAvatar
              src="/resources/images/profile.webp"
              alt="Samuel Oberger Rockenbach"
              size="xl"
              class="size-16 rounded-xl ring-1 ring-primary/40 ring-offset-2 ring-offset-transparent"
            />
            <div>
              <p class="leading-tight font-semibold text-highlighted">
                Samuel Oberger Rockenbach
              </p>
              <p class="font-mono text-xs text-primary">@rockberpro</p>
            </div>
          </div>
          <p class="caret font-mono text-xs text-muted">
            <span class="text-primary">~/rockberpro</span> $ whoami
          </p>
          <h2
            class="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-highlighted sm:text-5xl"
          >
            I build web apps and
            <span
              class="bg-linear-to-r from-teal-600 via-cyan-600 to-violet-600 bg-clip-text text-transparent dark:from-teal-300 dark:via-cyan-300 dark:to-violet-400"
              >developer tools</span
            >.
          </h2>
          <p class="mt-5 max-w-xl text-muted">
            Web developer since 2021 · finishing a B.Sc. in Software
            Engineering at Univates in 2026.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <UButton
              label="View projects"
              trailing-icon="i-lucide-arrow-down"
              size="lg"
              @click="goTo('projects')"
            />
            <UButton
              label="Get in touch"
              icon="i-lucide-mail"
              size="lg"
              color="neutral"
              variant="ghost"
              @click="goTo('contact')"
            />
          </div>
        </section>

        <UAccordion
          v-model="open"
          type="multiple"
          :unmount-on-hide="false"
          :items="accordionSections"
          :ui="{
            root: 'space-y-4',
            item: 'glass border-0 px-6',
            trigger: 'py-5 text-lg font-medium text-highlighted',
          }"
        >
          <template #leading="{ item, index }">
            <span :id="item.value" class="scroll-mt-28" />
            <span class="rounded-md bg-primary/10 px-1.5 py-0.5 font-mono text-xs text-primary ring-1 ring-primary/20">
              {{ String(index + 1).padStart(2, "0") }}
            </span>
          </template>

          <template #about>
            <div class="space-y-3 pb-6 text-muted">
              <p class="text-lg font-medium text-highlighted">
                Good software isn't a luxury. It's a necessity.
              </p>
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
                class="glass spotlight group rounded-xl p-4 transition hover:bg-white/60 dark:hover:bg-white/[0.05]"
                @mousemove="spot"
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
                  <span
                    class="size-2 rounded-full"
                    :style="{ backgroundColor: langColor[p.language] }"
                  />{{ p.language }}
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
                  >
                    <template v-if="brand[i]" #leading>
                      <UIcon
                        :name="`i-simple-icons-${brand[i][0]}`"
                        class="size-3.5"
                        :style="{ color: brand[i][1] }"
                      />
                    </template>
                  </UBadge>
                </div>
              </div>
            </div>
          </template>

        </UAccordion>

        <p
          v-if="!shownSections.length"
          class="glass p-8 text-center text-muted"
        >
          Nothing matches “{{ query }}”.
        </p>

        <section id="contact" class="glass scroll-mt-28 p-6">
          <h2 class="text-lg font-medium text-highlighted">Contact</h2>
          <p class="mt-1 text-muted">Want to work together or just say hi?</p>
          <div class="mt-4 flex flex-wrap gap-2">
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
        </section>
      </div>
    </div>

    <USlideover
      v-model:open="menuOpen"
      side="left"
      title="Samuel Oberger Rockenbach"
      description="Software Engineer"
    >
      <template #body>
        <UNavigationMenu :items="nav" orientation="vertical" highlight />
      </template>
    </USlideover>
  </UApp>
</template>
