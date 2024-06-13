import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { merriweather } from "./lib/utils"
import Sidebar from "./components/sidebar"
import Image from "next/image"

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
            <div className='logo flex gap-4 items-center'>
              <div className=''>
                <Image
                  src='icon.svg'
                  width={48}
                  height={48}
                  alt='blogkori logo'
                  className='rounded-md object-cover '
                />
              </div>
              <div>
                <h1 className={`${merriweather.className} text-[24px]`}>
                  <Link href='/'>BlogKori</Link>
                </h1>
                <div className='uppercase text-[14px] tracking-wide'>
                  Blogging My Online Journey
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className='grid md:grid-cols-[650px_1fr] gap-[40px] bg-white min-h-[600px] max-w-[1050px] mx-auto md:px-[80px] md:py-[40px]'>
          <main className='  min-h-full p-4 leading-relaxed'>{children}</main>
          <Sidebar />
        </div>
      </body>
    </html>
  )
}
