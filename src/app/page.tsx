import Hero from "@/components/hero";
import AboutMe from "@/components/about-me";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}
