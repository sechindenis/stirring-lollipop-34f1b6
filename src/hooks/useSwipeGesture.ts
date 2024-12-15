import { useEffect, useRef } from 'react';

interface SwipeConfig {
  onSwipe: (direction: 'left' | 'right') => void;
  threshold?: number;
  elementId: string;
}

export function useSwipeGesture({ onSwipe, threshold = 50, elementId }: SwipeConfig) {
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now()
      };
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current) return;

      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;
      const deltaTime = Date.now() - touchStartRef.current.time;

      // Only trigger for quick swipes (less than 300ms)
      // and when the horizontal movement is more significant than vertical
      if (deltaTime < 300 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (Math.abs(deltaX) >= threshold) {
          e.preventDefault();
          onSwipe(deltaX > 0 ? 'right' : 'left');
        }
      }

      touchStartRef.current = null;
    };

    const element = document.getElementById(elementId);
    if (element) {
      element.addEventListener('touchstart', handleTouchStart);
      element.addEventListener('touchend', handleTouchEnd);

      return () => {
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [onSwipe, threshold, elementId]);

  return null;
}