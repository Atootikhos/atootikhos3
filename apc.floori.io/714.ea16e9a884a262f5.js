(function () {
    try {
        var _ = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
            k = (new Error).stack;
        k && (_._sentryDebugIds = _._sentryDebugIds || {}, _._sentryDebugIds[k] = "c0d20b8b-4886-4627-960d-6b82b6c8a3dc", _._sentryDebugIdIdentifier = "sentry-dbid-c0d20b8b-4886-4627-960d-6b82b6c8a3dc")
    } catch {}
})(), (self.webpackChunkCrownCrete = self.webpackChunkCrownCrete || []).push([
    [714], {
        4583: (_, k, m) => {
            m.d(k, {
                UR: () => st,
                pm: () => ne,
                Q3: () => lt,
                KN: () => oe,
                q3: () => de,
                wA: () => U,
                WF: () => y,
                nn: () => re,
                yh: () => Jt,
                BI: () => Z,
                VU: () => gt,
                HW: () => Rt,
                kf: () => Et,
                MQ: () => ct,
                Qj: () => Mt,
                Mb: () => l,
                Og: () => vt,
                RU: () => pt,
                KY: () => at,
                GA: () => Ct,
                cn: () => ft,
                qG: () => St,
                Qg: () => nt,
                Kw: () => mt,
                hq: () => K,
                N$: () => J,
                Vm: () => Ft,
                _K: () => It,
                qs: () => ot,
                Bd: () => xt,
                zp: () => ut,
                R9: () => bt
            });
            var p = m(9263);
            const l = (0, p.R7)({
                source: "Products",
                events: {
                    "Clear Product Items": (0, p.Ky)(),
                    "Clear Breadcrumb": (0, p.Ky)(),
                    "Get Initial Product": (0, p.Ky)(),
                    "Fetch Product Base": (0, p.Ky)(),
                    "Set Query Params": (0, p.Ky)(),
                    "Set Epoxy Loaded": (0, p.Ky)(),
                    "Set Product Base": (0, p.Ky)(),
                    "Set Epoxy Product": (0, p.Ky)(),
                    "Set Active Product": (0, p.Ky)(),
                    "Set Hotpoints Map": (0, p.Ky)(),
                    "Update Hotpoints Map": (0, p.Ky)(),
                    "Update Transformations Data": (0, p.Ky)(),
                    "Fav Product": (0, p.Ky)(),
                    "Set Fav Products Map": (0, p.Ky)(),
                    "Set Product Items": (0, p.Ky)(),
                    "Set Product Items With Hash": (0, p.Ky)(),
                    "Set Epoxy Colors With Hash": (0, p.Ky)(),
                    "Set Epoxy Chips With Hash": (0, p.Ky)(),
                    "Update Product Items Cache": (0, p.Ky)(),
                    "Set Rotation": (0, p.Ky)(),
                    "Set Density": (0, p.Ky)(),
                    "Set Transition": (0, p.Ky)(),
                    "Set Size": (0, p.Ky)(),
                    "Set Pattern And Grout": (0, p.Ky)(),
                    "Fetch Product": (0, p.Ky)(),
                    "Set Product Errors": (0, p.Ky)(),
                    "Set Product": (0, p.Ky)(),
                    "Set Filters Loading": (0, p.Ky)(),
                    "Patch Filters": (0, p.Ky)(),
                    "Fetch Epoxy Root": (0, p.Ky)(),
                    "Fetch Epoxy Colors": (0, p.Ky)(),
                    "Fetch Epoxy Chips": (0, p.Ky)()
                }
            });
            var v = m(2874),
                h = m(1121);
            const y = "CrownCreteProducts",
                tt = {
                    epoxyLoaded: !1,
                    updateVisualization: !1,
                    hotpointProductMap: {},
                    favouriteProducts: {},
                    cachedCalls: {},
                    cachedProducts: {},
                    productErrors: {},
                    filterValues: [],
                    filterValuesMap: {},
                    filtersLoading: !1,
                    search: "",
                    catalogId: "",
                    page: 1,
                    transformations: {
                        pattern: v.oL.random,
                        rotation: 0,
                        transition: {
                            x: 0,
                            y: 0
                        },
                        grout: {
                            color: v.YU,
                            size: v.Nh,
                            unit: v.QC.mm
                        }
                    }
                },
                T = (0, p.on)(l.setActiveProduct, (r, {
                    product: a,
                    remove: e,
                    additional: o,
                    updateVisualization: s
                }) => {
                    let i;
                    const n = r.breadcrumbItems?. [r.breadcrumbItems?.length - 1 || 0]?.id || "",
                        d = a ? new v.qn(a) : void 0;
                    d && (d.parentId = n), !r.activeProduct && d?.defaultPattern && (i = d.defaultPattern);
                    const {
                        hotpointProductMap: u
                    } = r;
                    if (!d || r.activeProduct?.id === d?.id && !o && s) {
                        const R = {
                            ...u || {}
                        };
                        return e && Object.keys(R || {}).forEach(A => {
                            R[A] = {
                                ...R[A],
                                product: void 0
                            }
                        }), {
                            ...r,
                            updateVisualization: s,
                            activeProduct: null,
                            hotpointProductMap: R,
                            transformations: {
                                ...r.transformations,
                                pattern: v.oL.random
                            }
                        }
                    }
                    const E = {
                            ...u
                        },
                        B = Object.keys(u).filter(R => u[R]?.selected);
                    if (B.length) B.forEach(R => {
                        u[R]?.selected && s && (E[R] = {
                            ...E[R],
                            product: d
                        })
                    });
                    else {
                        const R = d.placementOptions?. [0] === v.aR.rugs ? v.aR.floors : d.placementOptions?. [0],
                            A = Object.keys(E).filter(z => E[z].hotpoint?.placementOption === R);
                        A ? A.forEach(z => {
                            E[z] = {
                                ...E[z],
                                product: d
                            }, E[z].selected = !0
                        }) : Object.keys(E).some(z => E[z]?.hotpoint?.placementOption === v.aR.floors && (E[z] = {
                            ...E[z],
                            selected: !0
                        }, !0))
                    }
                    if (i || (i = d?.patterns?.includes(r.transformations.pattern) ? r.transformations.pattern : v.oL.random), !d?.selectedSize && d?.tileOptions?.length) {
                        const R = d.tileOptions.find(A => A.isDefault);
                        d.selectedSize = R ? structuredClone(R) : d.tileOptions[0]
                    }
                    return {
                        ...r,
                        updateVisualization: s,
                        activeProduct: d,
                        hotpointProductMap: E,
                        transformations: {
                            ...r.transformations,
                            pattern: i,
                            options: d.selectedSize
                        }
                    }
                }),
                V = (0, p.on)(l.setEpoxyLoaded, (r, {
                    loaded: a
                }) => ({
                    ...r,
                    epoxyLoaded: a
                })),
                $t = (0, p.on)(l.setHotpointsMap, (r, {
                    map: a
                }) => ({
                    ...r,
                    hotpointProductMap: a
                })),
                wt = (0, p.on)(l.updateHotpointsMap, (r, {
                    selectionMap: a
                }) => {
                    const t = {};
                    return Object.keys(r.hotpointProductMap).forEach(e => {
                        t[e] = {
                            ...r.hotpointProductMap[e],
                            selected: !1
                        }
                    }), Object.keys(a).forEach(e => {
                        t[e] && (t[e].selected = a[e])
                    }), {
                        ...r,
                        hotpointProductMap: t
                    }
                }),
                Lt = (0, p.on)(l.favProduct, (r, {
                    product: a
                }) => {
                    const t = {
                        ...r.favouriteProducts
                    };
                    return t[a.id] ? delete t[a.id] : t[a.id] = a, {
                        ...r,
                        favouriteProducts: t
                    }
                }),
                Ot = (0, p.on)(l.setFavProductsMap, (r, {
                    products: a
                }) => ({
                    ...r,
                    favouriteProducts: a
                })),
                At = (0, p.on)(l.setProductBase, (r, {
                    filterDefinitions: a,
                    breadcrumbItems: t
                }) => ({
                    ...r,
                    filterDefinitions: a || r.filterDefinitions,
                    breadcrumbItems: t || r.breadcrumbItems
                })),
                Dt = (0, p.on)(l.clearBreadcrumb, r => ({
                    ...r,
                    breadcrumbItems: void 0
                })),
                Tt = (0, p.on)(l.setProductItems, (r, {
                    response: a
                }) => ({
                    ...r,
                    productItems: a
                })),
                Vt = (0, p.on)(l.setProductItemsWithHash, (r, a) => {
                    const t = {
                        ...r.cachedCalls,
                        [a.hash]: a.response
                    };
                    return {
                        ...r,
                        cachedCalls: t,
                        productItems: t[a.hash]
                    }
                }),
                Ht = (0, p.on)(l.setEpoxyColorsWithHash, (r, a) => {
                    const t = {
                        ...r.cachedCalls,
                        [a.hash]: a.colors
                    };
                    return {
                        ...r,
                        cachedCalls: t,
                        epoxyColorItems: t[a.hash]
                    }
                }),
                Bt = (0, p.on)(l.setEpoxyChipsWithHash, (r, a) => {
                    const t = {
                        ...r.cachedCalls,
                        [a.hash]: a.chips
                    };
                    return {
                        ...r,
                        cachedCalls: t,
                        epoxyChipsItems: t[a.hash]
                    }
                }),
                zt = (0, p.on)(l.setEpoxyProduct, (r, {
                    product: a,
                    isColor: t
                }) => {
                    const e = {};
                    return t ? e.activeEpoxyColor = a : e.activeEpoxyChip = a, {
                        ...r,
                        ...e
                    }
                }),
                Kt = (0, p.on)(l.updateProductItemsCache, (r, a) => {
                    const t = {
                        ...r.cachedCalls,
                        [a.hash]: a.response
                    };
                    return {
                        ...r,
                        cachedCalls: t
                    }
                }),
                jt = (0, p.on)(l.setProduct, (r, {
                    product: a
                }) => {
                    const t = structuredClone(r.cachedProducts);
                    return a?.id && (t[a.id] = structuredClone(a)), {
                        ...r,
                        cachedProducts: t,
                        transformations: {
                            ...r.transformations,
                            options: a?.tileOptions?. [0]
                        }
                    }
                }),
                Ut = (0, p.on)(l.setProductErrors, (r, {
                    productId: a
                }) => {
                    const t = structuredClone(r.productErrors);
                    return t[a] = !0, {
                        ...r,
                        productErrors: t
                    }
                }),
                Zt = (0, p.on)(l.clearProductItems, r => ({
                    ...r,
                    productItems: void 0
                })),
                Nt = (0, p.on)(l.updateTransformationsData, (r, {
                    data: a
                }) => ({
                    ...r,
                    transformations: {
                        rotation: a.rotation,
                        density: a.density,
                        pattern: a.pattern,
                        options: a.options,
                        transition: a.transition,
                        grout: a.grout
                    }
                })),
                Pt = (0, p.on)(l.setRotation, (r, {
                    angle: a
                }) => ({
                    ...r,
                    transformations: {
                        ...r.transformations,
                        rotation: a
                    }
                })),
                L = (0, p.on)(l.setDensity, (r, {
                    density: a
                }) => ({
                    ...r,
                    transformations: {
                        ...r.transformations,
                        density: a
                    }
                })),
                Gt = (0, p.on)(l.setTransition, (r, {
                    value: a,
                    transitionType: t
                }) => {
                    const e = r.transformations.transition;
                    return {
                        ...r,
                        transformations: {
                            ...r.transformations,
                            transition: {
                                x: t === v.Fl.x ? a : e.x,
                                y: t === v.Fl.y ? a : e.y
                            }
                        }
                    }
                }),
                Wt = (0, p.on)(l.setSize, (r, {
                    options: a
                }) => {
                    const t = structuredClone(r.hotpointProductMap);
                    return Object.values(t).forEach(e => {
                        e?.selected && e?.product && (e.product = new v.qn(e.product), e.product.selectedSize = structuredClone(a))
                    }), {
                        ...r,
                        hotpointProductMap: t,
                        transformations: {
                            ...r.transformations,
                            options: a
                        }
                    }
                }),
                Qt = (0, p.on)(l.setPatternAndGrout, (r, {
                    pattern: a,
                    grout: t
                }) => ({
                    ...r,
                    transformations: {
                        ...r.transformations,
                        pattern: a,
                        grout: t || r.transformations.grout
                    }
                })),
                Yt = (0, p.on)(l.setFiltersLoading, (r, {
                    value: a
                }) => ({
                    ...r,
                    filtersLoading: a
                })),
                Xt = (0, p.on)(l.patchFilters, (r, {
                    filters: a,
                    catalogId: t,
                    phrase: e,
                    page: o
                }) => {
                    const s = {
                            ...r.filterValuesMap
                        },
                        n = new Set(Object.values(r.hotpointProductMap || {}).filter(u => u.selected).map(u => u.hotpoint.placementOption).flat(1).filter(u => !!u));
                    n.has(v.aR.floors) && !n.has(v.aR.rugs) && n.add(v.aR.rugs), a?.forEach(u => {
                        u.value ? s[u.fieldName] = u : delete s[u.fieldName]
                    }), s[h.H9.fieldName] || (s[h.H9.fieldName] = {
                        ...structuredClone(h.H9)
                    });
                    const d = s[h.H9.fieldName];
                    return n?.size && d?.value && (s[h.H9.fieldName] = {
                        ...d,
                        value: Array.from(n)
                    }), !d?.value?.includes(v.aR.rugs) && d?.value?.includes(v.aR.floors) && (s[h.H9.fieldName] = {
                        ...d,
                        value: [...d.value, v.aR.rugs]
                    }), {
                        ...r,
                        search: e || "",
                        catalogId: t || r.catalogId || "",
                        filterValuesMap: s,
                        filterValues: Object.values(s),
                        page: o || r.page
                    }
                }),
                vt = (0, p.Lq)(tt, V, $t, wt, Dt, T, Lt, Ot, At, Tt, Vt, Ht, Bt, zt, Kt, jt, Ut, Zt, Yt, Xt, Nt, Pt, Gt, Wt, Qt, L);
            var b = m(2560),
                yt = m(1773),
                g = m(6096),
                O = m(3599),
                H = m(538),
                x = m(2673),
                w = m(745),
                Y = m(3158),
                ht = m(591),
                q = m(1640),
                X = m(155),
                N = m(635),
                C = m(9337),
                G = m(1339),
                W = m(973),
                et = m(488);
            const I = (0, p.ZF)(y),
                bt = (0, p.P1)(I, r => r.epoxyLoaded),
                ut = (0, p.P1)(I, r => r.updateVisualization),
                at = (0, p.P1)(I, r => r.activeProduct),
                pt = (0, p.P1)(I, r => ({
                    color: r.activeEpoxyColor || null,
                    chip: r.activeEpoxyChip || null,
                    density: r.transformations.density
                })),
                K = (0, p.P1)(I, r => r.filterDefinitions),
                ot = (0, p.P1)(I, r => ({
                    filterDefinitions: r.filterDefinitions,
                    breadcrumb: r.breadcrumbItems
                })),
                Ct = (0, p.P1)(I, r => r.cachedCalls),
                ft = (0, p.P1)(I, r => ({
                    cachedProducts: r.cachedProducts,
                    productErrors: r.productErrors
                })),
                mt = (0, p.P1)(I, r => r.productItems),
                St = (0, p.P1)(I, r => r.epoxyChipsItems),
                nt = (0, p.P1)(I, r => r.epoxyColorItems),
                J = (0, p.P1)(I, r => ({
                    values: r.filterValues,
                    valuesMap: r.filterValuesMap,
                    search: r.search
                })),
                Ft = (0, p.P1)(I, r => r.filtersLoading),
                Mt = (0, p.P1)(I, r => {
                    const a = {};
                    return Object.values(r.hotpointProductMap).forEach(t => {
                        t.product?.id && t.product?.selectedSize && t.selected && (a[t.product.id] = t.product)
                    }), Object.values(a)
                }),
                Rt = (0, p.P1)(I, r => {
                    const a = {};
                    return Object.values(r.hotpointProductMap).forEach(t => {
                        t.product && !a[t.product?.id] && (a[t.product.id] = t.product)
                    }), Object.values(a)
                }),
                Et = (0, p.P1)(I, r => Object.values(r.favouriteProducts)),
                ct = (0, p.P1)(I, r => r.favouriteProducts),
                It = (0, p.P1)(I, r => r.hotpointProductMap),
                xt = (0, p.P1)(I, r => r.transformations);
            let Jt = (() => {
                class r extends yt.Q9 {
                    constructor() {
                        super(...arguments), this.roomApi = (0, b.f3M)(g.Sz), this.eventsProvider = (0, b.f3M)(et.QT), this.productsProvider = (0, b.f3M)(g.IA), this.storageProvider = (0, b.f3M)(g.Fg), this.trackingProvider = (0, b.f3M)(h.Hj), this.configProvider = (0, b.f3M)(g.FI), this.companyVendorId = (0, b.f3M)(h.Mk), this.fetchProduct = (0, O.GW)(() => this.actions$.pipe((0, O.l4)(l.fetchProduct), (0, H.M)(this.store.select(ft), this.store.select(W.od)), (0, x.w)(([{
                            productId: t
                        }, {
                            cachedProducts: e
                        }, s]) => {
                            const i = e[t];
                            return i ? (0, w.of)(i) : this.roomApi.fetchProduct({
                                productId: t
                            }).pipe((0, Y.K)(() => (this.trackNotFoundProduct(s?.name), this.store.dispatch(l.setProductErrors({
                                productId: t
                            })), (0, w.of)(void 0))))
                        }), (0, H.M)(this.store.select(ot)), (0, x.w)(([t, e]) => {
                            const s = t ? new v.qn(t, e?.breadcrumb?. [e?.breadcrumb.length - 1]?.id || "") : void 0;
                            return [l.setProduct({
                                product: s
                            })]
                        }))), this.onFavouriteChange = (0, O.GW)(() => this.actions$.pipe((0, O.l4)(l.favProduct), (0, x.w)(() => (0, w.of)(this.companyVendorId).pipe((0, H.M)(this.store.select(ct)))), (0, x.w)(([t, e]) => this.storageProvider.set(`${g.dR.likedProducts}-${t}`, e))), {
                            dispatch: !1
                        }), this.fetchProductBase = (0, O.GW)(() => this.actions$.pipe((0, O.l4)(l.fetchProductBase), (0, H.M)(this.store.select(ot)), (0, x.w)(([{
                            productId: t,
                            sku: e,
                            externalId: o
                        }, {
                            filterDefinitions: s,
                            breadcrumb: i
                        }]) => this.dynamicProductParams ? ht.E : (0, q.D)([!(t || e || o) && !i?.length || t && !i?.length ? this.roomApi.fetchBreadcrumb(t).pipe((0, Y.K)(() => this.fetchRootCatalogBreadcrumbs()), (0, x.w)(d => d?.length ? (0, w.of)(d) : this.fetchRootCatalogBreadcrumbs())) : (0, w.of)(i), s?.length ? (0, w.of)(s) : this.roomApi.fetchFilterDefinitions().pipe((0, Y.K)(() => (0, w.of)([])))])), (0, x.w)(([t, e]) => [l.setProductBase({
                            filterDefinitions: e,
                            breadcrumbItems: t
                        })]))), this.setEpoxyProduct = (0, O.GW)(() => this.actions$.pipe((0, O.l4)(l.setEpoxyProduct), (0, x.w)(({
                            product: t
                        }) => [l.setActiveProduct({
                            product: t,
                            updateVisualization: !0
                        })]))), this.fetchEpoxyColors = (0, O.GW)(() => this.actions$.pipe((0, O.l4)(l.fetchEpoxyColors), (0, x.w)(({
                            epoxyColorsId: t
                        }) => this.productsProvider.filterProductsCall({
                            filters: [h.cT],
                            page: 1,
                            catalogId: t
                        })), (0, Y.K)(() => (0, w.of)([{}, ""])), (0, x.w)(t => {
                            const [e, o] = t;
                            return [l.setEpoxyColorsWithHash({
                                colors: e,
                                hash: o
                            })]
                        }))), this.fetchEpoxyChips = (0, O.GW)(() => this.actions$.pipe((0, O.l4)(l.fetchEpoxyChips), (0, x.w)(({
                            epoxyChipsId: t
                        }) => this.productsProvider.filterProductsCall({
                            filters: [h.fX],
                            page: 1,
                            catalogId: t
                        })), (0, Y.K)(() => (0, w.of)([{}, ""])), (0, x.w)(t => {
                            const [e, o] = t;
                            return [l.setEpoxyChipsWithHash({
                                chips: e,
                                hash: o
                            })]
                        }))), this.patchFilters$ = (0, O.GW)(() => this.actions$.pipe((0, O.l4)(l.patchFilters), (0, H.M)(this.store.select(I), this.store.select(ot)), (0, x.w)(([t, e]) => t.executeSearch && e.catalogId ? this.productsProvider.filterProductsCall({
                            filters: e.filterValues,
                            excludedProductId: e.excludedProductId,
                            page: e.page,
                            catalogId: e.catalogId,
                            phrase: e.search
                        }) : (0, w.of)([])), (0, x.w)(([t, e]) => e ? [l.setProductItemsWithHash({
                            hash: e,
                            response: t
                        })] : []))), this.loadProductInit$ = (0, O.GW)(() => this.actions$.pipe((0, O.l4)(l.getInitialProduct), (0, x.w)(({
                            productId: t,
                            sku: e,
                            externalId: o,
                            hotpoints: s,
                            dynamicProduct: i
                        }) => (0, q.D)(i ? [(0, w.of)(i), (0, w.of)(s)] : [t || e || o ? this.roomApi.fetchProduct({
                            productId: t,
                            sku: e,
                            extId: o
                        }).pipe((0, Y.K)(() => this.store.select(W.od).pipe((0, X.P)(n => !!n), (0, N.U)(n => {
                            this.trackNotFoundProduct(n.name)
                        }))), (0, x.w)(n => n ? (0, w.of)(n.generateTileOptions()) : this.roomApi.fetchBreadcrumb())) : (0, w.of)(void 0), (0, w.of)(s)])), (0, x.w)(([t, e]) => {
                            const o = Array.isArray(t),
                                s = this.checkHotpoints(e, o ? void 0 : t),
                                i = [l.setHotpointsMap({
                                    map: s
                                })];
                            if (o && i.push(l.setProductBase({
                                    breadcrumbItems: t
                                })), !o && t && !t?.dynamic) {
                                const n = t;
                                i.push(l.fetchProductBase({
                                    productId: n.id
                                })), n.isRug && i.push(l.setQueryParams({
                                    productId: n.id
                                })), this.productsProvider.setDefaultPatternAndGrout(n)
                            }
                            return i.push(l.setActiveProduct({
                                product: o ? void 0 : t,
                                init: !0,
                                updateVisualization: !0
                            })), i
                        }))), this.setProperQueryParam$ = (0, O.GW)(() => this.actions$.pipe((0, O.l4)(l.setQueryParams), (0, C.b)(() => {
                            this.navigation.appendQueryParam("sku", null)
                        }), (0, G.g)(5), (0, C.b)(() => this.navigation.appendQueryParam("externalId", null)), (0, G.g)(5), (0, C.b)(({
                            productId: t
                        }) => {
                            t && this.navigation.appendQueryParam("product", t)
                        })), {
                            dispatch: !1
                        })
                    }
                    checkHotpoints(t, e) {
                        const o = {};
                        let s = "",
                            i = 0;
                        return t.forEach(n => {
                            const d = !s && e?.placementOptions?.includes(n.placementOption);
                            d && n.placementOption === v.aR.floors && (s = n.id), i++, o[n.id] = {
                                hotpoint: n,
                                product: d ? e : void 0,
                                selected: d
                            }
                        }), i > 1 && !!s && (Object.keys(o).forEach(n => o[n].selected = !1), o[s].selected = !0), o
                    }
                    trackNotFoundProduct(t = "") {
                        this.trackingProvider.track(g.y8.productNotFound, {
                            room_name: t
                        })
                    }
                    fetchRootCatalogBreadcrumbs() {
                        return this.navigation.appendQueryParam("product", null), this.roomApi.fetchBreadcrumb()
                    }
                }
                return r.\u0275fac = function () {
                    let a;
                    return function (e) {
                        return (a || (a = b.n5z(r)))(e || r)
                    }
                }(), r.\u0275prov = b.Yz7({
                    token: r,
                    factory: r.\u0275fac
                }), r
            })();
            var D = m(9295),
                c = m(8951),
                P = m(116),
                f = m(7260),
                F = m(2566),
                M = m(9346);
            class S {
                constructor() {
                    this._dataLength = 0, this._bufferLength = 0, this._state = new Int32Array(4), this._buffer = new ArrayBuffer(68), this._buffer8 = new Uint8Array(this._buffer, 0, 68), this._buffer32 = new Uint32Array(this._buffer, 0, 17), this.start()
                }
                static hashStr(a, t = !1) {
                    return this.onePassHasher.start().appendStr(a).end(t)
                }
                static hashAsciiStr(a, t = !1) {
                    return this.onePassHasher.start().appendAsciiStr(a).end(t)
                }
                static _hex(a) {
                    const t = S.hexChars,
                        e = S.hexOut;
                    let o, s, i, n;
                    for (n = 0; n < 4; n += 1)
                        for (s = 8 * n, o = a[n], i = 0; i < 8; i += 2) e[s + 1 + i] = t.charAt(15 & o), o >>>= 4, e[s + 0 + i] = t.charAt(15 & o), o >>>= 4;
                    return e.join("")
                }
                static _md5cycle(a, t) {
                    let e = a[0],
                        o = a[1],
                        s = a[2],
                        i = a[3];
                    e += (o & s | ~o & i) + t[0] - 680876936 | 0, e = (e << 7 | e >>> 25) + o | 0, i += (e & o | ~e & s) + t[1] - 389564586 | 0, i = (i << 12 | i >>> 20) + e | 0, s += (i & e | ~i & o) + t[2] + 606105819 | 0, s = (s << 17 | s >>> 15) + i | 0, o += (s & i | ~s & e) + t[3] - 1044525330 | 0, o = (o << 22 | o >>> 10) + s | 0, e += (o & s | ~o & i) + t[4] - 176418897 | 0, e = (e << 7 | e >>> 25) + o | 0, i += (e & o | ~e & s) + t[5] + 1200080426 | 0, i = (i << 12 | i >>> 20) + e | 0, s += (i & e | ~i & o) + t[6] - 1473231341 | 0, s = (s << 17 | s >>> 15) + i | 0, o += (s & i | ~s & e) + t[7] - 45705983 | 0, o = (o << 22 | o >>> 10) + s | 0, e += (o & s | ~o & i) + t[8] + 1770035416 | 0, e = (e << 7 | e >>> 25) + o | 0, i += (e & o | ~e & s) + t[9] - 1958414417 | 0, i = (i << 12 | i >>> 20) + e | 0, s += (i & e | ~i & o) + t[10] - 42063 | 0, s = (s << 17 | s >>> 15) + i | 0, o += (s & i | ~s & e) + t[11] - 1990404162 | 0, o = (o << 22 | o >>> 10) + s | 0, e += (o & s | ~o & i) + t[12] + 1804603682 | 0, e = (e << 7 | e >>> 25) + o | 0, i += (e & o | ~e & s) + t[13] - 40341101 | 0, i = (i << 12 | i >>> 20) + e | 0, s += (i & e | ~i & o) + t[14] - 1502002290 | 0, s = (s << 17 | s >>> 15) + i | 0, o += (s & i | ~s & e) + t[15] + 1236535329 | 0, o = (o << 22 | o >>> 10) + s | 0, e += (o & i | s & ~i) + t[1] - 165796510 | 0, e = (e << 5 | e >>> 27) + o | 0, i += (e & s | o & ~s) + t[6] - 1069501632 | 0, i = (i << 9 | i >>> 23) + e | 0, s += (i & o | e & ~o) + t[11] + 643717713 | 0, s = (s << 14 | s >>> 18) + i | 0, o += (s & e | i & ~e) + t[0] - 373897302 | 0, o = (o << 20 | o >>> 12) + s | 0, e += (o & i | s & ~i) + t[5] - 701558691 | 0, e = (e << 5 | e >>> 27) + o | 0, i += (e & s | o & ~s) + t[10] + 38016083 | 0, i = (i << 9 | i >>> 23) + e | 0, s += (i & o | e & ~o) + t[15] - 660478335 | 0, s = (s << 14 | s >>> 18) + i | 0, o += (s & e | i & ~e) + t[4] - 405537848 | 0, o = (o << 20 | o >>> 12) + s | 0, e += (o & i | s & ~i) + t[9] + 568446438 | 0, e = (e << 5 | e >>> 27) + o | 0, i += (e & s | o & ~s) + t[14] - 1019803690 | 0, i = (i << 9 | i >>> 23) + e | 0, s += (i & o | e & ~o) + t[3] - 187363961 | 0, s = (s << 14 | s >>> 18) + i | 0, o += (s & e | i & ~e) + t[8] + 1163531501 | 0, o = (o << 20 | o >>> 12) + s | 0, e += (o & i | s & ~i) + t[13] - 1444681467 | 0, e = (e << 5 | e >>> 27) + o | 0, i += (e & s | o & ~s) + t[2] - 51403784 | 0, i = (i << 9 | i >>> 23) + e | 0, s += (i & o | e & ~o) + t[7] + 1735328473 | 0, s = (s << 14 | s >>> 18) + i | 0, o += (s & e | i & ~e) + t[12] - 1926607734 | 0, o = (o << 20 | o >>> 12) + s | 0, e += (o ^ s ^ i) + t[5] - 378558 | 0, e = (e << 4 | e >>> 28) + o | 0, i += (e ^ o ^ s) + t[8] - 2022574463 | 0, i = (i << 11 | i >>> 21) + e | 0, s += (i ^ e ^ o) + t[11] + 1839030562 | 0, s = (s << 16 | s >>> 16) + i | 0, o += (s ^ i ^ e) + t[14] - 35309556 | 0, o = (o << 23 | o >>> 9) + s | 0, e += (o ^ s ^ i) + t[1] - 1530992060 | 0, e = (e << 4 | e >>> 28) + o | 0, i += (e ^ o ^ s) + t[4] + 1272893353 | 0, i = (i << 11 | i >>> 21) + e | 0, s += (i ^ e ^ o) + t[7] - 155497632 | 0, s = (s << 16 | s >>> 16) + i | 0, o += (s ^ i ^ e) + t[10] - 1094730640 | 0, o = (o << 23 | o >>> 9) + s | 0, e += (o ^ s ^ i) + t[13] + 681279174 | 0, e = (e << 4 | e >>> 28) + o | 0, i += (e ^ o ^ s) + t[0] - 358537222 | 0, i = (i << 11 | i >>> 21) + e | 0, s += (i ^ e ^ o) + t[3] - 722521979 | 0, s = (s << 16 | s >>> 16) + i | 0, o += (s ^ i ^ e) + t[6] + 76029189 | 0, o = (o << 23 | o >>> 9) + s | 0, e += (o ^ s ^ i) + t[9] - 640364487 | 0, e = (e << 4 | e >>> 28) + o | 0, i += (e ^ o ^ s) + t[12] - 421815835 | 0, i = (i << 11 | i >>> 21) + e | 0, s += (i ^ e ^ o) + t[15] + 530742520 | 0, s = (s << 16 | s >>> 16) + i | 0, o += (s ^ i ^ e) + t[2] - 995338651 | 0, o = (o << 23 | o >>> 9) + s | 0, e += (s ^ (o | ~i)) + t[0] - 198630844 | 0, e = (e << 6 | e >>> 26) + o | 0, i += (o ^ (e | ~s)) + t[7] + 1126891415 | 0, i = (i << 10 | i >>> 22) + e | 0, s += (e ^ (i | ~o)) + t[14] - 1416354905 | 0, s = (s << 15 | s >>> 17) + i | 0, o += (i ^ (s | ~e)) + t[5] - 57434055 | 0, o = (o << 21 | o >>> 11) + s | 0, e += (s ^ (o | ~i)) + t[12] + 1700485571 | 0, e = (e << 6 | e >>> 26) + o | 0, i += (o ^ (e | ~s)) + t[3] - 1894986606 | 0, i = (i << 10 | i >>> 22) + e | 0, s += (e ^ (i | ~o)) + t[10] - 1051523 | 0, s = (s << 15 | s >>> 17) + i | 0, o += (i ^ (s | ~e)) + t[1] - 2054922799 | 0, o = (o << 21 | o >>> 11) + s | 0, e += (s ^ (o | ~i)) + t[8] + 1873313359 | 0, e = (e << 6 | e >>> 26) + o | 0, i += (o ^ (e | ~s)) + t[15] - 30611744 | 0, i = (i << 10 | i >>> 22) + e | 0, s += (e ^ (i | ~o)) + t[6] - 1560198380 | 0, s = (s << 15 | s >>> 17) + i | 0, o += (i ^ (s | ~e)) + t[13] + 1309151649 | 0, o = (o << 21 | o >>> 11) + s | 0, e += (s ^ (o | ~i)) + t[4] - 145523070 | 0, e = (e << 6 | e >>> 26) + o | 0, i += (o ^ (e | ~s)) + t[11] - 1120210379 | 0, i = (i << 10 | i >>> 22) + e | 0, s += (e ^ (i | ~o)) + t[2] + 718787259 | 0, s = (s << 15 | s >>> 17) + i | 0, o += (i ^ (s | ~e)) + t[9] - 343485551 | 0, o = (o << 21 | o >>> 11) + s | 0, a[0] = e + a[0] | 0, a[1] = o + a[1] | 0, a[2] = s + a[2] | 0, a[3] = i + a[3] | 0
                }
                start() {
                    return this._dataLength = 0, this._bufferLength = 0, this._state.set(S.stateIdentity), this
                }
                appendStr(a) {
                    const t = this._buffer8,
                        e = this._buffer32;
                    let s, i, o = this._bufferLength;
                    for (i = 0; i < a.length; i += 1) {
                        if (s = a.charCodeAt(i), s < 128) t[o++] = s;
                        else if (s < 2048) t[o++] = 192 + (s >>> 6), t[o++] = 63 & s | 128;
                        else if (s < 55296 || s > 56319) t[o++] = 224 + (s >>> 12), t[o++] = s >>> 6 & 63 | 128, t[o++] = 63 & s | 128;
                        else {
                            if (s = 1024 * (s - 55296) + (a.charCodeAt(++i) - 56320) + 65536, s > 1114111) throw new Error("Unicode standard supports code points up to U+10FFFF");
                            t[o++] = 240 + (s >>> 18), t[o++] = s >>> 12 & 63 | 128, t[o++] = s >>> 6 & 63 | 128, t[o++] = 63 & s | 128
                        }
                        o >= 64 && (this._dataLength += 64, S._md5cycle(this._state, e), o -= 64, e[0] = e[16])
                    }
                    return this._bufferLength = o, this
                }
                appendAsciiStr(a) {
                    const t = this._buffer8,
                        e = this._buffer32;
                    let s, o = this._bufferLength,
                        i = 0;
                    for (;;) {
                        for (s = Math.min(a.length - i, 64 - o); s--;) t[o++] = a.charCodeAt(i++);
                        if (o < 64) break;
                        this._dataLength += 64, S._md5cycle(this._state, e), o = 0
                    }
                    return this._bufferLength = o, this
                }
                appendByteArray(a) {
                    const t = this._buffer8,
                        e = this._buffer32;
                    let s, o = this._bufferLength,
                        i = 0;
                    for (;;) {
                        for (s = Math.min(a.length - i, 64 - o); s--;) t[o++] = a[i++];
                        if (o < 64) break;
                        this._dataLength += 64, S._md5cycle(this._state, e), o = 0
                    }
                    return this._bufferLength = o, this
                }
                getState() {
                    const a = this._state;
                    return {
                        buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
                        buflen: this._bufferLength,
                        length: this._dataLength,
                        state: [a[0], a[1], a[2], a[3]]
                    }
                }
                setState(a) {
                    const t = a.buffer,
                        e = a.state,
                        o = this._state;
                    let s;
                    for (this._dataLength = a.length, this._bufferLength = a.buflen, o[0] = e[0], o[1] = e[1], o[2] = e[2], o[3] = e[3], s = 0; s < t.length; s += 1) this._buffer8[s] = t.charCodeAt(s)
                }
                end(a = !1) {
                    const t = this._bufferLength,
                        e = this._buffer8,
                        o = this._buffer32,
                        s = 1 + (t >> 2);
                    this._dataLength += t;
                    const i = 8 * this._dataLength;
                    if (e[t] = 128, e[t + 1] = e[t + 2] = e[t + 3] = 0, o.set(S.buffer32Identity.subarray(s), s), t > 55 && (S._md5cycle(this._state, o), o.set(S.buffer32Identity)), i <= 4294967295) o[14] = i;
                    else {
                        const n = i.toString(16).match(/(.*?)(.{0,8})$/);
                        if (null === n) return;
                        const d = parseInt(n[2], 16),
                            u = parseInt(n[1], 16) || 0;
                        o[14] = d, o[15] = u
                    }
                    return S._md5cycle(this._state, o), a ? this._state : S._hex(this._state)
                }
            }
            if (S.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]), S.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), S.hexChars = "0123456789abcdef", S.hexOut = [], S.onePassHasher = new S, "5d41402abc4b2a76b9719d911017c592" !== S.hashStr("hello")) throw new Error("Md5 self test failed.");
            let Z = (() => {
                class r extends yt.ho {
                    constructor() {
                        super(), this.roomApi = (0, b.f3M)(g.Sz), this.companyVendorId = (0, b.f3M)(h.Mk), this.configProvider = (0, b.f3M)(g.FI), this.dialogProvider = (0, b.f3M)(g._R), this.roomsProvider = (0, b.f3M)(g.XZ), this.navigationProvider = (0, b.f3M)(g.YD), this.productKey = "product", this.activeProduct$ = this.store.select(at), this.activeEpoxyProducts$ = this.store.select(pt), this.activeProducts$ = this.store.select(Rt), this.hotpointProductMap$ = this.store.select(It), this.visualizationUpdate$ = this.store.select(ut), this.productsBaseData$ = this.store.select(ot).pipe((0, X.P)(({
                            breadcrumb: t
                        }) => !!t)), this.selectedProducts$ = this.store.select(Mt), this.selectFilterDefinitions$ = this.store.select(K), this.selectFilterValues$ = this.store.select(J), this.filtersLoading$ = this.store.select(Ft), this.likedProducts$ = this.store.select(Et), this.likedProductsMap$ = this.store.select(ct), this.currentItems$ = this.store.select(mt), this.currentEpoxyChips$ = this.store.select(St), this.currentEpoxyColors$ = this.store.select(nt), this.transformations$ = this.store.select(xt), this.epoxyLoaded$ = this.store.select(bt), this.eventsProvider = (0, b.f3M)(et.QT), this.storageProvider = (0, b.f3M)(g.Fg), this.activeProductsSettings = {}, this.initLoad()
                    }
                    fetchProduct(t) {
                        return this.store.dispatch(l.fetchProduct({
                            productId: t
                        })), this.store.select(ft).pipe((0, X.P)(({
                            cachedProducts: e,
                            productErrors: o
                        }) => !!e[t] || !0 === o[t]), (0, N.U)(({
                            cachedProducts: e,
                            productErrors: o
                        }) => {
                            if (!o[t]) return e[t] ? new v.qn(e[t]) : void 0
                        }))
                    }
                    fetchInitialProduct(t, e, o) {
                        this.store.dispatch(l.getInitialProduct({
                            productId: t,
                            sku: e,
                            externalId: o,
                            dynamicProduct: null,
                            hotpoints: []
                        }))
                    }
                    fetchEpoxyColors(t) {
                        this.store.dispatch(l.fetchEpoxyColors({
                            epoxyColorsId: t
                        }))
                    }
                    fetchEpoxyChips(t) {
                        this.store.dispatch(l.fetchEpoxyChips({
                            epoxyChipsId: t
                        }))
                    }
                    fetchEpoxy(t) {
                        this.store.dispatch(l.fetchEpoxyRoot({
                            epoxyIds: t
                        }))
                    }
                    fetchProductBase(t, e, o) {
                        this.store.dispatch(l.fetchProductBase({
                            productId: t,
                            sku: e,
                            externalId: o
                        }))
                    }
                    setEpoxyLoaded(t) {
                        this.store.dispatch(l.setEpoxyLoaded({
                            loaded: t
                        }))
                    }
                    setBreadcrumb(t) {
                        this.store.dispatch(l.setProductBase({
                            breadcrumbItems: t
                        }))
                    }
                    clearBreadcrumb() {
                        this.store.dispatch(l.clearBreadcrumb({}))
                    }
                    setActiveProduct(t, e, o) {
                        let s = t;
                        if (t) {
                            const i = t.generateTileOptions();
                            this.navigationProvider.appendQueryParam(this.productKey, t.id), s = i, this.setDefaultPatternAndGrout(t)
                        }
                        this.store.dispatch(l.setActiveProduct({
                            product: s,
                            updateVisualization: e,
                            additional: o
                        }))
                    }
                    setDefaultPatternAndGrout(t) {
                        const o = t.tileOptions[0] && v.eH.includes(t.tileOptions[0].fugueUnit) ? v.QC.inch : v.QC.mm,
                            s = t.defaultPattern || t.patterns?. [0] || v.oL.random,
                            i = t.tileOptions[0]?.fugueColor || v.YU,
                            n = t.tileOptions[0]?.fugueSize || v.Nh,
                            d = t.tileOptions[0]?.fugueUnit || o;
                        this.store.dispatch(l.setPatternAndGrout({
                            pattern: s,
                            grout: {
                                color: i,
                                size: n,
                                unit: d
                            }
                        })), this.eventsProvider.send(new g._5(s, {
                            color: i,
                            size: n,
                            unit: d
                        }))
                    }
                    setEpoxyProduct(t, e) {
                        let o = t;
                        if (t) {
                            const s = t.generateTileOptions();
                            this.navigationProvider.appendQueryParam(this.productKey, t.id), o = s
                        }
                        this.store.dispatch(l.setEpoxyProduct({
                            product: o,
                            isColor: e
                        }))
                    }
                    toggleFavouriteProduct(t) {
                        this.store.dispatch(l.favProduct({
                            product: t
                        }))
                    }
                    updateHotpointsMap(t) {
                        t && this.store.dispatch(l.updateHotpointsMap({
                            selectionMap: t
                        }))
                    }
                    clearProduct(t) {
                        this.store.dispatch(l.setActiveProduct({
                            product: void 0,
                            remove: !0,
                            updateVisualization: !0
                        })), this.eventsProvider.send(new g.A1(t)), this.activeProductsSettings = {}
                    }
                    clearEpoxyColor(t) {
                        this.store.dispatch(l.setEpoxyProduct({
                            product: void 0,
                            isColor: !0
                        })), this.eventsProvider.send(new g.A1(t))
                    }
                    clearEpoxyChip(t) {
                        this.store.dispatch(l.setEpoxyProduct({
                            product: void 0,
                            isColor: !1
                        })), this.eventsProvider.send(new g.A1(t))
                    }
                    clearEpoxy() {
                        this.configProvider.companyConfig$.pipe((0, D.q)(1), (0, C.b)(t => {
                            t.company?.supportsBaseColorsInCatalogsVisibility && (this.clearEpoxyChip(), this.clearEpoxyColor())
                        })).subscribe()
                    }
                    clearProducts() {
                        this.store.dispatch(l.clearProductItems({}))
                    }
                    setFiltersLoading(t) {
                        this.store.dispatch(l.setFiltersLoading({
                            value: t
                        }))
                    }
                    patchFilters(t, e = !0) {
                        this.store.dispatch(l.patchFilters({
                            ...t,
                            executeSearch: e
                        }))
                    }
                    filterProductsCall(t) {
                        return this.store.select(Ct).pipe((0, D.q)(1), (0, H.M)(this.roomsProvider.activeRoom$, this.configProvider.companyConfig$), (0, x.w)(([e, o, s]) => {
                            const i = s.company?.filterProductsByRoomCategory && o?.category || v.SG.none,
                                n = S.hashStr(JSON.stringify({
                                    ...t || {},
                                    id: o?.id || "",
                                    category: i
                                })),
                                d = e[n];
                            return (0, q.D)([d ? (0, w.of)(d) : this.roomApi.filterProducts({
                                ...t,
                                category: i
                            }), (0, w.of)(n)])
                        }), (0, C.b)(([e, o]) => {
                            this.store.dispatch(l.updateProductItemsCache({
                                hash: o,
                                response: e
                            })), this.setFiltersLoading(!1)
                        }))
                    }
                    getCatalogId(t) {
                        return t?.length && t?.at(-1)?.id || ""
                    }
                    parseToFilterDefsCall(t, e, o = {}) {
                        const s = {
                            ...o || {},
                            ...e || {}
                        };
                        let i = {};
                        return Object.keys(o).forEach(n => {
                            i[n] = {}, o[n].value.forEach(d => i[n][d] = !0)
                        }), i = {
                            ...i,
                            ...e
                        }, Object.keys(s).map(n => {
                            const d = s[n],
                                u = Object.keys(i[n] || {}).filter(E => i[n][E]);
                            return u?.length ? {
                                fieldName: n,
                                filterValueType: d?.filterValueType ?? t[n].filterValueType,
                                isChildRelation: d?.isChildRelation ?? t[n].isChildRelation,
                                routeName: d?.routeName ?? t[n].routeName,
                                value: u,
                                filterParent: t[n]?.filterParent,
                                filterType: t[n]?.filterType,
                                parentRelation: t[n]?.parentRelation
                            } : {
                                fieldName: n
                            }
                        })
                    }
                    setProductItems(t) {
                        this.store.dispatch(l.setProductItems({
                            response: t
                        }))
                    }
                    updateTransformationsData() {
                        this.hotpointProductMap$.pipe((0, D.q)(1), (0, H.M)(this.transformations$), (0, C.b)(([t, e]) => {
                            Object.values(t).forEach(o => {
                                o.selected && o.product && (this.activeProductsSettings[o.hotpoint.id] = e)
                            })
                        })).subscribe()
                    }
                    resetTransformationsData() {
                        this.store.dispatch(l.updateTransformationsData({
                            data: {
                                rotation: 0,
                                transition: {
                                    x: 0,
                                    y: 0
                                },
                                pattern: v.oL.random,
                                density: void 0,
                                options: void 0,
                                grout: {
                                    color: v.YU,
                                    size: v.Nh,
                                    unit: v.QC.mm
                                }
                            }
                        }))
                    }
                    applyTransformationsData(t) {
                        this.activeProductsSettings[t] && this.store.dispatch(l.updateTransformationsData({
                            data: this.activeProductsSettings[t]
                        }))
                    }
                    updateRender(t) {
                        this.transformations$.pipe((0, D.q)(1), (0, C.b)(e => {
                            this.eventsProvider.send(new g.U2(e, t))
                        })).subscribe()
                    }
                    updateRotation(t) {
                        isNaN(t) || (this.eventsProvider.send(new g.DF(t)), this.store.dispatch(l.setRotation({
                            angle: t
                        })))
                    }
                    updateTransition(t, e) {
                        isNaN(t) || !e || (this.eventsProvider.send(new g.Jb(t, e)), this.store.dispatch(l.setTransition({
                            value: t,
                            transitionType: e
                        })))
                    }
                    updateSize(t) {
                        this.hotpointProductMap$.pipe((0, D.q)(1), (0, C.b)(e => {
                            t?.width && t?.height && this.eventsProvider.send(new g.M2(t, e)), this.store.dispatch(l.setSize({
                                options: t
                            }))
                        })).subscribe()
                    }
                    updatePatternAndGrout(t, e) {
                        if (e) return this.eventsProvider.send(new g._5(t, e)), void this.store.dispatch(l.setPatternAndGrout({
                            pattern: t,
                            grout: e
                        }));
                        this.eventsProvider.send(new g._5(t)), this.store.dispatch(l.setPatternAndGrout({
                            pattern: t
                        }))
                    }
                    randomizePattern() {
                        this.eventsProvider.send(new g.zs)
                    }
                    updateDensity(t) {
                        "number" == typeof t && (this.eventsProvider.send(new g.ys(t)), this.store.dispatch(l.setDensity({
                            density: t
                        })))
                    }
                    initLoad() {
                        const t = this.navigationProvider.getUrl();
                        /\/ar?/.test(t) || (this.setEpoxyLoaded(!1), this.fetchFavourite(), this.watchActiveProduct())
                    }
                    fetchFavourite() {
                        this.storageProvider.get(`${g.dR.likedProducts}-${this.companyVendorId}`).pipe((0, X.P)(), (0, C.b)(t => {
                            this.store.dispatch(l.setFavProductsMap({
                                products: t || {}
                            }))
                        })).subscribe()
                    }
                    watchActiveProduct() {
                        this.activeProduct$.pipe((0, c.R)(this.destroyed), (0, P.h)(t => !t), (0, f.T)(1), (0, C.b)(() => {
                            this.navigationProvider.appendQueryParam(this.productKey, null)
                        })).subscribe(), this.activeProduct$.pipe((0, c.R)(this.destroyed), (0, F.o)(() => !this.storageProvider.getSync(g.dR.rugInfo, g.Z1.session)), (0, P.h)(t => !!t), (0, H.M)(this.roomsProvider.roomEstimation$), (0, C.b)(([t, e]) => {
                            t.isRug && !e?.visitorRoom && !e?.rugPosition && this.showRugInfo()
                        })).subscribe()
                    }
                    showRugInfo() {
                        this.storageProvider.getSync(g.dR.rugInfo, g.Z1.session) || (0, M.D)(m.e(389).then(m.bind(m, 5389))).pipe((0, c.R)(this.destroyed), (0, x.w)(({
                            MessageDialogComponent: e
                        }) => this.dialogProvider.open(e, {
                            data: {
                                text: ["room.products.rugMsg"]
                            }
                        }).beforeClosed()), (0, x.w)(() => this.storageProvider.set(g.dR.rugInfo, !0, g.Z1.session))).subscribe()
                    }
                }
                return r.\u0275fac = function (t) {
                    return new(t || r)
                }, r.\u0275prov = b.Yz7({
                    token: r,
                    factory: r.\u0275fac
                }), r
            })();
            var $ = m(8281);
            const Q = {
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0
            };
            var dt = m(1989);
            let st = (() => {
                class r extends $.m1 {
                    constructor(t, e) {
                        super(structuredClone(Q)), this.eventsProvider = t, this.roomsProvider = e, this.envMap$ = this.select(o => ({
                            rotationX: o.rotationX,
                            rotationY: o.rotationY,
                            rotationZ: o.rotationZ
                        })), this.initLoad()
                    }
                    ngOnDestroy() {
                        super.ngOnDestroy()
                    }
                    initLoad() {
                        this.roomsProvider.roomEstimation$.pipe((0, D.q)(1), (0, C.b)(t => {
                            this.patchState({
                                rotationX: t?.environmentMap?.rotation[0] || 0,
                                rotationY: t?.environmentMap?.rotation[1] || 0,
                                rotationZ: t?.environmentMap?.rotation[2] || 0
                            })
                        })).subscribe(), this.listenToChanges()
                    }
                    updateEnvMapRotation(t, e) {
                        switch (e) {
                        case "x":
                            this.patchState({
                                rotationX: t
                            });
                            break;
                        case "y":
                            this.patchState({
                                rotationY: t
                            });
                            break;
                        case "z":
                            this.patchState({
                                rotationZ: t
                            })
                        }
                    }
                    sendEnvMapRotationEvent() {
                        const {
                            rotationX: t,
                            rotationY: e,
                            rotationZ: o
                        } = this.get();
                        this.eventsProvider.send(new g.io(t, e, o))
                    }
                    listenToChanges() {
                        this.envMap$.pipe((0, dt.b)(50), (0, C.b)(() => {
                            this.sendEnvMapRotationEvent()
                        })).subscribe()
                    }
                }
                return r.\u0275fac = function (t) {
                    return new(t || r)(b.LFG(et.QT), b.LFG(g.XZ))
                }, r.\u0275prov = b.Yz7({
                    token: r,
                    factory: r.\u0275fac
                }), r
            })();
            var ee = m(9739);
            let oe = (() => {
                class r extends $.m1 {
                    constructor() {
                        super({}), this.productsProvider = (0, b.f3M)(g.IA), this.deviceService = (0, b.f3M)(ee.U8), this.likedProductsMap$ = this.productsProvider.likedProductsMap$, this.vm$ = this.select(t => ({
                            products: t.products,
                            productsSimple: t.productsSimple,
                            showScrollUp: !!t.showScrollUp
                        })), this.activeProduct$ = this.productsProvider.activeProduct$, this.connectToProductsProvider()
                    }
                    toggleFavProduct(t) {
                        if (t && t instanceof g.xs) {
                            const e = new v.qn({
                                id: t.id,
                                name: t.name,
                                type: v.kv.floor,
                                ...t
                            });
                            this.productsProvider.toggleFavouriteProduct(e)
                        }
                    }
                    offsetChanged(t) {
                        this.patchState({
                            showScrollUp: t
                        })
                    }
                    productClicked(t) {
                        this.productsProvider.activeProduct$.pipe((0, D.q)(1), (0, x.w)(e => e?.id === t?.id ? (this.deviceService.isMobile && this.deviceService.isMobileSize && this.productsProvider.clearProduct(e), ht.E) : this.productsProvider.fetchProduct(t.id)), (0, D.q)(1), (0, C.b)(e => {
                            this.productsProvider.setActiveProduct(e, !0)
                        })).subscribe()
                    }
                    connectToProductsProvider() {
                        this.productsProvider.likedProducts$.pipe((0, c.R)(this.destroy$), (0, H.M)(this.productsProvider.hotpointProductMap$), (0, C.b)(([t, e]) => {
                            const o = structuredClone(t || []),
                                s = this.getHotpointTypes(e);
                            this.patchState({
                                products: o,
                                productsSimple: s.length ? this.filterAndMapProducts(o, s) : this.productToSimpleProduct(o)
                            })
                        })).subscribe()
                    }
                    filterAndMapProducts(t, e) {
                        const o = t.filter(s => s.placementOptions.some(i => e.includes(i)));
                        return this.productToSimpleProduct(o)
                    }
                    productToSimpleProduct(t) {
                        return t.map(e => {
                            const o = new g.xs({
                                name: e.name,
                                id: e.id
                            });
                            return o.image = e.image, o
                        })
                    }
                    getHotpointTypes(t) {
                        const e = new Set(Object.values(t || {}).filter(s => s.selected).map(s => s.hotpoint.placementOption).flat(1).filter(s => !!s)),
                            o = Array.from(e);
                        return o.includes(v.aR.floors) && !o.includes(v.aR.rugs) && o.push(v.aR.rugs), o
                    }
                }
                return r.\u0275fac = function (t) {
                    return new(t || r)
                }, r.\u0275prov = b.Yz7({
                    token: r,
                    factory: r.\u0275fac
                }), r
            })();
            var _t = m(9489),
                gt = (() => {
                    return (r = gt || (gt = {})).list = "list", r.grid = "grid", gt;
                    var r
                })();
            const se = {
                loading: !1,
                initialLoading: !0,
                currentPage: 1,
                limit: h.Ff.products.pageLimit,
                productsViewType: gt.grid,
                productsOnScreen: {},
                cachedProducts: [],
                cachedProductsMap: {}
            };
            var ie = m(3644);
            let re = (() => {
                class r extends $.m1 {
                    constructor(t, e, o, s, i) {
                        super(), this.route = t, this.dialogProvider = e, this.productsProvider = o, this.navigation = s, this.eventsProvider = i, this.productKey = "product", this.configProvider = (0, b.f3M)(g.FI), this.dynamicProvider = (0, b.f3M)(g.jX), this.roomsProvider = (0, b.f3M)(g.XZ), this.trackingProvider = (0, b.f3M)(h.Hj), this.translationsProvider = (0, b.f3M)(h.pp), this.loadingItems = new Array(28).fill(new g.u6({})), this.activeProduct$ = this.select(n => n.activeProduct), this.showSelection$ = this.select(n => n.showSelection), this.breadcrumb$ = this.select(n => n.breadcrumb || []), this.viewType$ = this.select(n => n.productsViewType), this.loading$ = this.select(n => n.loading), this.showScrollUp$ = this.select(n => n.showScrollUp), this.initialLoading$ = this.select(n => n.initialLoading), this.likedProductsMap$ = this.productsProvider.likedProductsMap$, this.filters$ = this.productsProvider.selectFilterValues$, this.filtersLoading$ = this.productsProvider.filtersLoading$, this.productMessage$ = this.select(n => !!n.onBottomTreeLevel).pipe((0, H.M)(this.configProvider.dynamicFeatures$), (0, N.U)(([n, d]) => n && d?.roomProductMessage ? d?.roomProductMessage : "")), this.showPrice$ = this.configProvider.companyConfig$.pipe((0, N.U)(n => !!n?.company?.showProductPrice)), this.cachedProducts$ = this.select(n => {
                            const d = n.breadcrumb?.at(-1)?.id || "";
                            return {
                                cachedItems: Object.values(n.cachedProductsMap[d] || {}) || [],
                                cachedMap: n.cachedProductsMap[d] || {}
                            }
                        }), this.changeListViewType = this.updater((n, d) => ({
                            ...n,
                            productsViewType: d
                        })), this.itemsData$ = this.select(n => ({
                            items: n.initialLoading ? this.loadingItems : [...n.catalogs || [], ...n.products || []],
                            selectedProducts: n.selectedProducts,
                            catalogId: n.catalogId,
                            productsOnScreen: n.productsOnScreen
                        })), this.initLoad()
                    }
                    get blockSelection() {
                        return this.get().blockSelection
                    }
                    ngOnDestroy() {
                        super.ngOnDestroy(), this.productsProvider.clearProducts()
                    }
                    goCatalogUp() {
                        const {
                            breadcrumb: t
                        } = this.get();
                        !t?.length || this.goToCatalog(t?.length - 1)
                    }
                    goToCatalog(t) {
                        if (this.get().initialLoading) return;
                        this.patchState({
                            initialLoading: !0
                        });
                        const {
                            breadcrumb: e
                        } = this.get(), i = e?.length || 1;
                        if (t > i || i <= 1) return void this.patchState({
                            initialLoading: !1
                        });
                        const n = this.getNewCachedProductsMap(),
                            d = e?.slice(0, t) || [];
                        this.patchState({
                            breadcrumb: d,
                            initialLoading: !0,
                            productId: "",
                            cachedProductsMap: n
                        }), this.filterCall(d.at(-1).id, 1)
                    }
                    loadMore() {
                        const {
                            currentPage: t,
                            initialLoading: e,
                            loading: o,
                            pages: s
                        } = this.get();
                        e || o || (s || 1) < t + 1 || (this.patchState({
                            loading: !0,
                            currentPage: t + 1
                        }), this.filterCall())
                    }
                    selectItem(t) {
                        t.type === g.cA.catalog && this.patchState({
                            initialLoading: !0
                        }), t.type !== g.cA.catalog ? (this.patchState({
                            blockSelection: !0
                        }), this.productCall(t).pipe((0, c.R)(this.destroy$), (0, C.b)(() => this.patchState({
                            blockSelection: !1
                        }))).subscribe()) : this.filterCall(t.id, 1)
                    }
                    toggleFavProduct(t, e) {
                        t && this.productsProvider.hotpointProductMap$.pipe((0, c.R)(this.destroy$), (0, D.q)(1), (0, H.M)(this.roomsProvider.activeRoom$), (0, C.b)(([o, s]) => {
                            this.trackingProvider.track(g.y8.addToFav, {
                                product_name: t.name?.default,
                                room_name: s?.name,
                                sku: t.sku || null,
                                isLiked: e
                            });
                            const i = this.getHotpointTypes(o),
                                n = new v.qn({
                                    id: t.id,
                                    name: t.name,
                                    type: v.kv.floor,
                                    ...t,
                                    placementOptions: [...i]
                                });
                            n.image = structuredClone(t.image), this.productsProvider.toggleFavouriteProduct(n)
                        })).subscribe()
                    }
                    openFilters() {
                        const {
                            filters: t,
                            filtersMap: e,
                            search: o
                        } = this.get();
                        (0, M.D)(Promise.all([m.e(487), m.e(592), m.e(871)]).then(m.bind(m, 6871))).pipe((0, x.w)(({
                            ProductFiltersComponent: s
                        }) => this.dialogProvider.open(s, {
                            backdropClass: h.bj.darkOverlay,
                            panelClass: h.bj.centerOverlay,
                            containerClass: h.bj.stretchWrapper,
                            data: {
                                valuesMap: e,
                                values: t,
                                search: o
                            }
                        }).beforeClosed()), (0, P.h)(s => !!s), (0, C.b)(s => {
                            this.productsProvider.patchFilters({
                                filters: s?.values,
                                phrase: s.search,
                                page: 1
                            })
                        })).subscribe()
                    }
                    openFiltersDesktop() {
                        (0, M.D)(Promise.all([m.e(592), m.e(1)]).then(m.bind(m, 2001))).pipe((0, H.M)(this.productsProvider.selectFilterDefinitions$, this.productsProvider.selectFilterValues$), (0, C.b)(([{
                            FiltersDialogComponent: t
                        }, e, o]) => {
                            const s = {},
                                i = {};
                            e?.forEach(n => {
                                if (s[n.key?.fieldName] = n, !i[n.key?.fieldName]) {
                                    i[n.key?.fieldName] = {};
                                    const d = o?.values?.find(u => u.fieldName === n.key?.fieldName);
                                    d && d.value?.forEach(u => i[n.key?.fieldName][u] = !0)
                                }
                            }), this.dialogProvider.open(t, {
                                backdropClass: h.bj.darkOverlay,
                                panelClass: h.bj.centerOverlay,
                                containerClass: h.bj.stretchWrapper,
                                data: {
                                    filterDefsMap: s || {},
                                    filterValues: i || {},
                                    currentLang: this.translationsProvider.currentLang
                                }
                            }).beforeClosed().pipe((0, P.h)(n => !!n), (0, C.b)(n => {
                                this.productsProvider.setFiltersLoading(!0);
                                const {
                                    search: d
                                } = this.get(), u = this.productsProvider.parseToFilterDefsCall(s, n);
                                this.productsProvider.patchFilters({
                                    filters: u,
                                    phrase: d
                                })
                            })).subscribe()
                        })).subscribe()
                    }
                    offsetChanged(t) {
                        this.patchState({
                            showScrollUp: t
                        })
                    }
                    getHotpointTypes(t) {
                        const e = new Set(Object.values(t || {}).filter(o => o.selected).map(o => o.hotpoint.placementOption).flat(1).filter(o => !!o));
                        return Array.from(e)
                    }
                    initLoad() {
                        const t = this.route.snapshot.queryParamMap.get("product") || "",
                            e = this.route.snapshot.queryParamMap.get("sku") || "",
                            o = this.route.snapshot.queryParamMap.get("extId") || "";
                        this.setState({
                            ...se,
                            productId: t
                        }), this.productsProvider.fetchProductBase(t, e, o), (0, q.D)([this.productsProvider.productsBaseData$.pipe((0, X.P)(s => !!s.breadcrumb?.length)), t ? this.productsProvider.activeProduct$.pipe((0, X.P)(s => void 0 !== s)) : (0, w.of)(null), this.productsProvider.selectFilterValues$.pipe((0, D.q)(1))]).pipe((0, c.R)(this.destroy$), (0, N.U)(([{
                            filterDefinitions: s,
                            breadcrumb: i
                        }, n, d]) => {
                            const u = {};
                            s?.forEach(B => u[B.key?.fieldName] = B);
                            const E = this.productsProvider.getCatalogId(i);
                            return this.patchState({
                                breadcrumb: structuredClone(i),
                                filterDefs: s,
                                filterDefsMap: u,
                                filters: d?.values,
                                filtersMap: d?.valuesMap || {},
                                search: d?.search,
                                product: n,
                                activeProduct: n || null,
                                productId: n?.id
                            }), E
                        }), (0, G.g)(50), (0, N.U)(s => (this.listenToFiltersChange(), this.listenToItems(), this.listenToProductChange(), s)), (0, G.g)(50), (0, x.w)(s => this.configProvider.companyConfig$.pipe((0, C.b)(i => {
                            i.company?.filterProductsByRoomCategory ? this.filterCallWait(s) : this.filterCall(s)
                        })))).subscribe()
                    }
                    listenToProductChange() {
                        this.productsProvider.hotpointProductMap$.pipe((0, c.R)(this.destroy$), (0, C.b)(t => {
                            this.patchState({
                                hotpoints: t
                            }), this.resolveCanSelect(t)
                        })).subscribe(), this.productsProvider.selectedProducts$.pipe((0, c.R)(this.destroy$), (0, C.b)(t => {
                            this.patchState({
                                selectedProducts: [...t]
                            })
                        })).subscribe(), this.productsProvider.activeProduct$.pipe((0, c.R)(this.destroy$), (0, C.b)(t => {
                            this.patchState(t ? {
                                activeProduct: t
                            } : {
                                productId: "",
                                activeProduct: null
                            })
                        })).subscribe()
                    }
                    filterCallWait(t = "") {
                        this.roomsProvider.activeRoom$.pipe((0, P.h)(e => !!e?.category || !!e?.visitorRoom), (0, C.b)(() => this.filterCall(t))).subscribe()
                    }
                    filterCall(t = "", e) {
                        const {
                            activeProduct: o,
                            filters: s,
                            breadcrumb: i,
                            currentPage: n,
                            search: d
                        } = this.get(), u = t || i?.at(-1)?.id || "";
                        this.productsProvider.patchFilters({
                            filters: [...s || []],
                            catalogId: u,
                            excludedProductId: o?.id,
                            page: e || n,
                            phrase: d
                        })
                    }
                    listenToItems() {
                        this.productsProvider.currentItems$.pipe((0, P.h)(t => !!t), (0, H.M)(this.configProvider.dynamicFeatures$), (0, C.b)(([t, e]) => {
                            const {
                                breadcrumb: o,
                                activeProduct: s,
                                catalogs: i,
                                products: n,
                                hotpoints: d
                            } = this.get(), {
                                data: u,
                                pages: E,
                                count: B
                            } = t || {}, R = t?.data?.parent, A = t.currentPage > 1, z = t?.currentPage || 1, it = [...o || []];
                            it?.length && it.at(-1).id !== u?.parent?.id && it.push({
                                id: u?.parent.id || "",
                                name: u?.parent.name || "",
                                image: u?.parent.image || {}
                            }), s || this.navigation.appendQueryParam(this.productKey, null);
                            const rt = u?.catalogs.map(qt => new g.u6(qt)) || [],
                                kt = u?.products.map(qt => new g.xs(qt, R?.id)) || [];
                            this.productsProvider.setBreadcrumb(it);
                            const te = !rt?.length && !!kt?.length;
                            this.dynamicProvider.headerData?.next({
                                headerDynamicMessage: te ? e?.roomProductMessage : ""
                            }), this.patchState({
                                catalogs: A ? [...i || [], ...rt] : rt,
                                products: A ? [...n || [], ...kt] : kt,
                                onBottomTreeLevel: te,
                                parentCatalog: new g.u6(u?.parent),
                                loading: !1,
                                initialLoading: !1,
                                pages: E,
                                catalogId: R?.id,
                                productsCount: B,
                                currentPage: z,
                                breadcrumb: it
                            }), this.resolveCanSelect(d || {}), 0 === B && this.goToCatalog(1)
                        }), (0, c.R)(this.destroy$)).subscribe()
                    }
                    productCall(t) {
                        const {
                            activeProduct: e,
                            showSelection: o,
                            hotpoints: s
                        } = this.get(), i = t?.id || "", n = Object.values(s || {})?.filter(u => u.selected), d = n.map(u => u.product?.id);
                        return d.some(u => u === i) && 1 === d.length ? (0, w.of)(e) : !o || n.some(u => !u.product) ? this.productsProvider.fetchProduct(i).pipe((0, C.b)(u => {
                            u ? (u.parentId = t.parentId, this.patchState({
                                activeProduct: u,
                                productId: i
                            }), this.productsProvider.setActiveProduct(u, !0, !0)) : this.productCallErrorDialog()
                        })) : e?.id === i ? (0, w.of)(e) : this.productsProvider.fetchProduct(i).pipe((0, C.b)(u => {
                            u ? (u.parentId = t.parentId, this.patchState({
                                activeProduct: u,
                                productId: i
                            }), this.productsProvider.setActiveProduct(u, !0)) : this.productCallErrorDialog()
                        }))
                    }
                    productCallErrorDialog() {
                        this.dialogProvider.open(_t.I, {
                            backdropClass: h.bj.darkOverlay,
                            panelClass: h.bj.centerOverlay,
                            data: {
                                message: "room.productCallError"
                            }
                        }).beforeClosed()
                    }
                    listenToFiltersChange() {
                        this.productsProvider.selectFilterValues$.pipe((0, c.R)(this.destroy$), (0, dt.b)(100), (0, C.b)(t => {
                            this.patchState({
                                filtersMap: t?.valuesMap || {},
                                filters: t?.values || [],
                                search: t?.search || ""
                            })
                        })).subscribe()
                    }
                    resolveCanSelect(t) {
                        const e = this.get().activeProduct,
                            o = {},
                            s = Object.values(t || {}).filter(d => (d.product && (o[d.product.id] = !0), d.selected));
                        if (this.patchState({
                                productsOnScreen: o
                            }), 1 === s.length) return void this.patchState({
                            showSelection: s[0].product?.id === e?.id
                        });
                        const i = new Set(s.map(d => d.product?.id).filter(d => !!d)),
                            n = Object.values(t || {}).filter(d => d.hotpoint.placementOption !== v.aR.floors).some(d => !d.product && d.selected);
                        this.patchState({
                            showSelection: !(n || i.size > 1)
                        })
                    }
                    getNewCachedProductsMap() {
                        const {
                            hotpoints: t,
                            breadcrumb: e,
                            cachedProductsMap: o
                        } = this.get(), s = Object.values(t || {}).filter(d => !!d.product).map(d => d.product), i = structuredClone(o), n = e?.at(-1)?.id;
                        if (n) {
                            i[n] = {}, (s || []).filter(u => u.parentId === n).forEach(u => {
                                i[n][u.id] = new g.xs({
                                    id: u.id,
                                    type: u.type,
                                    visibleOnLite: !1,
                                    name: u.name,
                                    parentId: u.parentId,
                                    rgbaColor: u.rgbaColor ?? void 0
                                }), i[n][u.id].image = structuredClone(u?.image)
                            });
                            const d = s?.map(u => u.id) || [];
                            Object.keys(i).forEach(u => {
                                const E = i[u];
                                Object.values(E || {}).forEach(B => {
                                    d.includes(B.id) || delete E[B.id]
                                })
                            })
                        }
                        return i
                    }
                }
                return r.\u0275fac = function (t) {
                    return new(t || r)(b.LFG(ie.gz), b.LFG(g._R), b.LFG(g.IA), b.LFG(g.YD), b.LFG(et.QT))
                }, r.\u0275prov = b.Yz7({
                    token: r,
                    factory: r.\u0275fac
                }), r
            })();
            var lt = (() => {
                return (r = lt || (lt = {})).select = "select", r.colors = "colors", r.chips = "chips", r.density = "density", lt;
                var r
            })();
            const ae = {
                loading: !0,
                initialLoading: !0,
                chipsLoaded: !1,
                currentPage: 1,
                limit: h.Ff.products.pageLimit,
                activeColor: null,
                activeChip: null,
                view: lt.select,
                cachedProducts: [],
                cachedProductsMap: {}
            };
            let ne = (() => {
                class r extends $.m1 {
                    constructor() {
                        super(structuredClone(ae)), this.configProvider = (0, b.f3M)(g.FI), this.productsProvider = (0, b.f3M)(g.IA), this.dialogProvider = (0, b.f3M)(g._R), this.roomsProvider = (0, b.f3M)(g.XZ), this.loadingItems = new Array(28).fill(new g.u6({})), this.breadcrumb$ = this.select(t => t.breadcrumb || []), this.loading$ = this.select(t => t.loading), this.initialLoading$ = this.select(t => t.initialLoading), this.showScrollUp$ = this.select(t => t.showScrollUp), this.cachedProducts$ = this.select(t => {
                            const e = t.breadcrumb?.at(-1)?.id || "";
                            return {
                                cachedItems: Object.values(t.cachedProductsMap[e] || {}) || [],
                                cachedMap: t.cachedProductsMap[e] || {}
                            }
                        }), this.name$ = this.select(t => t.activeColor || t.activeChip ? `${t.activeColor?.name?.default||""} ${t.activeChip?.name?.default||""}`.trim() : "-"), this.activeColor$ = this.select(t => t.activeColor), this.colorsData$ = this.select(t => ({
                            colors: t.initialLoading ? this.loadingItems : [...t.catalogs || [], ...t.epoxyColors || []],
                            catalogId: t.catalogId,
                            isCatalog: t.catalogs?.length
                        })), this.activeChip$ = this.select(t => t.activeChip), this.chips$ = this.select(t => t.epoxyChips), this.views$ = this.select(t => ({
                            view: t.view,
                            allViewTypes: lt
                        })), this.changeView = this.updater((t, e) => ({
                            ...t,
                            view: e
                        })), this.showEpoxyCatalogs$ = this.select(t => t.supportsBaseColorsInCatalogsVisibility), this.dynamicFeatures$ = this.configProvider.dynamicFeatures$, this.density$ = this.productsProvider.transformations$.pipe((0, N.U)(t => t.density || v.RQ.light)), this.initLoad()
                    }
                    get blockSelection() {
                        return this.get().blockSelection
                    }
                    ngOnDestroy() {
                        super.ngOnDestroy(), this.productsProvider.clearProducts()
                    }
                    goCatalogUp() {
                        const {
                            breadcrumb: t
                        } = this.get();
                        !t?.length || this.goToCatalog(t?.length - 1)
                    }
                    goToCatalog(t) {
                        if (this.get().initialLoading) return;
                        this.patchState({
                            loading: !0
                        });
                        const {
                            breadcrumb: e
                        } = this.get(), o = e?.length || 1;
                        if (t > o || o <= 1) return void this.patchState({
                            loading: !1
                        });
                        const s = this.getNewCachedProductsMap(),
                            i = e?.slice(0, t) || [];
                        this.patchState({
                            breadcrumb: i,
                            loading: !0,
                            cachedProductsMap: s
                        }), this.filterCall(i.at(-1).id, 1)
                    }
                    loadMore() {
                        const {
                            currentPage: t,
                            initialLoading: e,
                            loading: o,
                            pages: s
                        } = this.get();
                        e || o || (s || 1) < t + 1 || (this.patchState({
                            loading: !0,
                            currentPage: t + 1
                        }), this.filterCall())
                    }
                    selectProduct(t) {
                        t.type === g.cA.catalog && this.patchState({
                            loading: !0
                        }), t.type !== g.cA.catalog ? (this.patchState({
                            blockSelection: !0
                        }), this.productsProvider.fetchProduct(t.id).pipe((0, C.b)(o => {
                            if (!o) return this.patchState({
                                blockSelection: !1
                            }), void this.productCallErrorDialog();
                            o.parentId = t.parentId;
                            const s = o.type === v.kv.epoxyBase;
                            if (s) this.patchState({
                                activeColor: o
                            }), this.productsProvider.setEpoxyProduct(o, s);
                            else {
                                if (!this.get().activeColor) return void this.patchState({
                                    blockSelection: !1
                                });
                                this.patchState({
                                    activeChip: o
                                }), this.productsProvider.setEpoxyProduct(o, s)
                            }
                            this.patchState({
                                blockSelection: !1
                            })
                        })).subscribe()) : this.filterCall(t.id, 1)
                    }
                    updateDensity(t) {
                        null != t && this.productsProvider.updateDensity(t)
                    }
                    initLoad() {
                        this.connectToState(), this.productsProvider.fetchProductBase(), (0, q.D)([this.productsProvider.productsBaseData$.pipe((0, X.P)(t => !!t.breadcrumb?.length)), this.productsProvider.selectFilterValues$.pipe((0, D.q)(1)), this.configProvider.companyConfig$.pipe((0, D.q)(1))]).pipe((0, c.R)(this.destroy$), (0, x.w)(([{
                            filterDefinitions: t,
                            breadcrumb: e
                        }, o, s]) => {
                            const i = {};
                            t?.forEach(u => i[u.key?.fieldName] = u);
                            const n = this.productsProvider.getCatalogId(e),
                                d = s?.company?.supportsBaseColorsInCatalogsVisibility || !1;
                            return this.productsProvider.patchFilters({
                                filters: [],
                                catalogId: n,
                                page: 1
                            }), this.patchState({
                                breadcrumb: structuredClone(e),
                                filterDefs: t,
                                filterDefsMap: i,
                                filters: o?.values,
                                filtersMap: o?.valuesMap || {},
                                search: o?.search,
                                activeColor: null,
                                supportsBaseColorsInCatalogsVisibility: d
                            }), this.productsProvider.currentItems$
                        }), (0, G.g)(50), (0, C.b)(t => {
                            const e = t?.data.parent.id || "",
                                o = this.get().breadcrumb?.at(0)?.id || "";
                            this.productsProvider.fetchEpoxyColors(e), this.productsProvider.fetchEpoxyChips(o)
                        }), (0, G.g)(5), (0, C.b)(() => {
                            this.listenToFiltersChange(), this.listenToEpoxyColorsChange(), this.listenToEpoxyChipsChange()
                        }), (0, C.b)(() => {
                            this.get().supportsBaseColorsInCatalogsVisibility || this.renderEpoxy()
                        })).subscribe()
                    }
                    renderEpoxy() {
                        this.productsProvider.activeEpoxyProducts$.pipe((0, D.q)(1), (0, H.M)(this.productsProvider.currentEpoxyColors$, this.roomsProvider.loadingRooms$, this.productsProvider.epoxyLoaded$), (0, P.h)(([t, e, o, s]) => {
                            const {
                                loading: i,
                                initialLoading: n
                            } = this.get();
                            return !!e?.data.products && !(i || n || o || s)
                        }), (0, C.b)(([t]) => {
                            if (t.color) {
                                const e = this.get().epoxyColors?.find(o => o.id === t?.color?.id);
                                if (e && (this.selectProduct(e), t.chip)) {
                                    const o = this.get().epoxyChips?.find(s => s.id === t?.chip?.id);
                                    o && (this.selectProduct(o), t.density && this.updateDensity(t.density))
                                }
                            } else {
                                const e = this.get().epoxyColors?. [0];
                                e && (this.selectProduct(e), this.productsProvider.clearEpoxyChip())
                            }
                        }), (0, C.b)(() => {
                            this.productsProvider.setEpoxyLoaded(!0)
                        })).subscribe()
                    }
                    listenToEpoxyColorsChange() {
                        this.productsProvider.currentEpoxyColors$.pipe((0, P.h)(t => !!t), (0, C.b)(t => {
                            if (!this.get().supportsBaseColorsInCatalogsVisibility && t?.data.catalogs.length) return void this.productsProvider.fetchEpoxyColors(t.data.catalogs[0].id);
                            const {
                                breadcrumb: e,
                                catalogs: o,
                                epoxyColors: s
                            } = this.get(), {
                                data: i,
                                pages: n,
                                count: d
                            } = t || {}, u = t?.data?.parent, E = t.currentPage > 1, B = t?.currentPage || 1, R = [...e || []];
                            R?.length && R.at(-1).id !== i?.parent?.id && R.push({
                                id: i?.parent.id || "",
                                name: i?.parent.name || "",
                                image: i?.parent.image || {}
                            });
                            const A = i?.catalogs.map(rt => new g.u6(rt)) || [],
                                z = i?.products.map(rt => new g.xs(rt, u?.id)) || [];
                            this.productsProvider.setBreadcrumb(R);
                            const it = !A?.length && !!z?.length;
                            this.patchState({
                                catalogs: E ? [...o || [], ...A] : A,
                                epoxyColors: E ? [...s || [], ...z] : z,
                                onBottomTreeLevel: it,
                                parentCatalog: new g.u6(i?.parent),
                                pages: n,
                                catalogId: u?.id,
                                productsCount: d,
                                currentPage: B,
                                breadcrumb: R
                            }), 0 == d && this.goToCatalog(1)
                        }), (0, G.g)(100), (0, C.b)(() => {
                            this.get().chipsLoaded && this.patchState({
                                loading: !1,
                                initialLoading: !1
                            })
                        }), (0, c.R)(this.destroy$)).subscribe()
                    }
                    listenToEpoxyChipsChange() {
                        this.productsProvider.currentEpoxyChips$.pipe((0, c.R)(this.destroy$), (0, N.U)(t => {
                            this.get().chipsLoaded || !t || (!t?.data.products.length && t?.data.catalogs.length ? this.productsProvider.fetchEpoxyChips(t.data.catalogs[0].id) : (this.patchState({
                                epoxyChips: t?.data?.products?.map(e => new g.xs(e)) || [],
                                loading: !1,
                                chipsLoaded: !0
                            }), this.get().epoxyColors && this.patchState({
                                loading: !1,
                                initialLoading: !1
                            })))
                        })).subscribe()
                    }
                    filterCall(t = "", e) {
                        const {
                            filters: o,
                            breadcrumb: s,
                            currentPage: i
                        } = this.get(), n = t || s?.at(-1)?.id || "";
                        this.productsProvider.patchFilters({
                            filters: [...o || []],
                            catalogId: n,
                            page: e || i
                        })
                    }
                    productCallErrorDialog() {
                        this.dialogProvider.open(_t.I, {
                            backdropClass: h.bj.darkOverlay,
                            panelClass: h.bj.centerOverlay,
                            data: {
                                message: "room.productCallError"
                            }
                        }).beforeClosed()
                    }
                    listenToFiltersChange() {
                        this.productsProvider.selectFilterValues$.pipe((0, c.R)(this.destroy$), (0, dt.b)(100), (0, C.b)(t => {
                            this.patchState({
                                filtersMap: t?.valuesMap || {},
                                filters: t?.values || [],
                                search: t?.search || ""
                            })
                        })).subscribe()
                    }
                    getNewCachedProductsMap() {
                        const {
                            breadcrumb: t,
                            epoxyColors: e,
                            cachedProductsMap: o
                        } = this.get(), s = structuredClone(o), i = t?.at(-1)?.id;
                        if (i) {
                            s[i] = {}, (e || []).filter(d => d.parentId === i).forEach(d => {
                                s[i][d.id] = new g.xs({
                                    id: d.id,
                                    visibleOnLite: !1,
                                    name: d.name,
                                    parentId: d.parentId
                                }), s[i][d.id].image = structuredClone(d?.image)
                            });
                            const n = e?.map(d => d.id) || [];
                            Object.keys(s).forEach(d => {
                                const u = s[d];
                                Object.values(u || {}).forEach(E => {
                                    n.includes(E.id) || delete u[E.id]
                                })
                            })
                        }
                        return s
                    }
                    connectToState() {
                        this.productsProvider.activeEpoxyProducts$.pipe((0, c.R)(this.destroy$), (0, C.b)(t => {
                            this.patchState({
                                activeColor: t?.color,
                                activeChip: t?.chip
                            })
                        })).subscribe()
                    }
                }
                return r.\u0275fac = function (t) {
                    return new(t || r)
                }, r.\u0275prov = b.Yz7({
                    token: r,
                    factory: r.\u0275fac
                }), r
            })();
            var U = (() => {
                    return (r = U || (U = {})).list = "list", r.options = "options", U;
                    var r
                })(),
                ce = m(5924);
            let de = (() => {
                class r extends $.m1 {
                    constructor(t) {
                        super({
                            view: U.list,
                            tempFilterValues: {},
                            filterValues: {},
                            initialLoading: !0,
                            filtersEnabled: !0
                        }), this.dialogRef = t, this.configProvider = (0, b.f3M)(g.FI), this.productsProvider = (0, b.f3M)(g.IA), this.translationProvider = (0, b.f3M)(h.pp), this.vmData$ = this.select(e => ({
                            showList: e.view === U.list,
                            items: e.items || [],
                            loading: e.loading,
                            initialLoading: e.initialLoading,
                            dialogTitle: e.view === U.list ? "room.filter.search" : "room.filter.filters",
                            dialogIcon: e.view === U.list ? "fl_close" : "fl_arrow_left_o",
                            filtersEnabled: e.filtersEnabled,
                            filterDefs: e.filterDefsMap || {},
                            filterValues: e.tempFilterValues,
                            search: e.search || "",
                            filtersCount: this.filtersCount,
                            currentLang: this.translationProvider.currentLang
                        })), this.likedProductsMap$ = this.productsProvider.likedProductsMap$, this.changeView = this.updater((e, o) => ({
                            ...e,
                            view: o
                        })), this.updateFilters = this.updater((e, o) => {
                            if (!e.filterDefsMap?. [o.key]) return e;
                            const i = {
                                ...e.tempFilterValues,
                                [o.key]: {
                                    ...e.tempFilterValues?. [o.key] || {},
                                    [o.option]: o.value
                                }
                            };
                            return {
                                ...e,
                                tempFilterValues: i
                            }
                        }), this.updateSearch = this.effect(e => e.pipe((0, C.b)(o => this.patchState({
                            search: o
                        })), (0, C.b)(() => {
                            const {
                                filterDefsMap: o,
                                filterValues: s,
                                rootFilterValuesMap: i
                            } = this.get(), n = this.productsProvider.parseToFilterDefsCall(o || {}, s, i);
                            this.showFilteredItems(n)
                        })))
                    }
                    get filtersCount() {
                        return Object.values(this.get().filterValues || {}).filter(t => Object.values(t)?.filter(e => !!e).length)?.length
                    }
                    ngOnDestroy() {
                        super.ngOnDestroy()
                    }
                    applyFilters() {
                        const {
                            view: t,
                            search: e,
                            rootFilterValuesMap: o,
                            filterDefsMap: s,
                            tempFilterValues: i,
                            response: n
                        } = this.get();
                        this.patchState({
                            filterValues: i
                        });
                        const d = this.productsProvider.parseToFilterDefsCall(s || {}, i, o);
                        t === U.list && n ? this.dialogRef.close({
                            values: d,
                            search: e
                        }) : this.showFilteredItems(d)
                    }
                    clearFilters() {
                        const t = {};
                        Object.keys(this.get().tempFilterValues).forEach(e => t[e] = {}), this.patchState({
                            tempFilterValues: t
                        })
                    }
                    headerAction() {
                        const {
                            view: t,
                            filterValues: e
                        } = this.get();
                        if (t === U.options) return this.changeView(U.list), void this.patchState({
                            tempFilterValues: {
                                ...e
                            }
                        });
                        this.dialogRef.close()
                    }
                    loadMore() {
                        const {
                            view: t,
                            filterDefsMap: e,
                            filterValues: o,
                            rootFilterValuesMap: s
                        } = this.get();
                        if (t !== U.list) return;
                        const i = this.productsProvider.parseToFilterDefsCall(e || {}, o, s);
                        this.showFilteredItems(i, !0)
                    }
                    init(t) {
                        this.patchState({
                            initialLoading: !0
                        }), this.productsProvider.selectFilterDefinitions$.pipe((0, D.q)(1), (0, c.R)(this.destroy$), (0, C.b)(e => {
                            const o = {},
                                s = {};
                            e?.forEach(n => {
                                if (o[n.key?.fieldName] = n, !s[n.key?.fieldName]) {
                                    s[n.key?.fieldName] = {};
                                    const d = t?.values?.find(u => u.fieldName === n.key?.fieldName);
                                    d && d.value?.forEach(u => s[n.key?.fieldName][u] = !0)
                                }
                            }), this.patchState({
                                filterDefsMap: o,
                                filterValues: s,
                                search: t?.search || "",
                                rootFilterValuesMap: t?.valuesMap,
                                tempFilterValues: s
                            });
                            const i = this.productsProvider.parseToFilterDefsCall(o || {}, s, t?.valuesMap || {});
                            this.showFilteredItems(i, !1, !0)
                        })).subscribe(), this.configProvider.companyConfig$.pipe((0, D.q)(1), (0, c.R)(this.destroy$), (0, C.b)(e => {
                            this.patchState({
                                filtersEnabled: e.company?.filtersEnabled
                            })
                        })).subscribe()
                    }
                    toggleFavourite(t) {
                        this.productsProvider.toggleFavouriteProduct(new v.qn({
                            id: t.id,
                            name: t.name,
                            image: t.image,
                            visibleOnLite: !0
                        }))
                    }
                    parseProductItems(t) {
                        const e = t?.data;
                        return e ? [...e.products || [], ...e.catalogs || []] : void 0
                    }
                    showFilteredItems(t, e, o) {
                        const {
                            response: s,
                            initialLoading: i,
                            loading: n,
                            items: d,
                            search: u
                        } = this.get(), E = s?.currentPage || 1;
                        if (!o && (n || i || e && E + 1 > (s?.pages || 1))) return;
                        const B = t.filter(R => !!R.value?.length);
                        this.patchState({
                            loading: e,
                            initialLoading: !e,
                            view: U.list
                        }), this.productsProvider.productsBaseData$.pipe((0, c.R)(this.destroy$), (0, D.q)(1), (0, x.w)(R => this.productsProvider.filterProductsCall({
                            filters: B,
                            page: e ? E + 1 : 1,
                            catalogId: R.breadcrumb?. [0]?.id || "",
                            phrase: u
                        })), (0, Y.K)(() => (this.patchState({
                            initialLoading: !1,
                            loading: !1
                        }), ht.E)), (0, C.b)(([R]) => {
                            const A = this.parseProductItems(R);
                            this.patchState({
                                response: R,
                                loading: !1,
                                initialLoading: !1,
                                view: U.list,
                                items: e ? [...d || [], ...A || []] : A
                            })
                        })).subscribe()
                    }
                }
                return r.\u0275fac = function (t) {
                    return new(t || r)(b.LFG(ce.JH))
                }, r.\u0275prov = b.Yz7({
                    token: r,
                    factory: r.\u0275fac
                }), r
            })()
        },
        973: (_, k, m) => {
            m.d(k, {
                wT: () => tt,
                Be: () => ct,
                uG: () => G,
                Wo: () => D,
                qE: () => Pt,
                od: () => vt
            });
            var p = m(1773),
                l = m(2560),
                v = m(6096),
                h = m(9263);
            const y = (0, h.R7)({
                    source: "Rooms",
                    events: {
                        "Load Rooms Init": (0, h.uZ)(),
                        "Load Rooms": (0, h.uZ)(),
                        "Update Base Rooms": (0, h.Ky)(),
                        "Set Rooms Loading": (0, h.Ky)(),
                        "Set Active Room": (0, h.Ky)(),
                        "Set Hotpoints": (0, h.Ky)(),
                        "Save Rooms": (0, h.Ky)(),
                        "Set Room Estimation": (0, h.Ky)(),
                        "Set Hotpoint Visibility": (0, h.Ky)(),
                        "Set Zoom Tutorial Seen": (0, h.uZ)(),
                        "Set Zoom": (0, h.Ky)(),
                        "Show Zoom": (0, h.Ky)(),
                        "Set Compare": (0, h.Ky)(),
                        "Toggle Layout Visibility": (0, h.Ky)(),
                        "Set Room Uploading": (0, h.Ky)(),
                        "Add Session": (0, h.Ky)(),
                        "Set Room Viewer Settings": (0, h.Ky)(),
                        "Set Cta Buttons": (0, h.Ky)(),
                        "Set Visualization Size": (0, h.Ky)(),
                        "Set Dynamic Product Mode": (0, h.Ky)()
                    }
                }),
                tt = "CrownCreteRooms",
                V = (0, h.on)(y.setRoomsLoading, (c, {
                    loading: P
                }) => ({
                    ...c,
                    loading: !!P
                })),
                $t = (0, h.on)(y.saveRooms, (c, {
                    rooms: P
                }) => {
                    const F = {
                        ...c.roomsMap || {}
                    };
                    return P?.forEach(M => {
                        F[M.items?.id] = M.items
                    }), {
                        ...c,
                        roomsMap: F,
                        baseRooms: P || []
                    }
                }),
                wt = (0, h.on)(y.setActiveRoom, (c, {
                    room: P
                }) => c.activeRoom?.id === P?.id ? c : {
                    ...c,
                    activeRoom: P
                }),
                Lt = (0, h.on)(y.updateBaseRooms, (c, {
                    room: P
                }) => {
                    if (!P) return c;
                    const f = [...c.baseRooms || []],
                        F = structuredClone(c.roomsMap),
                        M = {
                            items: P,
                            key: f.length.toString()
                        };
                    return F[P.id] = P, f.push(M), {
                        ...c,
                        baseRooms: f,
                        roomsMap: F
                    }
                }),
                Ot = (0, h.on)(y.setRoomEstimation, (c, {
                    estimation: P
                }) => c.roomEstimation?.id === P?.id ? c : {
                    ...c,
                    roomEstimation: P
                }),
                At = (0, h.on)(y.toggleLayoutVisibility, (c, {
                    show: P
                }) => ({
                    ...c,
                    showLayout: !!P
                })),
                Dt = (0, h.on)(y.setHotpoints, (c, {
                    hotpoints: P
                }) => ({
                    ...c,
                    hotpoints: P
                })),
                Tt = (0, h.on)(y.setHotpointVisibility, (c, {
                    visible: P
                }) => ({
                    ...c,
                    showHotpoints: P
                })),
                Vt = (0, h.on)(y.setZoom, (c, {
                    zoomOn: P
                }) => ({
                    ...c,
                    zoomOn: P
                })),
                Ht = (0, h.on)(y.showZoom, (c, {
                    show: P
                }) => ({
                    ...c,
                    showZoom: P
                })),
                Bt = (0, h.on)(y.setCompare, (c, {
                    compareOn: P
                }) => {
                    const f = void 0 !== P ? P : !c.compareOn;
                    return {
                        ...c,
                        compareOn: f
                    }
                }),
                zt = (0, h.on)(y.setZoomTutorialSeen, c => ({
                    ...c,
                    sawZoomTutorial: !0
                })),
                Kt = (0, h.on)(y.setRoomUploading, (c, {
                    uploading: P
                }) => ({
                    ...c,
                    uploading: !!P
                })),
                jt = (0, h.on)(y.setRoomViewerSettings, (c, {
                    hotpointsOn: P,
                    floorHotpointOn: f,
                    wallsHotpointsOn: F,
                    coutertopsHotpointsOn: M
                }) => ({
                    ...c,
                    hotpointsOn: !!P,
                    floorHotpointOn: !!f,
                    wallsHotpointsOn: !!F,
                    coutertopsHotpointsOn: !!M
                })),
                Ut = (0, h.on)(y.setCtaButtons, (c, {
                    buttons: P
                }) => ({
                    ...c,
                    ctaButtons: P
                })),
                Zt = (0, h.on)(y.setVisualizationSize, (c, {
                    size: P
                }) => ({
                    ...c,
                    visualizationSize: P
                })),
                Nt = (0, h.on)(y.setDynamicProductMode, (c, {
                    isDynamicProduct: P
                }) => ({
                    ...c,
                    dynamicProductMode: P
                })),
                Pt = (0, h.Lq)({
                    baseRooms: [],
                    roomsMap: {},
                    loading: !0,
                    showHotpoints: !0,
                    compareOn: !1,
                    zoomOn: !1,
                    showZoom: !0,
                    showLayout: !0,
                    hotpointsOn: !0,
                    floorHotpointOn: !0,
                    wallsHotpointsOn: !0,
                    coutertopsHotpointsOn: !0
                }, $t, V, wt, Ot, Dt, At, Tt, Bt, Vt, Ht, zt, Kt, Lt, jt, Ut, Zt, Nt),
                L = (0, h.ZF)(tt),
                Wt = (0, h.P1)(L, c => c),
                Qt = (0, h.P1)(L, c => c.ctaButtons),
                Yt = (0, h.P1)(L, c => c.loading),
                Xt = (0, h.P1)(L, c => c.baseRooms),
                vt = (0, h.P1)(L, c => c.activeRoom),
                b = (0, h.P1)(L, c => !!c.showLayout),
                yt = (0, h.P1)(L, c => c.roomEstimation),
                g = (0, h.P1)(L, c => c.hotpoints || []),
                O = (0, h.P1)(L, c => !!c.uploading),
                H = (0, h.P1)(L, c => !!c.showHotpoints),
                x = (0, h.P1)(L, c => !!c.sawZoomTutorial),
                w = (0, h.P1)(L, c => ({
                    baseRooms: c.baseRooms
                })),
                Y = (0, h.P1)(L, c => c.zoomOn),
                ht = (0, h.P1)(L, c => c.showZoom),
                q = (0, h.P1)(L, c => !!c.compareOn),
                X = (0, h.P1)(L, c => ({
                    hotpointsOn: c.hotpointsOn,
                    floorHotpointOn: c.floorHotpointOn,
                    wallsHotpointsOn: c.wallsHotpointsOn,
                    coutertopsHotpointsOn: c.coutertopsHotpointsOn
                })),
                N = (0, h.P1)(L, c => c.visualizationSize),
                C = (0, h.P1)(L, c => !!c.dynamicProductMode);
            let G = (() => {
                class c extends p.ho {
                    constructor() {
                        super(...arguments), this.roomsApi = (0, l.f3M)(v.O7), this.activeRoom$ = this.store.select(vt), this.showLayout$ = this.store.select(b), this.showHotpoints$ = this.store.select(H), this.loadingRooms$ = this.store.select(Yt), this.rooms$ = this.store.select(w), this.roomEstimation$ = this.store.select(yt), this.roomHotpoints$ = this.store.select(g), this.selectZoom$ = this.store.select(Y), this.showZoom$ = this.store.select(ht), this.selectCompare$ = this.store.select(q), this.sawZoomTutorial$ = this.store.select(x), this.roomUploading$ = this.store.select(O), this.viewerSettings$ = this.store.select(X), this.selectCtaButtons$ = this.store.select(Qt), this.selectVisualizationSize$ = this.store.select(N), this.selectIsDynamicMode$ = this.store.select(C)
                    }
                    getRoom(f) {
                        return this.store.select((c => (0, h.P1)(L, P => P.roomsMap[c]))(f))
                    }
                    addSession(f) {
                        f && this.store.dispatch(y.addSession({
                            roomId: f
                        }))
                    }
                    setActiveRoom(f) {
                        f && this.store.dispatch(y.setActiveRoom({
                            room: f
                        }))
                    }
                    setEstimation(f) {
                        this.store.dispatch(y.setRoomEstimation({
                            estimation: f
                        }))
                    }
                    loadRooms() {
                        this.store.dispatch(y.loadRoomsInit())
                    }
                    toggleLayoutVisibility(f) {
                        this.store.dispatch(y.toggleLayoutVisibility({
                            show: f
                        }))
                    }
                    toggleZoom(f) {
                        this.store.dispatch(y.setZoom({
                            zoomOn: f
                        }))
                    }
                    setShowZoom(f) {
                        this.store.dispatch(y.showZoom({
                            show: f
                        }))
                    }
                    toggleCompare(f) {
                        this.store.dispatch(y.setCompare({
                            compareOn: f
                        }))
                    }
                    setHotpointsVisibility(f) {
                        this.store.dispatch(y.setHotpointVisibility({
                            visible: f
                        }))
                    }
                    setZoomTutorial() {
                        this.store.dispatch(y.setZoomTutorialSeen())
                    }
                    setRoomUploading(f) {
                        this.store.dispatch(y.setRoomUploading({
                            uploading: f
                        }))
                    }
                    updateRooms(f) {
                        this.store.dispatch(y.updateBaseRooms({
                            room: f
                        }))
                    }
                    setVisualizationSize(f) {
                        !f || this.store.dispatch(y.setVisualizationSize({
                            size: f
                        }))
                    }
                    setDynamicMode(f) {
                        this.store.dispatch(y.setDynamicProductMode({
                            isDynamicProduct: f
                        }))
                    }
                }
                return c.\u0275fac = function () {
                    let P;
                    return function (F) {
                        return (P || (P = l.n5z(c)))(F || c)
                    }
                }(), c.\u0275prov = l.Yz7({
                    token: c,
                    factory: c.\u0275fac
                }), c
            })();
            var W = m(3599),
                et = m(538),
                I = m(2673),
                bt = m(116),
                ut = m(1640),
                at = m(9295),
                pt = m(3158),
                K = m(745),
                ot = m(635),
                Ct = m(9337),
                ft = m(1339),
                mt = m(591),
                St = m(9346),
                nt = m(1121),
                J = m(2874),
                Ft = m(5713),
                Mt = m(4583),
                Rt = m(5686),
                Et = m(9739);
            let ct = (() => {
                class c extends p.Q9 {
                    constructor() {
                        super(...arguments), this.hotpointKeyPrefix = "CrownCrete-hotpoint-", this.configProvider = (0, l.f3M)(v.FI), this.roomApi = (0, l.f3M)(v.Sz), this.roomsApi = (0, l.f3M)(v.O7), this.storage = (0, l.f3M)(v.Fg), this.dialog = (0, l.f3M)(v._R), this.loadRoomsInit$ = (0, W.GW)(() => this.actions$.pipe((0, W.l4)(y.loadRoomsInit), (0, et.M)(this.configProvider.companyConfig$), (0, I.w)(([, f]) => [this.updateRoomViewerConfig(f?.company), y.setRoomsLoading({
                            loading: !0
                        }), y.loadRooms()]))), this.addSession = (0, W.GW)(() => this.actions$.pipe((0, W.l4)(y.addSession), (0, bt.h)(f => !!f.roomId), (0, I.w)(f => this.roomApi.addSession(f.roomId))), {
                            dispatch: !1
                        }), this.loadRooms$ = (0, W.GW)(() => this.actions$.pipe((0, W.l4)(y.loadRooms), (0, et.M)(this.store.select(Wt), this.storage.get(v.dR.visitorId).pipe(f => f || "")), (0, I.w)(([, f, F]) => {
                            const M = !!f.baseRooms?.length;
                            return this.store.dispatch(Ft.Lu.writeVisitorId({
                                visitorId: F
                            })), (0, ut.D)([M ? this.store.select(Xt).pipe((0, at.q)(1)) : this.roomsApi.fetchBaseRooms(F || "").pipe((0, pt.K)(S => 404 === S.status ? (this.storage.delete(v.dR.visitorId).pipe((0, at.q)(1)).subscribe(), this.roomsApi.fetchBaseRooms("")) : ((0, Et.Cv)("Error fetching rooms", S), (0, K.of)([])))), (0, K.of)(M), (0, K.of)(f.activeRoom), (0, K.of)(F), this.configProvider.companyConfig$.pipe((0, at.q)(1), (0, ot.U)(S => S?.company?.defaultProductId)), f.ctaButtons ? (0, K.of)(null) : this.roomApi.fetchCtaButtons()])
                        }), (0, I.w)(([f, F, M, S, j, Z]) => this.checkForRoomData(f, F, M, S || "", j, Z)), (0, I.w)(([f, F, M, S, j, Z]) => {
                            if (Z) {
                                const Q = Z.find(st => st.type === v.Lr.custom),
                                    dt = Q?.metadata.url || "";
                                Q?.visible && dt && this.configProvider.dynamicFeatures$.pipe((0, Ct.b)(st => {
                                    st?.roomsCtaButton && (st.roomsCtaButton.visible = !0, st.roomsCtaButton.url = dt)
                                })).subscribe()
                            }
                            const $ = [y.setRoomsLoading({
                                loading: !1
                            })];
                            if (f?.length && !F && $.unshift(y.saveRooms({
                                    rooms: f
                                })), this.isRoomPath) {
                                const Q = this.extractHotpointData(S) || [];
                                $.push(y.setRoomEstimation({
                                    estimation: S || void 0
                                })), $.push(y.setHotpoints({
                                    hotpoints: Q
                                })), $.push(Mt.Mb.getInitialProduct({
                                    productId: this.productId ? this.productId : this.sku || this.externalId ? "" : j,
                                    sku: this.sku || "",
                                    externalId: this.externalId || "",
                                    dynamicProduct: this.dynamicProductParams,
                                    hotpoints: Q
                                })), $.push(y.setDynamicProductMode({
                                    isDynamicProduct: !!this.dynamicProductParams
                                })), M && $.push(y.setActiveRoom({
                                    room: M
                                })), Z?.length && $.push(y.setCtaButtons({
                                    buttons: Z
                                }))
                            }
                            return $
                        }), (0, ft.g)(50)))
                    }
                    checkForRoomData(f, F, M, S, j, Z) {
                        let $;
                        const Q = this.isRoomPath;
                        return Q && ($ = this.findActiveRoom([...f || []]), $ = $ || M, !$?.id) ? (this.navigation.goToRooms(), mt.E) : (0, ut.D)([(0, K.of)(f), (0, K.of)(F), (0, K.of)($), Q && $ ? this.tryFetchEstimation($?.id, S) : (0, K.of)(void 0), (0, K.of)(j || ""), (0, K.of)(Z)])
                    }
                    get productId() {
                        return this.router.routerState.snapshot.root.queryParamMap.get("product") || ""
                    }
                    get externalId() {
                        return this.router.routerState.snapshot.root.queryParamMap.get("extId") || ""
                    }
                    get sku() {
                        return this.router.routerState.snapshot.root.queryParamMap.get("sku") || ""
                    }
                    get isRoomPath() {
                        return this.roomId?.routeConfig?.path === nt.fK.room
                    }
                    get roomId() {
                        return this.router.routerState.root.children?. [0]?.snapshot?.children?. [0]
                    }
                    findActiveRoom(f) {
                        const F = this.roomId?.paramMap.get("uid");
                        return F ? f.find(S => S.items.id === F)?.items : void 0
                    }
                    extractHotpointData(f) {
                        if (!f) return [];
                        let F = [];
                        if (Object.values(J.aR).filter(M => isNaN(+M)).forEach(M => {
                                const S = f[M];
                                S?.length && (F = [...F, ...this.parseHotpoint(S, M)])
                            }), !Object.values(F).length && f.cotFov2) {
                            const M = (0, Rt.bM)(f.operatorAltitude, f.vectors);
                            f.floors = [M], F = this.parseHotpoint([M], J.aR.floors)
                        }
                        return F
                    }
                    parseHotpoint(f, F) {
                        return f.map((M, S) => {
                            const [j, Z] = M.hot_point || [];
                            return {
                                id: `${this.hotpointKeyPrefix}${M.id}`,
                                x: Math.trunc(100 * j),
                                y: Math.trunc(100 * Z),
                                baseId: M.id,
                                main: !S,
                                placementOption: F
                            }
                        }) || []
                    }
                    tryFetchEstimation(f, F) {
                        return this.roomApi.fetchEstimation(f, F).pipe((0, pt.K)(() => (0, St.D)(m.e(407).then(m.bind(m, 5407))).pipe((0, I.w)(({
                            ImageErrorDialogComponent: M
                        }) => this.dialog.open(M, {
                            backdropClass: nt.bj.darkOverlay,
                            panelClass: nt.bj.centerOverlay
                        }).afterClosed()), (0, I.w)(() => this.navigation.goToRooms()), (0, I.w)(() => mt.E))))
                    }
                    updateRoomViewerConfig(f) {
                        const F = !!f?.supportedProductTypes?.includes(J.Pp.floors),
                            M = !!f?.supportedProductTypes?.includes(J.Pp.rugs),
                            S = !!f?.supportedProductTypes?.includes(J.Pp.walls),
                            j = !!f?.supportedProductTypes?.includes(J.Pp.countertops);
                        return y.setRoomViewerSettings({
                            hotpointsOn: F || S || M || j,
                            floorHotpointOn: (F || M) && (S || j),
                            wallsHotpointsOn: S,
                            coutertopsHotpointsOn: j
                        })
                    }
                }
                return c.\u0275fac = function () {
                    let P;
                    return function (F) {
                        return (P || (P = l.n5z(c)))(F || c)
                    }
                }(), c.\u0275prov = l.Yz7({
                    token: c,
                    factory: c.\u0275fac
                }), c
            })();
            var It = m(8590),
                xt = m(1511),
                Jt = m(5924);
            let D = (() => {
                class c {}
                return c.\u0275fac = function (f) {
                    return new(f || c)
                }, c.\u0275mod = l.oAB({
                    type: c
                }), c.\u0275inj = l.cJS({
                    providers: [{
                        provide: v.XZ,
                        useClass: G
                    }],
                    imports: [It.au, xt.A, Jt.wC, h.Aw.forFeature(tt, Pt), W.sQ.forFeature([ct])]
                }), c
            })()
        },
        5686: (_, k, m) => {
            m.d(k, {
                G_: () => tt,
                w3: () => y,
                bM: () => v
            });
            const p = T => [0, -(T || 1.6), 0],
                l = T => {
                    const V = [
                        [0, 0, 0],
                        [0, 0, 0],
                        [0, 0, 0]
                    ];
                    return V[0][0] = T.x[0], V[0][1] = T.y[0], V[0][2] = T.z[0], V[1][0] = T.x[1], V[1][1] = T.y[1], V[1][2] = T.z[1], V[2][0] = T.x[2], V[2][1] = T.y[2], V[2][2] = T.z[2], V
                },
                v = (T, V) => ({
                    id: 255,
                    translation: p(T),
                    rotation: V ? l(V) : [],
                    hot_point: [.5, .7]
                });
            var h = m(2560);
            const y = new h.OlP("VISUALIZATION_RESIZE"),
                tt = new h.OlP("VIEWER_RESIZE_STRATEGY")
        }
    }
]);