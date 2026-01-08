import Script from 'next/script'
import './globals.css'
import Navbar from './layout/navbar'
import Footer from './layout/footer'

export const metadata = {
  metadataBase: new URL('https://cesargomez89.github.io'),
  title: {
    default: 'Cesar Gomez | Senior Ruby on Rails Engineer',
    template: '%s | Cesar Gomez'
  },
  description: 'Senior Ruby on Rails Engineer with 12+ years of experience architecting, scaling, and modernizing backend systems. Specialized in Ruby on Rails, React, and high-performance backend architecture.',
  keywords: ['Ruby on Rails', 'Full Stack Developer', 'Software Architect', 'React', 'Backend Engineer', 'Cesar Gomez'],
  authors: [{ name: 'Cesar Gomez' }],
  creator: 'Cesar Gomez',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cesargomez89.github.io',
    title: 'Cesar Gomez | Senior Ruby on Rails Engineer',
    description: 'Senior Ruby on Rails Engineer with 12+ years of experience architecting, scaling, and modernizing backend systems.',
    siteName: 'Cesar Gomez Portfolio',
    images: [
      {
        url: '/profile.jpeg',
        width: 1200,
        height: 630,
        alt: 'Cesar Gomez - Senior Ruby on Rails Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cesar Gomez | Senior Ruby on Rails Engineer',
    description: 'Senior Ruby on Rails Engineer with 12+ years of experience architecting, scaling, and modernizing backend systems.',
    creator: '@cesargomez89', // Assuming handle based on repo name
    images: ['/profile.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  const GTM_ID = 'GTM-KFRP5TFV'

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </head>
      <body className="antialiased font-sans bg-[#1a1614] text-[#FAF9F6]">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
