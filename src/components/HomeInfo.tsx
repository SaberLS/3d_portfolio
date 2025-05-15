import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'

const Box = ({ children }) => (
  <div className="sm:text-xl sm:leading-snug text-center bg-blue-600/80 drop-shadow-2xl rounded-2xl py-4 px-8 text-white mx-5 z-10 max-w-100">
    {children}
  </div>

)
const InfoBox = ({ text, link, btnText }) => (
  <Box>
    <p className="font-medium sm:text-xl text-center mb-2">{text}</p>
    <Link to={link} className="rounded-lg bg-white items-ceter justify-center flex font-bold shadow-md p-2 hover:scale-102 transition-transform text-blue-600 hover:text-blue-500">
      {btnText}
      <img src={arrow} className="w-4 aspect-square object-contain  inline-block my-auto ml-3" />
    </Link>
  </Box>
)

const renderContent = {
  1: (
    <Box>
      <h1>
        Hi, I am
        {' '}
        <span className="font-semibold">Patryk</span>
        {' '}
        👋
        <br />
        A Frontend Developer from Poland
      </h1>
    </Box>
  ),
  2: (
    <InfoBox
      text="Picked up many skills along the way"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Curious about the impact?"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/contact"
      btnText="Let's talk"
    />
  ),
}

function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null
}

export default HomeInfo
