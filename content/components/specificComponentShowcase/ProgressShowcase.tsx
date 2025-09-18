'use client'

import React from 'react'
import { Progress } from '../../../registry/components/ui/progress'

export const ProgressShowcase = () => {
  const [progress, setProgress] = React.useState(33)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-8">
      {/* Basic Progress Bars */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Basic Progress Bars</h3>
        <div className="space-y-3">
          <Progress value={25} />
          <Progress value={progress} />
          <Progress value={75} />
          <Progress value={100} />
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Different Sizes</h3>
        <div className="space-y-3">
          <Progress value={60} size="sm" />
          <Progress value={60} size="default" />
          <Progress value={60} size="lg" />
          <Progress value={60} size="xl" />
        </div>
      </div>

      {/* Different Variants */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Different Variants</h3>
        <div className="space-y-3">
          <Progress value={70} variant="default" />
          <Progress value={70} variant="success" />
          <Progress value={70} variant="warning" />
          <Progress value={70} variant="error" />
          <Progress value={70} variant="gradient" />
        </div>
      </div>

      {/* With Values */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">With Values Displayed</h3>
        <div className="space-y-3">
          <Progress value={45} showValue />
          <Progress value={78} showValue />
          <Progress value={92} showValue />
        </div>
      </div>

      {/* Animated Progress */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Animated Progress</h3>
        <div className="space-y-3">
          <Progress value={30} animated />
          <Progress value={55} animated />
          <Progress value={85} animated />
        </div>
      </div>

      {/* Custom Styled */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Custom Styled Progress</h3>
        <div className="space-y-3">
          <Progress
            value={65}
            className="bg-gray-200 dark:bg-gray-700"
            showValue
          />
          <Progress
            value={40}
            size="lg"
            variant="success"
            className="rounded-lg"
            showValue
          />
        </div>
      </div>
    </div>
  )
}