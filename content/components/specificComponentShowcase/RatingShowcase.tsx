'use client'

import React from 'react'
import { Rating } from '../../../registry/components/ui/rating'

export const RatingShowcase = () => {
  const [rating, setRating] = React.useState(3)

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Interactive Rating</h3>
        <Rating
          value={rating}
          onChange={setRating}
          size="lg"
        />
        <p className="text-sm text-muted-foreground">Rating: {rating}/5</p>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Read-only Rating</h3>
        <Rating value={4.5} readonly size="default" />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Small Rating</h3>
        <Rating value={2} size="sm" />
      </div>
    </div>
  )
}