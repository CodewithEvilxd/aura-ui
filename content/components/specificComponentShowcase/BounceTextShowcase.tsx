'use client'

import React from 'react'
import { BounceText } from '../../../registry/components/ui/bounce-text'

export const BounceTextShowcase = () => {
  return (
    <div className="space-y-6">
      {/* Different Speeds */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Animation Speeds</h3>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <BounceText text="Slow Bounce Animation" speed="slow" />
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <BounceText text="Normal Bounce Speed" speed="normal" />
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <BounceText text="Fast Bounce Animation" speed="fast" />
          </div>
        </div>
      </div>

      {/* Different Text Sizes */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Different Text Sizes</h3>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <BounceText text="Small Bounce Text" className="text-sm" />
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <BounceText text="Medium Bounce Text" className="text-lg" />
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <BounceText text="Large Bounce Text" className="text-2xl font-bold" />
          </div>
        </div>
      </div>

      {/* Stylized Examples */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Stylized Examples</h3>
        <div className="space-y-6">
          <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <BounceText
              text="🎈 Bouncy Fun!"
              speed="normal"
              className="text-2xl font-bold text-blue-600"
            />
          </div>

          <div className="text-center p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg">
            <BounceText
              text="⚽ Playful Bounce"
              speed="fast"
              className="text-xl font-semibold text-green-600"
            />
          </div>

          <div className="text-center p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg">
            <BounceText
              text="🌸 Gentle Bounce"
              speed="slow"
              className="text-lg font-medium text-pink-600"
            />
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Interactive Demo</h3>
        <div className="text-center p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
          <BounceText
            text="Watch each letter bounce!"
            speed="normal"
            className="text-lg font-semibold"
          />
          <p className="text-sm text-muted-foreground mt-4">
            Each letter bounces individually with a playful spring animation
          </p>
        </div>
      </div>
    </div>
  )
}