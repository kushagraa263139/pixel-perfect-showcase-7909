import { Link } from "@tanstack/react-router";
import type { Semester } from "@/data/curriculum";

export function SemesterCard({ semester }: { semester: Semester }) {
  const locked = semester.status !== "active";

  const inner = (
    <div
      className={`relative h-full overflow-hidden rounded-md border p-5 tilt-card ${
        locked
          ? "border-dashed border-border bg-muted/60 text-muted-foreground"
          : "border-border bg-card shadow-[0_2px_0_0_var(--color-rule)]"
      }`}
    >
      {locked && (
        <span className="absolute -right-8 top-4 rotate-12 bg-sticky px-8 py-1 font-hand text-sm text-accent-foreground shadow-sm">
          Coming soon
        </span>
      )}
      <p className="font-hand text-lg text-maroon">Semester</p>
      <p
        className={`font-display text-5xl leading-none ${locked ? "" : "text-foreground"}`}
      >
        {semester.number}
      </p>
      <p className="mt-3 text-sm font-medium">{semester.label}</p>
      <p className="mt-1 text-sm leading-snug">{semester.note}</p>
      {!locked && (
        <p className="mt-4 text-sm font-medium text-primary">
          {semester.subjects.length} subjects →
        </p>
      )}
    </div>
  );

  return (
    <Link to="/semester/$sem" params={{ sem: semester.slug }} className="block h-full">
      {inner}
    </Link>
  );
}
