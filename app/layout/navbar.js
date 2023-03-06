'use client';

import React, { useState } from "react";
import Link from 'next/link'
import LinkedinIcon from '../icons/linkedin'
import GithubIcon from '../icons/github'

export default function Navbar() {
  const [navbarClasses, setNavbarClasses] = useState('text-neutral-content')

  document.addEventListener("scroll", () => {
    const classes = window.scrollY > 0 ? 'bg-base-100 text-base-content shadow-sm' : 'text-neutral-content'

    setNavbarClasses(classes)
  });

  return (
    <div className={"navbar sticky top-0 z-30 bg-opacity-90 backdrop-blur transition-all duration-100 " + navbarClasses}>
      <div className="navbar-start">
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="/profile.jpeg" />
          </div>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">Cesar Gomez</Link>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#portfolio">Portfolio</a></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><a href="/resume-cesar-gomez.pdf">Resume</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="px-1"><LinkedinIcon/></a>
        <a className="px-1"><GithubIcon/></a>
      </div>
    </div>
  )
}
