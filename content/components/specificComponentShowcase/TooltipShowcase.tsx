'use client'

import React from 'react'
import { Tooltip } from '../../../registry/components/ui/tooltip'
import { Button } from '../../../registry/components/ui/button'

export const TooltipShowcase = () => {
  return (
    <div className="space-x-4">
      <Tooltip content="This is a tooltip on top" position="top">
        <Button variant="outline">Top</Button>
      </Tooltip>

      <Tooltip content="This is a tooltip on bottom" position="bottom">
        <Button variant="outline">Bottom</Button>
      </Tooltip>

      <Tooltip content="This is a tooltip on left" position="left">
        <Button variant="outline">Left</Button>
      </Tooltip>

      <Tooltip content="This is a tooltip on right" position="right">
        <Button variant="outline">Right</Button>
      </Tooltip>
    </div>
  )
}