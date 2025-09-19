'use client'

import React from 'react'
import { TypewriterText } from '../../../registry/components/ui/typewriter-text'

export const TypewriterTextShowcase = () => {
  return (
    <div className="space-y-6">
      {/* Basic Typewriter */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Basic Typewriter</h3>
        <div className="p-4 bg-muted rounded-lg">
          <TypewriterText
            text="Hello, this is a typewriter effect!"
            speed={100}
          />
        </div>
      </div>

      {/* Slow Speed */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Slow Speed</h3>
        <div className="p-4 bg-muted rounded-lg">
          <TypewriterText
            text="This types slowly for dramatic effect..."
            speed={200}
          />
        </div>
      </div>

      {/* Fast Speed */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Fast Speed</h3>
        <div className="p-4 bg-muted rounded-lg">
          <TypewriterText
            text="This types very quickly!"
            speed={50}
          />
        </div>
      </div>

      {/* With Delay */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Delay</h3>
        <div className="p-4 bg-muted rounded-lg">
          <TypewriterText
            text="This starts after a 2 second delay..."
            delay={2000}
            speed={100}
          />
        </div>
      </div>

      {/* Without Cursor */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Without Cursor</h3>
        <div className="p-4 bg-muted rounded-lg">
          <TypewriterText
            text="No blinking cursor here!"
            cursor={false}
          />
        </div>
      </div>
    </div>
  )
}