'use client'

import React from 'react'
import { BadgeShowcase } from './specificComponentShowcase/BadgeShowcase'
import { AvatarShowcase } from './specificComponentShowcase/AvatarShowcase'
import { SpinnerShowcase } from './specificComponentShowcase/SpinnerShowcase'
import { AlertShowcase } from './specificComponentShowcase/AlertShowcase'
import { ProgressShowcase } from './specificComponentShowcase/ProgressShowcase'
import { CheckboxShowcase } from './specificComponentShowcase/CheckboxShowcase'
import { TextareaShowcase } from './specificComponentShowcase/TextareaShowcase'
import { BreadcrumbShowcase } from './specificComponentShowcase/BreadcrumbShowcase'
import { PaginationShowcase } from './specificComponentShowcase/PaginationShowcase'
import { TabsShowcase } from './specificComponentShowcase/TabsShowcase'
import { TooltipShowcase } from './specificComponentShowcase/TooltipShowcase'
import { ModalShowcase } from './specificComponentShowcase/ModalShowcase'
import { FloatingCardShowcase } from './specificComponentShowcase/FloatingCardShowcase'
import { MorphingButtonShowcase } from './specificComponentShowcase/MorphingButtonShowcase'
import { WaveTextShowcase } from './specificComponentShowcase/WaveTextShowcase'
import { ParticleBackgroundShowcase } from './specificComponentShowcase/ParticleBackgroundShowcase'
import { FlipCardShowcase } from './specificComponentShowcase/FlipCardShowcase'
import { RotatingCardShowcase } from './specificComponentShowcase/RotatingCardShowcase'
import { ToggleShowcase } from './specificComponentShowcase/ToggleShowcase'
import { TripleToggleShowcase } from './specificComponentShowcase/TripleToggleShowcase'
import { AnimatedSearchInputShowcase } from './specificComponentShowcase/AnimatedSearchInputShowcase'
import { DarkModeToggleShowcase } from './specificComponentShowcase/DarkModeToggleShowcase'
import { SkeletonShowcase } from './specificComponentShowcase/SkeletonShowcase'
import { ToastShowcase } from './specificComponentShowcase/ToastShowcase'
import { SearchShowcase } from './specificComponentShowcase/SearchShowcase'
import { RatingShowcase } from './specificComponentShowcase/RatingShowcase'
import { TimelineShowcase } from './specificComponentShowcase/TimelineShowcase'
import { StepperShowcase } from './specificComponentShowcase/StepperShowcase'
import { FileUploadShowcase } from './specificComponentShowcase/FileUploadShowcase'
import { ColorPickerShowcase } from './specificComponentShowcase/ColorPickerShowcase'
import { DataTableShowcase } from './specificComponentShowcase/DataTableShowcase'
import { HoverCardShowcase } from './specificComponentShowcase/HoverCardShowcase'

export const NewComponentsShowcase = () => {
  return (
    <div className="space-y-12 p-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">New Components Showcase</h1>
        <p className="text-muted-foreground">All newly created components following the established patterns</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Badge */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Badge</h2>
          <BadgeShowcase />
        </div>

        {/* Avatar */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Avatar</h2>
          <AvatarShowcase />
        </div>

        {/* Spinner */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Spinner</h2>
          <SpinnerShowcase />
        </div>

        {/* Alert */}
        <div className="space-y-4 md:col-span-2">
          <h2 className="text-xl font-semibold">Alert</h2>
          <AlertShowcase />
        </div>

        {/* Progress */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Progress</h2>
          <ProgressShowcase />
        </div>

        {/* Checkbox */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Checkbox</h2>
          <CheckboxShowcase />
        </div>

        {/* Textarea */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Textarea</h2>
          <TextareaShowcase />
        </div>

        {/* Breadcrumb */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Breadcrumb</h2>
          <BreadcrumbShowcase />
        </div>

        {/* Pagination */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Pagination</h2>
          <PaginationShowcase />
        </div>

        {/* Tabs */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Tabs</h2>
          <TabsShowcase />
        </div>

        {/* Tooltip */}
        <div className="space-y-4 md:col-span-2">
          <h2 className="text-xl font-semibold">Tooltip</h2>
          <TooltipShowcase />
        </div>

        {/* Modal */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Modal</h2>
          <ModalShowcase />
        </div>

        {/* Toggle */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Toggle</h2>
          <ToggleShowcase />
        </div>

        {/* Triple Toggle */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Triple Toggle</h2>
          <TripleToggleShowcase />
        </div>

        {/* Animated Search Input */}
        <div className="space-y-4 md:col-span-2">
          <h2 className="text-xl font-semibold">Animated Search Input</h2>
          <AnimatedSearchInputShowcase />
        </div>

        {/* Dark Mode Toggle */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Dark Mode Toggle</h2>
          <DarkModeToggleShowcase />
        </div>

        {/* Skeleton */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Skeleton</h2>
          <SkeletonShowcase />
        </div>

        {/* Toast */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Toast</h2>
          <ToastShowcase />
        </div>

        {/* Search */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Search</h2>
          <SearchShowcase />
        </div>

        {/* Rating */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Rating</h2>
          <RatingShowcase />
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Timeline</h2>
          <TimelineShowcase />
        </div>

        {/* Stepper */}
        <div className="space-y-4 md:col-span-2">
          <h2 className="text-xl font-semibold">Stepper</h2>
          <StepperShowcase />
        </div>

        {/* File Upload */}
        <div className="space-y-4 md:col-span-2">
          <h2 className="text-xl font-semibold">File Upload</h2>
          <FileUploadShowcase />
        </div>

        {/* Color Picker */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Color Picker</h2>
          <ColorPickerShowcase />
        </div>

        {/* Data Table */}
        <div className="space-y-4 md:col-span-3">
          <h2 className="text-xl font-semibold">Data Table</h2>
          <DataTableShowcase />
        </div>

        {/* Hover Card */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Hover Card</h2>
          <HoverCardShowcase />
        </div>
      </div>

      {/* 3D Animated Components Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">🎨 3D Animated Components</h2>
          <p className="text-muted-foreground">Immersive 3D effects and animations</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Floating Card */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">Floating Card</h3>
            <FloatingCardShowcase />
          </div>

          {/* Morphing Button */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">Morphing Button</h3>
            <MorphingButtonShowcase />
          </div>

          {/* Wave Text */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">Wave Text</h3>
            <WaveTextShowcase />
          </div>

          {/* Particle Background */}
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-lg font-semibold text-center">Particle Background</h3>
            <ParticleBackgroundShowcase />
          </div>

          {/* Flip Card */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">Flip Card</h3>
            <FlipCardShowcase />
          </div>

          {/* Rotating Card */}
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-lg font-semibold text-center">Rotating Card</h3>
            <RotatingCardShowcase />
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-muted-foreground">
        <p>🎉 Total Components Created: 27 (22 Original + 5 New 3D Animated)</p>
        <p>✨ All components feature smooth animations, 3D effects, and interactive behaviors</p>
        <p>🔧 Built with TypeScript, Tailwind CSS, and modern React patterns</p>
      </div>
    </div>
  )
}