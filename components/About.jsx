import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/sm.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            Hello, I am a final year Computer Science and Engineering B.E. student of Jadavpur University, Kolkata, India.
          </p>
          <p className='py-2 text-gray-600'>
            I started web developement in late 2021 participating in multiple hackathons. My primary expertise is in MERN stack and Next.js and Javascript in general.
            Besides knowledge in Web Development, I have excellent fundamental Computer Science knowledge along with problem solving skills.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
          <p className='py-2 text-gray-600'>
            Besides studying, I also have interests in chess and cricket. So, if you ever want a challenge in those two sports, hit me up!
          </p>
          
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
