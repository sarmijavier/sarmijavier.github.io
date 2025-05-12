import { ModeToggle } from "@/components/dark-mode";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";	

export default function Header() {
  return (
    <header className="fixed top-0 right-0 p-4 z-50 md:p-6">
		<div className="flex items-center gap-4">
			<ModeToggle />
			<div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
			<a 
				href="https://github.com/sarmijavier" 
				target="_blank"
				rel="noopener noreferrer"
				className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
			>
				<FaGithub size={20} />
				<span className="sr-only">GitHub</span>
			</a>
			<a
				href="https://www.linkedin.com/in/javier-sarmiento-28085a19a/"
				target="_blank" 
				rel="noopener noreferrer"
				className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
			>
				<FaLinkedin size={20} />
				<span className="sr-only">LinkedIn</span>
			</a>
			<a
				href="https://twitter.com/SarmiJavier"
				target="_blank"
				rel="noopener noreferrer" 
				className="text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300 transition-colors"
			>
				<FaTwitter size={20} />
				<span className="sr-only">Twitter</span>
			</a>
			<a
				href="https://www.instagram.com/sarmijavier/"
				target="_blank"
				rel="noopener noreferrer"
				className="text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 transition-colors"
			>
				<FaInstagram size={20} />
				<span className="sr-only">Instagram</span>
			</a>
			</div>
		</div>
	</header>
  );
}