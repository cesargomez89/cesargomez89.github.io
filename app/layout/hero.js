'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [text, setText] = useState('Robust Backends')
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setText(prev => prev === 'Robust Backends' ? 'Seamless Frontends' : 'Robust Backends')
        setFade(true)
      }, 500) // Wait for fade out
    }, 4000) // Switch every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
        <div className="inline-block p-2 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4 animate-fade-in-up">
          Senior Ruby on Rails Engineer
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white animate-fade-in-up delay-100">
          Building Scalable <br />
          <span className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            {text}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          Architecting, scaling, and modernizing high-growth platforms. <br className="hidden md:block" />
          Specialized in Ruby on Rails, Distributed Systems, and Performance Optimization.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up delay-300">
          <a href="#portfolio" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-500/25 transition-all hover:scale-105">
            View Projects
          </a>
          <a href="#experience" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold backdrop-blur-sm transition-all hover:scale-105">
            Check Experience
          </a>
        </div>
      </div>
    </section>
  )
}
