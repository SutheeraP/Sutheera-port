// The big wobbly "Hello" from the first version of the site. Each letter is
// tilted and nudged a little so it looks hand-placed.
const letters = [
  { letter: "H", className: "rotate-[14deg]" },
  { letter: "e", className: "-rotate-[11deg] translate-y-2 sm:translate-y-3" },
  { letter: "l", className: "-rotate-[14deg]" },
  { letter: "l", className: "-rotate-[11deg] translate-y-1" },
  { letter: "o", className: "rotate-[11deg]" },
];

export default function PlayfulHello({ id }) {
  return (
    <h2
      id={id}
      aria-label="Hello"
      className="flex text-4xl font-bold leading-none text-accent sm:text-5xl"
    >
      {letters.map(({ letter, className }, index) => (
        <span key={index} aria-hidden="true" className={`inline-block ${className}`}>
          {letter}
        </span>
      ))}
    </h2>
  );
}
