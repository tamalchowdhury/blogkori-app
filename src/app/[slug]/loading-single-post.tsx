import React from "react"
import Skeleton from "../components/excerpt-skeleton"

export default function LoadingSinglePost() {
  return (
    <div className='space-y-[30px]'>
      <div className='space-y-[16px]'>
        <Headline />
        <Headline />
      </div>
      <div className='space-y-[16px]'>
        {Array.from({ length: 8 }).map((_, i) => (
          <Line key={i} />
        ))}
      </div>
    </div>
  )
}

function Line() {
  return (
    <div className='max-w-[600px] h-[20px] animate-pulse bg-slate-400/50 rounded-full' />
  )
}

function Headline() {
  return (
    <div className='max-w-[600px] h-[38px] animate-pulse bg-slate-400/50 rounded-full' />
  )
}
