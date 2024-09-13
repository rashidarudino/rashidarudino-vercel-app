import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 dark:bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="text-white dark:text-gray-200">Home</a>
        <a href="#about" className="text-white dark:text-gray-200">About</a>
        <a href="#projects" className="text-white dark:text-gray-200">Projects</a>
        <a href="#work-experience" className="text-white dark:text-gray-200">Work Experience</a>
        <a href="#contact" className="text-white dark:text-gray-200">Contact</a>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
