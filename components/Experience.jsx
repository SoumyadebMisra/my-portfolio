import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineBriefcase, HiOutlineChevronRight } from 'react-icons/hi';

const experiences = [
  {
    company: 'Gupshup',
    role: 'Software Development Engineer I',
    location: 'Bengaluru, India',
    period: 'July 2024 — Present',
    highlights: [
      {
        title: 'High-Scale API Optimization',
        description:
          'Re-engineered bulk number allocation REST APIs by optimizing SQL execution plans and minimizing database round-trips; reduced API latency by 30% with a robust multi-tier error handling framework.',
      },
      {
        title: 'Platform Reliability & Automation',
        description:
          'Architected a Python-based intelligent recovery system for FreeSWITCH voice infrastructure with automated health checks, SIP validation, and real-time Slack alerting — achieving 99.9% uptime.',
      },
      {
        title: 'Voice AI Orchestration (POC)',
        description:
          'Developed an end-to-end Voice AI SDK, benchmarking audio chunking strategies to achieve <800ms end-to-end latency; integrated LLM-based TTS/STT pipelines via WebSockets and ElevenLabs APIs for seamless, real-time human-like interactions.',
      },
      {
        title: 'Backend Architecture',
        description:
          'Engineered IVR listing services with API-key authentication, implemented database-level audit logging, and resolved critical timezone synchronization bugs in scheduling engines.',
      },
      {
        title: 'SDLC & Leadership',
        description:
          'Contributed to system design discussions, performed rigorous code reviews, and mentored junior engineers on Clean Code principles and scalable RESTful architecture.',
      },
    ],
    techs: ['Python', 'Django', 'PostgreSQL', 'AWS', 'FreeSWITCH', 'Redis', 'Voice AI'],
  },
];

const Experience = () => {
  return (
    <div id='experience' className='w-full py-24 relative'>
      <div className='particles' />
      <div className='max-w-[1240px] mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className='uppercase text-sm tracking-[0.3em] text-accent-primary font-medium mb-2'>
            Experience
          </p>
          <h2 className='section-heading'>Where I&apos;ve Worked</h2>
        </motion.div>

        <div className='mt-12 relative'>
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className='relative pl-14'
            >
              {/* Timeline line */}
              <div className='timeline-line' />
              {/* Timeline dot */}
              <div className='timeline-dot' />

              <div className='glass-card p-8'>
                {/* Header */}
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6'>
                  <div>
                    <div className='flex items-center gap-3 mb-1'>
                      <HiOutlineBriefcase className='text-accent-primary' size={22} />
                      <h3 className='text-2xl font-bold text-slate-900 dark:text-white'>{exp.company}</h3>
                    </div>
                    <p className='text-lg text-accent-primary dark:text-accent-glow font-medium'>{exp.role}</p>
                    <p className='text-sm text-slate-600 dark:text-slate-400 mt-1'>{exp.location}</p>
                  </div>
                  <div className='mt-2 sm:mt-0'>
                    <span className='tech-pill text-sm'>{exp.period}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className='space-y-4'>
                  {exp.highlights.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      viewport={{ once: true }}
                      className='flex items-start gap-3'
                    >
                      <HiOutlineChevronRight className='text-accent-primary mt-1.5 flex-shrink-0' size={14} />
                      <div>
                        <span className='text-slate-900 dark:text-white font-semibold'>{item.title}: </span>
                        <span className='text-slate-700 dark:text-slate-400'>{item.description}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className='flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-200 dark:border-dark-500'>
                  {exp.techs.map((tech, i) => (
                    <span key={i} className='tech-pill'>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
