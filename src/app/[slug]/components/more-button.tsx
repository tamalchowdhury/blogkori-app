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
      More
    </div>
  )
}
