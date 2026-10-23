// Line doodles shown as project thumbnails, keyed by project slug. Drawn on a
// 48 by 48 grid with the current text colour so they follow light and dark mode.
const doodles = {
  thaitober: (
    <>
      <path d="M13 35 L31 12 c1 -1 3 -1 4 0 l1 1 c1 1 1 3 0 4 L18 39 L11 41 Z" />
      <path d="M28.5 15 l5 4" />
      <path d="M27 33 c1 -3 5 -3 5 0 c0 -3 4 -3 5 0 c0 3 -5 6 -5 6 c0 0 -5 -3 -5 -6 Z" />
      <path d="M38 9 v4 M36 11 h4" />
    </>
  ),
  retirekub: (
    <>
      <path d="M8 8 V40 H40" />
      <path d="M13 33 L20 25 L26 29 L37 16" />
      <path d="M31 16 H37 V22" />
      <circle cx="20" cy="12" r="4" />
      <path d="M20 10 v4" />
    </>
  ),
  "bb-shop": (
    <>
      <path d="M18 10 L12 13 L7 21 L12 24 L15 20 L15 39 L33 39 L33 20 L36 24 L41 21 L36 13 L30 10" />
      <path d="M18 10 L24 17 L30 10" />
      <path d="M24 17 V36" />
    </>
  ),
  duni: (
    <>
      <path d="M13 22 L16 40 H32 L35 22 Z" />
      <path d="M12 22 c-2 -3 0 -7 4 -6 c0 -4 5 -6 8 -3 c2 -3 8 -2 8 2 c3 -1 6 2 4 7" />
      <circle cx="20.5" cy="29" r="1" fill="currentColor" stroke="none" />
      <circle cx="27.5" cy="29" r="1" fill="currentColor" stroke="none" />
      <path d="M22 32.5 c1 1 3 1 4 0" />
    </>
  ),
  mearai: (
    <>
      <path d="M10 15 c0 -3 2 -5 5 -5 h18 c3 0 5 2 5 5 v12 c0 3 -2 5 -5 5 h-13 l-7 6 l1 -6 c-2 0 -4 -2 -4 -5 Z" />
      <circle cx="18" cy="21" r="1" fill="currentColor" stroke="none" />
      <circle cx="24" cy="21" r="1" fill="currentColor" stroke="none" />
      <circle cx="30" cy="21" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  "ducky-lucky": (
    <>
      <path d="M14 22 c-4 -2 -6 -6 -5 -10 c1 -4 5 -6 9 -5 c4 1 6 5 5 9 c-0.5 2 -1.5 3 -2.5 4 c4 1 8 2 12 0 c3 -2 6 -1 7 1 c1 9 -6 17 -16 16 c-8 -1 -13 -7 -12 -13 c0 -1 1 -2 2.5 -2 Z" />
      <path d="M9 12 l-4 1.5 l4.5 2" />
      <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none" />
      <path d="M24 29 c3 3 7 3 10 0" />
    </>
  ),
  visualdsa: (
    <>
      <path d="M24 14 L11 33 M24 14 V33 M24 14 L37 33" />
      <circle cx="24" cy="13" r="5" className="fill-surface" />
      <circle cx="11" cy="35" r="4.5" className="fill-surface" />
      <circle cx="24" cy="35" r="4.5" className="fill-surface" />
      <circle cx="37" cy="35" r="4.5" className="fill-surface" />
    </>
  ),
  "apex-heroic-academy": (
    <>
      <path d="M17 21 c0 -9 14 -9 14 0" />
      <ellipse cx="24" cy="24" rx="16" ry="5" />
      <circle cx="15" cy="24" r="1" fill="currentColor" stroke="none" />
      <circle cx="24" cy="25.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="33" cy="24" r="1" fill="currentColor" stroke="none" />
      <path d="M18 31 L14 41 M30 31 L34 41" />
      <path d="M9 8 v3 M7.5 9.5 h3 M39 11 v3 M37.5 12.5 h3" />
    </>
  ),
  "coral-cojai": (
    <>
      <path d="M24 41 C24 36 23 33 24 29 M24 34 C20 32 17 29 16 24 M16 24 C14 22 13 19 13 16 M16 26 C13 26 11 24 10 21 M24 29 C25 24 24 19 25 15 M25 21 C28 19 29 16 29 13 M24 31 C28 30 32 27 33 22 M33 22 C35 20 36 18 36 16 M32 25 C35 26 38 25 39.5 23" />
      <circle cx="13" cy="14" r="2" />
      <circle cx="9.5" cy="19" r="2" />
      <circle cx="25" cy="13" r="2" />
      <circle cx="29" cy="11" r="2" />
      <circle cx="36" cy="14" r="2" />
      <circle cx="41" cy="21.5" r="2" />
      <path d="M12 41 H36" />
    </>
  ),
};

export default function ProjectDoodle({ slug, className }) {
  const doodle = doodles[slug];
  if (!doodle) return null;
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {doodle}
    </svg>
  );
}
