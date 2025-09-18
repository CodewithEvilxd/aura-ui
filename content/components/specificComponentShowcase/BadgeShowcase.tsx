'use client'

import React, { useState } from 'react'
import { Badge } from '../../../registry/components/ui/badge'

export const BadgeShowcase = () => {
  const [clickCount, setClickCount] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState('default')
  const [dismissedBadges, setDismissedBadges] = useState<Set<string>>(new Set())

  return (
    <div className="space-y-6">
      {/* Basic Variants */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Basic Variants</h3>
        <div className="space-x-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>

      {/* New Variants */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">New Variants</h3>
        <div className="space-x-2">
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Sizes</h3>
        <div className="space-x-2">
          <Badge size="sm">Small</Badge>
          <Badge size="default">Default</Badge>
          <Badge size="lg">Large</Badge>
        </div>
      </div>

      {/* Interactive Badges */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Interactive Badges</h3>
        <div className="space-x-2">
          <Badge
            onClick={() => setClickCount(prev => prev + 1)}
            className="hover:scale-105"
          >
            Clicked {clickCount} times
          </Badge>
          <Badge
            variant="secondary"
            onClick={() => setSelectedVariant(selectedVariant === 'default' ? 'secondary' : 'default')}
          >
            Toggle Variant
          </Badge>
          <Badge
            variant="success"
            onClick={() => alert('Success badge clicked!')}
          >
            Alert on Click
          </Badge>
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Icons</h3>
        <div className="space-x-2">
          <Badge variant="success" icon={<span>✓</span>}>
            Verified
          </Badge>
          <Badge variant="warning" icon={<span>⚠</span>}>
            Warning
          </Badge>
          <Badge variant="destructive" icon={<span>✕</span>}>
            Error
          </Badge>
        </div>
      </div>

      {/* With Status Dots */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Status Dots</h3>
        <div className="space-x-2">
          <Badge dot variant="success">Online</Badge>
          <Badge dot variant="warning">Away</Badge>
          <Badge dot variant="destructive">Offline</Badge>
          <Badge dot variant="secondary">Busy</Badge>
        </div>
      </div>

      {/* Dismissible Badges */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Dismissible Badges</h3>
        <div className="space-x-2">
          {!dismissedBadges.has('new') && (
            <Badge
              dismissible
              onDismiss={() => setDismissedBadges(prev => new Set([...prev, 'new']))}
              animation="bounce"
            >
              New Feature
            </Badge>
          )}
          {!dismissedBadges.has('beta') && (
            <Badge
              variant="warning"
              dismissible
              onDismiss={() => setDismissedBadges(prev => new Set([...prev, 'beta']))}
            >
              Beta
            </Badge>
          )}
        </div>
      </div>

      {/* Animated Badges */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Animated Badges</h3>
        <div className="space-x-2">
          <Badge animation="pulse" variant="success">Live</Badge>
          <Badge animation="bounce" variant="warning">New</Badge>
          <Badge animation="ping" variant="destructive">Urgent</Badge>
        </div>
      </div>

      {/* Complex Badges */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Complex Badges</h3>
        <div className="space-x-2">
          <Badge
            variant="success"
            icon={<span>✓</span>}
            dot
            size="lg"
          >
            Verified Account
          </Badge>
          <Badge
            variant="warning"
            icon={<span>⭐</span>}
            dismissible
            onDismiss={() => console.log('Premium dismissed')}
          >
            Premium Member
          </Badge>
        </div>
      </div>
    </div>
  )
}