import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AboutImg from '../public/assets/sm.jpg';
import { HiOutlineBriefcase, HiOutlineAcademicCap, HiOutlineCode } from 'react-icons/hi';

const stats = [
  { icon: <HiOutlineBriefcase size={24} />, value: '1.5+', label: 'Years Experience' },
  { icon: <HiOutlineCode size={24} />, value: '5+', label: 'Projects Built' },
  { icon: <HiOutlineAcademicCap size={24} />, value: '8.81', label: 'SGPA' },
];

const About = () => {
  return (
    <div id='about' className='w-full py-24 relative'>
      <div className='particles' />
      <div className='max-w-[1240px] m-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className='uppercase text-sm tracking-[0.3em] text-accent-primary font-medium mb-2'>
            About
          </p>
          <h2 className='section-heading'>Who I Am</h2>
        </motion.div>

        <div className='grid md:grid-cols-5 gap-12 mt-12'>
          {/* Text */}
          <motion.div
            className='md:col-span-3'
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className='glass-card p-8'>
              <p className='text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4'>
                I&apos;m a <span className='text-slate-900 dark:text-white font-semibold'>Software Development Engineer</span> at{' '}
                <span className='gradient-text font-semibold'>Gupshup</span>, where I build high-scale backend systems,
                Voice AI pipelines, and platform reliability tools that power millions of interactions daily.
              </p>
              <p className='text-slate-600 dark:text-slate-400 leading-relaxed mb-4'>
                I graduated with a B.E. in Computer Science &amp; Engineering from{' '}
                <span className='text-slate-800 dark:text-slate-200 font-medium'>Jadavpur University</span> (2020–2024).
                My expertise spans Python, JavaScript/Node.js, Django, AWS cloud services, and real-time 
                Voice AI orchestration with LLM-based TTS/STT pipelines.
              </p>
              <p className='text-slate-600 dark:text-slate-400 leading-relaxed mb-6'>
                I&apos;m passionate about clean architecture, API performance optimization, and building
                developer tools that solve real problems at scale. When I&apos;m not coding, you&apos;ll
                find me playing chess or following cricket.
              </p>
              <Link href='/#projects'>
                <p className='text-accent-primary dark:text-accent-glow hover:text-slate-900 dark:hover:text-white transition-colors duration-300 cursor-pointer inline-flex items-center gap-2'>
                  Check out my latest projects →
                </p>
              </Link>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-4 mt-6'>
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  viewport={{ once: true }}
                  className='glass-card p-5 text-center'
                >
                  <div className='text-accent-primary mb-2 flex justify-center'>{stat.icon}</div>
                  <p className='text-2xl font-bold text-slate-900 dark:text-white'>{stat.value}</p>
                  <p className='text-sm text-slate-600 dark:text-slate-400 mt-1'>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className='md:col-span-2 flex items-start justify-center'
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className='glass-card p-3 w-full max-w-[350px]'>
              <Image
                src={AboutImg}
                className='rounded-xl'
                alt='Soumyadeb Misra'
                placeholder='blur'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
