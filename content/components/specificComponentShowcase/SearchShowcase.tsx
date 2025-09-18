'use client'

import React from 'react'
import { Search } from '../../../registry/components/ui/search'

export const SearchShowcase = () => {
  const [searchValue, setSearchValue] = React.useState('')

  return (
    <div className="space-y-4">
      <Search
        placeholder="Search for anything..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onSearch={(value) => console.log('Searching for:', value)}
      />
      <p className="text-sm text-muted-foreground">
        Search value: "{searchValue}"
      </p>
    </div>
  )
}