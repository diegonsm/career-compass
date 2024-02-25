import React from 'react';
import { classify } from './utilities/classify';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [prediction, setPrediction] = useState('');
  const [confidence, setConfidence] = useState(null);
  const [loading, setLoading] = useState(false);

  // for redirection
  useEffect(() => {
    setLoading(false);
    // navigate + logic
    console.log('naviagate');
  }, [prediction]);

  const handleButtonClick = () => {
    setLoading(true);
    console.log(query);
    classify(query)
    .then((res) => {
      console.log(res.classifications[0].prediction);
      console.log(res.classifications[0].confidence);
      setPrediction(res.classifications[0].prediction);
      setConfidence(res.classifications[0].confidence);
    }).catch((err) => {
      console.error('Err:', err);
    })
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default form submission behavior
      handleButtonClick(); // Call handleButtonClick function
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-2/3">
        <input
          type="text"
          placeholder="What resources are you looking for?"
          className={`w-full h-12 px-4 py-2 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 ${loading ? 'opacity-50' : ''}`}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          value={query}
          disabled={loading} // Disable the input while loading
        />
        {loading && (
          <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-200 bg-opacity-50">
            <div className="w-8 h-8 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
          </div>
        )}
        {!loading && (
          <button
            className="absolute top-0 right-0 bottom-0 bg-transparent border-none py-2 px-3 rounded-r-lg text-gray-600"
            onClick={handleButtonClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
      {prediction !== '' && 
      <div className='px-4'>Predction: {prediction}, Confidence: {confidence}</div>
      }
    </div>
  );
}

export default App;
