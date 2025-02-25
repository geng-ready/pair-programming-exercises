import { Exercise, SubmitResult } from '../types';

// This simulates fetching exercises from an API
export const fetchExercises = async (): Promise<Exercise[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return [
    {
      id: 1,
      title: 'Array Manipulation',
      difficulty: 'Easy',
      description: 'Create functions to filter, map, and reduce arrays with various conditions.',
      tasks: [
        'Implement a function to filter even numbers from an array',
        'Create a function to double all numbers in an array',
        'Write a function to sum all numbers in an array'
      ],
      starterCode: `// Function to filter even numbers
const filterEven = (numbers: number[]): number[] => {
  // Your code here
  return [];
};

// Function to double all numbers
const doubleNumbers = (numbers: number[]): number[] => {
  // Your code here
  return [];
};

// Function to sum all numbers
const sumArray = (numbers: number[]): number => {
  // Your code here
  return 0;
};

export { filterEven, doubleNumbers, sumArray };`,
      testCases: [
        { input: [1, 2, 3, 4, 5], expected: [2, 4] }, 
        { input: [1, 2, 3, 4, 5], expected: [2, 4, 6, 8, 10] },
        { input: [1, 2, 3, 4, 5], expected: 15 }
      ]
    },
    {
      id: 2,
      title: 'String Manipulation',
      difficulty: 'Medium',
      description: 'Create functions to transform and analyze strings in various ways.',
      tasks: [
        'Implement a function to reverse a string',
        'Create a function to count the occurrences of each character in a string',
        'Write a function to check if a string is a palindrome'
      ],
      starterCode: `// Function to reverse a string
const reverseString = (str: string): string => {
  // Your code here
  return '';
};

// Function to count character occurrences
const countCharacters = (str: string): Record<string, number> => {
  // Your code here
  return {};
};

// Function to capitalize the first letter of each word
const capitalizeWords = (str: string): string => {
  // Your code here
  return '';
};

export { reverseString, countCharacters, isPalindrome };`,
      testCases: [
        { input: 'hello', expected: 'olleh' },
        { input: 'aabb', expected: { a: 2, b: 2 } },
        { input: 'hello world javascript', expected: 'Hello World Javascript' }
      ]
    },
    {
      id: 3,
      title: 'Async Data Fetching',
      difficulty: 'Hard',
      description: 'Implement functions to handle asynchronous data fetching with error handling and state management.',
      tasks: [
        'Create a function to fetch data from an API endpoint',
        'Implement error handling for failed requests',
        'Add a cache mechanism to prevent duplicate requests'
      ],
      starterCode: `// Function to fetch data with caching
const fetchWithCache = (url: string): Promise<any> => {
  // Your code here
  return Promise.resolve();
};

// Function to handle errors in fetching
const fetchWithErrorHandling = async (url: string): Promise<any> => {
  // Your code here
  return Promise.resolve();
};

// Function to fetch multiple resources in parallel
const fetchMultiple = (urls: string[]): Promise<any[]> => {
  // Your code here
  return Promise.resolve([]);
};

export { fetchWithCache, fetchWithErrorHandling, fetchMultiple };`,
      testCases: [
        { input: 'https://api.example.com/data', expected: 'Success' },
        { input: 'https://api.example.com/error', expected: 'Error handled' },
        { input: ['url1', 'url2', 'url3'], expected: 'All fetched' }
      ]
    }
  ];
};

// Function to simulate submitting a solution
export const submitSolution = async (exerciseId: number, solution: string): Promise<SubmitResult> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  // For demo purposes, always return success
  return {
    success: true,
    message: 'Solution submitted successfully!'
  };
};