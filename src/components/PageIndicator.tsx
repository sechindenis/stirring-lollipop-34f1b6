import React from 'react';

interface PageIndicatorProps {
  currentPage: number;
  totalPages: number;
}

export function PageIndicator({ currentPage, totalPages }: PageIndicatorProps) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: totalPages }).map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full transition-colors ${
            index === currentPage
              ? 'bg-gray-800'
              : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
}