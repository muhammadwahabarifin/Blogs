import React from 'react'
import SectionContainer from '../utils/SectionContainer'
import Hero from '../content/Hero'
import CurrentFavTech from '../content/CurrentFavTech'
import CurrentLearning from '../content/CurrentLearning'
import AboutMe from '../content/AboutMe'
import CurrentTimeLineExp, { calculateDuration } from '../content/CurrentTimeLineExp'
import AnimationContainer from '../utils/AnimationContainer'
import ContactMe from '../content/ContactMe'

const HomeSection = () => {
  return (
    <SectionContainer>
      <Hero />

      <CurrentFavTech />
      <CurrentLearning />

      <div className='w-full flex flex-col items-start'>
        <AboutMe />
        <CurrentTimeLineExp />

        {/* <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>
        <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start'>Skills</h2>
        <p className='text-base text-gray-400'>
            A look at all the programming languages, libraries, and tools I've worked with, I started programming about +{calculateDuration('2020-01-01', false)} ago. I have tried a few programming languages and technology stack, both Backend and Frontend.
          </p>

          <p className='text-base text-gray-400'>
            Event though the scope of web development is wide, I was very interested and focused on Frontend development.
          </p>
        </AnimationContainer> */}

        <ContactMe />
      </div>
    </SectionContainer>
  )
}

export default HomeSection
