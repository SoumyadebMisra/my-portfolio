import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Achievements from '../components/Achievements';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Soumyadeb Misra | Software Development Engineer</title>
        <meta name="google-site-verification" content="QVHGmtyp4DLqHqEIOsIKAylgktdmHIhXzEg-0dbtPaY" />
        <meta
          name='description'
          content='Soumyadeb Misra — SDE I at Gupshup. Building high-scale APIs, Voice AI pipelines, and reliable backend systems. Previously at Jadavpur University, CSE.'
        />
        <meta name='keywords' content='Soumyadeb Misra, Software Developer, Backend Engineer, Voice AI, Python, Django, Node.js, Gupshup, Portfolio' />
        <meta name='author' content='Soumyadeb Misra' />
        <meta property='og:title' content='Soumyadeb Misra | Software Development Engineer' />
        <meta property='og:description' content='SDE I at Gupshup — building scalable backend systems and Voice AI solutions.' />
        <meta property='og:type' content='website' />
        <link rel='canonical' href='https://soumyadeb-misra.vercel.app' />
        <link rel='icon' href='/fav.png' />
      </Head>
      <Main />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
    </div>
  );
}
