import { useState, useEffect } from 'react';
import { UserProgress, getProgress, saveProgress } from '../services/progressService';
import { useAuth } from '../contexts/AuthContext';

export function useProgress() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<UserProgress>({
    tapSuccesses: 0,
    swipeSuccesses: 0,
  });

  useEffect(() => {
    if (user) {
      getProgress(user.uid).then(setProgress);
    }
  }, [user]);

  const updateProgress = async (type: 'tap' | 'swipe') => {
    if (!user) return;

    const newProgress = {
      ...progress,
      [type === 'tap' ? 'tapSuccesses' : 'swipeSuccesses']: 
        progress[type === 'tap' ? 'tapSuccesses' : 'swipeSuccesses'] + 1
    };

    setProgress(newProgress);
    await saveProgress(user.uid, newProgress);
  };

  return { progress, updateProgress };
}