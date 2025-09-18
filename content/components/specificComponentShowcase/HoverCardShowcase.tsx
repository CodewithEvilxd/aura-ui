'use client'

import React from 'react'
import { HoverCard } from '../../../registry/components/ui/hover-card'
import { Button } from '../../../registry/components/ui/button'

export const HoverCardShowcase = () => {
  return (
    <div className="space-y-4">
      <HoverCard
        hoverContent={
          <div className="p-4">
            <h4 className="font-semibold mb-2">Card Title</h4>
            <p className="text-sm text-muted-foreground mb-2">
              This is additional information that appears when you hover over the card.
            </p>
            <Button size="small">Action</Button>
          </div>
        }
      >
        <Button variant="outline">Hover me!</Button>
      </HoverCard>

      <HoverCard
        hoverContent={
          <div className="p-4">
            <h4 className="font-semibold mb-2">User Profile</h4>
            <p className="text-sm text-muted-foreground">
              John Doe<br />
              Software Developer<br />
              Last active: 2 hours ago
            </p>
          </div>
        }
      >
        <div className="p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
          <h3 className="font-medium">John Doe</h3>
          <p className="text-sm text-muted-foreground">Click to view profile</p>
        </div>
      </HoverCard>
    </div>
  )
}