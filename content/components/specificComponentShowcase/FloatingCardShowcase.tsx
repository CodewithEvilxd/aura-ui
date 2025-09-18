'use client'

import React from 'react'
import { FloatingCard } from '../../../registry/components/ui/floating-card'

export const FloatingCardShowcase = () => {
  return (
    <div className="space-y-8">
      {/* Different Intensity Levels */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Floating Card Intensity Levels</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center space-y-2">
            <FloatingCard intensity="low">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-2">Low Intensity</h4>
                <p className="text-sm text-white/80">Subtle floating effect</p>
              </div>
            </FloatingCard>
            <span className="text-xs text-muted-foreground">Low</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <FloatingCard intensity="medium">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-2">Medium Intensity</h4>
                <p className="text-sm text-white/80">Balanced 3D effect</p>
              </div>
            </FloatingCard>
            <span className="text-xs text-muted-foreground">Medium</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <FloatingCard intensity="high">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-2">High Intensity</h4>
                <p className="text-sm text-white/80">Dramatic 3D effect</p>
              </div>
            </FloatingCard>
            <span className="text-xs text-muted-foreground">High</span>
          </div>
        </div>
      </div>

      {/* Different Content Types */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Different Content Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FloatingCard>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Project Launch</h4>
              <p className="text-sm text-white/80">Exciting new features coming soon</p>
            </div>
          </FloatingCard>

          <FloatingCard>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Analytics</h4>
              <p className="text-sm text-white/80">Track your performance metrics</p>
            </div>
          </FloatingCard>

          <FloatingCard>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Design System</h4>
              <p className="text-sm text-white/80">Beautiful and consistent UI</p>
            </div>
          </FloatingCard>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Interactive Demo</h3>
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Move your mouse over the cards to see the 3D floating effect!
          </p>
          <FloatingCard intensity="high">
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-2">🎯 Interactive 3D Card</h4>
              <p className="text-sm text-white/90 mb-4">
                This card responds to your mouse movement with smooth 3D transformations
              </p>
              <div className="flex justify-center space-x-2">
                <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </FloatingCard>
        </div>
      </div>
    </div>
  )
}