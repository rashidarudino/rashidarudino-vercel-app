// components/ContactForm.tsx

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('movabzzz');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    handleSubmit(formData)
      .then(() => {
        if (state.succeeded) {
          toast.success('Your message has been sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        }
      })
      .catch(() => {
        toast.error('Oops! Something went wrong. Please try again.');
      });
  };

  return (
    <div className='max-w-lg mx-auto p-4 bg-white '>
      <form onSubmit={(e) => handleFormSubmit(e)} className='space-y-4'>
        <div>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700'
          >
            Name
          </label>
          <input
            id='name'
            type='text'
            name='name'
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <ValidationError prefix='Name' field='name' errors={state.errors} />
        </div>
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700'
          >
            Email Address
          </label>
          <input
            id='email'
            type='email'
            name='email'
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
        </div>
        <div>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-gray-700'
          >
            Message
          </label>
          <textarea
            id='message'
            name='message'
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />
        </div>
        <button
          type='submit'
          className='w-full px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50'
          disabled={state.submitting}
        >
          {state.submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
