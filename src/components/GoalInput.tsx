import React from 'react';

interface GoalInputProps {
  goal: number;
  onGoalChange: (goal: number) => void;
  onSetGoal: () => void;
  color: string;
}

export function GoalInput({ goal, onGoalChange, onSetGoal, color }: GoalInputProps) {
  const [inputValue, setInputValue] = React.useState(goal.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setInputValue('');
      onGoalChange(0);
      return;
    }
    const numValue = parseInt(value);
    if (!isNaN(numValue)) {
      setInputValue(numValue.toString());
      onGoalChange(numValue);
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        className={`px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:border-transparent w-32`}
        style={{ '--tw-ring-color': color } as React.CSSProperties}
        placeholder="Enter tap goal"
      />
      <button
        onClick={onSetGoal}
        className="px-4 py-2 text-white rounded-lg transition-colors hover:opacity-90"
        style={{ backgroundColor: color, '--tw-ring-color': color } as React.CSSProperties}
      >
        Set Goal
      </button>
    </div>
  );
}