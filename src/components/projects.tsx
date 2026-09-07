import Reveal from "@/components/reveal";

interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  html_url: string;
}

// Mirrors the pinned repos on github.com/sarmijavier, in the same order.
// None of these repos carry a GitHub description, so short summaries are
// provided here based on each repo's actual contents.
const PINNED_REPOS: { name: string; description: string }[] = [
  {
    name: "optimization_with_genetic_algorithms",
    description:
      "Genetic algorithm, simulated annealing, and tabu search implementations benchmarked on graph-coloring optimization problems.",
  },
  {
    name: "machine_learning_practice",
    description: "Hands-on ML practice, including a digit classifier trained and evaluated on MNIST.",
  },
  {
    name: "crack_segmentation_task",
    description: "Image segmentation and pattern recognition coursework: surface crack detection and license-plate character recognition.",
  },
  {
    name: "identifying-real-images-and-ai-generated-images",
    description: "Classifier that distinguishes real photos from AI-generated (Midjourney) images using feature engineering.",
  },
  {
    name: "Prediction-with-Supervised-Learning-Models",
    description: "Supervised learning models built from scratch and benchmarked against library implementations, covering regularization, cross-validation, and ensembling.",
  },
  {
    name: "Privacy-Homomorphism-App",
    description: "Homomorphic encryption app (Domingo-Ferrer scheme) that computes statistics on encrypted health data without ever decrypting it.",
  },
];

async function getRepos(): Promise<GitHubRepository[]> {
  const res = await fetch("https://api.github.com/users/sarmijavier/repos?per_page=100", {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) return [];

  const repos: GitHubRepository[] = await res.json();
  return PINNED_REPOS.map(({ name, description }) => {
    const repo = repos.find((r) => r.name === name);
    return repo ? { ...repo, description } : null;
  }).filter((repo) => repo !== null);
}

export default async function Projects() {
  const repos = await getRepos();

  return (
    <section id="projects" className="border-t border-line px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Projects
          </h2>
        </Reveal>

        {repos.length === 0 ? (
          <p className="mt-8 max-w-md text-base text-ink-soft">
            Repository data is unavailable right now. See the full list on{" "}
            <a
              href="https://github.com/sarmijavier"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-signal"
            >
              GitHub
            </a>
            .
          </p>
        ) : (
          <ul className="mt-12 divide-y divide-line border-t border-line md:mt-16">
            {repos.map((repo, i) => (
              <li key={repo.id}>
                <Reveal delay={Math.min(i * 0.06, 0.3)}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid gap-2 py-7 transition-colors md:grid-cols-[1.4fr_2fr_auto] md:items-center md:gap-8 md:py-8"
                  >
                    <span className="text-lg font-medium text-foreground group-hover:text-signal md:text-xl">
                      {repo.name}
                    </span>
                    <span className="max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
                      {repo.description}
                    </span>
                    <span className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.1em] text-ink-soft">
                      {repo.language && <span>{repo.language}</span>}
                      <span>{repo.stargazers_count} stars</span>
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
