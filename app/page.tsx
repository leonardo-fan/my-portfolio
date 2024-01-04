import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ExperienceSection from "./components/ExperienceSection"
import ProjectsSection from "./components/ProjectsSection"

export default function Home() {
  return (
    <div className="w-screen px-4 lg:px-6 mx-auto max-w-screen-xl">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  )
}
