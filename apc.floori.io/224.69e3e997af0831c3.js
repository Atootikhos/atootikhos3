(function() {
    try {
        var o = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
            n = (new Error).stack;
        n && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[n] = "b822b07f-74c6-47e1-8778-5e6be7b55421", o._sentryDebugIdIdentifier = "sentry-dbid-b822b07f-74c6-47e1-8778-5e6be7b55421")
    } catch {}
})(), (self.webpackChunkCrownCrete = self.webpackChunkCrownCrete || []).push([
    [224], {
        1224: (o, n, e) => {
            e.r(n), e.d(n, {
                RoomsPage: () => c
            });
            var f = e(4666),
                l = e(1773),
                d = e(973),
                t = e(2560);
            let c = (() => {
                class s extends l.Fj {
                    constructor() {
                        super()
                    }
                }
                return s.\u0275fac = function(a) {
                    return new(a || s)
                }, s.\u0275cmp = t.Xpm({
                    type: s,
                    selectors: [
                        ["CrownCrete-rooms"]
                    ],
                    standalone: !0,
                    features: [t.qOj, t.jDz],
                    decls: 0,
                    vars: 0,
                    template: function(a, u) {},
                    dependencies: [f.ez, d.Wo],
                    changeDetection: 0
                }), s
            })()
        }
    }
]);
//# sourceMappingURL=224.69e3e997af0831c3.js.map