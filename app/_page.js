import Hero from './layout/hero'
import About from './about/about'

export default function Home() {
  return (
    <main className="min-h-screen from-accent-content to-accent via-primary bg-gradient-to-br -mt-[4rem]">
      <Hero/>
      <About/>
    </main>
  )
}
