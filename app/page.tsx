import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
