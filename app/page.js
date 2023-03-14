import Image from 'next/image'
import Link from 'next/link'
import Hero from './layout/hero'
import About from './about/page'
import Portfolio from './portfolio/page'

export default function Home() {
  return (
    <main className="min-h-screen from-accent-content to-accent via-primary bg-gradient-to-br -mt-[4rem]">
      <Hero/>
      <About/>
      {/*<Portfolio/>*/}
    </main>
  )
}
