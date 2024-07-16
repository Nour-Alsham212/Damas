import React, { useState } from 'react';

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
    setFilters({
      history: false,
      literature: false,
      customs: false,
    });
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
          <button onClick={clearFilters}>Clear Filters</button>
          <div>
            <label>
              <input
                type="checkbox"
                checked={filters.history}
                onChange={() => handleFilterChange('history')}
              />
              History
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={filters.literature}
                onChange={() => handleFilterChange('literature')}
              />
              Literature
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={filters.customs}
                onChange={() => handleFilterChange('customs')}
              />
              Customs
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;
