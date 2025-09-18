"use client"

import * as React from "react"
import { IconUpload, IconX, IconFile } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

export interface FileUploadProps {
  onFilesChange?: (files: File[]) => void
  accept?: string
  multiple?: boolean
  maxSize?: number // in MB
  className?: string
  placeholder?: string
}

const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  ({
    onFilesChange,
    accept = "*",
    multiple = false,
    maxSize = 10,
    className,
    placeholder = "Click to upload or drag and drop",
    ...props
  }, ref) => {
    const [files, setFiles] = React.useState<File[]>([])
    const [isDragOver, setIsDragOver] = React.useState(false)
    const fileInputRef = React.useRef<HTMLInputElement>(null)

    const handleFileSelect = (selectedFiles: FileList | null) => {
      if (!selectedFiles) return

      const fileArray = Array.from(selectedFiles)
      const validFiles = fileArray.filter(file => {
        if (file.size > maxSize * 1024 * 1024) {
          alert(`File ${file.name} is too large. Maximum size is ${maxSize}MB.`)
          return false
        }
        return true
      })

      const newFiles = multiple ? [...files, ...validFiles] : validFiles
      setFiles(newFiles)
      onFilesChange?.(newFiles)
    }

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragOver(false)
      handleFileSelect(e.dataTransfer.files)
    }

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragOver(true)
    }

    const handleDragLeave = () => {
      setIsDragOver(false)
    }

    const removeFile = (index: number) => {
      const newFiles = files.filter((_, i) => i !== index)
      setFiles(newFiles)
      onFilesChange?.(newFiles)
    }

    const formatFileSize = (bytes: number) => {
      if (bytes === 0) return '0 Bytes'
      const k = 1024
      const sizes = ['Bytes', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    }

    return (
      <div ref={ref} className={cn("space-y-4", className)} {...props}>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
          className={cn(
            "relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200",
            isDragOver
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/50"
          )}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={(e) => handleFileSelect(e.target.files)}
            className="hidden"
          />

          <IconUpload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <div className="text-lg font-medium text-foreground mb-2">
            {placeholder}
          </div>
          <div className="text-sm text-muted-foreground">
            {accept === "*" ? "Any file type" : `Accepts: ${accept}`}
            {maxSize && ` (Max: ${maxSize}MB)`}
          </div>
        </div>

        {files.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Selected Files:</h4>
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-muted rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <IconFile className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">{file.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {formatFileSize(file.size)}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="p-1 rounded-md hover:bg-destructive hover:text-destructive-foreground transition-colors"
                >
                  <IconX className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
)
FileUpload.displayName = "FileUpload"

export { FileUpload }