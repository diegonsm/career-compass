import React from 'react';
import { classify } from '../utilities/classify';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const [query, setQuery] = useState('');
  const [prediction, setPrediction] = useState('');
  const [confidence, setConfidence] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  // for redirection
  useEffect(() => {
    setLoading(false);
    if (confidence != null && confidence < 0.75) {
      setAlertMessage("I'm not sure what you meant. Try searching for jobs/events/opportunities.")
    } else {
        switch(prediction) {
            case 'Job':
                navigate('/list');
                break;
            case 'Scholarship':
                navigate('/list');
                break;
            case 'Organization':
                navigate('/list');
                break;
            case 'Event':
                navigate('/list');
                break;
            
        }

    }
    // navigate + logic
    // console.log('navigate');
  }, [prediction, confidence]);

  const handleButtonClick = () => {
    setAlertMessage(''); // Reset alert message when button is clicked
    
    if (query === '') {
      setAlertMessage('Input cannot be blank!');
      return
    }
    setLoading(true);
    classify(query)
      .then((res) => {
        console.log(res.classifications[0].prediction);
        console.log(res.classifications[0].confidence);
        setPrediction(res.classifications[0].prediction);
        setConfidence(res.classifications[0].confidence);
      }).catch((err) => {
        console.error('Err:', err);
        setAlertMessage('An error occurred. Please try again.'); // Set error message
      }).finally(() => {
        setLoading(false); // Set loading state to false after classification completes
      });
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
    <>
    <div className="flex justify-center items-center h-screen">
      <div className="w-2/3">
      <div className="relative">
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
      {/* alerts */}
      {alertMessage && 
        <div className="bg-yellow-200 text-yellow-800 rounded-md p-4 mt-4">
            {alertMessage}
        </div>
      }
      {/* predictions */}
      {prediction &&
      <div>prediction: {prediction}, confidence: {confidence}</div>
      }
      </div>
      
    </div>
  </>
  );
}

export default Landing;
