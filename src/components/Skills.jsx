import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Swift from '../assets/swift.png';
import Mongo from '../assets/mongo.png';
import Python from '../assets/Python.png'
import { SkillsItem } from './SkillsItem';

const skillList = [
  {
    description: 'React',
    image: ReactImg,
  },
  {
    description: 'Javascript',
    image: Javascript,
  },
  {
    description: 'Node',
    image: Node,
  },
  {
    description: 'Swift',
    image: Swift,
  },
  {
    description: 'Mongo',
    image: Mongo,
  },
  {
    description: 'Python',
    image: Python,
  },
];

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#282b30] text-blue-500'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 text-blue-300 border-[#18fff9]'>
            Skills
          </p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          {skillList.map(skill => (
            <SkillsItem
              description={skill.description}
              image={skill.image}
              key={skill.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
