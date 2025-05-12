import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default async function Experience() {
  return (
	<section className="flex flex-col gap-6 md:gap-8 items-center justify-center mt-8 md:mt-10">
	<h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
		Experience
	</h1>
	<Accordion type="single" collapsible className="w-full">
		<AccordionItem value="item-1">
		<AccordionTrigger className="text-base md:text-lg">
			Wazoku
		</AccordionTrigger>
		<AccordionContent>
			<div className="space-y-3 md:space-y-4">
			<div className="flex justify-between items-start">
				<div>
				<h3 className="font-medium text-base md:text-lg">Software Engineer</h3>
				<p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">May 2023 - May 2025 · 2 yrs</p>
				<p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Remote</p>
				</div>
			</div>

			<p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
				Contributed across multiple cross-functional teams to evolve and scale an enterprise SaaS platform.
			</p>

			<div className="space-y-3 md:space-y-4">
				<div className="flex items-start gap-3">
				<div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
					<span className="text-purple-600 dark:text-purple-300">🤖</span>
				</div>
				<div>
					<h4 className="font-medium text-base md:text-lg">AI Team</h4>
					<p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Supported frontend and backend development for an AI-powered agent, enhancing user interaction through intelligent automation.</p>
				</div>
				</div>

				<div className="flex items-start gap-3">
				<div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
					<span className="text-blue-600 dark:text-blue-300">🔄</span>
				</div>
				<div>
					<h4 className="font-medium text-base md:text-lg">Frontend Modernization</h4>
					<p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Migrated critical legacy module from AngularJS to modern Angular, improving maintainability and performance.</p>
				</div>
				</div>

				<div className="flex items-start gap-3">
				<div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
					<span className="text-green-600 dark:text-green-300">📊</span>
				</div>
				<div>
					<h4 className="font-medium text-base md:text-lg">Feature Redesign – Surveys</h4>
					<p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Led high-impact product enhancement by reworking survey feature, collaborating with product team.</p>
				</div>
				</div>

				<div className="flex items-start gap-3">
				<div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900">
					<span className="text-yellow-600 dark:text-yellow-300">🏠</span>
				</div>
				<div>
					<h4 className="font-medium text-base md:text-lg">New Homepage Initiative</h4>
					<p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Provided backend support for new homepage experience, delivering performant APIs and reusable services.</p>
				</div>
				</div>

				<div className="flex items-start gap-3">
				<div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
					<span className="text-red-600 dark:text-red-300">📈</span>
				</div>
				<div>
					<h4 className="font-medium text-base md:text-lg">Analytics Team</h4>
					<p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Supported backend development and infrastructure for data-driven insights and client reporting capabilities.</p>
				</div>
				</div>
			</div>
			</div>
		</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-2">
		<AccordionTrigger className="text-base md:text-lg">Datarte.art</AccordionTrigger>
		<AccordionContent>
			<div className="space-y-3 md:space-y-4">
			<div className="flex justify-between items-start">
				<div>
				<h3 className="font-medium text-base md:text-lg">Full-stack Developer</h3>
				<p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Mar 2021 - Aug 2022 · 1 yr 6 mos</p>
				<p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Remote</p>
				</div>
			</div>

			<div className="space-y-3 md:space-y-4">
				<div className="flex items-start gap-3">
				<div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
					<span className="text-purple-600 dark:text-purple-300">💻</span>
				</div>
				<div>
					<h4 className="font-medium text-base md:text-lg">Web Applications Development</h4>
					<p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Built two full-stack web applications (Datarte and OtrasManeras) for artist artwork management using ReactJs, Gatsby, WordPress, Flask, and more.</p>
				</div>
				</div>

				<div className="flex items-start gap-3">
				<div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
					<span className="text-blue-600 dark:text-blue-300">☁️</span>
				</div>
				<div>
					<h4 className="font-medium text-base md:text-lg">Cloud Infrastructure</h4>
					<p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Deployed and managed services on AWS including EC2, RDS, and S3 buckets. Maintained web applications for UK clients (CityRelay and CityRelaySolutions).</p>
				</div>
				</div>

				<div className="flex items-start gap-3">
				<div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
					<span className="text-green-600 dark:text-green-300">🔄</span>
				</div>
				<div>
					<h4 className="font-medium text-base md:text-lg">Data & Automation</h4>
					<p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Developed scrapers, created marketing platform migration tools, and built dashboards using Python, SQL, and Metabase.</p>
				</div>
				</div>

				<div className="flex items-start gap-3">
				<div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900">
					<span className="text-yellow-600 dark:text-yellow-300">✅</span>
				</div>
				<div>
					<h4 className="font-medium text-base md:text-lg">Testing & Quality</h4>
					<p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Implemented comprehensive testing using Cypress, Pytest, and Selenium. Collaborated on identifying problems and establishing best practices.</p>
				</div>
				</div>
			</div>
			</div>
		</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-3">
		<AccordionTrigger className="text-base md:text-lg">Research Collaborator at Catholic University of Colombia</AccordionTrigger>
		<AccordionContent>
			<div className="space-y-3 md:space-y-4">
			<div>
				<h3 className="font-medium text-base md:text-lg">Research Collaborator</h3>
				<p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Apr 2020 - Nov 2020 · 8 mos</p>
				<p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Colombia · Remote</p>
			</div>

			<div className="space-y-3 md:space-y-4">
				<div className="flex items-start gap-3">
				<div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
					<span className="text-purple-600 dark:text-purple-300">⌚</span>
				</div>
				<div>
					<h4 className="font-medium text-base md:text-lg">Fitbit SDK Research & Development</h4>
					<p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Researched Fitbit SDK capabilities and built prototypes to collect physiological data like heart rate and calories. Developed a complete smartwatch app with real-time data transmission to a web-socket server on Heroku.</p>
				</div>
				</div>

				<div className="flex items-start gap-3">
				<div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
					<span className="text-blue-600 dark:text-blue-300">👥</span>
				</div>
				<div>
					<h4 className="font-medium text-base md:text-lg">Academic Collaboration</h4>
					<p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Collaborated with three professors and a student team, providing SDK expertise and open-source solutions. Supported research work for a bachelor&apos;s student and a project guided by Complutense University of Madrid.</p>
				</div>
				</div>
			</div>
			</div>
		</AccordionContent>
		</AccordionItem>
	</Accordion>      
	</section>
  );
}
