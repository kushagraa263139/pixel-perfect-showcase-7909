import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { semesters } from "@/data/curriculum";
import { SemesterCard } from "@/components/SemesterCard";

export const Route = createFileRoute("/semesters")({
  head: () => ({
    meta: [
      { title: `All semesters — ${site.name}` },
      {
        name: "description",
        content: "Semester 1 to 8 — notes, PDFs and video picks for every active semester.",
      },
      { property: "og:title", content: `All semesters — ${site.name}` },
      {
        property: "og:description",
        content: "Pick your semester and get the notes seniors actually used.",
      },
    ],
  }),
  component: SemestersPage,
});

function SemestersPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="font-hand text-xl text-indigo-ink">Saare semesters</p>
      <h1 className="mt-1 text-4xl">Kahaan se shuru karein?</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Jo semesters vivid dikh rahe hain, wo poore ready hain. Baaki pe kaam chal raha hai —
        khol ke dekh lo, update mil jayega.
      </p>
      <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 flip-in">
        {semesters.map((s) => (
          <SemesterCard key={s.slug} semester={s} />
        ))}
      </div>
    </section>
  );
}
