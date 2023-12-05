import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p
            className='font-medium sm-text-xl text-center'
        >
            {text}
        </p>
        <Link
            to={link}
            className='neo-brutalism-white neo-btn'
        >
            {btnText}
            <img
                src={arrow}
                className='w-4 h-4 object-contain'
            />
        </Link>
    </div>
);
const renderContent = {
    1: (
        <h1
            className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'
        >
            Hi, I am <span className='font-semibold'> Omar </span>👋
            <br />
            A Web Developer from Poland.
        </h1>
    ),
    2: (
        <InfoBox
            text="Im a Fresh Junior Developer with full-stack capabilities"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="I can back it up with my projects to display my competence in various areas of web development!"
            link="/projects"
            btnText="Check them out"
        />
    ),
    4: (
        <InfoBox
            text="Looking for a fresh recruit with a solid tech stack under his belt?"
            link="/contact"
            btnText="Let's connect"
        />
    ),
}


const HomeInfo = ( {currentStage} ) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo