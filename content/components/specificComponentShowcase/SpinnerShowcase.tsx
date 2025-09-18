'use client'

import React from 'react'
import { Spinner } from '../../../registry/components/ui/spinner'

export const SpinnerShowcase = () => {
  const [loadingStates, setLoadingStates] = React.useState({
    upload: false,
    save: false,
    process: false,
    sync: false
  })

  const simulateLoading = (key: string) => {
    setLoadingStates(prev => ({ ...prev, [key]: true }))
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [key]: false }))
    }, 3000)
  }

  return (
    <div className="space-y-8">
      {/* Different Sizes */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Different Sizes</h3>
        <div className="flex items-center space-x-6">
          <div className="flex flex-col items-center space-y-2">
            <Spinner size="xs" />
            <span className="text-xs text-muted-foreground">XS</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Spinner size="sm" />
            <span className="text-xs text-muted-foreground">SM</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Spinner size="default" />
            <span className="text-xs text-muted-foreground">Default</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Spinner size="lg" />
            <span className="text-xs text-muted-foreground">LG</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Spinner size="xl" />
            <span className="text-xs text-muted-foreground">XL</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Spinner size="2xl" />
            <span className="text-xs text-muted-foreground">2XL</span>
          </div>
        </div>
      </div>

      {/* Different Variants */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Color Variants</h3>
        <div className="flex items-center space-x-6">
          <div className="flex flex-col items-center space-y-2">
            <Spinner variant="default" />
            <span className="text-xs text-muted-foreground">Default</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Spinner variant="primary" />
            <span className="text-xs text-muted-foreground">Primary</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Spinner variant="success" />
            <span className="text-xs text-muted-foreground">Success</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Spinner variant="warning" />
            <span className="text-xs text-muted-foreground">Warning</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Spinner variant="error" />
            <span className="text-xs text-muted-foreground">Error</span>
          </div>
        </div>
      </div>

      {/* Special Variants */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Special Variants</h3>
        <div className="flex items-center space-x-8">
          <div className="flex flex-col items-center space-y-2">
            <Spinner variant="gradient" size="lg" />
            <span className="text-xs text-muted-foreground">Gradient</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Spinner variant="dots" />
            <span className="text-xs text-muted-foreground">Dots</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Spinner variant="pulse" size="lg" />
            <span className="text-xs text-muted-foreground">Pulse</span>
          </div>
        </div>
      </div>

      {/* Different Speeds */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Animation Speeds</h3>
        <div className="flex items-center space-x-8">
          <div className="flex flex-col items-center space-y-2">
            <Spinner speed="slow" />
            <span className="text-xs text-muted-foreground">Slow</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Spinner speed="normal" />
            <span className="text-xs text-muted-foreground">Normal</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Spinner speed="fast" />
            <span className="text-xs text-muted-foreground">Fast</span>
          </div>
        </div>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Interactive Examples</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <button
              onClick={() => simulateLoading('upload')}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Upload File
            </button>
            {loadingStates.upload && (
              <div className="flex items-center justify-center space-x-2 p-2 bg-blue-50 rounded">
                <Spinner size="sm" variant="primary" />
                <span className="text-sm text-blue-600">Uploading...</span>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <button
              onClick={() => simulateLoading('save')}
              className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Save Changes
            </button>
            {loadingStates.save && (
              <div className="flex items-center justify-center space-x-2 p-2 bg-green-50 rounded">
                <Spinner size="sm" variant="success" />
                <span className="text-sm text-green-600">Saving...</span>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <button
              onClick={() => simulateLoading('process')}
              className="w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
            >
              Process Data
            </button>
            {loadingStates.process && (
              <div className="flex items-center justify-center space-x-2 p-2 bg-purple-50 rounded">
                <Spinner variant="gradient" size="sm" />
                <span className="text-sm text-purple-600">Processing...</span>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <button
              onClick={() => simulateLoading('sync')}
              className="w-full px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
            >
              Sync Data
            </button>
            {loadingStates.sync && (
              <div className="flex items-center justify-center space-x-2 p-2 bg-orange-50 rounded">
                <Spinner variant="dots" />
                <span className="text-sm text-orange-600">Syncing...</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* With Labels */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">With Labels</h3>
        <div className="flex flex-wrap gap-6">
          <Spinner showLabel label="Loading data..." />
          <Spinner variant="primary" showLabel label="Processing..." size="lg" />
          <Spinner variant="success" showLabel label="Complete!" speed="slow" />
        </div>
      </div>
    </div>
  )
}