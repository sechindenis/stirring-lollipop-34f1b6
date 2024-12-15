import { useState } from 'react';

interface UseSwipeCounterProps {
  initialCount?: number;
  initialGoal?: number;
  initialTempGoal?: number;
  onSuccess?: () => void;
}

export function useSwipeCounter({
  initialCount = 0,
  initialGoal = 0,
  initialTempGoal = 10,
  onSuccess
}: UseSwipeCounterProps = {}) {
  const [count, setCount] = useState(initialCount);
  const [goal, setGoal] = useState(initialGoal);
  const [tempGoal, setTempGoal] = useState(initialTempGoal);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (goal > 0) {
      setCount(prev => {
        const newCount = direction === 'right' ?
          Math.min(prev + 1, goal) :
          Math.max(prev - 1, 0);
        
        if (newCount === goal && onSuccess) {
          onSuccess();
        }
        
        return newCount;
      });
    }
  };

  const handleGoalChange = (value: number) => {
    setTempGoal(value);
  };

  const handleSetGoal = () => {
    if (tempGoal > 0) {
      setGoal(tempGoal);
      setCount(0);
    } else {
      setGoal(0);
      setCount(0);
    }
  };

  return {
    count,
    goal,
    tempGoal,
    handleSwipe,
    handleGoalChange,
    handleSetGoal
  };
}