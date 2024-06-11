import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { merriweather } from "./lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BlogKori",
  description: "BlogKori",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`bg-slate-200 text-[#333] h-screen
          
         ${inter.className}`}
      >
        <header className='p-8 bg-blue-300'>
          <div className='max-w-[1200px] mx-auto'>
            <h1 className={`${merriweather.className} text-[24px]`}>
              <Link href='/'>BlogKori</Link>
            </h1>
          </div>
        </header>
        <div className='grid md:grid-cols-[650px_1fr] gap-[40px] bg-white min-h-[600px] max-w-[1050px] mx-auto md:px-[80px] md:pt-[40px]'>
          <main className='  min-h-full p-4 leading-relaxed'>{children}</main>
          <aside className='p-4 md:p-0 md:mt-[50px]'>
            <h3 className={`${merriweather.className} font-bold`}>Sponsore</h3>
            <Link
              href='https://www.plesk.com/blog/various/free-wordpress-cdn/'
              target='_blank'
              className='border-b border-b-pink-600 border-dashed'
            >
              Free WordPress CDN
            </Link>
          </aside>
        </div>
      </body>
    </html>
  )
}