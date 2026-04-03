import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineExternalLink, HiOutlineCode } from 'react-icons/hi';

const ProjectItem = ({ title, backgroundImg, tech, projectUrl, liveUrl, techs }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className='glass-card overflow-hidden group flex flex-col h-full'
    >
      {/* Image */}
      <div className='relative w-full h-[250px] overflow-hidden shrink-0'>
        <Image
          className='object-cover transition-transform duration-500 group-hover:scale-110'
          src={backgroundImg}
          alt={title}
          fill
        />
        {/* Overlay on hover */}
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 dark:from-dark-900/90 dark:via-dark-900/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300' />

        {/* Hover action buttons */}
        <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <Link href={projectUrl}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent-primary/30 hover:border-accent-primary/50 transition-all duration-200'
            >
              <HiOutlineCode size={16} />
              Details
            </motion.div>
          </Link>
          {liveUrl && (
            <a href={liveUrl} target='_blank' rel='noreferrer'>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center gap-2 bg-accent-primary/80 backdrop-blur-sm border border-accent-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent-primary transition-all duration-200'
              >
                <HiOutlineExternalLink size={16} />
                Live Demo
              </motion.div>
            </a>
          )}
        </div>
      </div>

      {/* Info */}
      <div className='p-5'>
        <h3 className='text-lg font-bold text-slate-900 dark:text-white mb-2'>{title}</h3>
        <div className='flex flex-wrap gap-2'>
          {techs
            ? techs.map((t, i) => (
                <span key={i} className='tech-pill text-xs'>
                  {t}
                </span>
              ))
            : tech
                .split(' ')
                .map((t, i) => (
                  <span key={i} className='tech-pill text-xs'>
                    {t}
                  </span>
                ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;