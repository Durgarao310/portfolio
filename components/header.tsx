"use client";

import React from 'react';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className='z-[999] relative w-full'>
      <nav className='fixed top-0 lg:top-1 md:top-1 sm:top-1 w-full flex items-center justify-center'>
        <ul className='bg-slate-900 lg:rounded-full md:rounded-full sm:rounded-full flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-white sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {links.map((link) => (
            <li
              className='h-3/4 flex items-center justify-center relative'
              key={link.hash}
            >
              <Link
                className={clsx(
                  'flex w-full items-center justify-center px-3 py-3'
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
