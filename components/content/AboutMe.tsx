import AnimationContainer from '../utils/AnimationContainer';
import { calculateDuration } from './CurrentTimeLineExp';
import { TbCloudComputing } from 'react-icons/tb'

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>
      <div className='flex gap-3 items-center'>
        <TbCloudComputing strokeWidth='1' className='w-10 md:w-10 mb-4 h-full text-green-600' />
        <h2 className='font-bold text-2xl tracking-tight mb-4 text-white text-center lg:text-start'>
          About Me
        </h2>
      </div>

      <p className='text-base text-gray-400'>
        I am a passionate and versatile developer with  +{calculateDuration('2021-01-01', false)}  years of experience
        in JavaScript and a constant interest in learning new technologies. I am currently studying the path to become a DevOps and master tools or practices such as "Linux, to perform cost-effective, reliable and secure complete software delivery and maintenance.
      </p>

    </AnimationContainer>
  )
}

export default AboutMe;