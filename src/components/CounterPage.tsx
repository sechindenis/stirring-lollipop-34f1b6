import React from 'react';
import { TapRingCounter } from './TapRingCounter';
import { SwipeRingCounter } from './SwipeRingCounter';
import { GoalInput } from './GoalInput';
import { ProgressMessage } from './ProgressMessage';
import { type Counter } from '../types/counter';

interface CounterPageProps {
  counter: Counter;
}

export function CounterPage({ counter }: CounterPageProps) {
  const { color, title, count, goal, tempGoal, handleGoalChange, handleSetGoal } = counter;

  return (
    <div className="w-full px-4 flex flex-col items-center gap-6">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      
      <GoalInput 
        goal={tempGoal}
        onGoalChange={handleGoalChange}
        onSetGoal={handleSetGoal}
        color={color}
      />
      
      {counter.type === 'tap' ? (
        <TapRingCounter 
          count={count}
          goal={goal}
          onClick={counter.handleTap}
          color={color}
        />
      ) : (
        <SwipeRingCounter 
          count={count}
          goal={goal}
          onSwipe={counter.handleSwipe}
          color={color}
          title={title}
        />
      )}
      
      <ProgressMessage 
        count={count}
        goal={goal}
        color={color}
      />
    </div>
  );
}