import React from 'react';
import { useSwipeGesture } from '../hooks/useSwipeGesture';
import { RingProgress } from './ring/RingProgress';
import { RingContent } from './ring/RingContent';

interface SwipeRingCounterProps {
  count: number;
  goal: number;
  onSwipe: (direction: 'left' | 'right') => void;
  color: string;
  title: string;
}

export function SwipeRingCounter({ count, goal, onSwipe, color, title }: SwipeRingCounterProps) {
  const size = 200;
  const strokeWidth = 15;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = goal > 0 ? (count / goal) * circumference : 0;
  const remaining = Math.max(0, goal - count);
  const isActive = goal > 0;

  const swipeAreaId = `swipe-area-${title.toLowerCase().replace(/\s+/g, '-')}`;
  useSwipeGesture({ onSwipe, elementId: swipeAreaId });

  return (
    <div 
      id={swipeAreaId}
      className={`relative select-none transition-opacity ${
        isActive ? 'opacity-100' : 'opacity-50'
      }`}
    >
      <RingProgress
        size={size}
        strokeWidth={strokeWidth}
        progress={progress}
        color={color}
      />
      <RingContent
        count={count}
        remaining={remaining}
        isActive={isActive}
      />
    </div>
  );
}