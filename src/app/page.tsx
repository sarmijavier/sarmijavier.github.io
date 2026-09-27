import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import AboutMe from "@/components/about-me";
import Education from "@/components/education";
import Skills from "@/components/skills";

// Ordered for a technical reader: shipped work and checkable code first,
// background after.
export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <AboutMe />
      <Education />
      <Skills />
    </>
  );
}
