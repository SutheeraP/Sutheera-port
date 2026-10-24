const inlineCodePattern = /(`[^`]+`)/g;

export default function RichText({ children }) {
  return children.split(inlineCodePattern).map((part, index) =>
    part.startsWith("`") && part.endsWith("`") ? (
      <code key={index} className="inline-code">
        {part.slice(1, -1)}
      </code>
    ) : (
      part
    )
  );
}
