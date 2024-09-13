import React from 'react';

const Projects = ({ id }) => {

  return (
    <section
      id={id}
      className={`h-screen flex flex-col justify-center p-10`}

    >
      <div className='w-full flex items-center justify-center'>
        <div className='max-w-4xl w-full'>
          <div
            className='bg-white rounded-lg px-8 py-12'
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
          >
            <h2 className='text-3xl font-bold text-center mb-12'>
              My Projects
            </h2>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              <div className='bento'>
                <h3 className='text-2xl font-semibold mb-2'>Project 1</h3>
                <p>
                  Description of project 1 goes here. Highlight key features and
                  technologies used.
                </p>
              </div>
              <div className='bento'>
                <h3 className='text-2xl font-semibold mb-2'>Project 2</h3>
                <p>
                  Description of project 2 goes here. Highlight key features and
                  technologies used.
                </p>
              </div>
              <div className='bento'>
                <h3 className='text-2xl font-semibold mb-2'>Project 3</h3>
                <p>
                  Description of project 3 goes here. Highlight key features and
                  technologies used.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
