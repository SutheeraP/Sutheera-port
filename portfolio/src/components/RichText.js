// Renders a plain string, turning `backtick` spans into inline code.
export default function RichText({ children }) {
  return children.split(/(`[^`]+`)/g).map((part, i) =>
    part.startsWith("`") && part.endsWith("`") ? (
      <code key={i} className="inline-code">
        {part.slice(1, -1)}
      </code>
    ) : (
      part
    )
  );
}
