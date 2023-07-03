/* eslint-disable react/no-unknown-property */
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import Tilt from 'react-parallax-tilt';

const TechCard = ({ index, name, icon }) => {
  return (
    <Tilt className=' w-auto '>
      <motion.div
        variants={fadeIn('up', 'spring', 0.25 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-full '
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-full  py-5  flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={name} className='w-16 h-16 object-contain' />
          {/* <h3 className='text-white text-[20px] font-bold text-center'>{name}</h3> */}
        </div>
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <div className='w-28 h-28' key={technology.name}>
          {/* <BallCanvas icon={technology.icon} /> */}
          <TechCard key={technology.name} index={index} {...technology} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
