import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '../app/layout/navbar'
import LinkedinIcon from '../app/icons/linkedin'
import GithubIcon from '../app/icons/github'
import HeartIcon from '../app/icons/heart'
import Hero from '../app/layout/hero'
import About from '../app/about/about'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Cesar Gomez</title>
        <meta name="description" content="Ruby on Rails Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="min-h-screen from-accent-content to-accent via-primary bg-gradient-to-br -mt-[4rem]">
        <Hero/>
        <About/>
      </main>
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
        <a href="https://www.linkedin.com/in/cesargomez89/"><LinkedinIcon/></a>
        <a href="https://github.com/cesargomez89"><GithubIcon/></a>
          </div>
        </div>
      </footer>
    </>
  )
}
