import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='Home' className='w-full h-screen bg-[#0a192f]'>
      
     {/*container*/}
     <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-pink-600'>Hi, my name is</p>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Harsh Wankhede</h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Web Stack Developer.</h2>
      <p className='text-[#8892b0] py-4 max-w[700px]'>I'm a full-stack web developer curently I'm Seeking an entry-level position in a development role that will allow me to utilize my
      skills and knowledge in programming, problem solving, and teamwork to contribute to the success of the organization. 
      I am a highly motivated individual with a passionfor coding and a strong desire to learn and grow in the field of software development. And This is my small startup businesses project</p>
      <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View work 
        <span className='group-hover:rotate-90 duration-300'>
        <HiArrowNarrowRight className='ml-3' />
        </span>
        </button>

      </div>
     </div>
      
    </div>
  )
}

export default Home
