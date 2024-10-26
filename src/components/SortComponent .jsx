import React from 'react'

export default function SortComponent () {
    const SortComponent = () => {
        // State to track the current sorting order, 'asc' for ascending, 'desc' for descending
        const [sortOrder, setSortOrder] = useState('asc');
      
        // Function to toggle between ascending and descending
        const toggleSortOrder = () => {
          setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
        };
  return (

 
    <div>
      <h3>Current Sort: {sortOrder === 'asc' ? 'Ascending' : 'Descending'}</h3>
      <div className="sort-icons" onClick={toggleSortOrder}>
        {sortOrder === 'asc' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 384 512"
            className="arrow up-arrow"
          >
            <title>Ascending</title>
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 384 512"
            className="arrow down-arrow"
          >
            <title>Descending</title>
            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        )}
      </div>
    </div>
  );
};

    
  
}
