import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import CV from "@/components/CV";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <CV />
      <Contact />
    </main>
  );
}