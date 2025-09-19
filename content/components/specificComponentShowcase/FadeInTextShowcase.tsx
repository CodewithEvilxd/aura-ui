'use client'

import React from 'react'
import { FadeInText } from '../../../registry/components/ui/fade-in-text'

export const FadeInTextShowcase = () => {
  return (
    <div className="space-y-6">
      {/* Different Directions */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Fade Directions</h3>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <FadeInText text="Fade in from top" direction="up" delay={0} />
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <FadeInText text="Fade in from bottom" direction="down" delay={0.5} />
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <FadeInText text="Fade in from left" direction="left" delay={1} />
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <FadeInText text="Fade in from right" direction="right" delay={1.5} />
          </div>
        </div>
      </div>

      {/* Stagger Effect */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Stagger Animation</h3>
        <div className="p-4 bg-muted rounded-lg">
          <FadeInText
            text="Each letter appears individually!"
            stagger={true}
            delay={0}
            className="text-lg font-semibold"
          />
        </div>
      </div>

      {/* Different Durations */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Animation Durations</h3>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <FadeInText text="Fast fade (0.3s)" duration={0.3} delay={0} />
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <FadeInText text="Normal fade (0.6s)" duration={0.6} delay={0.5} />
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <FadeInText text="Slow fade (1.2s)" duration={1.2} delay={1} />
          </div>
        </div>
      </div>

      {/* Stylized Examples */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Stylized Examples</h3>
        <div className="space-y-6">
          <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <FadeInText
              text="🎉 Welcome Animation"
              direction="up"
              delay={0}
              duration={0.8}
              className="text-2xl font-bold text-blue-600"
            />
          </div>

          <div className="text-center p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg">
            <FadeInText
              text="✨ Smooth Entrance"
              direction="left"
              delay={0.5}
              duration={1}
              className="text-xl font-semibold text-green-600"
            />
          </div>

          <div className="text-center p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg">
            <FadeInText
              text="🌟 Dramatic Reveal"
              direction="down"
              delay={1}
              duration={1.5}
              className="text-lg font-medium text-pink-600"
            />
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Interactive Demo</h3>
        <div className="text-center p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
          <FadeInText
            text="Watch the smooth fade-in effect!"
            direction="up"
            delay={0}
            duration={0.8}
            className="text-lg font-semibold"
          />
          <p className="text-sm text-muted-foreground mt-4">
            Text smoothly fades in with customizable direction and timing
          </p>
        </div>
      </div>
    </div>
  )
}