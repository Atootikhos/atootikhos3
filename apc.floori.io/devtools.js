function clearNetworkLogs() {
    setTimeout(() => {
        if (window.performance && window.performance.getEntriesByType) {
            const entries = window.performance.getEntriesByType('resource');
            entries.forEach((entry) => {
                window.performance.clearResourceTimings(entry.name);
            });
            console.log('Network logs cleared');
        } else {
            console.warn('Performance API not supported');
        }
    }, 5000); // 5000 milliseconds = 5 seconds
}

// Call the function to clear network logs after 5 seconds
clearNetworkLogs();
