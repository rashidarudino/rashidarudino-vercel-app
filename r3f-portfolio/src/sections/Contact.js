import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className={`h-screen flex flex-col justify-center p-10`}>
      <div className='w-full flex items-center justify-center'>
        <div className='max-w-sm w-full'>
          <div
            className='bg-white rounded-lg px-8 py-12'
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
          >
            <h2 className='text-3xl font-bold text-center mb-8'>
              Get in Touch
            </h2>
            <p className='text-lg text-center mb-6'>
              If you'd like to get in touch, feel free to reach out through the
              following methods:
            </p>
            <ul className='list-none text-center text-lg'>
              <li className='mb-2 flex items-center justify-center'>
                <FaEnvelope
                  className={`mr-2 text-blue-500 hover:text-blue-600`}
                />
                <a
                  href='mailto:example@example.com'
                  className='hover:underline'
                >
                  example@example.com
                </a>
              </li>
              <li className='mb-2 flex items-center justify-center'>
                <FaPhoneAlt
                  className={`mr-2 text-blue-500 hover:text-blue-600`}
                />
                <a href='tel:+123456789' className='hover:underline'>
                  +61 492 815 362
                </a>
              </li>
              <li className='mb-2 flex items-center justify-center'>
                <FaLinkedin
                  className={`mr-2 text-blue-500 hover:text-blue-600`}
                />
                <a
                  href='https://www.linkedin.com/in/yourprofile'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  Rashida Rudino
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
