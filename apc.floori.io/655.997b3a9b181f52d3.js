(function () {
    try {
        var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
            _ = (new Error).stack;
        _ && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[_] = "64d3f0f4-3b15-493f-aedd-c25c86d036b0", f._sentryDebugIdIdentifier = "sentry-dbid-64d3f0f4-3b15-493f-aedd-c25c86d036b0")
    } catch {}
})(), (self.webpackChunkCrownCrete = self.webpackChunkCrownCrete || []).push([
    [655], {
        9655: (f, _, c) => {
            c.r(_), c.d(_, {
                FiltersButtonComponent: () => dt,
                ProductBreadcrumbComponent: () => P,
                ProductsViewComponent: () => it,
                SearchAndFiltersComponent: () => y
            });
            var t = c(2560),
                a = c(4666),
                Z = c(8281),
                g = c(4583),
                u = c(7549),
                p = c(6096),
                v = c(7759),
                m = c(5551),
                L = c(4518),
                h = c(1378),
                $ = c(7621),
                b = c(7879),
                F = c(7931),
                A = c(9739),
                B = c(2874);

            function J(n, i) {
                if (1 & n) {
                    const o = t.EpF();
                    t.ynx(0), t.TgZ(1, "span", 4), t._uU(2, "/"), t.qZA(), t.TgZ(3, "span", 5), t.NdJ("click", function () {
                        const s = t.CHM(o).last,
                            l = t.oxw(3).ngrxLet,
                            d = t.oxw();
                        return t.KtG(d.goToCatalog(s ? -1 : l.length - 1))
                    }), t._uU(4), t.qZA(), t.BQk()
                }
                if (2 & n) {
                    const o = i.$implicit,
                        e = i.last;
                    t.xp6(3), t.ekj("wide", e), t.xp6(1), t.hij(" ", o.name, " ")
                }
            }

            function M(n, i) {
                if (1 & n && (t.ynx(0), t.YNc(1, J, 5, 3, "ng-container", 3), t.ALo(2, "slice"), t.BQk()), 2 & n) {
                    const o = t.oxw(2).ngrxLet,
                        e = t.oxw();
                    t.xp6(1), t.Q6J("ngForOf", t.xi3(2, 2, o, 1 - o.length))("ngForTrackBy", e.trackById)
                }
            }

            function S(n, i) {
                if (1 & n) {
                    const o = t.EpF();
                    t.ynx(0), t.TgZ(1, "span", 4), t._uU(2, "/"), t.qZA(), t.TgZ(3, "span", 5), t.NdJ("click", function () {
                        const s = t.CHM(o).last,
                            l = t.oxw(3).ngrxLet,
                            d = t.oxw();
                        return t.KtG(d.goToCatalog(s ? -1 : l.length - 1))
                    }), t._uU(4), t.qZA(), t.BQk()
                }
                if (2 & n) {
                    const o = i.$implicit,
                        e = i.last;
                    t.xp6(3), t.ekj("wide", e)("CrownCrete-bold", e), t.xp6(1), t.hij(" ", o.name, " ")
                }
            }

            function V(n, i) {
                if (1 & n && (t.ynx(0), t.TgZ(1, "span", 4), t._uU(2, "/"), t.qZA(), t.TgZ(3, "span", 4), t._uU(4, "..."), t.qZA(), t.YNc(5, S, 5, 5, "ng-container", 3), t.ALo(6, "slice"), t.BQk()), 2 & n) {
                    const o = t.oxw(2).ngrxLet,
                        e = t.oxw();
                    t.xp6(5), t.Q6J("ngForOf", t.xi3(6, 2, o, -2))("ngForTrackBy", e.trackById)
                }
            }

            function Q(n, i) {
                if (1 & n) {
                    const o = t.EpF();
                    t.ynx(0), t.TgZ(1, "CrownCrete-icon", 2), t.NdJ("click", function () {
                        t.CHM(o);
                        const r = t.oxw(2);
                        return t.KtG(r.goToCatalog(1))
                    }), t.qZA(), t.YNc(2, M, 3, 5, "ng-container", 1), t.YNc(3, V, 7, 5, "ng-container", 1), t.BQk()
                }
                if (2 & n) {
                    const o = t.oxw().ngrxLet;
                    t.xp6(2), t.Q6J("ngIf", o.length <= 3 && o.length > 1), t.xp6(1), t.Q6J("ngIf", o.length > 3)
                }
            }

            function U(n, i) {
                if (1 & n && (t.ynx(0), t.YNc(1, Q, 4, 2, "ng-container", 1), t.BQk()), 2 & n) {
                    const o = i.ngrxLet;
                    t.xp6(1), t.Q6J("ngIf", null == o ? null : o.length)
                }
            }
            let P = (() => {
                class n {
                    constructor() {
                        this.productsStore = (0, t.f3M)(g.nn), this.breadcrumb$ = this.productsStore.breadcrumb$
                    }
                    goToCatalog(o) {
                        o < 0 || this.productsStore.goToCatalog(o)
                    }
                    trackById(o, e) {
                        return e.id
                    }
                }
                return n.\u0275fac = function (o) {
                    return new(o || n)
                }, n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-product-breadcrumb"]
                    ],
                    hostAttrs: [1, "CrownCrete-product-breadcrumb"],
                    standalone: !0,
                    features: [t.jDz],
                    decls: 2,
                    vars: 3,
                    consts: [
                        [4, "ngrxLet"],
                        [4, "ngIf"],
                        ["name", "fl_home_o", 1, "CrownCrete-pointer", 3, "click"],
                        [4, "ngFor", "ngForOf", "ngForTrackBy"],
                        [1, "CrownCrete-caption"],
                        [1, "CrownCrete-pointer", "CrownCrete-caption", "trim", 3, "click"]
                    ],
                    template: function (o, e) {
                        1 & o && (t.YNc(0, U, 2, 1, "ng-container", 0), t.ALo(1, "async")), 2 & o && t.Q6J("ngrxLet", t.lcZ(1, 1, e.breadcrumb$))
                    },
                    dependencies: [a.ez, a.sg, a.O5, a.Ov, a.OU, u._N, u.eJ, m.K],
                    styles: [".CrownCrete-product-breadcrumb{display:inline-flex;align-items:center}.CrownCrete-product-breadcrumb CrownCrete-icon{width:20px;height:20px;margin-right:.5rem}.CrownCrete-product-breadcrumb span{margin:0 .5rem 0 0;font-weight:500;white-space:nowrap}.CrownCrete-product-breadcrumb span.trim{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n"],
                    encapsulation: 2,
                    changeDetection: 0
                }), n
            })();
            var N = c(8803),
                x = c(635),
                I = c(253),
                j = c(1989),
                k = c(9337),
                w = c(2508),
                C = c(852);

            function D(n, i) {
                if (1 & n) {
                    const o = t.EpF();
                    t.TgZ(0, "button", 5), t.NdJ("click", function () {
                        t.CHM(o);
                        const r = t.oxw(2);
                        return t.KtG(r.goToFilters())
                    }), t._UZ(1, "CrownCrete-icon", 6), t._uU(2), t.ALo(3, "flTranslate"), t.qZA()
                }
                if (2 & n) {
                    const o = t.oxw().ngrxLet;
                    t.Q6J("disabled", !!o.loading || !!o.skeletonLoading), t.xp6(1), t.ekj("notification", o.filtersCount >= 2), t.xp6(1), t.hij(" ", t.lcZ(3, 4, "room.filter.filterProducts"), " ")
                }
            }

            function Y(n, i) {
                if (1 & n) {
                    const o = t.EpF();
                    t.TgZ(0, "div", 1)(1, "CrownCrete-input", 2), t.NdJ("ngModelChange", function (r) {
                        t.CHM(o);
                        const s = t.oxw();
                        return t.KtG(s.searchChanged(r))
                    }), t.ALo(2, "flTranslate"), t._UZ(3, "CrownCrete-icon", 3), t.qZA(), t.YNc(4, D, 4, 6, "button", 4), t.qZA()
                }
                if (2 & n) {
                    const o = i.ngrxLet,
                        e = t.oxw();
                    t.xp6(1), t.ekj("full-width", !o.filtersEnabled), t.Q6J("placeholder", t.lcZ(2, 6, "room.filter.search"))("ngModel", e.search)("disabled", !!o.loading), t.xp6(3), t.Q6J("ngIf", o.filtersEnabled)
                }
            }
            const H = function (n, i, o, e, r) {
                return {
                    loading: n,
                    skeletonLoading: i,
                    filters: o,
                    filtersEnabled: e,
                    filtersCount: r
                }
            };
            let y = (() => {
                class n {
                    constructor() {
                        this.store = (0, t.f3M)(g.nn), this.productsProvider = (0, t.f3M)(p.IA), this.configProvider = (0, t.f3M)(p.FI), this.loading$ = this.store.loading$, this.skeletonLoading$ = this.store.initialLoading$, this.filtersEnabled$ = this.configProvider.companyConfig$.pipe((0, x.U)(o => o.company?.filtersEnabled)), this.filters$ = this.productsProvider.selectFilterValues$, this.filtersCount$ = this.productsProvider.selectFilterValues$.pipe((0, x.U)(o => o.values?.length || 0)), this.searchSub = new I.x, this.search = "", this.searchSub.asObservable().pipe((0, j.b)(300), (0, k.b)(o => {
                            const e = {
                                phrase: o
                            };
                            this.productsProvider.setFiltersLoading(!0), this.productsProvider.patchFilters(e)
                        })).subscribe()
                    }
                    searchChanged(o) {
                        this.searchSub.next(o)
                    }
                    goToFilters() {
                        this.store.openFiltersDesktop()
                    }
                }
                return n.\u0275fac = function (o) {
                    return new(o || n)
                }, n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-search-and-filters"]
                    ],
                    standalone: !0,
                    features: [t.jDz],
                    decls: 1,
                    vars: 7,
                    consts: [
                        ["class", "CrownCrete-search-and-filters", 4, "ngrxLet"],
                        [1, "CrownCrete-search-and-filters"],
                        [1, "reverse", 3, "placeholder", "ngModel", "disabled", "ngModelChange"],
                        ["name", "fl_search_o", 1, "CrownCrete-input-prefix"],
                        ["CrownCrete-icon-button", "", "class", "fl-ml-12 outline", 3, "disabled", "click", 4, "ngIf"],
                        ["CrownCrete-icon-button", "", 1, "fl-ml-12", "outline", 3, "disabled", "click"],
                        ["name", "fl_adjust_horizontal_o"]
                    ],
                    template: function (o, e) {
                        1 & o && t.YNc(0, Y, 5, 8, "div", 0), 2 & o && t.Q6J("ngrxLet", t.qbA(1, H, e.loading$, e.skeletonLoading$, e.filters$, e.filtersEnabled$, e.filtersCount$))
                    },
                    dependencies: [a.ez, a.O5, u._N, u.eJ, b.N, C.X, w.u5, w.JJ, w.On, v.c, m.K, N.a],
                    styles: ['.CrownCrete-search-and-filters{padding:.25rem .75rem;display:flex}.CrownCrete-search-and-filters CrownCrete-input{background-color:#fff;max-width:13.75rem}.CrownCrete-search-and-filters CrownCrete-input input{max-width:9.75rem}.CrownCrete-search-and-filters CrownCrete-input.full-width{width:100%;max-width:initial}.CrownCrete-search-and-filters CrownCrete-input.full-width input{width:100%;max-width:initial}.CrownCrete-search-and-filters button{position:relative}.CrownCrete-search-and-filters button CrownCrete-icon.notification:before{content:"";display:inline-block;width:6px;height:6px;border-radius:50%;background-color:var(--fl-primary);position:absolute;top:6px;right:6px}\n'],
                    encapsulation: 2,
                    changeDetection: 0
                }), n
            })();
            const O = ["listingContainer"];

            function K(n, i) {
                if (1 & n && (t.TgZ(0, "div", 18)(1, "span", 19), t._uU(2), t.ALo(3, "flTranslate"), t.qZA()()), 2 & n) {
                    const o = t.oxw().ngrxLet;
                    t.xp6(2), t.hij(" ", t.lcZ(3, 1, o.productMessage), " ")
                }
            }

            function E(n, i) {
                if (1 & n) {
                    const o = t.EpF();
                    t.TgZ(0, "button", 20), t.NdJ("click", function () {
                        t.CHM(o);
                        const r = t.oxw(2);
                        return t.KtG(r.goUp())
                    }), t._UZ(1, "CrownCrete-icon", 21), t._uU(2), t.ALo(3, "flTranslate"), t.qZA()
                }
                if (2 & n) {
                    const o = t.oxw().ngrxLet;
                    t.ekj("hidden", !!o.filters.search), t.Q6J("disabled", o.loading || o.initialLoading || o.filtersLoading), t.xp6(2), t.hij(" ", t.lcZ(3, 4, "return"), " ")
                }
            }

            function G(n, i) {
                if (1 & n) {
                    const o = t.EpF();
                    t.TgZ(0, "button", 22), t.NdJ("click", function () {
                        t.CHM(o);
                        const r = t.oxw(2);
                        return t.KtG(r.goUp())
                    }), t._UZ(1, "CrownCrete-icon", 23), t.TgZ(2, "p", 6), t._uU(3), t.ALo(4, "flTranslate"), t.qZA()()
                }
                2 & n && (t.xp6(3), t.Oqu(t.lcZ(4, 1, "return")))
            }

            function z(n, i) {
                if (1 & n) {
                    const o = t.EpF();
                    t.ynx(0), t.TgZ(1, "CrownCrete-product-tile", 28), t.NdJ("clicked", function () {
                        const s = t.CHM(o).$implicit,
                            l = t.oxw(3);
                        return t.KtG(l.itemSelect(s))
                    })("favouriteBtnClicked", function (r) {
                        const l = t.CHM(o).$implicit,
                            d = t.oxw(2).ngrxLet,
                            T = t.oxw();
                        return t.KtG(T.favouriteClick(r, !!d.likedProductsMap[l.id]))
                    }), t.qZA(), t.BQk()
                }
                if (2 & n) {
                    const o = i.$implicit,
                        e = t.oxw(2).ngrxLet;
                    t.xp6(1), t.ekj("inverted", e.itemsData.productsOnScreen[o.id]), t.Q6J("CrownCreteSkeletonLoader", !!e.initialLoading)("item", o)("imageSet", null == o ? null : o.image)("rgbaColor", null == o ? null : o.rgbaColor)("isFav", !!e.likedProductsMap[o.id])("showPrice", e.showPrice && !(null == o || !o.price))("price", null == o ? null : o.price)("imgContain", !0)
                }
            }

            function X(n, i) {
                if (1 & n) {
                    const o = t.EpF();
                    t.TgZ(0, "CrownCrete-product-tile", 28), t.NdJ("clicked", function () {
                        t.CHM(o);
                        const r = t.oxw().$implicit,
                            s = t.oxw(3);
                        return t.KtG(s.itemSelect(r))
                    })("favouriteBtnClicked", function (r) {
                        t.CHM(o);
                        const s = t.oxw().$implicit,
                            l = t.oxw(2).ngrxLet,
                            d = t.oxw();
                        return t.KtG(d.favouriteClick(r, !!l.likedProductsMap[s.id]))
                    }), t.qZA()
                }
                if (2 & n) {
                    const o = t.oxw().$implicit,
                        e = t.oxw(2).ngrxLet;
                    t.ekj("inverted", e.itemsData.productsOnScreen[o.id]), t.Q6J("CrownCreteSkeletonLoader", !!e.initialLoading)("item", o)("imageSet", null == o ? null : o.image)("rgbaColor", null == o ? null : o.rgbaColor)("isFav", !!e.likedProductsMap[o.id])("showPrice", e.showPrice && !(null == o || !o.price))("price", null == o ? null : o.price)("imgContain", !0)
                }
            }

            function q(n, i) {
                if (1 & n && (t.ynx(0), t.YNc(1, X, 1, 10, "CrownCrete-product-tile", 29), t.BQk()), 2 & n) {
                    const o = i.$implicit,
                        e = t.oxw(2).ngrxLet;
                    t.xp6(1), t.Q6J("ngIf", !(null != e.cachedProducts && null != e.cachedProducts.cachedMap && e.cachedProducts.cachedMap[o.id]))
                }
            }

            function R(n, i) {
                if (1 & n) {
                    const o = t.EpF();
                    t.TgZ(0, "div", 24)(1, "div", 25), t.NdJ("scroll", function (r) {
                        t.CHM(o);
                        const s = t.oxw(2);
                        return t.KtG(s.detectScroll(r))
                    }), t.YNc(2, z, 2, 10, "ng-container", 26), t.YNc(3, q, 2, 1, "ng-container", 27), t.qZA()()
                }
                if (2 & n) {
                    const o = t.oxw().ngrxLet,
                        e = t.oxw();
                    t.xp6(2), t.Q6J("ngForOf", null == o.cachedProducts ? null : o.cachedProducts.cachedItems), t.xp6(1), t.Q6J("ngForOf", o.itemsData.items)("ngForTrackBy", e.trackItems)
                }
            }

            function W(n, i) {
                if (1 & n && (t.TgZ(0, "div", 30)(1, "button", 31), t._UZ(2, "CrownCrete-icon", 32), t.TgZ(3, "p"), t._uU(4), t.ALo(5, "flTranslate"), t.qZA()()()), 2 & n) {
                    t.oxw();
                    const o = t.MAs(17);
                    t.xp6(1), t.Q6J("CrownCreteScrollToTop", o), t.xp6(3), t.Oqu(t.lcZ(5, 2, "scrollUp"))
                }
            }

            function tt(n, i) {
                1 & n && (t.TgZ(0, "div", 33), t._UZ(1, "div", 34), t.ALo(2, "flTranslate"), t.qZA()), 2 & n && (t.xp6(1), t.Q6J("label", t.lcZ(2, 1, "loading") + "..."))
            }

            function ot(n, i) {
                1 & n && (t.TgZ(0, "div", 35), t._UZ(1, "CrownCrete-error-info", 36), t.ALo(2, "flTranslate"), t.ALo(3, "flTranslate"), t.qZA()), 2 & n && (t.xp6(1), t.Q6J("header", t.lcZ(2, 2, "room.products.noResults"))("message", t.lcZ(3, 4, "room.products.noResultsMessage")))
            }

            function et(n, i) {
                if (1 & n) {
                    const o = t.EpF();
                    t.ynx(0), t.YNc(1, K, 4, 3, "div", 1), t._UZ(2, "CrownCrete-product-breadcrumb", 2), t.TgZ(3, "div", 3)(4, "div"), t.YNc(5, E, 4, 6, "button", 4), t.qZA(), t.TgZ(6, "div", 5)(7, "span", 6), t._uU(8), t.ALo(9, "flTranslate"), t.qZA(), t.TgZ(10, "button", 7), t.NdJ("click", function () {
                        t.CHM(o);
                        const r = t.oxw();
                        return t.KtG(r.changeViewType(r.productsViewType.grid))
                    }), t._UZ(11, "CrownCrete-icon", 8), t.qZA(), t.TgZ(12, "button", 7), t.NdJ("click", function () {
                        t.CHM(o);
                        const r = t.oxw();
                        return t.KtG(r.changeViewType(r.productsViewType.list))
                    }), t._UZ(13, "CrownCrete-icon", 9), t.qZA()()(), t.TgZ(14, "div", 10), t._UZ(15, "CrownCrete-search-and-filters"), t.qZA(), t.TgZ(16, "div", 11, 12), t.NdJ("atBottom", function () {
                        t.CHM(o);
                        const r = t.oxw();
                        return t.KtG(r.containerScroll())
                    })("offsetHit", function (r) {
                        t.CHM(o);
                        const s = t.oxw();
                        return t.KtG(s.scrollOffsetHit(r))
                    }), t.YNc(18, G, 5, 3, "button", 13), t.YNc(19, R, 4, 3, "div", 14), t.YNc(20, W, 6, 4, "div", 15), t.YNc(21, tt, 3, 3, "div", 16), t.YNc(22, ot, 4, 6, "div", 17), t.qZA(), t.BQk()
                }
                if (2 & n) {
                    const o = i.ngrxLet,
                        e = t.oxw();
                    t.xp6(1), t.Q6J("ngIf", o.productMessage && e.showMessage()), t.xp6(1), t.ekj("hidden", !!o.filters.search), t.xp6(3), t.Q6J("ngIf", o.breadcrumb.length > 1), t.xp6(3), t.hij(" ", t.lcZ(9, 18, "room.settings.view"), " "), t.xp6(2), t.ekj("outline", o.viewType === e.productsViewType.grid), t.Q6J("disabled", o.loading || o.initialLoading || o.filtersLoading), t.xp6(2), t.ekj("outline", o.viewType === e.productsViewType.list), t.Q6J("disabled", o.loading || o.initialLoading || o.filtersLoading), t.xp6(4), t.ekj("list-view", o.viewType === e.productsViewType.list), t.xp6(2), t.Q6J("ngIf", o.breadcrumb.length > 1), t.xp6(1), t.Q6J("ngIf", (null == o.itemsData.items ? null : o.itemsData.items.length) && !o.filtersLoading), t.xp6(1), t.Q6J("ngIf", o.showScrollUp && !o.initialLoading), t.xp6(1), t.Q6J("ngIf", o.loading || o.initialLoading || o.filtersLoading), t.xp6(1), t.Q6J("ngIf", !(null != o.itemsData.items && o.itemsData.items.length || o.initialLoading || o.loading || o.filtersLoading))
                }
            }
            const nt = function (n, i, o, e, r, s, l, d, T, ut, pt, ft, _t, gt) {
                return {
                    activeProduct: n,
                    showSelection: i,
                    breadcrumb: o,
                    viewType: e,
                    loading: r,
                    initialLoading: s,
                    filtersLoading: l,
                    likedProductsMap: d,
                    itemsData: T,
                    showPrice: ut,
                    productMessage: pt,
                    showScrollUp: ft,
                    cachedProducts: _t,
                    filters: gt
                }
            };
            let it = (() => {
                class n {
                    constructor() {
                        this.store = (0, t.f3M)(g.nn), this.deviceService = (0, t.f3M)(A.U8), this.productsViewProvider = (0, t.f3M)(p.jX, {
                            optional: !0
                        }), this.activeProduct$ = this.store.activeProduct$, this.showSelection$ = this.store.showSelection$, this.breadcrumb$ = this.store.breadcrumb$, this.likedProductsMap$ = this.store.likedProductsMap$, this.itemsData$ = this.store.itemsData$, this.showPrice$ = this.store.showPrice$, this.loading$ = this.store.loading$, this.initialLoading$ = this.store.initialLoading$, this.filtersLoading$ = this.store.filtersLoading$, this.viewType$ = this.store.viewType$, this.productMessage$ = this.store.productMessage$, this.showScrollUp$ = this.store.showScrollUp$, this.cachedProducts$ = this.store.cachedProducts$, this.filters$ = this.store.filters$, this.productsViewType = g.VU, this.connectToDynamicProvider()
                    }
                    trackItems(o, e) {
                        return e?.id
                    }
                    itemSelect(o) {
                        this.store.blockSelection && o.type === p.cA.product || (o.type === p.cA.catalog && this.listing?.nativeElement && (this.listing.nativeElement.scrollTop = 0), this.store.selectItem(o))
                    }
                    favouriteClick(o, e) {
                        this.store.toggleFavProduct(o, e)
                    }
                    goUp() {
                        this.store.goCatalogUp()
                    }
                    changeViewType(o) {
                        this.store.changeListViewType(o)
                    }
                    containerScroll() {
                        this.store.loadMore()
                    }
                    scrollOffsetHit(o) {
                        this.store.offsetChanged(o)
                    }
                    detectScroll(o) {
                        if (this.deviceService.orientation === B.i5.landscape) return;
                        const e = o.target,
                            {
                                scrollWidth: r,
                                scrollLeft: s,
                                clientWidth: l
                            } = e;
                        (r || 0) - (s || 0) - (l || 0) < 100 && this.store.loadMore()
                    }
                    showMessage() {
                        return this.deviceService.isLandscape
                    }
                    connectToDynamicProvider() {
                        this.productsViewProvider?.actionBtnCallback$ && this.productsViewProvider.actionBtnCallback$.subscribe(() => this.store.openFilters())
                    }
                }
                return n.\u0275fac = function (o) {
                    return new(o || n)
                }, n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-products-view"]
                    ],
                    viewQuery: function (o, e) {
                        if (1 & o && t.Gf(O, 5), 2 & o) {
                            let r;
                            t.iGM(r = t.CRH()) && (e.listing = r.first)
                        }
                    },
                    hostAttrs: [1, "CrownCrete-base-products-view"],
                    standalone: !0,
                    features: [t._Bn([(0, Z.E6)(g.nn)]), t.jDz],
                    decls: 1,
                    vars: 16,
                    consts: [
                        [4, "ngrxLet"],
                        ["class", "product-feature-message full", 4, "ngIf"],
                        [1, "hide-on-search"],
                        [1, "products-view-return"],
                        ["CrownCrete-button", "", "class", "small outline reverse hide-on-search", 3, "hidden", "disabled", "click", 4, "ngIf"],
                        [1, "products-view-type-select"],
                        [1, "CrownCrete-label", "CrownCrete-semi-bold"],
                        ["CrownCrete-icon-button", "", 1, "small", 3, "disabled", "click"],
                        ["name", "fl_catalog_o"],
                        ["name", "fl_list_o"],
                        [1, "products-search-and-filters"],
                        ["CrownCreteScrollBottom", "", "CrownCreteScrollTop", "", 1, "CrownCrete-base-products-listing", 3, "atBottom", "offsetHit"],
                        ["listingContainer", ""],
                        ["class", "CrownCrete-button listing-return-hor", 3, "click", 4, "ngIf"],
                        ["class", "products-list-wrapper", 4, "ngIf"],
                        ["class", "products-view-scroll-up", 4, "ngIf"],
                        ["class", "products-view-loader", 4, "ngIf"],
                        ["class", "products-view-error-info", 4, "ngIf"],
                        [1, "product-feature-message", "full"],
                        [1, "CrownCrete-caption"],
                        ["CrownCrete-button", "", 1, "small", "outline", "reverse", "hide-on-search", 3, "disabled", "click"],
                        ["name", "fl_arrow_left_o"],
                        [1, "CrownCrete-button", "listing-return-hor", 3, "click"],
                        ["name", "fl_arrow_return_left_o"],
                        [1, "products-list-wrapper"],
                        [1, "products-list-inner", 3, "scroll"],
                        [4, "ngFor", "ngForOf"],
                        [4, "ngFor", "ngForOf", "ngForTrackBy"],
                        [1, "CrownCrete-pointer", 3, "CrownCreteSkeletonLoader", "item", "imageSet", "rgbaColor", "isFav", "showPrice", "price", "imgContain", "clicked", "favouriteBtnClicked"],
                        ["class", "CrownCrete-pointer", 3, "inverted", "CrownCreteSkeletonLoader", "item", "imageSet", "rgbaColor", "isFav", "showPrice", "price", "imgContain", "clicked", "favouriteBtnClicked", 4, "ngIf"],
                        [1, "products-view-scroll-up"],
                        ["CrownCrete-button", "", 1, "reverse", "outline", 3, "CrownCreteScrollToTop"],
                        ["name", "fl_arrow_up_o"],
                        [1, "products-view-loader"],
                        ["CrownCrete-loader", "", 3, "label"],
                        [1, "products-view-error-info"],
                        ["icon", "fl_adjust_horizontal_o", 3, "header", "message"]
                    ],
                    template: function (o, e) {
                        1 & o && t.YNc(0, et, 23, 20, "ng-container", 0), 2 & o && t.Q6J("ngrxLet", t.rFY(1, nt, [e.activeProduct$, e.showSelection$, e.breadcrumb$, e.viewType$, e.loading$, e.initialLoading$, e.filtersLoading$, e.likedProductsMap$, e.itemsData$, e.showPrice$, e.productMessage$, e.showScrollUp$, e.cachedProducts$, e.filters$]))
                    },
                    dependencies: [a.ez, a.sg, a.O5, P, u._N, u.eJ, v.c, m.K, L.xL, h.TJ, h.Y_, $.e, b.N, C.X, F.g, h.Vz, h.Oj, y],
                    styles: [".CrownCrete-base-products-view .product-feature-message{background-color:var(--fl-primary100);border-radius:.25rem;padding:var(--fl-y-padding-xs);margin:var(--fl-y-padding-xs)}.CrownCrete-base-products-view .product-feature-message span{color:var(--fl-primary)}@media (orientation: portrait){.CrownCrete-base-products-view.full{display:none}}.CrownCrete-base-products-view .hide-on-search{transform:scaleY(1);transform-origin:top;transition:all .3s ease-in-out;height:34px}.CrownCrete-base-products-view .hide-on-search.hidden{transform:scaleY(0);height:0;min-height:0;padding:0}@media (max-width: 1023px) and (orientation: portrait){.CrownCrete-base-products-view .products-search-and-filters{display:none}}@media (min-width: 768px){.CrownCrete-base-products-view .products-view-error-info{margin-top:0;pointer-events:none}}@media (max-width: 767px){.CrownCrete-base-products-view .products-view-error-info{position:initial}.CrownCrete-base-products-view .products-view-error-info .CrownCrete-error-info{align-items:center}.CrownCrete-base-products-view .products-view-error-info .not-found-icon{margin-right:1rem;min-width:3rem;min-height:3rem;max-width:3rem;max-height:3rem;width:3rem;height:3rem;background-color:var(--fl-primary100);border-radius:50%;display:flex;justify-content:center;align-items:center}.CrownCrete-base-products-view .products-view-error-info .not-found-icon CrownCrete-icon{color:var(--fl-primary);width:2.25rem;height:2.25rem}}\n"],
                    encapsulation: 2,
                    changeDetection: 0
                }), n
            })();
            var rt = c(8951),
                ct = c(155),
                st = c(1773);

            function lt(n, i) {
                if (1 & n) {
                    const o = t.EpF();
                    t.ynx(0), t.TgZ(1, "button", 1), t.NdJ("click", function () {
                        t.CHM(o);
                        const r = t.oxw();
                        return t.KtG(r.openFilters())
                    }), t._UZ(2, "CrownCrete-icon", 2), t._uU(3), t.ALo(4, "flTranslate"), t.qZA(), t.TgZ(5, "button", 3), t.NdJ("click", function () {
                        t.CHM(o);
                        const r = t.oxw();
                        return t.KtG(r.openFilters())
                    }), t._UZ(6, "CrownCrete-icon", 2), t.qZA(), t.BQk()
                }
                if (2 & n) {
                    const o = i.ngrxLet,
                        e = t.oxw();
                    t.xp6(1), t.Q6J("disabled", e.disabled), t.xp6(1), t.ekj("notification", o.filtersCount >= 2), t.Q6J("name", o.filtersCount < 2 ? "fl_search_o" : "fl_adjust_horizontal_o"), t.xp6(1), t.hij(" ", t.lcZ(4, 9, "room.settings.search"), " "), t.xp6(2), t.Q6J("disabled", e.disabled), t.xp6(1), t.ekj("notification", o.filtersCount >= 2), t.Q6J("name", o.filtersCount < 2 ? "fl_search_o" : "fl_adjust_horizontal_o")
                }
            }
            const at = function (n) {
                return {
                    filtersCount: n
                }
            };
            let dt = (() => {
                class n extends st.YU {
                    constructor() {
                        super(...arguments), this.callbackProvider = (0, t.f3M)(p.jX, {
                            optional: !0
                        }), this.productsProvider = (0, t.f3M)(p.IA), this.cdr = (0, t.f3M)(t.sBO), this.filtersCount$ = this.productsProvider.selectFilterValues$.pipe((0, x.U)(o => o.values?.length || 0)), this.disabled = !0
                    }
                    ngOnInit() {
                        this.productsProvider.currentItems$.pipe((0, rt.R)(this.destroyed), (0, ct.P)(o => !!o), (0, k.b)(o => {
                            this.disabled = !o, this.cdr.markForCheck()
                        })).subscribe()
                    }
                    openFilters() {
                        this.callbackProvider?.actionBtnCallback && this.callbackProvider.actionBtnCallback()
                    }
                }
                return n.\u0275fac = function () {
                    let i;
                    return function (e) {
                        return (i || (i = t.n5z(n)))(e || n)
                    }
                }(), n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-filters-button"]
                    ],
                    hostAttrs: [1, "CrownCrete-filters-button"],
                    standalone: !0,
                    features: [t.qOj, t.jDz],
                    decls: 1,
                    vars: 3,
                    consts: [
                        [4, "ngrxLet"],
                        ["CrownCrete-button", "", 1, "outline", "small", "reverse", 3, "disabled", "click"],
                        [3, "name"],
                        ["CrownCrete-icon-button", "", 1, "outline", "small", 3, "disabled", "click"]
                    ],
                    template: function (o, e) {
                        1 & o && t.YNc(0, lt, 7, 11, "ng-container", 0), 2 & o && t.Q6J("ngrxLet", t.VKq(1, at, e.filtersCount$))
                    },
                    dependencies: [a.ez, v.c, m.K, u._N, u.eJ, b.N, C.X],
                    styles: ['.CrownCrete-filters-button .CrownCrete-button{position:relative}@media (min-width: 1024px){.CrownCrete-filters-button .CrownCrete-button{display:none}}@media (max-width: 767px) and (orientation: portrait){.CrownCrete-filters-button .CrownCrete-button{display:none}}.CrownCrete-filters-button .CrownCrete-icon-button{position:relative}@media (min-width: 768px){.CrownCrete-filters-button .CrownCrete-icon-button{display:none}}.CrownCrete-filters-button CrownCrete-icon.notification:before{content:"";display:inline-block;width:6px;height:6px;border-radius:50%;background-color:var(--fl-primary);position:absolute;top:2px;right:4px}\n'],
                    encapsulation: 2,
                    changeDetection: 0
                }), n
            })()
        }
    }
]);