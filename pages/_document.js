import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const themes = ['autumn', 'halloween']
  const theme = themes[Math.floor(Math.random()*themes.length)];
  return (
    <Html lang="en" data-theme={'autumn'} className="scroll-smooth">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
