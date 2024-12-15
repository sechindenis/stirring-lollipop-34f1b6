import { useState } from 'react';

interface UseCounterProps {
  initialCount?: number;
  initialGoal?: number;
  initialTempGoal?: number;
  onSuccess?: () => void;
}

export function useCounter({
  initialCount = 0,
  initialGoal = 0,
  initialTempGoal = 10,
  onSuccess
}: UseCounterProps = {}) {
  const [count, setCount] = useState(initialCount);
  const [goal, setGoal] = useState(initialGoal);
  const [tempGoal, setTempGoal] = useState(initialTempGoal);

  const handleTap = () => {
    if (goal > 0) {
      const newCount = Math.min(count + 1, goal);
      setCount(newCount);
      if (newCount === goal && onSuccess) {
        onSuccess();
      }
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
    handleTap,
    handleGoalChange,
    handleSetGoal
  };
}