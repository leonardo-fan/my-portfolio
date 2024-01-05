"use client"

import { useState } from "react"
import Title from "./Title"

type JobInfo = {
  imageSrc: string,
  company: string,
  role: string,
  startDate: string,
  endDate: string,
  desc: string,
}

const jobInformation : JobInfo[] = [
  {
    imageSrc: "/dolby_icon.png",
    company: "Dolby Laboratories",
    role: "Software Engineering Intern - Streaming Team",
    startDate: "JAN23",
    endDate: "APR23",
    desc: "Led an internal project to help integrate a newly acquired team into the business, extending the functionality of a global back-office Command Line Interface tool. Gathered requirements and feedback by discussing with users and coded with Python. Planned, implemented, tested, and deployed a new Keycloak authenticated API server end-to-end using C# and .NET for administrative staff to query internal databases."
  }, 
  {
    imageSrc: "/boqs_icon.png",
    company: "Bank of Queensland Specialist",
    role: "Technical Business Analyst Intern - Operational Excellence Team",
    startDate: "JUL21",
    endDate: "DEC21",
    desc: "Led a system project, iterating on 20+ requirements with stakeholders, developing backend SQL logic and managing changes with the approval board to meet new regulations for 10+ products. Established a new tool covering 70+ workflows to reduce user pain points from obscure messages in the Loan Operations system. This was distributed to and is now being used by the wider team. Automated frontend testing, creating 30+ cases by inspecting HTML and using Tricentis Tosca. Taught multiple non-technical team members and other new interns about making backend and frontend system changes."
  }, 
  {
    imageSrc: "/pwc_icon.png",
    company: "PwC Australia",
    role: "Technology Consultant Intern - Microsoft & Customer Experience Team",
    startDate: "JAN21",
    endDate: "JUL21",
    desc: "Overhauled a government department's legacy database to Dynamics 365, using SQL and Server Integration Services in a team of 2 to perform a data migration, finishing 2 weeks ahead of schedule. Collaborated on a $3.5 million digital transformation project by creating a User Acceptance Testing plan as well as working with technical teams and the client to resolve bugs using Azure DevOps. Assisted a $350k analysis project for a government agency by understanding business and technical needs through 16 interviews, 3 ideation/review workshops and requirements design."
  }, 
  {
    imageSrc: "/qbe_icon.png",
    company: "QBE Insurance",
    role: "Business Analyst Intern - Business Optimisation Team",
    startDate: "FEB20",
    endDate: "JUL20",
    desc: "Facilitated a nationally recognised claims digitisation project by building user requirements with the technical team, running weekly workshops, assessing 7 current tools and modelling business processes. Managed the gap analysis of 48 data flow diagrams by planning work and onboarding new joiners. Evaluated the performance of robotic process automation by creating a dashboard and presenting the bots with the most time savings."
  }, 
]

export default function ExperienceSection() {
  const [index, setIndex] = useState(0);
  const [info, setInfo] = useState(jobInformation[0]);

  const forwardInTime = () => {
    if (index === 0) return;
    let forwardIndex = index - 1;
    setIndex(forwardIndex);
    setInfo(jobInformation[forwardIndex]);
  };

  const backInTime = () => {
    if (index === jobInformation.length - 1) return;
    let backIndex = index + 1;
    setIndex(backIndex);
    setInfo(jobInformation[backIndex]);
  };

  return (
    <section id="experience" className="flex flex-col items-center justify-between h-screen">
      <div className="flex items-center w-full mt-14">
        <Title text="Experience" level={1} />
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col items-center justify-center sm:w-fit md:w-2/5 px-1 mx-1">
          <img src={info["imageSrc"]} className="h-1/2" alt="Company Image" />
          <Title text={`${info["startDate"]} - ${info["endDate"]}`} level={3} />
        </div>
        <div className="px-1 sm:w-fit md:w-3/5">
          <Title text={info["company"]} level={2} />
          <Title text={info["role"]} level={3} />
          {info["desc"]}
        </div>
      </div>
      <div className="flex flex-col items-center w-full mb-14">
        <div className="flex items-center px-1 mx-1">
          {/* greyed out if no more */}
          <button onClick={backInTime} className="border border-white rounded-full hover:bg-white hover:text-black font-medium text-sm px-4 lg:px-5 py-1 lg:py-1.5 my-1 lg:my-1.5 mx-1">
            {"<"}
          </button>
          <button onClick={forwardInTime} className="border border-white rounded-full hover:bg-white hover:text-black font-medium text-sm px-4 lg:px-5 py-1 lg:py-1.5 my-1 lg:my-1.5 mx-1">
            {">"}
          </button>
        </div>
      </div>
    </section>
  )
}