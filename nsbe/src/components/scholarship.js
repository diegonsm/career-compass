import React, { useEffect, useState } from 'react';

function Scholarship() {

    const fetchData = async () => {
        fetch('http://localhost:4000/scholarships')
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
          console.log(data);
            setPostings(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    };

    useEffect(() => {
        fetchData();
    }, [])

    
    const [selectedPosting, setSelectedPosting] = useState(null);
    const [postings, setPostings] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleSummarizeClick = () => {
        // Add logic to summarize the selected posting details
        console.log('Summarizing details...');
    };

  return (
    <>
    {loading && 
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 bg-opacity-50 z-50">
      <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
    </div>}
    {!loading && <div className="flex h-screen pt-16"> {/* Set the height of the flex container to h-screen */}
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
              <p className="text-sm text-gray-600">{posting.desc}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* Right section - Details of selected posting */}
      <div className="w-2/3 p-4">
        {selectedPosting !== null && (
          <div>
            <h2 className="text-lg font-semibold">{postings.find(posting => posting.id === selectedPosting).title}</h2>
            <p className="text-gray-600 mb-4">{postings.find(posting => posting.id === selectedPosting).desc}</p>
            <a href={`https://www.scholarships.com/${postings.find(posting => posting.id === selectedPosting).link}`} target="_blank"><p className="text-blue-600 mb-4">{`https://www.scholarships.com/${postings.find(posting => posting.id === selectedPosting).link}`}</p></a>
            {/* Add more details here as needed */}
            <button
                className="bg-gray-400 text-white py-2 px-4 rounded cursor-not-allowed"
                onClick={handleSummarizeClick}
                disabled // Disable the button
            >
            Summarize
            </button>

          </div>
        )}
      </div>
    </div>}
    </>
  );
}

export default Scholarship;
