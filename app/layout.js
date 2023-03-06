import './globals.css'
import Link from 'next/link'
import Navbar from './layout/navbar'
import Hero from './layout/hero'
import LinkedinIcon from './icons/linkedin'
import GithubIcon from './icons/github'
import HeartIcon from './icons/heart'

export const metadata = {
  title: 'Cesar Gomez',
  description: 'Ruby on Rails Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="autumn">
      <body>
        <Navbar/>
        {children}
        <footer className="footer footer-center p-10 bg-primary text-primary-content">
          <div>
            <HeartIcon/>
            <p className="font-bold">
              From Mexico with love. <br/>Providing Web Development since 2013
            </p>
            <p>Copyright © 2023 - All right reserved</p>
          </div>
          <div>
            <div className="grid grid-flow-col gap-4">
              <a><LinkedinIcon/></a>
              <a><GithubIcon/></a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
