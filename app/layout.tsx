import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

export const metadata = {
  title: 'Samuel Ryberg',
  description: 'Samuel Ryberg - Game Developer Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
