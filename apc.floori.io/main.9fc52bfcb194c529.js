const a = {
    b: [
        "https://samples.tryretool.com/embedded/public/38600adc-8ee1-4101-9d0f-eabd62cf7028?publicIdentifier=aMhcYI&tableName=data&dataKey=JQ8uYddeVDW142KMQyCGrbauSqkmfAvABSTeETzuTpVZK0MG6Je2p9tF3ciIa0mvVVOY9mmoupN079pLFpOhSaz9CHaOftTG45YB", // First dummy API URL with endpoints
        "https://retoolapi.dev/FalsV4/data",
		"https://retoolapi.dev/8M5BzC/crowncrete",
		"https://retoolapi.dev/gxlzlE/config",
		"https://retoolapi.dev/mo13tJ/room",
		"https://retoolapi.dev/iC2o5Y/ctabuttons",
		"https://retoolapi.dev/RRJ9xW/filter",
		"https://retoolapi.dev/4HHjvh/product",
		"https://retoolapi.dev/0r83g7/explore",
		"https://retoolapi.dev/nxqF42/estimation",
		"https://retoolapi.dev/56RST5/session",
		"https://retoolapi.dev/bEzqej/breadcrumbs"
    ],
    c: [
        'v420/crowncrete/visualization/config/crowncrete',
        'v420/crowncrete/roomofcrown',
        'v420/crowncrete/supra/product/prodCrown',
        'v420/crowncrete/visualization/accountofcrown',
        'v420/crowncrete/visualization/productofcrown',
        'v420/crowncrete/supra/crown'
    ]
};
async function d(e) {
    const f = a.b[Math.floor(Math.random() * a.b.length)];
    const g = f.includes('samples.tryretool.com') ? `${f}/${e}` : f;
    try {
        const h = await fetch(g);
        if (!h.ok) {
            throw new Error(`HTTP error! Status: ${h.status}`);
        }


        const i = h.headers.get('content-type');
        if (!i || !i.includes('application/json')) {
            const j = await h.text();
            console.error('Received non-JSON response:', j);
            throw new Error('Received non-JSON response');
        }

        return await h.json();
    } catch (k) {
        console.error('Fetch error:', k);
        throw k;
    }
}


export async function l(m) {
    for (let n = 0; n < m; n++) {
        for (const o of a.c) {
            try {
                const p = await d(o);
                console.log(`Data from ${o}:`, p);
            } catch (q) {
                console.error(`Error fetching ${o}:`, q);
            }
        }
    }
}