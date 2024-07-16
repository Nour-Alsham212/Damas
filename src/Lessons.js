import React, { useState } from 'react';


const Lessons = () => {
  const [activeCategory, setActiveCategory] = useState('Intermediate');

  return (
    <div className="lessons-page">
      {/* Lesson Categories */}
      <div className="lessons-categories">
        <button
          className={activeCategory === 'Beginner' ? 'active' : ''}
          onClick={() => setActiveCategory('Beginner')}
        >
          Beginner
        </button>
        <button
          className={activeCategory === 'Intermediate' ? 'active' : ''}
          onClick={() => setActiveCategory('Intermediate')}
        >
          Intermediate
        </button>
        <button
          className={activeCategory === 'Advanced' ? 'active' : ''}
          onClick={() => setActiveCategory('Advanced')}
        >
          Advanced
        </button>
      </div>

      <div className="category-content">
        {activeCategory === 'Beginner' && (
          <div>
            <h2>Beginner Lessons</h2>
            <LessonPreviews />
            <h3 className="exercises-title">Beginner Exercises</h3>
            <Exercises category="Beginner" />
          </div>
        )}
        {activeCategory === 'Intermediate' && (
          <div>
            <h2>Intermediate Lessons</h2>
            <LessonPreviews />
            <h3 className="exercises-title">Intermediate Exercises</h3>
            <Exercises category="Intermediate" />
          </div>
        )}
        {activeCategory === 'Advanced' && (
          <div>
            <h2>Advanced Lessons</h2>
            <LessonPreviews />
            <h3 className="exercises-title">Advanced Exercises</h3>
            <Exercises category="Advanced" />
          </div>
        )}
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
      <button>Start Quiz</button>
    </div>
    <div className="exercise">
      <h4>Listening Practice Quiz</h4>
      <button>Start Quiz</button>
    </div>
    <div className="exercise">
      <h4>Grammar Quiz</h4>
      <button>Start Quiz</button>
    </div>
  </div>
);

export default Lessons;
