import React from 'react';

const Hero = ({id}) => {

  return (
    <section id={id} 
      className={`pt-24 h-screen flex flex-col items-center justify-center text-center text-white`}
    >
      {/* spin, ping, pulse, bounce */}
      <h1 className='text-4xl font-bold mb-4 animate-pulse'>Hi! This is Rashida.</h1>
      <p className='text-xl mb-6 max-w-lg'>
        Explore my projects, experience, and get in touch.
      </p>
    </section>
  );
};

export default Hero;
