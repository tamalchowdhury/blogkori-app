import React from "react"
import Skeleton from "./excerpt-skeleton"

export default function LoadingPosts() {
  return (
    <div className='space-y-[30px]'>
      <Skeleton />
      <Skeleton />
    </div>
  )
}
