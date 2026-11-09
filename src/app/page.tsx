import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stack } from "@/components/Stack";
import { Projects } from "@/components/Projects";
import { GithubRepos } from "@/components/GithubRepos";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Stack />
        <section id="projetos" className="mx-auto max-w-6xl px-4 py-24">
          <SectionTitle
            index="03"
            file="projetos.ts"
            title="Projetos"
            subtitle="Alguns dos projetos que construí. Filtre por tipo ou busque por tecnologia."
          />
          <Projects />
          <Suspense fallback={null}>
            <GithubRepos />
          </Suspense>
        </section>
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
