import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ExperienceSection from "./components/ExperienceSection"
import ProjectsSection from "./components/ProjectsSection"

export default function Home() {
  return (
    <div className="fixed flex flex-col items-center px-4 lg:px-6 mx-auto w-screen h-screen overflow-y-scroll">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  )
}
