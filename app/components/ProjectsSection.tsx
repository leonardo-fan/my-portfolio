import LinkButton from "./Button/LinkButton"
import Title from "./Title"

export default function ProjectsSection() {
  return (
    <section id="projects" className="flex items-center h-screen">
      <div>
        <Title text="Projects" level={1} />
        <div id="project-1" className="flex flex-row items-center justify-between">
          <div id="project-1-desc" className="pr-5">
            <Title text="UNSW Circles" level={2} />
            <p>Led an agile team of 10 students, supported by Git and CI/CD pipelines, to build a degree planner for UNSW. The front-end was built with React and TypeScript, while the backend uses Python and FastAPI. Currently used by many students with ~8500 total visits per month.</p>
            <div id="project-1-links" className="mt-5">
              <LinkButton text="See Live" className="mr-1" link="https://circles.csesoc.app/" />
              <LinkButton text="Source Code" className="ml-1" link="https://github.com/csesoc/circles" />
            </div>
          </div>
          <img className="w-1/2" src="/circles.jpg"></img>
        </div>
      </div>
    </section>
  )
}