"use client"

import { motion } from "framer-motion";
import Title from "./Text/Title"
import { child, container } from "./basicStaggerConfig";


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
      className="pt-5 flex flex-col"
      initial="hidden"
      whileInView="visible"
      variants={container}
      viewport={{ once: true, amount: 1 }}
    >
      <motion.div className="flex items-center gap-4" variants={child}>
        <img key={`${info["id"]}-logo`} src={info["imageSrc"]} className="h-9" alt="Company" />
        <Title key={`${info["id"]}-company`} text={info["company"]} level={2} />
      </motion.div>
      <motion.div variants={child}>
        <Title key={`${info["id"]}-role`} text={`${info["role"]} | ${info["team"]}`} level={3} />
      </motion.div>
      <motion.span variants={child}>
        {info["desc"]}
      </motion.span>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="flex flex-col items-center justify-center w-full max-w-screen-xl border-b mt-16 pb-16"
    >
      <motion.div
        className="flex items-center gap-2 w-full" 
        initial="hidden"
        whileInView="visible"
        variants={container}
        viewport={{ once: true }}
      >
        <Title text="Experience" level={1} />
      </motion.div>
      {jobInformation.map((desc) => (
        <JobDesc key={desc.id} info={desc} />
      ))}
    </motion.section>
  )
}