'use client'

import React from 'react'
import { FileUpload } from '../../../registry/components/ui/file-upload'

export const FileUploadShowcase = () => {
  const [files, setFiles] = React.useState<File[]>([])

  return (
    <div className="space-y-4">
      <FileUpload
        onFilesChange={setFiles}
        accept="image/*,.pdf,.doc,.docx"
        multiple
        maxSize={5}
        placeholder="Drop images or documents here"
      />
      {files.length > 0 && (
        <p className="text-sm text-muted-foreground">
          {files.length} file(s) selected
        </p>
      )}
    </div>
  )
}