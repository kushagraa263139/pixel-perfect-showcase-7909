import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/config/site";
import { semesters, seniors } from "@/data/curriculum";
import { SemesterCard } from "@/components/SemesterCard";
import { WaitlistForm } from "@/components/WaitlistForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — Toppers ke notes, seniors ki taraf se` },
      {
        name: "description",
        content:
          "Semester-wise handwritten topper notes, teacher PDFs aur hand-picked YouTube videos for mid-sem and end-sem exams.",
      },
      { property: "og:title", content: `${site.name} — Seniors ke notes, juniors ke liye` },
      {
        property: "og:description",
        content: "Handwritten notes, teacher PDFs and curated exam videos, semester-wise.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const active = semesters.filter((s) => s.status === "active");

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <p className="font-hand text-xl text-indigo-ink">Ek chhoti si baat, dil se —</p>
            <h1 className="mt-3 font-hand text-4xl leading-tight text-maroon sm:text-5xl lg:text-6xl">
              {site.tagline.line1}
            </h1>
            <p className="mt-3 font-hand text-2xl text-ink/80 sm:text-3xl">
              {site.tagline.line2}
            </p>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
              {site.blurb}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/semesters"
                className="rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Apna semester chuno
              </Link>
              <Link to="/about" className="text-sm font-medium text-foreground underline decoration-accent decoration-2 underline-offset-4">
                Hum kaun hain?
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="tape rotate-1 rounded-sm border border-border bg-card p-6 ruled shadow-[0_10px_30px_-24px_var(--color-ink)]">
              <p className="font-hand text-2xl text-maroon">Bhaiya-Didi's note</p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                First sem mein humein kuch nahi mila — na notes, na guidance, na yeh pata
                ki kaunsa unit important hai. Isliye hum sab kuch ek jagah rakh rahe hain:
                jo notes se humne khud padha, jo videos ne raat bhar bachaya.
              </p>
              <p className="mt-4 font-hand text-xl text-indigo-ink">
                Bas padho. Baaki hum dekh lenge.
              </p>
            </div>
            <div className="mt-4 ml-auto w-fit -rotate-2 bg-sticky px-4 py-2 font-hand text-lg text-accent-foreground torn-bottom">
              {active.length} semesters live · baaki aa rahe hain
            </div>
          </div>
        </div>
      </section>

      {/* Semesters */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-3xl sm:text-4xl">Choose your semester</h2>
          <p className="font-hand text-xl text-muted-foreground">
            Odd sems ready hain, even sems ban rahe hain
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {semesters.map((s) => (
            <SemesterCard key={s.slug} semester={s} />
          ))}
        </div>
      </section>

      {/* Our story */}
      <section className="border-y border-border kraft-panel">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="text-3xl sm:text-4xl">Yeh site kyun bani</h2>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Har batch wahi galti dohraata hai — exam se do din pehle WhatsApp pe
              blurry photos dhoondhna, random playlists mein time barbaad karna.
            </p>
            <p>
              Toh humne apne teen saal ke notes, seniors ke scans aur best videos
              ek jagah rakh diye. Koi login nahi, koi paisa nahi. Bas le jao.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {seniors.map((s) => (
                <span
                  key={s.name}
                  className="rounded-sm border border-border bg-card px-3 py-1.5 font-hand text-lg"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-md border border-border bg-card p-8 sm:p-12">
          <p className="font-hand text-xl text-maroon">Coming soon</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">1-on-1 Mentorship</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Notes toh mil gaye — par kis subject se shuru karna hai, internship kab
            dhoondni hai, backlog ho gaya toh kya? Us sab ke liye ek senior, sirf aapke
            liye, 30 minute.
          </p>
          <div className="mt-6">
            <WaitlistForm />
          </div>
        </div>
      </section>
    </>
  );
}
