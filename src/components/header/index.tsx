import React from 'react';
import { ContactButton } from '../ContactButton';
import Image from 'next/image';

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen'>
      <nav className='w-full flex items-center justify-between bg-white py-8 px-3 md:px-32'>
        <div className="flex items-center">
          <div className="relative h-16 w-16">
            <Image src="/img/logo.png" alt="Logo" width={1000} height={1000} />
          </div>
          <a className='flex items-start flex-col text-zinc-700 text-lg md:text-xl font-semibold tracking-tighter leading-5'>
            <p>Imobiliária</p>
            <p>Palmeira Real</p>
          </a>
        </div>
        <ContactButton />
      </nav>
      {children}
    </div>
  )
}
