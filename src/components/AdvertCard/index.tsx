import React from 'react';
import Image from 'next/image';
import { ContactButton } from '../ContactButton';

type AdvertCardProps = {
  title: string;
  description: string;
  image: string;
}

export const AdvertCard = ({ description, image, title }: AdvertCardProps) => {
  return (
    <div className='grid grid-cols-2 gap-5 md:gap-14 drop-shadow-xl'>
      <Image src={image} alt="Advert" width={1000} height={1000} />
      <div className='flex flex-col justify-center gap-5'>
        <h3 className='text-xl md:text-3xl text-zinc-600 font-semibold w-full md:w-1/2'>{title}</h3>
        <p className='text-md md:text-lg text-zinc-600 font-light w-full md:w-1/2'>{description}</p>
        <div className='mb-10'>
          <ContactButton />
        </div>
      </div>
    </div>
  )
}