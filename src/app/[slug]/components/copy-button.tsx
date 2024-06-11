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
      {isCopied ? "Copied!" : "Copy"}
    </div>
  )
}
