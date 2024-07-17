import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChalkboardTeacher, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import './index.css';

const Lessons = () => {
  const [activeCategory, setActiveCategory] = useState('');
  const [progress, setProgress] = useState({
    Beginner: 0,
    Intermediate: 50,
    Advanced: 20,
  });
  const [errors, setErrors] = useState({});

  const handleCategoryChange = (category) => {
    if (category) {
      setActiveCategory(category);
      setErrors({});
    }
  };

  const handleQuizCompletion = (category) => {
    setProgress((prevProgress) => ({
      ...prevProgress,
      [category]: prevProgress[category] + 10,
    }));
  };

  const handleSubmit = () => {
    if (!activeCategory) {
      setErrors({ category: 'Please select a lesson category to continue.' });
    } else {
      // Handle the submit action here
    }
  };

  return (
    <div className="lessons-page">
      <div className="lessons-categories">
        <button
          className={activeCategory === 'Beginner' ? 'active' : ''}
          onClick={() => handleCategoryChange('Beginner')}
          data-tooltip-id="beginner-tooltip"
        >
          <FontAwesomeIcon icon={faBook} /> Beginner
        </button>
        <Tooltip id="beginner-tooltip" place="top" effect="solid">
          Click to see beginner lessons
        </Tooltip>

        <button
          className={activeCategory === 'Intermediate' ? 'active' : ''}
          onClick={() => handleCategoryChange('Intermediate')}
          data-tooltip-id="intermediate-tooltip"
        >
          <FontAwesomeIcon icon={faChalkboardTeacher} /> Intermediate
        </button>
        <Tooltip id="intermediate-tooltip" place="top" effect="solid">
          Click to see intermediate lessons
        </Tooltip>

        <button
          className={activeCategory === 'Advanced' ? 'active' : ''}
          onClick={() => handleCategoryChange('Advanced')}
          data-tooltip-id="advanced-tooltip"
        >
          <FontAwesomeIcon icon={faHeadphones} /> Advanced
        </button>
        <Tooltip id="advanced-tooltip" place="top" effect="solid">
          Click to see advanced lessons
        </Tooltip>
      </div>

      {errors.category && <p className="error-message">{errors.category}</p>}

      <div className="category-content">
        {activeCategory === 'Beginner' && (
          <div>
            <h2>Beginner Lessons</h2>
            <LessonPreviews />
            <h3 className="exercises-title">Beginner Exercises</h3>
            <Exercises category="Beginner" onComplete={() => handleQuizCompletion('Beginner')} />
          </div>
        )}
        {activeCategory === 'Intermediate' && (
          <div>
            <h2>Intermediate Lessons</h2>
            <LessonPreviews />
            <h3 className="exercises-title">Intermediate Exercises</h3>
            <Exercises category="Intermediate" onComplete={() => handleQuizCompletion('Intermediate')} />
          </div>
        )}
        {activeCategory === 'Advanced' && (
          <div>
            <h2>Advanced Lessons</h2>
            <LessonPreviews />
            <h3 className="exercises-title">Advanced Exercises</h3>
            <Exercises category="Advanced" onComplete={() => handleQuizCompletion('Advanced')} />
          </div>
        )}
      </div>

      <div className="progress-tracker">
        <h3>Progress</h3>
        <ProgressIndicator category="Beginner" progress={progress.Beginner} />
        <ProgressIndicator category="Intermediate" progress={progress.Intermediate} />
        <ProgressIndicator category="Advanced" progress={progress.Advanced} />
      </div>

      <button onClick={handleSubmit} data-tooltip-id="submit-tooltip">Submit</button>
      <Tooltip id="submit-tooltip" place="top" effect="solid">
        Submit your progress
      </Tooltip>
    </div>
  );
};

const LessonPreviews = () => (
  <div className="lessons-previews">
    <div className="lessons-preview" data-tooltip-id="alphabet-tooltip">
      <h3>Arabic Alphabet</h3>
      <select>
        <option>Preview 1</option>
        <option>Preview 2</option>
      </select>
      <Tooltip id="alphabet-tooltip" place="top" effect="solid">
        Learn the Arabic Alphabet
      </Tooltip>
    </div>
    <div className="lessons-preview" data-tooltip-id="grammar-tooltip">
      <h3>Grammar</h3>
      <select>
        <option>Preview 1</option>
        <option>Preview 2</option>
      </select>
      <Tooltip id="grammar-tooltip" place="top" effect="solid">
        Learn Arabic Grammar
      </Tooltip>
    </div>
    <div className="lessons-preview" data-tooltip-id="listening-tooltip">
      <h3>Listening Practice</h3>
      <select>
        <option>Preview 1</option>
        <option>Preview 2</option>
      </select>
      <Tooltip id="listening-tooltip" place="top" effect="solid">
        Practice Listening in Arabic
      </Tooltip>
    </div>
  </div>
);

const Exercises = ({ category, onComplete }) => (
  <div className="exercises">
    <div className="exercise" data-tooltip-id="alphabet-quiz-tooltip">
      <h4>Arabic Alphabet Quiz</h4>
      <button className="start-quiz-btn" onClick={onComplete}>Start Quiz</button>
      <Tooltip id="alphabet-quiz-tooltip" place="top" effect="solid">
        Test your knowledge of the Arabic Alphabet
      </Tooltip>
    </div>
    <div className="exercise" data-tooltip-id="listening-quiz-tooltip">
      <h4>Listening Practice Quiz</h4>
      <button className="start-quiz-btn" onClick={onComplete}>Start Quiz</button>
      <Tooltip id="listening-quiz-tooltip" place="top" effect="solid">
        Test your listening skills in Arabic
      </Tooltip>
    </div>
    <div className="exercise" data-tooltip-id="grammar-quiz-tooltip">
      <h4>Grammar Quiz</h4>
      <button className="start-quiz-btn" onClick={onComplete}>Start Quiz</button>
      <Tooltip id="grammar-quiz-tooltip" place="top" effect="solid">
        Test your knowledge of Arabic Grammar
      </Tooltip>
    </div>
  </div>
);

const ProgressIndicator = ({ category, progress }) => (
  <div className="progress-item">
    <p>{category} Progress: {progress}%</p>
    <progress value={progress} max="100"></progress>
  </div>
);

export default Lessons;
