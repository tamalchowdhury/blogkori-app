import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "./components/sidebar"
import Header from "./components/header"
import Script from "next/script"

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
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-WY5B0MSMKL'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WY5B0MSMKL');
          `}
        </Script>
        <Header />
        <div className='grid md:grid-cols-[650px_1fr] gap-[40px] bg-white min-h-[600px] max-w-[1050px] mx-auto md:px-[80px] md:py-[40px]'>
          <main className='  min-h-full p-4 leading-relaxed'>{children}</main>
          <Sidebar />
        </div>
      </body>
    </html>
  )
}
