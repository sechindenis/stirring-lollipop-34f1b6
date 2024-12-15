import React, { useRef } from 'react';
import { CounterPage } from './CounterPage';
import { Navigation } from './Navigation';
import { useCounter } from '../hooks/useCounter';
import { useSwipeCounter } from '../hooks/useSwipeCounter';
import { type Counter } from '../types/counter';
import { AuthForm } from './auth/AuthForm';
import { UserMenu } from './auth/UserMenu';
import { useAuth } from '../contexts/AuthContext';
import { ProgressStats } from './progress/ProgressStats';
import { useProgress } from '../hooks/useProgress';

export function CounterApp() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  const { progress, updateProgress } = useProgress();

  const blueCounter = useCounter({
    onSuccess: () => updateProgress('tap')
  });
  
  const pinkCounter = useSwipeCounter({
    onSuccess: () => updateProgress('swipe')
  });
  
  const counters: Counter[] = [
    { 
      ...blueCounter, 
      type: 'tap',
      color: '#3b82f6', 
      title: 'Blue Counter' 
    },
    { 
      ...pinkCounter, 
      type: 'swipe',
      color: '#ec4899', 
      title: 'Pink Counter' 
    }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    
    const newPage = direction === 'left' ? 
      Math.max(0, currentPage - 1) : 
      Math.min(1, currentPage + 1);
    
    setCurrentPage(newPage);
    containerRef.current.scrollTo({
      left: newPage * containerRef.current.clientWidth,
      behavior: 'smooth'
    });
  };

  if (!user) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50">
        <AuthForm />
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 flex justify-between items-center">
        <UserMenu />
        <ProgressStats progress={progress} />
      </div>

      <div 
        ref={containerRef}
        className="flex-1 w-full overflow-hidden"
      >
        <div className="h-full flex transition-transform duration-300">
          {counters.map((counter, index) => (
            <div key={index} className="h-full w-full flex-shrink-0 flex items-center justify-center">
              <CounterPage counter={counter} />
            </div>
          ))}
        </div>
      </div>

      <div className="py-6">
        <Navigation
          currentPage={currentPage}
          totalPages={counters.length}
          onScroll={handleScroll}
        />
      </div>
    </div>
  );
}