"use client"

import { Projects } from '../components/constants'
import ProjectCard from '../components/ProjectCard'

import React from 'react'

const Page = () => {
  return (
    <div
 
     className='w-screen h-screen flex items-center justify-center bg-center bg-black'>
      <div className='grid grid-cols-2  gap-5 max-w-[80%] max-h-[90%]'>
        {Projects.map((project, index) => (
          <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
          />
        ))}
      </div>
    </div>
  )
}

export default Page