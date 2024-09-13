import React from 'react';

const About = ({ id }) => {

  return (
    <section
      id={id}
      className={`h-screen flex flex-col justify-center p-10`}
    >
      <div className='w-full flex items-center justify-center'>
        <div className='max-w-sm w-full'>
          <div
            className='bg-white rounded-lg px-8 py-12'
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
          >
            <h2 className='text-3xl font-bold text-center mb-8'>About Me</h2>
            <p className='text-lg text-center max-w-2xl mx-auto leading-relaxed'>
              I am a passionate developer with experience in creating dynamic
              and responsive websites. My expertise includes front-end
              technologies like React, JavaScript, and CSS. I love solving
              complex problems and delivering high-quality software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
