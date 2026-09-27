<script setup lang="ts">
import en from "~/locales/en";
import pt from "~/locales/pt";
import la from "~/locales/la";

const links = {
  github: "https://github.com/rockberpro",
  linkedin: "https://www.linkedin.com/in/samuel-oberger-rockenbach/",
  email: "mailto:rockberpro@gmail.com",
};

const lang = useCookie<"en" | "pt" | "la" | undefined>("lang", {
  maxAge: 60 * 60 * 24 * 365,
  sameSite: "lax",
});
// the prerendered HTML is English; after hydration switch to the saved pick,
// or on a first visit pt for Portuguese browsers. Latin is opt-in only, never auto-detected
const mounted = ref(false);
onMounted(() => {
  lang.value ??= navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
  mounted.value = true;
});
const current = computed(() => (mounted.value && lang.value) || "en");
const messages = { en, pt, la };
const t = computed<typeof en>(() => messages[current.value] ?? en);
const languages = [
  { code: "en", label: "English", icon: "i-circle-flags-us" },
  { code: "pt", label: "Português", icon: "i-circle-flags-br" },
  // the flags carry their own colors; the aquila is gilded like a legion standard
  {
    code: "la",
    label: "Latina",
    icon: "i-game-icons-eagle-emblem",
    color: "text-[#f2c14e]",
  },
] as const;
const langItems = computed(() =>
  languages.map((l) => ({
    label: l.label,
    icon: l.icon,
    type: "checkbox" as const,
    checked: current.value === l.code,
    onSelect: () => (lang.value = l.code),
    ui: { itemLeadingIcon: "color" in l ? l.color : "" },
  })),
);
const langCurrent = computed(
  () => languages.find((l) => l.code === current.value) ?? languages[0],
);
useHead({
  title: () => t.value.title,
  htmlAttrs: { lang: () => (current.value === "pt" ? "pt-BR" : current.value) },
});

// Miku's teal and pink; the miHoYo logo inherits the text color like the black brands
// stickers: die-cut images carry their own white outline, `framed` gets it from CSS
const img = (name: string) => `/resources/images/${name}.sticker.webp`;
const hobbies = [
  {
    key: "miku",
    icon: "i-lucide-headphones",
    color: "#39C5BB",
    img: img("miku-v6"),
    tilt: "-rotate-3",
  },
  {
    key: "mihoyo",
    icon: "i-simple-icons-mihoyo",
    img: img("hoyoverse"),
    tilt: "rotate-2",
    framed: true,
  },
  {
    key: "anime",
    icon: "i-lucide-tv",
    color: "#E12885",
    img: img("anya-forger"),
    tilt: "-rotate-1",
  },
];

// descriptions stay in English in every language: the cards link to English repos
const projects = [
  {
    name: "agent-kit",
    description:
      "Claude Code plugin that sets up a project's agent harness: guards, an .agents/ structure, and skills that map the codebase into memory and rules.",
    language: "Shell",
  },
  {
    name: "git-code-review",
    description:
      "Review a whole branch as one staged diff in your editor.",
    language: "Shell",
  },
  {
    name: "pure",
    description:
      "PHP linting tool for your CI.",
    language: "Shell",
  },
  {
    name: "rosa-router",
    description:
      "Smart REST router for PHP.",
    language: "PHP",
  },
  {
    name: "rosa-client",
    description:
      "Smart REST client for PHP.",
    language: "PHP",
  },
  {
    name: "git-lga",
    description:
      "Logical Git aliases: mnemonics you can guess instead of memorize.",
    language: "Shell",
  },
  {
    name: "docker-lda",
    description:
      "Logical Docker aliases: shortcuts that read like the command they run.",
    language: "Shell",
  },
  {
    name: "bash-lba",
    description:
      "Logical Bash aliases: intuitive shortcuts, no cheat sheet needed.",
    language: "Shell",
  },
];

