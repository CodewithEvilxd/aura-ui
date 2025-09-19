'use client'

import React from 'react'
import { GlitchText } from '../../../registry/components/ui/glitch-text'

export const GlitchTextShowcase = () => {
  return (
    <div className="space-y-6">
      {/* Different Intensities */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Glitch Intensities</h3>
        <div className="space-y-4">
          <div className="p-4 bg-black rounded-lg">
            <GlitchText text="Low Intensity Glitch" intensity="low" />
          </div>
          <div className="p-4 bg-black rounded-lg">
            <GlitchText text="Medium Intensity Glitch" intensity="medium" />
          </div>
          <div className="p-4 bg-black rounded-lg">
            <GlitchText text="High Intensity Glitch" intensity="high" />
          </div>
        </div>
      </div>

      {/* Different Speeds */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Animation Speeds</h3>
        <div className="space-y-4">
          <div className="p-4 bg-black rounded-lg">
            <GlitchText text="Slow Glitch Effect" speed="slow" />
          </div>
          <div className="p-4 bg-black rounded-lg">
            <GlitchText text="Normal Speed Glitch" speed="normal" />
          </div>
          <div className="p-4 bg-black rounded-lg">
            <GlitchText text="Fast Glitch Effect" speed="fast" />
          </div>
        </div>
      </div>

      {/* Stylized Examples */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Stylized Examples</h3>
        <div className="space-y-4">
          <div className="p-6 bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg">
            <GlitchText
              text="ERROR 404"
              intensity="high"
              speed="fast"
              className="text-2xl font-bold"
            />
          </div>
          <div className="p-6 bg-gradient-to-r from-red-900 to-orange-900 rounded-lg">
            <GlitchText
              text="SYSTEM FAILURE"
              intensity="medium"
              speed="normal"
              className="text-xl font-bold"
            />
          </div>
          <div className="p-6 bg-gradient-to-r from-green-900 to-teal-900 rounded-lg">
            <GlitchText
              text="ACCESS GRANTED"
              intensity="low"
              speed="slow"
              className="text-lg font-bold"
            />
          </div>
        </div>
      </div>
    </div>
  )
}