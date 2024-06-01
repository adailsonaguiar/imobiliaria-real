import React from 'react';
import { ServiceCard } from '../ServiceCard';

export const ServicesSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col bg-white drop-shadow-2xl py-14 px-3 md:px-32">
      <div className='flex items-center pb-12 pl-3 md:pl-10 justify-center'>
        <h2 className='text-xl md:text-3xl text-zinc-600 font-semibold'>Nossos Serviços</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        <ServiceCard index={1} title='COMPRA DE IMÓVEIS' description='Procurando uma casa? Podemos te ajudar a encontrar.' image='/img/6374a6d350a0dc2fae7b351586eb03c3.webp' />
        <ServiceCard index={2} title='VENDA DE IMÓVEIS' description='Pensando em vender sua casa? Deixe-nos ajudá-lo.' image='/img/75dfacd6c7cd7e4928efeaf2c08e9329.webp' />
        <ServiceCard index={3} title='SERVIÇOS DE MUDANÇA' description='Precisa se mudar para um novo local? Podemos ajudar.' image='/img/ee5a04109fc51aa155af017b609ade23.webp' />
      </div>
    </section>
  )
}
