"use client";

import React from "react";
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        After graduating with a degree in{' '}
        <span className='font-medium'>Mechanical Engineering</span>, I decided
        to pursue my passion for programming. I started learning{' '}
        <span className='font-medium'>full-stack web development</span>.{' '}
        <span className='italic'>My favorite part of programming</span> is the
        problem-solving aspect. I <span className='underline'>love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{' '}
        <span className='font-medium'>
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and React Native. I am always
        looking to learn new technologies. I am currently looking for a{' '}
        <span className='font-medium'>full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className='italic'>When I'm not coding</span>, I enjoy cooking
        food, watching movies, and playing cricket. I also enjoy{' '}
        <span className='font-medium'>learning new things</span>.
      </p>
    </section>
  );
}
