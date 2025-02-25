import React from "react";
import { useExercises } from "../../contexts/ExerciseContext";
import { formatDifficulty } from "../../utils/helpers";
import { Exercise } from "../../types";
import "./ExerciseItem.css";

// FIXME Issue #1: fix type for ExerciseItemProps
interface ExerciseItemProps {
  exercise: Exercise;
}

const ExerciseItem: React.FC<ExerciseItemProps> = ({ exercise }) => {
  const { setView } = useExercises();
  const { title, difficulty, description, tasks } = exercise;

  const difficultyInfo = formatDifficulty(difficulty);

  const handleCardClick = (): void => {
    console.log(`Exercise card clicked`);
  };

  // FIXME Issue #3: button click not working
  const handleStartClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(`Start button clicked`);
    setView("");
  };

  return (
    <div className="exercise-item" onClick={handleCardClick}>
      <div className="exercise-header">
        <h3 className="exercise-title">{title}</h3>
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
        <h4>Tasks ({tasks.length})</h4>
        <ul>
          {tasks.slice(0, 2).map((task: string, index: number) => (
            <li key={index}>{task}</li>
          ))}
          {tasks.length > 2 && <li>...and {tasks.length - 2} more</li>}
        </ul>
      </div>

      <div className="exercise-footer">
        <button className="btn-start" onClick={handleStartClick}>
          Start Exercise
        </button>
      </div>
    </div>
  );
};

export default ExerciseItem;
