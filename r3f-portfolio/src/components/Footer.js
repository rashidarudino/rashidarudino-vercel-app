import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import icons

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} Rashida Rudino. All rights reserved.</p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/rrudino"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-blue-500 hover:text-blue-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/rashidarudino"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-gray-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:rashidarudino@gmail.com"
            aria-label="Email"
            className="text-red-500 hover:text-red-300"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
