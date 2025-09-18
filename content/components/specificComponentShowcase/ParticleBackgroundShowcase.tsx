'use client'

import React from 'react'
import { ParticleBackground } from '../../../registry/components/ui/particle-background'

export const ParticleBackgroundShowcase = () => {
  return (
    <div className="space-y-8">
      {/* Different Particle Configurations */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Particle Configurations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ParticleBackground
            particleCount={30}
            particleSize="sm"
            particleColor="rgba(59, 130, 246, 0.6)"
            speed="slow"
            density="low"
            className="h-48 rounded-lg border"
          >
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Slow & Small</h4>
                <p className="text-sm text-muted-foreground">Gentle particle movement</p>
              </div>
            </div>
          </ParticleBackground>

          <ParticleBackground
            particleCount={80}
            particleSize="lg"
            particleColor="rgba(168, 85, 247, 0.7)"
            speed="fast"
            density="high"
            className="h-48 rounded-lg border"
          >
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Fast & Large</h4>
                <p className="text-sm text-muted-foreground">Dynamic particle field</p>
              </div>
            </div>
          </ParticleBackground>
        </div>
      </div>

      {/* Different Colors */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Color Variations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ParticleBackground
            particleColor="rgba(34, 197, 94, 0.6)"
            className="h-32 rounded-lg border"
          >
            <div className="flex items-center justify-center h-full">
              <span className="text-green-600 font-semibold">Green</span>
            </div>
          </ParticleBackground>

          <ParticleBackground
            particleColor="rgba(239, 68, 68, 0.6)"
            className="h-32 rounded-lg border"
          >
            <div className="flex items-center justify-center h-full">
              <span className="text-red-600 font-semibold">Red</span>
            </div>
          </ParticleBackground>

          <ParticleBackground
            particleColor="rgba(147, 51, 234, 0.6)"
            className="h-32 rounded-lg border"
          >
            <div className="flex items-center justify-center h-full">
              <span className="text-purple-600 font-semibold">Purple</span>
            </div>
          </ParticleBackground>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Interactive Particle Background</h3>
        <ParticleBackground
          particleCount={100}
          particleSize="md"
          particleColor="rgba(59, 130, 246, 0.5)"
          speed="normal"
          density="medium"
          className="h-64 rounded-lg border relative overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-2xl font-bold text-white mb-2">🎆 Particle Magic</h4>
              <p className="text-white/80 mb-4">
                Watch the particles dance and move around!
              </p>
              <div className="flex justify-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        </ParticleBackground>
      </div>

      {/* Performance Comparison */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Performance Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <ParticleBackground
              particleCount={20}
              density="low"
              className="h-24 rounded-lg border"
            >
              <span className="text-xs font-medium">Low (20 particles)</span>
            </ParticleBackground>
          </div>

          <div className="text-center">
            <ParticleBackground
              particleCount={50}
              density="medium"
              className="h-24 rounded-lg border"
            >
              <span className="text-xs font-medium">Medium (50 particles)</span>
            </ParticleBackground>
          </div>

          <div className="text-center">
            <ParticleBackground
              particleCount={100}
              density="high"
              className="h-24 rounded-lg border"
            >
              <span className="text-xs font-medium">High (100 particles)</span>
            </ParticleBackground>
          </div>
        </div>
      </div>
    </div>
  )
}