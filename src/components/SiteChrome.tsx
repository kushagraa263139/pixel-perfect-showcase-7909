import { Link } from "@tanstack/react-router";
import { site } from "@/config/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/semesters", label: "Semesters" },
  { to: "/mentorship", label: "Mentorship" },
  { to: "/about", label: "Bhaiya-Didis" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-sm bg-primary text-primary-foreground font-display text-sm">
            {site.shortName}
          </span>
          <span className="font-display text-lg leading-none">{site.name}</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-sm px-2.5 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border kraft-panel">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div>
          <p className="font-hand text-2xl text-maroon">{site.tagline.line2}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {site.name} \u2014 seniors ka chhota sa gift, juniors ke liye.
          </p>
        </div>
        <p className="text-sm text-muted-foreground">{site.email}</p>
      </div>
    </footer>
  );
}
