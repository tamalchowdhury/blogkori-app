import React from "react"

export default function ExceprtSkeleton() {
  return (
    <section className='space-y-[30px]'>
      <div className='space-y-[16px]'>
        <Headline />
        <Headline />
      </div>
      <div className='space-y-[16px]'>
        <Line />
        <Line />
        <Line />
      </div>
    </section>
  )
}

function Line() {
  return (
    <div className='max-w-[600px] h-[20px] animate-pulse bg-slate-400/50 rounded-full' />
  )
}

function Headline() {
  return (
    <div className='max-w-[600px] h-[30px] animate-pulse bg-slate-400/50 rounded-full' />
  )
}
