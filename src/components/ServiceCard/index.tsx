import React from 'react';
import Image from 'next/image';

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  index: number;
}

export const ServiceCard = ({ description, image, title, index }: ServiceCardProps) => {
  return (
    <div className='flex relative h-96'>
      <Image className='object-cover' src={image} alt="Service" width={1000} height={1000} />
      <div className='absolute bg-white bottom-2 left-2 right-2 p-7'>
        <h3 className='text-lg text-zinc-500 font-semibold'>{index}</h3>
        <h3 className='text-lg text-zinc-500 font-semibold'>{title}</h3>
        <p className='text-base text-zinc-500 font-thin'>{description}</p>
      </div>
    </div>
  )
}