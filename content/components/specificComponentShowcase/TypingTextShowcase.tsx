'use client'

import React from 'react'
import { TypingText } from '../../../registry/components/ui/typing-text'

export const TypingTextShowcase = () => {
  return (
    <div className="space-y-6">
      {/* Multiple Texts */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Multiple Texts Cycle</h3>
        <div className="p-4 bg-muted rounded-lg">
          <TypingText
            texts={[
              "Hello World!",
              "Welcome to the future!",
              "Amazing animations!",
              "Typewriter effect!"
            ]}
            speed={100}
            delay={1500}
          />
        </div>
      </div>

      {/* Different Speeds */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Typing Speeds</h3>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <TypingText
              texts={["Slow typing speed..."]}
              speed={200}
            />
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <TypingText
              texts={["Normal typing speed!"]}
              speed={100}
            />
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <TypingText
              texts={["Fast typing speed!!!"]}
              speed={50}
            />
          </div>
        </div>
      </div>

      {/* Different Delays */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Pause Delays</h3>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <TypingText
              texts={["Short pause", "between texts"]}
              delay={500}
              speed={100}
            />
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <TypingText
              texts={["Long pause", "between texts"]}
              delay={2000}
              speed={100}
            />
          </div>
        </div>
      </div>

      {/* Without Cursor */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Without Cursor</h3>
        <div className="p-4 bg-muted rounded-lg">
          <TypingText
            texts={["No blinking cursor here!"]}
            cursor={false}
            speed={100}
          />
        </div>
      </div>

      {/* Stylized Examples */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Stylized Examples</h3>
        <div className="space-y-6">
          <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <TypingText
              texts={["💻 Developer", "🎨 Designer", "🚀 Creator"]}
              speed={80}
              delay={1000}
              className="text-xl font-bold text-blue-600"
            />
          </div>

          <div className="text-center p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg">
            <TypingText
              texts={["🌟 Innovation", "💡 Creativity", "🎯 Excellence"]}
              speed={100}
              delay={800}
              className="text-lg font-semibold text-green-600"
            />
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Interactive Demo</h3>
        <div className="text-center p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
          <TypingText
            texts={["Watch the magic happen!", "Letter by letter...", "Amazing typewriter effect!"]}
            speed={100}
            delay={1500}
            className="text-lg font-semibold"
          />
          <p className="text-sm text-muted-foreground mt-4">
            Text appears character by character with realistic typing animation
          </p>
        </div>
      </div>
    </div>
  )
}