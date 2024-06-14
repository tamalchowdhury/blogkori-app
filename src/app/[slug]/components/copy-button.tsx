"use client"

import React, { useState } from "react"

export default function CopyButton({ title, content, url }) {
  const [isCopied, setIsCopied] = useState(false)

  const creditText = `Post Credit: Tamal Chowdhury, ${url}`

  function cleanUpText(text) {
    // remove html tags
    // also remove unnecessary new line characters
    return text.replace(/<[^>]*>/g, "").replace(/\n\n+/g, "\n\n")
  }

  function handleCopyText() {
    try {
      navigator.clipboard.writeText(
        `${title}\n${cleanUpText(content)}\n${creditText}\n`
      )
      setIsCopied(true)
    } catch (error) {}
  }

  return (
    <div
      onClick={handleCopyText}
      onBlur={() => setIsCopied(false)}
      className='copy share-button bg-orange-600/70 hover:bg-orange-600'
    >
      {isCopied ? "Copied!" : "Copy"} <CopyIcon />
    </div>
  )
}

function CopyIcon({ size = 20 }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      width={size}
      height={size}
      fill='white'
    >
      <path d='M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z' />
    </svg>
  )
}
