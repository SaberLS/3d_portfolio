import { skills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import CTA from '../components/CTA'

function About() {
  return (
    <section className="max-container max-w-250 m-auto">
      <h1 className="font-bold text-4xl mt-10">
        Hello,
        {' '}
        <span className="bg-gradient-to-r from-black to-blue-700 bg-clip-text text-transparent">I'm</span>
        <span className="bg-gradient-to-r bg-clip-text text-transparent from-blue-700 to-blue-500 "> Patryk</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>Software Engineer based in Poland, specializing in technical education through hands-on learning and building applications.</p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="font-semibold text-xl">My skills</h3>
        <div className="mt-16 justify-center  flex flex-wrap gap-12">
          {skills.map(skill => (
            <div key={skill.name} className="block-container w-20 h-20 overflow-hidden">
              <div className="relative h-full  bg-slate-200 [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]" />
              <div className="relative -top-15 left-5 justify-center items-center hover:scale-105 transition-transform">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="font-semibold text-xl">My skills</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure explicabo culpa deleniti numquam repudiandae. Incidunt, facere nihil! Perspiciatis quisquam, eius vel similique recusandae non assumenda asperiores. Blanditiis cum deleniti sed!
          </p>
        </div>
        <div className="mt-12 flex overflow-hidden">
          <VerticalTimeline>
            {experiences.map(experience => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={(
                  <div className="flex w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-8/10 object-contain m-auto"
                    />
                  </div>
                )}
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className="text-black text-xl  font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black font-medium !m-0">
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li key={index} className="text-black-500/50 pl-1 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  )
}

export default About
