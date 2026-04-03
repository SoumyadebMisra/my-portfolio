import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineTrophy, HiOutlineStar, HiOutlineAcademicCap, HiOutlineSparkles } from 'react-icons/hi2';
import { FaGoogle } from 'react-icons/fa';

const achievements = [
  {
    icon: <FaGoogle size={20} />,
    title: 'Google Kickstart Round G 2022',
    detail: 'Rank — 2025',
    link: 'https://drive.google.com/file/d/1XiAeBao1RJKzIclkJ124O35rVYAEprz1/view?usp=sharing',
    color: 'from-blue-500/20 to-green-500/20',
    borderColor: 'hover:border-blue-500/40',
  },
  {
    icon: <FaGoogle size={20} />,
    title: 'Google Kickstart Round E 2022',
    detail: 'Rank — 3246',
    link: 'https://drive.google.com/file/d/1XiAeBao1RJKzIclkJ124O35rVYAEprz1/view?usp=sharing',
    color: 'from-red-500/20 to-yellow-500/20',
    borderColor: 'hover:border-red-500/40',
  },
  {
    icon: <HiOutlineAcademicCap size={22} />,
    title: 'JEE Advanced',
    detail: 'All-India Rank — 5789',
    color: 'from-orange-500/20 to-amber-500/20',
    borderColor: 'hover:border-orange-500/40',
  },
  {
    icon: <HiOutlineStar size={22} />,
    title: 'WBJEE',
    detail: 'All-India Rank — 173',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'hover:border-purple-500/40',
  },
  {
    icon: <HiOutlineSparkles size={22} />,
    title: 'Productathon 2022',
    detail: 'Finalist',
    link: 'https://drive.google.com/file/d/1jZIwkHOhi3yYrjM9RRhXphR2mm_T7PkC/view?usp=sharing',
    color: 'from-emerald-500/20 to-cyan-500/20',
    borderColor: 'hover:border-emerald-500/40',
  },
];

const Achievements = () => {
  return (
    <div id='achievements' className='w-full py-24 relative'>
      <div className='particles' />
      <div className='max-w-[1240px] mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className='uppercase text-sm tracking-[0.3em] text-accent-primary font-medium mb-2'>
            Achievements
          </p>
          <h2 className='section-heading'>Recognition &amp; Accomplishments</h2>
        </motion.div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <a
                href={item.link || undefined}
                target={item.link ? '_blank' : undefined}
                rel={item.link ? 'noreferrer' : undefined}
                className='block'
              >
                <div className={`achievement-badge glass-card p-6 h-full cursor-${item.link ? 'pointer' : 'default'} ${item.borderColor}`}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-slate-700 dark:text-white mb-4`}>
                    {item.icon}
                  </div>
                  <h4 className='text-slate-900 dark:text-white font-semibold text-lg mb-1'>{item.title}</h4>
                  <p className='text-accent-glow font-bold text-xl'>{item.detail}</p>
                  {item.link && (
                    <p className='text-slate-600 dark:text-slate-500 text-sm mt-3 flex items-center gap-1'>
                      View certificate →
                    </p>
                  )}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
