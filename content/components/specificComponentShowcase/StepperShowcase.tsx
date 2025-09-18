'use client'

import React from 'react'
import { Stepper } from '../../../registry/components/ui/stepper'

export const StepperShowcase = () => {
  const [currentStep, setCurrentStep] = React.useState(1)

  const steps = [
    { id: '1', title: 'Personal Info', description: 'Enter details' },
    { id: '2', title: 'Verification', description: 'Verify email' },
    { id: '3', title: 'Complete', description: 'Finish setup' }
  ]

  return (
    <div className="space-y-4">
      <Stepper
        steps={steps}
        currentStep={currentStep}
        onStepChange={setCurrentStep}
      />
      <div className="flex space-x-2">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
          disabled={currentStep === steps.length - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}