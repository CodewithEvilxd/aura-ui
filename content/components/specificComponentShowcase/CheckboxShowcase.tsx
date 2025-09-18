'use client'

import React from 'react'
import { Checkbox } from '../../../registry/components/ui/checkbox'

export const CheckboxShowcase = () => {
  const [checked, setChecked] = React.useState(false)
  const [checked2, setChecked2] = React.useState(true)

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox
          checked={checked}
          onCheckedChange={setChecked}
        />
        <label className="text-sm">Accept terms and conditions</label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          checked={checked2}
          onCheckedChange={setChecked2}
        />
        <label className="text-sm">Subscribe to newsletter</label>
      </div>
    </div>
  )
}