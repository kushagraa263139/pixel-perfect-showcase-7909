# Redesign the Bhaiya-Didis page

## What will change
- Replace the current `/about` content with four connected sections: founders, Virasat’s four steps, the legacy cycle, and shared beliefs.
- Feature Sanya and Kushagra in two large scrapbook-style founder cards, using the supplied credentials, quotes, and contact emails.
- Build an editorial six-step cycle: horizontal with a curved return path on desktop, and a connected vertical timeline on mobile.
- Add subtle Dehradun mountain linework, handwritten annotations, paper details, gentle reveal motion, and restrained hover movement.
- Preserve the existing navigation, footer, typography, cream paper palette, semantic color system, and all unrelated pages.

## Visual treatment
- Follow the selected Heritage Scrapbook direction: lightly rotated paper pieces, archival labels, margin notes, thin borders, and minimal shadows.
- Keep names and personal motivation dominant; credentials remain compact and secondary.
- Give the four mission cards quiet pastel variations from the existing palette, not generic product-card styling.
- Respect reduced-motion settings and keep all text readable at mobile and desktop widths.

## Technical details
- Update `src/routes/about.tsx` for the page structure, responsive layouts, icons, exact copy, and complete page metadata.
- Update `src/styles.css` only for reusable section-specific paper, linework, cycle-arrow, and reveal treatments that cannot be expressed cleanly with existing utilities.
- Verify the page at mobile and desktop sizes, including the curved cycle, stacked timeline, contact links, and unchanged site navigation.

## Files expected to change
- `src/routes/about.tsx`
- `src/styles.css`
