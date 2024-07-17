import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faBook, faGlobe, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';

const Culture = () => {
  const [filters, setFilters] = useState({
    history: false,
    literature: false,
    customs: false,
  });

  const content = [
    { id: 1, title: 'History of Damascus', summary: 'Explore the rich history of Damascus.' },
    { id: 2, title: 'Arabic Calligraphy', summary: 'Learn the art of Arabic calligraphy.' },
    { id: 3, title: 'Cultural Festivals', summary: 'Discover the vibrant cultural festivals.' },
    { id: 4, title: 'Poetry in Damascus', summary: 'Understand the poetry in Damascus.' },
    { id: 5, title: 'Traditional Music', summary: 'Listen to the traditional music.' },
    { id: 6, title: 'Historical Sites', summary: 'Visit the historical sites.' },
    { id: 7, title: 'Arabic Literature', summary: 'Dive into the world of Arabic literature.' },
    { id: 8, title: 'Literary Customs', summary: 'Explore the customs surrounding Arabic literature.' },
    { id: 9, title: 'Traditional Customs', summary: 'Learn about traditional customs in Damascus.' },
    { id: 10, title: 'Modern Literature', summary: 'Discover the modern literature scene in Damascus.' },
    // Add more content as needed
  ];

  const handleFilterChange = (filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  const clearFilters = () => {
    if (window.confirm('Are you sure you want to clear all filters?')) {
      setFilters({
        history: false,
        literature: false,
        customs: false,
      });
    }
  };

  const filteredContent = content.filter((item) => {
    if (filters.history && !item.title.toLowerCase().includes('history')) return false;
    if (filters.literature && !item.title.toLowerCase().includes('literature')) return false;
    if (filters.customs && !item.title.toLowerCase().includes('customs')) return false;
    return true;
  });

  return (
    <div className="culture-page">
      <h1>Culture</h1>
      <div className="culture-container">
        <div className="content-previews">
          <h2>Content Previews</h2>
          <div className="scrollbar">
            {filteredContent.map((item) => (
              <div key={item.id} className="content-preview">
                <img src="path_to_placeholder_image" alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="filter-section">
          <h2>Filters</h2>
          <button onClick={clearFilters} data-tooltip-id="clear-filters-tooltip">
            <FontAwesomeIcon icon={faTimes} /> Clear Filters
          </button>
          <Tooltip id="clear-filters-tooltip" place="top" effect="solid">
            Clear all filters
          </Tooltip>
          <div>
            <label data-tooltip-id="history-tooltip">
              <input
                type="checkbox"
                checked={filters.history}
                onChange={() => handleFilterChange('history')}
              />
              <FontAwesomeIcon icon={faHistory} /> History
            </label>
            <Tooltip id="history-tooltip" place="right" effect="solid">
              Filter by history
            </Tooltip>
          </div>
          <div>
            <label data-tooltip-id="literature-tooltip">
              <input
                type="checkbox"
                checked={filters.literature}
                onChange={() => handleFilterChange('literature')}
              />
              <FontAwesomeIcon icon={faBook} /> Literature
            </label>
            <Tooltip id="literature-tooltip" place="right" effect="solid">
              Filter by literature
            </Tooltip>
          </div>
          <div>
            <label data-tooltip-id="customs-tooltip">
              <input
                type="checkbox"
                checked={filters.customs}
                onChange={() => handleFilterChange('customs')}
              />
              <FontAwesomeIcon icon={faGlobe} /> Customs
            </label>
            <Tooltip id="customs-tooltip" place="right" effect="solid">
              Filter by customs
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;
