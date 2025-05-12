import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

export default async function Projects() {

  const data = await fetch(
    'https://api.github.com/users/sarmijavier/repos?per_page=10&page=1',
    {
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            Accept: 'application/vnd.github+json',
        },
    }
)
  const repos = await data.json()

  return (
	<section className="flex flex-col gap-6 md:gap-8 items-center justify-center mt-8 md:mt-10">
	<h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
		Projects
	</h1>
	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
		{repos.map((repo: GitHubRepository) => (
		<Card key={repo.id}>
			<CardHeader>
			<CardTitle>{repo.name}</CardTitle>
			<CardDescription>{repo.description || 'No description available'}</CardDescription>
			</CardHeader>
			<CardContent>
			<div className="space-y-2">
				{repo.language && (
				<p className="text-sm text-gray-600 dark:text-gray-400">
					Language: {repo.language}
				</p>
				)}
				<div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
				<p>Stars: {repo.stargazers_count}</p>
				<p>Forks: {repo.forks_count}</p>
				</div>
			</div>
			</CardContent>
			<CardFooter>
			<a
				href={repo.html_url}
				target="_blank"
				rel="noopener noreferrer"
				className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
			>
				View on GitHub →
			</a>
			</CardFooter>
		</Card>
		))}
	</div>
	</section>

  );
}
