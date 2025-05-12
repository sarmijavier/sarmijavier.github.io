import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import Projects from "@/components/projects";


export default async function Home() {
  return (
    <div className="p-4 md:p-8">
      <AboutMe />
      <Experience />
      <Projects />
    </div>
  );
}
