import { DifficultyFormat, TestResult } from '../types';

// Format difficulty with color coding
export const formatDifficulty = (difficulty: string): DifficultyFormat => {
  const colors: Record<string, string> = {
    'easy': '#28a745',     // green
    'medium': '#ffc107',   // orange
    'hard': '#dc3545'      // red
  };
  
  return {
    text: difficulty,
    color: colors[difficulty] || '#6c757d'
  };
};

// Parse and prettify code
export const prettifyCode = (code: string): string => {
  // In a real app, you might use something like prettier here
  return code;
};

// Check if an object is empty
export const isEmpty = (obj: Record<string, any>): boolean => {
  return Object.keys(obj).length === 0;
};

// Generate a unique ID for components that need it
export const generateId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

// Format timestamp to human readable date
export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Format test case results for display
export const formatTestResults = (results: any[] | null): TestResult[] => {
  if (!results || !Array.isArray(results)) return [];
  
  return results.map((result, index) => ({
    id: index,
    passed: result.passed,
    message: result.message || (result.passed ? 'Test passed' : 'Test failed'),
    expected: JSON.stringify(result.expected),
    actual: JSON.stringify(result.actual)
  }));
};