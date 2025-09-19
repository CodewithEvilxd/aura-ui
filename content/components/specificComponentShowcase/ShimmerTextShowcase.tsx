'use client'

import React from 'react'
import { ShimmerText } from '../../../registry/components/ui/shimmer-text'

export const ShimmerTextShowcase = () => {
  return (
    <div className="space-y-6">
      {/* Different Speeds */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Animation Speeds</h3>
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg">
            <ShimmerText text="Slow Shimmer Effect" speed="slow" />
          </div>
          <div className="p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg">
            <ShimmerText text="Normal Shimmer Speed" speed="normal" />
          </div>
          <div className="p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg">
            <ShimmerText text="Fast Shimmer Effect" speed="fast" />
          </div>
        </div>
      </div>

      {/* Different Text Styles */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Different Text Styles</h3>
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg">
            <ShimmerText
              text="Bold Shimmer Text"
              className="font-bold text-lg"
            />
          </div>
          <div className="p-4 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg">
            <ShimmerText
              text="Italic Shimmer Text"
              className="italic text-lg"
            />
          </div>
          <div className="p-4 bg-gradient-to-r from-green-100 to-green-200 rounded-lg">
            <ShimmerText
              text="Large Shimmer Text"
              className="text-2xl font-bold"
            />
          </div>
        </div>
      </div>

      {/* Stylized Examples */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Stylized Examples</h3>
        <div className="space-y-6">
          <div className="text-center p-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg">
            <ShimmerText
              text="✨ Premium Content"
              speed="normal"
              className="text-2xl font-bold"
            />
          </div>

          <div className="text-center p-6 bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg">
            <ShimmerText
              text="💎 Diamond Quality"
              speed="fast"
              className="text-xl font-semibold"
            />
          </div>

          <div className="text-center p-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg">
            <ShimmerText
              text="🏆 Award Winning"
              speed="slow"
              className="text-lg font-medium"
            />
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Interactive Demo</h3>
        <div className="text-center p-6 bg-gradient-to-r from-slate-100 to-gray-100 rounded-lg">
          <ShimmerText
            text="Watch the shimmer effect!"
            speed="normal"
            className="text-lg font-semibold"
          />
          <p className="text-sm text-muted-foreground mt-4">
            The light sweeps across the text creating a metallic shimmer effect
          </p>
        </div>
      </div>
    </div>
  )
}