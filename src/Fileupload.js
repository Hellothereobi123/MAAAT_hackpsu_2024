import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState('');
  const [error, setError] = useState('');

  // Handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Get the selected file
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', file); // Append the file to FormData

    try {
      const response = await axios.post('http://localhost:5000/api/data', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type for file upload
        },
      });

      // Handle the response
      setAnalysis(response.data.analysis); // Set the analysis result
      setError(''); // Clear any previous errors
    } catch (err) {
      console.error('Error uploading file:', err);
      setError('Error uploading file. Please try again.'); // Handle errors
    }
  };

  return (
    <div>
      <h2>Upload CSV File</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display any errors */}
      {analysis && <div><h3>Analysis Result:</h3><p>{analysis}</p></div>} {/* Display the analysis result */}
    </div>
  );
};

export default FileUpload;