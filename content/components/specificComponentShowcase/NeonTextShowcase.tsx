'use client'

import React from 'react'
import { NeonText } from '../../../registry/components/ui/neon-text'

export const NeonTextShowcase = () => {
  return (
    <div className="space-y-6">
      {/* Different Colors */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Neon Colors</h3>
        <div className="space-y-4 p-6 bg-gray-900 rounded-lg">
          <NeonText text="Blue Neon Glow" color="blue" />
          <NeonText text="Green Neon Glow" color="green" />
          <NeonText text="Pink Neon Glow" color="pink" />
          <NeonText text="Purple Neon Glow" color="purple" />
          <NeonText text="Red Neon Glow" color="red" />
          <NeonText text="Yellow Neon Glow" color="yellow" />
        </div>
      </div>

      {/* Different Intensities */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Glow Intensities</h3>
        <div className="space-y-4 p-6 bg-gray-900 rounded-lg">
          <NeonText text="Low Intensity Glow" intensity="low" />
          <NeonText text="Medium Intensity Glow" intensity="medium" />
          <NeonText text="High Intensity Glow" intensity="high" />
        </div>
      </div>

      {/* Stylized Examples */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Stylized Examples</h3>
        <div className="space-y-6">
          <div className="text-center p-8 bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg">
            <NeonText
              text="NEON NIGHT"
              color="blue"
              intensity="high"
              className="text-4xl font-bold"
            />
          </div>

          <div className="text-center p-8 bg-gradient-to-r from-pink-900 to-red-900 rounded-lg">
            <NeonText
              text="RETRO STYLE"
              color="pink"
              intensity="medium"
              className="text-3xl font-bold"
            />
          </div>

          <div className="text-center p-8 bg-gradient-to-r from-green-900 to-teal-900 rounded-lg">
            <NeonText
              text="CYBERPUNK"
              color="green"
              intensity="high"
              className="text-2xl font-bold"
            />
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Interactive Demo</h3>
        <div className="text-center p-6 bg-gray-900 rounded-lg">
          <NeonText
            text="NEON MAGIC"
            color="purple"
            intensity="high"
            className="text-2xl font-bold"
          />
          <p className="text-sm text-gray-400 mt-4">
            Experience the glowing neon effect with animated flickers
          </p>
        </div>
      </div>
    </div>
  )
}