import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Compass,
  Heart,
  Leaf,
  Lightbulb,
  Rocket,
  Sprout,
  Target,
  Users,
} from "lucide-react";
import { site } from "@/config/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `Sanya & Kushagra — The People Behind ${site.name}` },
      {
        name: "description",
        content:
          "Meet Sanya and Kushagra, the UPES students building a living cycle of notes, guidance and mentorship for every junior.",
      },
      { property: "og:title", content: `Sanya & Kushagra — The People Behind ${site.name}` },
      {
        property: "og:description",
        content: "Someone helped us. We help the next junior. And the Virasat continues.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const founders = [
  {
    name: "Sanya Didii",
    role: "CSE ’27 · Co-founder",
    initials: "SD",
    credentials: ["Incedo", "Attentive AI (Intern)", "SIH Winner", "CGPA: 8.91 / 10", "Data Science B1"],
    quote: "Agar ek junior ko mere notes se ek raat kam stress ho, toh worth it hai.",
    accent: "text-indigo-ink",
    turn: "-rotate-[0.35deg]",
    Icon: Heart,
  },
  {
    name: "Kushagra Bhaiyaa",
    role: "CSE ’27 · Co-founder",
    initials: "KB",
    credentials: ["Incedo", "Dell Technologies (Intern)", "Alpha — 3 times", "CGPA: 9.01 / 10", "AIML - B3"],
    quote: "College mein kisi ne guide kiya tha. Ab hamari baari hai.",
    accent: "text-maroon",
    turn: "rotate-[0.35deg]",
    Icon: Rocket,
  },
] as const;

const work = [
  {
    title: "Preserve",
    description: "Notes, important topics and resources from seniors so they don’t get lost.",
    Icon: BookOpen,
    tone: "bg-card",
  },
  {
    title: "Simplify",
    description: "Help juniors find what to study, what to skip, and where to start.",
    Icon: Target,
    tone: "bg-sticky/35",
  },
  {
    title: "Connect",
    description: "Juniors with seniors for guidance, mentorship and real experiences.",
    Icon: Users,
    tone: "bg-legacy-blue",
  },
  {
    title: "Pass it forward",
    description: "Today’s juniors become tomorrow’s Bhaiyas & Didis, keeping the legacy alive.",
    Icon: Leaf,
    tone: "bg-legacy-rose",
  },
] as const;

const legacySteps = [
  { title: "Senior", description: "Has already been through it", Icon: Users },
  { title: "Shares notes + experience", description: "Handwritten notes, resources, tips", Icon: BookOpen },
  { title: "Junior", description: "Learns + grows", Icon: Sprout },
  { title: "Learns + grows", description: "Finds direction and confidence", Icon: Lightbulb },
  { title: "Becomes Senior", description: "With more experience and knowledge", Icon: Compass },
  { title: "Shares it forward", description: "Helps the next generation", Icon: Heart },
] as const;

const beliefs = [
  { copy: "Good notes shouldn’t disappear after graduation.", Icon: Lightbulb },
  { copy: "Seniors shouldn’t have to be strangers.", Icon: Users },
  { copy: "Juniors shouldn’t have to figure everything out alone.", Icon: Sprout },
  { copy: "Knowledge becomes more valuable when it’s passed on.", Icon: Heart },
] as const;

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <p className="font-hand text-xl text-indigo-ink sm:text-2xl">{eyebrow}</p>
      <h2 className="mt-1 text-3xl leading-tight sm:text-5xl">{title}</h2>
      <span aria-hidden="true" className="mx-auto mt-5 block h-0.5 w-12 bg-marigold" />
    </header>
  );
}

function MountainLinework() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-56 w-full text-indigo-ink opacity-[0.07]"
      viewBox="0 0 1200 260"
      preserveAspectRatio="none"
      fill="none"
    >
      <path d="M0 220 165 88l74 63 96-112 115 139 109-88 117 116 137-161 92 105 75-63 140 133" stroke="currentColor" strokeWidth="2" />
      <path d="M0 238c164-28 264-25 408-3 136 21 265 21 385-3 163-32 260-14 407 9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="7 8" />
    </svg>
  );
}

function AboutPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative border-b border-border px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
        <MountainLinework />
        <div className="relative mx-auto max-w-6xl">
          <header className="mx-auto max-w-3xl text-center flip-in">
            <p className="font-hand text-xl text-indigo-ink sm:text-2xl">Meet the people behind it</p>
            <h1 className="mt-2 text-4xl leading-tight sm:text-6xl">Sanya &amp; Kushagra</h1>
            <span aria-hidden="true" className="mx-auto mt-5 block h-0.5 w-12 bg-marigold" />
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Two CSE ’27 students at UPES, trying to make college a little easier for every junior.
            </p>
          </header>

          <div className="mt-12 grid gap-7 md:grid-cols-2 md:gap-8 lg:mt-16">
            {founders.map(({ name, role, initials, credentials, quote, accent, turn, Icon }) => (
              <article key={name} className={`founder-card reveal-card ${turn}`}>
                <div className="flex items-start justify-between gap-4 border-b border-border pb-5">
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-border bg-secondary font-display text-xl text-foreground shadow-sm">
                      {initials}
                    </div>
                    <div>
                      <h2 className="text-2xl leading-tight sm:text-3xl">{name}</h2>
                      <p className="mt-1 text-sm font-medium text-muted-foreground">{role}</p>
                    </div>
                  </div>
                  <Icon aria-hidden="true" className={`mt-1 h-6 w-6 shrink-0 ${accent}`} strokeWidth={1.6} />
                </div>

                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                  {credentials.map((credential) => (
                    <li key={credential} className="flex items-center gap-2">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-marigold" />
                      {credential}
                    </li>
                  ))}
                </ul>

                <blockquote className={`mt-8 border-l-2 border-current pl-4 font-hand text-2xl leading-snug ${accent}`}>
                  “{quote}”
                </blockquote>
              </article>
            ))}
          </div>
          <p className="mt-9 text-center font-hand text-xl text-maroon -rotate-1">
            built between classes, deadlines &amp; chai breaks ♡
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="What we actually do" title="Virasat in 4 simple steps" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {work.map(({ title, description, Icon, tone }, index) => (
              <article key={title} className={`mission-card reveal-card ${tone}`}>
                <span className="font-hand text-lg text-maroon">0{index + 1}</span>
                <Icon aria-hidden="true" className="mt-7 h-7 w-7 text-indigo-ink" strokeWidth={1.5} />
                <h3 className="mt-4 text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="kraft-panel border-y border-border px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="The Legacy Continues" title="A chain worth continuing." />
          <p className="mx-auto mt-7 w-fit -rotate-2 bg-sticky px-4 py-2 font-hand text-xl text-accent-foreground shadow-sm">
            It’s a cycle, not a one-time help.
          </p>

          <div className="legacy-cycle relative mx-auto mt-14 max-w-7xl pb-20 lg:pb-24">
            <div className="grid gap-0 lg:grid-cols-[1fr_auto_1.2fr_auto_1fr_auto_1fr_auto_1.2fr_auto_1.2fr] lg:items-center">
              {legacySteps.map(({ title, description, Icon }, index) => (
                <div key={title} className="contents">
                  <article className="legacy-step relative z-10">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary">
                      <Icon aria-hidden="true" className="h-5 w-5 text-maroon" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-4 text-lg leading-tight">{title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{description}</p>
                  </article>
                  {index < legacySteps.length - 1 && (
                    <span aria-hidden="true" className="grid place-items-center py-2 text-maroon lg:px-2 lg:py-0">
                      <ArrowDown className="h-5 w-5 lg:hidden" />
                      <ArrowRight className="hidden h-5 w-5 lg:block legacy-arrow" />
                    </span>
                  )}
                </div>
              ))}
            </div>
            <svg aria-hidden="true" className="cycle-return hidden lg:block" viewBox="0 0 1000 105" fill="none" preserveAspectRatio="none">
              <path d="M960 6 C950 92 70 104 35 18" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
              <path d="m25 28 10-12 13 8" stroke="currentColor" strokeWidth="2" />
            </svg>
            <div className="mt-4 flex items-center justify-center gap-2 font-hand text-xl text-indigo-ink lg:hidden">
              <span aria-hidden="true" className="text-2xl">↺</span> and the next chapter begins
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Things we believe in" title="Hum maante hain…" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {beliefs.map(({ copy, Icon }) => (
              <article key={copy} className="belief-card bg-background p-6 sm:p-7">
                <Icon aria-hidden="true" className="h-6 w-6 text-maroon" strokeWidth={1.5} />
                <p className="mt-5 font-display text-lg leading-snug">{copy}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 grid items-end gap-8 border-t border-border pt-10 md:grid-cols-[1fr_auto]">
            <p className="font-hand text-3xl leading-tight text-indigo-ink">
              Good notes.<br />Better juniors.<br /><span className="text-maroon">A stronger UPES.</span>
            </p>
            <address className="not-italic md:text-right">
              <p className="mb-2 text-xs font-semibold uppercase text-muted-foreground">Write to us</p>
              <a className="block text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-maroon" href="mailto:sanya.120145@stu.upes.ac.in">
                sanya.120145@stu.upes.ac.in
              </a>
              <a className="mt-2 block text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-maroon" href="mailto:kushagra.121124@stu.upes.ac.in">
                kushagra.121124@stu.upes.ac.in
              </a>
            </address>
          </div>
        </div>
      </section>
    </div>
  );
}