'use client'

import React from 'react'
import { LiquidText } from '../../../registry/components/ui/liquid-text'

export const LiquidTextShowcase = () => {
  return (
    <div className="space-y-6">
      {/* Different Intensities */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Liquid Intensities</h3>
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <LiquidText text="Low Intensity Flow" intensity="low" />
          </div>
          <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <LiquidText text="Medium Intensity Flow" intensity="medium" />
          </div>
          <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <LiquidText text="High Intensity Flow" intensity="high" />
          </div>
        </div>
      </div>

      {/* Different Speeds */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Animation Speeds</h3>
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg">
            <LiquidText text="Slow Liquid Motion" speed="slow" />
          </div>
          <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg">
            <LiquidText text="Normal Liquid Speed" speed="normal" />
          </div>
          <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg">
            <LiquidText text="Fast Liquid Motion" speed="fast" />
          </div>
        </div>
      </div>

      {/* Different Text Styles */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Different Text Styles</h3>
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg">
            <LiquidText
              text="Bold Liquid Text"
              className="font-bold text-lg"
            />
          </div>
          <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg">
            <LiquidText
              text="Large Liquid Text"
              className="text-2xl font-bold"
            />
          </div>
        </div>
      </div>

      {/* Stylized Examples */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Stylized Examples</h3>
        <div className="space-y-6">
          <div className="text-center p-8 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg">
            <LiquidText
              text="🌊 Liquid Motion"
              intensity="high"
              speed="normal"
              className="text-3xl font-bold text-cyan-600"
            />
          </div>

          <div className="text-center p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
            <LiquidText
              text="💧 Fluid Animation"
              intensity="medium"
              speed="fast"
              className="text-2xl font-semibold text-purple-600"
            />
          </div>

          <div className="text-center p-8 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg">
            <LiquidText
              text="🏄 Wave Effect"
              intensity="low"
              speed="slow"
              className="text-xl font-medium text-green-600"
            />
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Interactive Demo</h3>
        <div className="text-center p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
          <LiquidText
            text="Feel the liquid flow!"
            intensity="medium"
            speed="normal"
            className="text-lg font-semibold"
          />
          <p className="text-sm text-muted-foreground mt-4">
            Letters flow and ripple like liquid with organic motion
          </p>
        </div>
      </div>
    </div>
  )
}