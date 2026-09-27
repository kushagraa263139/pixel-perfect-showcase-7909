import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { WaitlistForm } from "@/components/WaitlistForm";

const helps = [
  { t: "Kya padhun pehle?", d: "Subject-wise plan, aapke semester aur backlog ke hisaab se." },
  { t: "Internship kab?", d: "Resume, projects aur timeline — seedhi baat, koi gyaan nahi." },
  { t: "Exam se pehle panic", d: "30 minute call, aur ek realistic 5-din ka plan." },
];

export const Route = createFileRoute("/mentorship")({
  head: () => ({
    meta: [
      { title: `1-on-1 Mentorship (coming soon) — ${site.name}` },
      {
        name: "description",
        content: "Join the waitlist for free 1-on-1 guidance calls with seniors.",
      },
      { property: "og:title", content: `1-on-1 Mentorship — ${site.name}` },
      {
        property: "og:description",
        content: "Seniors se seedhi baat: study plan, internships, exam panic.",
      },
    ],
  }),
  component: MentorshipPage,
});

function MentorshipPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <span className="-rotate-2 inline-block bg-sticky px-3 py-1 font-hand text-lg text-accent-foreground torn-bottom">
        Coming soon
      </span>
      <h1 className="mt-4 text-4xl sm:text-5xl">Ek senior, sirf aapke liye</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Notes se syllabus ban jaata hai, par confidence nahi. Isliye hum 1-on-1 calls
        shuru kar rahe hain — free, 30 minute, bilkul honest advice.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {helps.map((h) => (
          <div key={h.t} className="rounded-md border border-border bg-card p-5 tilt-card">
            <h2 className="font-hand text-2xl text-maroon">{h.t}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{h.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-md border border-border kraft-panel p-8">
        <h2 className="text-2xl">Waitlist join kar lo</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Sirf email. Spam nahi, bas ek message jab slots khulein.
        </p>
        <div className="mt-5">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
