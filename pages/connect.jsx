import Image from 'next/image';
import React from 'react';
import connectImg from '../public/assets/projects/connect.png';
import { HiOutlineChevronRight } from 'react-icons/hi';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';

const property = () => {
  return (
    <div className='w-full'>
       <Head>
        <title>Connect | My Projects</title>
        <meta name="description" content="One of my projects - Connect" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-dark-900/80 backdrop-blur-sm z-10' />
        <Image
          className='absolute z-1 object-cover'
          layout='fill'
          src={connectImg}
          alt='Connect'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='py-2 text-4xl font-bold'
          >
            Connect
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='text-accent-glow font-medium'
          >
            React JS / Tailwind / Sanity.io
          </motion.h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-16'>
        <motion.div 
          className='col-span-4 lg:col-span-3'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className='uppercase text-sm tracking-widest text-accent-primary mb-2'>Project</p>
          <h2 className='text-slate-900 dark:text-white mb-4'>Overview</h2>
          <p className='text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-8'>
            This app was built using React JS and is hosted on Netlify. This is a Social Networking Site where users can share their favorite
            pictures on the website. The pictures are categorised which makes it easier to find pictures of users&apos; liking.
            The web application is built using React.js and Sanity.io. Users can login via Google OAuth, create posts with images, and comment on other posts.
          </p>
          
          <div className='flex flex-wrap gap-4'>
            <a href='https://connectsm.netlify.app/' target='_blank' rel='noreferrer'>
              <button className='px-6 py-3 text-sm flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 shadow-emerald-500/25 hover:shadow-emerald-500/50'>
                Live Demo
              </button>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className='col-span-4 lg:col-span-2 shadow-xl rounded-xl py-4 flex items-center'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className='glass-card p-6 w-full h-full'>
            <p className='text-center font-bold text-lg text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-dark-500'>Technologies</p>
            <div className='flex flex-col gap-3'>
              {['React', 'Tailwind', 'JavaScript', 'Sanity.io', 'Google Authentication'].map((tech, i) => (
                <div key={i} className='flex items-center text-slate-700 dark:text-slate-300'>
                  <HiOutlineChevronRight className='text-accent-primary mr-2 flex-shrink-0' size={18} />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <div className='col-span-5 mt-8'>
          <Link href='/#projects'>
            <p className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer flex items-center gap-2 max-w-fit'>
              <span className='w-8 h-8 rounded-full bg-slate-200 dark:bg-dark-700 flex items-center justify-center'>
                &larr;
              </span>
              Back to Projects
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default property;
