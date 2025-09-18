'use client'

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../registry/components/ui/tabs'
import { IconHome, IconUser, IconSettings, IconHeart } from '@tabler/icons-react'

export const TabsShowcase = () => {
  return (
    <div className="space-y-8">
      {/* Default Variant */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Default Tabs</h3>
        <Tabs defaultValue="home" className="w-full">
          <TabsList>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="home" className="mt-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Welcome Home</h4>
              <p className="text-sm text-muted-foreground">This is your home dashboard with all the latest updates and notifications.</p>
            </div>
          </TabsContent>
          <TabsContent value="profile" className="mt-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">User Profile</h4>
              <p className="text-sm text-muted-foreground">Manage your profile settings and personal information here.</p>
            </div>
          </TabsContent>
          <TabsContent value="settings" className="mt-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Settings</h4>
              <p className="text-sm text-muted-foreground">Configure your application preferences and system settings.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Underline Variant */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Underline Tabs</h3>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList variant="underline">
            <TabsTrigger value="overview" variant="underline">Overview</TabsTrigger>
            <TabsTrigger value="analytics" variant="underline">Analytics</TabsTrigger>
            <TabsTrigger value="reports" variant="underline">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <div className="p-4 border rounded-lg">
              <p className="text-sm">Overview content with clean underline styling.</p>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="mt-4">
            <div className="p-4 border rounded-lg">
              <p className="text-sm">Analytics data and charts would go here.</p>
            </div>
          </TabsContent>
          <TabsContent value="reports" className="mt-4">
            <div className="p-4 border rounded-lg">
              <p className="text-sm">Generated reports and export options.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Pills Variant */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Pills Tabs</h3>
        <Tabs defaultValue="feed" className="w-full">
          <TabsList variant="pills">
            <TabsTrigger value="feed" variant="pills">Feed</TabsTrigger>
            <TabsTrigger value="trending" variant="pills">Trending</TabsTrigger>
            <TabsTrigger value="latest" variant="pills">Latest</TabsTrigger>
          </TabsList>
          <TabsContent value="feed" className="mt-4">
            <div className="p-4 bg-primary/5 rounded-lg">
              <p className="text-sm">Your personalized feed content.</p>
            </div>
          </TabsContent>
          <TabsContent value="trending" className="mt-4">
            <div className="p-4 bg-primary/5 rounded-lg">
              <p className="text-sm">Trending topics and popular content.</p>
            </div>
          </TabsContent>
          <TabsContent value="latest" className="mt-4">
            <div className="p-4 bg-primary/5 rounded-lg">
              <p className="text-sm">Latest updates and new content.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Buttons Variant */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Button Tabs</h3>
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList variant="buttons">
            <TabsTrigger value="dashboard" variant="buttons">Dashboard</TabsTrigger>
            <TabsTrigger value="projects" variant="buttons">Projects</TabsTrigger>
            <TabsTrigger value="team" variant="buttons">Team</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard" className="mt-4">
            <div className="p-4 border-2 border-dashed rounded-lg">
              <p className="text-sm">Dashboard widgets and metrics.</p>
            </div>
          </TabsContent>
          <TabsContent value="projects" className="mt-4">
            <div className="p-4 border-2 border-dashed rounded-lg">
              <p className="text-sm">Project management interface.</p>
            </div>
          </TabsContent>
          <TabsContent value="team" className="mt-4">
            <div className="p-4 border-2 border-dashed rounded-lg">
              <p className="text-sm">Team collaboration tools.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* With Icons and Badges */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Icons & Badges</h3>
        <Tabs defaultValue="messages" className="w-full">
          <TabsList>
            <TabsTrigger value="messages" icon={<IconHome className="h-4 w-4" />}>
              Messages
            </TabsTrigger>
            <TabsTrigger value="notifications" icon={<IconHeart className="h-4 w-4" />} badge={<span className="bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">3</span>}>
              Notifications
            </TabsTrigger>
            <TabsTrigger value="profile" icon={<IconUser className="h-4 w-4" />}>
              Profile
            </TabsTrigger>
            <TabsTrigger value="settings" icon={<IconSettings className="h-4 w-4" />} disabled>
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="messages" className="mt-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm">Your messages and conversations.</p>
            </div>
          </TabsContent>
          <TabsContent value="notifications" className="mt-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <p className="text-sm">Notifications and alerts.</p>
            </div>
          </TabsContent>
          <TabsContent value="profile" className="mt-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-sm">Profile settings and preferences.</p>
            </div>
          </TabsContent>
          <TabsContent value="settings" className="mt-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
              <p className="text-sm">Application settings (disabled).</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Size Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Size Variants</h3>
        <div className="space-y-6">
          <Tabs defaultValue="small" className="w-full">
            <TabsList size="sm">
              <TabsTrigger value="small" size="sm">Small</TabsTrigger>
              <TabsTrigger value="medium" size="sm">Medium</TabsTrigger>
            </TabsList>
            <TabsContent value="small" className="mt-2">
              <p className="text-xs">Small tab content</p>
            </TabsContent>
            <TabsContent value="medium" className="mt-2">
              <p className="text-xs">Medium tab content</p>
            </TabsContent>
          </Tabs>

          <Tabs defaultValue="large" className="w-full">
            <TabsList size="lg">
              <TabsTrigger value="large" size="lg">Large</TabsTrigger>
              <TabsTrigger value="extra" size="lg">Extra</TabsTrigger>
            </TabsList>
            <TabsContent value="large" className="mt-4">
              <p className="text-base">Large tab content with more spacing</p>
            </TabsContent>
            <TabsContent value="extra" className="mt-4">
              <p className="text-base">Extra large tab content</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}