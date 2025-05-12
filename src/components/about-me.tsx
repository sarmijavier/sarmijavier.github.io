import Image from "next/image";

export default async function AboutMe() {
  return (
	<section className="flex flex-col md:flex-row gap-8 justify-between">
	<div>
		<h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
		About Me
		</h1>
		<div className="space-y-4 md:space-y-6 max-w-2xl">
		<p className="text-base md:text-lg leading-relaxed">
			I&apos;m a software engineer with over 3 years of experience building and maintaining software applications using 
			<span className="font-semibold text-purple-600 dark:text-purple-400"> Python</span>,
			<span className="font-semibold text-blue-600 dark:text-blue-400"> TypeScript</span>, and a wide range of modern tools and frameworks.
		</p>
		
		<p className="text-base md:text-lg leading-relaxed">
			While I enjoy working across the stack, my true passion lies in 
			<span className="font-semibold"> backend development</span>—designing robust systems, solving complex problems, and helping products scale.
		</p>

		<p className="text-base md:text-lg leading-relaxed">
			I&apos;ve worked with technologies like 
			<span className="font-mono bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">Django</span>,
			<span className="font-mono bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">Flask</span>,
			<span className="font-mono bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">React</span>,
			<span className="font-mono bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">SQL</span>,
			<span className="font-mono bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">Git</span>, and
			<span className="font-mono bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">AWS</span>.
			I thrive in agile environments where learning and collaboration are at the core.
		</p>

		<p className="text-base md:text-lg leading-relaxed">
			What drives me is continuous improvement—both in code and in myself. I&apos;m self-taught, proactive, and always eager to take on new challenges.
		</p>

		<div className="mt-6 md:mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
			<h2 className="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
			<span className="text-xl md:text-2xl">💡</span> Currently exploring
			</h2>
			<ul className="list-disc list-inside space-y-2 text-base md:text-lg">
			<li>Artificial Intelligence and Machine Learning</li>
			<li>Growing as a software engineer</li>
			<li>Investment strategies</li>
			<li>Chess strategies in free time</li>
			</ul>
		</div>
		</div>
	</div>
	<div className="flex items-center justify-center md:justify-start relative w-full md:w-[500px] h-[300px] md:h-[600px]">    
		<Image
		src="/IMG_4533.jpeg"
		alt="Picture of the author"
		fill
		className="object-contain rounded-lg"
		sizes="(max-width: 768px) 100vw, 500px"
		priority
		/>
	</div>
	</section>
  );
}
