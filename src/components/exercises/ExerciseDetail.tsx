import React, { useState, useEffect } from 'react';
import { useExercises } from '../../contexts/ExerciseContext';
import { formatDifficulty } from '../../utils/helpers';
import { submitSolution } from '../../utils/api';
import { TestResult } from '../../types';
import './ExerciseDetail.css';

const ExerciseDetail: React.FC = () => {
  const { currentExercise } = useExercises();
  const [code, setCode] = useState<string>('');
  const [testResults, setTestResults] = useState<TestResult[] | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');
  
  // Set starter code when exercise changes
  useEffect(() => {
    if (currentExercise) {
      setCode(currentExercise.starterCode);
      setTestResults(null);
      setSuccessMessage('');
    }
  }, [currentExercise]);
  
  if (!currentExercise) {
    return (
      <div className="exercise-detail-empty">
        <h2>Select an exercise to begin</h2>
        <p>Choose an exercise from the list to start coding.</p>
      </div>
    );
  }
  
  const { title, difficulty, description, tasks, starterCode, testCases } = currentExercise;
  const difficultyInfo = formatDifficulty(difficulty);
  
  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setCode(e.target.value);
  };
  
  const handleResetCode = (): void => {
    setCode(starterCode);
    setTestResults(null);
    setSuccessMessage('');
  };
  
  const runTests = (): void => {
    // In a real app, this would execute the code against test cases
    // For demo purposes, we'll simulate test results based on code changes
    const codeHasChanged = code !== starterCode;
    const simulatedResults: TestResult[] = testCases.map((testCase, index) => {
      // Generate a different result for each test case
      // More likely to pass if code has been modified
      const passed = codeHasChanged 
        ? Math.random() > 0.3 
        : false; // Always fail if using starter code
      
      // Create a realistic actual value
      let actual;
      if (passed) {
        actual = testCase.expected;
      } else {
        // Generate a "wrong" value based on expected type
        if (Array.isArray(testCase.expected)) {
          actual = testCase.expected.length > 0 ? testCase.expected.slice(0, -1) : [];
        } else if (typeof testCase.expected === 'object' && testCase.expected !== null) {
          actual = Object.keys(testCase.expected).length > 0 
            ? { ...testCase.expected, wrongKey: 'wrong value' } 
            : {};
        } else if (typeof testCase.expected === 'number') {
          actual = testCase.expected + Math.floor(Math.random() * 10) + 1;
        } else if (typeof testCase.expected === 'string') {
          actual = testCase.expected + '_wrong';
        } else if (typeof testCase.expected === 'boolean') {
          actual = !testCase.expected;
        } else {
          actual = null;
        }
      }
      
      return {
        id: index,
        passed,
        expected: testCase.expected,
        actual,
        message: passed 
          ? 'Test passed!' 
          : `Test failed: ${typeof testCase.expected === 'object' 
              ? 'Incorrect result object' 
              : `Expected ${JSON.stringify(testCase.expected)} but got ${JSON.stringify(actual)}`}`
      };
    });
    
    setTestResults(simulatedResults);
  };
  
  const handleSubmit = async (): Promise<void> => {
    setSubmitting(true);
    try {
      const result = await submitSolution(currentExercise.id, code);
      if (result.success) {
        setSuccessMessage(result.message);
      }
    } catch (error) {
      console.error('Failed to submit solution:', error);
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <div className="exercise-detail">
      <div className="exercise-header">
        <h2>{title}</h2>
        <span 
          className="difficulty-badge"
          style={{ backgroundColor: difficultyInfo.color }}
        >
          {difficultyInfo.text}
        </span>
      </div>
      
      <div className="exercise-description">
        <p>{description}</p>
      </div>
      
      <div className="exercise-tasks">
        <h3>Tasks:</h3>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
      
      <div className="code-editor">
        <div className="code-editor-header">
          <h3>Code Editor</h3>
          <button 
            className="btn-reset" 
            onClick={handleResetCode}
          >
            Reset Code
          </button>
        </div>
        <textarea
          value={code}
          onChange={handleCodeChange}
          className="code-textarea"
          rows={15}
        />
      </div>
      
      <div className="exercise-actions">
        <button 
          className="btn-run-tests" 
          onClick={runTests}
        >
          Run Tests
        </button>
        <button 
          className="btn-submit"
          onClick={handleSubmit} 
          disabled={submitting}
        >
          {submitting ? 'Submitting...' : 'Submit Solution'}
        </button>
      </div>
      
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
      
      {testResults && (
        <div className="test-results">
          <h3>Test Results</h3>
          <div className="results-list">
            {testResults.map(result => (
              <div 
                key={result.id} 
                className={`result-item ${result.passed ? 'passed' : 'failed'}`}
              >
                <div className="result-status">
                  {result.passed ? '✅ Passed' : '❌ Failed'}
                </div>
                <div className="result-message">{result.message}</div>
                <div className="result-details">
                  <div className="expected">
                    <strong>Expected:</strong> {result.expected}
                  </div>
                  <div className="actual">
                    <strong>Actual:</strong> {result.actual}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseDetail;