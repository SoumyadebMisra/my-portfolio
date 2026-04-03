import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import campGroundsImg from '../public/assets/projects/campGrounds.png';
import connectImg from '../public/assets/projects/connect.png';
import scImg from '../public/assets/projects/sportsCorner.png';
import vidFestImg from '../public/assets/projects/vidFestSs.png';
import ProjectItem from './ProjectItem';

const projects = [
  {
    title: 'Vid Fest',
    backgroundImg: vidFestImg,
    projectUrl: '/vidFest',
    liveUrl: 'https://vid-fest.vercel.app/',
    techs: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Auth'],
  },
  {
    title: 'campGrounds',
    backgroundImg: campGroundsImg,
    projectUrl: '/campgrounds',
    liveUrl: 'https://campgrounds-eaz4.onrender.com/',
    techs: ['Express.js', 'MongoDB', 'Passport.js', 'Mapbox', 'Cloudinary'],
  },
  {
    title: 'Connect',
    backgroundImg: connectImg,
    projectUrl: '/connect',
    liveUrl: 'https://connectsm.netlify.app/',
    techs: ['React.js', 'Sanity.io', 'Tailwind CSS', 'Google Auth'],
  },
  {
    title: 'Sports Corner',
    backgroundImg: scImg,
    projectUrl: '/sc',
    liveUrl: 'https://sports-corner.000webhostapp.com/',
    techs: ['PHP', 'HTML', 'CSS', 'Bootstrap'],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => {
  return (
    <div id='projects' className='w-full py-24 relative'>
      <div className='grid-dots absolute inset-0 opacity-20' />
      <div className='max-w-[1240px] mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className='uppercase text-sm tracking-[0.3em] text-accent-primary font-medium mb-2'>
            Projects
          </p>
          <h2 className='section-heading'>What I&apos;ve Built</h2>
          <p className='text-slate-600 dark:text-slate-400 mt-6 max-w-2xl'>
            A selection of personal and professional projects showcasing full-stack development,
            cloud integrations, and real-time systems.
          </p>
        </motion.div>

        <motion.div
          className='grid md:grid-cols-2 gap-8 mt-12'
          variants={containerVariants}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
        >
          {projects.map((project, i) => (
            <motion.div key={i} variants={itemVariants}>
              <ProjectItem {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
