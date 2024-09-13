import React from 'react';

function Work({ id }) {
  return (
    <section id={id} className={`py-12 `}>
      <div className='container mx-auto px-6'>
        <h2 className={`text-3xl font-bold text-center mb-12 `}>
          Work Experience
        </h2>
        <div className=''>
          <div className={`bento bg-gray`}>
            <h3 className='text-2xl font-semibold mb-2'>Job Title 1</h3>
            <p>Company 1 - Description of responsibilities and achievements.</p>
          </div>
          <div className={`bento bg-gray`}>
            <h3 className='text-2xl font-semibold mb-2'>Job Title 2</h3>
            <p>Company 2 - Description of responsibilities and achievements.</p>
          </div>
          <div className={`bento bg-gray`}>
            <h3 className='text-2xl font-semibold mb-2'>Job Title 3</h3>
            <p>Company 3 - Description of responsibilities and achievements.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
