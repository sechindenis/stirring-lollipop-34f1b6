import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PageIndicator } from './PageIndicator';

interface NavigationProps {
  currentPage: number;
  totalPages: number;
  onScroll: (direction: 'left' | 'right') => void;
}

export function Navigation({ currentPage, totalPages, onScroll }: NavigationProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={() => onScroll('left')}
        className="p-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 flex items-center"
        disabled={currentPage === 0}
      >
        <ChevronLeft size={24} />
      </button>

      <PageIndicator
        currentPage={currentPage}
        totalPages={totalPages}
      />

      <button
        onClick={() => onScroll('right')}
        className="p-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 flex items-center"
        disabled={currentPage === totalPages - 1}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}