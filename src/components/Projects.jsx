import React from 'react';

import ruleOfCool from '../assets/ruleOfCool.jpg';
import instagram from '../assets/instagram.png';
import lome from '../assets/Lome.png';
import { ProjectCard } from './ProjectCard';

const projectInfo = [
  {
    title: 'Dungeons and Dragons Compendium',
    codeUrl: 'https://github.com/chasechambers/Full-Circle',
    demoUrl: 'https://rule-of-cool-779c8e563c30.herokuapp.com',
    image: ruleOfCool,
  },
  {
    title: 'Instagram',
    codeUrl: 'https://github.com/opwar-bc/instagramclone',
    demoUrl: 'https://github.com/opwar-bc/instagramclone',
    image: instagram,
  },
  {
    title: 'Lome Store',
    codeUrl: 'https://github.com/owenwar/final-project',
    demoUrl: 'https://ddgo-ecommerce-40d71dee0685.herokuapp.com/',
    image: lome,
  },
];

const Projects = () => {
  return (
    <div
      name='projects'
      className='w-full md:h-screen text-blue-500 bg-[#36393e]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-blue-300 border-[#000000]'>
            Projects
          </p>
          <p className='py-6'>Check out some of my recent projects</p>
        </div>
        {/* Project Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}
          {projectInfo.map(project => (
            <ProjectCard
              title={project.title}
              codeUrl={project.codeUrl}
              demoUrl={project.demoUrl}
              image={project.image}
              key={project.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
