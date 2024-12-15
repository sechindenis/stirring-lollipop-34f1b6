import React from 'react';
import { RingProgress } from './ring/RingProgress';

interface TapRingCounterProps {
  count: number;
  goal: number;
  onClick: () => void;
  color: string;
}

export function TapRingCounter({ count, goal, onClick, color }: TapRingCounterProps) {
  const size = 200;
  const strokeWidth = 15;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = goal > 0 ? (count / goal) * circumference : 0;
  const remaining = Math.max(0, goal - count);
  const isActive = goal > 0;

  return (
    <div 
      className={`relative select-none transition-opacity ${
        isActive ? 'cursor-pointer opacity-100' : 'cursor-not-allowed opacity-50'
      }`} 
      onClick={isActive ? onClick : undefined}
    >
      <RingProgress
        size={size}
        strokeWidth={strokeWidth}
        progress={progress}
        color={color}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-gray-800">{count}</span>
        {isActive && (
          <span className="text-sm text-gray-600 mt-1">
            {remaining} taps to go
          </span>
        )}
      </div>
    </div>
  );
}