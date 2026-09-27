import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { GITHUB_URL } from "@/lib/site";

interface GitHubRepository {
  name: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
}

type Project = {
  slug: string;
  title: string;
  domain: string;
  description: string;
  featured?: boolean;
};

// Mirrors the pinned repos on github.com/sarmijavier. None of these repos carry
// a GitHub description, so summaries are written here from each repo's contents.
// Ordered by how directly each one shows AI and security work.
const PROJECTS: Project[] = [
  {
    slug: "Privacy-Homomorphism-App",
    title: "Statistics on encrypted health data",
    domain: "Privacy · Cryptography",
    description:
      "Homomorphic encryption app (Domingo-Ferrer scheme) that computes statistics on encrypted health data without ever decrypting it.",
    featured: true,
  },
  {
    slug: "identifying-real-images-and-ai-generated-images",
    title: "Real vs. AI-generated image detection",
    domain: "Machine learning · Computer vision",
    description:
      "Classifier that distinguishes real photos from AI-generated (Midjourney) images using feature engineering.",
    featured: true,
  },
  {
    slug: "Prediction-with-Supervised-Learning-Models",
    title: "Supervised learning from scratch",
    domain: "Machine learning",
    description:
      "Supervised learning models built from scratch and benchmarked against library implementations, covering regularization, cross-validation, and ensembling.",
  },
  {
    slug: "crack_segmentation_task",
    title: "Crack segmentation and plate recognition",
    domain: "Computer vision",
    description:
      "Image segmentation and pattern recognition coursework: surface crack detection and license-plate character recognition.",
  },
  {
    slug: "optimization_with_genetic_algorithms",
    title: "Metaheuristics for graph coloring",
    domain: "Optimization",
    description:
      "Genetic algorithm, simulated annealing, and tabu search implementations benchmarked on graph-coloring optimization problems.",
  },
  {
    slug: "machine_learning_practice",
    title: "MNIST digit classifier",
    domain: "Machine learning",
    description: "Hands-on ML practice, including a digit classifier trained and evaluated on MNIST.",
  },
];

type ProjectWithStats = Project & { url: string; language?: string | null; stars?: number };

// GitHub data only enriches the curated list with language and stars. If the API
// is unreachable at build time the list still renders, linking straight to each repo.
async function getProjects(): Promise<ProjectWithStats[]> {
  const fallback = PROJECTS.map((p) => ({ ...p, url: `${GITHUB_URL}/${p.slug}` }));
  const token = process.env.GITHUB_TOKEN;

  try {
    const res = await fetch("https://api.github.com/users/sarmijavier/repos?per_page=100", {
      headers: {
        Accept: "application/vnd.github+json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    if (!res.ok) return fallback;

    const repos: GitHubRepository[] = await res.json();
    return fallback.map((p) => {
      const repo = repos.find((r) => r.name === p.slug);
      return repo
        ? { ...p, url: repo.html_url, language: repo.language, stars: repo.stargazers_count }
        : p;
    });
  } catch {
    return fallback;
  }
}

function RepoMeta({ project }: { project: ProjectWithStats }) {
  return (
    <p className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[0.8rem] text-ink-soft">
      <span className="text-foreground/70">{project.slug}</span>
      {project.language && <span>{project.language}</span>}
      {project.stars ? (
        <span className="tabular-nums">
          {project.stars} {project.stars === 1 ? "star" : "stars"}
        </span>
      ) : null}
    </p>
  );
}

export default async function Projects() {
  const projects = await getProjects();
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="border-t border-line px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Projects
          </h2>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-signal underline decoration-signal/40 hover:decoration-signal"
          >
            <FaGithub aria-hidden size={15} />
            All repositories
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>

        <ul className="mt-12 grid gap-px bg-line md:mt-16 md:grid-cols-2">
          {featured.map((p, i) => (
            <li key={p.slug} className="bg-background">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-full flex-col gap-4 py-9 md:py-10 ${i % 2 ? "md:pl-10" : "md:pr-10"}`}
              >
                <h3 className="text-2xl font-semibold leading-snug text-foreground transition-colors group-hover:text-signal md:text-3xl">
                  {p.title.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="whitespace-nowrap">
                    {p.title.split(" ").at(-1)}
                    <ArrowUpRight
                      aria-hidden
                      strokeWidth={1.75}
                      className="ml-1.5 inline size-[0.9em] align-[-0.08em] text-signal transition-transform duration-200 ease-(--ease-out-strong) group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </h3>
                <p className="-mt-1 text-sm text-foreground/70">{p.domain}</p>
                <p className="max-w-[52ch] text-base leading-relaxed text-ink-soft">
                  {p.description}
                </p>
                <div className="mt-auto pt-2">
                  <RepoMeta project={p} />
                </div>
                <span className="sr-only">(opens on GitHub in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>

        <ul className="border-t border-line">
          {rest.map((p) => (
            <li key={p.slug} className="border-b border-line">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-2 py-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:gap-12 md:py-8"
              >
                <div>
                  <h3 className="text-lg font-medium text-foreground transition-colors group-hover:text-signal md:text-xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/70">{p.domain}</p>
                </div>
                <div>
                  <p className="max-w-[60ch] text-sm leading-relaxed text-ink-soft md:text-base">
                    {p.description}
                  </p>
                  <div className="mt-3">
                    <RepoMeta project={p} />
                  </div>
                </div>
                <span className="sr-only">(opens on GitHub in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
