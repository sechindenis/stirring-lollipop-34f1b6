import React from 'react';
import { Trophy } from 'lucide-react';
import { UserProgress } from '../../services/progressService';

interface ProgressStatsProps {
  progress: UserProgress;
}

export function ProgressStats({ progress }: ProgressStatsProps) {
  return (
    <div className="flex gap-6">
      <div className="flex items-center gap-2">
        <Trophy size={20} className="text-blue-500" />
        <span className="text-gray-600">Taps: {progress.tapSuccesses}</span>
      </div>
      <div className="flex items-center gap-2">
        <Trophy size={20} className="text-pink-500" />
        <span className="text-gray-600">Swipes: {progress.swipeSuccesses}</span>
      </div>
    </div>
  );
}