const stack: Record<string, string[]> = {
  AI: ["Claude Code", "MCP", "Ollama"],
  Languages: ["TypeScript", "PHP", "Python", "Bash"],
  Frontend: ["Nuxt", "Tailwind CSS", "Vite"],
  Backend: ["Laravel", "Node.js", "Bun", "PostgreSQL", "MySQL", "MongoDB"],
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

const sectionDefs = [
  { value: "projects", icon: "i-lucide-folder-git-2", slot: "projects" as const },
  { value: "about", icon: "i-lucide-user", slot: "about" as const },
  { value: "stack", icon: "i-lucide-layers", slot: "stack" as const },
  {
    value: "beyond",
    icon: "i-lucide-gamepad-2",
    slot: "beyond" as const,
    class:
      "bg-linear-to-br from-[#39C5BB]/10 to-[#E12885]/5 ring-1 ring-[#39C5BB]/25",
  },
  { value: "contact", icon: "i-lucide-mail", slot: "contact" as const },
];
const sections = computed(() =>
  sectionDefs.map((s) => ({
    ...s,
    label: t.value.sections[s.value as keyof typeof en.sections],
  })),
);

const query = ref("");
const q = computed(() => query.value.trim().toLowerCase());
const hit = (...texts: string[]) =>
  !q.value || texts.some((t) => t.toLowerCase().includes(q.value));

const shownProjects = computed(() =>
  projects.filter((p) => hit(p.name, p.description, p.language)),
);
const shownStack = computed(() =>
  Object.entries(stack)
    .map(([key, items]) => {
      const group = t.value.groups[key] ?? key;
      return [group, hit(group) ? items : items.filter((i) => hit(i))] as const;
    })
    .filter(([, items]) => items.length),
);
const shownSections = computed(() =>
  sections.value.filter((s) => {
    if (hit(s.label)) return true;
    if (s.value === "about") return hit(t.value.lead, ...t.value.about);
    if (s.value === "beyond")
      return hit(...hobbies.map((h) => t.value.hobbies[h.key] ?? ""));
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
  const shown = sectionDefs.filter((s) => document.getElementById(s.value));
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
  sections.value.map((s) => ({
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
          <span class="font-mono text-xs text-dimmed">{{ t.location }}</span>
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
            :placeholder="t.searchPlaceholder"
            variant="none"
            size="lg"
            class="flex-1"
            :ui="{
              base: 'px-0 font-mono caret-primary placeholder:text-dimmed',
            }"
            @keydown.esc="query = ''"
          >
            <template v-if="query" #trailing>
              <UButton
                icon="i-lucide-x"
                color="neutral"
                variant="link"
                size="sm"
                :aria-label="t.clearSearch"
                @click="query = ''"
              />
            </template>
          </UInput>
          <UDropdownMenu :items="langItems" :content="{ align: 'end' }">
            <UButton
              :icon="langCurrent.icon"
              :ui="{
                leadingIcon: 'color' in langCurrent ? langCurrent.color : '',
              }"
              trailing-icon="i-lucide-chevron-down"
              color="neutral"
              variant="ghost"
              :aria-label="t.language"
            />
          </UDropdownMenu>
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
            {{ t.hero.before }}
            <span
              class="bg-linear-to-r from-teal-600 via-cyan-600 to-violet-600 bg-clip-text text-transparent dark:from-teal-300 dark:via-cyan-300 dark:to-violet-400"
              >{{ t.hero.highlight }}</span
            >.
          </h2>
          <p class="mt-5 max-w-xl text-muted">
            {{ t.hero.subtitle }}
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <UButton
              :label="t.hero.viewProjects"
              trailing-icon="i-lucide-arrow-down"
              size="lg"
              @click="goTo('projects')"
            />
            <UButton
              :label="t.hero.getInTouch"
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
            <span
              class="rounded-md bg-primary/10 px-1.5 py-0.5 font-mono text-xs text-primary ring-1 ring-primary/20"
            >
              {{ String(index + 1).padStart(2, "0") }}
            </span>
          </template>

          <template #about>
            <div class="space-y-3 pb-6 text-muted">
              <img
                src="/resources/images/bio.sticker.webp"
                alt=""
                width="80"
                height="80"
                loading="lazy"
                class="float-right mb-2 ml-4 size-20 drop-shadow-lg transition duration-200 hover:-translate-y-1 hover:scale-105"
              />
              <p class="text-lg font-medium text-highlighted">
                {{ t.lead }}
              </p>
              <p v-for="p in t.about" :key="p">{{ p }}</p>
            </div>
          </template>

          <template #projects>
            <div class="mb-4 flex items-center justify-between gap-4">
              <p class="text-muted">
                {{ t.projectsIntro }}
              </p>
              <img
                src="/resources/images/rocket.sticker.webp"
                alt=""
                width="80"
                height="80"
                loading="lazy"
                class="size-20 shrink-0 drop-shadow-lg transition duration-200 hover:-translate-y-1 hover:scale-105"
              />
            </div>
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
                  <span
                    class="font-mono text-sm font-medium group-hover:text-primary"
                    >{{ p.name }}</span
                  >
                  <UIcon
                    name="i-lucide-arrow-up-right"
                    class="size-4 text-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                  />
                </div>
                <p class="mt-2 text-sm text-muted">{{ p.description }}</p>
                <p
                  class="mt-3 flex items-center gap-1.5 font-mono text-xs text-dimmed"
                >
                  <span
                    class="size-2 rounded-full"
                    :style="{ backgroundColor: langColor[p.language] }"
                  />{{ p.language }}
                </p>
              </a>
            </div>
          </template>

          <template #beyond>
            <div class="space-y-4 pb-6">
              <div class="flex items-center justify-between gap-4">
                <p class="text-muted">
                  {{ t.beyondIntro }}
                </p>
                <img
                  src="/resources/images/controller.sticker.webp"
                  alt=""
                  width="80"
                  height="80"
                  loading="lazy"
                  class="size-20 shrink-0 drop-shadow-lg transition duration-200 hover:-translate-y-1 hover:scale-105"
                />
              </div>
              <div class="flex flex-wrap justify-center gap-8 pt-2 sm:justify-start">
                <figure
                  v-for="h in hobbies"
                  :key="h.key"
                  class="group flex flex-col items-center gap-3"
                >
                  <img
                    :src="h.img"
                    :alt="t.hobbies[h.key]"
                    width="112"
                    height="112"
                    loading="lazy"
                    class="size-28 object-contain drop-shadow-lg transition duration-200 group-hover:-translate-y-1 group-hover:scale-105 group-hover:rotate-0"
                    :class="[h.tilt, h.framed && 'rounded-2xl ring-4 ring-white']"
                  />
                  <UBadge
                    as="figcaption"
                    :label="t.hobbies[h.key]"
                    size="lg"
                    color="neutral"
                    variant="outline"
                    class="bg-white/5 ring-[#39C5BB]/30"
                  >
                    <template #leading>
                      <UIcon
                        :name="h.icon"
                        class="size-4"
                        :style="{ color: h.color }"
                      />
                    </template>
                  </UBadge>
                </figure>
              </div>
            </div>
          </template>

          <template #stack>
            <div class="space-y-4 pb-6">
              <img
                src="/resources/images/windows-terminal.sticker.webp"
                alt=""
                width="80"
                height="80"
                loading="lazy"
                class="float-right mb-2 ml-4 size-20 drop-shadow-lg transition duration-200 hover:-translate-y-1 hover:scale-105"
              />
              <div v-for="[group, items] in shownStack" :key="group">
                <p class="mb-2 font-mono text-xs text-dimmed">
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
          {{ t.nothingMatches }} “{{ query }}”.
        </p>

        <section id="contact" class="glass scroll-mt-28 p-6">
          <img
            src="/resources/images/mail.sticker.webp"
            alt=""
            width="80"
            height="80"
            loading="lazy"
            class="float-right mb-2 ml-4 size-20 drop-shadow-lg transition duration-200 hover:-translate-y-1 hover:scale-105"
          />
          <h2 class="text-lg font-medium text-highlighted">
            {{ t.contact.title }}
          </h2>
          <p class="mt-1 text-muted">
            {{ t.contact.text }}
          </p>
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
      :description="t.role"
    >
      <template #body>
        <UNavigationMenu :items="nav" orientation="vertical" highlight />
      </template>
    </USlideover>
  </UApp>
</template>
