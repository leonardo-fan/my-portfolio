import Title from "./Title"

export default function AboutSection() {
  return (
    <section id="about" className="flex items-center h-screen">
      <div>

        <Title text="About Me" level={1} />
        Hi 👋, welcome to my portfolio! I'm Leonardo Fan, a full-stack software engineer
        with experience in both business and technology roles across 
        the software, banking, consulting, public sector and insurance industry.
        <br/><br/>
        I have a passion for programming, solving problems and creating useful solutions for people. 
        <br/><br/>
        Please have a look through the rest of the site and feel free to reach out. Thank you 🚀
        <Title text="Technologies" level={2} />
        {/* add bages here for icons */}
        <ul className="pl-5 list-disc">
          <li>Java</li>
          <li>JavaScript/TypeScript</li>
          <li>Python</li>
          <li>C#</li>
          <li>C</li>
          <li>SQL</li>
          <li>React</li>
          <li>.NET</li>
          <li>MongoDB</li>
          <li>Microsoft Azure</li>
          <li>Git</li>
          <li>Docker</li>
        </ul>
      </div>
    </section>
  )
  }