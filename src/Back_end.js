import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataDisplay = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    // Function to fetch data from the API
    const fetchData = async () => {
        try {
            // Make sure to use the correct URL to your Flask API
            const response = await axios.get('https://your-replit-username.your-replit-project.repl.co/api/data');
            setData(response.data); // Assuming response.data is the JSON you want
            setError(''); // Clear any previous errors
        } catch (err) {
            setError('Error fetching data: ' + err.message);
        }
    };

    // Removed useEffect that automatically fetches data on mount

    // Function to handle button click
    const handleButtonClick = () => {
        fetchData(); // Call the fetchData function when the button is clicked
    };

    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div>
            <h1>Data Display</h1>
            <button onClick={handleButtonClick}>Fetch Data</button> {/* Button to fetch data */}
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre> // This will display your data
            ) : (
                <p>No data loaded. Click the button to fetch data.</p> // Message when no data is loaded
            )}
        </div>
    );
};

export default DataDisplay;
