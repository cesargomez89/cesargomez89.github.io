import './globals.css'
import Navbar from './layout/navbar'
import Footer from './layout/footer'

export const metadata = {
  title: 'Cesar Gomez | Senior Ruby on Rails Engineer',
  description: 'Senior Ruby on Rails Engineer with 12+ years of experience architecting, scaling, and modernizing backend systems.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans bg-slate-950 text-slate-200">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
