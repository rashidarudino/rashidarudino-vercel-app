import React from 'react';
import { Scroll, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import About from '../sections/About'; // Adjust the import path as necessary
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';
import Projects from '../sections/Projects';
import Work from '../sections/Work';
import Hero from '../sections/Hero';

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-20 ${
        props.left ? 'items-start' : 'items-end'
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className='w-full flex items-center justify-center'>
        <div className='max-w-sm w-full'>
          <div
            className={`rounded-lg px-10 py-12 ${
              props.isCustom ? '' : 'bg-white'
            }`}
          >
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <>
      <Scroll html>
        <div className='w-screen'>
          <Section opacity={opacityFirstSection} left isCustom id='hero'>
            <Hero />
          </Section>
          <Section opacity={opacityFirstSection} id='about'>
            <About />
          </Section>
          <Section opacity={opacitySecondSection} id='projects'>
            <Projects />
          </Section>
          <Section opacity={opacitySecondSection} id='skills'>
            <Skills />
          </Section>
          <Section opacity={opacityLastSection} left id='work'>
            <Work />
          </Section>
          <Section opacity={opacityLastSection} left id='contact'>
            <Contact />
          </Section>
        </div>
      </Scroll>
    </>
  );
};
