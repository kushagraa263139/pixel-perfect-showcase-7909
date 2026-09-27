import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { site } from "@/config/site";
import { getSemester } from "@/data/curriculum";

export const Route = createFileRoute("/semester/$sem/")({
  loader: ({ params }) => {
    const semester = getSemester(params.sem);
    if (!semester) throw notFound();
    return { semester };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Semester not found" }, { name: "robots", content: "noindex" }] };
    }
    const n = loaderData.semester.number;
    return {
      meta: [
        { title: `Semester ${n} — ${site.name}` },
        {
          name: "description",
          content: `Subjects, handwritten notes, teacher PDFs and video picks for semester ${n}.`,
        },
        { property: "og:title", content: `Semester ${n} — ${site.name}` },
        {
          property: "og:description",
          content: `Everything you need for semester ${n} exams, in one place.`,
        },
      ],
    };
  },
  component: SemesterPage,
});

function SemesterPage() {
  const { semester } = Route.useLoaderData();
  const [query, setQuery] = useState("");

  if (semester.status !== "active") {
    return (
      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <p className="font-hand text-2xl text-indigo-ink">Semester {semester.number}</p>
        <h1 className="mt-2 text-4xl">Abhi thoda ruk jao 🙂</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          {semester.note} Iske notes scan ho rahe hain, videos shortlist ho rahe hain. Jab
          tayaar hoga, yahi page khul jayega — 404 nahi milega.
        </p>
        <div className="mx-auto mt-8 w-fit -rotate-2 bg-sticky px-5 py-3 font-hand text-xl text-accent-foreground torn-bottom">
          Status: kaam chalu hai
        </div>
        <div className="mt-10">
          <Link
            to="/semesters"
            className="rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Doosra semester dekho
          </Link>
        </div>
      </section>
    );
  }

  const subjects = semester.subjects.filter((s) =>
    `${s.name} ${s.code} ${s.tag}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <Link to="/semesters" className="text-sm text-muted-foreground hover:text-foreground">
        ← Saare semesters
      </Link>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-hand text-xl text-maroon">{semester.label}</p>
          <h1 className="text-4xl">Semester {semester.number}</h1>
          <p className="mt-2 max-w-xl text-muted-foreground">{semester.note}</p>
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Subject dhoondo…"
          className="w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring sm:w-72"
        />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 flip-in">
        {subjects.map((s) => (
          <Link
            key={s.slug}
            to="/semester/$sem/$subject"
            params={{ sem: semester.slug, subject: s.slug }}
            className="group rounded-md border border-border bg-card p-5 tilt-card"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-widest text-muted-foreground">
                {s.code}
              </span>
              <span className="-rotate-2 bg-sticky px-2 py-0.5 font-hand text-base text-accent-foreground">
                {s.tag}
              </span>
            </div>
            <h2 className="mt-3 text-xl leading-snug">{s.name}</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {s.handwritten.length} handwritten · {s.teacher.length} official ·{" "}
              {s.videos.length} videos
            </p>
          </Link>
        ))}
      </div>

      {subjects.length === 0 && (
        <p className="mt-10 font-hand text-2xl text-muted-foreground">
          Is naam ka subject nahi mila — spelling check kar lo? 👀
        </p>
      )}
    </section>
  );
}
