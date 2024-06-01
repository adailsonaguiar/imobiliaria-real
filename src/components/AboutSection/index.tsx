import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className='w-full flex items-center flex-col py-64 px-3 md:px-32 h-full bg-white'>
      <p className='font-bold mb-4 text-zinc-500'>SOBRE NÓS</p>
      <p className='text-xl md:text-4xl w-full md:w-8/12 text-center font-semibold leading-snug text-zinc-700'>A Imobiliária Real compra e vende casas há mais de 20 anos. Temos orgulho de ser uma das melhores imobiliárias da nossa região.</p>
    </section>
  )
}
