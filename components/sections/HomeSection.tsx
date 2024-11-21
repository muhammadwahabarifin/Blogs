import React from 'react'
import SectionContainer from '../utils/SectionContainer'
import Hero from '../content/Hero'
import CurrentFavTech from '../content/CurrentFavTech'
import CurrentLearning from '../content/CurrentLearning'
import AboutMe from '../content/AboutMe'

const HomeSection = () => {
  return (
    <SectionContainer>
      <Hero />

      <CurrentFavTech />
      <CurrentLearning />

      <div className='w-full flex flex-col items-start'>
        <AboutMe />
      </div>
    </SectionContainer>
  )
}

export default HomeSection
