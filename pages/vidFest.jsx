import Image from 'next/image';
import React from 'react';
import vidFestImg from '../public/assets/projects/vidFestSs.png';
import { HiOutlineChevronRight } from 'react-icons/hi';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';

const netflix = () => {
  return (
    <div className='w-full'>
      <Head>
        <title>Vid Fest | My Projects</title>
        <meta name="description" content="One of my projects - Vid Fest" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-dark-900/80 backdrop-blur-sm z-10' />
        <Image
          className='absolute z-1 object-cover'
          layout='fill'
          src={vidFestImg}
          alt='Vid Fest'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='py-2 text-4xl font-bold'
          >
            Vid Fest
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='text-accent-glow font-medium'
          >
            MongoDB / Express.js / React.js / Node.js
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
            This is a video sharing web application with interactive UI, features that enable the audience to interact with the creators for example, through comments. Other features include &apos;Liking&apos; or &apos;Disliking&apos; the video posts and following your favorite creators. Custom JWT-based authentication allows for secure, role-based interactions.
          </p>
          
          <div className='flex flex-wrap gap-4'>
            <a href='https://github.com/stream2026/Vid-Fest-Backend' target='_blank' rel='noreferrer'>
              <button className='px-6 py-3 text-sm flex items-center gap-2'>
                Backend Code
              </button>
            </a>
            <a href='https://github.com/stream2026/Vid-Fest_Frontend' target='_blank' rel='noreferrer'>
              <button className='px-6 py-3 text-sm flex items-center gap-2'>
                Frontend Code
              </button>
            </a>
            <a href='https://vid-fest.vercel.app/' target='_blank' rel='noreferrer'>
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
              {['React.js', 'Express.js', 'MongoDB', 'Node.js', 'JWT Authentication'].map((tech, i) => (
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

export default netflix;
