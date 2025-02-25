import React, { useState } from 'react';
import { useExercises } from '../../contexts/ExerciseContext';
import ExerciseItem from './ExerciseItem';
import { Exercise } from '../../types';
import './ExerciseList.css';

const ExerciseList: React.FC = () => {
  const { exercises, loading, error } = useExercises();
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // FIXME Issue #4 filtering logic is broken
  const filteredExercises = exercises.filter((exercise: Exercise) => {
    const matchesDifficulty = filterDifficulty == 'all' || 
      exercise.difficulty == filterDifficulty;
    
    const matchesSearch = exercise.title.includes(searchTerm) ||
      exercise.description.includes(searchTerm);
    
    return matchesDifficulty && matchesSearch;
  });
  
  if (loading) {
    return <div className="loading-state">Loading exercises...</div>;
  }
  
  if (error) {
    return <div className="error-state">Error: {error}</div>;
  }
  
  return (
    <div className="exercise-list-container">
      <div className="exercise-list-header">
        <h2>Available Exercises</h2>
        <div className="exercise-filters">
          <input
            type="text"
            placeholder="Search exercises..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          
          <select 
            value={filterDifficulty} 
            onChange={(e) => setFilterDifficulty(e.target.value)}
            className="difficulty-select"
          >
            <option value="all">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>
      
      {filteredExercises.length > 0 ? (
        <div className="exercise-grid">
          {filteredExercises.map((exercise: Exercise) => (
            <ExerciseItem key={exercise.id} exercise={exercise} />
          ))}
        </div>
      ) : (
        <div className="no-exercises-found">
          <p>No exercises match your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ExerciseList;