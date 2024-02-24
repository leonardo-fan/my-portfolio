"use client"

import { motion } from "framer-motion";
import Title from "./Text/Title"
import { child, container, subContainer } from "./basicStaggerConfig";
import DownArrow from "./More/DownArrow";


type JobInfo = {
  id: string,
  imageSrc: string,
  company: string,
  role: string,
  team: string,
  desc: string,
}

const jobInformation : JobInfo[] = [
  {
    id: "jd-1",
    imageSrc: "/dolby_icon.png",
    company: "Dolby Laboratories",
    role: "Software Engineer",
    team: "Streaming Team",
    desc: "Led an internal project to help integrate a newly acquired team into the business, extending the functionality of a global back-office Command Line Interface tool. Gathered requirements and feedback by discussing with users and coded with Python. Planned, implemented, tested, and deployed a new Keycloak authenticated API server end-to-end using C# and .NET for administrative staff to query internal databases."
  }, 
  {
    id: "jd-2",
    imageSrc: "/boqs_icon.png",
    company: "Bank of Queensland Specialist",
    role: "Technical Business Analyst",
    team: "Operational Excellence Team",
    desc: "Led a system project, iterating on 20+ requirements with stakeholders, developing backend SQL logic and managing changes with the approval board to meet new regulations for 10+ products. Established a new tool covering 70+ workflows to reduce user pain points from obscure messages in the Loan Operations system. This was distributed to and is now being used by the wider team. Automated frontend testing, creating 30+ cases by inspecting HTML and using Tricentis Tosca. Taught multiple non-technical team members and other new interns about making backend and frontend system changes."
  }, 
  {
    id: "jd-3",
    imageSrc: "/pwc_icon.png",
    company: "PwC Australia",
    role: "Technology Consultant",
    team: "Microsoft & Customer Experience Team",
    desc: "Overhauled a government department's legacy database to Dynamics 365, using SQL and Server Integration Services in a team of 2 to perform a data migration, finishing 2 weeks ahead of schedule. Collaborated on a $3.5 million digital transformation project by creating a User Acceptance Testing plan as well as working with technical teams and the client to resolve bugs using Azure DevOps. Assisted a $350k analysis project for a government agency by understanding business and technical needs through 16 interviews, 3 ideation/review workshops and requirements design."
  }, 
  {
    id: "jd-4",
    imageSrc: "/qbe_icon.png",
    company: "QBE Insurance",
    role: "Business Analyst",
    team: "Business Optimisation Team",
    desc: "Facilitated a nationally recognised claims digitisation project by building user requirements with the technical team, running weekly workshops, assessing 7 current tools and modelling business processes. Managed the gap analysis of 48 data flow diagrams by planning work and onboarding new joiners. Evaluated the performance of robotic process automation by creating a dashboard and presenting the bots with the most time savings."
  }, 
]

function JobDesc({ info }: { info: JobInfo }) {
  return (
    <motion.div
      key={info["id"]}
      className="snap-start flex flex-col justify-center md:flex-row md:items-center min-h-full p-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={child}
    >
      <div key={`${info["id"]}-left`} className="flex flex-col items-center justify-center text-center md:w-1/3 px-1">
        <img key={`${info["id"]}-logo`} src={info["imageSrc"]} className="h-1/2" alt="Company Image" />
        <Title key={`${info["id"]}-role`} text={info["role"]} level={4} />
      </div>
      <div key={`${info["id"]}-right`} className="px-10 hidden md:block sm:w-fit md:w-2/3">
        <Title key={`${info["id"]}-company`} text={info["company"]} level={2} />
        <Title key={`${info["id"]}-team`} text={info["team"]} level={3} />
        {info["desc"]}
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={container}
      viewport={{ once: true, amount: 0.5 }}
      id="experience"
      className="flex flex-col items-center justify-center min-h-screen w-full max-w-screen-xl border-b"
    >
      <motion.div className="flex items-center gap-2 w-full" variants={child}>
        <Title text="Experience" level={1} />
      </motion.div>
      <motion.div className="snap-mandatory snap-y overflow-y-scroll h-3/5 border rounded-xl mb-1" variants={subContainer}>
        {jobInformation.map((desc) => (
          <JobDesc key={desc.id} info={desc} />
        ))}
      </motion.div>
    </motion.section>
  )
}