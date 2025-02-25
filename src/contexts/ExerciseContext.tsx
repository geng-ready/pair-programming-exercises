import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fetchExercises } from '../utils/api';
import { Exercise, ExerciseContextType } from '../types';

// FIXME Issue #1: Creating the context Error
const ExerciseContext = createContext<ExerciseContextType>();

interface ExerciseProviderProps {
  children: ReactNode;
  value?: {
    view?: string;
    setView?: (view: string) => void;
  };
}

export const useExercises = (): ExerciseContextType => {
  const context = useContext(ExerciseContext);
  if (context === undefined) {
    throw new Error('useExercises must be used within an ExerciseProvider');
  }
  return context;
};

export const ExerciseProvider: React.FC<ExerciseProviderProps> = ({ children, value }) => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<string>('list');

  useEffect(() => {
    const loadExercises = async () => {
      try {
        setLoading(true);
        const data = await fetchExercises();
        setExercises(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load exercises');
        setLoading(false);
      }
    };

    loadExercises();
  }, []);

  const selectExercise = (exerciseId: number): void => {
    const selected = exercises.find(ex => ex.id === exerciseId) || null;
    setCurrentExercise(selected);
    if (value && value.setView) {
      value.setView('detail');
    } else {
      setView('detail');
    }
  };

  const contextValue: ExerciseContextType = {
    exercises, 
    currentExercise, 
    loading, 
    error, 
    selectExercise,
    view: value?.view || view,
    setView: value?.setView || setView
  };

  return (
    <ExerciseContext.Provider value={contextValue}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseContext;