import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiSun, HiMoon } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import NavLogo from '../public/assets/navLogo.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Resume', href: 'https://drive.google.com/file/d/19AkdOxX3Bx5k-QvgiUm1beTO5EdbbnZm/view?usp=sharing', external: true },
  { label: 'Contact', href: '/#contact' },
];

const socialLinks = [
  { href: 'https://www.linkedin.com/in/soumyadeb-misra-79734b21a/', icon: <FaLinkedinIn />, label: 'LinkedIn' },
  { href: 'https://github.com/SoumyadebMisra', icon: <FaGithub />, label: 'GitHub' },
  { href: '/#contact', icon: <AiOutlineMail />, label: 'Email', internal: true },
  { href: 'https://drive.google.com/file/d/19AkdOxX3Bx5k-QvgiUm1beTO5EdbbnZm/view?usp=sharing', icon: <BsFillPersonLinesFill />, label: 'Resume' },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY >= 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const ThemeToggle = () => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='w-10 h-10 rounded-xl flex items-center justify-center bg-slate-200 dark:bg-dark-700 text-slate-700 dark:text-slate-300 hover:text-accent-primary dark:hover:text-accent-glow transition-all !shadow-none'
      aria-label="Toggle Theme"
    >
      {mounted && theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
    </motion.button>
  );

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed w-full h-20 z-[100] transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-dark-900/90 backdrop-blur-xl border-b border-slate-200/50 dark:border-dark-500/50 shadow-xl shadow-slate-200/20 dark:shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16 max-w-[1440px] mx-auto'>
          {/* Logo */}
          <Link href='/'>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Image
                src={NavLogo}
                alt='Soumyadeb Misra'
                width={110}
                height={44}
                className={`cursor-pointer ${mounted && theme === 'light' ? 'brightness-0' : 'brightness-0 invert'}`}
              />
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <div className='hidden md:flex items-center gap-6'>
            <ul className='flex items-center gap-1'>
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer' : undefined}
                  >
                    <span className='nav-link px-3 py-2 text-sm transition-colors duration-200 cursor-pointer block text-slate-800 dark:text-slate-200 hover:text-accent-primary dark:hover:text-accent-glow'>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>

          {/* Hamburger */}
          <div className='md:hidden flex items-center gap-4'>
            <ThemeToggle />
            <div
              onClick={handleNav}
              className='cursor-pointer text-slate-700 dark:text-slate-300 hover:text-accent-primary dark:hover:text-accent-glow transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-dark-600'
            >
              <AiOutlineMenu size={24} />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {nav && (
          <>
            {/* Backdrop */}
            <motion.div
              key='backdrop'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleNav}
              className='md:hidden fixed inset-0 bg-white/70 dark:bg-black/70 backdrop-blur-sm z-[101]'
            />

            {/* Drawer */}
            <motion.div
              key='drawer'
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className='md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] h-screen z-[102] bg-slate-50 dark:bg-dark-800 border-r border-slate-200 dark:border-dark-500/50 p-8 flex flex-col'
            >
              {/* Drawer header */}
              <div className='flex w-full items-center justify-between mb-8'>
                <Link href='/' onClick={() => setNav(false)}>
                  <Image src={NavLogo} width={90} height={36} alt='Logo' className={mounted && theme === 'light' ? 'brightness-0' : 'brightness-0 invert'} />
                </Link>
                <button
                  onClick={handleNav}
                  className='rounded-full w-9 h-9 flex items-center justify-center bg-slate-200 dark:bg-dark-600 border border-slate-300 dark:border-dark-500 text-slate-600 dark:text-slate-400 hover:text-accent-primary dark:hover:text-white transition-all !shadow-none'
                >
                  <AiOutlineClose size={18} />
                </button>
              </div>

              <div className='border-b border-slate-200 dark:border-dark-500 pb-6 mb-6'>
                <p className='text-slate-600 dark:text-slate-400 text-sm'>
                  Building scalable systems &amp; Voice AI
                </p>
              </div>

              {/* Nav links */}
              <ul className='flex flex-col gap-1 flex-1'>
                {navLinks.map((link, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noreferrer' : undefined}
                      onClick={() => setNav(false)}
                    >
                      <span className='block py-3 px-4 rounded-lg text-slate-700 dark:text-slate-300 hover:text-accent-primary hover:bg-slate-100 dark:hover:text-white dark:hover:bg-dark-600 transition-all duration-200 text-sm font-medium'>
                        {link.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Social icons */}
              <div className='pt-6 border-t border-slate-200 dark:border-dark-500'>
                <p className='uppercase tracking-widest text-xs text-accent-primary mb-4'>
                  Connect
                </p>
                <div className='flex items-center gap-3'>
                  {socialLinks.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      target={link.internal ? undefined : '_blank'}
                      rel={link.internal ? undefined : 'noreferrer'}
                      aria-label={link.label}
                      onClick={() => setNav(false)}
                    >
                      <div className='social-icon'>
                        {link.icon}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
