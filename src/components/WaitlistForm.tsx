import { useState } from "react";

export function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="font-hand text-2xl text-maroon">
        Ho gaya! Jab mentorship live hogi, pehle aapko batayenge. ❤️
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
      className={`flex w-full flex-col gap-2 sm:flex-row ${compact ? "max-w-md" : "max-w-lg"}`}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="apna.email@college.ac.in"
        className="flex-1 rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
      />
      <button
        type="submit"
        className="rounded-sm bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
      >
        Waitlist mein daal do
      </button>
    </form>
  );
}
