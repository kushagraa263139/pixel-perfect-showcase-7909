import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { site } from "@/config/site";
import { getSubject } from "@/data/curriculum";

type Filter = "all" | "handwritten" | "teacher" | "videos";

export const Route = createFileRoute("/semester/$sem/$subject")({
  loader: ({ params }) => {
    const { sem, subject } = getSubject(params.sem, params.subject);
    if (!sem || !subject) throw notFound();
    return { semester: sem, subject };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Subject not found" }, { name: "robots", content: "noindex" }] };
    }
    const { subject, semester } = loaderData;
    return {
      meta: [
        { title: `${subject.name} notes — ${site.name}` },
        {
          name: "description",
          content: `Handwritten topper notes, teacher slides and best YouTube videos for ${subject.name} (Semester ${semester.number}).`,
        },
        { property: "og:title", content: `${subject.name} notes — ${site.name}` },
        {
          property: "og:description",
          content: `Mid-sem and end-sem material for ${subject.name}, picked by seniors.`,
        },
      ],
    };
  },
  component: SubjectPage,
});

function SubjectPage() {
  const { semester, subject } = Route.useLoaderData();
  const [filter, setFilter] = useState<Filter>("all");
  const show = (f: Filter) => filter === "all" || filter === f;

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "Sab kuch" },
    { key: "handwritten", label: "Handwritten" },
    { key: "teacher", label: "Teacher notes" },
    { key: "videos", label: "Videos" },
  ];

  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <Link
        to="/semester/$sem"
        params={{ sem: semester.slug }}
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Semester {semester.number}
      </Link>

      <p className="mt-4 text-xs font-semibold tracking-widest text-muted-foreground">
        {subject.code}
      </p>
      <h1 className="text-4xl">{subject.name}</h1>
      <p className="mt-2 font-hand text-2xl text-maroon">
        Teen cheezein: hath se likhe notes, official slides, aur video picks.
      </p>

      <div className="mt-7 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`rounded-sm border px-3 py-1.5 text-sm transition-colors ${
              filter === f.key
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* a) Handwritten */}
      {show("handwritten") && (
        <div className="mt-12 flip-in">
          <h2 className="text-2xl">Topper's handwritten notes</h2>
          <p className="mt-1 font-hand text-xl text-indigo-ink">
            Scans — jaise register se seedha nikale ho
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {subject.handwritten.map((n) => (
              <article
                key={n.id}
                className="rounded-sm border border-border bg-card p-5 ruled tilt-card"
              >
                <h3 className="font-display text-lg leading-snug">{n.title}</h3>
                <p className="mt-2 font-hand text-lg text-maroon">“{n.topperNote}”</p>
                <div className="mt-4 flex items-center gap-3 border-t border-border pt-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-secondary font-display text-sm">
                    {n.topper.slice(0, 1)}
                  </span>
                  <div className="text-sm">
                    <p className="font-medium">{n.topper}</p>
                    <p className="text-muted-foreground">{n.pages} pages · {n.covers}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* b) Teacher notes */}
      {show("teacher") && (
        <div className="mt-14 flip-in">
          <h2 className="text-2xl">Teacher-provided notes</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Official material — exactly what was taught in class.
          </p>
          <ul className="mt-5 divide-y divide-border overflow-hidden rounded-sm border border-border bg-card">
            {subject.teacher.map((t) => (
              <li
                key={t.id}
                className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 transition-colors hover:bg-secondary/60"
              >
                <div>
                  <p className="font-medium">{t.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {t.teacher} · {t.unit}
                  </p>
                </div>
                <span className="rounded-sm border border-border px-2 py-1 text-xs font-semibold tracking-wide text-muted-foreground">
                  {t.format}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* c) Videos */}
      {show("videos") && (
        <div className="mt-14 flip-in">
          <h2 className="text-2xl">Best videos for mid-sem & end-sem</h2>
          <p className="mt-1 font-hand text-xl text-indigo-ink">
            40 videos dekhe, 3 bache — yeh wahi teen hain
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {subject.videos.map((v) => (
              <article
                key={v.id}
                className="overflow-hidden rounded-sm border border-border bg-card tilt-card"
              >
                <div className="relative grid h-28 place-items-center bg-maroon/90">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-background/90 text-sm text-foreground">
                    ▶
                  </span>
                  <span className="absolute bottom-2 right-2 rounded-sm bg-background/85 px-1.5 py-0.5 text-xs">
                    {v.duration}
                  </span>
                </div>
                <div className="p-4">
                  <span className="-rotate-1 inline-block bg-sticky px-2 py-0.5 font-hand text-base text-accent-foreground">
                    {v.exam}
                  </span>
                  <h3 className="mt-2 font-display text-base leading-snug">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.channel}</p>
                  <p className="mt-2 text-sm">{v.why}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
