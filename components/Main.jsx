import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const roles = [
  'Software Development Engineer',
  'Backend Architect',
  'Voice AI Developer',
  'Full-Stack Builder',
];

const Main = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 60);
      } else {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, roleIndex]);

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/soumyadeb-misra-79734b21a/', icon: <FaLinkedinIn />, label: 'LinkedIn' },
    { href: 'https://github.com/SoumyadebMisra', icon: <FaGithub />, label: 'GitHub' },
    { href: '/#contact', icon: <AiOutlineMail />, label: 'Email', external: false },
    { href: 'https://drive.google.com/file/d/19AkdOxX3Bx5k-QvgiUm1beTO5EdbbnZm/view?usp=sharing', icon: <BsFillPersonLinesFill />, label: 'Resume' },
  ];

  return (
    <div id='home' className='w-full h-screen text-center relative overflow-hidden'>
      {/* Particle / Glow Background */}
      <div className='particles' />
      <div className='grid-dots absolute inset-0 opacity-30' />

      {/* Gradient orbs */}
      <div className='absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-primary/5 blur-[120px] pointer-events-none' />
      <div className='absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-secondary/5 blur-[100px] pointer-events-none' />

      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center relative z-10'>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='uppercase text-sm tracking-[0.3em] text-slate-600 dark:text-slate-400 mb-4'
          >
            Building scalable systems &amp; intelligent solutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className='py-4 text-slate-900 dark:text-white'
          >
            Hi, I&apos;m{' '}
            <span className='gradient-text'>Soumyadeb</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className='py-2 flex items-center justify-center'
          >
            <h2 className='text-2xl sm:text-3xl md:text-4xl text-slate-700 dark:text-slate-300 font-light'>
              <span className='font-semibold text-slate-900 dark:text-white'>{displayText}</span>
              <span className='animate-pulse text-accent-primary ml-0.5'>|</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='py-4 text-slate-600 dark:text-slate-400 sm:max-w-[70%] m-auto text-lg leading-relaxed'
          >
            SDE I at Gupshup — engineering high-scale APIs, Voice AI pipelines,
            and platform reliability systems that power millions of interactions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className='flex items-center justify-center gap-5 py-6'
          >
            {socialLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                target={link.external !== false ? '_blank' : undefined}
                rel={link.external !== false ? 'noreferrer' : undefined}
                aria-label={link.label}
              >
                <motion.div
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className='social-icon text-lg'
                >
                  {link.icon}
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className='absolute bottom-10 left-1/2 -translate-x-1/2'
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className='w-6 h-10 rounded-full border-2 border-slate-400 dark:border-slate-600 flex justify-center pt-2'
            >
              <div className='w-1 h-2 bg-accent-primary rounded-full' />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
