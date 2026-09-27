import { FaGithub, FaLinkedin } from "react-icons/fa";

export const GITHUB_URL = "https://github.com/sarmijavier";

// The repo an interviewer should judge first: AI and security in one project.
export const FEATURED_REPO_URL = `${GITHUB_URL}/Privacy-Homomorphism-App`;

export const LINKEDIN_URL = "https://www.linkedin.com/in/javier-sarmiento-28085a19a/";

// Public contact address. Left unset until Javier confirms which address to
// publish; every email link on the page stays hidden while this is null.
export const CONTACT_EMAIL: string | null = null;

export const socials = [
  { href: GITHUB_URL, label: "GitHub", Icon: FaGithub },
  { href: LINKEDIN_URL, label: "LinkedIn", Icon: FaLinkedin },
];

export const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "Background" },
  { href: "#contact", label: "Contact" },
];
