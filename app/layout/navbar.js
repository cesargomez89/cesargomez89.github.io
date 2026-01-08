'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#portfolio' },
    { name: 'Blog', href: '/#blog' },
    { name: 'Contact', href: 'mailto:cesargomez89@gmail.com' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'
        }`}
    >
      <div className={`mx-auto max-w-7xl px-6 transition-all duration-300 ${scrolled ? 'bg-[#2a2624]/80 backdrop-blur-md border border-white/5 rounded-full shadow-lg mx-4' : 'bg-transparent'
        }`}>
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white">
            Cesar<span className="text-[#e32c22]"> / </span>Gomez
          </Link>

          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#d6d3d1]/80 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e7ad52] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <a
            href="https://github.com/cesargomez89/resume/releases/download/cv-latest/Cesar_Gomez_Senior_RoR_Engineer.pdf"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-all bg-white/10 rounded-full hover:bg-white/20 hover:scale-105 border border-white/10"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
