"use client"

import React from "react"

type Props = {
  url: string
}

export default function MoreButton({ url }: Props) {
  const handleNativeShare = () => {
    try {
      navigator.share({
        title: "BlogKori",
        text: "Check out this post on BlogKori",
        url: url,
      })
    } catch (error) {}
  }

  return (
    <div
      onClick={handleNativeShare}
      className='more share-button bg-slate-500/70 hover:bg-slate-500'
    >
      More <MoreIcon />
    </div>
  )
}

function MoreIcon({ size = 20 }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      width={size}
      height={size}
      fill='white'
    >
      <path d='M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z' />
    </svg>
  )
}
