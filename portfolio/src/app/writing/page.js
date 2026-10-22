import WritingList from "@/components/WritingList";
import { articles } from "@/content/writing";

export const metadata = {
  title: "Writing",
  description: "Notes on building things and what I learned along the way.",
};

export default function WritingPage() {
  return (
    <>
      <h1 className="text-lg font-medium">Writing</h1>
      <p className="mt-2 text-muted">
        Notes on building things and what I learned along the way.
      </p>
      <div className="mt-10">
        <WritingList articles={articles} empty="Nothing published yet." />
      </div>
    </>
  );
}
