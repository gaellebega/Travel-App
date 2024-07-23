import React from 'react'
import Image from 'next/image'

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  PeopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, PeopleJoined }: CampProps) => {
  return (
    <div 
      className="h-full w-full min-w-[110px] bg-cover bg-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <p>{PeopleJoined}</p>
    </div>
  )
}

const Camp = () => {
  return (
    <section className='border-2 border-green-900 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-center gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite
          backgroundImage="/visitrwanda/v18.jpg"
          title='Putuk Turno Camp'
          subtitle='Kigali, Rwanda'
          PeopleJoined='50+ Joined'
        />
        <CampSite
          backgroundImage="/visitrwanda/v16.jpg"
          title='Putuk Turno Camp'
          subtitle='Kigali, Rwanda'
          PeopleJoined='50+ Joined'
        />
      </div>
      <div className='flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6'>
        <div className='bg-green-500 rounded-3xl overflow-hidden relative w-full p-8 lg:max-w-[400px] xl:max-w-[700px] xl:rounded-5xl xl:px-16 xl:py-20'>
          <h1 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white'> 
            <strong>Feeling Lost</strong> and not knowing the way?
          </h1>
          <p className='regular-14 xl:regular-16 mt-5 text-white'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem nisi qui quaerat ab officiis error facilis,
             quasi iste officia
            dolor alias facere ipsam vero magni modi molestiae molestias omnis dolore?
          </p>
          <Image 
            src='/visitrwanda/cool.svg'
            alt='sad'
            width={100}
            height={200}
            className='camp-quote'
          />
        </div>
      </div>
    </section>
  )
}

export default Camp
