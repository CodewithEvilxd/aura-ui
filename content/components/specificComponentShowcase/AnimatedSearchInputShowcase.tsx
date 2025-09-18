'use client'

import React from 'react'
import { AnimatedSearchInput } from '../../../registry/components/ui/animated-search-input'

export const AnimatedSearchInputShowcase = () => {
  const [value, setValue] = React.useState("");

  const placeholders = [
    "Search for anything...",
    "Try 'react components'",
    "Or maybe 'UI libraries'?",
    "How about 'animated inputs'?"
  ]

  return (
    <AnimatedSearchInput
      placeholders={placeholders}
      value={value}
      setValue={setValue}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}