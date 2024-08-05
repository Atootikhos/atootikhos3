import { fetchDataWithCacheAndObfuscation } from './api3.js';

// Function to handle the fetched data
function handleFetchedData(data) {
    console.log('Data:', data);
    // Add your data handling logic here
}

// Example usage
const apiUrl = 'https://crowncrete/crowns;
fetchDataWithCacheAndObfuscation(apiUrl)
    .then(handleFetchedData)
    .catch(error => {
        console.error('Error:', error);
    });
