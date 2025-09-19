'use client'

import React from 'react'
import { RainbowText } from '../../../registry/components/ui/rainbow-text'

export const RainbowTextShowcase = () => {
  return (
    <div className="space-y-6">
      {/* Different Speeds */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Animation Speeds</h3>
        <div className="space-y-4">
          <RainbowText text="Slow Rainbow Animation" speed="slow" />
          <RainbowText text="Normal Rainbow Speed" speed="normal" />
          <RainbowText text="Fast Rainbow Animation" speed="fast" />
        </div>
      </div>

      {/* Different Text Sizes */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Different Text Sizes</h3>
        <div className="space-y-4">
          <RainbowText text="Small Rainbow Text" className="text-sm" />
          <RainbowText text="Medium Rainbow Text" className="text-lg" />
          <RainbowText text="Large Rainbow Text" className="text-2xl font-bold" />
          <RainbowText text="Extra Large Rainbow Text" className="text-4xl font-bold" />
        </div>
      </div>

      {/* Stylized Examples */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Stylized Examples</h3>
        <div className="space-y-6">
          <div className="text-center">
            <RainbowText
              text="🌈 Beautiful Rainbow"
              speed="normal"
              className="text-3xl font-bold"
            />
          </div>

          <div className="text-center p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
            <RainbowText
              text="✨ Magical Colors"
              speed="fast"
              className="text-2xl font-semibold"
            />
          </div>

          <div className="text-center">
            <RainbowText
              text="🎨 Creative Design"
              speed="slow"
              className="text-xl font-medium"
            />
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Interactive Demo</h3>
        <div className="text-center p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
          <RainbowText
            text="Hover to see the rainbow effect!"
            speed="normal"
            className="text-lg font-semibold"
          />
          <p className="text-sm text-muted-foreground mt-4">
            The colors continuously shift through the spectrum
          </p>
        </div>
      </div>
    </div>
  )
}