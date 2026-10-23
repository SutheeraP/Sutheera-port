import ProjectList from "@/components/ProjectList";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description: "Things Sutheera has built, with notes on how and why.",
};

export default function ProjectsPage() {
  return (
    <>
      <h1 className="text-lg font-medium">Projects</h1>
      <p className="mt-2 text-muted">
        Personal, team and course projects. Click one to see more about it.
      </p>
      <div className="mt-10">
        <ProjectList projects={projects} />
      </div>
    </>
  );
}
