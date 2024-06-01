import React from 'react';
import { AdvertCard } from '../AdvertCard';

export const AdvertsSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col bg-white drop-shadow-2xl py-3">
      <div className='flex items-center py-12 pl-10'>
        <h2 className='text-xl text-zinc-600 font-bold uppercase'>Nossos anúncios ativos</h2>
      </div>
      <AdvertCard title='Casa com 740m² em Santa Solana' description='Atraia potenciais compradores com uma descrição clara que lista a característica mais atraente do seu imóvel.' image='/img/fa8cac0ce558ac93d8a8f144addd19fe.jpg' />
      <AdvertCard title='Casa padrão com 3 quartos, garagem e quintal amplo' description='Atraia potenciais compradores com uma descrição clara que lista a característica mais atraente do seu imóvel.' image='/img/ef158e62177e0431e2d231a589a036c0.jpg' />
      <AdvertCard title='Apartamento de 2 quartos no Centro' description='Atraia potenciais compradores com uma descrição clara que lista a característica mais atraente do seu imóvel.' image='/img/adde5bfd6d9981bd7ff84a1fe47059da.webp' />
    </section>
  )
}
