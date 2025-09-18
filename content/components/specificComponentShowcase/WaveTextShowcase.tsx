'use client'

import React from 'react'
import { WaveText } from '../../../registry/components/ui/wave-text'

export const WaveTextShowcase = () => {
  return (
    <div className="space-y-8">
      {/* Different Wave Types */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Wave Animation Types</h3>
        <div className="space-y-6">
          <div>
            <p className="text-xs text-muted-foreground mb-2">Sine Wave (Vertical)</p>
            <WaveText
              text="Hello World! This is a sine wave animation"
              waveType="sine"
              amplitude="medium"
              speed="normal"
            />
          </div>

          <div>
            <p className="text-xs text-muted-foreground mb-2">Bounce Wave (Vertical)</p>
            <WaveText
              text="Bounce animation with smooth transitions"
              waveType="bounce"
              amplitude="high"
              speed="fast"
            />
          </div>

          <div>
            <p className="text-xs text-muted-foreground mb-2">Horizontal Wave</p>
            <WaveText
              text="Horizontal wave movement effect"
              direction="horizontal"
              amplitude="low"
              speed="slow"
            />
          </div>
        </div>
      </div>

      {/* Different Speeds */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Animation Speeds</h3>
        <div className="space-y-4">
          <WaveText
            text="Slow Animation Speed"
            speed="slow"
            className="text-lg font-semibold"
          />
          <WaveText
            text="Normal Animation Speed"
            speed="normal"
            className="text-lg font-semibold"
          />
          <WaveText
            text="Fast Animation Speed"
            speed="fast"
            className="text-lg font-semibold"
          />
        </div>
      </div>

      {/* Different Amplitudes */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Wave Amplitudes</h3>
        <div className="space-y-4">
          <WaveText
            text="Low Amplitude Wave"
            amplitude="low"
            className="text-green-600"
          />
          <WaveText
            text="Medium Amplitude Wave"
            amplitude="medium"
            className="text-blue-600"
          />
          <WaveText
            text="High Amplitude Wave"
            amplitude="high"
            className="text-purple-600"
          />
        </div>
      </div>

      {/* Stylized Examples */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Stylized Examples</h3>
        <div className="space-y-6">
          <WaveText
            text="🎉 Welcome to the Future! 🎉"
            waveType="bounce"
            speed="fast"
            amplitude="high"
            className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
          />

          <WaveText
            text="✨ Magical Text Animation ✨"
            waveType="sine"
            speed="normal"
            amplitude="medium"
            className="text-xl font-semibold text-indigo-600"
          />

          <WaveText
            text="🌊 Ocean Wave Effect 🌊"
            direction="horizontal"
            waveType="bounce"
            speed="slow"
            amplitude="low"
            className="text-cyan-600 font-medium"
          />
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Interactive Demo</h3>
        <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
          <WaveText
            text="Hover over letters to see the wave effect!"
            waveType="sine"
            speed="normal"
            amplitude="medium"
            className="text-lg font-semibold text-gray-800"
          />
          <p className="text-sm text-muted-foreground mt-4">
            Each letter animates individually with smooth wave motion
          </p>
        </div>
      </div>
    </div>
  )
}