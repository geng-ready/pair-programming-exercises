import React, { useState } from 'react';
import { useExercises } from '../../contexts/ExerciseContext';
import { formatDifficulty } from '../../utils/helpers';
import { Exercise } from '../../types';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const { exercises, loading, selectExercise, currentExercise } = useExercises();
  const [filter, setFilter] = useState<string>('all');
  
  const handleExerciseSelect = (exerciseId: number): void => {
    selectExercise(exerciseId);
  };
  
  // FIXME Issue #4 filtering logic is broken
  const filteredExercises = exercises.filter((exercise: Exercise) => {
    if (filter == 'all') return true;
    return exercise.difficulty == filter;
  });
  
  if (loading) {
    return <div className="sidebar loading">Loading exercises...</div>;
  }
  
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Exercises</h2>
        <div className="filter-controls">
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="difficulty-filter"
          >
            <option value="all">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>
      
      <ul className="exercise-list">
        {filteredExercises.map((exercise: Exercise) => {
          const difficulty = formatDifficulty(exercise.difficulty);
          const isActive = currentExercise && currentExercise.id === exercise.id;
          
          return (
            <li 
              key={exercise.id}
              className={`exercise-item ${isActive ? 'active' : ''}`}
              onClick={() => handleExerciseSelect(exercise.id)}
            >
              <span className="exercise-title">{exercise.title}</span>
              <span 
                className="exercise-difficulty" 
                style={{ color: difficulty.color }}
              >
                {difficulty.text}
              </span>
            </li>
          );
        })}
      </ul>
      
      {filteredExercises.length === 0 && (
        <div className="no-exercises">
          No exercises match your filter criteria.
        </div>
      )}
    </div>
  );
};

export default Sidebar;