'use client'

import React from 'react'
import { Button } from '../../../registry/components/ui/button'

export const ToastShowcase = () => {
  const showToast = (type: string) => {
    // This would normally trigger a toast notification
    alert(`${type} toast would appear here!`)
  }

  return (
    <div className="space-y-4">
      <div className="space-x-2">
        <Button onClick={() => showToast('Success')} variant="default">
          Show Success Toast
        </Button>
        <Button onClick={() => showToast('Error')} variant="destructive">
          Show Error Toast
        </Button>
        <Button onClick={() => showToast('Warning')} className="bg-yellow-500 hover:bg-yellow-600">
          Show Warning Toast
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">
        Click buttons to see toast notifications (simulated with alerts)
      </p>
    </div>
  )
}