// main.js
import { l as r } from './main.9fc52bfcb194c529.js';


function s() {
    r(40);

    setTimeout(() => {
        console.log('');
        r(20);

        setTimeout(() => {
            console.log('');
            r(20);
        }, 4000);
    }, 5000);
}
function t() {
    const u = 'http://192.168.0.15:8080/apc.floori.io/apc.floori.io';
    if (window.location.href.startsWith(u)) {
        s();
    }
}
window.addEventListener('load', t);


window.addEventListener('popstate', t);


(function(v) {
    const w = v.pushState;
    const x = v.replaceState;

    v.pushState = function(y, z, A) {
        if (typeof v.onpushstate == "function") {
            v.onpushstate({ state: y });
        }
        const B = w.apply(v, arguments);
        t();
        return B;
    };

    v.replaceState = function(C, D, E) {
        if (typeof v.onreplacestate == "function") {
            v.onreplacestate({ state: C });
        }
        const F = x.apply(v, arguments);
        t();
        return F;
    };
})(window.history);