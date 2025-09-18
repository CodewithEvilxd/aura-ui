'use client'

import React from 'react'
import { Modal } from '../../../registry/components/ui/modal'
import { Button } from '../../../registry/components/ui/button'

export const ModalShowcase = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Sample Modal"
      >
        <p>This is the content of the modal. You can put any content here.</p>
        <div className="mt-4 flex justify-end space-x-2">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>
            Confirm
          </Button>
        </div>
      </Modal>
    </div>
  )
}