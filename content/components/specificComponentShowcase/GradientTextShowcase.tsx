'use client'

import React from 'react'
import { GradientText } from '../../../registry/components/ui/gradient-text'

export const GradientTextShowcase = () => {
  return (
    <div className="space-y-6">
      {/* Different Directions */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Gradient Directions</h3>
        <div className="space-y-4">
          <GradientText
            text="Horizontal Gradient Flow"
            direction="horizontal"
            className="text-lg font-semibold"
          />
          <GradientText
            text="Vertical Gradient Flow"
            direction="vertical"
            className="text-lg font-semibold"
          />
          <GradientText
            text="Diagonal Gradient Flow"
            direction="diagonal"
            className="text-lg font-semibold"
          />
        </div>
      </div>

      {/* Different Speeds */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Animation Speeds</h3>
        <div className="space-y-4">
          <GradientText text="Slow Gradient Shift" speed="slow" />
          <GradientText text="Normal Gradient Speed" speed="normal" />
          <GradientText text="Fast Gradient Shift" speed="fast" />
        </div>
      </div>

      {/* Custom Colors */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Custom Color Schemes</h3>
        <div className="space-y-4">
          <GradientText
            text="Ocean Blues"
            colors={["#1e3a8a", "#3b82f6", "#06b6d4", "#1e3a8a"]}
            className="text-lg font-semibold"
          />
          <GradientText
            text="Sunset Warmth"
            colors={["#dc2626", "#ea580c", "#d97706", "#f59e0b"]}
            className="text-lg font-semibold"
          />
          <GradientText
            text="Forest Greens"
            colors={["#166534", "#16a34a", "#65a30d", "#166534"]}
            className="text-lg font-semibold"
          />
        </div>
      </div>

      {/* Stylized Examples */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Stylized Examples</h3>
        <div className="space-y-6">
          <div className="text-center">
            <GradientText
              text="🌈 SPECTACULAR"
              colors={["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57"]}
              speed="normal"
              className="text-4xl font-bold"
            />
          </div>

          <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
            <GradientText
              text="✨ Dynamic Colors"
              colors={["#8b5cf6", "#ec4899", "#f97316", "#eab308"]}
              speed="fast"
              className="text-2xl font-semibold"
            />
          </div>

          <div className="text-center">
            <GradientText
              text="🎨 Artistic Flow"
              colors={["#06b6d4", "#8b5cf6", "#ec4899", "#06b6d4"]}
              direction="diagonal"
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
          <GradientText
            text="Watch the colors shift!"
            colors={["#3b82f6", "#8b5cf6", "#ec4899", "#f97316", "#eab308"]}
            speed="normal"
            className="text-lg font-semibold"
          />
          <p className="text-sm text-muted-foreground mt-4">
            The gradient continuously flows through different colors
          </p>
        </div>
      </div>
    </div>
  )
}