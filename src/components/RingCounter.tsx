import React from 'react';

interface RingCounterProps {
  count: number;
  goal: number;
  onClick: () => void;
  color: string;
}

export function RingCounter({ count, goal, onClick, color }: RingCounterProps) {
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
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
        />
        {/* Progress ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          className="transition-all duration-300 ease-out"
        />
      </svg>
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