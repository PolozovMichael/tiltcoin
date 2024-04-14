'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface PlanetCardProps {
  img: string
  isActive?: boolean
}

export default function PlanetCard({ img, isActive }: PlanetCardProps) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(window?.innerWidth)
  }, [])

  return (
    <section className="flex items-center flex-col sm:gap-20 gap-10 cursor-pointer">
      <div className="max-w-[400px]">
        <Image
          className="hidden sm:block drop-shadow-sm"
          width={isActive ? 500 : 300}
          height={isActive ? 500 : 300}
          src={img}
          alt="planet"
        />
        <Image
          className="sm:hidden block drop-shadow-sm"
          width={250}
          height={250}
          src={img}
          alt="planet"
        />
      </div>
      <div
        className={`w-max-[100px] sm:w-max-[${isActive ? '100px' : '200px'}]`}
      >
        <Image
          className="hidden sm:block drop-shadow-lg"
          alt="podium"
          height={150}
          width={isActive ? 500 : 300}
          src={'/podium.svg'}
        />
        <Image
          className="sm:hidden block drop-shadow-lg"
          alt="podium"
          height={150}
          width={300}
          src={'/podium.svg'}
        />
      </div>
    </section>
  )
}
