'use client'

import React from 'react'
import { Textarea } from '../../../registry/components/ui/textarea'

export const TextareaShowcase = () => {
  const [value, setValue] = React.useState('')

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Enter your message here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p className="text-sm text-muted-foreground">
        Characters: {value.length}
      </p>
    </div>
  )
}