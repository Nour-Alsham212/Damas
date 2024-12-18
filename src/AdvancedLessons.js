import React from 'react';
import './index.css';

const AdvancedLessons = () => {
  // Example progress data, you can replace this with dynamic data
  const progress = {
    lessonsCompleted: 4,
    totalLessons: 8,
    quizzesCompleted: 3,
    totalQuizzes: 4
  };

  return (
    <div className="lessons-page">
      <h2>Advanced Lessons</h2>
      <div className="lessons-content">
        <LessonPreviews />
        <h3 className="exercises-title">Advanced Exercises</h3>
        <Exercises category="Advanced" />
        <ProgressTracker progress={progress} />
      </div>
    </div>
  );
};

const LessonPreviews = () => (
  <div className="lessons-previews">
    <div className="lessons-preview">
      <h3>Arabic Alphabet</h3>
      <select>
        <option>Preview 1</option>
        <option>Preview 2</option>
      </select>
    </div>
    <div className="lessons-preview">
      <h3>Grammar</h3>
      <select>
        <option>Preview 1</option>
        <option>Preview 2</option>
      </select>
    </div>
    <div className="lessons-preview">
      <h3>Listening Practice</h3>
      <select>
        <option>Preview 1</option>
        <option>Preview 2</option>
      </select>
    </div>
  </div>
);

const Exercises = ({ category }) => (
  <div className="exercises">
    <div className="exercise">
      <h4>Arabic Alphabet Quiz</h4>
      <button className="quiz-button">Start Quiz</button>
    </div>
    <div className="exercise">
      <h4>Listening Practice Quiz</h4>
      <button className="quiz-button">Start Quiz</button>
    </div>
    <div className="exercise">
      <h4>Grammar Quiz</h4>
      <button className="quiz-button">Start Quiz</button>
    </div>
  </div>
);

const ProgressTracker = ({ progress }) => (
  <div className="progress-tracker">
    <h3>Progress</h3>
    <div className="progress-item">
      <p>Lessons Completed: {progress.lessonsCompleted} / {progress.totalLessons}</p>
      <progress value={progress.lessonsCompleted} max={progress.totalLessons}></progress>
      <p>{getProgressPercentage(progress.lessonsCompleted, progress.totalLessons).toFixed(2)}%</p>
    </div>
    <div className="progress-item">
      <p>Quizzes Completed: {progress.quizzesCompleted} / {progress.totalQuizzes}</p>
      <progress value={progress.quizzesCompleted} max={progress.totalQuizzes}></progress>
      <p>{getProgressPercentage(progress.quizzesCompleted, progress.totalQuizzes).toFixed(2)}%</p>
    </div>
  </div>
);

// Move this function outside the component
const getProgressPercentage = (completed, total) => {
  return (completed / total) * 100;
};

export default AdvancedLessons;
