import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id='contact' className='w-full py-24 relative'>
      <div className='grid-dots absolute inset-0 opacity-20' />
      <div className='max-w-[1240px] m-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className='uppercase text-sm tracking-[0.3em] text-accent-primary font-medium mb-2'>
            Contact
          </p>
          <h2 className='section-heading'>Get In Touch</h2>
          <p className='text-slate-600 dark:text-slate-400 mt-6 max-w-xl'>
            Open to new opportunities, collaborations, and interesting conversations.
            Drop me a message and I&apos;ll get back to you!
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-5 gap-8 mt-12'>
          {/* Left: Info */}
          <motion.div
            className='lg:col-span-2'
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className='glass-card p-8 h-full flex flex-col justify-between'>
              <div>
                <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-1'>Soumyadeb Misra</h3>
                <p className='text-accent-primary dark:text-accent-glow font-medium mb-6'>Software Development Engineer I</p>

                <div className='space-y-4 text-slate-600 dark:text-slate-400 text-sm'>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 rounded-lg bg-accent-primary/15 flex items-center justify-center flex-shrink-0'>
                      <AiOutlineMail className='text-accent-primary' size={16} />
                    </div>
                    <span>misrasoumya0802@gmail.com</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 rounded-lg bg-accent-primary/15 flex items-center justify-center flex-shrink-0'>
                      <HiOutlinePhone className='text-accent-primary' size={16} />
                    </div>
                    <span>+91-7430875344</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 rounded-lg bg-accent-primary/15 flex items-center justify-center flex-shrink-0'>
                      <HiOutlineLocationMarker className='text-accent-primary' size={16} />
                    </div>
                    <span>Bengaluru, India</span>
                  </div>
                </div>
              </div>

              <div className='mt-10'>
                <p className='uppercase text-xs tracking-widest text-accent-primary mb-4'>Connect</p>
                <div className='flex items-center gap-4'>
                  {[
                    { href: 'https://www.linkedin.com/in/soumyadeb-misra-79734b21a/', icon: <FaLinkedinIn />, label: 'LinkedIn' },
                    { href: 'https://github.com/SoumyadebMisra', icon: <FaGithub />, label: 'GitHub' },
                    { href: 'mailto:misrasoumya0802@gmail.com', icon: <AiOutlineMail />, label: 'Email' },
                    {
                      href: 'https://drive.google.com/file/d/19AkdOxX3Bx5k-QvgiUm1beTO5EdbbnZm/view?usp=sharing',
                      icon: <BsFillPersonLinesFill />,
                      label: 'Resume',
                    },
                  ].map((link, i) => (
                    <Link key={i} href={link.href} target='_blank' rel='noreferrer' aria-label={link.label}>
                      <motion.div
                        whileHover={{ scale: 1.15, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className='social-icon'
                      >
                        {link.icon}
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className='lg:col-span-3'
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className='glass-card p-8'>
              <form
                action='https://getform.io/f/1cdd73b5-0ef0-4784-aa38-062bd57b8e20'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-5 mb-5'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium'>Name</label>
                    <input
                      className='glow-input'
                      type='text'
                      name='name'
                      placeholder='Your name'
                      required
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium'>Phone</label>
                    <input
                      className='glow-input'
                      type='text'
                      name='phone'
                      placeholder='Your phone (optional)'
                    />
                  </div>
                </div>

                <div className='flex flex-col gap-2 mb-5'>
                  <label className='text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium'>Email</label>
                  <input
                    className='glow-input'
                    type='email'
                    name='email'
                    placeholder='your@email.com'
                    required
                  />
                </div>

                <div className='flex flex-col gap-2 mb-5'>
                  <label className='text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium'>Subject</label>
                  <input
                    className='glow-input'
                    type='text'
                    name='subject'
                    placeholder='What&apos;s this about?'
                  />
                </div>

                <div className='flex flex-col gap-2 mb-6'>
                  <label className='text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium'>Message</label>
                  <textarea
                    className='glow-input resize-none'
                    rows='6'
                    name='message'
                    placeholder='Tell me about your project or opportunity...'
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full py-4 text-white font-semibold text-base'
                  type='submit'
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Back to top */}
        <div className='flex justify-center mt-16'>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.9, y: -40 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className='social-icon w-12 h-12 group !bg-gradient-to-t !from-accent-primary/20 !to-accent-secondary/20 !border-accent-primary/30 hover:!border-accent-primary hover:!shadow-[0_0_25px_rgba(99,102,241,0.3)] !rounded-full'
            title='Back to top'
            aria-label='Scroll to top'
          >
            <HiOutlineChevronDoubleUp className='text-accent-primary group-hover:text-accent-glow transition-colors' size={22} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
