import React from 'react';

interface ProgressMessageProps {
  count: number;
  goal: number;
  color: string;
}

export function ProgressMessage({ count, goal, color }: ProgressMessageProps) {
  if (goal === 0) {
    return (
      <p className="text-gray-500 italic">
        Set a goal above to start tapping!
      </p>
    );
  }
  
  const progress = (count / goal) * 100;
  
  if (count >= goal) {
    return <p className="text-green-600 font-semibold">Goal achieved! 🎉</p>;
  }
  
  return (
    <p style={{ color }}>
      {progress >= 75 ? 'Almost there! Keep going!' :
       progress >= 50 ? 'Halfway there! You\'re doing great!' :
       progress >= 25 ? 'Good progress! Keep it up!' :
       'Just getting started! Tap away!'}
    </p>
  );
}