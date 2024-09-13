import React from 'react';

const Skills = () => {
  return (
    <section className={`h-screen flex flex-col justify-center p-10`}>
      <div className='w-full flex items-center justify-center'>
        <div className='max-w-sm w-full'>
          <div
            className='bg-white rounded-lg px-8 py-12'
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
          >
            <h2 className='text-3xl font-bold text-center mb-8'>My Skills</h2>
            <p className='text-lg text-center mb-6'>
              Here are some of the skills and technologies I work with:
            </p>
            <div className='text-center'>
              <h3 className='text-xl font-semibold mb-4'>
                Frontend Technologies
              </h3>
              <ul className='list-disc list-inside mb-6'>
                <li>ReactJS</li>
                <li>React Native</li>
                <li>VueJS</li>
                <li>Tailwind CSS</li>
              </ul>
              <h3 className='text-xl font-semibold mb-4'>
                Backend Technologies
              </h3>
              <ul className='list-disc list-inside'>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>NestJS</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
