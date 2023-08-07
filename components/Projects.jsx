import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import campGroundsImg from "../public/assets/projects/campGrounds.png"
import connectImg from "../public/assets/projects/connect.png"
import scImg from "../public/assets/projects/sportsCorner.png"
import vidFestImg from "../public/assets/projects/vidFestSs.png"
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Vid Fest'
            backgroundImg={vidFestImg}
            projectUrl='/vidFest'
            tech='MERN stack'
          />
          <ProjectItem
            title='campGrounds'
            backgroundImg={campGroundsImg}
            projectUrl='/campgrounds'
            tech='Express.js HTML CSS Mapbox'
          />
          <ProjectItem
            title='Connect'
            backgroundImg={connectImg}
            projectUrl='/connect'
            tech='React.JS Sanity.io'

          />
          <ProjectItem
            title='Sports Corner'
            backgroundImg={scImg}
            projectUrl='/sc'
            tech='PHP HTML CSS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
