'use client'

import React from 'react'
import { MorphingButton } from '../../../registry/components/ui/morphing-button'

export const MorphingButtonShowcase = () => {
  const [clickCount, setClickCount] = React.useState(0)

  return (
    <div className="space-y-8">
      {/* Different Morph Variants */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Morphing Button Variants</h3>
        <div className="flex flex-wrap gap-4">
          <MorphingButton variant="circle">
            Circle Morph
          </MorphingButton>

          <MorphingButton variant="square">
            Square Morph
          </MorphingButton>

          <MorphingButton variant="diamond">
            Diamond Morph
          </MorphingButton>

          <MorphingButton variant="star">
            Star Morph
          </MorphingButton>
        </div>
      </div>

      {/* Interactive Buttons */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Interactive Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <MorphingButton
            variant="circle"
            onClick={() => setClickCount(prev => prev + 1)}
          >
            Clicked {clickCount} times
          </MorphingButton>

          <MorphingButton
            variant="diamond"
            onClick={() => alert('Diamond button clicked!')}
          >
            Alert Button
          </MorphingButton>

          <MorphingButton
            variant="star"
            onClick={() => console.log('Star button clicked!')}
          >
            Console Log
          </MorphingButton>
        </div>
      </div>

      {/* Static Buttons (No Morph) */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Static Buttons (No Morph)</h3>
        <div className="flex flex-wrap gap-4">
          <MorphingButton variant="circle" morphOnHover={false}>
            No Morph Circle
          </MorphingButton>

          <MorphingButton variant="square" morphOnHover={false}>
            No Morph Square
          </MorphingButton>
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Different Content Types</h3>
        <div className="flex flex-wrap gap-4">
          <MorphingButton variant="circle">
            <span>🚀</span> Launch
          </MorphingButton>

          <MorphingButton variant="diamond">
            <span>💎</span> Premium
          </MorphingButton>

          <MorphingButton variant="star">
            <span>⭐</span> Favorite
          </MorphingButton>

          <MorphingButton variant="square">
            <div className="flex flex-col items-center">
              <span>📁</span>
              <span className="text-xs">Upload</span>
            </div>
          </MorphingButton>
        </div>
      </div>

      {/* Demo Instructions */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Interactive Demo</h3>
        <div className="text-center p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">
            Hover over the buttons to see them morph into different shapes!
          </p>
          <p className="text-xs text-muted-foreground">
            Each button transforms with smooth animations and particle effects
          </p>
        </div>
      </div>
    </div>
  )
}