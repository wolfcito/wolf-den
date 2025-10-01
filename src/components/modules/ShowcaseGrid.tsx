const projects = [
  {
    id: "project-1",
    name: "Wolf Alerts",
    oneLiner: "Seguimiento en tiempo real para la manada.",
    repo: "github.com/wolf/alerts",
    demo: "demo.wolfalerts.xyz",
  },
  {
    id: "project-2",
    name: "Pack Streams",
    oneLiner: "Analítica de misiones en vivo.",
    repo: "github.com/wolf/streams",
    demo: "wolfstreams.vercel.app",
  },
  {
    id: "project-3",
    name: "HOWL Points",
    oneLiner: "Recompensas gamificadas para builders.",
    repo: "github.com/wolf/howl",
    demo: "howl.app",
  },
];

export function ShowcaseGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.id}
          className="rounded-2xl border border-white/10 bg-wolf-panel/40 p-5 transition hover:border-wolf-violet/40 hover:bg-wolf-violet/10"
        >
          <h3 className="text-lg font-semibold text-wolf-bone">
            {project.name}
          </h3>
          <p className="mt-2 text-sm text-wolf-bone/70">{project.oneLiner}</p>
          <div className="mt-4 space-y-2 text-sm">
            <a
              href={`https://${project.repo}`}
              className="flex items-center gap-2 text-wolf-cyan hover:underline"
            >
              <span aria-hidden>📦</span>
              {project.repo}
            </a>
            <a
              href={`https://${project.demo}`}
              className="flex items-center gap-2 text-wolf-violet hover:underline"
            >
              <span aria-hidden>▶️</span>
              {project.demo}
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ShowcaseGrid;
