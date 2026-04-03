import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap, HiOutlineBookOpen } from 'react-icons/hi';

const Education = () => {
  return (
    <div id='education' className='w-full py-24 relative'>
      <div className='grid-dots absolute inset-0 opacity-20' />
      <div className='max-w-[1240px] mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className='uppercase text-sm tracking-[0.3em] text-accent-primary font-medium mb-2'>
            Education
          </p>
          <h2 className='section-heading'>Academic Background</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className='mt-12 max-w-3xl'
        >
          <div className='glass-card p-8'>
            <div className='flex items-start gap-5'>
              <div className='w-14 h-14 rounded-xl bg-accent-primary/15 flex items-center justify-center flex-shrink-0'>
                <HiOutlineAcademicCap className='text-accent-primary' size={28} />
              </div>
              <div className='flex-1'>
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2'>
                  <h3 className='text-xl font-bold text-slate-900 dark:text-white'>Jadavpur University</h3>
                  <span className='tech-pill text-xs mt-2 sm:mt-0'>Sept 2020 — June 2024</span>
                </div>
                <p className='text-accent-glow font-medium text-lg'>
                  B.E. — Computer Science &amp; Engineering
                </p>
                <p className='text-slate-600 dark:text-slate-400 mt-1'>
                  Kolkata, India &nbsp;•&nbsp; SGPA: <span className='text-slate-900 dark:text-white font-semibold'>8.81</span>
                </p>

                <div className='mt-5 pt-5 border-t border-slate-200 dark:border-dark-500'>
                  <div className='flex items-center gap-2 mb-3'>
                    <HiOutlineBookOpen className='text-accent-primary' size={18} />
                    <p className='text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide'>
                      Relevant Coursework
                    </p>
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {[
                      'Data Structures & Algorithms',
                      'DBMS',
                      'Operating Systems',
                      'Object-Oriented Programming',
                      'Computer Networks',
                    ].map((course, i) => (
                      <span key={i} className='tech-pill'>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
