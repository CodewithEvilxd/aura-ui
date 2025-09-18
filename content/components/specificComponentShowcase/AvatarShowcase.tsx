'use client'

import React from 'react'
import { Avatar } from '../../../registry/components/ui/avatar'

export const AvatarShowcase = () => {
  return (
    <div className="space-y-6">
      {/* Different Sizes */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Sizes</h3>
        <div className="flex items-center space-x-4">
          <Avatar size="xs" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiM2MzY2RjEiLz4KPHBhdGggZD0iTTIyIDIxYzAtMS40LTEuMS0yLjUtMi41LTIuNUMxNy4xIDE4LjUgMTYgMTkuNiAxNiAyMXMxLjEtMi41IDIuNS0yLjVjMS40IDAgMi41IDEuMSAyLjUgMi41czEuMSAyLjUgMi41IDIuNWMxLjQgMCAyLjUtMS4xIDIuNS0yLjV6IiBmaWxsPSIjZmZmZmZmIi8+CjxjaXJjbGUgY3g9IjE2IiBjeT0iMTMiIHI9IjQiIGZpbGw9IiNmZmZmZmYiLz4KPC9zdmc+" alt="XS Avatar" />
          <Avatar size="sm" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzIiIGZpbGw9IiM2MzY2RjEiLz4KPHBhdGggZD0iTTQ0IDQyYzAtMi44LTIuMi01LTVzLTUgNS01IDVjMi44IDAgNSAyLjIgNSA1czIuMiA1IDUgNXMxLTUuMiA1LTV6IiBmaWxsPSIjZmZmZmZmIi8+CjxjaXJjbGUgY3g9IjMyIiBjeT0iMjYiIHI9IjgiIGZpbGw9IiNmZmZmZmYiLz4KPC9zdmc+" alt="SM Avatar" />
          <Avatar size="default" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjY0IiBjeT0iNjQiIHI9IjY0IiBmaWxsPSIjNjM2NkYxIi8+CjxwYXRoIGQ9Ik04OCA4NGMwLTUuNi00LjQtMTAtMTAtMTBzLTEwIDQuNC0xMCAxMHM0LjQgMTAgMTAgMTBzMTAtNC40IDEwLTEweiIgZmlsbD0iI2ZmZmZmZiIvPgo8Y2lyY2xlIGN4PSI2NCIgY3k9IjUyIiBy0iMTIiIGZpbGw9IiNmZmZmZmYiLz4KPC9zdmc+" alt="Default Avatar" />
          <Avatar size="lg" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9Ijk2IiBjeT0iOTYiIHI9Ijk2IiBmaWxsPSIjNjM2NkYxIi8+CjxwYXRoIGQ9Ik0xMzIgMTMyYzAtOC40LTYuOC0xNS0xNS0xNXMtMTUgNi44LTE1IDE1czYuOCAxNSAxNSAxNXMxNSA2LjggMTUtMTV6IiBmaWxsPSIjZmZmZmZmIi8+CjxjaXJjbGUgY3g9Ijk2IiBjeT0iNzgiIHI9IjE4IiBmaWxsPSIjZmZmZmZmIi8+Cjwvc3ZnPg==" alt="LG Avatar" />
          <Avatar size="xl" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjEyOCIgY3k9IjEyOCIgcj0iMTI4IiBmaWxsPSIjNjM2NkYxIi8+CjxwYXRoIGQ9Ik0xNzYgMTc2YzAtMTEuMi05LjEtMjAtMjAtMjBzLTIwIDkuMS0yMCAyMHM5LjEgMjAgMjAgMjBzMjAtOS4xIDIwLTIweiIgZmlsbD0iI2ZmZmZmYiLz4KPGNpcmNsZSBjeD0iMTI4IiBjeT0iMTA0IiBy0iIyNCIgZmlsbD0iI2ZmZmZmYiLz4KPC9zdmc+" alt="XL Avatar" />
        </div>
      </div>

      {/* Status Indicators */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Status Indicators</h3>
        <div className="flex items-center space-x-4">
          <Avatar
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjY0IiBjeT0iNjQiIHI9IjY0IiBmaWxsPSIjNjM2NkYxIi8+CjxwYXRoIGQ9Ik04OCA4NGMwLTUuNi00LjQtMTAtMTAtMTBzLTEwIDQuNC0xMCAxMHM0LjQgMTAgMTAgMTBzMTAtNC40IDEwLTEweiIgZmlsbD0iI2ZmZmZmYiLz4KPGNpcmNsZSBjeD0iNjQiIGN5PSI1MiIgcj0iMTIiIGZpbGw9IiNmZmZmZmYiLz4KPC9zdmc+"
            alt="Online User"
            status="online"
          />
          <Avatar
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjY0IiBjeT0iNjQiIHI9IjY0IiBmaWxsPSIjNjM2NkYxIi8+CjxwYXRoIGQ9Ik04OCA4NGMwLTUuNi00LjQtMTAtMTAtMTBzLTEwIDQuNC0xMCAxMHM0LjQgMTAgMTAgMTBzMTAtNC40IDEwLTEweiIgZmlsbD0iI2ZmZmZmYiLz4KPGNpcmNsZSBjeD0iNjQiIGN5PSI1MiIgcj0iMTIiIGZpbGw9IiNmZmZmZmYiLz4KPC9zdmc+"
            alt="Away User"
            status="away"
          />
          <Avatar
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjY0IiBjeT0iNjQiIHI9IjY0IiBmaWxsPSIjNjM2NkYxIi8+CjxwYXRoIGQ9Ik04OCA4NGMwLTUuNi00LjQtMTAtMTAtMTBzLTEwIDQuNC0xMCAxMHM0LjQgMTAgMTAgMTBzMTAtNC40IDEwLTEweiIgZmlsbD0iI2ZmZmZmYiLz4KPGNpcmNsZSBjeD0iNjQiIGN5PSI1MiIgcj0iMTIiIGZpbGw9IiNmZmZmZmYiLz4KPC9zdmc+"
            alt="Busy User"
            status="busy"
          />
          <Avatar
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjY0IiBjeT0iNjQiIHI9IjY0IiBmaWxsPSIjNjM2NkYxIi8+CjxwYXRoIGQ9Ik04OCA4NGMwLTUuNi00LjQtMTAtMTAtMTBzLTEwIDQuNC0xMCAxMHM0LjQgMTAgMTAgMTBzMTAtNC40IDEwLTEweiIgZmlsbD0iI2ZmZmZmYiLz4KPGNpcmNsZSBjeD0iNjQiIGN5PSI1MiIgcj0iMTIiIGZpbGw9IiNmZmZmZmYiLz4KPC9zdmc+"
            alt="Offline User"
            status="offline"
          />
        </div>
      </div>

      {/* With Badges */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Badges</h3>
        <div className="flex items-center space-x-4">
          <Avatar
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjY0IiBjeT0iNjQiIHI9IjY0IiBmaWxsPSIjNjM2NkYxIi8+CjxwYXRoIGQ9Ik04OCA4NGMwLTUuNi00LjQtMTAtMTAtMTBzLTEwIDQuNC0xMCAxMHM0LjQgMTAgMTAgMTBzMTAtNC40IDEwLTEweiIgZmlsbD0iI2ZmZmZmYiLz4KPGNpcmNsZSBjeD0iNjQiIGN5PSI1MiIgcj0iMTIiIGZpbGw9IiNmZmZmZmYiLz4KPC9zdmc+"
            alt="User with Badge"
            badge={<span className="text-xs bg-red-500 text-white rounded-full px-1">3</span>}
            badgePosition="top-right"
          />
          <Avatar
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjY0IiBjeT0iNjQiIHI9IjY0IiBmaWxsPSIjNjM2NkYxIi8+CjxwYXRoIGQ9Ik04OCA4NGMwLTUuNi00LjQtMTAtMTAtMTBzLTEwIDQuNC0xMCAxMHM0LjQgMTAgMTAgMTBzMTAtNC40IDEwLTEweiIgZmlsbD0iI2ZmZmZmYiLz4KPGNpcmNsZSBjeD0iNjQiIGN5PSI1MiIgcj0iMTIiIGZpbGw9IiNmZmZmZmYiLz4KPC9zdmc+"
            alt="User with Icon Badge"
            badge={<span className="text-xs">⭐</span>}
            badgePosition="bottom-left"
          />
        </div>
      </div>

      {/* Fallback Examples */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Fallback Examples</h3>
        <div className="flex items-center space-x-4">
          <Avatar fallback="JD" alt="John Doe" />
          <Avatar fallback="AB" alt="Alice Bob" />
          <Avatar fallback="?" alt="Unknown User" />
        </div>
      </div>

      {/* Interactive Avatar */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Interactive Avatar</h3>
        <Avatar
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjEyOCIgY3k9IjEyOCIgcj0iMTI4IiBmaWxsPSIjNjM2NkYxIi8+CjxwYXRoIGQ9Ik0xNzYgMTc2YzAtMTEuMi05LjEtMjAtMjAtMjBzLTIwIDkuMS0yMCAyMHM5LjEgMjAgMjAgMjBzMjAtOS4xIDIwLTIweiIgZmlsbD0iI2ZmZmZmYiLz4KPGNpcmNsZSBjeD0iMTI4IiBjeT0iMTA0IiBy0iIyNCIgZmlsbD0iI2ZmZmZmYiLz4KPC9zdmc+"
          alt="Clickable Avatar"
          onClick={() => alert('Avatar clicked! 🎉')}
          size="xl"
        />
      </div>
    </div>
  )
}