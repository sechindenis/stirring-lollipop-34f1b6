export interface BaseCounter {
  count: number;
  goal: number;
  tempGoal: number;
  color: string;
  title: string;
  handleGoalChange: (value: number) => void;
  handleSetGoal: () => void;
}

export interface TapCounter extends BaseCounter {
  type: 'tap';
  handleTap: () => void;
}

export interface SwipeCounter extends BaseCounter {
  type: 'swipe';
  handleSwipe: (direction: 'left' | 'right') => void;
}

export type Counter = TapCounter | SwipeCounter;