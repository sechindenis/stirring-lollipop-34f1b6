import { doc, setDoc, getDoc, DocumentData } from 'firebase/firestore';
import { db } from '../config/firebase';

export interface UserProgress {
  tapSuccesses: number;
  swipeSuccesses: number;
}

export const saveProgress = async (userId: string, progress: UserProgress) => {
  try {
    await setDoc(doc(db, 'progress', userId), progress);
  } catch (error) {
    console.error('Error saving progress:', error);
  }
};

export const getProgress = async (userId: string): Promise<UserProgress> => {
  try {
    const docRef = doc(db, 'progress', userId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data() as UserProgress;
      return data;
    }
    
    return { tapSuccesses: 0, swipeSuccesses: 0 };
  } catch (error) {
    console.error('Error getting progress:', error);
    return { tapSuccesses: 0, swipeSuccesses: 0 };
  }
};