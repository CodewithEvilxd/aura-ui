'use client'

import React from 'react'
import { Timeline, TimelineItem, TimelineConnector, TimelineHeader, TimelineTitle, TimelineDescription, TimelineContent, TimelineSeparator } from '../../../registry/components/ui/timeline'

export const TimelineShowcase = () => {
  return (
    <Timeline className="max-w-md">
      <TimelineItem>
        <TimelineConnector />
        <TimelineHeader>
          <TimelineTitle>Project Started</TimelineTitle>
          <TimelineDescription>January 2024</TimelineDescription>
        </TimelineHeader>
        <TimelineSeparator />
        <TimelineContent>
          <p className="text-sm">Initial project setup and planning phase.</p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineConnector />
        <TimelineHeader>
          <TimelineTitle>Development</TimelineTitle>
          <TimelineDescription>February 2024</TimelineDescription>
        </TimelineHeader>
        <TimelineSeparator />
        <TimelineContent>
          <p className="text-sm">Core features implementation and testing.</p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineConnector />
        <TimelineHeader>
          <TimelineTitle>Launch</TimelineTitle>
          <TimelineDescription>March 2024</TimelineDescription>
        </TimelineHeader>
        <TimelineSeparator />
        <TimelineContent>
          <p className="text-sm">Product launch and user onboarding.</p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}