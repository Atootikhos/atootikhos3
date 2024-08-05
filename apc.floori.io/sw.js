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
        const dummyUrl = 'https://atootikhos.github.io/atootikhos3/apc.floori.io/config';

        event.respondWith(
            (async function() {
                try {
                    // Create a new request with the dummy URL
                    const modifiedRequest = new Request(dummyUrl, {
                        method: event.request.method,
                        headers: event.request.headers,
                        mode: 'cors',
                        credentials: event.request.credentials,
                        redirect: 'follow',
                        referrer: event.request.referrer,
                        body: event.request.body
                    });

                    // Fetch the response from the dummy URL
                    const response = await fetch(modifiedRequest);

                    // Return the response from the dummy URL
                    return response;
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
