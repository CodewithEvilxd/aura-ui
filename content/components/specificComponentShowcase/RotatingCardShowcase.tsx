'use client'

import React from 'react'
import { RotatingCard } from '../../../registry/components/ui/rotating-card'

export const RotatingCardShowcase = () => {
  return (
    <div className="space-y-8">
      {/* Basic Rotating Cards */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Basic Rotating Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex justify-center">
            <RotatingCard
              frontContent={
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <h4 className="font-semibold">Front</h4>
                  <p className="text-sm opacity-80">Move mouse to rotate</p>
                </div>
              }
            />
          </div>

          <div className="flex justify-center">
            <RotatingCard
              size="md"
              frontContent={
                <div className="text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <h4 className="font-semibold">Project</h4>
                  <p className="text-sm opacity-80">Interactive 3D</p>
                </div>
              }
              backContent={
                <div className="text-center">
                  <div className="text-3xl mb-2">💻</div>
                  <h4 className="font-semibold">Details</h4>
                  <p className="text-sm opacity-80">Back side content</p>
                </div>
              }
            />
          </div>

          <div className="flex justify-center">
            <RotatingCard
              size="lg"
              autoRotate={false}
              frontContent={
                <div className="text-center">
                  <div className="text-3xl mb-2">🎨</div>
                  <h4 className="font-semibold">Static</h4>
                  <p className="text-sm opacity-80">No auto-rotation</p>
                </div>
              }
            />
          </div>
        </div>
      </div>

      {/* Multi-face Cards */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Multi-face Rotating Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center">
            <RotatingCard
              size="lg"
              rotateSpeed="slow"
              frontContent={
                <div className="text-center">
                  <div className="text-4xl mb-2">🌟</div>
                  <h4 className="font-semibold">Front Face</h4>
                </div>
              }
              backContent={
                <div className="text-center">
                  <div className="text-4xl mb-2">🔥</div>
                  <h4 className="font-semibold">Back Face</h4>
                </div>
              }
              leftContent={
                <div className="text-center">
                  <div className="text-4xl mb-2">💎</div>
                  <h4 className="font-semibold">Left Face</h4>
                </div>
              }
              rightContent={
                <div className="text-center">
                  <div className="text-4xl mb-2">⚡</div>
                  <h4 className="font-semibold">Right Face</h4>
                </div>
              }
              topContent={
                <div className="text-center">
                  <div className="text-4xl mb-2">🎯</div>
                  <h4 className="font-semibold">Top Face</h4>
                </div>
              }
              bottomContent={
                <div className="text-center">
                  <div className="text-4xl mb-2">🎪</div>
                  <h4 className="font-semibold">Bottom Face</h4>
                </div>
              }
            />
          </div>

          <div className="flex justify-center">
            <RotatingCard
              size="md"
              rotateSpeed="fast"
              frontContent={
                <div className="text-center">
                  <div className="text-3xl mb-2">🎮</div>
                  <h4 className="font-semibold">Game</h4>
                  <p className="text-sm opacity-80">Fast rotation</p>
                </div>
              }
              backContent={
                <div className="text-center">
                  <div className="text-3xl mb-2">🏆</div>
                  <h4 className="font-semibold">Score</h4>
                  <p className="text-sm opacity-80">High score: 9999</p>
                </div>
              }
            />
          </div>
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Different Sizes</h3>
        <div className="flex justify-center items-end space-x-6">
          <div className="flex flex-col items-center space-y-2">
            <RotatingCard
              size="sm"
              frontContent={
                <div className="text-center text-xs">
                  <div className="text-lg mb-1">📱</div>
                  <span>SM</span>
                </div>
              }
            />
            <span className="text-xs text-muted-foreground">Small</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <RotatingCard
              size="sm"
              frontContent={
                <div className="text-center text-sm">
                  <div className="text-xl mb-1">💻</div>
                  <span>SM</span>
                </div>
              }
            />
            <span className="text-xs text-muted-foreground">Small</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <RotatingCard
              size="md"
              frontContent={
                <div className="text-center">
                  <div className="text-2xl mb-1">🖥️</div>
                  <span>MD</span>
                </div>
              }
            />
            <span className="text-xs text-muted-foreground">Medium</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <RotatingCard
              size="lg"
              frontContent={
                <div className="text-center">
                  <div className="text-3xl mb-1">🎯</div>
                  <span>LG</span>
                </div>
              }
            />
            <span className="text-xs text-muted-foreground">Large</span>
          </div>
        </div>
      </div>

      {/* Speed Variations */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Rotation Speeds</h3>
        <div className="flex justify-center space-x-6">
          <div className="flex flex-col items-center space-y-2">
            <RotatingCard
              rotateSpeed="slow"
              frontContent={
                <div className="text-center">
                  <div className="text-2xl mb-1">🐌</div>
                  <span className="text-sm">Slow</span>
                </div>
              }
            />
            <span className="text-xs text-muted-foreground">Slow Rotation</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <RotatingCard
              rotateSpeed="normal"
              frontContent={
                <div className="text-center">
                  <div className="text-2xl mb-1">⚡</div>
                  <span className="text-sm">Normal</span>
                </div>
              }
            />
            <span className="text-xs text-muted-foreground">Normal Speed</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <RotatingCard
              rotateSpeed="fast"
              frontContent={
                <div className="text-center">
                  <div className="text-2xl mb-1">🚀</div>
                  <span className="text-sm">Fast</span>
                </div>
              }
            />
            <span className="text-xs text-muted-foreground">Fast Rotation</span>
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Interactive 3D Demo</h3>
        <div className="text-center p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
          <p className="text-sm text-muted-foreground mb-4">
            Move your mouse over the cards to control their 3D rotation!
          </p>
          <div className="flex justify-center">
            <RotatingCard
              size="lg"
              autoRotate={false}
              frontContent={
                <div className="text-center">
                  <div className="text-4xl mb-2">🎪</div>
                  <h4 className="text-lg font-bold">3D Magic</h4>
                  <p className="text-sm opacity-90">Interactive rotation</p>
                  <div className="flex justify-center space-x-1 mt-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}