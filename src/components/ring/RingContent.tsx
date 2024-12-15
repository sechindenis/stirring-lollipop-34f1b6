import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface RingContentProps {
  count: number;
  remaining: number;
  isActive: boolean;
}

export function RingContent({ count, remaining, isActive }: RingContentProps) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <span className="text-4xl font-bold text-gray-800">{count}</span>
      {isActive && (
        <>
          <span className="text-sm text-gray-600 mt-1">
            {remaining} swipes to go
          </span>
          <div className="mt-2 text-gray-500 flex flex-col gap-1">
            <div className="flex items-center gap-1 text-blue-500">
              <ArrowRight size={16} />
              <span className="text-xs">+1</span>
            </div>
            <div className="flex items-center gap-1">
              <ArrowLeft size={16} />
              <span className="text-xs">-1</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}