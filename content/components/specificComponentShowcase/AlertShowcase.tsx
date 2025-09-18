'use client'

import React from 'react'
import { Alert, AlertTitle, AlertDescription } from '../../../registry/components/ui/alert'
import { IconCircle, IconAlertTriangle, IconX } from '@tabler/icons-react'

export const AlertShowcase = () => {
  const [dismissedAlerts, setDismissedAlerts] = React.useState<Set<string>>(new Set())
  const [showAutoHide, setShowAutoHide] = React.useState(false)

  const handleDismiss = (id: string) => {
    setDismissedAlerts(prev => new Set([...prev, id]))
  }

  const triggerAutoHide = () => {
    setShowAutoHide(true)
    setTimeout(() => setShowAutoHide(false), 100)
  }

  return (
    <div className="space-y-6">
      {/* Basic Variants */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Basic Variants</h3>
        <div className="space-y-3">
          <Alert>
            <AlertTitle>Default Alert</AlertTitle>
            <AlertDescription>
              This is a default alert with neutral styling.
            </AlertDescription>
          </Alert>

          <Alert variant="success">
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your changes have been saved successfully.
            </AlertDescription>
          </Alert>

          <Alert variant="warning">
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Please review your input before continuing.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Something went wrong. Please try again.
            </AlertDescription>
          </Alert>

          <Alert variant="info">
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              Here's some important information you should know.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Different Sizes</h3>
        <div className="space-y-3">
          <Alert size="sm">
            <AlertTitle>Small Alert</AlertTitle>
            <AlertDescription>Compact alert with smaller padding.</AlertDescription>
          </Alert>

          <Alert size="default">
            <AlertTitle>Default Alert</AlertTitle>
            <AlertDescription>Standard alert size.</AlertDescription>
          </Alert>

          <Alert size="lg">
            <AlertTitle>Large Alert</AlertTitle>
            <AlertDescription>Spacious alert with larger padding for important messages.</AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Dismissible Alerts */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Dismissible Alerts</h3>
        <div className="space-y-3">
          {!dismissedAlerts.has('success') && (
            <Alert variant="success" dismissible onDismiss={() => handleDismiss('success')}>
              <AlertTitle>Task Completed</AlertTitle>
              <AlertDescription>
                Your profile has been updated successfully.
              </AlertDescription>
            </Alert>
          )}

          {!dismissedAlerts.has('warning') && (
            <Alert variant="warning" dismissible onDismiss={() => handleDismiss('warning')}>
              <AlertTitle>Action Required</AlertTitle>
              <AlertDescription>
                Please verify your email address to continue.
              </AlertDescription>
            </Alert>
          )}

          {!dismissedAlerts.has('error') && (
            <Alert variant="destructive" dismissible onDismiss={() => handleDismiss('error')}>
              <AlertTitle>Connection Failed</AlertTitle>
              <AlertDescription>
                Unable to connect to the server. Please check your internet connection.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </div>

      {/* Auto-hide Alerts */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Auto-hide Alerts</h3>
        <div className="space-y-3">
          <button
            onClick={triggerAutoHide}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Show Auto-hide Alert
          </button>

          {showAutoHide && (
            <Alert variant="success" autoHide autoHideDelay={3000}>
              <AlertTitle>Saved!</AlertTitle>
              <AlertDescription>
                Your changes have been saved automatically.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </div>

      {/* With Custom Icons */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">With Custom Icons</h3>
        <div className="space-y-3">
          <Alert variant="success" icon={<IconCircle className="h-4 w-4" />}>
            <AlertTitle>Custom Success Icon</AlertTitle>
            <AlertDescription>
              This alert uses a custom icon instead of the default one.
            </AlertDescription>
          </Alert>

          <Alert variant="warning" icon={<IconAlertTriangle className="h-4 w-4" />}>
            <AlertTitle>Custom Warning Icon</AlertTitle>
            <AlertDescription>
              Custom icons can help reinforce the message type.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive" icon={<IconX className="h-4 w-4" />}>
            <AlertTitle>Custom Error Icon</AlertTitle>
            <AlertDescription>
              Error alerts with custom icons for better visual hierarchy.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Complex Alerts */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Complex Alerts</h3>
        <div className="space-y-3">
          <Alert variant="info" size="lg" dismissible>
            <AlertTitle>Welcome to the Dashboard</AlertTitle>
            <AlertDescription>
              <div className="space-y-2">
                <p>Here's what's new in this update:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Improved performance and loading times</li>
                  <li>New interactive components</li>
                  <li>Enhanced accessibility features</li>
                  <li>Better mobile responsiveness</li>
                </ul>
                <p className="mt-2">
                  <a href="#" className="text-blue-600 hover:underline">
                    Learn more about these features →
                  </a>
                </p>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  )
}