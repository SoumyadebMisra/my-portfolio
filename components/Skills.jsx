import React from 'react';
import { motion } from 'framer-motion';  
import {
  SiPython, SiJavascript, SiCplusplus, SiPostgresql, SiMysql,
  SiMongodb, SiRedis, SiDjango, SiExpress, SiReact, SiNextdotjs,
  SiNginx, SiDocker, SiGit, SiGithub,
  SiLinux, SiPostman, SiTailwindcss, SiNodedotjs
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa';
import { HiOutlineMicrophone, HiOutlineServer, HiOutlineDatabase, HiOutlineCode, HiOutlineCloud, HiOutlineCog } from 'react-icons/hi';

const skillCategories = [
  {
    title: 'Languages',
    icon: <HiOutlineCode size={20} />,
    skills: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'SQL', icon: <SiPostgresql /> },
    ],
  },
  {
    title: 'Frameworks',
    icon: <HiOutlineServer size={20} />,
    skills: [
      { name: 'Django', icon: <SiDjango /> },
      { name: 'DRF', icon: <SiDjango /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'React.js', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
    ],
  },
  {
    title: 'Voice AI & LLM',
    icon: <HiOutlineMicrophone size={20} />,
    skills: [
      { name: 'Cartesia' },
      { name: 'Deepgram' },
      { name: 'ElevenLabs' },
      { name: 'OpenAI SDK' },
      { name: 'Anthropic SDK' },
      { name: 'Voice AI' },
    ],
  },
  {
    title: 'AWS Cloud',
    icon: <HiOutlineCloud size={20} />,
    skills: [
      { name: 'EC2', icon: <FaAws /> },
      { name: 'S3', icon: <FaAws /> },
      { name: 'SQS / SNS', icon: <FaAws /> },
      { name: 'Lambda', icon: <FaAws /> },
      { name: 'RDS / Aurora', icon: <FaAws /> },
      { name: 'CloudWatch', icon: <FaAws /> },
    ],
  },
  {
    title: 'Databases',
    icon: <HiOutlineDatabase size={20} />,
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Redis', icon: <SiRedis /> },
      { name: 'Valkey' },
    ],
  },
  {
    title: 'Tools & Servers',
    icon: <HiOutlineCog size={20} />,
    skills: [
      { name: 'Nginx', icon: <SiNginx /> },
      { name: 'WebSockets' },
      { name: 'FreeSWITCH' },
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Linux', icon: <SiLinux /> },
    ],
  },
];

const Skills = () => {
  return (
    <div id='skills' className='w-full py-24 relative'>
      <div className='grid-dots absolute inset-0 opacity-20' />
      <div className='max-w-[1240px] mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className='uppercase text-sm tracking-[0.3em] text-accent-primary font-medium mb-2'>
            Skills
          </p>
          <h2 className='section-heading'>What I Can Do</h2>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              viewport={{ once: true }}
              className='glass-card p-6'
            >
              <div className='flex items-center gap-3 mb-5'>
                <div className='w-9 h-9 rounded-lg bg-accent-primary/15 flex items-center justify-center text-accent-primary'>
                  {category.icon}
                </div>
                <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>{category.title}</h3>
              </div>
              <div className='flex flex-wrap gap-2'>
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    whileHover={{ scale: 1.05 }}
                    className='skill-badge flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300'
                  >
                    {skill.icon && <span className='text-accent-glow text-base'>{skill.icon}</span>}
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Concepts bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className='mt-8 glass-card p-6'
        >
          <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-4'>Core Concepts</h3>
          <div className='flex flex-wrap gap-3'>
            {['REST APIs', 'Event-Driven Architecture', 'Pub/Sub', 'Caching', 'CI/CD', 'Microservices', 'Clean Architecture', 'Database Optimization'].map(
              (concept, i) => (
                <span key={i} className='tech-pill text-sm'>
                  {concept}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
