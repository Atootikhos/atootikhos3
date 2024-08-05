
function obfuscateUrl(url) {
    return btoa(url); 
}


function deobfuscateUrl(encodedUrl) {
    return atob(encodedUrl); 
}


async function fetchDataWithCacheAndObfuscation(endpoint) {
    const obfuscatedEndpoint = obfuscateUrl(endpoint);
    const cacheKey = `cache_${obfuscatedEndpoint}`;
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
        console.log('Using cached data:', JSON.parse(cachedData));
        return JSON.parse(cachedData);
    }

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        localStorage.setItem(cacheKey, JSON.stringify(data));
        console.log('Fetched data:', data);
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}


export { obfuscateUrl, deobfuscateUrl, fetchDataWithCacheAndObfuscation };
