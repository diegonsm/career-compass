import React, { useState } from 'react';

// Example data for job/event/blog postings
const postings = [
  {
    id: 1,
    title: 'Job Posting 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut nunc non lacus blandit ultricies.',
    details: 'Detailed information about Job Posting 1 goes here.',
  },
  {
    id: 2,
    title: 'Event Announcement 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut nunc non lacus blandit ultricies.',
    details: 'Detailed information about Event Announcement 1 goes here.',
  },
  {
    id: 3,
    title: 'Blog Post 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut nunc non lacus blandit ultricies.',
    details: 'Detailed information about Blog Post 1 goes here.',
  },
];

function List() {

  const [selectedPosting, setSelectedPosting] = useState(null);

  const handleSummarizeClick = () => {
    // Add logic to summarize the selected posting details
    console.log('Summarizing details...');
  };

  return (
    <div className="flex h-screen pt-16"> {/* Set the height of the flex container to h-screen */}
      {/* Left section - List of postings */}
      <div className="w-1/3 p-4 border-r border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Postings</h2>
        <ul>
          {postings.map(posting => (
            <li
              key={posting.id}
              className={`cursor-pointer p-2 mb-2 rounded ${selectedPosting === posting.id ? 'bg-blue-200' : 'hover:bg-gray-100'}`}
              onClick={() => setSelectedPosting(posting.id)}
            >
              <h3 className="text-blue-600">{posting.title}</h3>
              <p className="text-sm text-gray-600">{posting.description}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* Right section - Details of selected posting */}
      <div className="w-2/3 p-4">
        {selectedPosting !== null && (
          <div>
            <h2 className="text-lg font-semibold">{postings.find(posting => posting.id === selectedPosting).title}</h2>
            <p className="text-gray-600 mb-4">{postings.find(posting => posting.id === selectedPosting).details}</p>
            {/* Add more details here as needed */}
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              onClick={handleSummarizeClick}
            >
              Summarize
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default List;
