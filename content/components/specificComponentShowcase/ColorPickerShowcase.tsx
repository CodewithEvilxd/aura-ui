'use client'

import React from 'react'
import { ColorPicker } from '../../../registry/components/ui/color-picker'

export const ColorPickerShowcase = () => {
  const [color, setColor] = React.useState('#3b82f6')

  return (
    <div className="space-y-4">
      <ColorPicker
        value={color}
        onChange={setColor}
      />
      <p className="text-sm text-muted-foreground">
        Selected color: <span style={{ color }}>{color}</span>
      </p>
    </div>
  )
}