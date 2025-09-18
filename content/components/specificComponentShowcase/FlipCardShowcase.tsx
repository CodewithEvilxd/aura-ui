'use client'

import React from 'react'
import { FlipCard } from '../../../registry/components/ui/flip-card'

export const FlipCardShowcase = () => {
  return (
    <div className="space-y-8">
      {/* Basic Flip Cards */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Basic Flip Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FlipCard
            frontContent={
              <div className="text-center">
                <div className="text-4xl mb-2">🎯</div>
                <h4 className="font-semibold">Front Side</h4>
                <p className="text-sm opacity-80">Hover to flip!</p>
              </div>
            }
            backContent={
              <div className="text-center">
                <div className="text-4xl mb-2">✨</div>
                <h4 className="font-semibold">Back Side</h4>
                <p className="text-sm opacity-80">Amazing flip effect!</p>
              </div>
            }
          />

          <FlipCard
            frontContent={
              <div className="text-center">
                <div className="text-4xl mb-2">🚀</div>
                <h4 className="font-semibold">Project</h4>
                <p className="text-sm opacity-80">Click to reveal</p>
              </div>
            }
            backContent={
              <div className="text-center">
                <div className="text-4xl mb-2">💻</div>
                <h4 className="font-semibold">Details</h4>
                <p className="text-sm opacity-80">More information here</p>
              </div>
            }
            flipOnClick={true}
            flipOnHover={false}
          />

          <FlipCard
            frontContent={
              <div className="text-center">
                <div className="text-4xl mb-2">🎨</div>
                <h4 className="font-semibold">Design</h4>
                <p className="text-sm opacity-80">Auto flip demo</p>
              </div>
            }
            backContent={
              <div className="text-center">
                <div className="text-4xl mb-2">🎭</div>
                <h4 className="font-semibold">Creative</h4>
                <p className="text-sm opacity-80">Auto-flipping card</p>
              </div>
            }
            autoFlip={true}
            autoFlipDelay={3000}
          />
        </div>
      </div>

      {/* Vertical Flip */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Vertical Flip Direction</h3>
        <div className="flex justify-center">
          <FlipCard
            flipDirection="vertical"
            frontContent={
              <div className="text-center">
                <div className="text-4xl mb-2">⬆️</div>
                <h4 className="font-semibold">Top Side</h4>
                <p className="text-sm opacity-80">Vertical flip!</p>
              </div>
            }
            backContent={
              <div className="text-center">
                <div className="text-4xl mb-2">⬇️</div>
                <h4 className="font-semibold">Bottom Side</h4>
                <p className="text-sm opacity-80">Flipped vertically</p>
              </div>
            }
          />
        </div>
      </div>

      {/* Complex Content */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Complex Content</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FlipCard
            frontContent={
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <h4 className="font-semibold mb-2">User Profile</h4>
                <p className="text-sm opacity-80">John Doe</p>
                <p className="text-xs opacity-60">Software Developer</p>
              </div>
            }
            backContent={
              <div className="text-center">
                <h4 className="font-semibold mb-3">Contact Info</h4>
                <div className="space-y-2 text-sm">
                  <p>📧 john@example.com</p>
                  <p>📱 +1 (555) 123-4567</p>
                  <p>🏢 Tech Company Inc.</p>
                </div>
                <button className="mt-3 px-4 py-2 bg-white/20 rounded text-sm hover:bg-white/30 transition-colors">
                  View Full Profile
                </button>
              </div>
            }
          />

          <FlipCard
            frontContent={
              <div className="text-center">
                <div className="text-4xl mb-2">📊</div>
                <h4 className="font-semibold mb-2">Analytics</h4>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Users</span>
                    <span>1,234</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            }
            backContent={
              <div className="text-center">
                <h4 className="font-semibold mb-3">Detailed Stats</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium">1,234</p>
                    <p className="text-xs opacity-80">Total Users</p>
                  </div>
                  <div>
                    <p className="font-medium">89%</p>
                    <p className="text-xs opacity-80">Active Rate</p>
                  </div>
                  <div>
                    <p className="font-medium">45</p>
                    <p className="text-xs opacity-80">New Today</p>
                  </div>
                  <div>
                    <p className="font-medium">12</p>
                    <p className="text-xs opacity-80">Countries</p>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Interactive Demo</h3>
        <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
          <p className="text-sm text-muted-foreground mb-4">
            Try different interaction methods:
          </p>
          <div className="flex justify-center space-x-4">
            <FlipCard
              frontContent={<div className="p-4 text-center font-semibold">Hover Me!</div>}
              backContent={<div className="p-4 text-center font-semibold">🎉 Flipped!</div>}
            />
            <FlipCard
              flipOnClick={true}
              flipOnHover={false}
              frontContent={<div className="p-4 text-center font-semibold">Click Me!</div>}
              backContent={<div className="p-4 text-center font-semibold">👆 Clicked!</div>}
            />
            <FlipCard
              autoFlip={true}
              autoFlipDelay={2000}
              frontContent={<div className="p-4 text-center font-semibold">Auto Flip</div>}
              backContent={<div className="p-4 text-center font-semibold">⏰ Auto!</div>}
            />
          </div>
        </div>
      </div>
    </div>
  )
}