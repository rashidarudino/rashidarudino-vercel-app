import { Scroll, useScroll } from '@react-three/drei';
import { SkillBento } from './Bento/SkillBento';
import ContactForm from './ContactForm';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaDownload,
} from 'react-icons/fa';
import { useSnackbar } from 'notistack';
import Chip from '@mui/material/Chip';
const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? 'items-end' : 'items-start'
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className='w-1/2 flex items-center justify-center'>
        <div className='max-w-sm w-full'>
          <div className='bg-white  rounded-lg px-1 py-10'>
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const { enqueueSnackbar } = useSnackbar();

  const handleDownload = (event) => {
    console.log('snackbar?');
    enqueueSnackbar("Downloaded Rashida's resume!", { variant: 'success' });
  };

  return (
    <Scroll html>
      <div className='w-screen'>
        <Section>
          <div className='container'>
            <h1 className='text-4xl text-center animate-bounce mt-6'>Hi!</h1>
            <h2 className='text-3xl font-bold text-center'>I'm Rashida</h2>
            <div className='flex justify-center my-4'>
              Programmer | Digital Artist
            </div>
            <div className='flex flex-wrap justify-start'>
              <Chip label='Creating websites' className='m-2' />
              <Chip label='Building PowerApps' className='m-2' />
              <Chip label='Documenting and blogging' className='m-2' />
              <Chip label='Working with APIs' className='m-2' />
              <Chip label='Handling esp32s and serial data' className='m-2' />
              <Chip label='Modeling, drawing, and animating' className='m-2' />
            </div>
            <p className='text-center animate-pulse mt-4 px-16'>
              I am flexible and keen on staying up-to-date with the latest
              trends
            </p>
          </div>
        </Section>
        <Section right>
          <h1 className='text-3xl font-bold -mt-20 text-gray-800 mb-6'>
            About me
          </h1>
          <p className='text-center'>
            I first started
            <a
              href='https://www.toycube.shop/art'
              className='text-blue-400 hover:text-blue-600'
            >
              {' '}
              art commissions
            </a>{' '}
            on DeviantArt at 15. Before graduating highschool, since I’m a big
            foodie and wanted to dive in, I jumped into hospitality and started
            working as an Ogalo Crew Member in 2019 while I was doing my VET
            course. I ended up graduating with a pretty awesome ATAR of 96.9.
          </p>
        </Section>
        <Section right>
          <h1 className='text-3xl font-bold -mt-20 text-gray-800 mb-6'>
            ...and a bit more
          </h1>
          <p className='text-center'>
            During my freshman year at UNSW Kensington, I kicked off my tutoring
            adventure with CSEducation for a three months until COVID hit.
          </p>
          <br />
          <p className='text-center'>
            I transitioned to online tutoring with Cluey Learning. Fast forward,
            and I’m now seasoned🧂 with four years of experience in programming
            and tutoring children. 😁
          </p>
          <br />
        </Section>
        <Section right>
          <h1 className='text-3xl absolute -mt-20 animate-bounce font-bold text-center'>
            This is my toolbox
          </h1>
          <SkillBento />
        </Section>
        <Section>
          <h1 className='text-3xl font-bold -mt-20 text-gray-800 mb-6'>
            Get in touch
          </h1>
          <div className='container p-4'>
            <a
              href='mailto:rashidarudino@gmail.com'
              className='flex items-center space-x-2 text-red-400 hover:text-red-600'
            >
              <FaEnvelope size={32} className='text-2xl' />
              <p>rashidarudino@gmail.com</p>
            </a>
            <a
              href='https://www.linkedin.com/in/rrudino'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center space-x-2 text-blue-400 hover:text-blue-600'
            >
              <FaLinkedin size={32} className='text-2xl' />
              <p>rrudino</p>
            </a>
            <a
              href='https://github.com/rashidarudino'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center space-x-2 text-slate-400 hover:text-slate-600'
            >
              <FaGithub size={32} className='text-2xl' />
              <p>rashidarudino</p>
            </a>
            <a
              href='tel:+61492815361'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center space-x-2 text-orange-400 hover:text-orange-600'
            >
              <FaPhone size={32} className='text-2xl' />
              <p>+61 492 815 362</p>
            </a>
          </div>
          <ContactForm />
        </Section>
        <Section right>
          {/* Title */}
          <h1 className='text-3xl font-bold -mt-20 text-gray-800 mb-6'>
            Resume
          </h1>

          {/* Balloon-style Message */}
          <div className='bg-gray-100 w-full max-w-md text-center p-4 rounded-lg shadow-md'>
            <p className='text-lg font-bold text-gray-800 mb-2'>
              Get to know me better!
            </p>
            <p className='text-sm text-gray-600'>
              Download my resume to see a detailed account of my skills,
              experience, and achievements. Feel free to reach out for any
              inquiries!
            </p>
          </div>

          {/* Download Button */}
          <a
            href='/rashida-rudino-resume-2024.pdf' // Replace with your resume file path
            download='rashida-rudino-resume-2024.pdf'
            onClick={handleDownload}
            className='mt-6 flex justify-center items-center bg-green-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-300'
          >
            <FaDownload className='mr-2' />
            Download Resume
          </a>
        </Section>
        <Section>
          <h1 className='text-3xl font-bold -mt-20 text-gray-800 mb-6'>
            Project Gallery
          </h1>
          <p className='p-4 text-center'>
            Browse my alternate site here:{' '}
            <a
              href='https://www.toycube.shop/'
              className='text-blue-900 hover:text-[#38a1e6] font-semibold underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              Toycube
            </a>
          </p>
          <iframe
            className='ml-10 justify-center h-full'
            src='https://www.toycube.shop/art'
            title='Embedded React App'
          ></iframe>
        </Section>
      </div>
    </Scroll>
  );
};
