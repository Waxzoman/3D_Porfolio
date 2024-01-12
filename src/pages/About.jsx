import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, qualifications } from '../constants';


const About = () => {
  return (
    <section className='max-container '>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Omar</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>Web developer based in Poland, with a passion for learning new technologies and applying them to exciting projects.</p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text '>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
              <p className='mt-20 text-center font-sans font-semibold'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='py-16'>
            <h3 className='subhead-text'>Qualifications</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>I have acquired many skills in my web developer education path through open source, certified courses and projects. Here is the rundown:</p>
        </div>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {qualifications.map((qualification) => (
              <VerticalTimelineElement
                key={qualification.id}
                date={qualification.date}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins first-letter font-semibold'>
                    {qualification.title}
                  </h3>
                  <p>by: {qualification.instructor}</p>
                  <img src={qualification.img} alt="" />
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {qualification.description.map((desc, index) => (
                    <li
                      className='text-black-500/50 font-normal pl-1 text-small'
                      key={`qualification-point-${index}`}
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}

export default About