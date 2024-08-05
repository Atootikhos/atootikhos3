self.addEventListener('install', event => {
    console.log('Service Worker installing.');
    // Perform install steps
});

self.addEventListener('activate', event => {
    console.log('Service Worker activating.');
});

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    if (url.href === 'https://api.server.floori.io/new-floori/v3/studio/visualization/config') {
        event.respondWith(
            (async function() {
                const response = await fetch(event.request);
                const clonedResponse = response.clone();
                const data = await clonedResponse.json();

                // Modify the URL in the response to appear as a dummy URL
                const modifiedResponse = new Response(JSON.stringify(data), {
                    status: 200,
                    statusText: 'OK',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Dummy-URL': 'https://dummy.api.server/floori/config' // Custom header to indicate the dummy URL
                    }
                });

                return modifiedResponse;
            })()
        );
    } else {
        event.respondWith(fetch(event.request));
    }
});
