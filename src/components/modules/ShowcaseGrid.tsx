import { Github, Play } from "lucide-react";
import { useTranslations } from "next-intl";

export function ShowcaseGrid() {
  const t = useTranslations("ShowcaseGrid");
  const projects = t.raw("projects") as Array<{
    id: string;
    name: string;
    oneLiner: string;
    repo: string;
    demo: string;
  }>;

  return (
    <div className="grid gap-4 text-[#0f1621] md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.id}
          className="rounded-2xl border border-[#e2e6f5] bg-white p-5 shadow-[0_30px_85px_-65px_rgba(15,22,33,0.55)] transition hover:-translate-y-1 hover:border-[#447bff]/60 hover:bg-[#eef2ff]"
        >
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="mt-2 text-sm text-[#44506b]">{project.oneLiner}</p>
          <div className="mt-4 space-y-2 text-sm">
            <a
              href={`https://${project.repo}`}
              className="flex items-center gap-2 text-[#0f1621] transition hover:text-[#447bff]"
            >
              <Github className="h-4 w-4" aria-hidden />
              {project.repo}
            </a>
            <a
              href={`https://${project.demo}`}
              className="flex items-center gap-2 text-[#447bff] transition hover:text-[#5d8cff]"
            >
              <Play className="h-4 w-4" aria-hidden />
              {project.demo}
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ShowcaseGrid;
