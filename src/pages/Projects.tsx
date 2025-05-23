import { Link } from 'react-router-dom'
import { projects } from '../constants'
import arrow from '../assets/icons/arrow.svg'
import CTA from '../components/CTA'

function Projects() {
  return (
    <section className="max-container max-w-250 m-auto">
      <h1 className="font-bold text-4xl mt-10">
        <span className="bg-gradient-to-r from-black to-blue-700 bg-clip-text text-transparent">My</span>
        {' '}
        <span className="bg-gradient-to-r bg-clip-text text-transparent from-blue-700 to-blue-500">Projects</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          {' '}
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Many of them are open-source, so if
          you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further enhancements.
          Your collaboration is highly valued!
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map(project => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="w-12 h-12">
              <div className={`h-full [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] ${project.theme} flex justify-center items-center  transition-transform group`}>
                <img src={project.iconUrl} alt="Project Icon" className="object-contain group-hover:scale-110 transition-transform" />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>

          </div>
        ))}

      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  )
}

export default Projects
