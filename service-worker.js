self.addEventListener('install', event => {
    console.log('Service Worker installing.');
    // Perform install steps
});

self.addEventListener('activate', event => {
    console.log('Service Worker activating.');
});

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    console.log('Fetch event for:', url.href);

    if (url.href === 'https://api.server.floori.io/new-floori/v3/studio/visualization/config') {
        console.log('Intercepting request to:', url.href);
        event.respondWith(
            (async function() {
                try {
                    const response = await fetch(event.request);
                    const clonedResponse = response.clone();
                    const data = await clonedResponse.json();

                    // Modify the URL in the response to appear as a dummy URL
                    const modifiedResponse = new Response(JSON.stringify(data), {
                        status: 200,
                        statusText: 'OK',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Dummy-URL': 'https://crowncrete.com.au/config' // Custom header to indicate the dummy URL
                        }
                    });

                    console.log('Returning modified response for:', url.href);
                    return modifiedResponse;
                } catch (error) {
                    console.error('Fetch failed:', error);
                    return new Response('Service Worker fetch failed', {
                        status: 500,
                        statusText: 'Internal Server Error'
                    });
                }
            })()
        );
    } else {
        event.respondWith(fetch(event.request));
    }
});
