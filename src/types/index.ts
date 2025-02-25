export type Difficulty = 'Easy' | 'Medium' | 'Hard';

// Exercise-related types
export interface Exercise {
  id: number;
  title: string;
  difficulty: Difficulty;
  description: string;
  tasks: string[];
  starterCode: string;
  testCases: TestCase[];
}

export interface TestCase {
  input: any;
  expected: any;
}

export interface TestResult {
  id: number;
  passed: boolean;
  expected: any;
  actual: any;
  message: string;
}

export interface SubmitResult {
  success: boolean;
  message: string;
}

// Utility function return types
export interface DifficultyFormat {
  text: string;
  color: string;
}

// Context types
export interface ExerciseContextType {
  exercises: Exercise[];
  currentExercise: Exercise | null;
  loading: boolean;
  error: string | null;
  selectExercise: (exerciseId: number) => void;
  view: string;
  setView: (view: string) => void;
}