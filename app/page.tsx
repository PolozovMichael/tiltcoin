'use client'

import PlanetCard from './components/PlanetCard'
import { Button } from '@/components/ui/button'
import { type CarouselApi } from '@/components/ui/carousel'
import { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const planets = [
  { img: '/planet_one.svg', isActive: false },
  { img: '/planet_two.svg', isActive: true },
  { img: '/planet_three.svg', isActive: false },
]

export default function Home() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <main className="overflow-y-hidden sm:overflow-y-auto w-full h-screen flex flex-col sm:justify-around gap-10 sm:mt-0 mt-10 justify-start items-center">
      <h1 className="sm:text-[60px] text-[40px] text-center tracking-[20px] md:tracking-[60px] text-white font-medium">
        TILTCOIN
      </h1>
      <h5 className="text-white text-xl font-medium">Website in works</h5>
      <Button className="w-[250px] h-[35px] sm:w-[300px] sm:h-[50px] relative group p-10 rounded-xl drop-shadow-lg">
        <div className=" z-1 absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#ff009d] via-[rgba(255,255,255, 0.3)] to-[#ff009d] blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

        <div className="w-full z-20 h-full bg-violet-300  relative inline-flex items-center justify-center sm:text-3xl text-2xl font-bold text-white transition-all duration-200 focus:outline-none  focus:ring-offset-0 focus:ring-0">
          <h3>FARM NOW</h3>
        </div>
      </Button>
      <div className="w-full sm:flex hidden justify-center gap-[200px]">
        {planets.map((planet, index) => (
          <PlanetCard key={index} img={planet.img} isActive={planet.isActive} />
        ))}
      </div>
      <Carousel className="sm:hidden flex" setApi={setApi}>
        <CarouselContent>
          {planets.map((planet, index) => (
            <CarouselItem key={index}>
              <PlanetCard img={planet.img} isActive={false} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  )
}
