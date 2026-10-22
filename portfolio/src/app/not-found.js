import Link from "next/link";

export const metadata = { title: "Not found" };

export default function NotFound() {
  return (
    <>
      <h1 className="text-lg font-medium">Nothing here</h1>
      <p className="mt-2 text-muted">
        This page doesn't exist, or it moved. <Link href="/" className="link">Go home</Link>.
      </p>
      <p className="hand mt-6 inline-block -rotate-2">sorry about that</p>
    </>
  );
}
