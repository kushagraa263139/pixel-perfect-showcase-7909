import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { seniors } from "@/data/curriculum";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `Meet the Bhaiya-Didis — ${site.name}` },
      {
        name: "description",
        content: "The seniors who scan the notes, pick the videos and answer your doubts.",
      },
      { property: "og:title", content: `Meet the Bhaiya-Didis — ${site.name}` },
      {
        property: "og:description",
        content: "Chhoti si team, ek hi maqsad: juniors ko wahi de dena jo humein nahi mila.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <p className="font-hand text-xl text-indigo-ink">Meet the</p>
      <h1 className="text-4xl sm:text-5xl">Bhaiya-Didis</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Koi company nahi, koi startup nahi. Bas kuch seniors jinke paas notes the aur
        thoda time. {site.name} isi se bana hai.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {seniors.map((s) => (
          <article
            key={s.name}
            className="rounded-md border border-border bg-card p-6 tilt-card"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-secondary font-display text-xl">
              {s.initials}
            </span>
            <h2 className="mt-4 text-xl">{s.name}</h2>
            <p className="text-sm text-muted-foreground">{s.branch}</p>
            <p className="mt-3 font-hand text-xl text-maroon">“{s.line}”</p>
            <p className="mt-4 border-t border-border pt-3 text-sm text-muted-foreground">
              Contributes: {s.gives}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-12 w-fit -rotate-1 bg-sticky px-5 py-3 font-hand text-xl text-accent-foreground torn-bottom">
        Aap bhi notes dena chahte ho? {site.email} pe likh do.
      </div>
    </section>
  );
}
