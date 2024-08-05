(function() {
    try {
        var K = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
            v = (new Error).stack;
        v && (K._sentryDebugIds = K._sentryDebugIds || {}, K._sentryDebugIds[v] = "166d5a42-fadc-4ce8-9f40-27d2c57e981f", K._sentryDebugIdIdentifier = "sentry-dbid-166d5a42-fadc-4ce8-9f40-27d2c57e981f")
    } catch {}
})(), (self.webpackChunkCrownCrete = self.webpackChunkCrownCrete || []).push([
    [95], {
        8095: (K, v, c) => {
            "use strict";
            c.r(v), c.d(v, {
                BaseRoomLayoutComponent: () => Dn,
                RoomEventsComponentStore: () => Ge
            });
            var t = c(2560),
                u = c(4666),
                d = c(7549),
                f = c(8281),
                m = c(6646),
                w = c(3280),
                x = c(1339),
                C = c(8590),
                E = c(973),
                Y = c(8145),
                q = c(1773),
                N = c(4754),
                P = c(8951),
                V = c(1989),
                $ = c(116),
                I = c(9337),
                J = c(9739),
                z = c(538),
                F = c(9295),
                p = c(6096),
                L = c(2874),
                Z = c(1121);
            let U = (() => {
                class n extends f.m1 {
                    constructor(e, o, r, g) {
                        super(), this.configProvider = e, this.roomsProvider = o, this.productsProvider = r, this.navigationProvider = g, this.panelStyle$ = this.select(O => O.panelStyle), this.inited = !1
                    }
                    get canvasDimensions() {
                        const {
                            canvasRef: e
                        } = this.get(), o = e?.nativeElement, r = o?.getBoundingClientRect();
                        return {
                            width: o?.offsetWidth || 0,
                            height: o?.offsetHeight || 0,
                            left: r?.x || 0,
                            top: r?.y || 0
                        }
                    }
                    get hotpointsDimensions() {
                        const e = this.canvasDimensions;
                        return {
                            width: `${e.width||0}px`,
                            height: `${e.height||0}px`,
                            left: `${e.left||0}px`,
                            top: `${e.top||0}px`
                        }
                    }
                    ngOnDestroy() {
                        if(super.ngOnDestroy(), !this.inited) return;
                        const {
                            hotpointsComponentRefs: e,
                            resizeObserver: o
                        } = this.get();
                        o?.disconnect(), Object.values(e || {}).forEach(r => r.forEach(g => g.destroy()))
                    }
                    init(e, o) {
                        const r = this.initObserver(e);
                        this.setState({
                            resizeObserver: r,
                            canvasRef: e,
                            vcRef: o,
                            defaultFilter: Z.H9
                        }), this.connectToProductStore(), this.resetFilters()
                    }
                    initObserver(e) {
                        const o = new ResizeObserver(() => {
                            !this.inited || this.patchState({
                                panelStyle: this.hotpointsDimensions
                            })
                        });
                        return o.observe(e.nativeElement), o
                    }
                    connectToProductStore() {
                        this.productsProvider.hotpointProductMap$.pipe((0, P.R)(this.destroy$), (0, z.M)(this.roomsProvider.viewerSettings$, this.roomsProvider.roomEstimation$, this.configProvider.companyConfig$), (0, I.b)(([e, o, r, g]) => {
                            if(g.company?.epoxyView) return;
                            let O = "";
                            const R = structuredClone(e),
                                k = Object.keys(R).map(A => R[A].hotpoint?.placementOption === L.aR.rugs ? (O = A, null) : R[A].hotpoint).filter(A => !!A);
                            this.patchState({
                                hotpoints: k,
                                floorHotpointOn: o.floorHotpointOn,
                                wallsHotpointsOn: o.wallsHotpointsOn,
                                coutertopsHotpointsOn: o.coutertopsHotpointsOn
                            }), this.setDefaultFilter(k), O && R[O] && delete R[O], this.renderHotpoints(R || {}), r?.shoppableHotpoint?.length && this.renderShoppableHotpoints(r.shoppableHotpoint)
                        })).subscribe()
                    }
                    renderHotpoints(e) {
                        const o = Object.values(e).map(et => et.hotpoint),
                            {
                                vcRef: r,
                                floorHotpointOn: g,
                                wallsHotpointsOn: O,
                                coutertopsHotpointsOn: R
                            } = this.get(),
                            k = {};
                        r.clear(), (o || []).forEach(et => {
                            if(k[et.placementOption] || (k[et.placementOption] = []), et.placementOption === L.aR.floors && (!g || o.length <= 1) || et.placementOption === L.aR.walls && !O || et.placementOption === L.aR.countertops && !R) return;
                            const Et = r.createComponent(Vt);
                            Et.instance.data = et, k[et.placementOption].push(Et), e[et.id]?.selected && (Et.instance.selected = !0, this.get()?.currentOption || this.patchState({
                                currentOption: et.placementOption
                            })), Et.instance.selectionChange.pipe((0, P.R)(this.destroy$), (0, I.b)(Zt => {
                                this.productsProvider.updateTransformationsData(), this.handleSelection(Zt), this.updateSelectionMap(), this.updateSearchFilters(Zt.hotpoint?.placementOption), this.updateActiveProduct(Zt.hotpoint?.id, Zt.selected)
                            })).subscribe()
                        });
                        const A = this.get().currentOption,
                            st = k[A]?.every(et => et.instance.selected),
                            G = k[this.get()?.currentOption]?.find(et => et.instance.withLabel);
                        st && G && (G.instance.labelSelected = !0), this.patchState({
                            hotpointsComponentRefs: k
                        }), this.checkHotpointsTypes(o)
                    }
                    setDefaultFilter(e) {
                        let o = [];
                        (e || []).forEach(g => {
                            g.placementOption === L.aR.floors && (o = [...o, ...Z.Vz]), g.placementOption === L.aR.walls && (o = [...o, ...Z.Bb]), g.placementOption === L.aR.countertops && (o = [...o, ...Z.ky])
                        });
                        const r = {
                            ...Z.H9
                        };
                        r.value = [...new Set(o)], this.patchState({
                            defaultFilter: r
                        })
                    }
                    renderShoppableHotpoints(e) {
                        const {
                            vcRef: o
                        } = this.get();
                        e.forEach(r => {
                            o.createComponent(ye).instance.data = {
                                ...r,
                                x: Math.trunc(100 * r.x),
                                y: Math.trunc(100 * r.y)
                            }
                        })
                    }
                    openShoppableLink(e) {
                        this.navigationProvider.goToUrl(e)
                    }
                    handleSelection(e) {
                        const {
                            hotpointsComponentRefs: o,
                            currentOption: r
                        } = this.get(), g = e.hotpoint.placementOption, O = g !== r;
                        !!e.label && e.hotpoint?.placementOption && o?.[e.hotpoint?.placementOption]?.forEach(A => {
                            A.instance.selected = !!e.selected, e.hotpoint.main && e.hotpoint.id === A.instance.id && (A.instance.labelSelected = !!e.selected), this.patchState({
                                currentOption: g,
                                resetPage: O
                            })
                        }), O && r && o?.[r]?.forEach(A => {
                            A.instance.selected = !1, A.instance.labelSelected = !1
                        });
                        const k = o?.[g]?.find(A => A.instance.id === e.hotpoint.id);
                        k && (k.instance.selected = !!e.selected), this.patchState({
                            currentOption: g,
                            resetPage: O
                        })
                    }
                    updateSelectionMap() {
                        const {
                            hotpointsComponentRefs: e
                        } = this.get(), o = {};
                        Object.values(e || {}).forEach(r => {
                            r.forEach(g => {
                                g.instance.id && (o[g.instance.id] = g.instance.selected)
                            })
                        }), this.productsProvider.updateHotpointsMap(o)
                    }
                    updateSearchFilters(e, o) {
                        const {
                            resetPage: r,
                            hotpointsComponentRefs: g,
                            filtersBlocked: O,
                            filtersBlockedPlacementOption: R,
                            defaultFilter: k
                        } = this.get();
                        if(!e || O) return;
                        let A = "";
                        o ? A = e.toString() : Object.keys(g || {}).forEach(et => {
                            const Et = g?.[et].some(Zt => Zt.instance.selected);
                            return Et && (A = et), Et
                        });
                        const st = {
                            ...k
                        };
                        A && !O && (st.value = [A]), O && R && (st.value = [R]);
                        const G = {
                            filters: [st]
                        };
                        r && (G.page = 1), this.productsProvider.patchFilters(G)
                    }
                    resetFilters() {
                        const {
                            defaultFilter: e
                        } = this.get(), r = {
                            filters: [{
                                ...e
                            }]
                        };
                        this.productsProvider.patchFilters(r)
                    }
                    checkHotpointsTypes(e) {
                        const o = e.at(0)?.placementOption;
                        if(!o) return;
                        let r = !0;
                        e.forEach(g => {
                            g.placementOption === o || (r = !1)
                        }), r ? (this.updateSearchFilters(o, !0), this.patchState({
                            filtersBlocked: !0,
                            filtersBlockedPlacementOption: o
                        })) : this.patchState({
                            filtersBlocked: !1
                        })
                    }
                    updateActiveProduct(e, o) {
                        this.productsProvider.hotpointProductMap$.pipe((0, F.q)(1), (0, z.M)(this.productsProvider.activeProduct$), (0, I.b)(([r, g]) => {
                            const O = Object.values(r).filter(k => k.hotpoint.id !== e && k.selected);
                            if(!o) return void(O.length || (this.productsProvider.setActiveProduct(void 0, !1), this.productsProvider.resetTransformationsData()));
                            const R = Object.values(r).find(k => k.hotpoint.id === e);
                            if(O.length > 0) {
                                if(R?.product) {
                                    let k = !0;
                                    O.forEach(A => {
                                        A.product?.id !== R.product?.id && (k = !1)
                                    }), k && this.productsProvider.updateRender(r)
                                }
                            } else !O.length && R?.product ? (R.product.id !== g?.id && this.productsProvider.setActiveProduct(new L.qn(R.product), !1), this.productsProvider.applyTransformationsData(R.hotpoint.id)) : (this.productsProvider.setActiveProduct(void 0, !1), this.productsProvider.resetTransformationsData())
                        })).subscribe()
                    }
                }
                return n.\u0275fac = function(e) {
                    return new(e || n)(t.LFG(p.FI), t.LFG(p.XZ), t.LFG(p.IA), t.LFG(p.YD))
                }, n.\u0275prov = t.Yz7({
                    token: n,
                    factory: n.\u0275fac
                }), n
            })();
            var S = c(635),
                Q = c(6562),
                H = c(8977),
                X = c(7714),
                B = c(745),
                M = c(2673),
                tt = c(8653),
                W = c(4351),
                dt = c(2566),
                yt = c(4874),
                It = c(8947),
                mt = c(155),
                Ct = c(488);
            let pt = (() => {
                    class n extends f.m1 {
                        constructor(e, o, r, g, O, R, k) {
                            super({
                                loading: !0,
                                loadingValue: 100,
                                isUpload: !1,
                                initLoad: !0,
                                showHotpoints: !0
                            }), this.renderer = e, this.device = o, this.visualizationProvider = r, this.roomsProvider = g, this.productsProvider = O, this.roomApiProvider = R, this.eventsProvider = k, this.loading$ = this.select(A => A.loading), this.loadingData$ = this.select(A => ({
                                loadingValue: A.loadingValue,
                                isUpload: A.isUpload,
                                initLoad: A.initLoad,
                                loadLabel: A.initLoad || A.isUpload ? A.isUpload ? "room.analizingPhoto" : "room.roomLoading" : ""
                            })), this.canvasReady$ = this.select(A => A.canvasReady && A.showHotpoints), this.showHotpoints$ = this.select(A => !!A.showHotpoints), this.compareImage$ = this.roomsProvider.activeRoom$.pipe((0, S.U)(A => A?.image?.large || A?.image?.medium || "")), this.showCompare$ = (0, Q.a)([this.roomsProvider.selectCompare$.pipe((0, H.x)()), this.productsProvider.hotpointProductMap$]).pipe((0, S.U)(([A, st]) => A && !!Object.values(st)?.filter(G => G.product).length)), this.isZoomed$ = this.visualizationProvider.isZoomed$, this.isLayoutOn$ = this.roomsProvider.showLayout$, this.viewerSettings$ = this.roomsProvider.viewerSettings$, this.isVerticalZoom$ = this.visualizationProvider.zoomDirection$.pipe((0, S.U)(A => A === p.Rp.vertical)), this.zoomTutorialSeen$ = this.roomsProvider.sawZoomTutorial$, this.imgSizeSubscription = X.w0.EMPTY
                        }
                        ngOnDestroy() {
                            super.ngOnDestroy(), this.imgSizeSubscription.unsubscribe()
                        }
                        init(e, o, r) {
                            this.patchState({
                                canvasRef: o,
                                hotpointsPaneRef: r
                            }), (0, m.T)(this.roomInit(e, o), this.productInit(), this.watchHotpointsChange(), this.watchHotpointVisibility()).subscribe(), this.watchZoomMove(), this.watchImgSize()
                        }
                        resize() {
                            this.visualizationProvider.resize()
                        }
                        toggleHotpointsVisibility() {
                            this.visualizationProvider.isZoomed || this.roomsProvider.setHotpointsVisibility(!this.get().showHotpoints)
                        }
                        zoom() {
                            const {
                                canvasRef: e
                            } = this.get();
                            e && (this.visualizationProvider.zoom(!0), this.setHotpointsPaneSize())
                        }
                        setZoomTutorial() {
                            this.roomsProvider.setZoomTutorial()
                        }
                        mockAILoading(e) {
                            (0, B.of)(!0).pipe((0, M.w)(() => (0, tt.F)(1e3)), (0, S.U)(() => -1), (0, W.R)((o, r) => o + r, e), (0, dt.o)(o => o > 0), (0, yt.O)(e), (0, P.R)(this.destroy$), (0, I.b)(() => {
                                const {
                                    loadingValue: o,
                                    loading: r
                                } = this.get(), O = o + 100 / (e + 1);
                                O < 100 && r && this.patchState({
                                    loadingValue: Math.min(O, 95)
                                })
                            })).subscribe()
                        }
                        watchHotpointVisibility() {
                            return this.roomsProvider.showHotpoints$.pipe((0, P.R)(this.destroy$), (0, S.U)(e => {
                                this.patchState({
                                    showHotpoints: !!e
                                })
                            }))
                        }
                        watchZoomMove() {
                            (0, m.T)(this.visualizationProvider.zoomMoved, this.roomsProvider.showLayout$, this.roomsProvider.selectZoom$.pipe((0, S.U)(e => ({
                                zoomed: e
                            })))).pipe((0, P.R)(this.destroy$)).subscribe(e => {
                                this.setHotpointsPaneSize(), !this.get().zoomTutorialShown && e?.zoomed && (this.zoomTutorialCountdown(), this.patchState({
                                    zoomTutorialShown: !0
                                }))
                            })
                        }
                        setHotpointsPaneSize() {
                            const {
                                canvasRef: e,
                                hotpointsPaneRef: o
                            } = this.get();
                            e && o && (0, It.H)(30).pipe((0, P.R)(this.destroy$), (0, I.b)(() => {
                                const {
                                    left: r,
                                    top: g,
                                    right: O,
                                    bottom: R,
                                    height: k,
                                    width: A
                                } = e.nativeElement.getBoundingClientRect();
                                this.renderer.setStyle(o.nativeElement, "top", `${g}px`), this.renderer.setStyle(o.nativeElement, "right", `${O}px`), this.renderer.setStyle(o.nativeElement, "left", `${r}px`), this.renderer.setStyle(o.nativeElement, "bottom", `${R}px`), this.renderer.setStyle(o.nativeElement, "width", `${A}px`), this.renderer.setStyle(o.nativeElement, "height", `${k}px`)
                            })).subscribe()
                        }
                        roomInit(e, o) {
                            return this.roomsProvider.roomUploading$.pipe((0, F.q)(1), (0, $.h)(r => !!r), (0, I.b)(() => {
                                this.patchState({
                                    loadingValue: 0,
                                    isUpload: !0
                                }), this.mockAILoading(6)
                            })).subscribe(), this.roomsProvider.loadingRooms$.pipe((0, P.R)(this.destroy$), (0, mt.P)(r => !r), (0, M.w)(() => this.roomsProvider.activeRoom$.pipe((0, mt.P)())), (0, M.w)(() => this.roomsProvider.roomEstimation$.pipe((0, mt.P)(r => !!r))), (0, $.h)(r => !!r), (0, M.w)(r => (this.patchState({
                                estimation: r
                            }), o ? this.roomsProvider.activeRoom$.pipe((0, mt.P)(g => !!g), (0, M.w)(g => this.visualizationProvider.loadByElement(r, g, o.nativeElement).pipe((0, M.w)(() => this.visualizationProvider.visualizationLoaded$)).pipe((0, $.h)(O => !!O)))) : (0, B.of)(!1))), (0, S.U)(r => {
                                this.patchState({
                                    loading: !r,
                                    loadingValue: 100
                                })
                            }), (0, x.g)(750), (0, I.b)(() => {
                                this.setHotpointsPaneSize(), this.patchState({
                                    canvasReady: !0
                                })
                            }))
                        }
                        productInit() {
                            let e;
                            return this.productsProvider.activeProduct$.pipe((0, P.R)(this.destroy$), (0, z.M)(this.productsProvider.hotpointProductMap$, this.roomsProvider.loadingRooms$, this.productsProvider.visualizationUpdate$), (0, $.h)(([o, r, g, O]) => !g && (e = o, !!o && !!Object.keys(r)?.length)), (0, M.w)(([o, r, g, O]) => {
                                let R = -1;
                                return o.tileOptions.every((k, A) => !k.isDefault || (R = A, void(o = new L.qn({
                                    ...o,
                                    width: Number(k.width),
                                    height: Number(k.height)
                                })))), R < 0 && o.tileOptions?.length && (R = 0, o = new L.qn({
                                    ...o,
                                    width: Number(o.tileOptions[0].width),
                                    height: Number(o.tileOptions[0].height)
                                })), this.patchState({
                                    loading: !0
                                }), O ? this.visualizationProvider.loadProduct(o, R, r) : (this.visualizationProvider.changeProduct(o, r), (0, B.of)(!0))
                            }), (0, x.g)(300), (0, S.U)(o => {
                                this.patchState({
                                    loading: !o,
                                    initLoad: !1
                                })
                            }))
                        }
                        zoomTutorialCountdown() {
                            (0, It.H)(3e3).pipe((0, P.R)(this.destroy$), (0, I.b)(() => {
                                this.roomsProvider.setZoomTutorial()
                            })).subscribe()
                        }
                        watchImgSize() {
                            this.imgSizeSubscription = this.visualizationProvider.imageSize$.pipe((0, $.h)(e => !!e), (0, I.b)(e => this.eventsProvider.send(new p.VI(e)))).subscribe()
                        }
                        watchHotpointsChange() {
                            return this.productsProvider.hotpointProductMap$.pipe((0, P.R)(this.destroy$), (0, I.b)(e => this.visualizationProvider.updateHotpoints(e)))
                        }
                    }
                    return n.\u0275fac = function(e) {
                        return new(e || n)(t.LFG(t.Qsj), t.LFG(J.U8), t.LFG(p.oC), t.LFG(p.XZ), t.LFG(p.IA), t.LFG(p.Sz), t.LFG(Ct.QT))
                    }, n.\u0275prov = t.Yz7({
                        token: n,
                        factory: n.\u0275fac
                    }), n
                })(),
                Ft = (() => {
                    class n extends q.YU {
                        constructor() {
                            super(...arguments), this.elRef = (0, t.f3M)(t.SBq), this.hotpointsStore = (0, t.f3M)(U), this.renderer = (0, t.f3M)(J.N1), this.vcRef = (0, t.f3M)(t.s_b)
                        }
                        set observed(e) {
                            !this._observed && e && (this._observed = e, this.hotpointsStore.init(this._observed, this.vcRef), this.connectToStore())
                        }
                        connectToStore() {
                            this.hotpointsStore.panelStyle$.pipe((0, P.R)(this.destroyed), (0, V.b)(5), (0, $.h)(e => !!e), (0, I.b)(e => {
                                this.renderer.renderCSS(this.elRef?.nativeElement, e)
                            })).subscribe()
                        }
                    }
                    return n.\u0275fac = function() {
                        let l;
                        return function(o) {
                            return (l || (l = t.n5z(n)))(o || n)
                        }
                    }(), n.\u0275cmp = t.Xpm({
                        type: n,
                        selectors: [
                            ["CrownCrete-room-hotpoints"]
                        ],
                        hostAttrs: [1, "CrownCrete-room-hotpoints"],
                        inputs: {
                            observed: "observed"
                        },
                        standalone: !0,
                        features: [t._Bn([(0, f.E6)(U)]), t.qOj, t.jDz],
                        decls: 0,
                        vars: 0,
                        template: function(e, o) {},
                        dependencies: [u.ez, J.QS],
                        styles: [".CrownCrete-room-hotpoints{display:flex;position:fixed;opacity:.5;pointer-events:none}\n"],
                        encapsulation: 2,
                        changeDetection: 0
                    }), n
                })();
            var at = c(7879),
                rt = c(852);

            function oe(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "p", 4), t.NdJ("click", function(r) {
                        t.CHM(e);
                        const g = t.oxw();
                        return t.KtG(g.hotpointClick(r, !0))
                    }), t._uU(1), t.ALo(2, "flTranslate"), t.qZA()
                }
                if(2 & n) {
                    const e = t.oxw();
                    t.xp6(1), t.hij(" ", t.lcZ(2, 1, e.label), "\n")
                }
            }
            let Vt = (() => {
                class n {
                    constructor() {
                        this.cdr = (0, t.f3M)(t.sBO), this._x = "", this._y = "", this._labelVisible = !0, this.selected = !1, this.labelSelected = !1, this.selectionChange = new t.vpe
                    }
                    set x(e) {
                        this._x = `${e||0}%`, this.cdr.markForCheck()
                    }
                    set y(e) {
                        this._y = `${e||0}%`, this.cdr.markForCheck()
                    }
                    set data(e) {
                        !e || (this._hotpoint = {
                            ...e
                        }, this.x = e.x, this.y = e.y)
                    }
                    get isSelected() {
                        return {
                            selected: this.selected,
                            "all-selected": this.labelSelected
                        }
                    }
                    get attrId() {
                        return `${this._hotpoint?.id}` || ""
                    }
                    get style() {
                        return {
                            left: this._x || "",
                            top: this.withLabel ? `calc(${this._y} - 3rem)` : this._y || ""
                        }
                    }
                    get id() {
                        return this._hotpoint?.id || ""
                    }
                    get label() {
                        return this._hotpoint?.placementOption || ""
                    }
                    get labelVisible() {
                        return this._labelVisible
                    }
                    get withLabel() {
                        return !!this._hotpoint?.main
                    }
                    hotpointClick(e, o = !1) {
                        e.stopPropagation(), e.stopImmediatePropagation(), o ? (this.labelSelected = !this.labelSelected, this.selected = this.labelSelected) : this.selected = !this.selected, this._labelVisible = !this.labelVisible, this.selectionChange.emit({
                            selected: this.selected,
                            hotpoint: this._hotpoint,
                            label: o
                        }), this.cdr.markForCheck()
                    }
                }
                return n.\u0275fac = function(e) {
                    return new(e || n)
                }, n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-hotpoint"]
                    ],
                    hostVars: 5,
                    hostBindings: function(e, o) {
                        2 & e && (t.uIk("id", o.attrId), t.Akn(o.style), t.Tol(o.isSelected))
                    },
                    inputs: {
                        selected: "selected",
                        labelSelected: "labelSelected",
                        x: "x",
                        y: "y",
                        data: "data"
                    },
                    outputs: {
                        selectionChange: "selectionChange"
                    },
                    standalone: !0,
                    features: [t.jDz],
                    decls: 4,
                    vars: 1,
                    consts: [
                        ["class", "CrownCrete-caption CrownCrete-hotpoint-label regular", 3, "click", 4, "ngIf"],
                        [1, "CrownCrete-hotpoint-pin", 3, "click"],
                        [1, "CrownCrete-hotpoint-pin-inner"],
                        [1, "CrownCrete-hotpoint-pin-center"],
                        [1, "CrownCrete-caption", "CrownCrete-hotpoint-label", "regular", 3, "click"]
                    ],
                    template: function(e, o) {
                        1 & e && (t.YNc(0, oe, 3, 3, "p", 0), t.TgZ(1, "div", 1), t.NdJ("click", function(g) {
                            return o.hotpointClick(g)
                        }), t._UZ(2, "div", 2)(3, "div", 3), t.qZA()), 2 & e && t.Q6J("ngIf", o.withLabel)
                    },
                    dependencies: [u.ez, u.O5, at.N, rt.X],
                    styles: ['[_nghost-%COMP%]{position:absolute;display:flex;flex-direction:column;align-items:center;pointer-events:all;-webkit-tap-highlight-color:rgba(0,0,0,0)}.selected[_nghost-%COMP%]   .CrownCrete-hotpoint-pin[_ngcontent-%COMP%]   .CrownCrete-hotpoint-pin-inner[_ngcontent-%COMP%]{background:var(--fl-primary)!important;width:24px;height:24px;-webkit-backdrop-filter:unset;backdrop-filter:unset}.selected[_nghost-%COMP%]   .CrownCrete-hotpoint-pin[_ngcontent-%COMP%]   .CrownCrete-hotpoint-pin-center[_ngcontent-%COMP%]{box-shadow:0 0 23px 3px var(--fl-primary300)}.all-selected[_nghost-%COMP%]   .CrownCrete-hotpoint-label[_ngcontent-%COMP%]{background-color:var(--fl-bg)}.all-selected[_nghost-%COMP%]   .CrownCrete-hotpoint-label[_ngcontent-%COMP%]:after{background-color:transparent;border-color:var(--fl-bg) transparent transparent transparent}[_nghost-%COMP%]   .CrownCrete-hotpoint-pin[_ngcontent-%COMP%]{width:2rem;height:2rem;cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative}[_nghost-%COMP%]   .CrownCrete-hotpoint-pin[_ngcontent-%COMP%]:hover   .CrownCrete-hotpoint-pin-inner[_ngcontent-%COMP%]{background:rgba(0,0,0,.2)}[_nghost-%COMP%]   .CrownCrete-hotpoint-pin[_ngcontent-%COMP%]   .CrownCrete-hotpoint-pin-center[_ngcontent-%COMP%]{background-color:var(--fl-bg);width:12px;height:12px;box-shadow:0 0 23px 3px #0000004a;border-radius:50%;position:absolute;inset:0;margin:auto}[_nghost-%COMP%]   .CrownCrete-hotpoint-pin[_ngcontent-%COMP%]   .CrownCrete-hotpoint-pin-inner[_ngcontent-%COMP%]{width:24px;height:24px;background:rgba(255,255,255,.4);border-radius:50%;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}[_nghost-%COMP%]   .CrownCrete-hotpoint-label[_ngcontent-%COMP%]{min-height:1.5rem;margin-bottom:8px;padding:.25rem .5rem;cursor:pointer;position:relative;border-radius:var(--fl-border-radius-xs)}[_nghost-%COMP%]   .CrownCrete-hotpoint-label[_ngcontent-%COMP%]:after{content:"";background-color:inherit;position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent transparent transparent}[_nghost-%COMP%]   .CrownCrete-hotpoint-label.hidden[_ngcontent-%COMP%]{visibility:hidden;pointer-events:none}'],
                    changeDetection: 0
                }), n
            })();
            var ht = c(5551);

            function bt(n, l) {
                if(1 & n && (t.TgZ(0, "div", 14), t._UZ(1, "img", 15), t.qZA()), 2 & n) {
                    const e = t.oxw(2);
                    t.xp6(1), t.Q6J("src", e.imageUrl, t.LSH)
                }
            }

            function vt(n, l) {
                if(1 & n && (t.TgZ(0, "span", 16), t._uU(1), t.qZA()), 2 & n) {
                    const e = t.oxw(2);
                    t.xp6(1), t.Oqu(e.price)
                }
            }

            function Tt(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 17), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.closePopupMobile())
                    }), t._UZ(1, "CrownCrete-icon", 18), t.qZA()
                }
            }

            function Ut(n, l) {
                if(1 & n && (t.TgZ(0, "span"), t._uU(1), t.qZA()), 2 & n) {
                    const e = t.oxw(2);
                    t.xp6(1), t.Oqu(e.label)
                }
            }

            function Ot(n, l) {
                1 & n && (t.TgZ(0, "span"), t._uU(1), t.ALo(2, "flTranslate"), t.qZA()), 2 & n && (t.xp6(1), t.Oqu(t.lcZ(2, 1, "room.hotpoints.shoppableHpLabel")))
            }

            function ne(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 3), t.NdJ("mouseenter", function() {
                        t.CHM(e);
                        const r = t.oxw();
                        return t.KtG(r.openPopupDesktop())
                    })("mouseleave", function() {
                        t.CHM(e);
                        const r = t.oxw();
                        return t.KtG(r.closePopupDesktop())
                    }), t.TgZ(1, "div", 4), t.YNc(2, bt, 2, 1, "div", 5), t.TgZ(3, "div", 6)(4, "span", 7), t._uU(5), t.qZA(), t.YNc(6, vt, 2, 1, "span", 8), t.qZA(), t.YNc(7, Tt, 2, 0, "button", 9), t.qZA(), t.TgZ(8, "div", 10)(9, "button", 11), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw();
                        return t.KtG(r.openLink())
                    }), t.YNc(10, Ut, 2, 1, "span", 12), t.YNc(11, Ot, 3, 3, "span", 12), t._UZ(12, "CrownCrete-icon", 13), t.qZA()()()
                }
                if(2 & n) {
                    const e = t.oxw();
                    t.Q6J("ngClass", e.getPositionClass()), t.xp6(2), t.Q6J("ngIf", e.imageUrl), t.xp6(3), t.Oqu(e.name), t.xp6(1), t.Q6J("ngIf", e.price), t.xp6(1), t.Q6J("ngIf", e.isMobile), t.xp6(3), t.Q6J("ngIf", e.label), t.xp6(1), t.Q6J("ngIf", !e.label)
                }
            }
            let ye = (() => {
                class n {
                    constructor() {
                        this.store = (0, t.f3M)(U), this.deviceService = (0, t.f3M)(J.U8), this.cdr = (0, t.f3M)(t.sBO), this._x = "", this._y = "", this.visible = !1
                    }
                    set x(e) {
                        this._x = `${e||0}%`, this.cdr.markForCheck()
                    }
                    set y(e) {
                        this._y = `${e||0}%`, this.cdr.markForCheck()
                    }
                    set data(e) {
                        !e || (this._shoppableHotpoint = {
                            ...e
                        }, this.x = e.x, this.y = e.y)
                    }
                    get attrId() {
                        return `${this._shoppableHotpoint?.id}` || ""
                    }
                    get style() {
                        return {
                            left: this._y || "",
                            top: this._x || ""
                        }
                    }
                    getPositionClass() {
                        return {
                            above: this._shoppableHotpoint?.tooltipDirection === L.AR.above,
                            below: this._shoppableHotpoint?.tooltipDirection === L.AR.below,
                            left: this._shoppableHotpoint?.tooltipDirection === L.AR.left,
                            right: this._shoppableHotpoint?.tooltipDirection === L.AR.right
                        }
                    }
                    get imageUrl() {
                        return this._shoppableHotpoint?.imageUrl || ""
                    }
                    get name() {
                        return this._shoppableHotpoint?.name || ""
                    }
                    get price() {
                        return this._shoppableHotpoint?.price || ""
                    }
                    get label() {
                        return this._shoppableHotpoint?.label || ""
                    }
                    get link() {
                        return this._shoppableHotpoint?.link || ""
                    }
                    get isMobile() {
                        return this.deviceService.isMobile
                    }
                    get isDesktop() {
                        return this.deviceService.isDesktop
                    }
                    openPopupMobile() {
                        !this.isMobile || (this.visible = !0, this.cdr.markForCheck())
                    }
                    closePopupMobile() {
                        !this.isMobile || (this.visible = !1, this.cdr.markForCheck())
                    }
                    openPopupDesktop() {
                        !this.isDesktop || (clearTimeout(this.tooltipTimeout), this.visible = !0, this.cdr.markForCheck())
                    }
                    closePopupDesktop() {
                        !this.isDesktop || (this.tooltipTimeout = setTimeout(() => {
                            this.visible = !1, this.cdr.markForCheck()
                        }, 1e3))
                    }
                    openLink() {
                        this._shoppableHotpoint && this.store.openShoppableLink(this._shoppableHotpoint.link)
                    }
                }
                return n.\u0275fac = function(e) {
                    return new(e || n)
                }, n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-shoppable-hotpoint"]
                    ],
                    hostVars: 3,
                    hostBindings: function(e, o) {
                        2 & e && (t.uIk("id", o.attrId), t.Akn(o.style))
                    },
                    inputs: {
                        x: "x",
                        y: "y",
                        data: "data"
                    },
                    standalone: !0,
                    features: [t._Bn([U]), t.jDz],
                    decls: 3,
                    vars: 1,
                    consts: [
                        [1, "CrownCrete-shoppable-hotpoint", "prevent-select", 3, "click", "mouseenter", "mouseleave"],
                        ["name", "fl_pricetag"],
                        ["class", "CrownCrete-shoppable-hotpoint-open", 3, "ngClass", "mouseenter", "mouseleave", 4, "ngIf"],
                        [1, "CrownCrete-shoppable-hotpoint-open", 3, "ngClass", "mouseenter", "mouseleave"],
                        [1, "CrownCrete-shoppable-hotpoint-data"],
                        ["class", "shoppable-image", 4, "ngIf"],
                        [1, "CrownCrete-shoppable-hotpoint-labels"],
                        [1, "shoppable-name"],
                        ["class", "shoppable-price", 4, "ngIf"],
                        ["class", "shoppable-close-button", 3, "click", 4, "ngIf"],
                        [1, "CrownCrete-shoppable-hotpoint-actions"],
                        [1, "shoppable-button", 3, "click"],
                        [4, "ngIf"],
                        ["name", "fl_arrow_right_o"],
                        [1, "shoppable-image"],
                        [3, "src"],
                        [1, "shoppable-price"],
                        [1, "shoppable-close-button", 3, "click"],
                        ["name", "fl_close"]
                    ],
                    template: function(e, o) {
                        1 & e && (t.TgZ(0, "div", 0), t.NdJ("click", function() {
                            return o.openPopupMobile()
                        })("mouseenter", function() {
                            return o.openPopupDesktop()
                        })("mouseleave", function() {
                            return o.closePopupDesktop()
                        }), t._UZ(1, "CrownCrete-icon", 1), t.qZA(), t.YNc(2, ne, 13, 7, "div", 2)), 2 & e && (t.xp6(2), t.Q6J("ngIf", o.visible))
                    },
                    dependencies: [u.ez, u.mk, u.O5, at.N, rt.X, ht.K],
                    styles: ['[_nghost-%COMP%]{position:absolute;display:flex;flex-direction:column;align-items:center;pointer-events:all}[_nghost-%COMP%]   .CrownCrete-shoppable-hotpoint[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;padding:.1875rem;border-radius:.5rem;background-color:#000;opacity:.6}[_nghost-%COMP%]   .CrownCrete-shoppable-hotpoint[_ngcontent-%COMP%]:hover{opacity:1}[_nghost-%COMP%]   .CrownCrete-shoppable-hotpoint[_ngcontent-%COMP%]   CrownCrete-icon[_ngcontent-%COMP%]{color:#fff;width:1rem;height:1rem}[_nghost-%COMP%]   .CrownCrete-shoppable-hotpoint-open[_ngcontent-%COMP%]{position:absolute;width:200px;border-radius:.5rem;background-color:var(--fl-overlay);display:flex;flex-direction:column;padding:.5rem}[_nghost-%COMP%]   .CrownCrete-shoppable-hotpoint-open[_ngcontent-%COMP%]   .CrownCrete-shoppable-hotpoint-data[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}[_nghost-%COMP%]   .CrownCrete-shoppable-hotpoint-open[_ngcontent-%COMP%]   .CrownCrete-shoppable-hotpoint-data[_ngcontent-%COMP%]   .shoppable-image[_ngcontent-%COMP%]{width:2.5rem;height:2.5rem;min-width:2.5rem;min-height:2.5rem;border-radius:.25rem;overflow:hidden}[_nghost-%COMP%]   .CrownCrete-shoppable-hotpoint-open[_ngcontent-%COMP%]   .CrownCrete-shoppable-hotpoint-data[_ngcontent-%COMP%]   .shoppable-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:inherit;height:inherit;object-fit:cover}[_nghost-%COMP%]   .CrownCrete-shoppable-hotpoint-open[_ngcontent-%COMP%]   .CrownCrete-shoppable-hotpoint-data[_ngcontent-%COMP%]   .CrownCrete-shoppable-hotpoint-labels[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;color:#fff;margin-left:.5rem;font-weight:600;font-size:.625rem;line-height:.75rem}[_nghost-%COMP%]   .CrownCrete-shoppable-hotpoint-open[_ngcontent-%COMP%]   .CrownCrete-shoppable-hotpoint-data[_ngcontent-%COMP%]   .CrownCrete-shoppable-hotpoint-labels[_ngcontent-%COMP%]   .shoppable-price[_ngcontent-%COMP%]{margin-top:.125rem;opacity:.7}[_nghost-%COMP%]   .CrownCrete-shoppable-hotpoint-open[_ngcontent-%COMP%]   .CrownCrete-shoppable-hotpoint-data[_ngcontent-%COMP%]   .shoppable-close-button[_ngcontent-%COMP%]{align-self:flex-start;color:#fff}[_nghost-%COMP%]   .CrownCrete-shoppable-hotpoint-open[_ngcontent-%COMP%]   .CrownCrete-shoppable-hotpoint-actions[_ngcontent-%COMP%]{margin-top:.75rem;display:flex;justify-content:center}[_nghost-%COMP%]   .CrownCrete-shoppable-hotpoint-open[_ngcontent-%COMP%]   .CrownCrete-shoppable-hotpoint-actions[_ngcontent-%COMP%]   .shoppable-button[_ngcontent-%COMP%]{padding:.25rem .5rem;border-radius:1rem;background-color:var(--fl-overlay);color:#fff;text-transform:capitalize}[_nghost-%COMP%]   .CrownCrete-shoppable-hotpoint-open[_ngcontent-%COMP%]   .CrownCrete-shoppable-hotpoint-actions[_ngcontent-%COMP%]   .shoppable-button[_ngcontent-%COMP%]   CrownCrete-icon[_ngcontent-%COMP%]{margin-left:.5rem;width:1rem;height:1rem}[_nghost-%COMP%]   .CrownCrete-shoppable-hotpoint-open[_ngcontent-%COMP%]:after{width:0;height:0;content:"";position:absolute;border-left:.5rem solid transparent;border-right:.5rem solid transparent;border-bottom:.5rem solid var(--fl-overlay)}[_nghost-%COMP%]   .CrownCrete-shoppable-hotpoint-open.below[_ngcontent-%COMP%]{top:2.5rem}[_nghost-%COMP%]   .CrownCrete-shoppable-hotpoint-open.below[_ngcontent-%COMP%]:after{top:-.5rem;right:calc(50% - .5rem);transform:rotate(0)}[_nghost-%COMP%]   .CrownCrete-shoppable-hotpoint-open.above[_ngcontent-%COMP%]{bottom:2.5rem}[_nghost-%COMP%]   .CrownCrete-shoppable-hotpoint-open.above[_ngcontent-%COMP%]:after{bottom:-.5rem;right:calc(50% - .5rem);transform:rotate(180deg)}[_nghost-%COMP%]   .CrownCrete-shoppable-hotpoint-open.right[_ngcontent-%COMP%]{left:2.5rem;top:50%;transform:translateY(-50%)}[_nghost-%COMP%]   .CrownCrete-shoppable-hotpoint-open.right[_ngcontent-%COMP%]:after{left:-.75rem;top:calc(50% - .25rem);transform:rotate(270deg)}[_nghost-%COMP%]   .CrownCrete-shoppable-hotpoint-open.left[_ngcontent-%COMP%]{right:2.5rem;top:50%;transform:translateY(-50%)}[_nghost-%COMP%]   .CrownCrete-shoppable-hotpoint-open.left[_ngcontent-%COMP%]:after{right:-.75rem;top:calc(50% - .25rem);transform:rotate(90deg)}.prevent-select[_ngcontent-%COMP%]{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}'],
                    changeDetection: 0
                }), n
            })();
            var Kt = c(5686),
                Xt = c(7931),
                kt = c(253);
            const Ce = ["imageEl"],
                Te = function(n) {
                    return {
                        width: n
                    }
                };

            function Oe(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.ynx(0), t.TgZ(1, "div", 1), t.NdJ("mousedown", function() {
                        t.CHM(e);
                        const r = t.oxw();
                        return t.KtG(r.startCompare())
                    })("touchstart", function() {
                        t.CHM(e);
                        const r = t.oxw();
                        return t.KtG(r.startCompare())
                    }), t._UZ(2, "CrownCrete-icon", 2)(3, "CrownCrete-icon", 3), t.qZA(), t.TgZ(4, "div", 4), t._UZ(5, "img", 5, 6), t.qZA(), t.TgZ(7, "div", 7)(8, "div", 8), t._uU(9), t.ALo(10, "flTranslate"), t.qZA(), t.TgZ(11, "div", 9), t._uU(12), t.ALo(13, "flTranslate"), t.qZA()(), t.BQk()
                }
                if(2 & n) {
                    const e = t.oxw();
                    t.xp6(1), t.Udp("left", e.left), t.xp6(3), t.Q6J("ngStyle", t.VKq(12, Te, e.width)), t.xp6(1), t.Q6J("src", e.image, t.LSH), t.xp6(2), t.Udp("left", e.width), t.xp6(2), t.hij(" ", t.lcZ(10, 8, "compare.before"), " "), t.xp6(3), t.hij(" ", t.lcZ(13, 10, "compare.after"), " ")
                }
            }
            var Pt = (() => {
                return (n = Pt || (Pt = {})).mousemove = "mousemove", n.touchmove = "touchmove", n.mouseup = "mouseup", Pt;
                var n
            })();
            let ft = (() => {
                class n extends q.YU {
                    constructor() {
                        super(...arguments), this.cdr = (0, t.f3M)(t.sBO), this.elRef = (0, t.f3M)(t.SBq), this.windowRef = (0, t.f3M)(Z.Kz), this.handlerWidth = 62, this.positionDebounce = new kt.x, this.positionDebounce$ = this.positionDebounce.asObservable(), this._compareStarted = !1, this._zoomed = !1, this.withLayout = !0
                    }
                    get zoomedCls() {
                        return this._zoomed
                    }
                    get fullscreen() {
                        return this.withLayout
                    }
                    set zoomed(e) {
                        e !== this._zoomed && (this._zoomed = !!e, this.setPosition(), this.cdr.markForCheck())
                    }
                    get parentWidth() {
                        return this.elRef.nativeElement?.clientWidth || 0
                    }
                    get offsetLeft() {
                        return this._zoomed ? ((this.canvas?.clientWidth || 0) - this.windowRef.innerWidth) / 2 : 0
                    }
                    ngOnInit() {
                        this.listenToCancel(), this.listenToMouseMove(), this.watchPosition()
                    }
                    ngOnDestroy() {
                        super.ngOnDestroy(), this.observer?.disconnect(), this.observer = void 0
                    }
                    get left() {
                        return void 0 === this._left ? "" : this._left - this.handlerWidth / 2 + "px"
                    }
                    get width() {
                        return void 0 === this._left ? "" : `${this._left}px`
                    }
                    startCompare() {
                        this._compareStarted = !0
                    }
                    watchPosition() {
                        !this.canvas || (this.observer = new ResizeObserver(() => {
                            this.setPosition(), this.cdr.markForCheck()
                        }), this.observer.observe(this.canvas), (0, w.R)(this.windowRef, "resize").pipe((0, P.R)(this.destroyed), (0, V.b)(10), (0, I.b)(() => this.setPosition())).subscribe())
                    }
                    setPosition() {
                        if(!this.canvas) return void console.log("no canvas");
                        const e = this.canvas.getBoundingClientRect();
                        this.elRef.nativeElement.setAttribute("style", `\n            left: ${e.left}px;\n            top: ${e.top}px;\n            right: ${e.right}px;\n            bottom: ${e.bottom}px;\n            width: ${e.width}px;\n            height: ${e.height}px;\n        `), this.imageEl?.nativeElement.setAttribute("style", `width: ${e.width}px`), this._left || (this._left = e.width / 2), this.cdr.markForCheck()
                    }
                    listenToMouseMove() {
                        (0, m.T)((0, w.R)(this.elRef.nativeElement, Pt.mousemove), (0, w.R)(this.elRef.nativeElement, Pt.touchmove)).pipe((0, P.R)(this.destroyed), (0, $.h)(() => this._compareStarted), (0, I.b)(e => {
                            switch(e.preventDefault(), e.type) {
                                case Pt.mousemove:
                                    this._left = this.calculatePosition(e.clientX - this.offsetLeft);
                                    break;
                                case Pt.touchmove:
                                    this._left = this.calculatePosition(e.touches?.[0].clientX - this.offsetLeft)
                            }
                            void 0 !== this._left && this._zoomed && (this._left += this.offsetLeft), this.cdr.markForCheck()
                        })).subscribe()
                    }
                    listenToCancel() {
                        (0, m.T)((0, w.R)(this.windowRef, Pt.mouseup), (0, w.R)(this.windowRef, "touchend")).pipe((0, P.R)(this.destroyed), (0, $.h)(() => this._compareStarted), (0, I.b)(() => this._compareStarted = !1)).subscribe()
                    }
                    calculatePosition(e) {
                        let o = e - this.elRef.nativeElement.offsetLeft;
                        return o = Math.max(o, 0), o = Math.min(o, this._zoomed ? this.windowRef.innerWidth : this.parentWidth), o
                    }
                }
                return n.\u0275fac = function() {
                    let l;
                    return function(o) {
                        return (l || (l = t.n5z(n)))(o || n)
                    }
                }(), n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-room-compare"]
                    ],
                    viewQuery: function(e, o) {
                        if(1 & e && t.Gf(Ce, 5, t.SBq), 2 & e) {
                            let r;
                            t.iGM(r = t.CRH()) && (o.imageEl = r.first)
                        }
                    },
                    hostAttrs: [1, "CrownCrete-room-compare"],
                    hostVars: 4,
                    hostBindings: function(e, o) {
                        2 & e && t.ekj("zoomed", o.zoomedCls)("fullscreen", o.fullscreen)
                    },
                    inputs: {
                        canvas: "canvas",
                        image: "image",
                        withLayout: "withLayout",
                        zoomed: "zoomed"
                    },
                    standalone: !0,
                    features: [t.qOj, t.jDz],
                    decls: 1,
                    vars: 1,
                    consts: [
                        [4, "ngIf"],
                        [1, "room-compare-handler", 3, "mousedown", "touchstart"],
                        ["name", "fl_chevron_left_s"],
                        ["name", "fl_chevron_right_s"],
                        [1, "room-compare-img-wrapper", 3, "ngStyle"],
                        ["alt", "compare picture", 1, "room-compare-result", 3, "src"],
                        ["imageEl", ""],
                        [1, "compare-labels-wrapper"],
                        ["id", "before", 1, "compare-label", "CrownCrete-caption"],
                        ["id", "after", 1, "compare-label", "CrownCrete-caption"]
                    ],
                    template: function(e, o) {
                        1 & e && t.YNc(0, Oe, 14, 14, "ng-container", 0), 2 & e && t.Q6J("ngIf", o.image)
                    },
                    dependencies: [u.ez, u.O5, u.PC, ht.K, at.N, rt.X],
                    styles: [".CrownCrete-room-compare{position:absolute;display:flex}.CrownCrete-room-compare:not(.fullscreen) .room-compare-handler{position:fixed}.CrownCrete-room-compare .room-compare-img-wrapper{position:absolute;width:50%;height:100%;overflow:hidden;border-right:2px solid var(--fl-fg)}.CrownCrete-room-compare .room-compare-img-wrapper img{height:100%;display:block;vertical-align:middle;pointer-events:none}.CrownCrete-room-compare .room-compare-handler{position:absolute;z-index:2;cursor:ew-resize;width:62px;height:46px;display:flex;justify-content:center;align-items:center;background-color:var(--fl-overlay);border-radius:1rem;top:0;bottom:0;margin:auto 0}.CrownCrete-room-compare .room-compare-handler CrownCrete-icon{color:var(--fl-bg)}.CrownCrete-room-compare .compare-labels-wrapper{position:absolute;bottom:0;padding-bottom:var(--fl-y-padding)}@media (min-width: 1024px){.CrownCrete-room-compare .compare-labels-wrapper{position:fixed}}@media (min-width: 1024px){.CrownCrete-room-compare:not(.zoomed) .compare-labels-wrapper{position:absolute}}.CrownCrete-room-compare .compare-label{position:absolute;bottom:var(--fl-y-padding);background-color:var(--fl-overlay);color:var(--fl-bg);border-radius:var(--fl-border-radius);padding:.25rem var(--fl-x-padding-xs)}.CrownCrete-room-compare .compare-label#before{right:20px}.CrownCrete-room-compare .compare-label#after{left:20px}\n"],
                    encapsulation: 2,
                    changeDetection: 0
                }), n
            })();
            const At = function(n, l) {
                return {
                    dimension1: n,
                    dimension2: l
                }
            };
            let se = (() => {
                class n {}
                return n.\u0275fac = function(e) {
                    return new(e || n)
                }, n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-zoom-tutorial"]
                    ],
                    hostAttrs: [1, "CrownCrete-zoom-tutorial"],
                    standalone: !0,
                    features: [t.jDz],
                    decls: 12,
                    vars: 11,
                    consts: [
                        [1, "tutorial-img"],
                        ["name", "fl_arrow_left_long_o", "id", "left-move"],
                        ["name", "fl_arrow_up_long_o", "id", "up-move"],
                        [1, "main-icon"],
                        ["name", "fl_hand_point_o"],
                        ["name", "fl_arrow_right_long_o", "id", "right-move"],
                        ["name", "fl_arrow_down_long_o", "id", "down-move"],
                        [1, "CrownCrete-caption", "tutorial-message"]
                    ],
                    template: function(e, o) {
                        1 & e && (t.TgZ(0, "div", 0), t._UZ(1, "CrownCrete-icon", 1)(2, "CrownCrete-icon", 2), t.TgZ(3, "div", 3), t._UZ(4, "CrownCrete-icon", 4), t.qZA(), t._UZ(5, "CrownCrete-icon", 5)(6, "CrownCrete-icon", 6), t.qZA(), t.TgZ(7, "p", 7), t._uU(8), t.ALo(9, "flTranslate"), t.ALo(10, "flTranslate"), t.ALo(11, "flTranslate"), t.qZA()), 2 & e && (t.xp6(8), t.hij(" ", t.xi3(9, 1, "room.moveTutorial", t.WLB(8, At, t.lcZ(10, 4, "room.up"), t.lcZ(11, 6, "room.down"))), "\n"))
                    },
                    dependencies: [ht.K, at.N, rt.X],
                    styles: [".CrownCrete-zoom-tutorial{border-radius:var(--fl-border-radius);background:var(--fl-overlay);padding:var(--fl-y-padding-md) var(--fl-x-padding-md);color:var(--fl-bg);display:flex;flex-direction:column;justify-content:center;align-items:center}.CrownCrete-zoom-tutorial #up-move,.CrownCrete-zoom-tutorial #down-move{display:none}.CrownCrete-zoom-tutorial .main-icon{width:2rem;height:2rem;margin:0 .25rem;position:relative}.CrownCrete-zoom-tutorial .main-icon CrownCrete-icon{position:absolute;animation:.5s infinite linear alternate moveHorizontal none}.CrownCrete-zoom-tutorial .tutorial-message{margin:var(--fl-x-padding) 0 0;text-align:center}.CrownCrete-zoom-tutorial .tutorial-img{display:flex}.CrownCrete-zoom-tutorial.vertical{flex-direction:row;align-items:center}.CrownCrete-zoom-tutorial.vertical #left-move,.CrownCrete-zoom-tutorial.vertical #right-move{display:none}.CrownCrete-zoom-tutorial.vertical #up-move,.CrownCrete-zoom-tutorial.vertical #down-move{display:initial}.CrownCrete-zoom-tutorial.vertical .main-icon{margin:.25rem 0;display:flex;justify-content:center}.CrownCrete-zoom-tutorial.vertical .main-icon CrownCrete-icon{animation:.5s infinite linear alternate moveVertical none}.CrownCrete-zoom-tutorial.vertical .tutorial-img{flex-direction:column;align-items:center}.CrownCrete-zoom-tutorial.vertical .tutorial-message{margin:0 0 0 var(--fl-x-padding)}@keyframes moveHorizontal{0%{left:0}to{left:10px}}@keyframes moveVertical{0%{top:0}to{top:10px}}\n"],
                    encapsulation: 2,
                    changeDetection: 0
                }), n
            })();
            const Pe = ["canvas3D"],
                re = ["hotpointsWrapper"];

            function ae(n, l) {
                if(1 & n && t._UZ(0, "CrownCrete-room-hotpoints", 9), 2 & n) {
                    const e = t.oxw(2);
                    t.Q6J("observed", e.canvasRef)
                }
            }

            function Ke(n, l) {
                if(1 & n && t._UZ(0, "CrownCrete-room-compare", 10), 2 & n) {
                    const e = t.oxw().ngrxLet,
                        o = t.MAs(2);
                    t.Q6J("zoomed", e.isZoomed)("canvas", o)("image", e.compareImage)
                }
            }

            function Wt(n, l) {
                if(1 & n && (t.TgZ(0, "div", 11), t._UZ(1, "div", 12), t.ALo(2, "flTranslate"), t.qZA()), 2 & n) {
                    const e = t.oxw().ngrxLet,
                        o = t.oxw();
                    t.xp6(1), t.Q6J("type", o.CrownCreteLoaderType.stars)("showProgress", e.loadingData.isUpload)("progressValue", e.loadingData.loadingValue)("label", e.loadingData.loadLabel ? t.lcZ(2, 4, e.loadingData.loadLabel) : "")
                }
            }

            function Le(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 13), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.zoomTutorialInteraction())
                    })("mousedown", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.zoomTutorialInteraction())
                    })("tap", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.zoomTutorialInteraction())
                    })("pan", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.zoomTutorialInteraction())
                    }), t._UZ(1, "CrownCrete-zoom-tutorial"), t.qZA()
                }
                if(2 & n) {
                    const e = t.oxw().ngrxLet;
                    t.xp6(1), t.ekj("vertical", e.isVerticalZoom)
                }
            }

            function Se(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.ynx(0), t.TgZ(1, "canvas", 1, 2), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw();
                        return t.KtG(r.canvasClick())
                    }), t.qZA(), t.TgZ(3, "div", 3, 4), t.YNc(5, ae, 1, 1, "CrownCrete-room-hotpoints", 5), t.qZA(), t.YNc(6, Ke, 1, 3, "CrownCrete-room-compare", 6), t.YNc(7, Wt, 3, 6, "div", 7), t.YNc(8, Le, 2, 2, "div", 8), t.BQk()
                }
                if(2 & n) {
                    const e = l.ngrxLet;
                    t.xp6(1), t.ekj("loaded", e.loadingData.initLoad)("zoomed", e.isZoomed), t.xp6(2), t.ekj("zoomed", e.isZoomed), t.xp6(2), t.Q6J("ngIf", e.canvasReady && e.showHotpoints && (null == e.viewerSettings ? null : e.viewerSettings.hotpointsOn)), t.xp6(1), t.Q6J("ngIf", !e.loading && e.canvasReady && e.showCompare), t.xp6(1), t.Q6J("ngIf", e.loading), t.xp6(1), t.Q6J("ngIf", !e.zoomTutorialSeen && e.isZoomed)
                }
            }
            const le = function(n, l, e, o, r, g, O, R, k, A, st) {
                return {
                    canvasReady: n,
                    showHotpoints: l,
                    isZoomed: e,
                    loading: o,
                    loadingData: r,
                    zoomTutorialSeen: g,
                    isVerticalZoom: O,
                    compareImage: R,
                    showCompare: k,
                    isLayoutOn: A,
                    viewerSettings: st
                }
            };
            let ce = (() => {
                class n extends q.YU {
                    constructor() {
                        super(...arguments), this.store = (0, t.f3M)(pt), this.cdr = (0, t.f3M)(t.sBO), this.loading$ = this.store.loading$, this.loadingData$ = this.store.loadingData$, this.canvasReady$ = this.store.canvasReady$, this.compareImage$ = this.store.compareImage$, this.showHotpoints$ = this.store.showHotpoints$, this.showCompare$ = this.store.showCompare$, this.isLayoutOn$ = this.store.isLayoutOn$, this.zoomTutorialSeen$ = this.store.zoomTutorialSeen$, this.isZoomed$ = this.store.isZoomed$, this.isVerticalZoom$ = this.store.isVerticalZoom$, this.viewerSettings$ = this.store.viewerSettings$, this.CrownCreteLoaderType = Xt.R
                    }
                    ngAfterViewInit() {
                        this.canvasRef && this.store.init("", this.canvasRef, this.hotpointsPlane), this.cdr.markForCheck()
                    }
                    ngOnDestroy() {
                        super.ngOnDestroy()
                    }
                    canvasClick() {
                        this.store.toggleHotpointsVisibility()
                    }
                    zoomTutorialInteraction() {
                        this.store.setZoomTutorial()
                    }
                }
                return n.\u0275fac = function() {
                    let l;
                    return function(o) {
                        return (l || (l = t.n5z(n)))(o || n)
                    }
                }(), n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-room-viewer"]
                    ],
                    viewQuery: function(e, o) {
                        if(1 & e && (t.Gf(Pe, 5), t.Gf(re, 5)), 2 & e) {
                            let r;
                            t.iGM(r = t.CRH()) && (o.canvasRef = r.first), t.iGM(r = t.CRH()) && (o.hotpointsPlane = r.first)
                        }
                    },
                    hostAttrs: [1, "CrownCrete-room-viewer"],
                    standalone: !0,
                    features: [t._Bn([(0, f.E6)(pt), N.J.registerProviders({
                        provide: Kt.w3,
                        useFactory: l => l,
                        deps: [
                            [new t.FiY, Kt.G_]
                        ]
                    })]), t.qOj, t.jDz],
                    decls: 1,
                    vars: 13,
                    consts: [
                        [4, "ngrxLet"],
                        [3, "click"],
                        ["canvas3D", ""],
                        [1, "hotpoints-wrapper"],
                        ["hotpointsWrapper", ""],
                        [3, "observed", 4, "ngIf"],
                        [3, "zoomed", "canvas", "image", 4, "ngIf"],
                        ["class", "loader-wrapper", 4, "ngIf"],
                        ["class", "zoom-tutorial", 3, "click", "mousedown", "tap", "pan", 4, "ngIf"],
                        [3, "observed"],
                        [3, "zoomed", "canvas", "image"],
                        [1, "loader-wrapper"],
                        ["CrownCrete-loader", "", 1, "CrownCrete-ai-loader", 3, "type", "showProgress", "progressValue", "label"],
                        [1, "zoom-tutorial", 3, "click", "mousedown", "tap", "pan"]
                    ],
                    template: function(e, o) {
                        1 & e && t.YNc(0, Se, 9, 10, "ng-container", 0), 2 & e && t.Q6J("ngrxLet", t.rFY(1, le, [o.canvasReady$, o.showHotpoints$, o.isZoomed$, o.loading$, o.loadingData$, o.zoomTutorialSeen$, o.isVerticalZoom$, o.compareImage$, o.showCompare$, o.isLayoutOn$, o.viewerSettings$]))
                    },
                    dependencies: [u.ez, u.O5, Ft, Xt.g, J.QS, d._N, d.eJ, se, ft, at.N, rt.X],
                    styles: [".CrownCrete-room-viewer{display:flex;position:relative;justify-content:center;align-items:center}.CrownCrete-room-viewer canvas.zoomed{cursor:move;cursor:grab}.CrownCrete-room-viewer canvas.zoomed:active{cursor:grabbing}.CrownCrete-room-viewer #zoom-btn{position:fixed;left:16px;bottom:45%;z-index:11}.CrownCrete-room-viewer .hotpoints-wrapper{position:absolute;pointer-events:none}.CrownCrete-room-viewer .download{position:absolute;top:25px;left:25px}.CrownCrete-room-viewer .loader-wrapper{display:flex;justify-content:center;align-items:center;position:absolute;background-color:#0009;border-radius:12px;width:220px;height:220px}.CrownCrete-room-viewer .zoom-tutorial{position:absolute;inset:0;display:flex;justify-content:center;align-items:center}.CrownCrete-room-viewer .zoom-tutorial .CrownCrete-zoom-tutorial{max-width:246px}.CrownCrete-room-viewer .CrownCrete-ai-loader{color:#fafafa}.CrownCrete-room-viewer canvas,.CrownCrete-room-viewer .hotpoints-wrapper{animation:1.5s ease 0s normal forwards 1 gentleShow;opacity:0}.CrownCrete-room-viewer canvas.loaded,.CrownCrete-room-viewer .hotpoints-wrapper.loaded{opacity:1}@keyframes gentleShow{0%{opacity:0}90%{opacity:0}to{opacity:1}}\n"],
                    encapsulation: 2,
                    changeDetection: 0
                }), n
            })();
            var gt = c(5924),
                _t = c(7759),
                te = c(1378),
                Nt = c(1640),
                Xe = c(5713),
                ue = c(1511),
                $t = c(894),
                de = c(7260),
                Be = c(6317),
                zt = c(591),
                Me = c(5596),
                Jt = c(7810),
                he = c(9904),
                Ee = c(2508),
                ee = c(2960),
                xt = c(7258);

            function ke(n, l) {
                if(1 & n && (t.TgZ(0, "p", 10), t._uU(1), t.qZA()), 2 & n) {
                    const e = t.oxw().$implicit,
                        o = t.oxw();
                    t.xp6(1), t.hij(" ", o.getRugPrice(e), " ")
                }
            }

            function Ae(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 7), t.NdJ("click", function() {
                        const g = t.CHM(e).$implicit,
                            O = t.oxw();
                        return t.KtG(O.selectSize(g))
                    }), t.TgZ(1, "p", 8), t._uU(2), t.ALo(3, "sizeMapping"), t.qZA(), t.YNc(4, ke, 2, 1, "p", 9), t.qZA()
                }
                if(2 & n) {
                    const e = l.$implicit,
                        o = t.oxw();
                    t.ekj("selected", e.id === (null == o.selectedSize ? null : o.selectedSize.id)), t.xp6(2), t.hij(" ", t.lcZ(3, 4, e), " "), t.xp6(2), t.Q6J("ngIf", o.showRugPrice(e))
                }
            }
            let De = (() => {
                class n {
                    constructor(e) {
                        this.sizes = [], this.trackBySize = (o, r) => r, this.sizes = [...e?.sizes], this.selectedSize = e?.selectedSize
                    }
                    showRugPrice(e) {
                        const o = e?.prices.find(r => r.isDefault);
                        return !!e?.prices?.length && !!o?.currency
                    }
                    getRugPrice(e) {
                        if(!e || !e.prices) return "";
                        const o = e.prices.find(r => r.isDefault);
                        return `${o?.price??e.prices?.[0].price} ${o?.currency??e.prices?.[0].currency}`
                    }
                    selectSize(e) {
                        this.selectedSize = e
                    }
                }
                return n.\u0275fac = function(e) {
                    return new(e || n)(t.Y36(p.wM))
                }, n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-sizes-dialog"]
                    ],
                    hostAttrs: [1, "CrownCrete-sizes-dialog"],
                    standalone: !0,
                    features: [t.jDz],
                    decls: 14,
                    vars: 12,
                    consts: [
                        [1, "CrownCrete-dialog-header"],
                        ["CrownCrete-dialog-content", ""],
                        [1, "sizes-grid"],
                        ["CrownCrete-button", "", "class", "outline reverse small size-button", 3, "selected", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"],
                        ["CrownCrete-dialog-actions", ""],
                        ["CrownCrete-button", "", "CrownCrete-dialog-close", "", 1, "CrownCrete-button", "outline", "reverse", "big", "close-btn"],
                        [1, "CrownCrete-button", "primary", "big", 3, "CrownCrete-dialog-close"],
                        ["CrownCrete-button", "", 1, "outline", "reverse", "small", "size-button", 3, "click"],
                        [1, "size-label"],
                        ["class", "size-price", 4, "ngIf"],
                        [1, "size-price"]
                    ],
                    template: function(e, o) {
                        1 & e && (t.TgZ(0, "div", 0)(1, "span"), t._uU(2), t.ALo(3, "flTranslate"), t.qZA()(), t.TgZ(4, "section", 1)(5, "div", 2), t.YNc(6, Ae, 5, 6, "button", 3), t.qZA()(), t.TgZ(7, "div", 4)(8, "button", 5), t._uU(9), t.ALo(10, "flTranslate"), t.qZA(), t.TgZ(11, "button", 6), t._uU(12), t.ALo(13, "flTranslate"), t.qZA()()), 2 & e && (t.xp6(2), t.Oqu(t.lcZ(3, 6, "chooseRugSize")), t.xp6(4), t.Q6J("ngForOf", o.sizes)("ngForTrackBy", o.trackBySize), t.xp6(3), t.hij(" ", t.lcZ(10, 8, "close"), " "), t.xp6(2), t.Q6J("CrownCrete-dialog-close", o.selectedSize), t.xp6(1), t.hij(" ", t.lcZ(13, 10, "choose"), " "))
                    },
                    dependencies: [u.ez, u.sg, u.O5, at.N, rt.X, gt.wC, xt.VA, xt.BK, xt.hE, he.Iu, _t.c, Ee.u5, ee.vO],
                    styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1;margin:auto;max-height:60vh;width:80vw;background-color:var(--fl-bg);border-radius:var(--fl-border-radius)}[_nghost-%COMP%]   .CrownCrete-dialog-header[_ngcontent-%COMP%]{justify-content:center;padding:var(--fl-y-padding-md) 0;border-bottom:0}[_nghost-%COMP%]   .CrownCrete-dialog-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;font-size:1rem;line-height:1.25rem;color:var(--fl-fg)}[_nghost-%COMP%]   .CrownCrete-dialog-content[_ngcontent-%COMP%]{margin:0 var(--fl-x-padding-md) var(--fl-x-padding-s);padding:0;overflow-y:scroll}[_nghost-%COMP%]   .CrownCrete-dialog-content[_ngcontent-%COMP%]   .sizes-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:var(--fl-x-padding-s)}@media only screen and (min-width: 500px){[_nghost-%COMP%]   .CrownCrete-dialog-content[_ngcontent-%COMP%]   .sizes-grid[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}[_nghost-%COMP%]   .CrownCrete-dialog-content[_ngcontent-%COMP%]   .sizes-grid[_ngcontent-%COMP%]   .size-button[_ngcontent-%COMP%]{height:3rem}[_nghost-%COMP%]   .CrownCrete-dialog-content[_ngcontent-%COMP%]   .sizes-grid[_ngcontent-%COMP%]   .size-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   .CrownCrete-dialog-content[_ngcontent-%COMP%]   .sizes-grid[_ngcontent-%COMP%]   .size-button[_ngcontent-%COMP%]   .size-label[_ngcontent-%COMP%]{font-weight:500;font-size:.75rem;line-height:1rem;color:var(--fl-fg)}[_nghost-%COMP%]   .CrownCrete-dialog-content[_ngcontent-%COMP%]   .sizes-grid[_ngcontent-%COMP%]   .size-button[_ngcontent-%COMP%]   .size-price[_ngcontent-%COMP%]{font-weight:700;font-size:.625rem;line-height:.75rem;color:var(--fl-fg700)}[_nghost-%COMP%]   .CrownCrete-dialog-content[_ngcontent-%COMP%]   .sizes-grid[_ngcontent-%COMP%]   .size-button.selected[_ngcontent-%COMP%]{border-color:var(--fl-primary)}[_nghost-%COMP%]   .CrownCrete-dialog-actions[_ngcontent-%COMP%]{margin:0 var(--fl-x-padding-md) var(--fl-y-padding-md);padding:0;display:flex;justify-content:center}[_nghost-%COMP%]   .CrownCrete-dialog-actions[_ngcontent-%COMP%]   .CrownCrete-button[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   .CrownCrete-dialog-actions[_ngcontent-%COMP%]   .CrownCrete-button.close-btn[_ngcontent-%COMP%]{margin-right:var(--fl-x-padding-s)}"],
                    changeDetection: 0
                }), n
            })();
            var pe = c(5325),
                Qt = (() => {
                    return (n = Qt || (Qt = {}))[n.initial = 1] = "initial", n[n.semi = 2] = "semi", n[n.free = 3] = "free", n[n.full = 4] = "full", Qt;
                    var n
                })();
            const fe = [p.qC.settings, p.qC.downloadScreen, p.qC.share, p.qC.help],
                He = [p.qC.settings, L.aE.calculator, L.aE.quote],
                Re = [p.qC.favourite, p.qC.settings, L.aE.addToCart],
                Ze = [L.aE.addToCart],
                Fe = {
                    activeRoomId: "",
                    showAr: !0,
                    loadingAll: !0,
                    photoOrientation: L.JU.horizontal,
                    panelPosition: Qt.initial,
                    simpleActionTypes: [p.qC.downloadScreen, p.Lr.share, p.qC.help],
                    firstButtonSection: [new p.eP(p.qC.catalog, "catalog-btn"), new p.eP(p.qC.settings, "settings-btn", {
                        visibility: !1
                    }), new p.eP(p.qC.downloadScreen, "download-screen-btn", {}), new p.eP(p.qC.favourite, "fav-btn"), new p.eP(p.qC.share, "share-btn", {}, !0)],
                    secondButtonSection: [new p.eP(L.aE.addToCart, "add-to-cart-btn", {
                        visibility: !1
                    }), new p.eP(L.aE.calculator, "calculator-btn", {
                        visibility: !0,
                        ownDialog: !0
                    }, !0), new p.eP(L.aE.devtools, "devtools-btn", {
                        visibility: !1
                    }), new p.eP(p.Lr.help, "help-btn", {
                        ownDialog: !0
                    })]
                };
            var ie = c(9403),
                Ve = c(510);
            let ct = (() => {
                class n {}
                return n.\u0275fac = function(e) {
                    return new(e || n)
                }, n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-calculator-dialog"]
                    ],
                    hostAttrs: [1, "CrownCrete-calculator-dialog"],
                    standalone: !0,
                    features: [t.jDz],
                    decls: 6,
                    vars: 3,
                    consts: [
                        ["CrownCrete-dialog-header", ""],
                        ["CrownCrete-dialog-content", ""]
                    ],
                    template: function(e, o) {
                        1 & e && (t.TgZ(0, "div", 0), t.ynx(1), t._uU(2), t.ALo(3, "flTranslate"), t.BQk(), t.qZA(), t.TgZ(4, "section", 1), t._UZ(5, "CrownCrete-calculator"), t.qZA()), 2 & e && (t.xp6(2), t.hij(" ", t.lcZ(3, 1, "calculator.title"), " "))
                    },
                    dependencies: [at.N, rt.X, ie.A, gt.wC, xt.hE, Ve.C],
                    styles: [".CrownCrete-calculator-dialog{display:flex;flex-direction:column;height:100%;background-color:var(--fl-bg);border-radius:var(--fl-border-radius);min-width:374px}@media (min-width: 768px){.CrownCrete-calculator-dialog{max-height:700px;max-width:540px;flex:0}}\n"],
                    encapsulation: 2,
                    changeDetection: 0
                }), n
            })();
            const Ue = {
                    [p.VX.settings]: (...n) => ((n, l, e, o) => {
                        n.close && l?.type ? (p.Lr.settings === l.type || p.Lr.addToCart === l.type) && e(p.Lr.catalog, o) : e(p.Lr.settings, o)
                    })(...n),
                    [p.VX.catalog]: (...n) => ((n, l, e, o) => {
                        e(p.Lr.catalog, o)
                    })(...n)
                },
                T = {
                    [p.Lr.quote]: Jt.c,
                    [p.Lr.calculator]: ct
                },
                lt = {
                    [p.Lr.addToCart]: {
                        label: "room.selectedProducts.tooltipLabel",
                        position: L.AR.below
                    },
                    [p.Lr.calculator]: void 0,
                    [p.Lr.custom]: void 0,
                    [p.Lr.quote]: void 0,
                    [p.Lr.catalog]: void 0,
                    [p.Lr.downloadScreen]: void 0,
                    [p.Lr.favourite]: void 0,
                    [p.Lr.settings]: void 0,
                    [p.Lr.share]: void 0,
                    [p.Lr.help]: void 0,
                    [p.Lr.loading]: void 0,
                    [p.Lr.devtools]: void 0,
                    [p.Lr.sample]: void 0
                };
            var ge = c(3644);
            let Bt = (() => {
                    class n extends f.m1 {
                        constructor(e, o, r, g, O, R, k, A, st) {
                            super({
                                ...structuredClone(Fe)
                            }), this.route = e, this.device = o, this.configProvider = r, this.eventsProvider = g, this.roomsProvider = O, this.productsProvider = R, this.navigation = k, this.dialog = A, this.windowRef = st, this.visibleButtonsOnProduct = [...He], this.visibleButtonsOnDynamicProduct = [...fe], this.hiddenOnEpoxy = [...Re], this.excludedVisibilityButtons = [...Ze], this.navigator = (0, t.f3M)(p.YD), this.simpleActionsMap = {
                                [p.Lr.downloadScreen]: G => new p.Cd(G?.product?.name?.default || G?.product?.sku),
                                [p.Lr.share]: () => new p.iq,
                                [p.Lr.help]: () => new p.Mv
                            }, this.injector = (0, t.f3M)(t.lqb), this.activeProduct$ = this.select(G => G.activeProduct), this.selectedSize$ = this.productsProvider.transformations$.pipe((0, S.U)(G => G.options)), this.animatedButtons = [p.Lr.settings], this.customButtons$ = this.select(G => G.customButtons), this.barButtons$ = this.select(G => ({
                                activeBtn: G.activeActionBtn,
                                firstButtonSection: G.firstButtonSection?.filter(et => !this.navigation.dynamicProductParams() || fe.includes(et.type)),
                                secondButtonSection: G.secondButtonSection,
                                activeProduct: G.activeProduct,
                                customButton: G.customButtons?.find(et => et.type === p.Lr.custom),
                                quoteButton: G.customButtons?.find(et => et.type === p.Lr.quote),
                                ctaCount: this.visibleCtaCount(),
                                sampleButton: G.customButtons?.find(et => et.type === L.aE.sample)
                            })), this.activeActionType$ = this.select(G => G.activeActionBtn), this.loadingAll$ = this.select(G => G.loadingAll).pipe((0, H.x)((G, et) => G === et)), this.isMobileLandscape$ = this.select(G => G.isMobileLandscape), this.isLandscape$ = this.select(G => G.isLandscape), this.trackingObject$ = this.select(G => ({
                                product_name: G.activeProduct?.name || "",
                                room_name: G.activeRoom?.name,
                                sku: G.activeProduct?.sku || ""
                            })), this.disclaimer$ = this.configProvider.companyConfig$?.pipe((0, S.U)(G => G.company?.disclaimer)), this.tooltipData$ = this.activeActionType$.pipe((0, $.h)(G => !!G), (0, S.U)(G => lt[G.type])), this.takeAction = this.effect(G => G.pipe((0, I.b)(et => {
                                const {
                                    activeActionBtn: Et,
                                    simpleActionTypes: Zt
                                } = this.get();
                                if(this.navigation.dynamicProductParams() && !this.visibleButtonsOnDynamicProduct.includes(et.actionBtn?.type)) return;
                                if(Zt.includes(et.actionBtn?.type)) {
                                    const ci = this.simpleActionsMap[et.actionBtn.type];
                                    return void(ci && this.eventsProvider.send(ci({
                                        product: this.get()?.activeProduct
                                    })))
                                }
                                et.actionBtn.afterAnimation = !0;
                                const li = Et?.type === et.actionBtn?.type;
                                et?.actionBtn?.mobileAction || this.patchState({
                                    activeActionBtn: li ? void 0 : et.actionBtn
                                }), et?.actionBtn?.metadata?.ownDialog ? this.handleOwnDialog(et) : et?.useDialog && this.handleActionContainerDialog(et, li)
                            }))), this.loadData(), this.checkFeatures()
                        }
                        get customButton() {
                            return this.get().customButtons?.find(e => e.type === p.Lr.custom)
                        }
                        get room() {
                            return this.get().activeRoom
                        }
                        get activeBtn() {
                            return this.get().activeActionBtn
                        }
                        ngOnDestroy() {
                            super.ngOnDestroy(), this.productsProvider.setActiveProduct(void 0, !0), this.productsProvider.clearBreadcrumb()
                        }
                        watchFocus() {
                            (0, w.R)(this.windowRef, "click").pipe((0, P.R)(this.destroy$), (0, de.T)(1), (0, F.q)(1), (0, I.b)(() => this.roomsProvider.setZoomTutorial())).subscribe()
                        }
                        handleOrientationChange() {
                            this.patchState({
                                isMobileLandscape: this.device.isMobileLandscape,
                                isLandscape: this.device.isLandscape
                            })
                        }
                        closeActionContainer() {
                            const {
                                actionDialogRef: e,
                                actionDialogSubject: o
                            } = this.get();
                            o?.complete(), e?.close(), this.patchState({
                                activeActionBtn: void 0,
                                actionDialogRef: void 0,
                                actionDialogSubject: void 0
                            })
                        }
                        showSideMenu() {
                            this.dialog.open(qo, {
                                backdropClass: Z.bj.darkOverlay,
                                panelClass: Z.bj.sidePanel,
                                data: {
                                    buttons: this.get().secondButtonSection?.filter(e => e.visible),
                                    actionCall: e => this.takeAction({
                                        actionBtn: e
                                    })
                                }
                            })
                        }
                        useDialogResolve() {
                            return !(this.device.isMobile && !this.device.isTablet) && this.device.orientation === L.i5.landscape
                        }
                        clear() {
                            const e = this.get().activeProduct;
                            this.productsProvider.clearProduct(e), this.eventsProvider.send(new p.Q5(!0))
                        }
                        customBtnClick(e) {
                            if(e?.type === p.Lr.quote) return void this.openQuote(e);
                            const o = e?.metadata?.url;
                            !o || this.navigation.goToUrl(o)
                        }
                        openSampleUrl(e) {
                            e && this.navigator.goToUrl(e)
                        }
                        openSizesDialog() {
                            const {
                                activeProduct: e,
                                tileOptions: o
                            } = this.get();
                            this.dialog.open(De, {
                                backdropClass: Z.bj.darkOverlay,
                                panelClass: Z.bj.centerOverlay,
                                containerClass: Z.bj.stretchWrapper,
                                data: {
                                    sizes: e?.tileOptions || [],
                                    selectedSize: o
                                }
                            }).beforeClosed().pipe((0, $.h)(r => !!r), (0, I.b)(r => this.productsProvider.updateSize(r))).subscribe()
                        }
                        resolveVisibilityByProduct(e, o) {
                            if(this.excludedVisibilityButtons.includes(e.type)) return e.type === p.Lr.addToCart && (e.visible = !1), e;
                            if(this.get().config?.epoxyView && this.hiddenOnEpoxy.includes(e.type)) return e;
                            let r = this.visibleButtonsOnProduct.includes(e.type) ? !!o : e.visible;
                            const {
                                activeProduct: g
                            } = this.get();
                            return e.type === p.Lr.settings && (g?.type === L.kv.rug || g?.type === L.kv.paint) && (r = !1), e.type === p.Lr.calculator && (r = this.calculatorButtonVisibilityCheck()), e.visible = r, e.visible || (e.afterAnimation = !1), e
                        }
                        handleButtonVisibility() {
                            this.productsProvider.activeProduct$.pipe((0, P.R)(this.destroy$), (0, $.h)(() => !this.get().loadingAll), (0, z.M)(this.productsProvider.transformations$), (0, S.U)(([e, o]) => (this.patchState({
                                activeProduct: e || null,
                                tileOptions: o?.options
                            }), !!e)), (0, H.x)(), (0, I.b)(e => this.validateButtonsVisibility(e, o => this.resolveVisibilityByProduct(o, e)))).subscribe()
                        }
                        validateButtonsVisibility(e, o) {
                            const {
                                firstButtonSection: r,
                                secondButtonSection: g
                            } = this.get(), O = r.map(k => o(k, e)), R = g.map(k => o(k, e));
                            this.patchState({
                                firstButtonSection: O,
                                secondButtonSection: R
                            })
                        }
                        fetchCtaButtons() {
                            return this.roomsProvider.selectCtaButtons$.pipe((0, mt.P)(e => !!e?.length), (0, S.U)(e => structuredClone(e)), (0, S.U)(e => {
                                const o = (e || []).reduce((k, A) => ({
                                        ...k,
                                        [A.type]: A
                                    }), {}),
                                    {
                                        firstButtonSection: r,
                                        secondButtonSection: g
                                    } = this.get();
                                let O = r,
                                    R = g;
                                return [...O, ...R].forEach(k => {
                                    o[k.type] && (k.visible = o[k.type].visible, k.metadata = {
                                        ...o[k.type]?.metadata,
                                        ...k.metadata
                                    }, o[k.type].metadata = structuredClone(k.metadata || {})), k.type === p.Lr.share && (k.visible = this.device.isMobile)
                                }), this.get().config?.epoxyView && (O = O.filter(k => !this.hiddenOnEpoxy.includes(k.type)), R = R.filter(k => !this.hiddenOnEpoxy.includes(k.type))), this.patchState({
                                    customButtons: e,
                                    firstButtonSection: [...O],
                                    secondButtonSection: [...R]
                                }), Object.values(o)
                            }))
                        }
                        navigateToDefault() {
                            this.navigation.goToRooms()
                        }
                        handleActionContainerDialog(e, o) {
                            const {
                                actionDialogRef: r,
                                actionDialogSubject: g
                            } = this.get();
                            if(o) return g?.complete(), r?.close(), void this.patchState({
                                actionDialogRef: void 0,
                                actionDialogSubject: void 0
                            });
                            if(r) return void g?.next(e.actionBtn);
                            const O = new Be.X(e.actionBtn),
                                R = this.dialog.open(yi, {
                                    data: {
                                        viewType$: O?.asObservable()
                                    },
                                    containerClass: Z.bj.stretchWrapper,
                                    panelClass: [Z.bj.fullOverlay, Z.bj.noClick],
                                    hasBackdrop: !1,
                                    connectedPosition: {
                                        originX: "start",
                                        originY: "center",
                                        overlayX: "start",
                                        overlayY: "center",
                                        offsetX: -72,
                                        offsetY: 16
                                    },
                                    positionRef: new t.SBq(e.positionRef),
                                    disableClose: !0
                                });
                            R.afterClosed().pipe((0, I.b)(() => {
                                this.patchState({
                                    activeActionBtn: void 0,
                                    actionDialogRef: void 0
                                })
                            })).subscribe(), this.patchState({
                                actionDialogRef: R,
                                actionDialogSubject: O
                            })
                        }
                        loadData() {
                            this.handleButtonVisibility(), this.watchHotpoints(), this.watchConfig(), this.roomsProvider.loadingRooms$.pipe((0, P.R)(this.destroy$), (0, mt.P)(e => !e), (0, M.w)(() => this.watchConfig()), (0, M.w)(() => this.roomsProvider.activeRoom$), (0, mt.P)(e => !!e), (0, M.w)(e => e ? (this.patchState({
                                activeRoom: e,
                                activeRoomId: e.id
                            }), (0, Nt.D)([this.fetchCtaButtons()])) : (this.navigateToDefault(), zt.E)), (0, I.b)(() => {
                                this.patchState({
                                    loadingAll: !1
                                }), this.connectToQueryParams()
                            })).subscribe(), this.roomsProvider.loadRooms()
                        }
                        connectToQueryParams() {
                            this.route.queryParamMap.pipe((0, de.T)(1), (0, M.w)(e => (0, Nt.D)([(0, B.of)(e.get("product")), this.productsProvider.activeProduct$.pipe((0, F.q)(1), (0, S.U)(o => o?.id))])), (0, M.w)(([e, o]) => e && e !== o ? this.productsProvider.fetchProduct(e) : zt.E), (0, $.h)(e => !!e), (0, I.b)(e => {
                                const o = e.generateTileOptions();
                                this.productsProvider.setActiveProduct(o, !0)
                            })).subscribe()
                        }
                        watchHotpoints() {
                            this.productsProvider.hotpointProductMap$.pipe((0, P.R)(this.destroy$), (0, z.M)(this.productsProvider.activeProduct$, this.productsProvider.transformations$), (0, I.b)(([, e, o]) => {
                                this.patchState({
                                    activeProduct: e || null,
                                    tileOptions: o?.options ? structuredClone(o?.options) : void 0
                                })
                            }), (0, x.g)(50), (0, I.b)(([e, o]) => {
                                this.handleSettingsViewVisibility(e, !!o), this.handleCartViewVisibility(e), this.handleDevtoolsVisibility()
                            })).subscribe()
                        }
                        handleSettingsViewVisibility(e, o) {
                            const r = Object.values(e || {}).filter(k => k.selected),
                                g = this.get().firstButtonSection?.[0],
                                O = r.some(k => k.product) || o;
                            if(!r.length || O || !g) return void(O && this.validateButtonsVisibility(!0, (k, A) => this.resolveVisibilityByProduct(k, A)));
                            const R = this.get().activeActionBtn?.type === p.Lr.settings;
                            this.useDialogResolve() && R && this.handleActionContainerDialog({
                                actionBtn: g,
                                useDialog: this.useDialogResolve()
                            }, !1), this.validateButtonsVisibility(!1, (k, A) => this.resolveVisibilityByProduct(k, A)), R && this.patchState({
                                activeActionBtn: g
                            })
                        }
                        handleCartViewVisibility(e) {
                            const o = !!Object.values(e || {}).filter(r => r.product).length;
                            this.validateButtonsVisibility(!1, r => {
                                if(r.type === L.aE.addToCart) {
                                    const g = (R, k) => k.every(A => R.includes(A)),
                                        O = this.get().config?.supportedProductTypes || [];
                                    r.visible = o && g(O, [L.Pp.floors]) && g(O, [L.Pp.walls])
                                }
                                return r
                            })
                        }
                        handleDevtoolsVisibility() {
                            this.validateButtonsVisibility(!1, e => (e.type === p.Lr.devtools && (e.visible = !pe.N.production), e))
                        }
                        handleOwnDialog(e) {
                            this.injector.runInContext(() => {
                                ((n, l) => {
                                    if(!n) return zt.E;
                                    const e = T[n?.type];
                                    return e ? (0, t.f3M)(p._R).open(e, {
                                        backdropClass: Z.bj.darkOverlay,
                                        panelClass: Z.bj.centerOverlay,
                                        containerClass: Z.bj.stretchWrapper,
                                        data: {
                                            metadata: n.metadata,
                                            actionButtons: l
                                        }
                                    }).afterOpened() : zt.E
                                })(e.actionBtn, this.get().secondButtonSection).subscribe()
                            })
                        }
                        calculatorButtonVisibilityCheck() {
                            const {
                                activeProduct: e,
                                tileOptions: o,
                                customButtons: r
                            } = this.get();
                            return !!e && !!o?.prices?.length && !!r?.find(g => g.type === p.Lr.calculator)?.visible
                        }
                        checkFeatures() {
                            this.injector.runInContext(() => {
                                (0, Me.H)("roomMessage", p.dR.roomFeatureInfo).pipe((0, P.R)(this.destroy$)).subscribe()
                            })
                        }
                        watchConfig() {
                            return this.configProvider.companyConfig$.pipe((0, $.h)(e => !!e), (0, F.q)(1), (0, S.U)(e => this.patchState({
                                config: e?.company
                            })))
                        }
                        visibleCtaCount() {
                            const e = this.get().customButtons?.filter(g => [L.aE.custom, L.aE.quote, L.aE.sample].includes(g.type)).filter(g => g.visible) || [];
                            let o = 0;
                            const r = this.get().activeProduct;
                            return (e.some(g => g.type === p.Lr.quote) && !r || e.some(g => g.type === p.Lr.sample) && !r?.orderSampleUrl) && (o -= 1), e.length + o || 0
                        }
                        openQuote(e) {
                            !e || this.dialog.open(Jt.c, {
                                backdropClass: Z.bj.darkOverlay,
                                panelClass: Z.bj.centerOverlay,
                                containerClass: Z.bj.stretchWrapper,
                                data: {
                                    metadata: e?.metadata
                                }
                            })
                        }
                    }
                    return n.\u0275fac = function(e) {
                        return new(e || n)(t.LFG(ge.gz), t.LFG(J.U8), t.LFG(p.FI), t.LFG(Ct.QT), t.LFG(p.XZ), t.LFG(p.IA), t.LFG(p.YD), t.LFG(p._R), t.LFG(Z.Kz))
                    }, n.\u0275prov = t.Yz7({
                        token: n,
                        factory: n.\u0275fac
                    }), n
                })(),
                St = (() => {
                    class n {
                        constructor() {
                            this.deviceService = (0, t.f3M)(J.U8), this.productProvider = (0, t.f3M)(p.IA)
                        }
                        transform(e) {
                            if(!e.visible) return (0, B.of)(!1);
                            const o = !(!this.deviceService.isMobile && !this.deviceService.isTablet && e.mobileAction);
                            return e.type === p.Lr.quote ? this.productProvider.activeProduct$.pipe((0, S.U)(r => !!r && o)) : (0, B.of)(o)
                        }
                    }
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275pipe = t.Yjl({
                        name: "buttonVisibility",
                        type: n,
                        pure: !1,
                        standalone: !0
                    }), n
                })(),
                Yt = (() => {
                    class n {
                        constructor() {
                            this.data = (0, t.f3M)(p.wM)
                        }
                        get label() {
                            return this.data.label
                        }
                        get width() {
                            return this.data.width
                        }
                        get isAbovePosition() {
                            return this.data.direction === L.AR.above
                        }
                        get isAboveLeftPosition() {
                            return this.data.direction === L.AR.aboveLeft
                        }
                        get isAboveRightPosition() {
                            return this.data.direction === L.AR.aboveRight
                        }
                        get isBelowPosition() {
                            return this.data.direction === L.AR.below
                        }
                        get isBelowLeftPosition() {
                            return this.data.direction === L.AR.belowLeft
                        }
                        get isBelowRightPosition() {
                            return this.data.direction === L.AR.belowRight
                        }
                        get isLeftPosition() {
                            return this.data.direction === L.AR.left
                        }
                        get isRightPosition() {
                            return this.data.direction === L.AR.right
                        }
                    }
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275cmp = t.Xpm({
                        type: n,
                        selectors: [
                            ["CrownCrete-tooltip"]
                        ],
                        hostAttrs: [1, "CrownCrete-tooltip"],
                        hostVars: 18,
                        hostBindings: function(e, o) {
                            2 & e && (t.Udp("width", o.width, "px"), t.ekj("above", o.isAbovePosition)("aboveLeft", o.isAboveLeftPosition)("aboveRight", o.isAboveRightPosition)("below", o.isBelowPosition)("belowLeft", o.isBelowLeftPosition)("belowRight", o.isBelowRightPosition)("left", o.isLeftPosition)("right", o.isRightPosition))
                        },
                        standalone: !0,
                        features: [t.jDz],
                        decls: 3,
                        vars: 3,
                        template: function(e, o) {
                            1 & e && (t.TgZ(0, "span"), t._uU(1), t.ALo(2, "flTranslate"), t.qZA()), 2 & e && (t.xp6(1), t.Oqu(t.lcZ(2, 1, o.label)))
                        },
                        dependencies: [u.ez, at.N, rt.X],
                        styles: ['[_nghost-%COMP%]{position:absolute;border-radius:.25rem;background-color:var(--fl-overlay);padding:.5rem;color:#fff;z-index:1001;text-align:center;font-weight:600;font-size:.625rem;line-height:.75rem}[_nghost-%COMP%]:after{width:0;height:0;content:"";position:absolute;border-left:.5rem solid transparent;border-right:.5rem solid transparent;border-bottom:.5rem solid var(--fl-overlay)}.below[_nghost-%COMP%]{top:2.5rem}.below[_nghost-%COMP%]:after{top:-.5rem;right:calc(50% - .5rem);transform:rotate(0)}.belowLeft[_nghost-%COMP%]{top:2.5rem}.belowLeft[_nghost-%COMP%]:after{top:-.5rem;right:.5rem;transform:rotate(0)}.belowRight[_nghost-%COMP%]{top:2.5rem}.belowRight[_nghost-%COMP%]:after{top:-.5rem;left:.5rem;transform:rotate(0)}.above[_nghost-%COMP%]{bottom:2.5rem}.above[_nghost-%COMP%]:after{bottom:-.5rem;right:calc(50% - .5rem);transform:rotate(180deg)}.aboveLeft[_nghost-%COMP%]{bottom:2.5rem}.aboveLeft[_nghost-%COMP%]:after{bottom:-.5rem;right:.5rem;transform:rotate(180deg)}.aboveRight[_nghost-%COMP%]{bottom:2.5rem}.aboveRight[_nghost-%COMP%]:after{bottom:-.5rem;left:.5rem;transform:rotate(180deg)}.right[_nghost-%COMP%]{left:2.5rem;top:50%;transform:translateY(-50%)}.right[_nghost-%COMP%]:after{left:-.75rem;top:calc(50% - .25rem);transform:rotate(270deg)}.left[_nghost-%COMP%]{right:2.5rem;top:50%;transform:translateY(-50%)}.left[_nghost-%COMP%]:after{right:-.75rem;top:calc(50% - .25rem);transform:rotate(90deg)}'],
                        changeDetection: 0
                    }), n
                })();
            const Dt = ["actionButtonRef"];

            function Ne(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 9, 10), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.MAs(1),
                            g = t.oxw().$implicit,
                            O = t.oxw(2);
                        return t.KtG(O.onAction(g, r))
                    })("mouseenter", function() {
                        t.CHM(e);
                        const r = t.MAs(1),
                            g = t.oxw().$implicit,
                            O = t.oxw(2);
                        return t.KtG(O.showTooltip(g.type, g.label, r, !0))
                    })("mouseleave", function() {
                        t.CHM(e);
                        const r = t.oxw().$implicit,
                            g = t.oxw(2);
                        return t.KtG(g.hideTooltip(r.type))
                    }), t._UZ(2, "div", 11)(3, "CrownCrete-icon", 12), t.qZA()
                }
                if(2 & n) {
                    const e = t.oxw().$implicit,
                        o = t.oxw().ngrxLet,
                        r = t.oxw();
                    t.ekj("selected", e.type === (null == o.barButtons.activeBtn ? null : o.barButtons.activeBtn.type))("CrownCrete-button-animation", r.animatedButtons.includes(e.type)), t.Q6J("CrownCreteSkeletonLoader", o.loading), t.uIk("aria-label", e.type), t.xp6(2), t.ekj("CrownCrete-dot", r.animatedButtons.includes(e.type)), t.Q6J("ngClass", e.afterAnimation ? "hidden" : ""), t.xp6(1), t.Q6J("name", e.icon)
                }
            }

            function me(n, l) {
                if(1 & n && (t.ynx(0), t.YNc(1, Ne, 4, 10, "button", 8), t.BQk()), 2 & n) {
                    const e = l.$implicit;
                    t.xp6(1), t.Q6J("ngIf", e.visible)
                }
            }

            function qt(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 14, 10), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.MAs(1),
                            g = t.oxw().$implicit,
                            O = t.oxw(2);
                        return t.KtG(O.onAction(g, r))
                    })("mouseenter", function() {
                        t.CHM(e);
                        const r = t.MAs(1),
                            g = t.oxw().$implicit,
                            O = t.oxw(2);
                        return t.KtG(O.showTooltip(g.type, g.label, r, !1))
                    })("mouseleave", function() {
                        t.CHM(e);
                        const r = t.oxw().$implicit,
                            g = t.oxw(2);
                        return t.KtG(g.hideTooltip(r.type))
                    }), t._UZ(2, "CrownCrete-icon", 12), t.qZA()
                }
                if(2 & n) {
                    const e = t.oxw().$implicit,
                        o = t.oxw().ngrxLet;
                    t.ekj("selected", e.type === (null == o.barButtons.activeBtn ? null : o.barButtons.activeBtn.type)), t.Q6J("id", e.id)("CrownCreteSkeletonLoader", o.loading), t.xp6(2), t.Q6J("name", e.icon)
                }
            }

            function be(n, l) {
                if(1 & n && (t.ynx(0), t.YNc(1, qt, 3, 5, "button", 13), t.ALo(2, "async"), t.ALo(3, "buttonVisibility"), t.BQk()), 2 & n) {
                    const e = l.$implicit;
                    t.xp6(1), t.Q6J("ngIf", t.lcZ(2, 1, t.lcZ(3, 3, e)))
                }
            }

            function Ie(n, l) {
                if(1 & n && t._UZ(0, "CrownCrete-icon", 12), 2 & n) {
                    const e = t.oxw(3).ngrxLet;
                    t.Q6J("name", null == e.barButtons.quoteButton ? null : e.barButtons.quoteButton.icon)
                }
            }
            const ve = function(n, l) {
                    return {
                        primary: n,
                        small: l
                    }
                },
                $e = function() {
                    return {
                        button_type: "quote"
                    }
                };

            function ze(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 17), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(2).ngrxLet,
                            g = t.oxw();
                        return t.KtG(g.customBtnClick(r.barButtons.quoteButton))
                    }), t.YNc(1, Ie, 1, 1, "CrownCrete-icon", 18), t._uU(2), t.ALo(3, "flTranslate"), t.qZA()
                }
                if(2 & n) {
                    const e = t.oxw(2).ngrxLet,
                        o = t.oxw();
                    t.Q6J("ngClass", t.WLB(7, ve, (e.barButtons.ctaCount || 0) >= 1, 1 !== (e.barButtons.ctaCount || 0)))("CrownCreteTrackClick", o.trackingEvents.buttonClick)("props", t.DdM(10, $e)), t.xp6(1), t.Q6J("ngIf", null == e.barButtons.quoteButton ? null : e.barButtons.quoteButton.icon), t.xp6(1), t.hij(" ", t.lcZ(3, 5, "quote.standardTitle"), " ")
                }
            }
            const _e = function(n, l, e) {
                    return {
                        primary: n,
                        outline: l,
                        small: e
                    }
                },
                Je = function() {
                    return {
                        button_type: "custom"
                    }
                };

            function Qe(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 17), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(2).ngrxLet,
                            g = t.oxw();
                        return t.KtG(g.customBtnClick(r.barButtons.customButton))
                    }), t._UZ(1, "CrownCrete-icon", 19), t._uU(2), t.qZA()
                }
                if(2 & n) {
                    const e = t.oxw(2).ngrxLet,
                        o = t.oxw();
                    t.Q6J("ngClass", t.kEZ(4, _e, 1 === (e.barButtons.ctaCount || 0), (e.barButtons.ctaCount || 0) > 1, 1 !== (e.barButtons.ctaCount || 0)))("CrownCreteTrackClick", o.trackingEvents.buttonClick)("props", t.DdM(8, Je)), t.xp6(2), t.hij(" ", (null == e.barButtons.customButton ? null : e.barButtons.customButton.label) || "", " ")
                }
            }

            function b(n, l) {
                if(1 & n && t._UZ(0, "CrownCrete-icon", 12), 2 & n) {
                    const e = t.oxw(3).ngrxLet;
                    t.Q6J("name", null == e.barButtons.sampleButton ? null : e.barButtons.sampleButton.icon)
                }
            }
            const a = function() {
                return {
                    button_type: "sample"
                }
            };

            function i(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 17), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(2).ngrxLet,
                            g = t.oxw();
                        return t.KtG(g.sampleBtnClick(r.activeProduct))
                    }), t.YNc(1, b, 1, 1, "CrownCrete-icon", 18), t._uU(2), t.ALo(3, "flTranslate"), t.qZA()
                }
                if(2 & n) {
                    const e = t.oxw(2).ngrxLet,
                        o = t.oxw();
                    t.Q6J("ngClass", t.kEZ(7, _e, 1 === (e.barButtons.ctaCount || 0), (e.barButtons.ctaCount || 0) > 1, 1 !== (e.barButtons.ctaCount || 0)))("CrownCreteTrackClick", o.trackingEvents.buttonClick)("props", t.DdM(11, a)), t.xp6(1), t.Q6J("ngIf", null == e.barButtons.sampleButton ? null : e.barButtons.sampleButton.icon), t.xp6(1), t.hij(" ", t.lcZ(3, 5, "sample.standardTitle"), " ")
                }
            }

            function s(n, l) {
                if(1 & n && (t.TgZ(0, "div", 15), t.YNc(1, ze, 4, 11, "button", 16), t.YNc(2, Qe, 3, 9, "button", 16), t.YNc(3, i, 4, 12, "button", 16), t.qZA()), 2 & n) {
                    const e = t.oxw().ngrxLet;
                    t.ekj("single", 1 === e.barButtons.ctaCount), t.xp6(1), t.Q6J("ngIf", (null == e.barButtons.quoteButton ? null : e.barButtons.quoteButton.visible) && !!e.barButtons.activeProduct), t.xp6(1), t.Q6J("ngIf", null == e.barButtons.customButton ? null : e.barButtons.customButton.visible), t.xp6(1), t.Q6J("ngIf", (null == e.barButtons.sampleButton ? null : e.barButtons.sampleButton.visible) && !(null == e.activeProduct || !e.activeProduct.orderSampleUrl))
                }
            }
            const h = function() {
                return []
            };

            function _(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.ynx(0), t.TgZ(1, "div", 1)(2, "div", 2), t.YNc(3, me, 2, 1, "ng-container", 3), t.TgZ(4, "button", 4), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw();
                        return t.KtG(r.showSideMenu())
                    }), t._UZ(5, "CrownCrete-icon", 5), t.qZA()(), t.TgZ(6, "div", 6), t.YNc(7, be, 4, 5, "ng-container", 3), t.qZA()(), t.YNc(8, s, 4, 5, "div", 7), t.BQk()
                }
                if(2 & n) {
                    const e = l.ngrxLet,
                        o = t.oxw();
                    t.xp6(3), t.Q6J("ngForOf", (null == e.barButtons ? null : e.barButtons.firstButtonSection) || t.DdM(6, h))("ngForTrackBy", o.buttonTrackBy), t.xp6(1), t.Q6J("CrownCreteSkeletonLoader", e.loading), t.xp6(3), t.Q6J("ngForOf", (null == e.barButtons ? null : e.barButtons.secondButtonSection) || t.DdM(7, h))("ngForTrackBy", o.buttonTrackBy), t.xp6(1), t.Q6J("ngIf", e.barButtons.ctaCount > 0 && !e.isMobileLandscape)
                }
            }
            const y = function(n, l, e, o, r) {
                return {
                    loading: n,
                    isMobileLandscape: l,
                    barButtons: e,
                    trackingObject: o,
                    activeProduct: r
                }
            };
            let j = (() => {
                class n extends q.YU {
                    constructor() {
                        super(...arguments), this.eventsProvider = (0, t.f3M)(Ct.QT), this.navigation = (0, t.f3M)(p.YD), this.store = (0, t.f3M)(Bt), this.appFacade = (0, t.f3M)(Xe.lF), this.cdr = (0, t.f3M)(t.sBO), this.deviceService = (0, t.f3M)(J.U8), this.dialogService = (0, t.f3M)(gt.$C), this.eventMap = {
                            ...Ue
                        }, this.loadingAll$ = this.store.loadingAll$, this.barButtons$ = this.store.barButtons$, this.isMobileLandscape$ = this.store.isMobileLandscape$, this.trackingObject$ = this.store.trackingObject$, this.activeProduct$ = this.store.activeProduct$, this.trackingEvents = p.y8, this.animatedButtons = this.store.animatedButtons, this.tooltipRefs = {}
                    }
                    ngAfterContentInit() {
                        this.listenToSplash(), this.listenToEvents()
                    }
                    buttonTrackBy(e, o) {
                        return o?.type
                    }
                    onAction(e, o) {
                        const r = this.store.useDialogResolve();
                        this.store.takeAction({
                            actionBtn: e,
                            useDialog: r,
                            positionRef: o
                        })
                    }
                    showSideMenu() {
                        this.store.showSideMenu()
                    }
                    customBtnClick(e) {
                        this.store.customBtnClick(e)
                    }
                    sampleBtnClick(e) {
                        this.store.openSampleUrl(e.orderSampleUrl)
                    }
                    showTooltip(e, o, r, g) {
                        this.deviceService.isDesktop && !this.deviceService.isMobileSize && (this.tooltipRefs[e] = this.dialogService.open(Yt, {
                            containerClass: Z.bj.stretchWrapper,
                            panelClass: Z.bj.noClick,
                            hasBackdrop: !1,
                            closeOnDestroy: !0,
                            connectedPosition: {
                                originX: this.deviceService.isLandscape ? "end" : "start",
                                originY: "center",
                                overlayX: this.deviceService.isLandscape ? "end" : "start",
                                overlayY: "center",
                                offsetX: this.deviceService.isLandscape ? -8 : g ? 4 : -64,
                                offsetY: this.deviceService.isLandscape ? 0 : 10
                            },
                            positionRef: new t.SBq(r),
                            data: {
                                label: o,
                                direction: this.deviceService.isLandscape ? L.AR.left : g ? L.AR.aboveRight : L.AR.aboveLeft,
                                width: 100
                            }
                        }))
                    }
                    hideTooltip(e) {
                        this.deviceService.isDesktop && this.tooltipRefs[e] && this.tooltipRefs[e].close()
                    }
                    listenToSplash() {
                        this.appFacade.splash$.pipe((0, P.R)(this.destroyed), (0, x.g)(50), (0, $.h)(e => !e.visible && !this.deviceService.isMobileLandscape), (0, S.U)(() => this.cdr.markForCheck()), (0, I.b)(() => {
                            this.navigation.dynamicProductParams() || this.actionBtns?.first?.nativeElement?.click()
                        })).subscribe()
                    }
                    listenToEvents() {
                        (0, Nt.D)([this.handlePipe(this.eventsProvider.listen(p.Q5)), this.handlePipe(this.eventsProvider.listen(p.yN))]).subscribe()
                    }
                    handlePipe(e) {
                        return e.pipe((0, P.R)(this.destroyed), (0, $.h)(o => !!o.type), (0, I.b)(o => {
                            this.eventMap[o.type]?.(o, this.store.activeBtn, this.handleEventClick, this.actionBtns)
                        }))
                    }
                    handleEventClick(e, o) {
                        o?.find(g => g.nativeElement.getAttribute("aria-label") === e)?.nativeElement?.click()
                    }
                }
                return n.\u0275fac = function() {
                    let l;
                    return function(o) {
                        return (l || (l = t.n5z(n)))(o || n)
                    }
                }(), n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-visualisation-actions"]
                    ],
                    viewQuery: function(e, o) {
                        if(1 & e && t.Gf(Dt, 5), 2 & e) {
                            let r;
                            t.iGM(r = t.CRH()) && (o.actionBtns = r)
                        }
                    },
                    hostAttrs: [1, "CrownCrete-visualisation-actions"],
                    inputs: {
                        actionContainerVisible: "actionContainerVisible"
                    },
                    standalone: !0,
                    features: [t._Bn([gt.$C]), t.qOj, t.jDz],
                    decls: 1,
                    vars: 7,
                    consts: [
                        [4, "ngrxLet"],
                        [1, "visualisation-action-buttons"],
                        [1, "first"],
                        [4, "ngFor", "ngForOf", "ngForTrackBy"],
                        [1, "CrownCrete-icon-button", "secondary", "burger-btn", 3, "CrownCreteSkeletonLoader", "click"],
                        ["name", "fl_burger"],
                        [1, "second"],
                        ["class", "visualisation-actions-cta", 3, "single", 4, "ngIf"],
                        ["class", "CrownCrete-icon-button secondary", 3, "selected", "CrownCrete-button-animation", "CrownCreteSkeletonLoader", "click", "mouseenter", "mouseleave", 4, "ngIf"],
                        [1, "CrownCrete-icon-button", "secondary", 3, "CrownCreteSkeletonLoader", "click", "mouseenter", "mouseleave"],
                        ["actionButtonRef", ""],
                        [3, "ngClass"],
                        [3, "name"],
                        ["class", "CrownCrete-icon-button secondary", 3, "id", "selected", "CrownCreteSkeletonLoader", "click", "mouseenter", "mouseleave", 4, "ngIf"],
                        [1, "CrownCrete-icon-button", "secondary", 3, "id", "CrownCreteSkeletonLoader", "click", "mouseenter", "mouseleave"],
                        [1, "visualisation-actions-cta"],
                        ["CrownCrete-button", "", "class", "reverse", 3, "ngClass", "CrownCreteTrackClick", "props", "click", 4, "ngIf"],
                        ["CrownCrete-button", "", 1, "reverse", 3, "ngClass", "CrownCreteTrackClick", "props", "click"],
                        [3, "name", 4, "ngIf"],
                        ["name", "fl_add_o"]
                    ],
                    template: function(e, o) {
                        1 & e && t.YNc(0, _, 9, 8, "ng-container", 0), 2 & e && t.Q6J("ngrxLet", t.qbA(1, y, o.loadingAll$, o.isMobileLandscape$, o.barButtons$, o.trackingObject$, o.activeProduct$))
                    },
                    dependencies: [u.ez, u.mk, u.sg, u.O5, u.Ov, _t.c, d._N, d.eJ, ht.K, te.TJ, ue.A, St, $t.X9, at.N, rt.X],
                    styles: [".visualisation-actions-cta{display:grid;grid-template-columns:repeat(2,calc(50% - 8px));grid-gap:var(--fl-x-padding-xs);justify-content:space-between;padding:0 var(--fl-x-padding-xs)}.visualisation-actions-cta.single{display:flex;justify-content:center;background-color:var(--fl-primary);padding:0}.visualisation-actions-cta.single .CrownCrete-button{flex:1}.visualisation-actions-cta:not(.single){margin-bottom:var(--fl-y-padding-xs);align-items:center}.visualisation-actions-cta:not(.single) .CrownCrete-button{max-width:45vw}.visualisation-actions-cta CrownCrete-icon{width:1.25rem;height:1.25rem;margin:1px .5rem}@media (min-width: 769px){.visualisation-actions-cta{display:none!important}}.visualisation-action-buttons{display:flex;justify-content:space-between;padding:.5rem var(--fl-x-padding);border-top:solid 1px var(--fl-bg100);max-width:100vw}@media (orientation: landscape) and (min-width: 768px){.visualisation-action-buttons{flex-direction:column;height:100%;padding:var(--fl-x-padding) .5rem}}@media (orientation: landscape) and (min-width: 1024px){.visualisation-action-buttons{flex-direction:column;height:100%;padding:var(--fl-x-padding) .5rem}}.visualisation-action-buttons .first,.visualisation-action-buttons .cta-wrapper,.visualisation-action-buttons .second{display:flex}@media (orientation: landscape) and (min-width: 768px){.visualisation-action-buttons .first,.visualisation-action-buttons .cta-wrapper,.visualisation-action-buttons .second{flex-direction:column}}.visualisation-action-buttons .first .CrownCrete-icon-button,.visualisation-action-buttons .second .CrownCrete-icon-button{position:relative}.visualisation-action-buttons .first{flex:2}@media (max-width: 767px){.visualisation-action-buttons .first{justify-content:space-between}}@media (min-width: 768px){.visualisation-action-buttons .first .burger-btn{display:none}}.visualisation-action-buttons .first .CrownCrete-icon-button{align-self:center}@media (orientation: landscape) and (min-width: 768px){.visualisation-action-buttons .first .CrownCrete-icon-button{margin:0 0 .5rem}}@media (orientation: landscape) and (min-width: 1024px){.visualisation-action-buttons .first .CrownCrete-icon-button{margin:0 0 .5rem}}@media (orientation: portrait) and (min-width: 768px){.visualisation-action-buttons .first .CrownCrete-icon-button{margin:0 .5rem 0 0}}.visualisation-action-buttons .first .CrownCrete-button-animation{position:relative;animation:background-animation 1s}.visualisation-action-buttons .first .CrownCrete-button-animation .CrownCrete-dot{position:absolute;top:50%;left:50%;z-index:5;transform:translate(-50%,-50%);background-color:var(--fl-primary);opacity:0;width:.375rem;height:.375rem;border-radius:50%;animation:dot-animation 2s forwards}.visualisation-action-buttons .first .CrownCrete-button-animation .CrownCrete-dot.hidden{display:none}.visualisation-action-buttons .first .CrownCrete-button-animation CrownCrete-icon{animation:appearance-animation 1s}.visualisation-action-buttons .second{display:none}@media (min-width: 768px){.visualisation-action-buttons .second{display:flex}}@media (orientation: portrait){.visualisation-action-buttons .second .CrownCrete-icon-button{margin:0 0 0 .5rem}}@media (orientation: landscape) and (min-width: 768px){.visualisation-action-buttons .second .CrownCrete-icon-button{margin:.5rem 0 0}}@media (orientation: landscape) and (min-width: 1024px){.visualisation-action-buttons .second .CrownCrete-icon-button{margin:.5rem 0 0}}@keyframes background-animation{0%{transform:scale(0)}50%{background-color:var(--fl-primary100)}85%{background-color:var(--fl-primary100)}to{transform:scale(1);background-color:transparent}}@keyframes dot-animation{0%{opacity:0}50%{opacity:.2;transform:scale(.5)}to{opacity:1;transform:translate(10px) translateY(-14px) scale(1)}}@keyframes appearance-animation{0%{opacity:0;transform:scale(3)}50%{opacity:.5;transform:scale(1.5);color:var(--fl-primary800)}75%{opacity:.8;transform:scale(1);color:var(--fl-primary)}to{opacity:1;color:var(--fl-fg800)}}\n"],
                    encapsulation: 2,
                    changeDetection: 0
                }), n
            })();
            var ot = c(3158);

            function nt(n, l) {
                if(1 & n && t._UZ(0, "CrownCrete-icon", 11), 2 & n) {
                    const e = t.oxw();
                    t.Q6J("name", e.icon)
                }
            }

            function it(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 12), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw();
                        return t.KtG(r.openSizesDialog())
                    }), t._uU(1), t.ALo(2, "sizeMapping"), t.qZA()
                }
                if(2 & n) {
                    const e = t.oxw();
                    t.xp6(1), t.hij(" ", t.lcZ(2, 1, e.selectedSize), " ")
                }
            }

            function ut(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 13, 14), t.NdJ("mouseenter", function() {
                        t.CHM(e);
                        const r = t.MAs(1),
                            g = t.oxw();
                        return t.KtG(g.showTooltip(r))
                    })("mouseleave", function() {
                        t.CHM(e);
                        const r = t.oxw();
                        return t.KtG(r.hideTooltip())
                    })("mousedown", function() {
                        t.CHM(e);
                        const r = t.oxw();
                        return t.KtG(r.hideTooltip())
                    })("mouseup", function() {
                        t.CHM(e);
                        const r = t.oxw();
                        return t.KtG(r.hideTooltip())
                    }), t._UZ(2, "CrownCrete-icon", 15), t.qZA()
                }
            }

            function wt(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 16), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw();
                        return t.KtG(r.clear())
                    }), t._UZ(1, "CrownCrete-icon", 17), t.qZA()
                }
            }

            function Mt(n, l) {
                if(1 & n && (t.TgZ(0, "div", 18), t._uU(1), t.qZA()), 2 & n) {
                    const e = t.oxw();
                    t.xp6(1), t.Oqu(e.message)
                }
            }
            const ui = ["*"];
            let di = (() => {
                class n {
                    constructor() {
                        this.dialogService = (0, t.f3M)(gt.$C), this.rugType = L.kv.rug, this.title = "", this.icon = "", this.message = "", this.headerType = "", this.closeClick = new t.vpe, this.clearClick = new t.vpe, this.sizesDialogClick = new t.vpe
                    }
                    showTooltip(e) {
                        this.tooltipRef = this.dialogService.open(Yt, {
                            containerClass: Z.bj.stretchWrapper,
                            panelClass: Z.bj.noClick,
                            hasBackdrop: !1,
                            closeOnDestroy: !0,
                            connectedPosition: {
                                originX: "center",
                                originY: "top",
                                overlayX: "center",
                                overlayY: "top",
                                offsetX: -80,
                                offsetY: 0
                            },
                            positionRef: new t.SBq(e),
                            data: {
                                label: "room.selectedProducts.tooltipLabel",
                                direction: L.AR.below,
                                width: 160
                            }
                        })
                    }
                    hideTooltip() {
                        this.tooltipRef?.close()
                    }
                    openSizesDialog() {
                        this.sizesDialogClick.emit()
                    }
                    closeHandler() {
                        this.closeClick.emit()
                    }
                    clear() {
                        this.clearClick.emit()
                    }
                }
                return n.\u0275fac = function(e) {
                    return new(e || n)
                }, n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-action-container-header"]
                    ],
                    hostAttrs: [1, "CrownCrete-action-container-header"],
                    inputs: {
                        activeProduct: "activeProduct",
                        selectedSize: "selectedSize",
                        title: "title",
                        icon: "icon",
                        message: "message",
                        headerType: "headerType"
                    },
                    outputs: {
                        closeClick: "closeClick",
                        clearClick: "clearClick",
                        sizesDialogClick: "sizesDialogClick"
                    },
                    standalone: !0,
                    features: [t._Bn([gt.$C]), t.jDz],
                    ngContentSelectors: ui,
                    decls: 13,
                    vars: 6,
                    consts: [
                        [1, "action-container-header-wrapper"],
                        [1, "CrownCrete-action-container-header-title"],
                        ["class", "primary", 3, "name", 4, "ngIf"],
                        [1, "bold"],
                        [1, "CrownCrete-action-container-header-actions"],
                        ["CrownCrete-button", "", "class", "small outline sizes-dialog-handler", 3, "click", 4, "ngIf"],
                        ["class", "info-container prevent-select", 3, "mouseenter", "mouseleave", "mousedown", "mouseup", 4, "ngIf"],
                        ["CrownCrete-icon-button", "", "class", "small outline remove-product-handler", 3, "click", 4, "ngIf"],
                        ["CrownCrete-icon-button", "", 1, "small", "outline", "no-border", "close-handler", 3, "click"],
                        ["name", "fl_close"],
                        ["class", "feature-message-mobile", 4, "ngIf"],
                        [1, "primary", 3, "name"],
                        ["CrownCrete-button", "", 1, "small", "outline", "sizes-dialog-handler", 3, "click"],
                        [1, "info-container", "prevent-select", 3, "mouseenter", "mouseleave", "mousedown", "mouseup"],
                        ["infoContainerRef", ""],
                        ["name", "fl_info_o", 1, "primary"],
                        ["CrownCrete-icon-button", "", 1, "small", "outline", "remove-product-handler", 3, "click"],
                        ["name", "fl_trash_o"],
                        [1, "feature-message-mobile"]
                    ],
                    template: function(e, o) {
                        1 & e && (t.F$t(), t.TgZ(0, "div", 0)(1, "div", 1), t.YNc(2, nt, 1, 1, "CrownCrete-icon", 2), t.TgZ(3, "p", 3), t._uU(4), t.qZA()(), t.TgZ(5, "div", 4), t.YNc(6, it, 3, 3, "button", 5), t.Hsn(7), t.YNc(8, ut, 3, 0, "div", 6), t.YNc(9, wt, 2, 0, "button", 7), t.TgZ(10, "button", 8), t.NdJ("click", function() {
                            return o.closeHandler()
                        }), t._UZ(11, "CrownCrete-icon", 9), t.qZA()()(), t.YNc(12, Mt, 2, 1, "div", 10)), 2 & e && (t.xp6(2), t.Q6J("ngIf", o.icon), t.xp6(2), t.Oqu(o.title), t.xp6(2), t.Q6J("ngIf", (null == o.activeProduct ? null : o.activeProduct.type) === o.rugType && !!o.selectedSize), t.xp6(2), t.Q6J("ngIf", "addToCart" === o.headerType), t.xp6(1), t.Q6J("ngIf", o.activeProduct), t.xp6(3), t.Q6J("ngIf", o.message))
                    },
                    dependencies: [u.ez, u.O5, ht.K, _t.c, gt.wC, at.N, ee.vO],
                    styles: [".CrownCrete-action-container-header{display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:.75rem .5rem;background-color:var(--fl-bg);width:100%}.CrownCrete-action-container-header .action-container-header-wrapper{width:100%;display:flex;justify-content:space-between}.CrownCrete-action-container-header .feature-message-mobile{background-color:var(--fl-primary100);border-radius:.25rem;width:100%;padding:var(--fl-y-padding-xs);margin:var(--fl-y-padding-xs) var(--fl-y-padding-xs) 0}.CrownCrete-action-container-header .feature-message-mobile span{color:var(--fl-primary)}@media (orientation: landscape){.CrownCrete-action-container-header .feature-message-mobile{display:none}}.CrownCrete-action-container-header.border-radius{border-top-left-radius:var(--fl-border-radius);border-top-right-radius:var(--fl-border-radius)}.CrownCrete-action-container-header .CrownCrete-action-container-header-actions{display:flex;align-items:center}.CrownCrete-action-container-header .CrownCrete-action-container-header-actions .info-container{width:32px;height:32px;position:relative;display:flex;justify-content:center;align-items:center}.CrownCrete-action-container-header .CrownCrete-action-container-header-actions .prevent-select{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.CrownCrete-action-container-header .CrownCrete-action-container-header-actions .sizes-dialog-handler{margin-right:var(--fl-x-padding-xs)}@media (min-width: 768px){.CrownCrete-action-container-header .CrownCrete-action-container-header-actions .sizes-dialog-handler{display:none}}.CrownCrete-action-container-header .CrownCrete-action-container-header-actions .remove-product-handler,.CrownCrete-action-container-header .CrownCrete-action-container-header-actions .close-handler{margin-left:var(--fl-x-padding-xs)}.CrownCrete-action-container-header .CrownCrete-action-container-header-title{display:flex;align-items:center}.CrownCrete-action-container-header .CrownCrete-action-container-header-title p{color:var(--fl-fg)}.CrownCrete-action-container-header .CrownCrete-action-container-header-title CrownCrete-icon{color:var(--fl-primary);margin-right:.75rem}\n"],
                    encapsulation: 2,
                    changeDetection: 0
                }), n
            })();
            var Ht = c(9346);
            const hi = {
                    [p.Lr.catalog]: n => n?.epoxyView ? (0, B.of)(null) : (0, Ht.D)(Promise.all([c.e(518), c.e(655)]).then(c.bind(c, 9655)).then(l => l.FiltersButtonComponent)),
                    [p.Lr.calculator]: () => (0, B.of)(null),
                    [p.Lr.help]: () => (0, B.of)(null),
                    [p.Lr.custom]: () => (0, B.of)(null),
                    [p.Lr.share]: () => (0, B.of)(null),
                    [p.Lr.favourite]: () => (0, B.of)(null),
                    [p.Lr.downloadScreen]: () => (0, B.of)(null),
                    [p.Lr.settings]: () => (0, B.of)(null),
                    [p.Lr.addToCart]: () => (0, B.of)(null),
                    [p.Lr.loading]: () => (0, B.of)(null),
                    [p.Lr.quote]: () => (0, B.of)(null),
                    [p.Lr.devtools]: () => (0, B.of)(null),
                    [p.Lr.sample]: () => (0, B.of)(null)
                },
                pi = {
                    [p.Lr.catalog]: n => (0, Ht.D)(n?.epoxyView ? Promise.all([c.e(518), c.e(995)]).then(c.bind(c, 4995)).then(l => l.EpoxyProductViewComponent) : Promise.all([c.e(518), c.e(655)]).then(c.bind(c, 9655)).then(l => l.ProductsViewComponent)),
                    [p.Lr.calculator]: () => (0, B.of)(null),
                    [p.Lr.help]: () => (0, B.of)(null),
                    [p.Lr.custom]: () => (0, B.of)(null),
                    [p.Lr.share]: () => (0, B.of)(null),
                    [p.Lr.favourite]: () => (0, Ht.D)(Promise.all([c.e(518), c.e(403)]).then(c.bind(c, 658)).then(n => n.FavouriteViewComponent)),
                    [p.Lr.downloadScreen]: () => (0, B.of)(null),
                    [p.Lr.settings]: () => (0, Ht.D)(c.e(173).then(c.bind(c, 8173)).then(n => n.ProductSettingsComponent)),
                    [p.Lr.addToCart]: () => (0, Ht.D)(c.e(612).then(c.bind(c, 9612)).then(n => n.CartViewComponent)),
                    [p.Lr.loading]: () => (0, B.of)(null),
                    [p.Lr.quote]: () => (0, B.of)(null),
                    [p.Lr.devtools]: () => (0, Ht.D)(c.e(482).then(c.bind(c, 5482)).then(n => n.DevtoolsComponent)),
                    [p.Lr.sample]: () => (0, B.of)(null)
                };

            function fi(n, l) {
                1 & n && t.GkF(0)
            }

            function gi(n, l) {
                1 & n && t.GkF(0)
            }

            function mi(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.ynx(0), t.TgZ(1, "CrownCrete-action-container-header", 2), t.NdJ("closeClick", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.closePanel())
                    })("clearClick", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.clear())
                    })("sizesDialogClick", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.openSizesDialog())
                    }), t.YNc(2, fi, 1, 0, "ng-container", 3), t.qZA(), t.TgZ(3, "div", 4)(4, "div", 5), t.YNc(5, gi, 1, 0, "ng-container", 3), t.qZA()(), t.BQk()
                }
                if(2 & n) {
                    const e = l.ngrxLet,
                        o = t.oxw(2);
                    t.xp6(1), t.ekj("border-radius", o.inDialog), t.Q6J("activeProduct", e.activeProduct)("selectedSize", e.selectedSize)("title", o.headerLabel)("icon", o.headerIcon)("message", o.headerMessage)("headerType", null == o.actionButton ? null : o.actionButton.type), t.xp6(1), t.Q6J("ngComponentOutlet", e.actionButtonType)("ngComponentOutletInjector", o.buttonInjector), t.xp6(3), t.Q6J("ngComponentOutlet", e.componentType)("ngComponentOutletInjector", o.componentInjector)
                }
            }
            const bi = function(n, l, e, o) {
                return {
                    componentType: n,
                    actionButtonType: l,
                    activeProduct: e,
                    selectedSize: o
                }
            };

            function vi(n, l) {
                if(1 & n && (t.ynx(0), t.YNc(1, mi, 6, 12, "ng-container", 1), t.BQk()), 2 & n) {
                    const e = t.oxw();
                    t.xp6(1), t.Q6J("ngrxLet", t.l5B(1, bi, e.componentType$, e.actionButtonType$, e.activeProduct$, e.selectedSize$))
                }
            }
            let We = (() => {
                class n extends q.YU {
                    constructor() {
                        super(...arguments), this.actionViewMap = {
                            ...pi
                        }, this.actionButtonViewMap = {
                            ...hi
                        }, this.configProvider = (0, t.f3M)(p.FI), this.elRef = (0, t.f3M)(t.SBq), this.cdr = (0, t.f3M)(t.sBO), this.roomStore = (0, t.f3M)(Bt, {
                            optional: !0
                        }), this.translationsProvider = (0, t.f3M)(Z.pp), this.componentTypeSubject = new kt.x, this.actionButtonTypeSubject = new kt.x, this.headerDataSubject = new kt.x, this.componentType$ = this.componentTypeSubject.asObservable(), this.activeProduct$ = this.roomStore?.activeProduct$ || (0, B.of)(null), this.selectedSize$ = this.roomStore?.selectedSize$ || (0, B.of)(null), this.actionButtonType$ = this.actionButtonTypeSubject.asObservable(), this._headerLabel = "", this._headerIcon = "", this._headerDynamicMessage = "", this.inDialog = !1, this.closeContainer = new t.vpe
                    }
                    set actionButton(e) {
                        !e || this._actionButton?.type === e?.type || (this.handleDynamicHeaderData(), this._actionButton = e, this.componentIsVisible && this.configProvider.companyConfig$.pipe((0, F.q)(1), (0, $.h)(o => !!o), (0, M.w)(o => (0, Nt.D)([this.actionViewMap[this._actionButton.type](o), this.actionButtonViewMap[this._actionButton.type](o)])), (0, ot.K)(() => (0, B.of)([null, null])), (0, I.b)(([o, r]) => {
                            const g = new kt.x;
                            this.prepareDynamicProviderForButton(!0, r, g), this.prepareDynamicProviderForButton(!1, o, g), this.componentTypeSubject.next(o), this.actionButtonTypeSubject.next(r)
                        }), (0, P.R)(this.destroyed)).subscribe())
                    }
                    get actionButton() {
                        return this._actionButton
                    }
                    get headerIcon() {
                        return this._headerIcon ? this._headerIcon : this.actionButton?.icon || ""
                    }
                    get headerLabel() {
                        const e = this.actionButton?.label ? this.translationsProvider.translate(this.actionButton?.label) : "";
                        return this._headerLabel ? `${e} - ${this._headerLabel}` : e
                    }
                    get headerMessage() {
                        return this._headerDynamicMessage ? this._headerDynamicMessage : ""
                    }
                    get componentIsVisible() {
                        return !!this.elRef.nativeElement?.offsetParent
                    }
                    closePanel() {
                        this.roomStore ? this.roomStore?.closeActionContainer() : this.closeContainer.emit()
                    }
                    clear() {
                        this.roomStore?.clear()
                    }
                    openSizesDialog() {
                        this.roomStore?.openSizesDialog()
                    }
                    prepareDynamicProviderForButton(e, o, r) {
                        this[e ? "buttonInjector" : "componentInjector"] = o ? t.zs3.create({
                            providers: [{
                                provide: p.jX,
                                useValue: {
                                    headerData: this.headerDataSubject,
                                    actionBtnCallback: e ? () => r.next() : void 0,
                                    actionBtnCallback$: e ? void 0 : r.asObservable()
                                }
                            }]
                        }) : void 0
                    }
                    handleDynamicHeaderData() {
                        this.headerDataSubject.asObservable().pipe((0, P.R)(this.destroyed), (0, I.b)(e => {
                            this._headerLabel = e?.headerLabel ? this.translationsProvider.translate(e.headerLabel) : "", this._headerIcon = e?.headerIcon || "", this._headerDynamicMessage = e?.headerDynamicMessage ? this.translationsProvider.translate(e.headerDynamicMessage) : "", this.cdr.detectChanges()
                        })).subscribe()
                    }
                }
                return n.\u0275fac = function() {
                    let l;
                    return function(o) {
                        return (l || (l = t.n5z(n)))(o || n)
                    }
                }(), n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-action-container"]
                    ],
                    hostAttrs: [1, "CrownCrete-action-container"],
                    inputs: {
                        inDialog: "inDialog",
                        actionButton: "actionButton"
                    },
                    outputs: {
                        closeContainer: "closeContainer"
                    },
                    standalone: !0,
                    features: [t.qOj, t.jDz],
                    decls: 1,
                    vars: 1,
                    consts: [
                        [4, "ngIf"],
                        [4, "ngrxLet"],
                        ["CrownCreteDragContainerHandle", "", 3, "activeProduct", "selectedSize", "title", "icon", "message", "headerType", "closeClick", "clearClick", "sizesDialogClick"],
                        [4, "ngComponentOutlet", "ngComponentOutletInjector"],
                        [1, "action-container-view"],
                        [1, "action-container-view-inner"]
                    ],
                    template: function(e, o) {
                        1 & e && t.YNc(0, vi, 2, 6, "ng-container", 0), 2 & e && t.Q6J("ngIf", o.componentIsVisible)
                    },
                    dependencies: [u.ez, u.$G, u.O5, di, d._N, d.eJ, te.NX],
                    styles: [".CrownCrete-action-container{display:flex;flex-direction:column;height:100%;background-color:var(--fl-bg);border-radius:var(--fl-border-radius)}@media (max-width: 1023px) and (orientation: portrait){.CrownCrete-action-container{max-width:100vw}}@media (max-width: 767px) and (orientation: landscape){.CrownCrete-action-container{width:204px;max-height:100dvh}}.CrownCrete-action-container .action-container-view{height:inherit;position:relative;overflow:auto;background-color:var(--fl-bg100)}@media (orientation: portrait){.CrownCrete-action-container .action-container-view{height:140px}}@media (min-width: 768px) and (orientation: landscape){.CrownCrete-action-container .action-container-view{border-bottom-right-radius:var(--fl-border-radius);border-bottom-left-radius:var(--fl-border-radius)}}.CrownCrete-action-container .action-container-view .action-container-view-inner{height:inherit}\n"],
                    encapsulation: 2,
                    changeDetection: 0
                }), n
            })();

            function _i(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "CrownCrete-action-container", 2), t.NdJ("closeContainer", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.closeDialog())
                    }), t.qZA()
                }
                if(2 & n) {
                    const e = t.oxw().ngrxLet;
                    t.Q6J("inDialog", !0)("actionButton", null == e ? null : e.data)
                }
            }

            function wi(n, l) {
                if(1 & n && (t.ynx(0), t.YNc(1, _i, 1, 2, "CrownCrete-action-container", 1), t.BQk()), 2 & n) {
                    const e = l.ngrxLet;
                    t.xp6(1), t.Q6J("ngIf", null == e ? null : e.data)
                }
            }
            const xi = function(n) {
                return {
                    data: n
                }
            };
            let yi = (() => {
                class n extends q.YU {
                    constructor() {
                        super(), this.data = (0, t.f3M)(p.wM), this.dialogRef = (0, t.f3M)(gt.JH), this.roomsProvider = (0, t.f3M)(p.XZ), this.cdr = (0, t.f3M)(t.sBO), this.buttonData$ = this.data?.viewType$, this._showDialog = !0, this.connectViewChange()
                    }
                    get showDialog() {
                        return this._showDialog
                    }
                    closeDialog() {
                        this.dialogRef.close()
                    }
                    connectViewChange() {
                        this.data.viewType$.pipe((0, P.R)(this.destroyed)).subscribe(), this.roomsProvider.showLayout$.pipe((0, P.R)(this.destroyed), (0, I.b)(e => {
                            this._showDialog = !e, this.cdr.markForCheck()
                        })).subscribe()
                    }
                }
                return n.\u0275fac = function(e) {
                    return new(e || n)
                }, n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-action-container-dialog"]
                    ],
                    hostVars: 2,
                    hostBindings: function(e, o) {
                        2 & e && t.ekj("hidden-ui", o.showDialog)
                    },
                    standalone: !0,
                    features: [t.qOj, t.jDz, t.zW0([te.Y5])],
                    decls: 2,
                    vars: 5,
                    consts: [
                        [4, "ngrxLet"],
                        [3, "inDialog", "actionButton", "closeContainer", 4, "ngIf"],
                        [3, "inDialog", "actionButton", "closeContainer"]
                    ],
                    template: function(e, o) {
                        1 & e && (t.YNc(0, wi, 2, 1, "ng-container", 0), t.ALo(1, "async")), 2 & e && t.Q6J("ngrxLet", t.VKq(3, xi, t.lcZ(1, 1, o.buttonData$)))
                    },
                    dependencies: [u.ez, u.O5, u.Ov, We, d._N, d.eJ],
                    styles: ["[_nghost-%COMP%]{pointer-events:auto;width:298px;height:100%;border:1px solid var(--fl-border-clr);border-radius:var(--fl-border-radius)}"],
                    changeDetection: 0
                }), n
            })();

            function Ci(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 2)(1, "img", 3), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw();
                        return t.KtG(r.openVendorUrl())
                    }), t.qZA()()
                }
                if(2 & n) {
                    const e = t.oxw();
                    t.xp6(1), t.ekj("CrownCrete-pointer", !!e.vendorUrl), t.Q6J("src", e.logoUrl, t.LSH)
                }
            }

            function Ti(n, l) {
                if(1 & n && (t.TgZ(0, "p", 4)(1, "a", 5), t._uU(2, "Powered by CrownCrete"), t.qZA()()), 2 & n) {
                    const e = t.oxw();
                    t.xp6(1), t.Q6J("href", e.CrownCreteUrl, t.LSH)
                }
            }
            let Oi = (() => {
                class n {
                    constructor() {
                        this.logoUrl = "", this.showLogo = !1, this.showCrownCreteText = !1, this.vendorUrl = "", this.vendorUrlClick = new t.vpe, this.cls = ["CrownCrete-powered-by"], this.CrownCreteUrl = pe.N.CrownCreteWebsite
                    }
                    openVendorUrl() {
                        this.vendorUrlClick.emit()
                    }
                }
                return n.\u0275fac = function(e) {
                    return new(e || n)
                }, n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-powered-by"]
                    ],
                    hostVars: 2,
                    hostBindings: function(e, o) {
                        2 & e && t.Tol(o.cls)
                    },
                    inputs: {
                        logoUrl: "logoUrl",
                        showLogo: "showLogo",
                        showCrownCreteText: "showCrownCreteText",
                        vendorUrl: "vendorUrl"
                    },
                    outputs: {
                        vendorUrlClick: "vendorUrlClick"
                    },
                    standalone: !0,
                    features: [t.jDz],
                    decls: 2,
                    vars: 2,
                    consts: [
                        ["class", "company-logo", 4, "ngIf"],
                        ["class", "CrownCrete-caption CrownCrete-light", 4, "ngIf"],
                        [1, "company-logo"],
                        ["loading", "lazy", "alt", "company logo", 3, "src", "click"],
                        [1, "CrownCrete-caption", "CrownCrete-light"],
                        ["target", "_blank", 1, "CrownCrete-url", 3, "href"]
                    ],
                    template: function(e, o) {
                        1 & e && (t.YNc(0, Ci, 2, 3, "div", 0), t.YNc(1, Ti, 3, 1, "p", 1)), 2 & e && (t.Q6J("ngIf", o.showLogo && o.logoUrl), t.xp6(1), t.Q6J("ngIf", o.showCrownCreteText))
                    },
                    dependencies: [u.ez, u.O5],
                    styles: [".CrownCrete-powered-by{display:flex;justify-content:space-between;align-items:center;padding:0 var(--fl-x-padding) 0 0}.CrownCrete-powered-by .company-logo{max-height:40px;height:40px;margin-right:var(--fl-x-padding-xs)}.CrownCrete-powered-by .company-logo img{height:2.5rem}.CrownCrete-powered-by .CrownCrete-url{text-decoration:none;outline:none;color:var(--fl-fg)}\n"],
                    encapsulation: 2,
                    changeDetection: 0
                }), n
            })();
            var je = c(2499),
                ti = c(7064),
                ei = c(1670),
                Ye = c(5646),
                Pi = c(4497);
            const Li = ["qrcElement"];
            let ii = (() => {
                    class n {
                        constructor(e, o) {
                            this.renderer = e, this.sanitizer = o, this.allowEmptyString = !1, this.colorDark = "#000000ff", this.colorLight = "#ffffffff", this.cssClass = "qrcode", this.elementType = "canvas", this.errorCorrectionLevel = "M", this.margin = 4, this.qrdata = "", this.scale = 4, this.width = 10, this.qrCodeURL = new t.vpe, this.context = null
                        }
                        ngOnChanges() {
                            var e = this;
                            return (0, ei.Z)(function*() {
                                yield e.createQRCode()
                            })()
                        }
                        isValidQrCodeText(e) {
                            return !1 === this.allowEmptyString ? !(typeof e > "u" || "" === e || "null" === e || null === e) : !(typeof e > "u")
                        }
                        toDataURL(e) {
                            return new Promise((o, r) => {
                                (0, Ye.hz)(this.qrdata, e, (g, O) => {
                                    g ? r(g) : o(O)
                                })
                            })
                        }
                        toCanvas(e, o) {
                            return new Promise((r, g) => {
                                (0, Ye.rT)(e, this.qrdata, o, O => {
                                    O ? g(O) : r("success")
                                })
                            })
                        }
                        toSVG(e) {
                            return new Promise((o, r) => {
                                (0, Ye.toString)(this.qrdata, e, (g, O) => {
                                    g ? r(g) : o(O)
                                })
                            })
                        }
                        renderElement(e) {
                            for(const o of this.qrcElement.nativeElement.childNodes) this.renderer.removeChild(this.qrcElement.nativeElement, o);
                            this.renderer.appendChild(this.qrcElement.nativeElement, e)
                        }
                        createQRCode() {
                            var e = this;
                            return (0, ei.Z)(function*() {
                                e.version && e.version > 40 ? (console.warn("[angularx-qrcode] max value for `version` is 40"), e.version = 40) : e.version && e.version < 1 ? (console.warn("[angularx-qrcode]`min value for `version` is 1"), e.version = 1) : void 0 !== e.version && isNaN(e.version) && (console.warn("[angularx-qrcode] version should be a number, defaulting to auto."), e.version = void 0);
                                try {
                                    if(!e.isValidQrCodeText(e.qrdata)) throw new Error("[angularx-qrcode] Field `qrdata` is empty, set 'allowEmptyString=\"true\"' to overwrite this behaviour.");
                                    e.isValidQrCodeText(e.qrdata) && "" === e.qrdata && (e.qrdata = " ");
                                    const o = {
                                            color: {
                                                dark: e.colorDark,
                                                light: e.colorLight
                                            },
                                            errorCorrectionLevel: e.errorCorrectionLevel,
                                            margin: e.margin,
                                            scale: e.scale,
                                            version: e.version,
                                            width: e.width
                                        },
                                        r = e.imageSrc,
                                        g = e.imageHeight || 40,
                                        O = e.imageWidth || 40;
                                    switch(e.elementType) {
                                        case "canvas":
                                            const R = e.renderer.createElement("canvas");
                                            e.context = R.getContext("2d"), e.toCanvas(R, o).then(() => {
                                                if(e.ariaLabel && e.renderer.setAttribute(R, "aria-label", `${e.ariaLabel}`), e.title && e.renderer.setAttribute(R, "title", `${e.title}`), r && e.context) {
                                                    e.centerImage = new Image(O, g), r !== e.centerImage.src && (e.centerImage.src = r), g !== e.centerImage.height && (e.centerImage.height = g), O !== e.centerImage.width && (e.centerImage.width = O);
                                                    const st = e.centerImage;
                                                    st && (st.onload = () => {
                                                        e.context?.drawImage(st, R.width / 2 - O / 2, R.height / 2 - g / 2, O, g)
                                                    })
                                                }
                                                e.renderElement(R), e.emitQRCodeURL(R)
                                            }).catch(st => {
                                                console.error("[angularx-qrcode] canvas error:", st)
                                            });
                                            break;
                                        case "svg":
                                            const k = e.renderer.createElement("div");
                                            e.toSVG(o).then(st => {
                                                e.renderer.setProperty(k, "innerHTML", st);
                                                const G = k.firstChild;
                                                e.renderer.setAttribute(G, "height", `${e.width}`), e.renderer.setAttribute(G, "width", `${e.width}`), e.renderElement(G), e.emitQRCodeURL(G)
                                            }).catch(st => {
                                                console.error("[angularx-qrcode] svg error:", st)
                                            });
                                            break;
                                        default:
                                            const A = e.renderer.createElement("img");
                                            e.toDataURL(o).then(st => {
                                                e.alt && A.setAttribute("alt", e.alt), e.ariaLabel && A.setAttribute("aria-label", e.ariaLabel), A.setAttribute("src", st), e.title && A.setAttribute("title", e.title), e.renderElement(A), e.emitQRCodeURL(A)
                                            }).catch(st => {
                                                console.error("[angularx-qrcode] img/url error:", st)
                                            })
                                    }
                                } catch (o) {
                                    console.error("[angularx-qrcode] Error generating QR Code:", o.message)
                                }
                            })()
                        }
                        emitQRCodeURL(e) {
                            const o = e.constructor.name;
                            if(o === SVGSVGElement.name) {
                                const O = new Blob([e.outerHTML], {
                                        type: "image/svg+xml"
                                    }),
                                    R = URL.createObjectURL(O),
                                    k = this.sanitizer.bypassSecurityTrustUrl(R);
                                return void this.qrCodeURL.emit(k)
                            }
                            let r = "";
                            o === HTMLCanvasElement.name && (r = e.toDataURL("image/png")), o === HTMLImageElement.name && (r = e.src), fetch(r).then(g => g.blob()).then(g => URL.createObjectURL(g)).then(g => this.sanitizer.bypassSecurityTrustUrl(g)).then(g => {
                                this.qrCodeURL.emit(g)
                            }).catch(g => {
                                console.error("[angularx-qrcode] Error when fetching image/png URL: " + g)
                            })
                        }
                    }
                    return n.\u0275fac = function(e) {
                        return new(e || n)(t.Y36(t.Qsj), t.Y36(Pi.H7))
                    }, n.\u0275cmp = t.Xpm({
                        type: n,
                        selectors: [
                            ["qrcode"]
                        ],
                        viewQuery: function(e, o) {
                            if(1 & e && t.Gf(Li, 7), 2 & e) {
                                let r;
                                t.iGM(r = t.CRH()) && (o.qrcElement = r.first)
                            }
                        },
                        inputs: {
                            allowEmptyString: "allowEmptyString",
                            colorDark: "colorDark",
                            colorLight: "colorLight",
                            cssClass: "cssClass",
                            elementType: "elementType",
                            errorCorrectionLevel: "errorCorrectionLevel",
                            imageSrc: "imageSrc",
                            imageHeight: "imageHeight",
                            imageWidth: "imageWidth",
                            margin: "margin",
                            qrdata: "qrdata",
                            scale: "scale",
                            version: "version",
                            width: "width",
                            alt: "alt",
                            ariaLabel: "ariaLabel",
                            title: "title"
                        },
                        outputs: {
                            qrCodeURL: "qrCodeURL"
                        },
                        features: [t.TTD],
                        decls: 2,
                        vars: 2,
                        consts: [
                            ["qrcElement", ""]
                        ],
                        template: function(e, o) {
                            1 & e && t._UZ(0, "div", null, 0), 2 & e && t.Tol(o.cssClass)
                        },
                        encapsulation: 2,
                        changeDetection: 0
                    }), n
                })(),
                qe = (() => {
                    class n {}
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275mod = t.oAB({
                        type: n
                    }), n.\u0275inj = t.cJS({}), n
                })();
            var Gt = (() => {
                return (n = Gt || (Gt = {})).title = "title", n.text = "text", n.button = "button", Gt;
                var n
            })();
            const Si = n => ({
                [Gt.title]: n ? "arDialog.titleQR" : "arDialog.infoTitle",
                [Gt.text]: n ? "arDialog.messageQR" : "arDialog.infoMessage",
                [Gt.button]: n ? "arDialog.buttonTextQR" : "arDialog.infoButtonText"
            });
            let oi = (() => {
                class n extends f.m1 {
                    constructor() {
                        super({}), this.deviceService = (0, t.f3M)(J.U8), this.navigation = (0, t.f3M)(p.YD), this.vm$ = this.select(e => ({
                            labels: e.labels,
                            showQr: e.showQr,
                            arLink: e.arLink
                        }))
                    }
                    initialize(e, o) {
                        if(!e.id) return void o.close();
                        const r = !this.deviceService.isAndroid && !this.deviceService.isIOS,
                            g = this.navigation.getArLink({
                                productId: e?.id,
                                variantId: e?.selectedSize?.id
                            });
                        (0, J.Cv)(g), this.patchState({
                            labels: Si(r),
                            arLink: g,
                            showQr: r,
                            dialogRef: o,
                            product: e
                        })
                    }
                    handleArAction() {
                        const {
                            dialogRef: e
                        } = this.get();
                        this.deviceService.isMobile ? this.goToAr() : e?.close()
                    }
                    goToAr() {
                        const {
                            product: e
                        } = this.get();
                        e?.id && this.navigation.goToAr({
                            productId: e?.id,
                            variantId: e?.selectedSize?.id
                        })
                    }
                }
                return n.\u0275fac = function(e) {
                    return new(e || n)
                }, n.\u0275prov = t.Yz7({
                    token: n,
                    factory: n.\u0275fac
                }), n
            })();

            function Bi(n, l) {
                if(1 & n && (t.TgZ(0, "div"), t._UZ(1, "qrcode", 6), t.qZA()), 2 & n) {
                    const e = t.oxw().ngIf;
                    t.xp6(1), t.Q6J("qrdata", e.arLink)("width", 130)("errorCorrectionLevel", "M")
                }
            }

            function Mi(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.ynx(0), t.TgZ(1, "div", 1), t._uU(2), t.ALo(3, "flTranslate"), t.qZA(), t.TgZ(4, "section", 2)(5, "p"), t._uU(6), t.ALo(7, "flTranslate"), t.qZA(), t.YNc(8, Bi, 2, 3, "div", 0), t.qZA(), t.TgZ(9, "div", 3)(10, "button", 4), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw();
                        return t.KtG(r.cdPreview())
                    }), t._uU(11), t.ALo(12, "flTranslate"), t.qZA(), t.TgZ(13, "button", 5), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw();
                        return t.KtG(r.handleArAction())
                    }), t._uU(14), t.ALo(15, "flTranslate"), t.qZA()(), t.BQk()
                }
                if(2 & n) {
                    const e = l.ngIf;
                    t.xp6(2), t.hij(" ", t.lcZ(3, 5, null == e.labels ? null : e.labels.title), " "), t.xp6(4), t.Oqu(t.lcZ(7, 7, null == e.labels ? null : e.labels.text)), t.xp6(2), t.Q6J("ngIf", e.showQr && e.arLink), t.xp6(3), t.hij(" ", t.lcZ(12, 9, "arDialog.preview"), " "), t.xp6(3), t.hij(" ", t.lcZ(15, 11, null == e.labels ? null : e.labels.button), " ")
                }
            }
            let ni = (() => {
                class n {
                    constructor(e, o, r) {
                        this.dialogStore = e, this.dialogRef = o, this.data = r, this.vm$ = this.dialogStore.vm$, this.product = r.product, this.setupDialog()
                    }
                    handleArAction() {
                        this.dialogStore.handleArAction()
                    }
                    setupDialog() {
                        this.dialogStore.initialize(this.product, this.dialogRef)
                    }
                    cdPreview() {
                        this.dialogStore.goToAr()
                    }
                }
                return n.\u0275fac = function(e) {
                    return new(e || n)(t.Y36(oi), t.Y36(gt.JH), t.Y36(p.wM))
                }, n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-ar-dialog"]
                    ],
                    standalone: !0,
                    features: [t._Bn([oi, N.J.registerProviders()]), t.jDz],
                    decls: 2,
                    vars: 3,
                    consts: [
                        [4, "ngIf"],
                        ["CrownCrete-dialog-header", ""],
                        ["CrownCrete-dialog-content", ""],
                        ["CrownCrete-dialog-actions", ""],
                        [1, "CrownCrete-button", "outline", "CrownCrete-w100prc", 3, "click"],
                        [1, "CrownCrete-button", "primary", "CrownCrete-w100prc", 3, "click"],
                        [3, "qrdata", "width", "errorCorrectionLevel"]
                    ],
                    template: function(e, o) {
                        1 & e && (t.YNc(0, Mi, 16, 13, "ng-container", 0), t.ALo(1, "async")), 2 & e && t.Q6J("ngIf", t.lcZ(1, 1, o.vm$))
                    },
                    dependencies: [u.ez, u.O5, u.Ov, qe, ii, at.N, rt.X, ie.A, gt.wC, xt.VA, xt.hE, ti.D],
                    styles: ["[_nghost-%COMP%]{background-color:var(--fl-bg);border-radius:var(--fl-border-radius);max-width:300px}[_nghost-%COMP%]   .CrownCrete-dialog-content[_ngcontent-%COMP%]{min-width:252px}[_nghost-%COMP%]   .CrownCrete-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]   .CrownCrete-dialog-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;justify-content:center}[_nghost-%COMP%]   .CrownCrete-button.outline[_ngcontent-%COMP%]{margin-bottom:var(--fl-y-padding)}@media (max-width: 1023px){[_nghost-%COMP%]   .CrownCrete-button.outline[_ngcontent-%COMP%]{display:none}}"],
                    changeDetection: 0
                }), n
            })();
            var Rt = (() => {
                return (n = Rt || (Rt = {})).base = "base", n.epoxy = "epoxy", Rt;
                var n
            })();
            let we = (() => {
                class n extends f.m1 {
                    constructor() {
                        super({
                            showAr: !1,
                            showPictureMenu: !1,
                            showToast: !0,
                            showDetails: !0,
                            detailsType: Rt.base
                        }), this.arProvider = (0, t.f3M)(p.Jh), this.eventsProvider = (0, t.f3M)(Ct.QT), this.configProvider = (0, t.f3M)(p.FI), this.dialog = (0, t.f3M)(p._R), this.navigator = (0, t.f3M)(p.YD), this.productsProvider = (0, t.f3M)(p.IA), this.roomsProvider = (0, t.f3M)(p.XZ), this.roomStore = (0, t.f3M)(Bt), this.vm$ = this.select(e => ({
                            activeProduct: e.activeProduct,
                            activeChipEpoxy: e.activeChipEpoxy,
                            arLink: e.arLink,
                            showAr: e.showAr,
                            vendorUrl: e.vendorUrl || "",
                            customButton: this.roomStore.customButton,
                            showProductData: !!e.activeProduct && !!e.hasAnyHotpoint,
                            isLiked: !!e.isLiked,
                            showPictureMenu: e.showPictureMenu,
                            productName: this.resolveProductName(),
                            showToast: !!e.showToast,
                            zoomOn: e.zoomOn,
                            showBuyNowButton: this.checkShowBuyNowButton(e.activeProduct, e.transformation),
                            quoteButtonVisible: e.activeProduct && e.quoteButton?.visible,
                            addToCartButton: e.addToCartButton,
                            quoteButton: e.quoteButton,
                            showDetails: e.showDetails,
                            type: e.detailsType,
                            detailTypes: Rt,
                            trackObject: {
                                sku: e.activeProduct?.sku || "",
                                room_name: this.roomStore.room?.name || "",
                                product_name: e.activeProduct?.name?.default || ""
                            }
                        })), this.showLayout$ = this.roomsProvider.showLayout$, this.activeRoom$ = this.roomsProvider.activeRoom$, this.isDynamicMode$ = this.roomsProvider.selectIsDynamicMode$, this.logo$ = this.configProvider.companyLogo$, this.barButtons$ = this.roomStore.barButtons$, this.useBonaTranslations$ = this.configProvider.companyConfig$.pipe((0, S.U)(e => "bona" === e.company?.dynamicFeatures?.translationScope)), this.bonaCtaButton$ = this.configProvider.companyConfig$.pipe((0, S.U)(e => e.company?.dynamicFeatures?.roomsCtaButton)), this.showHeader$ = this.configProvider.companyConfig$.pipe((0, S.U)(e => !e?.company?.hideHeader)), this.hideFloatingDetails$ = this.configProvider.companyConfig$.pipe((0, S.U)(e => e.company?.dynamicFeatures?.hideProductDetails)), this.showCrownCreteText$ = this.configProvider.companyConfig$.pipe((0, S.U)(e => e?.company?.CrownCreteIoLinkEnable)), this.productFields$ = this.configProvider.companyConfig$.pipe((0, S.U)(e => [...e?.company?.selectedProductFields?.length ? e?.company?.selectedProductFields : []].sort((o, r) => (L.SE[o] ?? Number.MAX_SAFE_INTEGER) - (L.SE[r] ?? Number.MAX_SAFE_INTEGER)))), this.customFilters$ = this.productsProvider.productsBaseData$.pipe((0, S.U)(e => e.filterDefinitions?.filter(o => !!o.optionsTranslations))), this.isMobileLandscape$ = this.roomStore.isMobileLandscape$, this.supportsAR$ = this.configProvider.companyConfig$.pipe((0, S.U)(e => !!e.company?.supportsAR)), this.showEpoxyCatalogs$ = this.configProvider.companyConfig$.pipe((0, S.U)(e => e.company?.supportsBaseColorsInCatalogsVisibility)), this.selectedSize$ = this.productsProvider.transformations$.pipe((0, S.U)(e => e.options)), this.showPrice$ = this.configProvider.companyConfig$.pipe((0, S.U)(e => !!e?.company?.showProductPrice)), this.connectToProduct()
                    }
                    checkShowBuyNowButton(e, o) {
                        if(!e || !o) return !1;
                        const {
                            addToCartButton: r
                        } = this.get(), g = e.tileOptions?.find(O => O.id === o.options?.id);
                        return !!r && r.visible && !!g && !!g.url
                    }
                    goToHome() {
                        this.navigator.goToRooms()
                    }
                    openProductsAr() {
                        const e = this.get()?.activeProduct;
                        e?.id && this.navigator.goToAr({
                            productId: e?.id
                        })
                    }
                    showArDialog() {
                        const e = this.get()?.activeProduct;
                        !e?.id || this.dialog.open(ni, {
                            backdropClass: Z.bj.darkOverlay,
                            panelClass: Z.bj.centerOverlay,
                            data: {
                                product: e
                            }
                        }).afterClosed().pipe((0, P.R)(this.destroy$), (0, I.b)(() => this.patchState({
                            showPictureMenu: !1
                        }))).subscribe()
                    }
                    buyNow() {
                        const {
                            transformation: e
                        } = this.get(), o = e?.options?.url || "";
                        o && this.navigator.goToUrl(o)
                    }
                    setToastStatus(e = !1) {
                        this.patchState({
                            showToast: e
                        })
                    }
                    toggleFav() {
                        const {
                            activeProduct: e
                        } = this.get();
                        e && this.productsProvider.toggleFavouriteProduct(e)
                    }
                    removeProduct() {
                        const {
                            activeProduct: e
                        } = this.get();
                        this.productsProvider.clearProduct(e), this.productsProvider.updateRotation(0), this.eventsProvider.send(new p.Q5(!0))
                    }
                    removeEpoxy() {
                        this.configProvider.companyConfig$.pipe((0, F.q)(1), (0, I.b)(e => {
                            const {
                                activeProduct: o,
                                activeChipEpoxy: r
                            } = this.get();
                            this.productsProvider.clearEpoxyChip(r), e.company?.supportsBaseColorsInCatalogsVisibility && this.productsProvider.clearEpoxyColor(o)
                        })).subscribe()
                    }
                    openProductSettings() {
                        this.eventsProvider.send(new p.Q5)
                    }
                    changeRugSize(e) {
                        this.productsProvider.updateSize(e)
                    }
                    customBtnClick(e) {
                        const o = e?.metadata?.url;
                        !o || this.navigator.goToUrl(o)
                    }
                    openSampleUrl(e) {
                        this.roomStore.openSampleUrl(e)
                    }
                    openQuote() {
                        const e = this.get().quoteButton;
                        !e || this.dialog.open(Jt.c, {
                            backdropClass: Z.bj.darkOverlay,
                            panelClass: Z.bj.centerOverlay,
                            containerClass: Z.bj.stretchWrapper,
                            data: {
                                metadata: e?.metadata
                            }
                        })
                    }
                    changeShowDetails(e) {
                        this.patchState({
                            showDetails: e
                        })
                    }
                    openVendorUrl() {
                        const e = this.get().vendorUrl;
                        !e || this.navigator.goToUrl(e)
                    }
                    connectToProduct() {
                        (0, m.T)(this.fetchActiveProduct(), this.fetchEpoxyProduct(), this.connectToZoom(), this.hasAnyHotpointSelected()).pipe((0, P.R)(this.destroy$)).subscribe()
                    }
                    connectToZoom() {
                        return this.roomsProvider.selectZoom$.pipe((0, H.x)(), (0, S.U)(e => {
                            this.patchState({
                                zoomOn: e
                            })
                        }))
                    }
                    fetchEpoxyProduct() {
                        return this.configProvider.companyConfig$.pipe((0, $.h)(e => !!e.epoxyView), (0, F.q)(1), (0, M.w)(() => (this.patchState({
                            detailsType: Rt.epoxy
                        }), (0, Q.a)([this.productsProvider.activeEpoxyProducts$, this.productsProvider.transformations$, this.roomStore.customButtons$]))), (0, S.U)(([e, o, r]) => {
                            this.patchState({
                                activeProduct: e?.color,
                                activeChipEpoxy: e?.chip,
                                transformation: o,
                                addToCartButton: r?.find(g => g.type === p.Lr.addToCart),
                                quoteButton: r?.find(g => g.type === p.Lr.quote)
                            })
                        }))
                    }
                    fetchActiveProduct() {
                        return this.configProvider.companyConfig$.pipe((0, $.h)(e => !e.epoxyView), (0, F.q)(1), (0, M.w)(e => (this.patchState({
                            detailsType: Rt.base,
                            vendorUrl: e.company?.vendorUrl
                        }), (0, Q.a)([this.productsProvider.activeProduct$, this.productsProvider.likedProductsMap$, this.productsProvider.transformations$, this.roomStore.customButtons$]).pipe((0, P.R)(this.destroy$), (0, I.b)(([o, r, g, O]) => {
                            this.patchState({
                                activeProduct: o,
                                arLink: o?.isRug ? this.navigator.getArLink({
                                    productId: o.id
                                }) : "",
                                showAr: this.arProvider.arAvailable(o),
                                isLiked: !!o && !!r?.[o.id],
                                transformation: g,
                                addToCartButton: O?.find(R => R.type === p.Lr.addToCart),
                                quoteButton: O?.find(R => R.type === p.Lr.quote)
                            })
                        }), (0, S.U)(() => {})))))
                    }
                    hasAnyHotpointSelected() {
                        return this.productsProvider.hotpointProductMap$.pipe((0, S.U)(e => {
                            this.patchState({
                                hasAnyHotpoint: Object.values(e || {}).some(o => o.selected)
                            })
                        }), (0, S.U)(() => {}))
                    }
                    resolveProductName() {
                        const {
                            activeProduct: e,
                            detailsType: o,
                            activeChipEpoxy: r
                        } = this.get();
                        return o === Rt.epoxy ? `${e?.name?.default||""} ${r?.name?.default||""}`.trim() : e?.name?.default || "-"
                    }
                }
                return n.\u0275fac = function(e) {
                    return new(e || n)
                }, n.\u0275prov = t.Yz7({
                    token: n,
                    factory: n.\u0275fac
                }), n
            })();
            var Ei = c(1062),
                ki = c(1945);
            const Ai = ["sizesButton"],
                Di = ["sizesDiv"],
                Hi = ["descriptionEl"];

            function Ri(n, l) {
                if(1 & n && (t.TgZ(0, "div", 24)(1, "p", 25), t._uU(2), t.ALo(3, "async"), t.qZA(), t.TgZ(4, "p", 26), t._uU(5), t.ALo(6, "async"), t.qZA()()), 2 & n) {
                    const e = t.oxw().$implicit,
                        o = t.oxw(2).ngrxLet,
                        r = t.oxw();
                    t.xp6(2), t.Oqu(t.lcZ(3, 2, r.getFieldName(e))), t.xp6(3), t.hij(" ", t.lcZ(6, 4, r.getFieldValue(e, o.data.activeProduct)), " ")
                }
            }

            function Zi(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(5);
                        return t.KtG(r.isExpanded = !r.isExpanded)
                    }), t._uU(1), t.ALo(2, "flTranslate"), t.qZA()
                }
                if(2 & n) {
                    const e = t.oxw(5);
                    t.xp6(1), t.hij(" ", t.lcZ(2, 1, e.fieldTranslationKey + (e.isExpanded ? "showLess" : "showMore")), " ")
                }
            }

            function Fi(n, l) {
                if(1 & n && (t.TgZ(0, "div", 27)(1, "p", 25), t._uU(2), t.ALo(3, "async"), t.qZA(), t.TgZ(4, "p", 26, 28), t._uU(6), t.ALo(7, "async"), t.qZA(), t.YNc(8, Zi, 3, 3, "button", 29), t.qZA()), 2 & n) {
                    const e = t.oxw().$implicit,
                        o = t.oxw(2).ngrxLet,
                        r = t.oxw();
                    t.ekj("expanded", r.isExpanded), t.xp6(2), t.Oqu(t.lcZ(3, 5, r.getFieldName(e))), t.xp6(4), t.hij(" ", t.lcZ(7, 7, r.getFieldValue(e, o.data.activeProduct)), " "), t.xp6(2), t.Q6J("ngIf", r.showMoreBtnVisible())
                }
            }

            function Vi(n, l) {
                if(1 & n && (t.ynx(0), t.YNc(1, Ri, 7, 6, "div", 22), t.YNc(2, Fi, 9, 9, "div", 23), t.BQk()), 2 & n) {
                    const e = l.$implicit,
                        o = t.oxw(3);
                    t.xp6(1), t.Q6J("ngIf", !o.isDescription(e)), t.xp6(1), t.Q6J("ngIf", o.isDescription(e))
                }
            }

            function Ui(n, l) {
                if(1 & n && (t.TgZ(0, "div", 20), t.YNc(1, Vi, 3, 2, "ng-container", 21), t.qZA()), 2 & n) {
                    const e = t.oxw().ngrxLet,
                        o = t.oxw();
                    t.xp6(1), t.Q6J("ngForOf", e.productFields)("ngForTrackBy", o.trackByField)
                }
            }

            function Ni(n, l) {
                if(1 & n && t._UZ(0, "picture", 31), 2 & n) {
                    const e = t.oxw().ngrxLet;
                    t.Q6J("imgSet", e.data.activeProduct.image || void 0)
                }
            }

            function Ii(n, l) {
                if(1 & n && t._UZ(0, "div", 32), 2 & n) {
                    const e = t.oxw().ngrxLet,
                        o = t.oxw();
                    t.Q6J("ngStyle", o.getBackgroundColor(e.data.activeProduct.rgbaColor))
                }
            }

            function $i(n, l) {
                if(1 & n && (t.TgZ(0, "div", 33), t._uU(1), t.qZA()), 2 & n) {
                    const e = t.oxw().ngrxLet,
                        o = t.oxw();
                    t.xp6(1), t.hij(" ", o.getPrice(e.selectedSize, !1), " ")
                }
            }
            const zi = function(n, l, e, o) {
                return {
                    product_name: n,
                    sku: l,
                    room_name: e,
                    liked: o
                }
            };

            function Ji(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 34), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.toggleFav())
                    }), t._UZ(1, "CrownCrete-icon", 35), t._uU(2), t.ALo(3, "flTranslate"), t.qZA()
                }
                if(2 & n) {
                    const e = t.oxw().ngrxLet,
                        o = t.oxw();
                    t.ekj("fav", e.data.isLiked), t.Q6J("CrownCreteTrackClick", o.trackingEvents.addToFav)("props", t.l5B(7, zi, null == e.data.activeProduct || null == e.data.activeProduct.name ? null : e.data.activeProduct.name.default, null == e.data.activeProduct ? null : e.data.activeProduct.sku, null == e.activeRoom ? null : e.activeRoom.name, e.data.isLiked)), t.xp6(2), t.hij(" ", t.lcZ(3, 5, "floatingBar.addToFav"), " ")
                }
            }

            function Qi(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 36), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.removeProduct())
                    }), t._UZ(1, "CrownCrete-icon", 37), t._uU(2), t.ALo(3, "flTranslate"), t.qZA()
                }
                2 & n && (t.xp6(2), t.hij(" ", t.lcZ(3, 1, "deleteBtn"), " "))
            }

            function ji(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 38), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.openProductSettings())
                    }), t._UZ(1, "CrownCrete-icon", 39), t._uU(2), t.ALo(3, "flTranslate"), t.qZA()
                }
                2 & n && (t.xp6(2), t.hij(" ", t.lcZ(3, 1, "floatingBar.productSettings"), " "))
            }
            const Yi = function(n) {
                return {
                    rotated: n
                }
            };

            function qi(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 40, 41), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.showRugSizes = !r.showRugSizes)
                    }), t._uU(2), t.ALo(3, "sizeMapping"), t._UZ(4, "CrownCrete-icon", 42), t.qZA()
                }
                if(2 & n) {
                    const e = t.oxw().ngrxLet,
                        o = t.oxw();
                    t.xp6(2), t.hij(" ", t.lcZ(3, 2, e.selectedSize), " "), t.xp6(2), t.Q6J("ngClass", t.VKq(4, Yi, o.showRugSizes))
                }
            }

            function Gi(n, l) {
                if(1 & n && (t.TgZ(0, "span"), t._uU(1), t.ALo(2, "sizeMapping"), t.qZA()), 2 & n) {
                    const e = t.oxw().$implicit;
                    t.xp6(1), t.Oqu(t.lcZ(2, 1, e))
                }
            }

            function Ki(n, l) {
                if(1 & n && (t.TgZ(0, "span"), t._uU(1), t.ALo(2, "sizeMapping"), t.qZA()), 2 & n) {
                    const e = t.oxw().$implicit,
                        o = t.oxw(3);
                    t.xp6(1), t.AsE(" ", t.lcZ(2, 2, e), "", o.getPrice(e, !0), " ")
                }
            }

            function Xi(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "CrownCrete-radio", 46), t.NdJ("click", function() {
                        const g = t.CHM(e).$implicit,
                            O = t.oxw(3);
                        return t.KtG(O.changeRugSize(g))
                    }), t.YNc(1, Gi, 3, 3, "span", 47), t.YNc(2, Ki, 3, 4, "span", 47), t.qZA()
                }
                if(2 & n) {
                    const e = l.$implicit,
                        o = t.oxw(2).ngrxLet,
                        r = t.oxw();
                    t.ekj("checked", e.id === (null == o.selectedSize ? null : o.selectedSize.id)), t.Q6J("value", e)("checked", e.id === (null == o.selectedSize ? null : o.selectedSize.id)), t.xp6(1), t.Q6J("ngIf", !o.showPrice || !r.showPrice(e)), t.xp6(1), t.Q6J("ngIf", o.showPrice && r.showPrice(e))
                }
            }
            const Wi = function(n) {
                return {
                    opened: n
                }
            };

            function to(n, l) {
                if(1 & n && (t.TgZ(0, "div", 43, 44), t.YNc(2, Xi, 3, 6, "CrownCrete-radio", 45), t.qZA()), 2 & n) {
                    const e = t.oxw().ngrxLet,
                        o = t.oxw();
                    t.Q6J("ngClass", t.VKq(3, Wi, o.showRugSizes)), t.xp6(2), t.Q6J("ngForOf", null == e.data.activeProduct ? null : e.data.activeProduct.tileOptions)("ngForTrackBy", o.trackBySize)
                }
            }

            function eo(n, l) {
                1 & n && t._UZ(0, "CrownCrete-icon", 50)
            }

            function io(n, l) {
                if(1 & n && (t.ynx(0), t._uU(1), t.BQk()), 2 & n) {
                    const e = t.oxw(2).ngrxLet;
                    t.xp6(1), t.hij(" ", null == e.data.addToCartButton ? null : e.data.addToCartButton.label, " ")
                }
            }

            function oo(n, l) {
                1 & n && (t.ynx(0), t._uU(1), t.ALo(2, "flTranslate"), t.BQk()), 2 & n && (t.xp6(1), t.hij(" ", t.lcZ(2, 1, "floatingBar.buyNow"), " "))
            }
            const no = function(n) {
                return {
                    button_type: n
                }
            };

            function so(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 48), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.buyNow())
                    }), t.YNc(1, eo, 1, 0, "CrownCrete-icon", 49), t.YNc(2, io, 2, 1, "ng-container", 47), t.YNc(3, oo, 3, 3, "ng-container", 47), t.qZA()
                }
                if(2 & n) {
                    const e = t.oxw().ngrxLet,
                        o = t.oxw();
                    t.Q6J("CrownCreteTrackClick", o.trackingEvents.buttonClick)("props", t.VKq(5, no, o.trackingEvents.addToCart)), t.xp6(1), t.Q6J("ngIf", null == e.data.addToCartButton || null == e.data.addToCartButton.metadata ? null : e.data.addToCartButton.metadata.hasIcon), t.xp6(1), t.Q6J("ngIf", null == e.data.addToCartButton || null == e.data.addToCartButton.metadata ? null : e.data.addToCartButton.metadata.hasCustomText), t.xp6(1), t.Q6J("ngIf", !(null != e.data.addToCartButton && null != e.data.addToCartButton.metadata && e.data.addToCartButton.metadata.hasCustomText))
                }
            }

            function ro(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 58), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(3);
                        return t.KtG(r.openProductsAr())
                    }), t._uU(1), t.ALo(2, "flTranslate"), t.qZA()
                }
                2 & n && (t.xp6(1), t.hij(" ", t.lcZ(2, 1, "floatingBar.arButton"), " "))
            }

            function ao(n, l) {
                if(1 & n && (t.TgZ(0, "div", 51)(1, "div", 52), t._UZ(2, "qrcode", 53), t.qZA(), t.TgZ(3, "div", 54)(4, "p", 55), t._uU(5), t.ALo(6, "flTranslate"), t.qZA(), t.TgZ(7, "p", 56), t._uU(8), t.ALo(9, "flTranslate"), t.qZA(), t.YNc(10, ro, 3, 3, "button", 57), t.qZA()()), 2 & n) {
                    const e = t.oxw().ngrxLet,
                        o = t.oxw();
                    t.xp6(2), t.Q6J("qrdata", e.data.arLink)("width", 120)("errorCorrectionLevel", "L"), t.xp6(3), t.hij(" ", t.lcZ(6, 6, "floatingBar.arTitle"), " "), t.xp6(3), t.hij(" ", t.lcZ(9, 8, "floatingBar.arDesc"), " "), t.xp6(2), t.Q6J("ngIf", (null == e.data.activeProduct ? null : e.data.activeProduct.type) === o.rugType)
                }
            }

            function lo(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.ynx(0), t.TgZ(1, "button", 1), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw();
                        return t.KtG(r.changeShowDetails(!1))
                    }), t._UZ(2, "CrownCrete-icon", 2), t.qZA(), t.TgZ(3, "div", 3)(4, "p", 4), t._uU(5), t.ALo(6, "flTranslate"), t.qZA(), t.TgZ(7, "p", 5), t._uU(8), t.qZA()(), t.YNc(9, Ui, 2, 2, "div", 6), t.TgZ(10, "div", 7)(11, "div", 8), t.YNc(12, Ni, 1, 1, "picture", 9), t.YNc(13, Ii, 1, 1, "div", 10), t.YNc(14, $i, 2, 1, "div", 11), t.qZA(), t.TgZ(15, "div", 12), t.YNc(16, Ji, 4, 12, "button", 13), t.YNc(17, Qi, 4, 3, "button", 14), t.YNc(18, ji, 4, 3, "button", 15), t.YNc(19, qi, 5, 6, "button", 16), t.YNc(20, to, 3, 5, "div", 17), t.YNc(21, so, 4, 7, "button", 18), t.qZA()(), t.YNc(22, ao, 11, 10, "div", 19), t.ALo(23, "async"), t.BQk()
                }
                if(2 & n) {
                    const e = l.ngrxLet,
                        o = t.oxw();
                    t.xp6(5), t.hij(" ", t.lcZ(6, 13, "floatingBar.selectedProduct"), ": "), t.xp6(3), t.hij(" ", e.data.productName, " "), t.xp6(1), t.Q6J("ngIf", null == e.productFields ? null : e.productFields.length), t.xp6(3), t.Q6J("ngIf", !!e.data.activeProduct.image || !e.data.activeProduct.image && !e.data.activeProduct.rgbaColor), t.xp6(1), t.Q6J("ngIf", !!e.data.activeProduct.rgbaColor && !e.data.activeProduct.image), t.xp6(1), t.Q6J("ngIf", e.showPrice && o.showPrice(e.selectedSize)), t.xp6(2), t.Q6J("ngIf", !e.isDynamicMode), t.xp6(1), t.Q6J("ngIf", !!e.data.activeProduct), t.xp6(1), t.Q6J("ngIf", (null == e.data.activeProduct ? null : e.data.activeProduct.type) !== o.rugType), t.xp6(1), t.Q6J("ngIf", (null == e.data.activeProduct ? null : e.data.activeProduct.type) === o.rugType && !!e.selectedSize), t.xp6(1), t.Q6J("ngIf", !(null == e.data.activeProduct || null == e.data.activeProduct.tileOptions || !e.data.activeProduct.tileOptions.length)), t.xp6(1), t.Q6J("ngIf", e.data.showBuyNowButton && !e.isDynamicMode), t.xp6(1), t.Q6J("ngIf", e.data.showAr && e.data.arLink && t.lcZ(23, 15, o.supportsAR$))
                }
            }
            const co = function(n, l, e, o, r, g, O) {
                return {
                    data: n,
                    activeRoom: l,
                    productFields: e,
                    supportsAR: o,
                    isDynamicMode: r,
                    selectedSize: g,
                    showPrice: O
                }
            };
            let uo = (() => {
                class n {
                    constructor() {
                        this.store = (0, t.f3M)(we), this.translationsProvider = (0, t.f3M)(Z.pp), this.cdr = (0, t.f3M)(t.sBO), this.vm$ = this.store.vm$, this.activeRoom$ = this.store.activeRoom$, this.productFields$ = this.store.productFields$, this.customFilters$ = this.store.customFilters$, this.isDynamicMode$ = this.store.isDynamicMode$, this.supportsAR$ = this.store.supportsAR$, this.selectedSize$ = this.store.selectedSize$, this.showPrice$ = this.store.showPrice$, this.trackingEvents = p.y8, this.rugType = L.kv.rug, this.fieldTranslationKey = "room.productDetails.", this.emptyValue = this.translationsProvider.translate(this.fieldTranslationKey + "emptyValue"), this.unknownName = this.translationsProvider.translate(this.fieldTranslationKey + "unknownName"), this.lang = this.translationsProvider.currentLang, this.showRugSizes = !1, this.isExpanded = !1, this.trackByField = (e, o) => o, this.trackBySize = (e, o) => o
                    }
                    onDocumentClick(e) {
                        const o = this.sizesButtonRef && this.sizesButtonRef.nativeElement.contains(e.target),
                            r = this.sizesDivRef && this.sizesDivRef.nativeElement.contains(e.target);
                        !o && !r && (this.showRugSizes = !1)
                    }
                    ngAfterViewInit() {
                        this.cdr.detectChanges()
                    }
                    changeShowDetails(e) {
                        this.store.changeShowDetails(e)
                    }
                    isDescription(e) {
                        return e === L.$c.description
                    }
                    showMoreBtnVisible() {
                        if(!this.descriptionEl) return !1;
                        const e = this.descriptionEl?.nativeElement.scrollHeight;
                        return e > 3 * parseFloat(getComputedStyle(this.descriptionEl?.nativeElement).lineHeight)
                    }
                    getFieldName(e) {
                        return Object.values(L.$c).includes(e) ? (0, B.of)(this.translationsProvider.translate(this.fieldTranslationKey + e)) : this.customFilters$.pipe((0, F.q)(1), (0, S.U)(o => {
                            const r = o?.find(g => g.key.label === e);
                            return r?.key?.[this.lang] || r?.key?.default || this.unknownName
                        }))
                    }
                    getFieldValue(e, o) {
                        return Object.values(L.$c).includes(e) ? this.getStandardFieldValue(e, o) : this.getCustomFieldValue(e, o)
                    }
                    getStandardFieldValue(e, o) {
                        if(!o) return (0, B.of)("");
                        switch(e) {
                            case L.$c.description:
                                return (0, B.of)(o.description?.[this.lang] || o.description?.default || this.emptyValue);
                            case L.$c.type:
                                return (0, B.of)(this.translationsProvider.translate("room.filter.label_product_type." + o.type) || this.emptyValue);
                            default:
                                return (0, B.of)(o[e] ? o[e] : this.emptyValue)
                        }
                    }
                    getCustomFieldValue(e, o) {
                        return this.customFilters$.pipe((0, F.q)(1), (0, S.U)(r => {
                            const g = r?.find(O => O.key.label === e);
                            if(g) {
                                const O = o?.custom?.[g.key.label][0];
                                if(O) return g.optionsTranslations?.[O]?.[this.lang] || g.optionsTranslations?.[O]?.default || this.emptyValue
                            }
                            return this.emptyValue
                        }))
                    }
                    getBackgroundColor(e) {
                        return {
                            "background-color": `rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`
                        }
                    }
                    showPrice(e) {
                        const o = e?.prices.find(r => r.isDefault);
                        return !!e?.prices?.length && !!o?.currency
                    }
                    getPrice(e, o) {
                        if(!e || !e.prices) return "";
                        const r = e.prices.find(g => g.isDefault);
                        return o ? ` - ${r?.price??e.prices?.[0].price} ${r?.currency??e.prices?.[0].currency}` : `${r?.price??e.prices?.[0].price} ${r?.currency??e.prices?.[0].currency}`
                    }
                    openQuote() {
                        this.store.openQuote()
                    }
                    toggleFav() {
                        this.store.toggleFav()
                    }
                    removeProduct() {
                        this.store.removeProduct()
                    }
                    openProductSettings() {
                        this.store.openProductSettings()
                    }
                    changeRugSize(e) {
                        this.store.changeRugSize(e), this.showRugSizes = !1
                    }
                    openProductsAr() {
                        this.store.openProductsAr()
                    }
                    showArDialog() {
                        this.store.showArDialog()
                    }
                    buyNow() {
                        this.store.buyNow()
                    }
                }
                return n.\u0275fac = function(e) {
                    return new(e || n)
                }, n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-base-details"]
                    ],
                    viewQuery: function(e, o) {
                        if(1 & e && (t.Gf(Ai, 5, t.SBq), t.Gf(Di, 5, t.SBq), t.Gf(Hi, 5, t.SBq)), 2 & e) {
                            let r;
                            t.iGM(r = t.CRH()) && (o.sizesButtonRef = r.first), t.iGM(r = t.CRH()) && (o.sizesDivRef = r.first), t.iGM(r = t.CRH()) && (o.descriptionEl = r.first)
                        }
                    },
                    hostAttrs: [1, "CrownCrete-base-bar-details"],
                    hostBindings: function(e, o) {
                        1 & e && t.NdJ("click", function(g) {
                            return o.onDocumentClick(g)
                        }, !1, t.evT)
                    },
                    standalone: !0,
                    features: [t.jDz],
                    decls: 1,
                    vars: 9,
                    consts: [
                        [4, "ngrxLet"],
                        ["CrownCrete-icon-button", "", 1, "small", "close-btn", 3, "click"],
                        ["name", "fl_close"],
                        [1, "selected-product-labels"],
                        [1, "CrownCrete-caption", "CrownCrete-semi-regular"],
                        [1, "fl-mt-8", "CrownCrete-bold"],
                        ["class", "selected-product-additional-info", 4, "ngIf"],
                        [1, "split-view"],
                        [1, "product-img-preview"],
                        ["CrownCrete-picture", "", "class", "contain aspect-ratio-1-1", 3, "imgSet", 4, "ngIf"],
                        ["class", "product-rgba-color", 3, "ngStyle", 4, "ngIf"],
                        ["class", "rug-price-tag", 4, "ngIf"],
                        [1, "product-full-actions"],
                        ["CrownCrete-button", "", "class", "outline reverse fav-btn small", 3, "CrownCreteTrackClick", "props", "fav", "click", 4, "ngIf"],
                        ["CrownCrete-button", "", "class", "outline reverse remove small", 3, "click", 4, "ngIf"],
                        ["CrownCrete-button", "", "class", "outline reverse small", 3, "click", 4, "ngIf"],
                        ["CrownCrete-button", "", "class", "outline reverse small select-btn", 3, "click", 4, "ngIf"],
                        ["CrownCrete-radio-group", "", "class", "select", 3, "ngClass", 4, "ngIf"],
                        ["CrownCrete-button", "", "class", "primary reverse small", 3, "CrownCreteTrackClick", "props", "click", 4, "ngIf"],
                        ["class", "split-view border", 4, "ngIf"],
                        [1, "selected-product-additional-info"],
                        [4, "ngFor", "ngForOf", "ngForTrackBy"],
                        ["class", "additional-info-element", 4, "ngIf"],
                        ["class", "additional-info-element description", 3, "expanded", 4, "ngIf"],
                        [1, "additional-info-element"],
                        [1, "additional-info-header"],
                        [1, "additional-info-value"],
                        [1, "additional-info-element", "description"],
                        ["descriptionEl", ""],
                        ["class", "show-more-btn", 3, "click", 4, "ngIf"],
                        [1, "show-more-btn", 3, "click"],
                        ["CrownCrete-picture", "", 1, "contain", "aspect-ratio-1-1", 3, "imgSet"],
                        [1, "product-rgba-color", 3, "ngStyle"],
                        [1, "rug-price-tag"],
                        ["CrownCrete-button", "", 1, "outline", "reverse", "fav-btn", "small", 3, "CrownCreteTrackClick", "props", "click"],
                        ["name", "fl_heart_o"],
                        ["CrownCrete-button", "", 1, "outline", "reverse", "remove", "small", 3, "click"],
                        ["name", "fl_trash_o"],
                        ["CrownCrete-button", "", 1, "outline", "reverse", "small", 3, "click"],
                        ["name", "fl_pattern_o"],
                        ["CrownCrete-button", "", 1, "outline", "reverse", "small", "select-btn", 3, "click"],
                        ["sizesButton", ""],
                        ["name", "fl_chevron_left_s", 3, "ngClass"],
                        ["CrownCrete-radio-group", "", 1, "select", 3, "ngClass"],
                        ["sizesDiv", ""],
                        [3, "value", "checked", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"],
                        [3, "value", "checked", "click"],
                        [4, "ngIf"],
                        ["CrownCrete-button", "", 1, "primary", "reverse", "small", 3, "CrownCreteTrackClick", "props", "click"],
                        ["name", "fl_cart_o", 4, "ngIf"],
                        ["name", "fl_cart_o"],
                        [1, "split-view", "border"],
                        [1, "product-qr"],
                        [3, "qrdata", "width", "errorCorrectionLevel"],
                        [1, "product-ar-info"],
                        [1, "CrownCrete-bold", "fl-mb-8"],
                        [1, "CrownCrete-semi-regular", "CrownCrete-caption"],
                        ["CrownCrete-button", "", "class", "primary reverse small fl-mt-8", 3, "click", 4, "ngIf"],
                        ["CrownCrete-button", "", 1, "primary", "reverse", "small", "fl-mt-8", 3, "click"]
                    ],
                    template: function(e, o) {
                        1 & e && t.YNc(0, lo, 24, 17, "ng-container", 0), 2 & e && t.Q6J("ngrxLet", t.Hh0(1, co, o.vm$, o.activeRoom$, o.productFields$, o.supportsAR$, o.isDynamicMode$, o.selectedSize$, o.showPrice$))
                    },
                    dependencies: [u.ez, u.mk, u.sg, u.O5, u.PC, u.Ov, ht.K, _t.c, at.N, rt.X, je.i, he.Iu, Ei.B, ki.z, $t.X9, qe, ii, d._N, d.eJ, ee.vO],
                    styles: [".CrownCrete-base-bar-details .selected-product-labels p.CrownCrete-bold{word-break:break-all}.CrownCrete-base-bar-details .selected-product-additional-info{display:grid;grid-template-columns:1fr 1fr;grid-gap:1rem;padding:var(--fl-y-padding) 0;border-bottom:1px solid var(--fl-border-clr)}.CrownCrete-base-bar-details .selected-product-additional-info .additional-info-element{display:flex;flex-direction:column;justify-content:flex-start}.CrownCrete-base-bar-details .selected-product-additional-info .additional-info-element.description{grid-column:1/3;text-align:justify;text-justify:inter-word}.CrownCrete-base-bar-details .selected-product-additional-info .additional-info-element.description:not(.expanded) .additional-info-value{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-ms-box-orient:vertical;-webkit-line-clamp:3;line-clamp:3}.CrownCrete-base-bar-details .selected-product-additional-info .additional-info-element .additional-info-header{text-transform:uppercase;margin-bottom:4px;font-weight:600;font-size:.625rem;line-height:.75rem;color:var(--fl-fg)}.CrownCrete-base-bar-details .selected-product-additional-info .additional-info-element .additional-info-value{font-weight:500;font-size:.75rem;line-height:1rem;color:var(--fl-fg700)}.CrownCrete-base-bar-details .selected-product-additional-info .additional-info-element .show-more-btn{width:auto;align-self:start;border:0;text-decoration:underline;padding:.25rem 0;font-weight:500;font-size:.75rem;line-height:1rem;color:var(--fl-primary)}.CrownCrete-base-bar-details .split-view .product-img-preview{position:relative}.CrownCrete-base-bar-details .split-view .product-img-preview .product-rgba-color{border-radius:var(--fl-border-radius);aspect-ratio:1/1}.CrownCrete-base-bar-details .split-view .product-img-preview .rug-price-tag{position:absolute;bottom:4px;right:8px;background-color:var(--fl-overlay);color:var(--fl-bg);padding:.25rem .5rem;border-radius:var(--fl-border-radius)}.CrownCrete-base-bar-details .product-full-actions{display:flex;flex-direction:column;position:relative}.CrownCrete-base-bar-details .product-full-actions .CrownCrete-button{width:100%;margin-bottom:var(--fl-y-padding-xs)}.CrownCrete-base-bar-details .product-full-actions .CrownCrete-button:last-of-type{margin-bottom:0}.CrownCrete-base-bar-details .product-full-actions .select-btn{flex-direction:row}.CrownCrete-base-bar-details .product-full-actions .select-btn p{flex:1}.CrownCrete-base-bar-details .product-full-actions .select-btn CrownCrete-icon{margin:0;transform:rotate(-90deg);transition:transform .3s ease-in-out}.CrownCrete-base-bar-details .product-full-actions .select-btn CrownCrete-icon.rotated{transform:rotate(90deg)}.CrownCrete-base-bar-details .product-full-actions .select{position:absolute;top:calc(50% + 40px);min-width:184px;background-color:var(--fl-bg100);border:1px solid var(--fl-border-clr);border-radius:var(--fl-border-radius);overflow:hidden;opacity:0;transform:scaleY(0);transform-origin:top;transition:opacity .3s ease-in-out,transform .3s ease-in-out;box-shadow:0 6px 10px #0000004d}.CrownCrete-base-bar-details .product-full-actions .select.opened{opacity:1;transform:scaleY(1)}.CrownCrete-base-bar-details .product-full-actions .select .CrownCrete-radio{margin-bottom:0;white-space:nowrap;border-radius:0;border-bottom:1px solid var(--fl-border-clr)}.CrownCrete-base-bar-details .product-full-actions .select .CrownCrete-radio .CrownCrete-radio-mark{display:none}.CrownCrete-base-bar-details .product-full-actions .select .CrownCrete-radio.checked .CrownCrete-radio-label{font-weight:700;color:var(--fl-primary)}.CrownCrete-base-bar-details .product-full-actions .select .CrownCrete-radio:hover{background-color:var(--fl-bg200)}.CrownCrete-base-bar-details .product-full-actions .select .CrownCrete-radio:last-of-type{border-bottom:0}\n"],
                    encapsulation: 2,
                    changeDetection: 0
                }), n
            })();

            function ho(n, l) {
                if(1 & n && (t.TgZ(0, "div", 8), t._UZ(1, "picture", 9), t.qZA()), 2 & n) {
                    const e = t.oxw().ngrxLet;
                    t.xp6(1), t.Q6J("imgSet", e.data.activeChipEpoxy.image || void 0)
                }
            }

            function po(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 13), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.removeEpoxy())
                    }), t._UZ(1, "CrownCrete-icon", 14), t._uU(2), t.ALo(3, "flTranslate"), t.qZA()
                }
                2 & n && (t.xp6(2), t.hij(" ", t.lcZ(3, 1, "deleteBtn"), " "))
            }

            function fo(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.ynx(0), t.TgZ(1, "button", 1), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw();
                        return t.KtG(r.changeShowDetails(!1))
                    }), t._UZ(2, "CrownCrete-icon", 2), t.qZA(), t.TgZ(3, "div", 3)(4, "p", 4), t._uU(5), t.ALo(6, "flTranslate"), t.qZA(), t.TgZ(7, "p", 5), t._uU(8), t.qZA()(), t.TgZ(9, "div", 6)(10, "div", 7)(11, "div", 8), t._UZ(12, "picture", 9), t.qZA(), t.YNc(13, ho, 2, 1, "div", 10), t.qZA(), t.TgZ(14, "div", 11), t.YNc(15, po, 4, 3, "button", 12), t.qZA()(), t.BQk()
                }
                if(2 & n) {
                    const e = l.ngrxLet;
                    t.xp6(5), t.hij(" ", t.lcZ(6, 5, "floatingBar.selectedProduct"), ": "), t.xp6(3), t.hij(" ", e.data.productName, " "), t.xp6(4), t.Q6J("imgSet", e.data.activeProduct.image || void 0), t.xp6(1), t.Q6J("ngIf", null == e.data.activeChipEpoxy ? null : e.data.activeChipEpoxy.image), t.xp6(2), t.Q6J("ngIf", !!e.data.activeChipEpoxy || !!e.data.activeProduct && e.showEpoxyCatalogs)
                }
            }
            const go = function(n, l) {
                return {
                    data: n,
                    showEpoxyCatalogs: l
                }
            };
            let mo = (() => {
                class n {
                    constructor() {
                        this.store = (0, t.f3M)(we), this.vm$ = this.store.vm$, this.showEpoxyCatalogs$ = this.store.showEpoxyCatalogs$, this.trackingEvents = p.y8
                    }
                    changeShowDetails(e) {
                        this.store.changeShowDetails(e)
                    }
                    buyNow() {
                        this.store.buyNow()
                    }
                    openQuote() {
                        this.store.openQuote()
                    }
                    removeEpoxy() {
                        this.store.removeEpoxy()
                    }
                }
                return n.\u0275fac = function(e) {
                    return new(e || n)
                }, n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-epoxy-details"]
                    ],
                    hostAttrs: [1, "CrownCrete-epoxy-bar-details"],
                    standalone: !0,
                    features: [t.jDz],
                    decls: 1,
                    vars: 4,
                    consts: [
                        [4, "ngrxLet"],
                        ["CrownCrete-icon-button", "", 1, "small", "close-btn", 3, "click"],
                        ["name", "fl_close"],
                        [1, "selected-product-labels"],
                        [1, "CrownCrete-caption", "CrownCrete-semi-regular"],
                        [1, "fl-mt-8", "CrownCrete-bold"],
                        [1, "split-view"],
                        [1, "split-epoxy-images"],
                        [1, "product-img-preview"],
                        ["CrownCrete-picture", "", 1, "contain", "aspect-ratio-1-1", 3, "imgSet"],
                        ["class", "product-img-preview", 4, "ngIf"],
                        [1, "product-full-actions"],
                        ["CrownCrete-button", "", "class", "primary reverse remove small", 3, "click", 4, "ngIf"],
                        ["CrownCrete-button", "", 1, "primary", "reverse", "remove", "small", 3, "click"],
                        ["name", "fl_trash_o"]
                    ],
                    template: function(e, o) {
                        1 & e && t.YNc(0, fo, 16, 7, "ng-container", 0), 2 & e && t.Q6J("ngrxLet", t.WLB(1, go, o.vm$, o.showEpoxyCatalogs$))
                    },
                    dependencies: [u.ez, u.O5, ht.K, _t.c, d._N, d.eJ, at.N, rt.X, je.i],
                    styles: [".CrownCrete-epoxy-bar-details .selected-product-labels p.CrownCrete-bold{word-break:break-all}.CrownCrete-epoxy-bar-details .split-view{grid-template-columns:repeat(2,1fr)!important}.CrownCrete-epoxy-bar-details .product-full-actions{display:flex;flex-direction:column;justify-content:space-between}.CrownCrete-epoxy-bar-details .split-epoxy-images{display:flex}.CrownCrete-epoxy-bar-details .split-epoxy-images div,.CrownCrete-epoxy-bar-details .split-epoxy-images .product-img-preview{width:76px}.CrownCrete-epoxy-bar-details .split-epoxy-images .product-img-preview{margin-right:var(--fl-x-padding)}.CrownCrete-epoxy-bar-details .split-epoxy-images .product-img-preview:last-of-type{margin-right:0}.CrownCrete-epoxy-bar-details .split-epoxy-images div{height:76px;border:1px solid var(--fl-border-clr);border-radius:var(--fl-border-radius);background:url(/assets/images/no-image.svg) no-repeat;background-size:contain}\n"],
                    encapsulation: 2,
                    changeDetection: 0
                }), n
            })();

            function bo(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 13)(1, "button", 14), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.goHome())
                    }), t._UZ(2, "CrownCrete-icon", 15), t.qZA()()
                }
            }

            function vo(n, l) {
                1 & n && t._UZ(0, "CrownCrete-icon", 19)
            }

            function _o(n, l) {
                if(1 & n && (t.ynx(0), t._uU(1), t.BQk()), 2 & n) {
                    const e = t.oxw(2).ngrxLet;
                    t.xp6(1), t.hij(" ", null == e.data.addToCartButton ? null : e.data.addToCartButton.label, " ")
                }
            }

            function wo(n, l) {
                1 & n && (t.ynx(0), t._uU(1), t.ALo(2, "flTranslate"), t.BQk()), 2 & n && (t.xp6(1), t.hij(" ", t.lcZ(2, 1, "floatingBar.buyNow"), " "))
            }
            const xo = function(n) {
                return {
                    button_type: n
                }
            };

            function yo(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 16), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.buyNow())
                    }), t.YNc(1, vo, 1, 0, "CrownCrete-icon", 17), t.YNc(2, _o, 2, 1, "ng-container", 18), t.YNc(3, wo, 3, 3, "ng-container", 18), t.qZA()
                }
                if(2 & n) {
                    const e = t.oxw().ngrxLet,
                        o = t.oxw();
                    t.Q6J("CrownCreteTrackClick", o.trackingEvents.buttonClick)("props", t.VKq(5, xo, o.trackingEvents.addToCart)), t.xp6(1), t.Q6J("ngIf", null == e.data.addToCartButton || null == e.data.addToCartButton.metadata ? null : e.data.addToCartButton.metadata.hasIcon), t.xp6(1), t.Q6J("ngIf", null == e.data.addToCartButton || null == e.data.addToCartButton.metadata ? null : e.data.addToCartButton.metadata.hasCustomText), t.xp6(1), t.Q6J("ngIf", !(null != e.data.addToCartButton && null != e.data.addToCartButton.metadata && e.data.addToCartButton.metadata.hasCustomText))
                }
            }

            function Co(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 20), t._UZ(1, "CrownCrete-icon", 21), t.TgZ(2, "p", 22), t._uU(3), t.ALo(4, "flTranslate"), t.qZA(), t.TgZ(5, "button", 23), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.setToastStatus(!1))
                    }), t._UZ(6, "CrownCrete-icon", 24), t.qZA()()
                }
                2 & n && (t.xp6(3), t.hij(" ", t.lcZ(4, 1, "floatingBar.exitFullScreenToast"), " "))
            }

            function To(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 14), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.goHome())
                    }), t._UZ(1, "CrownCrete-icon", 15), t.qZA()
                }
            }

            function Oo(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "CrownCrete-powered-by", 25), t.NdJ("vendorUrlClick", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.openVendorUrl())
                    }), t.qZA()
                }
                if(2 & n) {
                    const e = t.oxw().ngrxLet;
                    t.Q6J("showLogo", e.showHeader)("showCrownCreteText", !!e.showCrownCreteText)("logoUrl", e.logo)("vendorUrl", e.data.vendorUrl)
                }
            }

            function Po(n, l) {
                if(1 & n && t._UZ(0, "CrownCrete-icon", 28), 2 & n) {
                    const e = t.oxw(2).ngrxLet;
                    t.Q6J("name", null == e.barButtons.quoteButton ? null : e.barButtons.quoteButton.icon)
                }
            }
            const Lo = function(n) {
                    return {
                        primary: n
                    }
                },
                So = function() {
                    return {
                        button_type: "quote"
                    }
                };

            function Bo(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 26), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.openQuote())
                    }), t.YNc(1, Po, 1, 1, "CrownCrete-icon", 27), t._uU(2), t.ALo(3, "flTranslate"), t.qZA()
                }
                if(2 & n) {
                    const e = t.oxw().ngrxLet,
                        o = t.oxw();
                    t.Q6J("ngClass", t.VKq(7, Lo, (e.barButtons.ctaCount || 0) >= 1))("CrownCreteTrackClick", o.trackingEvents.buttonClick)("props", t.DdM(9, So)), t.xp6(1), t.Q6J("ngIf", null == e.barButtons.quoteButton ? null : e.barButtons.quoteButton.icon), t.xp6(1), t.hij(" ", t.lcZ(3, 5, "quote.standardTitle"), " ")
                }
            }

            function Mo(n, l) {
                if(1 & n && t._UZ(0, "CrownCrete-icon", 28), 2 & n) {
                    const e = t.oxw(2).ngrxLet;
                    t.Q6J("name", (null == e.bonaCtaButton ? null : e.bonaCtaButton.icon) || "")
                }
            }

            function Eo(n, l) {
                1 & n && t._UZ(0, "CrownCrete-icon", 30)
            }

            function ko(n, l) {
                if(1 & n && (t.ynx(0), t._uU(1), t.ALo(2, "flTranslate"), t.BQk()), 2 & n) {
                    const e = t.oxw(2).ngrxLet;
                    t.xp6(1), t.hij(" ", t.lcZ(2, 1, null == e.bonaCtaButton ? null : e.bonaCtaButton.label), " ")
                }
            }

            function Ao(n, l) {
                if(1 & n && (t.ynx(0), t._uU(1), t.BQk()), 2 & n) {
                    const e = t.oxw(2).ngrxLet;
                    t.xp6(1), t.hij(" ", (null == e.barButtons.customButton ? null : e.barButtons.customButton.label) || "", " ")
                }
            }
            const si = function(n, l) {
                    return {
                        primary: n,
                        outline: l
                    }
                },
                Do = function() {
                    return {
                        button_type: "custom"
                    }
                };

            function Ho(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 26), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw().ngrxLet,
                            g = t.oxw();
                        return t.KtG(g.customBtnClick(r.barButtons.customButton))
                    }), t.YNc(1, Mo, 1, 1, "CrownCrete-icon", 27), t.YNc(2, Eo, 1, 0, "CrownCrete-icon", 29), t.YNc(3, ko, 3, 3, "ng-container", 18), t.YNc(4, Ao, 2, 1, "ng-container", 18), t.qZA()
                }
                if(2 & n) {
                    const e = t.oxw().ngrxLet,
                        o = t.oxw();
                    t.Q6J("ngClass", t.WLB(7, si, 1 === (e.barButtons.ctaCount || 0), (e.barButtons.ctaCount || 0) > 1))("CrownCreteTrackClick", o.trackingEvents.buttonClick)("props", t.DdM(10, Do)), t.xp6(1), t.Q6J("ngIf", e.useBonaTranslations), t.xp6(1), t.Q6J("ngIf", !e.useBonaTranslations), t.xp6(1), t.Q6J("ngIf", e.useBonaTranslations), t.xp6(1), t.Q6J("ngIf", !e.useBonaTranslations)
                }
            }

            function Ro(n, l) {
                if(1 & n && t._UZ(0, "CrownCrete-icon", 28), 2 & n) {
                    const e = t.oxw(2).ngrxLet;
                    t.Q6J("name", null == e.barButtons.sampleButton ? null : e.barButtons.sampleButton.icon)
                }
            }
            const Zo = function() {
                return {
                    button_type: "sample"
                }
            };

            function Fo(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 26), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw().ngrxLet,
                            g = t.oxw();
                        return t.KtG(g.sampleBtnClick(r.data.activeProduct))
                    }), t.YNc(1, Ro, 1, 1, "CrownCrete-icon", 27), t._uU(2), t.ALo(3, "flTranslate"), t.qZA()
                }
                if(2 & n) {
                    const e = t.oxw().ngrxLet,
                        o = t.oxw();
                    t.Q6J("ngClass", t.WLB(7, si, 1 === (e.barButtons.ctaCount || 0), (e.barButtons.ctaCount || 0) > 1))("CrownCreteTrackClick", o.trackingEvents.buttonClick)("props", t.DdM(10, Zo)), t.xp6(1), t.Q6J("ngIf", null == e.barButtons.sampleButton ? null : e.barButtons.sampleButton.icon), t.xp6(1), t.hij(" ", t.lcZ(3, 5, "sample.standardTitle"), " ")
                }
            }

            function Vo(n, l) {
                if(1 & n && t._UZ(0, "picture", 40), 2 & n) {
                    const e = t.oxw(2).ngrxLet;
                    t.Q6J("imgSet", e.data.activeProduct.image || void 0)
                }
            }

            function Uo(n, l) {
                if(1 & n && (t.TgZ(0, "div", 41), t._UZ(1, "picture", 40), t.qZA()), 2 & n) {
                    const e = t.oxw(2).ngrxLet;
                    t.xp6(1), t.Q6J("imgSet", e.data.activeChipEpoxy.image || void 0)
                }
            }

            function No(n, l) {
                1 & n && t._UZ(0, "CrownCrete-base-details")
            }

            function Io(n, l) {
                1 & n && t._UZ(0, "CrownCrete-epoxy-details")
            }

            function $o(n, l) {
                if(1 & n && (t.TgZ(0, "div", 42), t.YNc(1, No, 1, 0, "CrownCrete-base-details", 18), t.YNc(2, Io, 1, 0, "CrownCrete-epoxy-details", 18), t.qZA()), 2 & n) {
                    const e = t.oxw(2).ngrxLet;
                    t.xp6(1), t.Q6J("ngIf", e.data.type === e.data.detailTypes.base), t.xp6(1), t.Q6J("ngIf", e.data.type === e.data.detailTypes.epoxy)
                }
            }

            function zo(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 31)(1, "div", 32)(2, "div", 33)(3, "button", 34), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.changeShowDetails(!0))
                    }), t._UZ(4, "CrownCrete-icon", 35), t.qZA(), t.TgZ(5, "div", 36), t.YNc(6, Vo, 1, 1, "picture", 37), t.qZA(), t.YNc(7, Uo, 2, 1, "div", 38), t.qZA(), t.YNc(8, $o, 3, 2, "div", 39), t.qZA()()
                }
                if(2 & n) {
                    const e = t.oxw().ngrxLet;
                    t.ekj("hidden-ui", !e.showLayout)("show", e.data.showDetails), t.xp6(6), t.Q6J("ngIf", !(null == e.data.activeProduct || !e.data.activeProduct.image)), t.xp6(1), t.Q6J("ngIf", !(null == e.data.activeChipEpoxy || !e.data.activeChipEpoxy.image)), t.xp6(1), t.Q6J("ngIf", !e.hideFloatingDetails)
                }
            }

            function Jo(n, l) {
                if(1 & n && (t.ynx(0), t.TgZ(1, "div", 1)(2, "div", 2), t.YNc(3, bo, 3, 0, "div", 3), t.TgZ(4, "div", 4), t.YNc(5, yo, 4, 7, "button", 5), t.qZA(), t.YNc(6, Co, 7, 3, "div", 6), t.qZA()(), t.TgZ(7, "div", 7)(8, "div", 8), t.YNc(9, To, 2, 0, "button", 9), t.YNc(10, Oo, 1, 4, "CrownCrete-powered-by", 10), t.YNc(11, Bo, 4, 10, "button", 11), t.YNc(12, Ho, 5, 11, "button", 11), t.YNc(13, Fo, 4, 11, "button", 11), t.qZA(), t.YNc(14, zo, 9, 7, "div", 12), t.qZA(), t.BQk()), 2 & n) {
                    const e = l.ngrxLet;
                    t.xp6(3), t.Q6J("ngIf", !e.isDynamicMode), t.xp6(2), t.Q6J("ngIf", e.data.showBuyNowButton), t.xp6(1), t.Q6J("ngIf", e.data.showToast && e.isMobileLandscape), t.xp6(3), t.Q6J("ngIf", !e.isDynamicMode), t.xp6(1), t.Q6J("ngIf", e.showHeader && e.logo || e.showCrownCreteText), t.xp6(1), t.Q6J("ngIf", (null == e.barButtons.quoteButton ? null : e.barButtons.quoteButton.visible) && !!e.barButtons.activeProduct), t.xp6(1), t.Q6J("ngIf", null == e.barButtons.customButton ? null : e.barButtons.customButton.visible), t.xp6(1), t.Q6J("ngIf", (null == e.barButtons.sampleButton ? null : e.barButtons.sampleButton.visible) && !(null == e.data.activeProduct || !e.data.activeProduct.orderSampleUrl)), t.xp6(1), t.Q6J("ngIf", e.data.activeProduct)
                }
            }
            const Qo = function(n, l, e, o, r, g, O, R, k, A, st) {
                return {
                    data: n,
                    logo: l,
                    showLayout: e,
                    isMobileLandscape: o,
                    showHeader: r,
                    isDynamicMode: g,
                    showCrownCreteText: O,
                    barButtons: R,
                    hideFloatingDetails: k,
                    useBonaTranslations: A,
                    bonaCtaButton: st
                }
            };
            let jo = (() => {
                class n {
                    constructor() {
                        this.store = (0, t.f3M)(we), this.logo$ = this.store.logo$, this.vm$ = this.store.vm$, this.showLayout$ = this.store.showLayout$, this.isMobileLandscape$ = this.store.isMobileLandscape$, this.showHeader$ = this.store.showHeader$, this.isDynamicMode$ = this.store.isDynamicMode$, this.hideFloatingDetails$ = this.store.hideFloatingDetails$, this.showCrownCreteText$ = this.store.showCrownCreteText$, this.barButtons$ = this.store.barButtons$, this.useBonaTranslations$ = this.store.useBonaTranslations$, this.bonaCtaButton$ = this.store.bonaCtaButton$, this.trackingEvents = p.y8
                    }
                    goHome() {
                        this.store.goToHome()
                    }
                    showAr() {
                        this.store.showArDialog()
                    }
                    buyNow() {
                        this.store.buyNow()
                    }
                    toggleFav() {
                        this.store.toggleFav()
                    }
                    removeProduct() {
                        this.store.removeProduct()
                    }
                    openProductSettings() {
                        this.store.openProductSettings()
                    }
                    setToastStatus(e) {
                        this.store.setToastStatus(!!e)
                    }
                    customBtnClick(e) {
                        e && this.store.customBtnClick(e)
                    }
                    sampleBtnClick(e) {
                        this.store.openSampleUrl(e.orderSampleUrl)
                    }
                    openQuote() {
                        this.store.openQuote()
                    }
                    changeShowDetails(e) {
                        this.store.changeShowDetails(e)
                    }
                    openVendorUrl() {
                        this.store.openVendorUrl()
                    }
                }
                return n.\u0275fac = function(e) {
                    return new(e || n)
                }, n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-floating-bar"]
                    ],
                    hostAttrs: [1, "CrownCrete-floating-bar"],
                    standalone: !0,
                    features: [t._Bn([we]), t.jDz],
                    decls: 1,
                    vars: 13,
                    consts: [
                        [4, "ngrxLet"],
                        [1, "mobile", "CrownCrete-w100prc"],
                        [1, "floating-bar-wrapper"],
                        ["class", "floating-bar-actions", 4, "ngIf"],
                        [1, "floating-buy-quote"],
                        ["CrownCrete-button", "", "class", "primary reverse", 3, "CrownCreteTrackClick", "props", "click", 4, "ngIf"],
                        ["class", "info-toast", 4, "ngIf"],
                        [1, "tablet", "floating-bar-product-wrapper", "CrownCrete-w100prc"],
                        [1, "floating-bar-company"],
                        ["CrownCrete-icon-button", "", "class", "outline home", 3, "click", 4, "ngIf"],
                        ["class", "CrownCrete-flex-1", 3, "showLogo", "showCrownCreteText", "logoUrl", "vendorUrl", "vendorUrlClick", 4, "ngIf"],
                        ["CrownCrete-button", "", "class", "reverse", 3, "ngClass", "CrownCreteTrackClick", "props", "click", 4, "ngIf"],
                        ["class", "floating-bar-product-full-wrapper", 3, "hidden-ui", "show", 4, "ngIf"],
                        [1, "floating-bar-actions"],
                        ["CrownCrete-icon-button", "", 1, "outline", "home", 3, "click"],
                        ["name", "fl_leave"],
                        ["CrownCrete-button", "", 1, "primary", "reverse", 3, "CrownCreteTrackClick", "props", "click"],
                        ["name", "fl_cart_o", 4, "ngIf"],
                        [4, "ngIf"],
                        ["name", "fl_cart_o"],
                        [1, "info-toast"],
                        ["name", "fl_info_s"],
                        [1, "CrownCrete-caption", "CrownCrete-semi-regular"],
                        ["CrownCrete-icon-button", "", 1, "small", 3, "click"],
                        ["name", "fl_close"],
                        [1, "CrownCrete-flex-1", 3, "showLogo", "showCrownCreteText", "logoUrl", "vendorUrl", "vendorUrlClick"],
                        ["CrownCrete-button", "", 1, "reverse", 3, "ngClass", "CrownCreteTrackClick", "props", "click"],
                        [3, "name", 4, "ngIf"],
                        [3, "name"],
                        ["name", "fl_add_o", 4, "ngIf"],
                        ["name", "fl_add_o"],
                        [1, "floating-bar-product-full-wrapper"],
                        [1, "full-details-container"],
                        [1, "details-snippet"],
                        ["CrownCrete-icon-button", "", 1, "small", "fl-mb-16", 3, "click"],
                        ["name", "fl_arrow_left_double_o"],
                        [1, "product-photo"],
                        ["CrownCrete-picture", "", "class", "contain aspect-ratio-1-1", 3, "imgSet", 4, "ngIf"],
                        ["class", "product-photo epoxy", 4, "ngIf"],
                        ["class", "details-full", 4, "ngIf"],
                        ["CrownCrete-picture", "", 1, "contain", "aspect-ratio-1-1", 3, "imgSet"],
                        [1, "product-photo", "epoxy"],
                        [1, "details-full"]
                    ],
                    template: function(e, o) {
                        1 & e && t.YNc(0, Jo, 15, 9, "ng-container", 0), 2 & e && t.Q6J("ngrxLet", t.rFY(1, Qo, [o.vm$, o.logo$, o.showLayout$, o.isMobileLandscape$, o.showHeader$, o.isDynamicMode$, o.showCrownCreteText$, o.barButtons$, o.hideFloatingDetails$, o.useBonaTranslations$, o.bonaCtaButton$]))
                    },
                    dependencies: [u.ez, u.mk, u.O5, ti.D, _t.c, ht.K, Oi, d._N, d.eJ, je.i, at.N, rt.X, $t.X9, qe, uo, mo],
                    styles: [".CrownCrete-floating-bar{display:flex;justify-content:space-between}.CrownCrete-floating-bar .info-toast{display:inline-flex;align-items:center;margin:0 auto;background-color:var(--fl-primary100);border-radius:var(--fl-border-radius);padding:var(--fl-y-padding-xs) 12px}.CrownCrete-floating-bar .info-toast CrownCrete-icon{color:var(--fl-primary);width:1.5rem;height:1.5rem}.CrownCrete-floating-bar .info-toast .CrownCrete-icon-button{padding:0;width:1.5rem;height:1.5rem}.CrownCrete-floating-bar .info-toast .CrownCrete-icon-button CrownCrete-icon{color:var(--fl-primary800);width:1.25rem;height:1.25rem}.CrownCrete-floating-bar .info-toast p{color:var(--fl-primary800);margin:0 var(--fl-x-padding-xs)}.CrownCrete-floating-bar .floating-bar-wrapper{display:flex;justify-content:space-between}.CrownCrete-floating-bar .fav-btn.fav:hover{background-color:var(--fl-primary100);border-color:var(--fl-primary100)}.CrownCrete-floating-bar .fav-btn.fav CrownCrete-icon{color:var(--fl-primary);fill:var(--fl-primary)}.CrownCrete-floating-bar .floating-bar-product{background:var(--fl-bg);border-radius:var(--fl-border-radius);padding:var(--fl-y-padding-xs);align-self:baseline;display:flex;flex:1;min-width:0}@media (orientation: portrait) and (max-width: 767px){.CrownCrete-floating-bar .floating-bar-product{flex-direction:column}}.CrownCrete-floating-bar .floating-bar-product .product-inner-details{display:flex;align-items:center;justify-content:space-between;flex:1}.CrownCrete-floating-bar .floating-bar-product .product-inner-details div{display:flex;align-items:center;max-width:calc(100% - 42px)}.CrownCrete-floating-bar .floating-bar-product .product-inner-details p{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media (orientation: landscape){.CrownCrete-floating-bar .floating-bar-product .product-inner-details p{white-space:break-spaces}.CrownCrete-floating-bar .floating-bar-product .product-inner-details .fav{margin:0 .625rem}}@media (orientation: portrait) and (max-width: 767px){.CrownCrete-floating-bar .floating-bar-product .product-inner-details{margin-bottom:var(--fl-x-padding-xs)}}.CrownCrete-floating-bar .floating-bar-product picture{margin-right:var(--fl-x-padding-xs);width:40px;height:40px;aspect-ratio:1;border-radius:var(--fl-x-padding-xs)}.CrownCrete-floating-bar .floating-bar-product-wrapper{display:flex;flex-direction:column}.CrownCrete-floating-bar .floating-bar-company{display:inline-flex;align-self:baseline;background-color:var(--fl-bg);padding:.75rem var(--fl-x-padding-xs) .75rem var(--fl-x-padding);border-bottom-right-radius:var(--fl-border-radius-md)}.CrownCrete-floating-bar .floating-bar-company .CrownCrete-powered-by{max-width:400px}.CrownCrete-floating-bar .floating-bar-company .home{margin-right:var(--fl-x-padding)}@media (min-width: 768px){.CrownCrete-floating-bar .floating-bar-company .CrownCrete-button p{max-width:200px}}.CrownCrete-floating-bar .floating-bar-company .CrownCrete-button:nth-child(n+2){margin-left:.75rem}.CrownCrete-floating-bar .floating-buy-quote{position:fixed;top:var(--fl-y-padding);left:50%;transform:translate(-50%)}@media (min-width: 768px){.CrownCrete-floating-bar .mobile{display:none}}@media (max-width: 767px){.CrownCrete-floating-bar .tablet{display:none}}.CrownCrete-floating-bar .floating-bar-product-full-wrapper{margin-top:var(--fl-y-padding);display:flex;flex-direction:column;align-self:baseline}@media (max-width: 767px){.CrownCrete-floating-bar .floating-bar-product-full-wrapper{display:none}}.CrownCrete-floating-bar .floating-bar-product-full-wrapper .full-details-container{display:flex;flex-direction:column;position:absolute;cursor:initial}.CrownCrete-floating-bar .floating-bar-product-full-wrapper .details-snippet,.CrownCrete-floating-bar .floating-bar-product-full-wrapper .details-full{background-color:var(--fl-bg);padding:.75rem;display:flex;flex-direction:column}.CrownCrete-floating-bar .floating-bar-product-full-wrapper .details-full{width:385px;position:absolute;transition:left .5s;left:-385px;border-radius:var(--fl-border-radius-md);border:1px solid var(--fl-border-clr)}.CrownCrete-floating-bar .floating-bar-product-full-wrapper .details-full .CrownCrete-caption{color:var(--fl-fg700)}.CrownCrete-floating-bar .floating-bar-product-full-wrapper .details-full .product-ar-info{display:flex;flex-direction:column;justify-content:center}.CrownCrete-floating-bar .floating-bar-product-full-wrapper .details-full .product-qr{border-radius:var(--fl-border-radius-md);border:1px solid var(--fl-border-clr);height:152px;display:flex;justify-content:center;align-items:center}.CrownCrete-floating-bar .floating-bar-product-full-wrapper .details-full .product-qr qrcode{height:120px}.CrownCrete-floating-bar .floating-bar-product-full-wrapper .details-full .product-qr qrcode canvas{width:120px!important;height:120px!important}.CrownCrete-floating-bar .floating-bar-product-full-wrapper .details-full .close-btn{position:absolute;top:4px;right:4px;color:var(--fl-fg800)}.CrownCrete-floating-bar .floating-bar-product-full-wrapper .details-full .split-view{display:grid;grid-template-columns:152px 184px;grid-column-gap:var(--fl-x-padding);padding-top:var(--fl-y-padding)}.CrownCrete-floating-bar .floating-bar-product-full-wrapper .details-full .split-view:not(.border){padding-bottom:var(--fl-y-padding)}.CrownCrete-floating-bar .floating-bar-product-full-wrapper .details-full .split-view.border{border-top:1px solid var(--fl-border-clr);padding-top:var(--fl-y-padding)}.CrownCrete-floating-bar .floating-bar-product-full-wrapper .details-full .split-view picture{border-radius:var(--fl-border-radius)}.CrownCrete-floating-bar .floating-bar-product-full-wrapper .details-snippet{align-items:center;transition:opacity .5s;border-top-right-radius:var(--fl-border-radius-md);border-bottom-right-radius:var(--fl-border-radius-md);border-color:var(--fl-border-clr);border:1px solid var(--fl-border-clr);border-left:none}.CrownCrete-floating-bar .floating-bar-product-full-wrapper .details-snippet button{align-self:center}.CrownCrete-floating-bar .floating-bar-product-full-wrapper .details-snippet .product-photo{width:40px;height:40px}.CrownCrete-floating-bar .floating-bar-product-full-wrapper .details-snippet .product-photo picture{border-radius:var(--fl-border-radius)}.CrownCrete-floating-bar .floating-bar-product-full-wrapper .details-snippet .product-photo.epoxy{margin-top:var(--fl-y-padding)}.CrownCrete-floating-bar .floating-bar-product-full-wrapper.show .full-details-container{position:relative}.CrownCrete-floating-bar .floating-bar-product-full-wrapper.show .details-snippet{opacity:0}.CrownCrete-floating-bar .floating-bar-product-full-wrapper.show .details-full{display:flex;flex-direction:column;left:var(--fl-x-padding);min-width:385px}\n"],
                    encapsulation: 2,
                    changeDetection: 0
                }), n
            })();

            function Yo(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 3), t.NdJ("click", function() {
                        const g = t.CHM(e).$implicit,
                            O = t.oxw();
                        return t.KtG(O.takeAction(g))
                    }), t._UZ(1, "CrownCrete-icon", 4), t._uU(2), t.ALo(3, "flTranslate"), t.qZA()
                }
                if(2 & n) {
                    const e = l.$implicit;
                    t.xp6(1), t.Q6J("name", e.icon), t.xp6(1), t.hij(" ", t.lcZ(3, 2, e.label) || "-", " ")
                }
            }
            let qo = (() => {
                class n {
                    constructor() {
                        this.data = (0, t.f3M)(p.wM)
                    }
                    trackBy(e, o) {
                        return o.id
                    }
                    takeAction(e) {
                        this.data?.actionCall && this.data.actionCall(e)
                    }
                }
                return n.\u0275fac = function(e) {
                    return new(e || n)
                }, n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-side-menu"]
                    ],
                    standalone: !0,
                    features: [t.jDz],
                    decls: 5,
                    vars: 5,
                    consts: [
                        ["CrownCrete-dialog-header", ""],
                        [1, "CrownCrete-side-menu-items"],
                        ["CrownCrete-button", "", "class", "secondary reverse", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"],
                        ["CrownCrete-button", "", 1, "secondary", "reverse", 3, "click"],
                        [3, "name"]
                    ],
                    template: function(e, o) {
                        1 & e && (t.TgZ(0, "div", 0), t._uU(1), t.ALo(2, "flTranslate"), t.qZA(), t.TgZ(3, "div", 1), t.YNc(4, Yo, 4, 4, "button", 2), t.qZA()), 2 & e && (t.xp6(1), t.hij(" ", t.lcZ(2, 3, "room.menu.header"), "\n"), t.xp6(3), t.Q6J("ngForOf", null == o.data ? null : o.data.buttons)("ngForTrackBy", o.trackBy))
                    },
                    dependencies: [u.ez, u.sg, ht.K, _t.c, gt.wC, ie.A, at.N, rt.X],
                    styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100vw;background-color:var(--fl-bg)}[_nghost-%COMP%]   [CrownCrete-dialog-header][_ngcontent-%COMP%]{border-bottom-color:var(--fl-border-clr)}[_nghost-%COMP%]   .CrownCrete-side-menu-items[_ngcontent-%COMP%]{padding:.5rem var(--fl-x-padding) 0;display:flex;flex-direction:column}[_nghost-%COMP%]   .CrownCrete-side-menu-items[_ngcontent-%COMP%]   .CrownCrete-button[_ngcontent-%COMP%]{width:100%;justify-content:flex-end;font-weight:400;color:var(--fl-fg)}"],
                    changeDetection: 0
                }), n
            })();

            function Go(n, l) {
                if(1 & n && (t.ynx(0), t.TgZ(1, "div", 2)(2, "p", 3), t._uU(3), t.ALo(4, "async"), t.qZA(), t.TgZ(5, "p", 4), t._uU(6), t.ALo(7, "async"), t.qZA()(), t.BQk()), 2 & n) {
                    const e = l.$implicit,
                        o = t.oxw();
                    t.xp6(3), t.Oqu(t.lcZ(4, 2, o.getFieldName(e))), t.xp6(3), t.Oqu(t.lcZ(7, 4, o.getFieldValue(e)))
                }
            }
            let Ko = (() => {
                    class n {
                        constructor(e) {
                            this.translationsProvider = (0, t.f3M)(Z.pp), this.productsProvider = (0, t.f3M)(p.IA), this.fieldTranslationKey = "room.productDetails.", this.emptyValue = this.translationsProvider.translate(this.fieldTranslationKey + "emptyValue"), this.unknownName = this.translationsProvider.translate(this.fieldTranslationKey + "unknownName"), this.customFilters$ = this.productsProvider.productsBaseData$.pipe((0, S.U)(o => o.filterDefinitions?.filter(r => !!r.optionsTranslations))), this.lang = this.translationsProvider.currentLang, this.trackByField = (o, r) => r, this.product = e.product, this.productFields = e.productFields
                        }
                        isDescription(e) {
                            return e === L.$c.description
                        }
                        getFieldName(e) {
                            return Object.values(L.$c).includes(e) ? (0, B.of)(this.translationsProvider.translate(this.fieldTranslationKey + e)) : this.customFilters$.pipe((0, F.q)(1), (0, S.U)(o => {
                                const r = o?.find(g => g.key.label === e);
                                return r?.key?.[this.lang] || r?.key?.default || this.unknownName
                            }))
                        }
                        getFieldValue(e) {
                            return Object.values(L.$c).includes(e) ? this.getStandardFieldValue(e) : this.getCustomFieldValue(e)
                        }
                        getStandardFieldValue(e) {
                            if(!this.product) return (0, B.of)("");
                            switch(e) {
                                case L.$c.description:
                                    return (0, B.of)(this.product.description?.[this.lang] || this.product.description?.default || this.emptyValue);
                                case L.$c.type:
                                    return (0, B.of)(this.translationsProvider.translate("room.filter.label_product_type." + this.product.type) || this.emptyValue);
                                default:
                                    return (0, B.of)(this.product[e] ? this.product[e] : this.emptyValue)
                            }
                        }
                        getCustomFieldValue(e) {
                            return this.customFilters$.pipe((0, F.q)(1), (0, S.U)(o => {
                                const r = o?.find(g => g.key.label === e);
                                if(r) {
                                    const g = this.product?.custom?.[r.key.label][0];
                                    if(g) return r.optionsTranslations?.[g]?.[this.lang] || r.optionsTranslations?.[g]?.default || this.emptyValue
                                }
                                return this.emptyValue
                            }))
                        }
                    }
                    return n.\u0275fac = function(e) {
                        return new(e || n)(t.Y36(p.wM))
                    }, n.\u0275cmp = t.Xpm({
                        type: n,
                        selectors: [
                            ["CrownCrete-product-details-dialog"]
                        ],
                        hostAttrs: [1, "CrownCrete-product-details-dialog"],
                        standalone: !0,
                        features: [t.jDz],
                        decls: 16,
                        vars: 12,
                        consts: [
                            [1, "header"],
                            ["CrownCrete-dialog-content", ""],
                            [1, "additional-info-element"],
                            [1, "additional-info-header"],
                            [1, "additional-info-value"],
                            [4, "ngFor", "ngForOf", "ngForTrackBy"],
                            ["CrownCrete-dialog-actions", ""],
                            ["CrownCrete-button", "", "CrownCrete-dialog-close", "", 1, "CrownCrete-button", "primary", "big", "close-btn"]
                        ],
                        template: function(e, o) {
                            1 & e && (t.TgZ(0, "div", 0)(1, "span"), t._uU(2), t.ALo(3, "flTranslate"), t.qZA()(), t.TgZ(4, "section", 1)(5, "div", 2)(6, "p", 3), t._uU(7), t.ALo(8, "flTranslate"), t.qZA(), t.TgZ(9, "p", 4), t._uU(10), t.qZA()(), t.YNc(11, Go, 8, 6, "ng-container", 5), t.TgZ(12, "div", 6)(13, "button", 7), t._uU(14), t.ALo(15, "flTranslate"), t.qZA()()()), 2 & e && (t.xp6(2), t.Oqu(t.lcZ(3, 6, o.fieldTranslationKey + "header")), t.xp6(5), t.Oqu(t.lcZ(8, 8, o.fieldTranslationKey + "name")), t.xp6(3), t.Oqu(null == o.product || null == o.product.name ? null : o.product.name.default), t.xp6(1), t.Q6J("ngForOf", o.productFields)("ngForTrackBy", o.trackByField), t.xp6(3), t.hij(" ", t.lcZ(15, 10, "close"), " "))
                        },
                        dependencies: [u.ez, u.sg, u.Ov, gt.wC, xt.VA, xt.BK, xt.hE, at.N, rt.X, _t.c],
                        styles: [".CrownCrete-product-details-dialog{padding:var(--fl-y-padding-md);display:flex;flex-direction:column;flex:1;background-color:var(--fl-bg);border-radius:var(--fl-border-radius);max-width:360px}.CrownCrete-product-details-dialog .header{display:flex;align-items:center;justify-content:center;padding-bottom:var(--fl-y-padding-md);font-weight:600;font-size:1rem;line-height:1.25rem}.CrownCrete-product-details-dialog section{padding:0}.CrownCrete-product-details-dialog section .additional-info-element{display:flex;flex-direction:column;justify-content:flex-start;padding-bottom:var(--fl-x-padding-s)}.CrownCrete-product-details-dialog section .additional-info-element .additional-info-header{text-transform:uppercase;margin-bottom:4px;font-weight:600;font-size:.625rem;line-height:.75rem;color:var(--fl-fg)}.CrownCrete-product-details-dialog section .additional-info-element .additional-info-value{font-weight:500;font-size:.75rem;line-height:1rem;color:var(--fl-fg700)}.CrownCrete-product-details-dialog .CrownCrete-dialog-actions{padding:var(--fl-y-padding-md) 0 0;border:0}.CrownCrete-product-details-dialog .CrownCrete-dialog-actions .CrownCrete-button{width:100%}\n"],
                        encapsulation: 2,
                        changeDetection: 0
                    }), n
                })(),
                xe = (() => {
                    class n extends f.m1 {
                        constructor() {
                            super({
                                showAr: !1,
                                inline: !1,
                                showPictureMenu: !1,
                                showCompare: !1,
                                rotation: 0,
                                rotationMax: 180,
                                rotationMin: 0
                            }), this.arProvider = (0, t.f3M)(p.Jh), this.configProvider = (0, t.f3M)(p.FI), this.dialog = (0, t.f3M)(p._R), this.device = (0, t.f3M)(J.U8), this.productsProvider = (0, t.f3M)(p.IA), this.roomsProvider = (0, t.f3M)(p.XZ), this.roomStore = (0, t.f3M)(Bt), this.isMobileLandscape$ = this.roomStore.isMobileLandscape$, this.isLandscape$ = this.roomStore.isLandscape$, this.compareOn$ = this.roomsProvider.selectCompare$, this.showZoom$ = this.roomsProvider.showZoom$, this.showLayout$ = this.roomsProvider.showLayout$, this.supportsAR$ = this.configProvider.companyConfig$.pipe((0, S.U)(e => !!e.company?.supportsAR)), this.isEpoxy$ = this.configProvider.companyConfig$.pipe((0, S.U)(e => !!e.company?.epoxyView)), this.settings$ = this.select(e => ({
                                rotation: e.rotation,
                                rotationMin: e.rotationMin,
                                rotationMax: e.rotationMax,
                                productType: e.activeProduct?.type
                            })), this.productFields$ = this.configProvider.companyConfig$.pipe((0, S.U)(e => [...e?.company?.selectedProductFields?.length ? e?.company?.selectedProductFields : []].sort((o, r) => (L.SE[o] ?? Number.MAX_SAFE_INTEGER) - (L.SE[r] ?? Number.MAX_SAFE_INTEGER)))), this.vm$ = this.select(e => ({
                                showAr: e.showAr,
                                showCompare: e.showCompare,
                                showPictureMenu: e.showPictureMenu,
                                zoomOn: e.zoomOn,
                                inline: e.inline,
                                showQuote: e.showQuote,
                                showCalculator: this.device.isDesktop && !!e.activeProduct && e.activeProduct.type !== L.kv.rug && e.showCalculator && !!e.tileOptions?.prices?.length,
                                showRotation: !!e.activeProduct && e.activeProduct.type !== L.kv.paint,
                                showProductDetails: !!e.activeProduct && !!e.showProductDetails
                            })), this.connectToConfig(), this.connectToProduct(), this.connectToTransformations()
                        }
                        get isDesktop() {
                            return !this.device.isTablet && !this.device.isMobile
                        }
                        get isMobile() {
                            return this.device.isMobileSize
                        }
                        set inline(e) {
                            this.patchState({
                                inline: e
                            })
                        }
                        toggleZoom() {
                            const e = !this.get().zoomOn;
                            this.roomsProvider.toggleZoom(e), this.patchState({
                                showPictureMenu: !1
                            })
                        }
                        togglePictureMenu(e, o) {
                            if(e) return this.roomsProvider.toggleCompare(!1), void this.patchState({
                                showPictureMenu: !1
                            });
                            const r = void 0 !== o ? o : !this.get().showPictureMenu;
                            this.patchState({
                                showPictureMenu: r
                            })
                        }
                        toggleLayout(e) {
                            this.roomsProvider.toggleLayoutVisibility(!e), this.patchState({
                                showPictureMenu: !1
                            })
                        }
                        toggleCompare() {
                            this.roomsProvider.toggleCompare(), this.patchState({
                                showPictureMenu: !1
                            })
                        }
                        showProductDetails() {
                            const e = this.get()?.activeProduct;
                            !e?.id || this.productFields$.pipe((0, F.q)(1), (0, I.b)(o => {
                                this.patchState({
                                    showPictureMenu: !1
                                }), this.dialog.open(Ko, {
                                    backdropClass: Z.bj.darkOverlay,
                                    panelClass: Z.bj.centerOverlay,
                                    data: {
                                        product: e,
                                        productFields: o
                                    }
                                }).afterClosed().subscribe()
                            })).subscribe()
                        }
                        showArDialog() {
                            const e = this.get()?.activeProduct;
                            if(!e?.id) return;
                            const o = new L.qn(e);
                            o.selectedSize = this.get()?.tileOptions, this.dialog.open(ni, {
                                backdropClass: Z.bj.darkOverlay,
                                panelClass: Z.bj.centerOverlay,
                                data: {
                                    product: o
                                }
                            }).afterClosed().pipe((0, P.R)(this.destroy$), (0, I.b)(() => this.patchState({
                                showPictureMenu: !1
                            }))).subscribe()
                        }
                        rotate(e) {
                            this.productsProvider.updateRotation(e)
                        }
                        connectToConfig() {
                            this.configProvider.companyConfig$.pipe((0, F.q)(1), (0, I.b)(e => {
                                this.patchState({
                                    showProductDetails: (e.company?.selectedProductFields?.length ?? 0) > 0
                                })
                            })).subscribe()
                        }
                        connectToTransformations() {
                            this.productsProvider.transformations$.pipe((0, P.R)(this.destroy$), (0, I.b)(e => {
                                this.patchState({
                                    rotation: e.rotation || 0
                                })
                            })).subscribe()
                        }
                        connectToProduct() {
                            (0, m.T)(this.fetchActiveProduct(), this.connectToZoom(), this.fetchCtaButtons()).pipe((0, P.R)(this.destroy$)).subscribe()
                        }
                        connectToZoom() {
                            return this.roomsProvider.selectZoom$.pipe((0, H.x)(), (0, S.U)(e => {
                                this.patchState({
                                    zoomOn: e
                                })
                            }))
                        }
                        fetchCtaButtons() {
                            return this.roomsProvider.selectCtaButtons$.pipe((0, P.R)(this.destroy$), (0, mt.P)(e => !!e?.length), (0, S.U)(e => {
                                this.patchState({
                                    ctaButtons: e,
                                    showCalculator: e.find(o => o.type === L.aE.calculator)?.visible,
                                    showQuote: e.find(o => o.type === L.aE.quote)?.visible
                                })
                            }))
                        }
                        fetchActiveProduct() {
                            return (0, Q.a)([this.productsProvider.activeProduct$, this.productsProvider.hotpointProductMap$, this.productsProvider.transformations$]).pipe((0, P.R)(this.destroy$), (0, I.b)(([e, o, r]) => {
                                this.patchState({
                                    activeProduct: e,
                                    showAr: this.arProvider.arAvailable(e),
                                    showCompare: !!Object.values(o)?.filter(g => g.product).length,
                                    tileOptions: r?.options
                                })
                            }), (0, S.U)(() => {}))
                        }
                        openCalculator() {
                            const e = this.get().ctaButtons;
                            if(!e?.length) return;
                            const o = e.find(r => r.type === L.aE.calculator);
                            this.dialog.open(ct, {
                                backdropClass: Z.bj.darkOverlay,
                                panelClass: Z.bj.centerOverlay,
                                containerClass: Z.bj.stretchWrapper,
                                data: {
                                    metadata: o?.metadata,
                                    actionButtons: e
                                }
                            })
                        }
                        openQuote() {
                            const e = this.get().ctaButtons;
                            if(!e?.length) return;
                            const o = e.find(r => r.type === L.aE.quote);
                            this.dialog.open(Jt.c, {
                                backdropClass: Z.bj.darkOverlay,
                                panelClass: Z.bj.centerOverlay,
                                containerClass: Z.bj.stretchWrapper,
                                data: {
                                    metadata: o?.metadata,
                                    actionButtons: e
                                }
                            })
                        }
                    }
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275prov = t.Yz7({
                        token: n,
                        factory: n.\u0275fac
                    }), n
                })();
            var Xo = c(9111);

            function Wo(n, l) {
                if(1 & n && (t.TgZ(0, "p"), t._uU(1), t.qZA()), 2 & n) {
                    const e = t.oxw().ngrxLet,
                        o = t.oxw();
                    t.xp6(1), t.hij(" ", 2 * e.params.rotation + o.angleAppendix, " ")
                }
            }

            function tn(n, l) {
                if(1 & n && (t.TgZ(0, "p"), t._uU(1), t.qZA()), 2 & n) {
                    const e = t.oxw().ngrxLet,
                        o = t.oxw();
                    t.xp6(1), t.hij(" ", e.params.rotation + o.angleAppendix, " ")
                }
            }

            function en(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.ynx(0), t.TgZ(1, "CrownCrete-slider", 1), t.NdJ("valueChange", function(r) {
                        t.CHM(e);
                        const g = t.oxw();
                        return t.KtG(g.valueChange(r))
                    }), t.qZA(), t.YNc(2, Wo, 2, 1, "p", 2), t.YNc(3, tn, 2, 1, "p", 2), t.BQk()
                }
                if(2 & n) {
                    const e = l.ngrxLet,
                        o = t.oxw();
                    t.xp6(1), t.Q6J("orientation", o.orientationType)("max", e.params.rotationMax)("min", e.params.rotationMin)("value", e.params.rotation)("showReset", !1)("withLabel", !1), t.xp6(1), t.Q6J("ngIf", e.params.productType === o.productTypes.rug), t.xp6(1), t.Q6J("ngIf", e.params.productType !== o.productTypes.rug)
                }
            }
            const on = function(n) {
                return {
                    params: n
                }
            };
            let ri = (() => {
                class n extends q.YU {
                    constructor(e) {
                        super(), this.store = e, this.type = L.i5.landscape, this.angleAppendix = "\xb0", this.productTypes = L.kv, this.settings$ = this.store.settings$, this.currentValue = new kt.x, this.currentValue.pipe((0, V.b)(10)).subscribe(o => this.valueChangeStore(o))
                    }
                    get orientationTypeClass() {
                        return this.type === L.i5.landscape ? "landscape" : "portrait"
                    }
                    get orientationType() {
                        return this.type
                    }
                    valueChange(e) {
                        this.currentValue.next(e)
                    }
                    valueChangeStore(e) {
                        this.store.rotate(e)
                    }
                }
                return n.\u0275fac = function(e) {
                    return new(e || n)(t.Y36(xe))
                }, n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-rotation-button"]
                    ],
                    hostAttrs: [1, "CrownCrete-rotation-button"],
                    hostVars: 2,
                    hostBindings: function(e, o) {
                        2 & e && t.Tol(o.orientationTypeClass)
                    },
                    inputs: {
                        type: "type"
                    },
                    standalone: !0,
                    features: [t.qOj, t.jDz],
                    decls: 1,
                    vars: 3,
                    consts: [
                        [4, "ngrxLet"],
                        [3, "orientation", "max", "min", "value", "showReset", "withLabel", "valueChange"],
                        [4, "ngIf"]
                    ],
                    template: function(e, o) {
                        1 & e && t.YNc(0, en, 4, 8, "ng-container", 0), 2 & e && t.Q6J("ngrxLet", t.VKq(1, on, o.settings$))
                    },
                    dependencies: [u.ez, u.O5, Xo.p, d._N, d.eJ],
                    styles: [".CrownCrete-rotation-button{display:flex;flex-direction:row;align-items:center}.CrownCrete-rotation-button CrownCrete-slider{flex:1;margin:0 var(--fl-x-padding-s)}.CrownCrete-rotation-button CrownCrete-slider .slider-container{width:inherit;height:inherit}.CrownCrete-rotation-button CrownCrete-slider .slider-container .slider-wrapper{width:100%;height:100%}.CrownCrete-rotation-button CrownCrete-slider .slider-container .slider-wrapper .ngx-slider.vertical .ngx-slider-bar-wrapper{width:100%;margin:0;padding:0;display:flex;justify-content:center}.CrownCrete-rotation-button CrownCrete-slider .slider-container .slider-wrapper .ngx-slider.vertical .ngx-slider-pointer{left:-10px!important}.portrait{flex-direction:column}.portrait CrownCrete-slider{min-height:6.25rem;height:6.25rem;max-height:6.25rem;margin:var(--fl-x-padding-s) 0}.portrait CrownCrete-slider .ngx-slider-bar{width:4px!important}.landscape CrownCrete-slider{min-width:6.25rem;width:6.25rem;max-width:6.25rem}.landscape CrownCrete-slider .ngx-slider-bar{height:4px!important}\n"],
                    encapsulation: 2
                }), n
            })();

            function nn(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 4), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(3);
                        return t.KtG(r.toggleZoom())
                    }), t._UZ(1, "CrownCrete-icon", 5), t._uU(2), t.ALo(3, "flTranslate"), t.qZA()
                }
                if(2 & n) {
                    const e = t.oxw(2).ngrxLet;
                    t.xp6(1), t.Q6J("name", e.data.zoomOn ? "fl_zoom_out_o" : "fl_zoom_in_o"), t.xp6(1), t.hij(" ", t.lcZ(3, 2, e.data.zoomOn ? "floatingBar.zoomOut" : "floatingBar.zoomIn"), " ")
                }
            }

            function sn(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.ynx(0), t.TgZ(1, "button", 4), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw().ngrxLet,
                            g = t.oxw();
                        return t.KtG(g.toggleLayout(r.showLayout))
                    }), t._UZ(2, "CrownCrete-icon", 5), t._uU(3), t.ALo(4, "flTranslate"), t.qZA(), t.YNc(5, nn, 4, 4, "button", 2), t.BQk()
                }
                if(2 & n) {
                    const e = t.oxw().ngrxLet;
                    t.xp6(2), t.Q6J("name", e.showLayout ? "fl_expand" : "fl_condense"), t.xp6(1), t.hij(" ", t.lcZ(4, 3, e.showLayout ? "floatingBar.enterFullScreen" : "floatingBar.leaveFullScreen"), " "), t.xp6(2), t.Q6J("ngIf", e.showZoom)
                }
            }

            function rn(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 4), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.toggleCompare())
                    }), t._UZ(1, "CrownCrete-icon", 5), t._uU(2), t.ALo(3, "flTranslate"), t.qZA()
                }
                if(2 & n) {
                    const e = t.oxw().ngrxLet;
                    t.xp6(1), t.Q6J("name", e.compareOn ? "fl_close" : "fl_compare_s"), t.xp6(1), t.hij(" ", t.lcZ(3, 2, e.compareOn ? "floatingBar.closeCompare" : "floatingBar.compare"), " ")
                }
            }

            function an(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 4), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(2);
                        return t.KtG(r.openCalculator())
                    }), t._UZ(1, "CrownCrete-icon", 5), t._uU(2), t.ALo(3, "flTranslate"), t.qZA()
                }
                if(2 & n) {
                    const e = t.oxw(2);
                    t.xp6(1), t.Q6J("name", e.calculatorIcon), t.xp6(1), t.hij(" ", t.lcZ(3, 2, "calculator.title"), " ")
                }
            }

            function ln(n, l) {
                if(1 & n && (t.TgZ(0, "button", 6), t._UZ(1, "CrownCrete-icon", 7), t._uU(2), t.ALo(3, "flTranslate"), t._UZ(4, "CrownCrete-rotation-button", 8), t.qZA()), 2 & n) {
                    const e = t.oxw(2);
                    t.xp6(2), t.hij(" ", t.lcZ(3, 2, "room.settings.rotation"), " "), t.xp6(2), t.Q6J("type", e.orientation.landscape)
                }
            }

            function cn(n, l) {
                if(1 & n && (t.ynx(0), t.YNc(1, sn, 6, 5, "ng-container", 1), t.YNc(2, rn, 4, 4, "button", 2), t.YNc(3, an, 4, 4, "button", 2), t.YNc(4, ln, 5, 4, "button", 3), t.BQk()), 2 & n) {
                    const e = l.ngrxLet;
                    t.xp6(1), t.Q6J("ngIf", !e.compareOn), t.xp6(1), t.Q6J("ngIf", e.data.showCompare || e.compareOn), t.xp6(1), t.Q6J("ngIf", e.data.showCalculator), t.xp6(1), t.Q6J("ngIf", e.data.showRotation && !e.isEpoxy)
                }
            }
            const un = function(n, l, e, o, r) {
                return {
                    compareOn: n,
                    showLayout: l,
                    showZoom: e,
                    isEpoxy: o,
                    data: r
                }
            };
            let dn = (() => {
                class n {
                    constructor() {
                        this.store = (0, t.f3M)(xe), this.data$ = this.store.vm$, this.compareOn$ = this.store.compareOn$, this.showLayout$ = this.store.showLayout$, this.showZoom$ = this.store.showZoom$, this.isEpoxy$ = this.store.isEpoxy$, this.calculatorIcon = p.eh[L.aE.calculator], this.quoteIcon = p.eh[L.aE.quote], this.orientation = L.i5
                    }
                    toggleCompare() {
                        this.store.toggleCompare()
                    }
                    toggleLayout(e) {
                        this.store.toggleLayout(e)
                    }
                    toggleZoom() {
                        this.store.toggleZoom()
                    }
                    openCalculator() {
                        this.store.openCalculator()
                    }
                    openQuote() {
                        this.store.openQuote()
                    }
                }
                return n.\u0275fac = function(e) {
                    return new(e || n)
                }, n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-floating-actions-inline"]
                    ],
                    hostAttrs: [1, "CrownCrete-floating-actions-inline"],
                    standalone: !0,
                    features: [t.jDz],
                    decls: 1,
                    vars: 7,
                    consts: [
                        [4, "ngrxLet"],
                        [4, "ngIf"],
                        ["CrownCrete-button", "", "class", "outline reverse small CrownCrete-button", 3, "click", 4, "ngIf"],
                        ["class", "outline small CrownCrete-button rotation-button", 4, "ngIf"],
                        ["CrownCrete-button", "", 1, "outline", "reverse", "small", "CrownCrete-button", 3, "click"],
                        [3, "name"],
                        [1, "outline", "small", "CrownCrete-button", "rotation-button"],
                        ["name", "fl_refresh_o"],
                        [3, "type"]
                    ],
                    template: function(e, o) {
                        1 & e && t.YNc(0, cn, 5, 4, "ng-container", 0), 2 & e && t.Q6J("ngrxLet", t.qbA(1, un, o.compareOn$, o.showLayout$, o.showZoom$, o.isEpoxy$, o.data$))
                    },
                    dependencies: [u.ez, u.O5, _t.c, ht.K, d._N, d.eJ, at.N, rt.X, ri],
                    styles: [".CrownCrete-floating-actions-inline{display:inline-flex}.CrownCrete-floating-actions-inline .CrownCrete-button{margin-right:var(--fl-x-padding)}.CrownCrete-floating-actions-inline .CrownCrete-button CrownCrete-icon{color:var(--fl-primary)}.CrownCrete-floating-actions-inline .rotation-button{padding:0 .5rem}\n"],
                    encapsulation: 2,
                    changeDetection: 0
                }), n
            })();

            function hn(n, l) {
                1 & n && (t.TgZ(0, "span"), t._uU(1), t.ALo(2, "flTranslate"), t.qZA()), 2 & n && (t.xp6(1), t.Oqu(t.lcZ(2, 1, "room.settings.rotation")))
            }

            function pn(n, l) {
                if(1 & n && (t.TgZ(0, "button", 10), t._UZ(1, "CrownCrete-icon", 11), t.YNc(2, hn, 3, 3, "span", 1), t._UZ(3, "CrownCrete-rotation-button", 12), t.qZA()), 2 & n) {
                    const e = t.oxw(2).ngrxLet,
                        o = t.oxw();
                    t.xp6(2), t.Q6J("ngIf", e.isLandscape && !o.forceHideLabel), t.xp6(1), t.Q6J("type", o.orientation)
                }
            }

            function fn(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "button", 13), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(2).ngrxLet,
                            g = t.oxw();
                        return t.KtG(g.showPictureMenu(r.compareOn))
                    }), t._UZ(1, "CrownCrete-icon", 14), t.qZA()
                }
                if(2 & n) {
                    const e = t.oxw(2).ngrxLet;
                    t.xp6(1), t.Q6J("name", e.data.showPictureMenu || e.compareOn ? "fl_close" : "fl_burger")
                }
            }
            const ai = function() {
                return {
                    button_type: "AR"
                }
            };

            function gn(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 15), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(3);
                        return t.KtG(r.showProductDetails())
                    }), t.TgZ(1, "p", 16), t._uU(2), t.ALo(3, "flTranslate"), t.qZA(), t.TgZ(4, "button", 17), t._UZ(5, "CrownCrete-icon", 18), t.qZA()()
                }
                if(2 & n) {
                    const e = t.oxw(3);
                    t.xp6(2), t.hij(" ", t.lcZ(3, 3, "room.productDetails.header"), " "), t.xp6(2), t.Q6J("CrownCreteTrackClick", e.trackingEvents.buttonClick)("props", t.DdM(5, ai))
                }
            }

            function mn(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 19), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(3);
                        return t.KtG(r.showAr())
                    }), t.TgZ(1, "p", 16), t._uU(2), t.ALo(3, "flTranslate"), t.qZA(), t.TgZ(4, "button", 17), t._UZ(5, "CrownCrete-icon", 20), t.qZA()()
                }
                if(2 & n) {
                    const e = t.oxw(3);
                    t.xp6(2), t.Oqu(t.lcZ(3, 3, "floatingBar.showAr")), t.xp6(2), t.Q6J("CrownCreteTrackClick", e.trackingEvents.buttonClick)("props", t.DdM(5, ai))
                }
            }

            function bn(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 15), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(3);
                        return t.KtG(r.toggleZoom())
                    }), t.TgZ(1, "p", 21), t._uU(2), t.ALo(3, "flTranslate"), t.qZA(), t.TgZ(4, "button", 22), t._UZ(5, "CrownCrete-icon", 14), t.qZA()()
                }
                if(2 & n) {
                    const e = t.oxw(2).ngrxLet;
                    t.xp6(2), t.hij(" ", t.lcZ(3, 2, e.data.zoomOn ? "floatingBar.zoomOut" : "floatingBar.zoomIn"), " "), t.xp6(3), t.Q6J("name", e.data.zoomOn ? "fl_zoom_out_o" : "fl_zoom_in_o")
                }
            }

            function vn(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 19), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(2).ngrxLet,
                            g = t.oxw();
                        return t.KtG(g.toggleLayout(r.showLayout))
                    }), t.TgZ(1, "p", 21), t._uU(2), t.ALo(3, "flTranslate"), t.qZA(), t.TgZ(4, "button", 22), t._UZ(5, "CrownCrete-icon", 14), t.qZA()()
                }
                if(2 & n) {
                    const e = t.oxw(2).ngrxLet;
                    t.xp6(2), t.hij(" ", t.lcZ(3, 2, e.showLayout ? "floatingBar.enterFullScreen" : "floatingBar.leaveFullScreen"), " "), t.xp6(3), t.Q6J("name", e.showLayout ? "fl_expand" : "fl_condense")
                }
            }

            function _n(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 23)(1, "p", 16), t._uU(2), t.ALo(3, "flTranslate"), t.qZA(), t.TgZ(4, "button", 24), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(3);
                        return t.KtG(r.toggleCompare())
                    }), t._UZ(5, "CrownCrete-icon", 25), t.qZA()()
                }
                2 & n && (t.xp6(2), t.Oqu(t.lcZ(3, 1, "floatingBar.compare")))
            }

            function wn(n, l) {
                if(1 & n) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 26), t.NdJ("click", function() {
                        t.CHM(e);
                        const r = t.oxw(3);
                        return t.KtG(r.showPictureMenu(!1))
                    }), t.qZA()
                }
            }

            function xn(n, l) {
                if(1 & n && (t.ynx(0), t.YNc(1, pn, 4, 2, "button", 2), t.TgZ(2, "div", 3), t.YNc(3, fn, 2, 1, "button", 4), t.TgZ(4, "div", 5), t.YNc(5, gn, 6, 6, "div", 6), t.ALo(6, "async"), t.YNc(7, mn, 6, 6, "div", 7), t.ALo(8, "async"), t.YNc(9, bn, 6, 4, "div", 6), t.YNc(10, vn, 6, 4, "div", 7), t.YNc(11, _n, 6, 3, "div", 8), t.qZA()(), t.YNc(12, wn, 1, 0, "div", 9), t.BQk()), 2 & n) {
                    const e = t.oxw().ngrxLet,
                        o = t.oxw();
                    t.xp6(1), t.Q6J("ngIf", e.data.showRotation && !e.isEpoxy), t.xp6(2), t.Q6J("ngIf", e.data.showCompare || e.data.showAr || e.data.zoomOn || e.showZoom || !e.isMobileLandscape && !o.isDesktop), t.xp6(1), t.ekj("visible", e.data.showPictureMenu), t.xp6(1), t.Q6J("ngIf", o.isMobile && e.data.showProductDetails && t.lcZ(6, 10, o.supportsAR$)), t.xp6(2), t.Q6J("ngIf", !o.isDesktop && e.data.showAr && t.lcZ(8, 12, o.supportsAR$)), t.xp6(2), t.Q6J("ngIf", !e.isMobileLandscape), t.xp6(1), t.Q6J("ngIf", !e.isMobileLandscape && !o.isDesktop), t.xp6(1), t.Q6J("ngIf", e.data.showCompare), t.xp6(1), t.Q6J("ngIf", e.data.showPictureMenu)
                }
            }

            function yn(n, l) {
                1 & n && (t.ynx(0), t._UZ(1, "CrownCrete-floating-actions-inline"), t.BQk())
            }

            function Cn(n, l) {
                if(1 & n && (t.ynx(0), t.YNc(1, xn, 13, 14, "ng-container", 1), t.YNc(2, yn, 2, 0, "ng-container", 1), t.BQk()), 2 & n) {
                    const e = l.ngrxLet;
                    t.xp6(1), t.Q6J("ngIf", !e.data.inline), t.xp6(1), t.Q6J("ngIf", e.data.inline)
                }
            }
            const Tn = function(n, l, e, o, r, g, O, R) {
                return {
                    isMobileLandscape: n,
                    isLandscape: l,
                    showLayout: e,
                    supportsAR: o,
                    compareOn: r,
                    showZoom: g,
                    isEpoxy: O,
                    data: R
                }
            };
            let On = (() => {
                    class n {
                        constructor() {
                            this.store = (0, t.f3M)(xe), this.deviceService = (0, t.f3M)(J.U8), this.isMobileLandscape$ = this.store.isMobileLandscape$, this.isLandscape$ = this.store.isLandscape$, this.supportsAR$ = this.store.supportsAR$, this.compareOn$ = this.store.compareOn$, this.showZoom$ = this.store.showZoom$, this.showLayout$ = this.store.showLayout$, this.isEpoxy$ = this.store.isEpoxy$, this.productFields$ = this.store.productFields$, this.data$ = this.store.vm$, this.trackingEvents = p.y8, this.forceHideLabel = !1, this.rotationButtonOrientationException() && (this.forceHideLabel = !0)
                        }
                        set inline(e) {
                            this.store.inline = e
                        }
                        get isDesktop() {
                            return this.store.isDesktop
                        }
                        get isMobile() {
                            return this.store.isMobile
                        }
                        get orientation() {
                            return this.rotationButtonOrientationException() ? (this.forceHideLabel = !0, L.i5.portrait) : (this.forceHideLabel = !1, this.deviceService.orientation)
                        }
                        rotationButtonOrientationException() {
                            return (this.deviceService.viewport?.width || 0) < Z.Ff.screenBreakpoints.tabletRaw && this.deviceService.isLandscape
                        }
                        showPictureMenu(e, o) {
                            this.store.togglePictureMenu(e, o)
                        }
                        showProductDetails() {
                            this.store.showProductDetails()
                        }
                        showAr() {
                            this.store.showArDialog()
                        }
                        toggleZoom() {
                            this.store.toggleZoom()
                        }
                        toggleLayout(e) {
                            this.store.toggleLayout(e)
                        }
                        toggleCompare() {
                            this.store.toggleCompare()
                        }
                    }
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275cmp = t.Xpm({
                        type: n,
                        selectors: [
                            ["CrownCrete-floating-actions"]
                        ],
                        hostAttrs: [1, "CrownCrete-floating-actions"],
                        inputs: {
                            inline: "inline"
                        },
                        standalone: !0,
                        features: [t._Bn([xe]), t.jDz],
                        decls: 1,
                        vars: 10,
                        consts: [
                            [4, "ngrxLet"],
                            [4, "ngIf"],
                            ["class", "outline small CrownCrete-button rotation-button", 4, "ngIf"],
                            [1, "floating-actions-container"],
                            ["CrownCrete-icon-button", "", "class", "outline trigger", 3, "click", 4, "ngIf"],
                            [1, "picture-menu"],
                            ["class", "picture-menu-item-label", 3, "click", 4, "ngIf"],
                            ["class", "picture-menu-item-label desktop-not", 3, "click", 4, "ngIf"],
                            ["class", "picture-menu-item-label", 4, "ngIf"],
                            ["class", "actions-backdrop", 3, "click", 4, "ngIf"],
                            [1, "outline", "small", "CrownCrete-button", "rotation-button"],
                            ["name", "fl_refresh_o"],
                            [3, "type"],
                            ["CrownCrete-icon-button", "", 1, "outline", "trigger", 3, "click"],
                            [3, "name"],
                            [1, "picture-menu-item-label", 3, "click"],
                            [1, "CrownCrete-caption"],
                            ["CrownCrete-icon-button", "", 1, "outline", 3, "CrownCreteTrackClick", "props"],
                            ["name", "fl_info_o"],
                            [1, "picture-menu-item-label", "desktop-not", 3, "click"],
                            ["name", "fl_ar"],
                            [1, "CrownCrete-caption", "CrownCrete-semi-regular"],
                            ["CrownCrete-icon-button", "", 1, "outline"],
                            [1, "picture-menu-item-label"],
                            ["CrownCrete-icon-button", "", 1, "outline", 3, "click"],
                            ["name", "fl_compare_s"],
                            [1, "actions-backdrop", 3, "click"]
                        ],
                        template: function(e, o) {
                            1 & e && t.YNc(0, Cn, 3, 2, "ng-container", 0), 2 & e && t.Q6J("ngrxLet", t.qlk(1, Tn, o.isMobileLandscape$, o.isLandscape$, o.showLayout$, o.supportsAR$, o.compareOn$, o.showZoom$, o.isEpoxy$, o.data$))
                        },
                        dependencies: [u.ez, u.O5, u.Ov, ht.K, d._N, d.eJ, at.N, rt.X, _t.c, $t.X9, dn, ri],
                        styles: [".CrownCrete-floating-actions{position:absolute;top:var(--fl-y-padding);right:var(--fl-x-padding);display:flex;flex-direction:column}.CrownCrete-floating-actions .actions-backdrop{position:fixed;z-index:1;inset:0}@media (max-width: 767px){.CrownCrete-floating-actions .actions-backdrop{background-color:var(--fl-overlay)}}.CrownCrete-floating-actions .floating-actions-container{z-index:2}.CrownCrete-floating-actions .CrownCrete-icon-button.trigger{position:relative;z-index:3}.CrownCrete-floating-actions .picture-menu.visible .picture-menu-item-label p{display:inline-block}@media (max-width: 767px){.CrownCrete-floating-actions .picture-menu.visible .picture-menu-item-label:nth-child(1){top:52px}.CrownCrete-floating-actions .picture-menu.visible .picture-menu-item-label:nth-child(2){top:104px}.CrownCrete-floating-actions .picture-menu.visible .picture-menu-item-label:nth-child(3){top:156px}.CrownCrete-floating-actions .picture-menu.visible .picture-menu-item-label:nth-child(4){top:208px}.CrownCrete-floating-actions .picture-menu.visible .picture-menu-item-label:nth-child(5){top:260px}.CrownCrete-floating-actions .picture-menu.visible .picture-menu-item-label:nth-child(6){top:312px}.CrownCrete-floating-actions .picture-menu.visible .picture-menu-item-label:nth-child(7){top:364px}}@media (min-width: 768px) and (orientation: portrait){.CrownCrete-floating-actions .picture-menu.visible .picture-menu-item-label:nth-child(1){top:52px}.CrownCrete-floating-actions .picture-menu.visible .picture-menu-item-label:nth-child(2){top:104px}.CrownCrete-floating-actions .picture-menu.visible .picture-menu-item-label:nth-child(3){top:156px}.CrownCrete-floating-actions .picture-menu.visible .picture-menu-item-label:nth-child(4){top:208px}.CrownCrete-floating-actions .picture-menu.visible .picture-menu-item-label:nth-child(5){top:260px}.CrownCrete-floating-actions .picture-menu.visible .picture-menu-item-label:nth-child(6){top:312px}.CrownCrete-floating-actions .picture-menu.visible .picture-menu-item-label:nth-child(7){top:364px}}@media (min-width: 768px) and (orientation: landscape){.CrownCrete-floating-actions .picture-menu.visible .picture-menu-item-label:nth-child(1){top:-52px}.CrownCrete-floating-actions .picture-menu.visible .picture-menu-item-label:nth-child(2){top:-104px}.CrownCrete-floating-actions .picture-menu.visible .picture-menu-item-label:nth-child(3){top:-156px}.CrownCrete-floating-actions .picture-menu.visible .picture-menu-item-label:nth-child(4){top:-208px}.CrownCrete-floating-actions .picture-menu.visible .picture-menu-item-label:nth-child(5){top:-260px}.CrownCrete-floating-actions .picture-menu.visible .picture-menu-item-label:nth-child(6){top:-312px}.CrownCrete-floating-actions .picture-menu.visible .picture-menu-item-label:nth-child(7){top:-364px}}.CrownCrete-floating-actions .picture-menu .picture-menu-item-label{position:absolute;transition:all .3s ease-in-out;top:0;right:0;display:inline-flex;align-items:center;cursor:pointer}.CrownCrete-floating-actions .picture-menu .picture-menu-item-label p{color:var(--fl-bg);margin-right:var(--fl-x-padding);white-space:nowrap;display:none}@media (min-width: 768px) and (orientation: landscape){.CrownCrete-floating-actions{position:fixed;top:initial;right:initial;bottom:var(--fl-y-padding);left:var(--fl-x-padding);z-index:1}.CrownCrete-floating-actions .picture-menu-item-label p{display:inline-block}}.CrownCrete-floating-actions .rotation-button{padding:.5rem;height:initial!important;z-index:1;cursor:default}.CrownCrete-floating-actions .rotation-button CrownCrete-icon{color:var(--fl-primary);margin:0 .5rem 0 0}@media (max-width: 1023px){.CrownCrete-floating-actions .rotation-button{position:absolute}}@media (max-width: 767px){.CrownCrete-floating-actions .rotation-button{flex-direction:row}}@media (max-width: 1023px) and (orientation: portrait){.CrownCrete-floating-actions .rotation-button{top:3.25rem;width:2.5rem;flex-direction:column}.CrownCrete-floating-actions .rotation-button CrownCrete-icon{margin:0}}@media (max-width: 1023px) and (min-width: 768px) and (orientation: landscape){.CrownCrete-floating-actions .rotation-button{left:3.25rem;height:2.5rem;flex-direction:row}}@media (max-width: 767px) and (orientation: landscape){.CrownCrete-floating-actions .rotation-button{top:3.25rem;width:2.5rem;flex-direction:column}.CrownCrete-floating-actions .rotation-button CrownCrete-icon{margin:0}.CrownCrete-floating-actions .rotation-button .slider-wrapper{padding:0!important}}\n"],
                        encapsulation: 2,
                        changeDetection: 0
                    }), n
                })(),
                Ge = (() => {
                    class n extends f.m1 {
                        constructor() {
                            super({}), this.configProvider = (0, t.f3M)(p.FI), this.dialogProvider = (0, t.f3M)(p._R), this.eventsProvider = (0, t.f3M)(Ct.QT), this.storageProvider = (0, t.f3M)(p.Fg), this.roomsProvider = (0, t.f3M)(p.XZ), this.listenToEvents()
                        }
                        listenToEvents() {
                            (0, m.T)(this.listenToImageSizeEvent(), this.listenToHelpEvent()).pipe((0, P.R)(this.destroy$)).subscribe()
                        }
                        listenToHelpEvent() {
                            return this.eventsProvider.listen(p.Mv).pipe((0, P.R)(this.destroy$), (0, M.w)(() => this.roomsProvider.selectVisualizationSize$.pipe((0, mt.P)(Boolean))), (0, M.w)(e => this.handleTutorial(e, !0)), (0, S.U)(() => {}))
                        }
                        listenToImageSizeEvent() {
                            return this.eventsProvider.listen(p.VI).pipe((0, P.R)(this.destroy$), (0, M.w)(e => this.handleTutorial(e?.size)), (0, S.U)(() => {}))
                        }
                        handleTutorial(e, o = !1) {
                            return this.storageProvider.get(p.dR.tutorialSeen).pipe((0, $.h)(r => !r || o), (0, M.w)(() => this.configProvider.companyConfig$.pipe((0, F.q)(1))), (0, M.w)(r => this.openTutorial(e, !!r.company?.supportsAR, r.company?.disclaimer)), (0, M.w)(() => this.storageProvider.set(p.dR.tutorialSeen, !0)))
                        }
                        openTutorial(e, o, r) {
                            return (0, Ht.D)(c.e(23).then(c.bind(c, 9023))).pipe((0, P.R)(this.destroy$), (0, M.w)(({
                                CrownCreteTutorialComponent: g
                            }) => (this.tutorialDialogRef = this.dialogProvider.open(g, {
                                backdropClass: Z.bj.darkOverlay,
                                containerClass: Z.bj.attachBottom,
                                data: {
                                    imageSize: e,
                                    supportsAr: o,
                                    disclaimer: r
                                }
                            }), this.tutorialDialogRef.beforeClosed())))
                        }
                    }
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275prov = t.Yz7({
                        token: n,
                        factory: n.\u0275fac
                    }), n
                })(),
                Pn = (() => {
                    class n {
                        constructor() {
                            this.canvasContainerCls = "CrownCrete-room-viewer-container", this.windowRef = (0, t.f3M)(Z.Kz), this.mobileBreakpoint = +Z.YF.tablet?.replace("px", "")
                        }
                        get isMobile() {
                            return this.mobileBreakpoint > this.windowRef.innerWidth
                        }
                        calculateSize(e) {
                            const o = this.windowRef.document.getElementsByClassName(this.canvasContainerCls)?.item(0);
                            return {
                                width: o?.clientWidth || 1,
                                height: o?.clientHeight || 1
                            }
                        }
                    }
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275prov = t.Yz7({
                        token: n,
                        factory: n.\u0275fac
                    }), n
                })();
            const Ln = {
                    provide: Kt.G_,
                    useFactory: () => new Pn
                },
                Sn = ["mobileAction"];

            function Bn(n, l) {
                if(1 & n && (t.TgZ(0, "p", 13), t._uU(1), t.qZA()), 2 & n) {
                    const e = t.oxw().ngrxLet;
                    t.xp6(1), t.hij(" ", e.disclaimer.text || "", " ")
                }
            }

            function Mn(n, l) {
                if(1 & n && t._UZ(0, "CrownCrete-action-container", 14), 2 & n) {
                    const e = t.oxw().ngrxLet;
                    t.Q6J("actionButton", e.activeActionType)
                }
            }

            function En(n, l) {
                if(1 & n && (t.TgZ(0, "div", 15), t._UZ(1, "CrownCrete-visualisation-actions", 16), t.qZA()), 2 & n) {
                    const e = t.oxw().ngrxLet,
                        o = t.oxw();
                    t.ekj("hidden-ui", !e.showLayout), t.xp6(1), t.Q6J("actionContainerVisible", (null == o.mobileActionElRef || null == o.mobileActionElRef.nativeElement ? null : o.mobileActionElRef.nativeElement.offsetParent) || void 0)
                }
            }

            function kn(n, l) {
                if(1 & n && (t.ynx(0), t.TgZ(1, "div", 1), t._UZ(2, "CrownCrete-floating-actions", 2), t.TgZ(3, "div", 3), t._UZ(4, "CrownCrete-floating-bar"), t.TgZ(5, "div", 4), t._UZ(6, "CrownCrete-room-viewer"), t.TgZ(7, "div", 5), t.YNc(8, Bn, 2, 1, "p", 6), t.TgZ(9, "div", 7), t._UZ(10, "CrownCrete-floating-actions", 8), t.qZA()()()(), t.TgZ(11, "div", 9, 10), t.YNc(13, Mn, 1, 1, "CrownCrete-action-container", 11), t.qZA(), t.YNc(14, En, 2, 3, "div", 12), t.qZA(), t.BQk()), 2 & n) {
                    const e = l.ngrxLet;
                    t.xp6(8), t.Q6J("ngIf", null == e.disclaimer ? null : e.disclaimer.text), t.xp6(2), t.Q6J("inline", !0), t.xp6(1), t.ekj("hidden-ui", !e.showLayout), t.xp6(2), t.Q6J("ngIf", e.activeActionType), t.xp6(1), t.Q6J("ngIf", e.showLayout)
                }
            }
            const An = function(n, l, e, o) {
                return {
                    activeActionType: n,
                    disclaimer: l,
                    showLayout: e,
                    isDynamicProductMode: o
                }
            };
            let Dn = (() => {
                class n extends q.YU {
                    constructor() {
                        super(...arguments), this.store = (0, t.f3M)(Bt), this.eventsStore = (0, t.f3M)(Ge), this.roomsProvider = (0, t.f3M)(p.XZ), this.productsProvider = (0, t.f3M)(p.IA), this.windowRef = (0, t.f3M)(Z.Kz), this.activeActionType$ = this.store.activeActionType$, this.disclaimer$ = this.store.disclaimer$, this.showLayout$ = this.roomsProvider.showLayout$, this.isDynamicProductMode$ = this.roomsProvider.selectIsDynamicMode$
                    }
                    ngOnInit() {
                        this.handleDimensionChange(), this.store.watchFocus()
                    }
                    ngOnDestroy() {
                        super.ngOnDestroy(), this.store.closeActionContainer(), this.roomsProvider.toggleZoom(!1), this.roomsProvider.toggleLayoutVisibility(!0), this.productsProvider.clearEpoxy()
                    }
                    handleDimensionChange() {
                        this.store.handleOrientationChange(), (0, m.T)((0, w.R)(this.windowRef, "resize"), (0, w.R)(this.windowRef, "orientationchange")).pipe((0, x.g)(10)).subscribe(e => {
                            this.store.handleOrientationChange(), "resize" !== e.type || this.store.closeActionContainer()
                        })
                    }
                }
                return n.\u0275fac = function() {
                    let l;
                    return function(o) {
                        return (l || (l = t.n5z(n)))(o || n)
                    }
                }(), n.\u0275cmp = t.Xpm({
                    type: n,
                    selectors: [
                        ["CrownCrete-default-room-layout"]
                    ],
                    viewQuery: function(e, o) {
                        if(1 & e && t.Gf(Sn, 5, t.SBq), 2 & e) {
                            let r;
                            t.iGM(r = t.CRH()) && (o.mobileActionElRef = r.first)
                        }
                    },
                    hostAttrs: [1, "CrownCrete-base-room-layout"],
                    standalone: !0,
                    features: [t._Bn([(0, f.E6)(Bt), (0, f.E6)(Ge), Ln]), t.qOj, t.jDz],
                    decls: 1,
                    vars: 6,
                    consts: [
                        [4, "ngrxLet"],
                        [1, "CrownCrete-base-room"],
                        [1, "CrownCrete-mobile-floating-actions"],
                        [1, "CrownCrete-room-viewer-container"],
                        [1, "viewer-wrapper"],
                        [1, "bottom-floating-section"],
                        ["class", "CrownCrete-caption disclaimer", 4, "ngIf"],
                        [1, "floating-actions"],
                        [3, "inline"],
                        [1, "CrownCrete-room-action"],
                        ["mobileAction", ""],
                        [3, "actionButton", 4, "ngIf"],
                        ["class", "CrownCrete-room-bar", 3, "hidden-ui", 4, "ngIf"],
                        [1, "CrownCrete-caption", "disclaimer"],
                        [3, "actionButton"],
                        [1, "CrownCrete-room-bar"],
                        [3, "actionContainerVisible"]
                    ],
                    template: function(e, o) {
                        1 & e && t.YNc(0, kn, 15, 6, "ng-container", 0), 2 & e && t.Q6J("ngrxLet", t.l5B(1, An, o.activeActionType$, o.disclaimer$, o.showLayout$, o.isDynamicProductMode$))
                    },
                    dependencies: [u.ez, u.O5, d._N, d.eJ, C.au, E.Wo, Y.v, gt.wC, j, ce, We, jo, On],
                    styles: ['.CrownCrete-base-room{height:100dvh;position:relative;display:flex;flex-direction:column}@media (min-width: 1024px){.CrownCrete-base-room .CrownCrete-mobile-floating-actions{display:none}}.CrownCrete-base-room .CrownCrete-floating-bar{position:absolute;z-index:1;top:var(--fl-y-padding);left:var(--fl-x-padding)}@media (max-width: 767px) and (orientation: landscape){.CrownCrete-base-room .CrownCrete-floating-bar{right:var(--fl-x-padding)}}@media (min-width: 768px){.CrownCrete-base-room .CrownCrete-floating-bar{top:0;left:0}}@media (max-width: 1023px){.CrownCrete-base-room{display:grid;max-width:100vw;grid-template-areas:"viewer" "actions" "bar"}}@media (orientation: portrait) and (max-width: 1023px){.CrownCrete-base-room{grid-template-rows:1fr auto auto}}@media (orientation: landscape) and (max-width: 767px){.CrownCrete-base-room{grid-template-areas:"viewer actions" "bar actions";grid-template-columns:1fr auto;grid-template-rows:1fr}}@media (orientation: landscape) and (min-width: 768px){.CrownCrete-base-room{display:flex;flex-direction:row}}.CrownCrete-base-room .CrownCrete-room-viewer-container{position:relative;z-index:0;background-color:var(--fl-bg200);flex:1;height:100%}@media (orientation: landscape) and (max-width: 1023px){.CrownCrete-base-room .CrownCrete-room-viewer-container{grid-area:viewer}}.CrownCrete-base-room .CrownCrete-room-viewer-container .viewer-wrapper{width:100%;height:100%;position:relative}.CrownCrete-base-room .CrownCrete-room-viewer-container .viewer-wrapper .CrownCrete-room-viewer{position:absolute;inset:0}.CrownCrete-base-room .CrownCrete-room-viewer-container .bottom-floating-section{position:absolute;left:var(--fl-x-padding-xs);bottom:var(--fl-y-padding-xs)}@media (min-width: 768px){.CrownCrete-base-room .CrownCrete-room-viewer-container .bottom-floating-section{left:.75rem;bottom:.75rem}.CrownCrete-base-room .CrownCrete-room-viewer-container .bottom-floating-section .disclaimer{max-width:328px}}.CrownCrete-base-room .CrownCrete-room-viewer-container .bottom-floating-section .CrownCrete-caption.disclaimer{display:inline-flex;color:var(--fl-bg);background-color:var(--fl-overlay);border-radius:var(--fl-border-radius);padding:.25rem .5rem}@media (max-width: 767px){.CrownCrete-base-room .CrownCrete-room-viewer-container .bottom-floating-section .CrownCrete-caption.disclaimer{display:none}}.CrownCrete-base-room .CrownCrete-room-viewer-container .bottom-floating-section .floating-actions{margin-top:var(--fl-y-padding-xs)}.CrownCrete-base-room .CrownCrete-room-viewer-container .bottom-floating-section .floating-actions .CrownCrete-floating-actions{position:initial}@media (max-width: 1023px){.CrownCrete-base-room .CrownCrete-room-viewer-container .bottom-floating-section .floating-actions{display:none}}.CrownCrete-base-room .CrownCrete-room-viewer-container .disclaimer-wrapper{position:absolute;left:var(--fl-x-padding-xs);bottom:var(--fl-y-padding-xs);background-color:var(--fl-overlay);padding:.25rem .5rem;border-radius:var(--fl-border-radius)}.CrownCrete-base-room .CrownCrete-room-viewer-container .disclaimer-wrapper .CrownCrete-caption{color:var(--fl-bg)}@media (max-width: 767px) and (orientation: portrait){.CrownCrete-base-room .CrownCrete-room-viewer-container .disclaimer-wrapper{display:none}}@media (min-width: 768px) and (orientation: landscape){.CrownCrete-base-room .CrownCrete-room-viewer-container .disclaimer-wrapper{bottom:var(--fl-y-padding);left:4.5rem;max-width:32vw}}.CrownCrete-base-room .CrownCrete-room-action{display:none}@media (max-width: 767px){.CrownCrete-base-room .CrownCrete-room-action{grid-area:actions;display:block}}@media (orientation: portrait){.CrownCrete-base-room .CrownCrete-room-action{display:block}}.CrownCrete-base-room .CrownCrete-room-bar{background-color:var(--fl-bg);z-index:0}@media (orientation: landscape) and (max-width: 1023px){.CrownCrete-base-room .CrownCrete-room-bar{grid-area:bar}}@media (min-width: 768px){.CrownCrete-base-room .CrownCrete-room-bar{z-index:0}}\n'],
                    encapsulation: 2
                }), n
            })()
        },
        9111: (K, v, c) => {
            "use strict";
            c.d(v, {
                p: () => Qe
            });
            var t = c(2560),
                u = c(4666),
                d = c(2874),
                f = c(7759);

            function m(b) {
                return "function" == typeof b
            }
            let w = !1;
            const x = {
                Promise: void 0,
                set useDeprecatedSynchronousErrorHandling(b) {
                    if(b) {
                        const a = new Error;
                        console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + a.stack)
                    } else w && console.log("RxJS: Back to a better error behavior. Thank you. <3");
                    w = b
                },
                get useDeprecatedSynchronousErrorHandling() {
                    return w
                }
            };

            function C(b) {
                setTimeout(() => {
                    throw b
                }, 0)
            }
            const E = {
                    closed: !0,
                    next(b) {},
                    error(b) {
                        if(x.useDeprecatedSynchronousErrorHandling) throw b;
                        C(b)
                    },
                    complete() {}
                },
                Y = Array.isArray || (b => b && "number" == typeof b.length),
                P = (() => {
                    function b(a) {
                        return Error.call(this), this.message = a ? `${a.length} errors occurred during unsubscription:\n${a.map((i,s)=>`${s+1}) ${i.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = a, this
                    }
                    return b.prototype = Object.create(Error.prototype), b
                })();
            class V {
                constructor(a) {
                    this.closed = !1, this._parentOrParents = null, this._subscriptions = null, a && (this._ctorUnsubscribe = !0, this._unsubscribe = a)
                }
                unsubscribe() {
                    let a;
                    if(this.closed) return;
                    let {
                        _parentOrParents: i,
                        _ctorUnsubscribe: s,
                        _unsubscribe: h,
                        _subscriptions: _
                    } = this;
                    if(this.closed = !0, this._parentOrParents = null, this._subscriptions = null, i instanceof V) i.remove(this);
                    else if(null !== i)
                        for(let y = 0; y < i.length; ++y) i[y].remove(this);
                    if(m(h)) {
                        s && (this._unsubscribe = void 0);
                        try {
                            h.call(this)
                        } catch (y) {
                            a = y instanceof P ? $(y.errors) : [y]
                        }
                    }
                    if(Y(_)) {
                        let y = -1,
                            j = _.length;
                        for(; ++y < j;) {
                            const ot = _[y];
                            if(null !== (b = ot) && "object" == typeof b) try {
                                ot.unsubscribe()
                            } catch (nt) {
                                a = a || [], nt instanceof P ? a = a.concat($(nt.errors)) : a.push(nt)
                            }
                        }
                    }
                    var b;
                    if(a) throw new P(a)
                }
                add(a) {
                    let i = a;
                    if(!a) return V.EMPTY;
                    switch(typeof a) {
                        case "function":
                            i = new V(a);
                        case "object":
                            if(i === this || i.closed || "function" != typeof i.unsubscribe) return i;
                            if(this.closed) return i.unsubscribe(), i;
                            if(!(i instanceof V)) {
                                const _ = i;
                                i = new V, i._subscriptions = [_]
                            }
                            break;
                        default:
                            throw new Error("unrecognized teardown " + a + " added to Subscription.")
                    }
                    let {
                        _parentOrParents: s
                    } = i;
                    if(null === s) i._parentOrParents = this;
                    else if(s instanceof V) {
                        if(s === this) return i;
                        i._parentOrParents = [s, this]
                    } else {
                        if(-1 !== s.indexOf(this)) return i;
                        s.push(this)
                    }
                    const h = this._subscriptions;
                    return null === h ? this._subscriptions = [i] : h.push(i), i
                }
                remove(a) {
                    const i = this._subscriptions;
                    if(i) {
                        const s = i.indexOf(a); - 1 !== s && i.splice(s, 1)
                    }
                }
            }
            var b;

            function $(b) {
                return b.reduce((a, i) => a.concat(i instanceof P ? i.errors : i), [])
            }
            V.EMPTY = ((b = new V).closed = !0, b);
            const I = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();
            class z extends V {
                constructor(a, i, s) {
                    switch(super(), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
                        case 0:
                            this.destination = E;
                            break;
                        case 1:
                            if(!a) {
                                this.destination = E;
                                break
                            }
                            if("object" == typeof a) {
                                a instanceof z ? (this.syncErrorThrowable = a.syncErrorThrowable, this.destination = a, a.add(this)) : (this.syncErrorThrowable = !0, this.destination = new F(this, a));
                                break
                            }
                        default:
                            this.syncErrorThrowable = !0, this.destination = new F(this, a, i, s)
                    }
                } [I]() {
                    return this
                }
                static create(a, i, s) {
                    const h = new z(a, i, s);
                    return h.syncErrorThrowable = !1, h
                }
                next(a) {
                    this.isStopped || this._next(a)
                }
                error(a) {
                    this.isStopped || (this.isStopped = !0, this._error(a))
                }
                complete() {
                    this.isStopped || (this.isStopped = !0, this._complete())
                }
                unsubscribe() {
                    this.closed || (this.isStopped = !0, super.unsubscribe())
                }
                _next(a) {
                    this.destination.next(a)
                }
                _error(a) {
                    this.destination.error(a), this.unsubscribe()
                }
                _complete() {
                    this.destination.complete(), this.unsubscribe()
                }
                _unsubscribeAndRecycle() {
                    const {
                        _parentOrParents: a
                    } = this;
                    return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = a, this
                }
            }
            class F extends z {
                constructor(a, i, s, h) {
                    super(), this._parentSubscriber = a;
                    let _, y = this;
                    m(i) ? _ = i : i && (_ = i.next, s = i.error, h = i.complete, i !== E && (y = Object.create(i), m(y.unsubscribe) && this.add(y.unsubscribe.bind(y)), y.unsubscribe = this.unsubscribe.bind(this))), this._context = y, this._next = _, this._error = s, this._complete = h
                }
                next(a) {
                    if(!this.isStopped && this._next) {
                        const {
                            _parentSubscriber: i
                        } = this;
                        x.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable ? this.__tryOrSetError(i, this._next, a) && this.unsubscribe() : this.__tryOrUnsub(this._next, a)
                    }
                }
                error(a) {
                    if(!this.isStopped) {
                        const {
                            _parentSubscriber: i
                        } = this, {
                            useDeprecatedSynchronousErrorHandling: s
                        } = x;
                        if(this._error) s && i.syncErrorThrowable ? (this.__tryOrSetError(i, this._error, a), this.unsubscribe()) : (this.__tryOrUnsub(this._error, a), this.unsubscribe());
                        else if(i.syncErrorThrowable) s ? (i.syncErrorValue = a, i.syncErrorThrown = !0) : C(a), this.unsubscribe();
                        else {
                            if(this.unsubscribe(), s) throw a;
                            C(a)
                        }
                    }
                }
                complete() {
                    if(!this.isStopped) {
                        const {
                            _parentSubscriber: a
                        } = this;
                        if(this._complete) {
                            const i = () => this._complete.call(this._context);
                            x.useDeprecatedSynchronousErrorHandling && a.syncErrorThrowable ? (this.__tryOrSetError(a, i), this.unsubscribe()) : (this.__tryOrUnsub(i), this.unsubscribe())
                        } else this.unsubscribe()
                    }
                }
                __tryOrUnsub(a, i) {
                    try {
                        a.call(this._context, i)
                    } catch (s) {
                        if(this.unsubscribe(), x.useDeprecatedSynchronousErrorHandling) throw s;
                        C(s)
                    }
                }
                __tryOrSetError(a, i, s) {
                    if(!x.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                    try {
                        i.call(this._context, s)
                    } catch (h) {
                        return x.useDeprecatedSynchronousErrorHandling ? (a.syncErrorValue = h, a.syncErrorThrown = !0, !0) : (C(h), !0)
                    }
                    return !1
                }
                _unsubscribe() {
                    const {
                        _parentSubscriber: a
                    } = this;
                    this._context = null, this._parentSubscriber = null, a.unsubscribe()
                }
            }
            const Z = "function" == typeof Symbol && Symbol.observable || "@@observable";

            function U(b) {
                return b
            }
            let H = (() => {
                class b {
                    constructor(i) {
                        this._isScalar = !1, i && (this._subscribe = i)
                    }
                    lift(i) {
                        const s = new b;
                        return s.source = this, s.operator = i, s
                    }
                    subscribe(i, s, h) {
                        const {
                            operator: _
                        } = this, y = function L(b, a, i) {
                            if(b) {
                                if(b instanceof z) return b;
                                if(b[I]) return b[I]()
                            }
                            return b || a || i ? new z(b, a, i) : new z(E)
                        }(i, s, h);
                        if(y.add(_ ? _.call(y, this.source) : this.source || x.useDeprecatedSynchronousErrorHandling && !y.syncErrorThrowable ? this._subscribe(y) : this._trySubscribe(y)), x.useDeprecatedSynchronousErrorHandling && y.syncErrorThrowable && (y.syncErrorThrowable = !1, y.syncErrorThrown)) throw y.syncErrorValue;
                        return y
                    }
                    _trySubscribe(i) {
                        try {
                            return this._subscribe(i)
                        } catch (s) {
                            x.useDeprecatedSynchronousErrorHandling && (i.syncErrorThrown = !0, i.syncErrorValue = s),
                                function p(b) {
                                    for(; b;) {
                                        const {
                                            closed: a,
                                            destination: i,
                                            isStopped: s
                                        } = b;
                                        if(a || s) return !1;
                                        b = i && i instanceof z ? i : null
                                    }
                                    return !0
                                }(i) ? i.error(s) : console.warn(s)
                        }
                    }
                    forEach(i, s) {
                        return new(s = X(s))((h, _) => {
                            let y;
                            y = this.subscribe(j => {
                                try {
                                    i(j)
                                } catch (ot) {
                                    _(ot), y && y.unsubscribe()
                                }
                            }, _, h)
                        })
                    }
                    _subscribe(i) {
                        const {
                            source: s
                        } = this;
                        return s && s.subscribe(i)
                    } [Z]() {
                        return this
                    }
                    pipe(...i) {
                        return 0 === i.length ? this : function Q(b) {
                            return 0 === b.length ? U : 1 === b.length ? b[0] : function(i) {
                                return b.reduce((s, h) => h(s), i)
                            }
                        }(i)(this)
                    }
                    toPromise(i) {
                        return new(i = X(i))((s, h) => {
                            let _;
                            this.subscribe(y => _ = y, y => h(y), () => s(_))
                        })
                    }
                }
                return b.create = a => new b(a), b
            })();

            function X(b) {
                if(b || (b = x.Promise || Promise), !b) throw new Error("no Promise impl found");
                return b
            }
            const M = (() => {
                function b() {
                    return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
                }
                return b.prototype = Object.create(Error.prototype), b
            })();
            class tt extends V {
                constructor(a, i) {
                    super(), this.subject = a, this.subscriber = i, this.closed = !1
                }
                unsubscribe() {
                    if(this.closed) return;
                    this.closed = !0;
                    const a = this.subject,
                        i = a.observers;
                    if(this.subject = null, !i || 0 === i.length || a.isStopped || a.closed) return;
                    const s = i.indexOf(this.subscriber); - 1 !== s && i.splice(s, 1)
                }
            }
            class W extends z {
                constructor(a) {
                    super(a), this.destination = a
                }
            }
            let dt = (() => {
                class b extends H {
                    constructor() {
                        super(), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null
                    } [I]() {
                        return new W(this)
                    }
                    lift(i) {
                        const s = new yt(this, this);
                        return s.operator = i, s
                    }
                    next(i) {
                        if(this.closed) throw new M;
                        if(!this.isStopped) {
                            const {
                                observers: s
                            } = this, h = s.length, _ = s.slice();
                            for(let y = 0; y < h; y++) _[y].next(i)
                        }
                    }
                    error(i) {
                        if(this.closed) throw new M;
                        this.hasError = !0, this.thrownError = i, this.isStopped = !0;
                        const {
                            observers: s
                        } = this, h = s.length, _ = s.slice();
                        for(let y = 0; y < h; y++) _[y].error(i);
                        this.observers.length = 0
                    }
                    complete() {
                        if(this.closed) throw new M;
                        this.isStopped = !0;
                        const {
                            observers: i
                        } = this, s = i.length, h = i.slice();
                        for(let _ = 0; _ < s; _++) h[_].complete();
                        this.observers.length = 0
                    }
                    unsubscribe() {
                        this.isStopped = !0, this.closed = !0, this.observers = null
                    }
                    _trySubscribe(i) {
                        if(this.closed) throw new M;
                        return super._trySubscribe(i)
                    }
                    _subscribe(i) {
                        if(this.closed) throw new M;
                        return this.hasError ? (i.error(this.thrownError), V.EMPTY) : this.isStopped ? (i.complete(), V.EMPTY) : (this.observers.push(i), new tt(this, i))
                    }
                    asObservable() {
                        const i = new H;
                        return i.source = this, i
                    }
                }
                return b.create = (a, i) => new yt(a, i), b
            })();
            class yt extends dt {
                constructor(a, i) {
                    super(), this.destination = a, this.source = i
                }
                next(a) {
                    const {
                        destination: i
                    } = this;
                    i && i.next && i.next(a)
                }
                error(a) {
                    const {
                        destination: i
                    } = this;
                    i && i.error && this.destination.error(a)
                }
                complete() {
                    const {
                        destination: a
                    } = this;
                    a && a.complete && this.destination.complete()
                }
                _subscribe(a) {
                    const {
                        source: i
                    } = this;
                    return i ? this.source.subscribe(a) : V.EMPTY
                }
            }
            class It extends V {
                constructor(a, i) {
                    super()
                }
                schedule(a, i = 0) {
                    return this
                }
            }
            let Ct = (() => {
                class b {
                    constructor(i, s = b.now) {
                        this.SchedulerAction = i, this.now = s
                    }
                    schedule(i, s = 0, h) {
                        return new this.SchedulerAction(this, i).schedule(h, s)
                    }
                }
                return b.now = () => Date.now(), b
            })();
            class pt extends Ct {
                constructor(a, i = Ct.now) {
                    super(a, () => pt.delegate && pt.delegate !== this ? pt.delegate.now() : i()), this.actions = [], this.active = !1, this.scheduled = void 0
                }
                schedule(a, i = 0, s) {
                    return pt.delegate && pt.delegate !== this ? pt.delegate.schedule(a, i, s) : super.schedule(a, i, s)
                }
                flush(a) {
                    const {
                        actions: i
                    } = this;
                    if(this.active) return void i.push(a);
                    let s;
                    this.active = !0;
                    do {
                        if(s = a.execute(a.state, a.delay)) break
                    } while(a = i.shift());
                    if(this.active = !1, s) {
                        for(; a = i.shift();) a.unsubscribe();
                        throw s
                    }
                }
            }
            const at = new pt(class mt extends It {
                    constructor(a, i) {
                        super(a, i), this.scheduler = a, this.work = i, this.pending = !1
                    }
                    schedule(a, i = 0) {
                        if(this.closed) return this;
                        this.state = a;
                        const s = this.id,
                            h = this.scheduler;
                        return null != s && (this.id = this.recycleAsyncId(h, s, i)), this.pending = !0, this.delay = i, this.id = this.id || this.requestAsyncId(h, this.id, i), this
                    }
                    requestAsyncId(a, i, s = 0) {
                        return setInterval(a.flush.bind(a, this), s)
                    }
                    recycleAsyncId(a, i, s = 0) {
                        if(null !== s && this.delay === s && !1 === this.pending) return i;
                        clearInterval(i)
                    }
                    execute(a, i) {
                        if(this.closed) return new Error("executing a cancelled action");
                        this.pending = !1;
                        const s = this._execute(a, i);
                        if(s) return s;
                        !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
                    }
                    _execute(a, i) {
                        let h, s = !1;
                        try {
                            this.work(a)
                        } catch (_) {
                            s = !0, h = !!_ && _ || new Error(_)
                        }
                        if(s) return this.unsubscribe(), h
                    }
                    _unsubscribe() {
                        const a = this.id,
                            i = this.scheduler,
                            s = i.actions,
                            h = s.indexOf(this);
                        this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== h && s.splice(h, 1), null != a && (this.id = this.recycleAsyncId(i, a, null)), this.delay = null
                    }
                }),
                rt = {
                    leading: !0,
                    trailing: !1
                };

            function bt(b, a = at, i = rt) {
                return s => s.lift(new vt(b, a, i.leading, i.trailing))
            }
            class vt {
                constructor(a, i, s, h) {
                    this.duration = a, this.scheduler = i, this.leading = s, this.trailing = h
                }
                call(a, i) {
                    return i.subscribe(new Tt(a, this.duration, this.scheduler, this.leading, this.trailing))
                }
            }
            class Tt extends z {
                constructor(a, i, s, h, _) {
                    super(a), this.duration = i, this.scheduler = s, this.leading = h, this.trailing = _, this._hasTrailingValue = !1, this._trailingValue = null
                }
                _next(a) {
                    this.throttled ? this.trailing && (this._trailingValue = a, this._hasTrailingValue = !0) : (this.add(this.throttled = this.scheduler.schedule(Ut, this.duration, {
                        subscriber: this
                    })), this.leading ? this.destination.next(a) : this.trailing && (this._trailingValue = a, this._hasTrailingValue = !0))
                }
                _complete() {
                    this._hasTrailingValue ? (this.destination.next(this._trailingValue), this.destination.complete()) : this.destination.complete()
                }
                clearThrottle() {
                    const a = this.throttled;
                    a && (this.trailing && this._hasTrailingValue && (this.destination.next(this._trailingValue), this._trailingValue = null, this._hasTrailingValue = !1), a.unsubscribe(), this.remove(a), this.throttled = null)
                }
            }

            function Ut(b) {
                const {
                    subscriber: a
                } = b;
                a.clearThrottle()
            }

            function Ot() {}

            function ne(b, a, i) {
                return function(h) {
                    return h.lift(new ye(b, a, i))
                }
            }
            class ye {
                constructor(a, i, s) {
                    this.nextOrObserver = a, this.error = i, this.complete = s
                }
                call(a, i) {
                    return i.subscribe(new Kt(a, this.nextOrObserver, this.error, this.complete))
                }
            }
            class Kt extends z {
                constructor(a, i, s, h) {
                    super(a), this._tapNext = Ot, this._tapError = Ot, this._tapComplete = Ot, this._tapError = s || Ot, this._tapComplete = h || Ot, m(i) ? (this._context = this, this._tapNext = i) : i && (this._context = i, this._tapNext = i.next || Ot, this._tapError = i.error || Ot, this._tapComplete = i.complete || Ot)
                }
                _next(a) {
                    try {
                        this._tapNext.call(this._context, a)
                    } catch (i) {
                        return void this.destination.error(i)
                    }
                    this.destination.next(a)
                }
                _error(a) {
                    try {
                        this._tapError.call(this._context, a)
                    } catch (i) {
                        return void this.destination.error(i)
                    }
                    this.destination.error(a)
                }
                _complete() {
                    try {
                        this._tapComplete.call(this._context)
                    } catch (a) {
                        return void this.destination.error(a)
                    }
                    return this.destination.complete()
                }
            }

            function Xt(b, a) {
                return i => i.lift(new kt(b, a))
            }
            class kt {
                constructor(a, i) {
                    this.compare = a, this.keySelector = i
                }
                call(a, i) {
                    return i.subscribe(new Ce(a, this.compare, this.keySelector))
                }
            }
            class Ce extends z {
                constructor(a, i, s) {
                    super(a), this.keySelector = s, this.hasKey = !1, "function" == typeof i && (this.compare = i)
                }
                compare(a, i) {
                    return a === i
                }
                _next(a) {
                    let i;
                    try {
                        const {
                            keySelector: h
                        } = this;
                        i = h ? h(a) : a
                    } catch (h) {
                        return this.destination.error(h)
                    }
                    let s = !1;
                    if(this.hasKey) try {
                        const {
                            compare: h
                        } = this;
                        s = h(this.key, i)
                    } catch (h) {
                        return this.destination.error(h)
                    } else this.hasKey = !0;
                    s || (this.key = i, this.destination.next(a))
                }
            }
            class Oe {
                constructor(a, i) {
                    this.predicate = a, this.thisArg = i
                }
                call(a, i) {
                    return i.subscribe(new Pt(a, this.predicate, this.thisArg))
                }
            }
            class Pt extends z {
                constructor(a, i, s) {
                    super(a), this.predicate = i, this.thisArg = s, this.count = 0
                }
                _next(a) {
                    let i;
                    try {
                        i = this.predicate.call(this.thisArg, a, this.count++)
                    } catch (s) {
                        return void this.destination.error(s)
                    }
                    i && this.destination.next(a)
                }
            }
            var ft = typeof window < "u" ? window : {
                    screen: {},
                    navigator: {}
                },
                At = (ft.matchMedia || function() {
                    return {
                        matches: !1
                    }
                }).bind(ft),
                se = !1,
                re = function() {};
            ft.addEventListener && ft.addEventListener("p", re, {
                get passive() {
                    return se = !0
                }
            }), ft.removeEventListener && ft.removeEventListener("p", re, !1);
            var ae = se,
                Wt = "ontouchstart" in ft,
                ce = (Wt || "TouchEvent" in ft && At("(any-pointer: coarse)"), ft.navigator.userAgent || ""),
                ue = (At("(pointer: coarse)").matches && /iPad|Macintosh/.test(ce) && Math.min(ft.screen.width || 0, ft.screen.height || 0), (At("(pointer: coarse)").matches || !At("(pointer: fine)").matches && Wt) && /Windows.*Firefox/.test(ce), At("(any-pointer: fine)").matches || At("(any-hover: hover)"), c(2508));
            const $t = ["tooltipTemplate"],
                de = ["leftOuterSelectionBar"],
                Be = ["rightOuterSelectionBar"],
                zt = ["fullBar"],
                Me = ["selectionBar"],
                Jt = ["minHandle"],
                he = ["maxHandle"],
                Ee = ["floorLabel"],
                ee = ["ceilLabel"],
                xt = ["minHandleLabel"],
                ke = ["maxHandleLabel"],
                Ae = ["combinedLabel"],
                De = ["ticksElement"];

            function pe(b, a) {
                if(1 & b && t._UZ(0, "ngx-slider-tooltip-wrapper", 31), 2 & b) {
                    const i = t.oxw().$implicit,
                        s = t.oxw();
                    t.Q6J("template", s.tooltipTemplate)("tooltip", i.valueTooltip)("placement", i.valueTooltipPlacement)("content", i.value)
                }
            }

            function Qt(b, a) {
                if(1 & b && t._UZ(0, "span", 32), 2 & b) {
                    const i = t.oxw().$implicit;
                    t.Q6J("innerHTML", i.legend, t.oJD)
                }
            }
            const fe = function(b) {
                return {
                    "ngx-slider-selected": b
                }
            };

            function He(b, a) {
                if(1 & b && (t.TgZ(0, "span", 27), t._UZ(1, "ngx-slider-tooltip-wrapper", 28), t.YNc(2, pe, 1, 4, "ngx-slider-tooltip-wrapper", 29), t.YNc(3, Qt, 1, 1, "span", 30), t.qZA()), 2 & b) {
                    const i = a.$implicit,
                        s = t.oxw();
                    t.Q6J("ngClass", t.VKq(7, fe, i.selected))("ngStyle", i.style), t.xp6(1), t.Q6J("template", s.tooltipTemplate)("tooltip", i.tooltip)("placement", i.tooltipPlacement), t.xp6(1), t.Q6J("ngIf", null != i.value), t.xp6(1), t.Q6J("ngIf", null != i.legend)
                }
            }

            function Re(b, a) {}

            function Ze(b, a) {
                1 & b && t.YNc(0, Re, 0, 0, "ng-template")
            }
            const Fe = function(b, a, i) {
                return {
                    tooltip: b,
                    placement: a,
                    content: i
                }
            };

            function ie(b, a) {
                if(1 & b && (t.ynx(0), t.YNc(1, Ze, 1, 0, null, 1), t.BQk()), 2 & b) {
                    const i = t.oxw();
                    t.xp6(1), t.Q6J("ngTemplateOutlet", i.template)("ngTemplateOutletContext", t.kEZ(2, Fe, i.tooltip, i.placement, i.content))
                }
            }

            function Ve(b, a) {
                if(1 & b && (t.ynx(0), t.TgZ(1, "div", 2), t._uU(2), t.qZA(), t.BQk()), 2 & b) {
                    const i = t.oxw();
                    t.xp6(1), t.uIk("title", i.tooltip)("data-tooltip-placement", i.placement), t.xp6(1), t.hij(" ", i.content, " ")
                }
            }
            const ct = {
                Low: 0,
                High: 1,
                Floor: 2,
                Ceil: 3,
                TickValue: 4
            };
            ct[ct.Low] = "Low", ct[ct.High] = "High", ct[ct.Floor] = "Floor", ct[ct.Ceil] = "Ceil", ct[ct.TickValue] = "TickValue";
            class jt {
                constructor() {
                    this.floor = 0, this.ceil = null, this.step = 1, this.minRange = null, this.maxRange = null, this.pushRange = !1, this.minLimit = null, this.maxLimit = null, this.translate = null, this.combineLabels = null, this.getLegend = null, this.getStepLegend = null, this.stepsArray = null, this.bindIndexForStepsArray = !1, this.draggableRange = !1, this.draggableRangeOnly = !1, this.showSelectionBar = !1, this.showSelectionBarEnd = !1, this.showSelectionBarFromValue = null, this.showOuterSelectionBars = !1, this.hidePointerLabels = !1, this.hideLimitLabels = !1, this.autoHideLimitLabels = !0, this.readOnly = !1, this.disabled = !1, this.showTicks = !1, this.showTicksValues = !1, this.tickStep = null, this.tickValueStep = null, this.ticksArray = null, this.ticksTooltip = null, this.ticksValuesTooltip = null, this.vertical = !1, this.getSelectionBarColor = null, this.getTickColor = null, this.getPointerColor = null, this.keyboardSupport = !0, this.scale = 1, this.rotate = 0, this.enforceStep = !0, this.enforceRange = !0, this.enforceStepsArray = !0, this.noSwitching = !1, this.onlyBindHandles = !1, this.rightToLeft = !1, this.reversedControls = !1, this.boundPointerLabels = !0, this.logScale = !1, this.customValueToPosition = null, this.customPositionToValue = null, this.precisionLimit = 12, this.selectionBarGradient = null, this.ariaLabel = "ngx-slider", this.ariaLabelledBy = null, this.ariaLabelHigh = "ngx-slider-max", this.ariaLabelledByHigh = null, this.handleDimension = null, this.barDimension = null, this.animate = !0, this.animateOnMove = !1
                }
            }
            const D = {
                Min: 0,
                Max: 1
            };
            D[D.Min] = "Min", D[D.Max] = "Max";
            class Ue {}
            class T {
                static isNullOrUndefined(a) {
                    return null == a
                }
                static areArraysEqual(a, i) {
                    if(a.length !== i.length) return !1;
                    for(let s = 0; s < a.length; ++s)
                        if(a[s] !== i[s]) return !1;
                    return !0
                }
                static linearValueToPosition(a, i, s) {
                    return (a - i) / (s - i)
                }
                static logValueToPosition(a, i, s) {
                    return ((a = Math.log(a)) - (i = Math.log(i))) / ((s = Math.log(s)) - i)
                }
                static linearPositionToValue(a, i, s) {
                    return a * (s - i) + i
                }
                static logPositionToValue(a, i, s) {
                    return i = Math.log(i), s = Math.log(s), Math.exp(a * (s - i) + i)
                }
                static findStepIndex(a, i) {
                    const s = i.map(_ => Math.abs(a - _.value));
                    let h = 0;
                    for(let _ = 0; _ < i.length; _++) s[_] !== s[h] && s[_] < s[h] && (h = _);
                    return h
                }
            }
            class Lt {
                static isTouchEvent(a) {
                    return void 0 !== window.TouchEvent ? a instanceof TouchEvent : void 0 !== a.touches
                }
                static isResizeObserverAvailable() {
                    return void 0 !== window.ResizeObserver
                }
            }
            class lt {
                static roundToPrecisionLimit(a, i) {
                    return +a.toPrecision(i)
                }
                static isModuloWithinPrecisionLimit(a, i, s) {
                    const h = Math.pow(10, -s);
                    return Math.abs(a % i) <= h || Math.abs(Math.abs(a % i) - i) <= h
                }
                static clampToRange(a, i, s) {
                    return Math.min(Math.max(a, i), s)
                }
            }
            class ge {
                constructor() {
                    this.eventName = null, this.events = null, this.eventsSubscription = null, this.teardownCallback = null
                }
            }
            class Bt {
                constructor(a) {
                    this.renderer = a
                }
                attachPassiveEventListener(a, i, s, h) {
                    if(!0 !== ae) return this.attachEventListener(a, i, s, h);
                    const _ = new ge;
                    _.eventName = i, _.events = new dt;
                    const y = j => {
                        _.events.next(j)
                    };
                    return a.addEventListener(i, y, {
                        passive: !0,
                        capture: !1
                    }), _.teardownCallback = () => {
                        a.removeEventListener(i, y, {
                            passive: !0,
                            capture: !1
                        })
                    }, _.eventsSubscription = _.events.pipe(T.isNullOrUndefined(h) ? ne(() => {}) : bt(h, void 0, {
                        leading: !0,
                        trailing: !0
                    })).subscribe(j => {
                        s(j)
                    }), _
                }
                detachEventListener(a) {
                    T.isNullOrUndefined(a.eventsSubscription) || (a.eventsSubscription.unsubscribe(), a.eventsSubscription = null), T.isNullOrUndefined(a.events) || (a.events.complete(), a.events = null), T.isNullOrUndefined(a.teardownCallback) || (a.teardownCallback(), a.teardownCallback = null)
                }
                attachEventListener(a, i, s, h) {
                    const _ = new ge;
                    return _.eventName = i, _.events = new dt, _.teardownCallback = this.renderer.listen(a, i, j => {
                        _.events.next(j)
                    }), _.eventsSubscription = _.events.pipe(T.isNullOrUndefined(h) ? ne(() => {}) : bt(h, void 0, {
                        leading: !0,
                        trailing: !0
                    })).subscribe(j => {
                        s(j)
                    }), _
                }
            }
            let St = (() => {
                    class b {
                        constructor(i, s, h) {
                            this.elemRef = i, this.renderer = s, this.changeDetectionRef = h, this._position = 0, this._dimension = 0, this._alwaysHide = !1, this._vertical = !1, this._scale = 1, this._rotate = 0, this.opacity = 1, this.visibility = "visible", this.left = "", this.bottom = "", this.height = "", this.width = "", this.transform = "", this.eventListeners = [], this.eventListenerHelper = new Bt(this.renderer)
                        }
                        get position() {
                            return this._position
                        }
                        get dimension() {
                            return this._dimension
                        }
                        get alwaysHide() {
                            return this._alwaysHide
                        }
                        get vertical() {
                            return this._vertical
                        }
                        get scale() {
                            return this._scale
                        }
                        get rotate() {
                            return this._rotate
                        }
                        setAlwaysHide(i) {
                            this._alwaysHide = i, this.visibility = i ? "hidden" : "visible"
                        }
                        hide() {
                            this.opacity = 0
                        }
                        show() {
                            this.alwaysHide || (this.opacity = 1)
                        }
                        isVisible() {
                            return !this.alwaysHide && 0 !== this.opacity
                        }
                        setVertical(i) {
                            this._vertical = i, this._vertical ? (this.left = "", this.width = "") : (this.bottom = "", this.height = "")
                        }
                        setScale(i) {
                            this._scale = i
                        }
                        setRotate(i) {
                            this._rotate = i, this.transform = "rotate(" + i + "deg)"
                        }
                        getRotate() {
                            return this._rotate
                        }
                        setPosition(i) {
                            this._position !== i && !this.isRefDestroyed() && this.changeDetectionRef.markForCheck(), this._position = i, this._vertical ? this.bottom = Math.round(i) + "px" : this.left = Math.round(i) + "px"
                        }
                        calculateDimension() {
                            const i = this.getBoundingClientRect();
                            this._dimension = this.vertical ? (i.bottom - i.top) * this.scale : (i.right - i.left) * this.scale
                        }
                        setDimension(i) {
                            this._dimension !== i && !this.isRefDestroyed() && this.changeDetectionRef.markForCheck(), this._dimension = i, this._vertical ? this.height = Math.round(i) + "px" : this.width = Math.round(i) + "px"
                        }
                        getBoundingClientRect() {
                            return this.elemRef.nativeElement.getBoundingClientRect()
                        }
                        on(i, s, h) {
                            const _ = this.eventListenerHelper.attachEventListener(this.elemRef.nativeElement, i, s, h);
                            this.eventListeners.push(_)
                        }
                        onPassive(i, s, h) {
                            const _ = this.eventListenerHelper.attachPassiveEventListener(this.elemRef.nativeElement, i, s, h);
                            this.eventListeners.push(_)
                        }
                        off(i) {
                            let s, h;
                            T.isNullOrUndefined(i) ? (s = [], h = this.eventListeners) : (s = this.eventListeners.filter(_ => _.eventName !== i), h = this.eventListeners.filter(_ => _.eventName === i));
                            for(const _ of h) this.eventListenerHelper.detachEventListener(_);
                            this.eventListeners = s
                        }
                        isRefDestroyed() {
                            return T.isNullOrUndefined(this.changeDetectionRef) || this.changeDetectionRef.destroyed
                        }
                    }
                    return b.\u0275fac = function(i) {
                        return new(i || b)(t.Y36(t.SBq), t.Y36(t.Qsj), t.Y36(t.sBO))
                    }, b.\u0275dir = t.lG2({
                        type: b,
                        selectors: [
                            ["", "ngxSliderElement", ""]
                        ],
                        hostVars: 14,
                        hostBindings: function(i, s) {
                            2 & i && t.Udp("opacity", s.opacity)("visibility", s.visibility)("left", s.left)("bottom", s.bottom)("height", s.height)("width", s.width)("transform", s.transform)
                        }
                    }), b
                })(),
                Yt = (() => {
                    class b extends St {
                        constructor(i, s, h) {
                            super(i, s, h), this.active = !1, this.role = "", this.tabindex = "", this.ariaOrientation = "", this.ariaLabel = "", this.ariaLabelledBy = "", this.ariaValueNow = "", this.ariaValueText = "", this.ariaValueMin = "", this.ariaValueMax = ""
                        }
                        focus() {
                            this.elemRef.nativeElement.focus()
                        }
                    }
                    return b.\u0275fac = function(i) {
                        return new(i || b)(t.Y36(t.SBq), t.Y36(t.Qsj), t.Y36(t.sBO))
                    }, b.\u0275dir = t.lG2({
                        type: b,
                        selectors: [
                            ["", "ngxSliderHandle", ""]
                        ],
                        hostVars: 11,
                        hostBindings: function(i, s) {
                            2 & i && (t.uIk("role", s.role)("tabindex", s.tabindex)("aria-orientation", s.ariaOrientation)("aria-label", s.ariaLabel)("aria-labelledby", s.ariaLabelledBy)("aria-valuenow", s.ariaValueNow)("aria-valuetext", s.ariaValueText)("aria-valuemin", s.ariaValueMin)("aria-valuemax", s.ariaValueMax), t.ekj("ngx-slider-active", s.active))
                        },
                        features: [t.qOj]
                    }), b
                })(),
                Dt = (() => {
                    class b extends St {
                        constructor(i, s, h) {
                            super(i, s, h), this._value = null
                        }
                        get value() {
                            return this._value
                        }
                        setValue(i) {
                            let s = !1;
                            !this.alwaysHide && (T.isNullOrUndefined(this.value) || this.value.length !== i.length || this.value.length > 0 && 0 === this.dimension) && (s = !0), this._value = i, this.elemRef.nativeElement.innerHTML = i, s && this.calculateDimension()
                        }
                    }
                    return b.\u0275fac = function(i) {
                        return new(i || b)(t.Y36(t.SBq), t.Y36(t.Qsj), t.Y36(t.sBO))
                    }, b.\u0275dir = t.lG2({
                        type: b,
                        selectors: [
                            ["", "ngxSliderLabel", ""]
                        ],
                        features: [t.qOj]
                    }), b
                })();
            class Ne {
                constructor() {
                    this.selected = !1, this.style = {}, this.tooltip = null, this.tooltipPlacement = null, this.value = null, this.valueTooltip = null, this.valueTooltipPlacement = null, this.legend = null
                }
            }
            class me {
                constructor() {
                    this.active = !1, this.value = 0, this.difference = 0, this.position = 0, this.lowLimit = 0, this.highLimit = 0
                }
            }
            class qt {
                static compare(a, i) {
                    return !(T.isNullOrUndefined(a) && T.isNullOrUndefined(i) || T.isNullOrUndefined(a) !== T.isNullOrUndefined(i)) && a.value === i.value && a.highValue === i.highValue
                }
            }
            class be extends qt {
                static compare(a, i) {
                    return !(T.isNullOrUndefined(a) && T.isNullOrUndefined(i) || T.isNullOrUndefined(a) !== T.isNullOrUndefined(i)) && a.value === i.value && a.highValue === i.highValue && a.forceChange === i.forceChange
                }
            }
            const Ie = {
                provide: ue.JU,
                useExisting: (0, t.Gpc)(() => ve),
                multi: !0
            };
            let ve = (() => {
                    class b {
                        constructor(i, s, h, _) {
                            this.renderer = i, this.elementRef = s, this.changeDetectionRef = h, this.zone = _, this.value = null, this.valueChange = new t.vpe, this.highValue = null, this.highValueChange = new t.vpe, this.options = new jt, this.userChangeStart = new t.vpe, this.userChange = new t.vpe, this.userChangeEnd = new t.vpe, this.initHasRun = !1, this.inputModelChangeSubject = new dt, this.inputModelChangeSubscription = null, this.outputModelChangeSubject = new dt, this.outputModelChangeSubscription = null, this.viewLowValue = null, this.viewHighValue = null, this.viewOptions = new jt, this.handleHalfDimension = 0, this.maxHandlePosition = 0, this.currentTrackingPointer = null, this.currentFocusPointer = null, this.firstKeyDown = !1, this.touchId = null, this.dragging = new me, this.sliderElementVerticalClass = !1, this.sliderElementAnimateClass = !1, this.sliderElementWithLegendClass = !1, this.sliderElementDisabledAttr = null, this.sliderElementAriaLabel = "ngx-slider", this.barStyle = {}, this.minPointerStyle = {}, this.maxPointerStyle = {}, this.fullBarTransparentClass = !1, this.selectionBarDraggableClass = !1, this.ticksUnderValuesClass = !1, this.intermediateTicks = !1, this.ticks = [], this.eventListenerHelper = null, this.onMoveEventListener = null, this.onEndEventListener = null, this.moving = !1, this.resizeObserver = null, this.onTouchedCallback = null, this.onChangeCallback = null, this.eventListenerHelper = new Bt(this.renderer)
                        }
                        set manualRefresh(i) {
                            this.unsubscribeManualRefresh(), this.manualRefreshSubscription = i.subscribe(() => {
                                setTimeout(() => this.calculateViewDimensionsAndDetectChanges())
                            })
                        }
                        set triggerFocus(i) {
                            this.unsubscribeTriggerFocus(), this.triggerFocusSubscription = i.subscribe(s => {
                                this.focusPointer(s)
                            })
                        }
                        get range() {
                            return !T.isNullOrUndefined(this.value) && !T.isNullOrUndefined(this.highValue)
                        }
                        get showTicks() {
                            return this.viewOptions.showTicks
                        }
                        ngOnInit() {
                            this.viewOptions = new jt, Object.assign(this.viewOptions, this.options), this.updateDisabledState(), this.updateVerticalState(), this.updateAriaLabel()
                        }
                        ngAfterViewInit() {
                            this.applyOptions(), this.subscribeInputModelChangeSubject(), this.subscribeOutputModelChangeSubject(), this.renormaliseModelValues(), this.viewLowValue = this.modelValueToViewValue(this.value), this.viewHighValue = this.range ? this.modelValueToViewValue(this.highValue) : null, this.updateVerticalState(), this.manageElementsStyle(), this.updateDisabledState(), this.calculateViewDimensions(), this.addAccessibility(), this.updateCeilLabel(), this.updateFloorLabel(), this.initHandles(), this.manageEventsBindings(), this.updateAriaLabel(), this.subscribeResizeObserver(), this.initHasRun = !0, this.isRefDestroyed() || this.changeDetectionRef.detectChanges()
                        }
                        ngOnChanges(i) {
                            !T.isNullOrUndefined(i.options) && JSON.stringify(i.options.previousValue) !== JSON.stringify(i.options.currentValue) && this.onChangeOptions(), (!T.isNullOrUndefined(i.value) || !T.isNullOrUndefined(i.highValue)) && this.inputModelChangeSubject.next({
                                value: this.value,
                                highValue: this.highValue,
                                forceChange: !1,
                                internalChange: !1
                            })
                        }
                        ngOnDestroy() {
                            this.unbindEvents(), this.unsubscribeResizeObserver(), this.unsubscribeInputModelChangeSubject(), this.unsubscribeOutputModelChangeSubject(), this.unsubscribeManualRefresh(), this.unsubscribeTriggerFocus()
                        }
                        writeValue(i) {
                            i instanceof Array ? (this.value = i[0], this.highValue = i[1]) : this.value = i, this.inputModelChangeSubject.next({
                                value: this.value,
                                highValue: this.highValue,
                                forceChange: !1,
                                internalChange: !1
                            })
                        }
                        registerOnChange(i) {
                            this.onChangeCallback = i
                        }
                        registerOnTouched(i) {
                            this.onTouchedCallback = i
                        }
                        setDisabledState(i) {
                            this.viewOptions.disabled = i, this.updateDisabledState()
                        }
                        setAriaLabel(i) {
                            this.viewOptions.ariaLabel = i, this.updateAriaLabel()
                        }
                        onResize(i) {
                            this.calculateViewDimensionsAndDetectChanges()
                        }
                        subscribeInputModelChangeSubject() {
                            this.inputModelChangeSubscription = this.inputModelChangeSubject.pipe(Xt(be.compare), function Te(b, a) {
                                return function(s) {
                                    return s.lift(new Oe(b, a))
                                }
                            }(i => !i.forceChange && !i.internalChange)).subscribe(i => this.applyInputModelChange(i))
                        }
                        subscribeOutputModelChangeSubject() {
                            this.outputModelChangeSubscription = this.outputModelChangeSubject.pipe(Xt(be.compare)).subscribe(i => this.publishOutputModelChange(i))
                        }
                        subscribeResizeObserver() {
                            Lt.isResizeObserverAvailable() && (this.resizeObserver = new ResizeObserver(() => this.calculateViewDimensionsAndDetectChanges()), this.resizeObserver.observe(this.elementRef.nativeElement))
                        }
                        unsubscribeResizeObserver() {
                            Lt.isResizeObserverAvailable() && null !== this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null)
                        }
                        unsubscribeOnMove() {
                            T.isNullOrUndefined(this.onMoveEventListener) || (this.eventListenerHelper.detachEventListener(this.onMoveEventListener), this.onMoveEventListener = null)
                        }
                        unsubscribeOnEnd() {
                            T.isNullOrUndefined(this.onEndEventListener) || (this.eventListenerHelper.detachEventListener(this.onEndEventListener), this.onEndEventListener = null)
                        }
                        unsubscribeInputModelChangeSubject() {
                            T.isNullOrUndefined(this.inputModelChangeSubscription) || (this.inputModelChangeSubscription.unsubscribe(), this.inputModelChangeSubscription = null)
                        }
                        unsubscribeOutputModelChangeSubject() {
                            T.isNullOrUndefined(this.outputModelChangeSubscription) || (this.outputModelChangeSubscription.unsubscribe(), this.outputModelChangeSubscription = null)
                        }
                        unsubscribeManualRefresh() {
                            T.isNullOrUndefined(this.manualRefreshSubscription) || (this.manualRefreshSubscription.unsubscribe(), this.manualRefreshSubscription = null)
                        }
                        unsubscribeTriggerFocus() {
                            T.isNullOrUndefined(this.triggerFocusSubscription) || (this.triggerFocusSubscription.unsubscribe(), this.triggerFocusSubscription = null)
                        }
                        getPointerElement(i) {
                            return i === D.Min ? this.minHandleElement : i === D.Max ? this.maxHandleElement : null
                        }
                        getCurrentTrackingValue() {
                            return this.currentTrackingPointer === D.Min ? this.viewLowValue : this.currentTrackingPointer === D.Max ? this.viewHighValue : null
                        }
                        modelValueToViewValue(i) {
                            return T.isNullOrUndefined(i) ? NaN : T.isNullOrUndefined(this.viewOptions.stepsArray) || this.viewOptions.bindIndexForStepsArray ? +i : T.findStepIndex(+i, this.viewOptions.stepsArray)
                        }
                        viewValueToModelValue(i) {
                            return T.isNullOrUndefined(this.viewOptions.stepsArray) || this.viewOptions.bindIndexForStepsArray ? i : this.getStepValue(i)
                        }
                        getStepValue(i) {
                            const s = this.viewOptions.stepsArray[i];
                            return T.isNullOrUndefined(s) ? NaN : s.value
                        }
                        applyViewChange() {
                            this.value = this.viewValueToModelValue(this.viewLowValue), this.range && (this.highValue = this.viewValueToModelValue(this.viewHighValue)), this.outputModelChangeSubject.next({
                                value: this.value,
                                highValue: this.highValue,
                                userEventInitiated: !0,
                                forceChange: !1
                            }), this.inputModelChangeSubject.next({
                                value: this.value,
                                highValue: this.highValue,
                                forceChange: !1,
                                internalChange: !0
                            })
                        }
                        applyInputModelChange(i) {
                            const s = this.normaliseModelValues(i),
                                h = !qt.compare(i, s);
                            h && (this.value = s.value, this.highValue = s.highValue), this.viewLowValue = this.modelValueToViewValue(s.value), this.viewHighValue = this.range ? this.modelValueToViewValue(s.highValue) : null, this.updateLowHandle(this.valueToPosition(this.viewLowValue)), this.range && this.updateHighHandle(this.valueToPosition(this.viewHighValue)), this.updateSelectionBar(), this.updateTicksScale(), this.updateAriaAttributes(), this.range && this.updateCombinedLabel(), this.outputModelChangeSubject.next({
                                value: s.value,
                                highValue: s.highValue,
                                forceChange: h,
                                userEventInitiated: !1
                            })
                        }
                        publishOutputModelChange(i) {
                            const s = () => {
                                this.valueChange.emit(i.value), this.range && this.highValueChange.emit(i.highValue), T.isNullOrUndefined(this.onChangeCallback) || this.onChangeCallback(this.range ? [i.value, i.highValue] : i.value), T.isNullOrUndefined(this.onTouchedCallback) || this.onTouchedCallback(this.range ? [i.value, i.highValue] : i.value)
                            };
                            i.userEventInitiated ? (s(), this.userChange.emit(this.getChangeContext())) : setTimeout(() => {
                                s()
                            })
                        }
                        normaliseModelValues(i) {
                            const s = new qt;
                            if(s.value = i.value, s.highValue = i.highValue, !T.isNullOrUndefined(this.viewOptions.stepsArray)) {
                                if(this.viewOptions.enforceStepsArray) {
                                    const h = T.findStepIndex(s.value, this.viewOptions.stepsArray);
                                    if(s.value = this.viewOptions.stepsArray[h].value, this.range) {
                                        const _ = T.findStepIndex(s.highValue, this.viewOptions.stepsArray);
                                        s.highValue = this.viewOptions.stepsArray[_].value
                                    }
                                }
                                return s
                            }
                            if(this.viewOptions.enforceStep && (s.value = this.roundStep(s.value), this.range && (s.highValue = this.roundStep(s.highValue))), this.viewOptions.enforceRange && (s.value = lt.clampToRange(s.value, this.viewOptions.floor, this.viewOptions.ceil), this.range && (s.highValue = lt.clampToRange(s.highValue, this.viewOptions.floor, this.viewOptions.ceil)), this.range && i.value > i.highValue))
                                if(this.viewOptions.noSwitching) s.value = s.highValue;
                                else {
                                    const h = i.value;
                                    s.value = i.highValue, s.highValue = h
                                } return s
                        }
                        renormaliseModelValues() {
                            const i = {
                                    value: this.value,
                                    highValue: this.highValue
                                },
                                s = this.normaliseModelValues(i);
                            qt.compare(s, i) || (this.value = s.value, this.highValue = s.highValue, this.outputModelChangeSubject.next({
                                value: this.value,
                                highValue: this.highValue,
                                forceChange: !0,
                                userEventInitiated: !1
                            }))
                        }
                        onChangeOptions() {
                            if(!this.initHasRun) return;
                            const i = this.getOptionsInfluencingEventBindings(this.viewOptions);
                            this.applyOptions();
                            const s = this.getOptionsInfluencingEventBindings(this.viewOptions),
                                h = !T.areArraysEqual(i, s);
                            this.renormaliseModelValues(), this.viewLowValue = this.modelValueToViewValue(this.value), this.viewHighValue = this.range ? this.modelValueToViewValue(this.highValue) : null, this.resetSlider(h)
                        }
                        applyOptions() {
                            if(this.viewOptions = new jt, Object.assign(this.viewOptions, this.options), this.viewOptions.draggableRange = this.range && this.viewOptions.draggableRange, this.viewOptions.draggableRangeOnly = this.range && this.viewOptions.draggableRangeOnly, this.viewOptions.draggableRangeOnly && (this.viewOptions.draggableRange = !0), this.viewOptions.showTicks = this.viewOptions.showTicks || this.viewOptions.showTicksValues || !T.isNullOrUndefined(this.viewOptions.ticksArray), this.viewOptions.showTicks && (!T.isNullOrUndefined(this.viewOptions.tickStep) || !T.isNullOrUndefined(this.viewOptions.ticksArray)) && (this.intermediateTicks = !0), this.viewOptions.showSelectionBar = this.viewOptions.showSelectionBar || this.viewOptions.showSelectionBarEnd || !T.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue), T.isNullOrUndefined(this.viewOptions.stepsArray) ? this.applyFloorCeilOptions() : this.applyStepsArrayOptions(), T.isNullOrUndefined(this.viewOptions.combineLabels) && (this.viewOptions.combineLabels = (i, s) => i + " - " + s), this.viewOptions.logScale && 0 === this.viewOptions.floor) throw Error("Can't use floor=0 with logarithmic scale")
                        }
                        applyStepsArrayOptions() {
                            this.viewOptions.floor = 0, this.viewOptions.ceil = this.viewOptions.stepsArray.length - 1, this.viewOptions.step = 1, T.isNullOrUndefined(this.viewOptions.translate) && (this.viewOptions.translate = i => String(this.viewOptions.bindIndexForStepsArray ? this.getStepValue(i) : i))
                        }
                        applyFloorCeilOptions() {
                            if(T.isNullOrUndefined(this.viewOptions.step) ? this.viewOptions.step = 1 : (this.viewOptions.step = +this.viewOptions.step, this.viewOptions.step <= 0 && (this.viewOptions.step = 1)), T.isNullOrUndefined(this.viewOptions.ceil) || T.isNullOrUndefined(this.viewOptions.floor)) throw Error("floor and ceil options must be supplied");
                            this.viewOptions.ceil = +this.viewOptions.ceil, this.viewOptions.floor = +this.viewOptions.floor, T.isNullOrUndefined(this.viewOptions.translate) && (this.viewOptions.translate = i => String(i))
                        }
                        resetSlider(i = !0) {
                            this.manageElementsStyle(), this.addAccessibility(), this.updateCeilLabel(), this.updateFloorLabel(), i && (this.unbindEvents(), this.manageEventsBindings()), this.updateDisabledState(), this.updateAriaLabel(), this.calculateViewDimensions(), this.refocusPointerIfNeeded()
                        }
                        focusPointer(i) {
                            i !== D.Min && i !== D.Max && (i = D.Min), i === D.Min ? this.minHandleElement.focus() : this.range && i === D.Max && this.maxHandleElement.focus()
                        }
                        refocusPointerIfNeeded() {
                            T.isNullOrUndefined(this.currentFocusPointer) || (this.onPointerFocus(this.currentFocusPointer), this.getPointerElement(this.currentFocusPointer).focus())
                        }
                        manageElementsStyle() {
                            this.updateScale(), this.floorLabelElement.setAlwaysHide(this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels), this.ceilLabelElement.setAlwaysHide(this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels);
                            const i = this.viewOptions.showTicksValues && !this.intermediateTicks;
                            this.minHandleLabelElement.setAlwaysHide(i || this.viewOptions.hidePointerLabels), this.maxHandleLabelElement.setAlwaysHide(i || !this.range || this.viewOptions.hidePointerLabels), this.combinedLabelElement.setAlwaysHide(i || !this.range || this.viewOptions.hidePointerLabels), this.selectionBarElement.setAlwaysHide(!this.range && !this.viewOptions.showSelectionBar), this.leftOuterSelectionBarElement.setAlwaysHide(!this.range || !this.viewOptions.showOuterSelectionBars), this.rightOuterSelectionBarElement.setAlwaysHide(!this.range || !this.viewOptions.showOuterSelectionBars), this.fullBarTransparentClass = this.range && this.viewOptions.showOuterSelectionBars, this.selectionBarDraggableClass = this.viewOptions.draggableRange && !this.viewOptions.onlyBindHandles, this.ticksUnderValuesClass = this.intermediateTicks && this.options.showTicksValues, this.sliderElementVerticalClass !== this.viewOptions.vertical && (this.updateVerticalState(), setTimeout(() => {
                                this.resetSlider()
                            })), this.sliderElementAnimateClass !== this.viewOptions.animate && setTimeout(() => {
                                this.sliderElementAnimateClass = this.viewOptions.animate
                            }), this.updateRotate()
                        }
                        manageEventsBindings() {
                            this.viewOptions.disabled || this.viewOptions.readOnly ? this.unbindEvents() : this.bindEvents()
                        }
                        updateDisabledState() {
                            this.sliderElementDisabledAttr = this.viewOptions.disabled ? "disabled" : null
                        }
                        updateAriaLabel() {
                            this.sliderElementAriaLabel = this.viewOptions.ariaLabel || "nxg-slider"
                        }
                        updateVerticalState() {
                            this.sliderElementVerticalClass = this.viewOptions.vertical;
                            for(const i of this.getAllSliderElements()) T.isNullOrUndefined(i) || i.setVertical(this.viewOptions.vertical)
                        }
                        updateScale() {
                            for(const i of this.getAllSliderElements()) i.setScale(this.viewOptions.scale)
                        }
                        updateRotate() {
                            for(const i of this.getAllSliderElements()) i.setRotate(this.viewOptions.rotate)
                        }
                        getAllSliderElements() {
                            return [this.leftOuterSelectionBarElement, this.rightOuterSelectionBarElement, this.fullBarElement, this.selectionBarElement, this.minHandleElement, this.maxHandleElement, this.floorLabelElement, this.ceilLabelElement, this.minHandleLabelElement, this.maxHandleLabelElement, this.combinedLabelElement, this.ticksElement]
                        }
                        initHandles() {
                            this.updateLowHandle(this.valueToPosition(this.viewLowValue)), this.range && this.updateHighHandle(this.valueToPosition(this.viewHighValue)), this.updateSelectionBar(), this.range && this.updateCombinedLabel(), this.updateTicksScale()
                        }
                        addAccessibility() {
                            this.updateAriaAttributes(), this.minHandleElement.role = "slider", this.minHandleElement.tabindex = !this.viewOptions.keyboardSupport || this.viewOptions.readOnly || this.viewOptions.disabled ? "" : "0", this.minHandleElement.ariaOrientation = this.viewOptions.vertical || 0 !== this.viewOptions.rotate ? "vertical" : "horizontal", T.isNullOrUndefined(this.viewOptions.ariaLabel) ? T.isNullOrUndefined(this.viewOptions.ariaLabelledBy) || (this.minHandleElement.ariaLabelledBy = this.viewOptions.ariaLabelledBy) : this.minHandleElement.ariaLabel = this.viewOptions.ariaLabel, this.range && (this.maxHandleElement.role = "slider", this.maxHandleElement.tabindex = !this.viewOptions.keyboardSupport || this.viewOptions.readOnly || this.viewOptions.disabled ? "" : "0", this.maxHandleElement.ariaOrientation = this.viewOptions.vertical || 0 !== this.viewOptions.rotate ? "vertical" : "horizontal", T.isNullOrUndefined(this.viewOptions.ariaLabelHigh) ? T.isNullOrUndefined(this.viewOptions.ariaLabelledByHigh) || (this.maxHandleElement.ariaLabelledBy = this.viewOptions.ariaLabelledByHigh) : this.maxHandleElement.ariaLabel = this.viewOptions.ariaLabelHigh)
                        }
                        updateAriaAttributes() {
                            this.minHandleElement.ariaValueNow = (+this.value).toString(), this.minHandleElement.ariaValueText = this.viewOptions.translate(+this.value, ct.Low), this.minHandleElement.ariaValueMin = this.viewOptions.floor.toString(), this.minHandleElement.ariaValueMax = this.viewOptions.ceil.toString(), this.range && (this.maxHandleElement.ariaValueNow = (+this.highValue).toString(), this.maxHandleElement.ariaValueText = this.viewOptions.translate(+this.highValue, ct.High), this.maxHandleElement.ariaValueMin = this.viewOptions.floor.toString(), this.maxHandleElement.ariaValueMax = this.viewOptions.ceil.toString())
                        }
                        calculateViewDimensions() {
                            T.isNullOrUndefined(this.viewOptions.handleDimension) ? this.minHandleElement.calculateDimension() : this.minHandleElement.setDimension(this.viewOptions.handleDimension);
                            const i = this.minHandleElement.dimension;
                            this.handleHalfDimension = i / 2, T.isNullOrUndefined(this.viewOptions.barDimension) ? this.fullBarElement.calculateDimension() : this.fullBarElement.setDimension(this.viewOptions.barDimension), this.maxHandlePosition = this.fullBarElement.dimension - i, this.initHasRun && (this.updateFloorLabel(), this.updateCeilLabel(), this.initHandles())
                        }
                        calculateViewDimensionsAndDetectChanges() {
                            this.calculateViewDimensions(), this.isRefDestroyed() || this.changeDetectionRef.detectChanges()
                        }
                        isRefDestroyed() {
                            return this.changeDetectionRef.destroyed
                        }
                        updateTicksScale() {
                            if(!this.viewOptions.showTicks) return void setTimeout(() => {
                                this.sliderElementWithLegendClass = !1
                            });
                            const i = T.isNullOrUndefined(this.viewOptions.ticksArray) ? this.getTicksArray() : this.viewOptions.ticksArray,
                                s = this.viewOptions.vertical ? "translateY" : "translateX";
                            this.viewOptions.rightToLeft && i.reverse();
                            const h = T.isNullOrUndefined(this.viewOptions.tickValueStep) ? T.isNullOrUndefined(this.viewOptions.tickStep) ? this.viewOptions.step : this.viewOptions.tickStep : this.viewOptions.tickValueStep;
                            let _ = !1;
                            const y = i.map(j => {
                                let ot = this.valueToPosition(j);
                                this.viewOptions.vertical && (ot = this.maxHandlePosition - ot);
                                const nt = s + "(" + Math.round(ot) + "px)",
                                    it = new Ne;
                                it.selected = this.isTickSelected(j), it.style = {
                                    "-webkit-transform": nt,
                                    "-moz-transform": nt,
                                    "-o-transform": nt,
                                    "-ms-transform": nt,
                                    transform: nt
                                }, it.selected && !T.isNullOrUndefined(this.viewOptions.getSelectionBarColor) && (it.style["background-color"] = this.getSelectionBarColor()), !it.selected && !T.isNullOrUndefined(this.viewOptions.getTickColor) && (it.style["background-color"] = this.getTickColor(j)), T.isNullOrUndefined(this.viewOptions.ticksTooltip) || (it.tooltip = this.viewOptions.ticksTooltip(j), it.tooltipPlacement = this.viewOptions.vertical ? "right" : "top"), this.viewOptions.showTicksValues && !T.isNullOrUndefined(h) && lt.isModuloWithinPrecisionLimit(j, h, this.viewOptions.precisionLimit) && (it.value = this.getDisplayValue(j, ct.TickValue), T.isNullOrUndefined(this.viewOptions.ticksValuesTooltip) || (it.valueTooltip = this.viewOptions.ticksValuesTooltip(j), it.valueTooltipPlacement = this.viewOptions.vertical ? "right" : "top"));
                                let ut = null;
                                if(T.isNullOrUndefined(this.viewOptions.stepsArray)) T.isNullOrUndefined(this.viewOptions.getLegend) || (ut = this.viewOptions.getLegend(j));
                                else {
                                    const wt = this.viewOptions.stepsArray[j];
                                    T.isNullOrUndefined(this.viewOptions.getStepLegend) ? T.isNullOrUndefined(wt) || (ut = wt.legend) : ut = this.viewOptions.getStepLegend(wt)
                                }
                                return T.isNullOrUndefined(ut) || (it.legend = ut, _ = !0), it
                            });
                            if(setTimeout(() => {
                                    this.sliderElementWithLegendClass = _
                                }), T.isNullOrUndefined(this.ticks) || this.ticks.length !== y.length) this.ticks = y;
                            else
                                for(let j = 0; j < y.length; ++j) Object.assign(this.ticks[j], y[j]);
                            this.isRefDestroyed() || this.changeDetectionRef.detectChanges()
                        }
                        getTicksArray() {
                            const i = T.isNullOrUndefined(this.viewOptions.tickStep) ? this.viewOptions.step : this.viewOptions.tickStep,
                                s = [],
                                h = 1 + Math.floor(lt.roundToPrecisionLimit(Math.abs(this.viewOptions.ceil - this.viewOptions.floor) / i, this.viewOptions.precisionLimit));
                            for(let _ = 0; _ < h; ++_) s.push(lt.roundToPrecisionLimit(this.viewOptions.floor + i * _, this.viewOptions.precisionLimit));
                            return s
                        }
                        isTickSelected(i) {
                            if(!this.range)
                                if(T.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue)) {
                                    if(this.viewOptions.showSelectionBarEnd) {
                                        if(i >= this.viewLowValue) return !0
                                    } else if(this.viewOptions.showSelectionBar && i <= this.viewLowValue) return !0
                                } else {
                                    const s = this.viewOptions.showSelectionBarFromValue;
                                    if(this.viewLowValue > s && i >= s && i <= this.viewLowValue) return !0;
                                    if(this.viewLowValue < s && i <= s && i >= this.viewLowValue) return !0
                                } return !!(this.range && i >= this.viewLowValue && i <= this.viewHighValue)
                        }
                        updateFloorLabel() {
                            this.floorLabelElement.alwaysHide || (this.floorLabelElement.setValue(this.getDisplayValue(this.viewOptions.floor, ct.Floor)), this.floorLabelElement.calculateDimension(), this.floorLabelElement.setPosition(this.viewOptions.rightToLeft ? this.fullBarElement.dimension - this.floorLabelElement.dimension : 0))
                        }
                        updateCeilLabel() {
                            this.ceilLabelElement.alwaysHide || (this.ceilLabelElement.setValue(this.getDisplayValue(this.viewOptions.ceil, ct.Ceil)), this.ceilLabelElement.calculateDimension(), this.ceilLabelElement.setPosition(this.viewOptions.rightToLeft ? 0 : this.fullBarElement.dimension - this.ceilLabelElement.dimension))
                        }
                        updateHandles(i, s) {
                            i === D.Min ? this.updateLowHandle(s) : i === D.Max && this.updateHighHandle(s), this.updateSelectionBar(), this.updateTicksScale(), this.range && this.updateCombinedLabel()
                        }
                        getHandleLabelPos(i, s) {
                            const h = i === D.Min ? this.minHandleLabelElement.dimension : this.maxHandleLabelElement.dimension,
                                _ = s - h / 2 + this.handleHalfDimension,
                                y = this.fullBarElement.dimension - h;
                            return this.viewOptions.boundPointerLabels ? this.viewOptions.rightToLeft && i === D.Min || !this.viewOptions.rightToLeft && i === D.Max ? Math.min(_, y) : Math.min(Math.max(_, 0), y) : _
                        }
                        updateLowHandle(i) {
                            this.minHandleElement.setPosition(i), this.minHandleLabelElement.setValue(this.getDisplayValue(this.viewLowValue, ct.Low)), this.minHandleLabelElement.setPosition(this.getHandleLabelPos(D.Min, i)), T.isNullOrUndefined(this.viewOptions.getPointerColor) || (this.minPointerStyle = {
                                backgroundColor: this.getPointerColor(D.Min)
                            }), this.viewOptions.autoHideLimitLabels && this.updateFloorAndCeilLabelsVisibility()
                        }
                        updateHighHandle(i) {
                            this.maxHandleElement.setPosition(i), this.maxHandleLabelElement.setValue(this.getDisplayValue(this.viewHighValue, ct.High)), this.maxHandleLabelElement.setPosition(this.getHandleLabelPos(D.Max, i)), T.isNullOrUndefined(this.viewOptions.getPointerColor) || (this.maxPointerStyle = {
                                backgroundColor: this.getPointerColor(D.Max)
                            }), this.viewOptions.autoHideLimitLabels && this.updateFloorAndCeilLabelsVisibility()
                        }
                        updateFloorAndCeilLabelsVisibility() {
                            if(this.viewOptions.hidePointerLabels) return;
                            let i = !1,
                                s = !1;
                            const h = this.isLabelBelowFloorLabel(this.minHandleLabelElement),
                                _ = this.isLabelAboveCeilLabel(this.minHandleLabelElement),
                                y = this.isLabelAboveCeilLabel(this.maxHandleLabelElement),
                                j = this.isLabelBelowFloorLabel(this.combinedLabelElement),
                                ot = this.isLabelAboveCeilLabel(this.combinedLabelElement);
                            if(h ? (i = !0, this.floorLabelElement.hide()) : (i = !1, this.floorLabelElement.show()), _ ? (s = !0, this.ceilLabelElement.hide()) : (s = !1, this.ceilLabelElement.show()), this.range) {
                                const nt = this.combinedLabelElement.isVisible() ? ot : y,
                                    it = this.combinedLabelElement.isVisible() ? j : h;
                                nt ? this.ceilLabelElement.hide() : s || this.ceilLabelElement.show(), it ? this.floorLabelElement.hide() : i || this.floorLabelElement.show()
                            }
                        }
                        isLabelBelowFloorLabel(i) {
                            const s = i.position,
                                _ = this.floorLabelElement.position;
                            return this.viewOptions.rightToLeft ? s + i.dimension >= _ - 2 : s <= _ + this.floorLabelElement.dimension + 2
                        }
                        isLabelAboveCeilLabel(i) {
                            const s = i.position,
                                _ = this.ceilLabelElement.position;
                            return this.viewOptions.rightToLeft ? s <= _ + this.ceilLabelElement.dimension + 2 : s + i.dimension >= _ - 2
                        }
                        updateSelectionBar() {
                            let i = 0,
                                s = 0;
                            const h = this.viewOptions.rightToLeft ? !this.viewOptions.showSelectionBarEnd : this.viewOptions.showSelectionBarEnd,
                                _ = this.viewOptions.rightToLeft ? this.maxHandleElement.position + this.handleHalfDimension : this.minHandleElement.position + this.handleHalfDimension;
                            if(this.range) s = Math.abs(this.maxHandleElement.position - this.minHandleElement.position), i = _;
                            else if(T.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue)) h ? (s = Math.ceil(Math.abs(this.maxHandlePosition - this.minHandleElement.position) + this.handleHalfDimension), i = Math.floor(this.minHandleElement.position + this.handleHalfDimension)) : (s = this.minHandleElement.position + this.handleHalfDimension, i = 0);
                            else {
                                const y = this.viewOptions.showSelectionBarFromValue,
                                    j = this.valueToPosition(y);
                                (this.viewOptions.rightToLeft ? this.viewLowValue <= y : this.viewLowValue > y) ? (s = this.minHandleElement.position - j, i = j + this.handleHalfDimension) : (s = j - this.minHandleElement.position, i = this.minHandleElement.position + this.handleHalfDimension)
                            }
                            if(this.selectionBarElement.setDimension(s), this.selectionBarElement.setPosition(i), this.range && this.viewOptions.showOuterSelectionBars && (this.viewOptions.rightToLeft ? (this.rightOuterSelectionBarElement.setDimension(i), this.rightOuterSelectionBarElement.setPosition(0), this.fullBarElement.calculateDimension(), this.leftOuterSelectionBarElement.setDimension(this.fullBarElement.dimension - (i + s)), this.leftOuterSelectionBarElement.setPosition(i + s)) : (this.leftOuterSelectionBarElement.setDimension(i), this.leftOuterSelectionBarElement.setPosition(0), this.fullBarElement.calculateDimension(), this.rightOuterSelectionBarElement.setDimension(this.fullBarElement.dimension - (i + s)), this.rightOuterSelectionBarElement.setPosition(i + s))), T.isNullOrUndefined(this.viewOptions.getSelectionBarColor)) {
                                if(!T.isNullOrUndefined(this.viewOptions.selectionBarGradient)) {
                                    const y = T.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue) ? 0 : this.valueToPosition(this.viewOptions.showSelectionBarFromValue),
                                        j = y - i > 0 && !h || y - i <= 0 && h;
                                    this.barStyle = {
                                        backgroundImage: "linear-gradient(to " + (this.viewOptions.vertical ? j ? "bottom" : "top" : j ? "left" : "right") + ", " + this.viewOptions.selectionBarGradient.from + " 0%," + this.viewOptions.selectionBarGradient.to + " 100%)"
                                    }, this.viewOptions.vertical ? (this.barStyle.backgroundPosition = "center " + (y + s + i + (j ? -this.handleHalfDimension : 0)) + "px", this.barStyle.backgroundSize = "100% " + (this.fullBarElement.dimension - this.handleHalfDimension) + "px") : (this.barStyle.backgroundPosition = y - i + (j ? this.handleHalfDimension : 0) + "px center", this.barStyle.backgroundSize = this.fullBarElement.dimension - this.handleHalfDimension + "px 100%")
                                }
                            } else {
                                const y = this.getSelectionBarColor();
                                this.barStyle = {
                                    backgroundColor: y
                                }
                            }
                        }
                        getSelectionBarColor() {
                            return this.range ? this.viewOptions.getSelectionBarColor(this.value, this.highValue) : this.viewOptions.getSelectionBarColor(this.value)
                        }
                        getPointerColor(i) {
                            return this.viewOptions.getPointerColor(i === D.Max ? this.highValue : this.value, i)
                        }
                        getTickColor(i) {
                            return this.viewOptions.getTickColor(i)
                        }
                        updateCombinedLabel() {
                            let i = null;
                            if(i = this.viewOptions.rightToLeft ? this.minHandleLabelElement.position - this.minHandleLabelElement.dimension - 10 <= this.maxHandleLabelElement.position : this.minHandleLabelElement.position + this.minHandleLabelElement.dimension + 10 >= this.maxHandleLabelElement.position, i) {
                                const s = this.getDisplayValue(this.viewLowValue, ct.Low),
                                    h = this.getDisplayValue(this.viewHighValue, ct.High),
                                    _ = this.viewOptions.rightToLeft ? this.viewOptions.combineLabels(h, s) : this.viewOptions.combineLabels(s, h);
                                this.combinedLabelElement.setValue(_);
                                const y = this.viewOptions.boundPointerLabels ? Math.min(Math.max(this.selectionBarElement.position + this.selectionBarElement.dimension / 2 - this.combinedLabelElement.dimension / 2, 0), this.fullBarElement.dimension - this.combinedLabelElement.dimension) : this.selectionBarElement.position + this.selectionBarElement.dimension / 2 - this.combinedLabelElement.dimension / 2;
                                this.combinedLabelElement.setPosition(y), this.minHandleLabelElement.hide(), this.maxHandleLabelElement.hide(), this.combinedLabelElement.show()
                            } else this.updateHighHandle(this.valueToPosition(this.viewHighValue)), this.updateLowHandle(this.valueToPosition(this.viewLowValue)), this.maxHandleLabelElement.show(), this.minHandleLabelElement.show(), this.combinedLabelElement.hide();
                            this.viewOptions.autoHideLimitLabels && this.updateFloorAndCeilLabelsVisibility()
                        }
                        getDisplayValue(i, s) {
                            return !T.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray && (i = this.getStepValue(i)), this.viewOptions.translate(i, s)
                        }
                        roundStep(i, s) {
                            const h = T.isNullOrUndefined(s) ? this.viewOptions.step : s;
                            let _ = lt.roundToPrecisionLimit((i - this.viewOptions.floor) / h, this.viewOptions.precisionLimit);
                            return _ = Math.round(_) * h, lt.roundToPrecisionLimit(this.viewOptions.floor + _, this.viewOptions.precisionLimit)
                        }
                        valueToPosition(i) {
                            let s = T.linearValueToPosition;
                            T.isNullOrUndefined(this.viewOptions.customValueToPosition) ? this.viewOptions.logScale && (s = T.logValueToPosition) : s = this.viewOptions.customValueToPosition;
                            let h = s(i = lt.clampToRange(i, this.viewOptions.floor, this.viewOptions.ceil), this.viewOptions.floor, this.viewOptions.ceil);
                            return T.isNullOrUndefined(h) && (h = 0), this.viewOptions.rightToLeft && (h = 1 - h), h * this.maxHandlePosition
                        }
                        positionToValue(i) {
                            let s = i / this.maxHandlePosition;
                            this.viewOptions.rightToLeft && (s = 1 - s);
                            let h = T.linearPositionToValue;
                            T.isNullOrUndefined(this.viewOptions.customPositionToValue) ? this.viewOptions.logScale && (h = T.logPositionToValue) : h = this.viewOptions.customPositionToValue;
                            const _ = h(s, this.viewOptions.floor, this.viewOptions.ceil);
                            return T.isNullOrUndefined(_) ? 0 : _
                        }
                        getEventXY(i, s) {
                            if(i instanceof MouseEvent) return this.viewOptions.vertical || 0 !== this.viewOptions.rotate ? i.clientY : i.clientX;
                            let h = 0;
                            const _ = i.touches;
                            if(!T.isNullOrUndefined(s))
                                for(let y = 0; y < _.length; y++)
                                    if(_[y].identifier === s) {
                                        h = y;
                                        break
                                    } return this.viewOptions.vertical || 0 !== this.viewOptions.rotate ? _[h].clientY : _[h].clientX
                        }
                        getEventPosition(i, s) {
                            const h = this.elementRef.nativeElement.getBoundingClientRect(),
                                _ = this.viewOptions.vertical || 0 !== this.viewOptions.rotate ? h.bottom : h.left;
                            let y = 0;
                            return y = this.viewOptions.vertical || 0 !== this.viewOptions.rotate ? -this.getEventXY(i, s) + _ : this.getEventXY(i, s) - _, y * this.viewOptions.scale - this.handleHalfDimension
                        }
                        getNearestHandle(i) {
                            if(!this.range) return D.Min;
                            const s = this.getEventPosition(i),
                                h = Math.abs(s - this.minHandleElement.position),
                                _ = Math.abs(s - this.maxHandleElement.position);
                            return h < _ ? D.Min : h > _ ? D.Max : this.viewOptions.rightToLeft ? s > this.minHandleElement.position ? D.Min : D.Max : s < this.minHandleElement.position ? D.Min : D.Max
                        }
                        bindEvents() {
                            const i = this.viewOptions.draggableRange;
                            this.viewOptions.onlyBindHandles || this.selectionBarElement.on("mousedown", s => this.onBarStart(null, i, s, !0, !0, !0)), this.viewOptions.draggableRangeOnly ? (this.minHandleElement.on("mousedown", s => this.onBarStart(D.Min, i, s, !0, !0)), this.maxHandleElement.on("mousedown", s => this.onBarStart(D.Max, i, s, !0, !0))) : (this.minHandleElement.on("mousedown", s => this.onStart(D.Min, s, !0, !0)), this.range && this.maxHandleElement.on("mousedown", s => this.onStart(D.Max, s, !0, !0)), this.viewOptions.onlyBindHandles || (this.fullBarElement.on("mousedown", s => this.onStart(null, s, !0, !0, !0)), this.ticksElement.on("mousedown", s => this.onStart(null, s, !0, !0, !0, !0)))), this.viewOptions.onlyBindHandles || this.selectionBarElement.onPassive("touchstart", s => this.onBarStart(null, i, s, !0, !0, !0)), this.viewOptions.draggableRangeOnly ? (this.minHandleElement.onPassive("touchstart", s => this.onBarStart(D.Min, i, s, !0, !0)), this.maxHandleElement.onPassive("touchstart", s => this.onBarStart(D.Max, i, s, !0, !0))) : (this.minHandleElement.onPassive("touchstart", s => this.onStart(D.Min, s, !0, !0)), this.range && this.maxHandleElement.onPassive("touchstart", s => this.onStart(D.Max, s, !0, !0)), this.viewOptions.onlyBindHandles || (this.fullBarElement.onPassive("touchstart", s => this.onStart(null, s, !0, !0, !0)), this.ticksElement.onPassive("touchstart", s => this.onStart(null, s, !1, !1, !0, !0)))), this.viewOptions.keyboardSupport && (this.minHandleElement.on("focus", () => this.onPointerFocus(D.Min)), this.range && this.maxHandleElement.on("focus", () => this.onPointerFocus(D.Max)))
                        }
                        getOptionsInfluencingEventBindings(i) {
                            return [i.disabled, i.readOnly, i.draggableRange, i.draggableRangeOnly, i.onlyBindHandles, i.keyboardSupport]
                        }
                        unbindEvents() {
                            this.unsubscribeOnMove(), this.unsubscribeOnEnd();
                            for(const i of this.getAllSliderElements()) T.isNullOrUndefined(i) || i.off()
                        }
                        onBarStart(i, s, h, _, y, j, ot) {
                            s ? this.onDragStart(i, h, _, y) : this.onStart(i, h, _, y, j, ot)
                        }
                        onStart(i, s, h, _, y, j) {
                            s.stopPropagation(), !Lt.isTouchEvent(s) && !ae && s.preventDefault(), this.moving = !1, this.calculateViewDimensions(), T.isNullOrUndefined(i) && (i = this.getNearestHandle(s)), this.currentTrackingPointer = i;
                            const ot = this.getPointerElement(i);
                            if(ot.active = !0, this.viewOptions.keyboardSupport && ot.focus(), h) {
                                this.unsubscribeOnMove();
                                const nt = it => this.dragging.active ? this.onDragMove(it) : this.onMove(it);
                                this.onMoveEventListener = Lt.isTouchEvent(s) ? this.eventListenerHelper.attachPassiveEventListener(document, "touchmove", nt) : this.eventListenerHelper.attachEventListener(document, "mousemove", nt)
                            }
                            if(_) {
                                this.unsubscribeOnEnd();
                                const nt = it => this.onEnd(it);
                                this.onEndEventListener = Lt.isTouchEvent(s) ? this.eventListenerHelper.attachPassiveEventListener(document, "touchend", nt) : this.eventListenerHelper.attachEventListener(document, "mouseup", nt)
                            }
                            this.userChangeStart.emit(this.getChangeContext()), Lt.isTouchEvent(s) && !T.isNullOrUndefined(s.changedTouches) && T.isNullOrUndefined(this.touchId) && (this.touchId = s.changedTouches[0].identifier), y && this.onMove(s, !0), j && this.onEnd(s)
                        }
                        onMove(i, s) {
                            let h = null;
                            if(Lt.isTouchEvent(i)) {
                                const nt = i.changedTouches;
                                for(let it = 0; it < nt.length; it++)
                                    if(nt[it].identifier === this.touchId) {
                                        h = nt[it];
                                        break
                                    } if(T.isNullOrUndefined(h)) return
                            }
                            this.viewOptions.animate && !this.viewOptions.animateOnMove && this.moving && (this.sliderElementAnimateClass = !1), this.moving = !0;
                            const _ = T.isNullOrUndefined(h) ? this.getEventPosition(i) : this.getEventPosition(i, h.identifier);
                            let y;
                            _ <= 0 ? y = this.viewOptions.rightToLeft ? this.viewOptions.ceil : this.viewOptions.floor : _ >= this.maxHandlePosition ? y = this.viewOptions.rightToLeft ? this.viewOptions.floor : this.viewOptions.ceil : (y = this.positionToValue(_), y = s && !T.isNullOrUndefined(this.viewOptions.tickStep) ? this.roundStep(y, this.viewOptions.tickStep) : this.roundStep(y)), this.positionTrackingHandle(y)
                        }
                        onEnd(i) {
                            Lt.isTouchEvent(i) && i.changedTouches[0].identifier !== this.touchId || (this.moving = !1, this.viewOptions.animate && (this.sliderElementAnimateClass = !0), this.touchId = null, this.viewOptions.keyboardSupport || (this.minHandleElement.active = !1, this.maxHandleElement.active = !1, this.currentTrackingPointer = null), this.dragging.active = !1, this.unsubscribeOnMove(), this.unsubscribeOnEnd(), this.userChangeEnd.emit(this.getChangeContext()))
                        }
                        onPointerFocus(i) {
                            const s = this.getPointerElement(i);
                            s.on("blur", () => this.onPointerBlur(s)), s.on("keydown", h => this.onKeyboardEvent(h)), s.on("keyup", () => this.onKeyUp()), s.active = !0, this.currentTrackingPointer = i, this.currentFocusPointer = i, this.firstKeyDown = !0
                        }
                        onKeyUp() {
                            this.firstKeyDown = !0, this.userChangeEnd.emit(this.getChangeContext())
                        }
                        onPointerBlur(i) {
                            i.off("blur"), i.off("keydown"), i.off("keyup"), i.active = !1, T.isNullOrUndefined(this.touchId) && (this.currentTrackingPointer = null, this.currentFocusPointer = null)
                        }
                        getKeyActions(i) {
                            const s = this.viewOptions.ceil - this.viewOptions.floor;
                            let h = i + this.viewOptions.step,
                                _ = i - this.viewOptions.step,
                                y = i + s / 10,
                                j = i - s / 10;
                            this.viewOptions.reversedControls && (h = i - this.viewOptions.step, _ = i + this.viewOptions.step, y = i - s / 10, j = i + s / 10);
                            const ot = {
                                UP: h,
                                DOWN: _,
                                LEFT: _,
                                RIGHT: h,
                                PAGEUP: y,
                                PAGEDOWN: j,
                                HOME: this.viewOptions.reversedControls ? this.viewOptions.ceil : this.viewOptions.floor,
                                END: this.viewOptions.reversedControls ? this.viewOptions.floor : this.viewOptions.ceil
                            };
                            return this.viewOptions.rightToLeft && (ot.LEFT = h, ot.RIGHT = _, (this.viewOptions.vertical || 0 !== this.viewOptions.rotate) && (ot.UP = _, ot.DOWN = h)), ot
                        }
                        onKeyboardEvent(i) {
                            const s = this.getCurrentTrackingValue(),
                                h = T.isNullOrUndefined(i.keyCode) ? i.which : i.keyCode,
                                ot = this.getKeyActions(s)[{
                                    38: "UP",
                                    40: "DOWN",
                                    37: "LEFT",
                                    39: "RIGHT",
                                    33: "PAGEUP",
                                    34: "PAGEDOWN",
                                    36: "HOME",
                                    35: "END"
                                } [h]];
                            if(T.isNullOrUndefined(ot) || T.isNullOrUndefined(this.currentTrackingPointer)) return;
                            i.preventDefault(), this.firstKeyDown && (this.firstKeyDown = !1, this.userChangeStart.emit(this.getChangeContext()));
                            const nt = lt.clampToRange(ot, this.viewOptions.floor, this.viewOptions.ceil),
                                it = this.roundStep(nt);
                            if(this.viewOptions.draggableRangeOnly) {
                                const ut = this.viewHighValue - this.viewLowValue;
                                let wt, Mt;
                                this.currentTrackingPointer === D.Min ? (wt = it, Mt = it + ut, Mt > this.viewOptions.ceil && (Mt = this.viewOptions.ceil, wt = Mt - ut)) : this.currentTrackingPointer === D.Max && (Mt = it, wt = it - ut, wt < this.viewOptions.floor && (wt = this.viewOptions.floor, Mt = wt + ut)), this.positionTrackingBar(wt, Mt)
                            } else this.positionTrackingHandle(it)
                        }
                        onDragStart(i, s, h, _) {
                            const y = this.getEventPosition(s);
                            this.dragging = new me, this.dragging.active = !0, this.dragging.value = this.positionToValue(y), this.dragging.difference = this.viewHighValue - this.viewLowValue, this.dragging.lowLimit = this.viewOptions.rightToLeft ? this.minHandleElement.position - y : y - this.minHandleElement.position, this.dragging.highLimit = this.viewOptions.rightToLeft ? y - this.maxHandleElement.position : this.maxHandleElement.position - y, this.onStart(i, s, h, _)
                        }
                        getMinValue(i, s, h) {
                            const _ = this.viewOptions.rightToLeft;
                            let y = null;
                            return y = s ? h ? _ ? this.viewOptions.floor : this.viewOptions.ceil - this.dragging.difference : _ ? this.viewOptions.ceil - this.dragging.difference : this.viewOptions.floor : this.positionToValue(_ ? i + this.dragging.lowLimit : i - this.dragging.lowLimit), this.roundStep(y)
                        }
                        getMaxValue(i, s, h) {
                            const _ = this.viewOptions.rightToLeft;
                            let y = null;
                            return y = s ? h ? _ ? this.viewOptions.floor + this.dragging.difference : this.viewOptions.ceil : _ ? this.viewOptions.ceil : this.viewOptions.floor + this.dragging.difference : _ ? this.positionToValue(i + this.dragging.lowLimit) + this.dragging.difference : this.positionToValue(i - this.dragging.lowLimit) + this.dragging.difference, this.roundStep(y)
                        }
                        onDragMove(i) {
                            const s = this.getEventPosition(i);
                            let h, _, y, j;
                            this.viewOptions.animate && !this.viewOptions.animateOnMove && this.moving && (this.sliderElementAnimateClass = !1), this.moving = !0, this.viewOptions.rightToLeft ? (h = this.dragging.lowLimit, _ = this.dragging.highLimit, y = this.maxHandleElement, j = this.minHandleElement) : (h = this.dragging.highLimit, _ = this.dragging.lowLimit, y = this.minHandleElement, j = this.maxHandleElement);
                            const nt = s >= this.maxHandlePosition - h;
                            let it, ut;
                            if(s <= _) {
                                if(0 === y.position) return;
                                it = this.getMinValue(s, !0, !1), ut = this.getMaxValue(s, !0, !1)
                            } else if(nt) {
                                if(j.position === this.maxHandlePosition) return;
                                ut = this.getMaxValue(s, !0, !0), it = this.getMinValue(s, !0, !0)
                            } else it = this.getMinValue(s, !1, !1), ut = this.getMaxValue(s, !1, !1);
                            this.positionTrackingBar(it, ut)
                        }
                        positionTrackingBar(i, s) {
                            !T.isNullOrUndefined(this.viewOptions.minLimit) && i < this.viewOptions.minLimit && (s = lt.roundToPrecisionLimit((i = this.viewOptions.minLimit) + this.dragging.difference, this.viewOptions.precisionLimit)), !T.isNullOrUndefined(this.viewOptions.maxLimit) && s > this.viewOptions.maxLimit && (i = lt.roundToPrecisionLimit((s = this.viewOptions.maxLimit) - this.dragging.difference, this.viewOptions.precisionLimit)), this.viewLowValue = i, this.viewHighValue = s, this.applyViewChange(), this.updateHandles(D.Min, this.valueToPosition(i)), this.updateHandles(D.Max, this.valueToPosition(s))
                        }
                        positionTrackingHandle(i) {
                            i = this.applyMinMaxLimit(i), this.range && (this.viewOptions.pushRange ? i = this.applyPushRange(i) : (this.viewOptions.noSwitching && (this.currentTrackingPointer === D.Min && i > this.viewHighValue ? i = this.applyMinMaxRange(this.viewHighValue) : this.currentTrackingPointer === D.Max && i < this.viewLowValue && (i = this.applyMinMaxRange(this.viewLowValue))), i = this.applyMinMaxRange(i), this.currentTrackingPointer === D.Min && i > this.viewHighValue ? (this.viewLowValue = this.viewHighValue, this.applyViewChange(), this.updateHandles(D.Min, this.maxHandleElement.position), this.updateAriaAttributes(), this.currentTrackingPointer = D.Max, this.minHandleElement.active = !1, this.maxHandleElement.active = !0, this.viewOptions.keyboardSupport && this.maxHandleElement.focus()) : this.currentTrackingPointer === D.Max && i < this.viewLowValue && (this.viewHighValue = this.viewLowValue, this.applyViewChange(), this.updateHandles(D.Max, this.minHandleElement.position), this.updateAriaAttributes(), this.currentTrackingPointer = D.Min, this.maxHandleElement.active = !1, this.minHandleElement.active = !0, this.viewOptions.keyboardSupport && this.minHandleElement.focus()))), this.getCurrentTrackingValue() !== i && (this.currentTrackingPointer === D.Min ? (this.viewLowValue = i, this.applyViewChange()) : this.currentTrackingPointer === D.Max && (this.viewHighValue = i, this.applyViewChange()), this.updateHandles(this.currentTrackingPointer, this.valueToPosition(i)), this.updateAriaAttributes())
                        }
                        applyMinMaxLimit(i) {
                            return !T.isNullOrUndefined(this.viewOptions.minLimit) && i < this.viewOptions.minLimit ? this.viewOptions.minLimit : !T.isNullOrUndefined(this.viewOptions.maxLimit) && i > this.viewOptions.maxLimit ? this.viewOptions.maxLimit : i
                        }
                        applyMinMaxRange(i) {
                            const h = Math.abs(i - (this.currentTrackingPointer === D.Min ? this.viewHighValue : this.viewLowValue));
                            if(!T.isNullOrUndefined(this.viewOptions.minRange) && h < this.viewOptions.minRange) {
                                if(this.currentTrackingPointer === D.Min) return lt.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.minRange, this.viewOptions.precisionLimit);
                                if(this.currentTrackingPointer === D.Max) return lt.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.minRange, this.viewOptions.precisionLimit)
                            }
                            if(!T.isNullOrUndefined(this.viewOptions.maxRange) && h > this.viewOptions.maxRange) {
                                if(this.currentTrackingPointer === D.Min) return lt.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.maxRange, this.viewOptions.precisionLimit);
                                if(this.currentTrackingPointer === D.Max) return lt.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.maxRange, this.viewOptions.precisionLimit)
                            }
                            return i
                        }
                        applyPushRange(i) {
                            const s = this.currentTrackingPointer === D.Min ? this.viewHighValue - i : i - this.viewLowValue,
                                h = T.isNullOrUndefined(this.viewOptions.minRange) ? this.viewOptions.step : this.viewOptions.minRange,
                                _ = this.viewOptions.maxRange;
                            return s < h ? (this.currentTrackingPointer === D.Min ? (this.viewHighValue = lt.roundToPrecisionLimit(Math.min(i + h, this.viewOptions.ceil), this.viewOptions.precisionLimit), i = lt.roundToPrecisionLimit(this.viewHighValue - h, this.viewOptions.precisionLimit), this.applyViewChange(), this.updateHandles(D.Max, this.valueToPosition(this.viewHighValue))) : this.currentTrackingPointer === D.Max && (this.viewLowValue = lt.roundToPrecisionLimit(Math.max(i - h, this.viewOptions.floor), this.viewOptions.precisionLimit), i = lt.roundToPrecisionLimit(this.viewLowValue + h, this.viewOptions.precisionLimit), this.applyViewChange(), this.updateHandles(D.Min, this.valueToPosition(this.viewLowValue))), this.updateAriaAttributes()) : !T.isNullOrUndefined(_) && s > _ && (this.currentTrackingPointer === D.Min ? (this.viewHighValue = lt.roundToPrecisionLimit(i + _, this.viewOptions.precisionLimit), this.applyViewChange(), this.updateHandles(D.Max, this.valueToPosition(this.viewHighValue))) : this.currentTrackingPointer === D.Max && (this.viewLowValue = lt.roundToPrecisionLimit(i - _, this.viewOptions.precisionLimit), this.applyViewChange(), this.updateHandles(D.Min, this.valueToPosition(this.viewLowValue))), this.updateAriaAttributes()), i
                        }
                        getChangeContext() {
                            const i = new Ue;
                            return i.pointerType = this.currentTrackingPointer, i.value = +this.value, this.range && (i.highValue = +this.highValue), i
                        }
                    }
                    return b.\u0275fac = function(i) {
                        return new(i || b)(t.Y36(t.Qsj), t.Y36(t.SBq), t.Y36(t.sBO), t.Y36(t.R0b))
                    }, b.\u0275cmp = t.Xpm({
                        type: b,
                        selectors: [
                            ["ngx-slider"]
                        ],
                        contentQueries: function(i, s, h) {
                            if(1 & i && t.Suo(h, $t, 5), 2 & i) {
                                let _;
                                t.iGM(_ = t.CRH()) && (s.tooltipTemplate = _.first)
                            }
                        },
                        viewQuery: function(i, s) {
                            if(1 & i && (t.Gf(de, 5, St), t.Gf(Be, 5, St), t.Gf(zt, 5, St), t.Gf(Me, 5, St), t.Gf(Jt, 5, Yt), t.Gf(he, 5, Yt), t.Gf(Ee, 5, Dt), t.Gf(ee, 5, Dt), t.Gf(xt, 5, Dt), t.Gf(ke, 5, Dt), t.Gf(Ae, 5, Dt), t.Gf(De, 5, St)), 2 & i) {
                                let h;
                                t.iGM(h = t.CRH()) && (s.leftOuterSelectionBarElement = h.first), t.iGM(h = t.CRH()) && (s.rightOuterSelectionBarElement = h.first), t.iGM(h = t.CRH()) && (s.fullBarElement = h.first), t.iGM(h = t.CRH()) && (s.selectionBarElement = h.first), t.iGM(h = t.CRH()) && (s.minHandleElement = h.first), t.iGM(h = t.CRH()) && (s.maxHandleElement = h.first), t.iGM(h = t.CRH()) && (s.floorLabelElement = h.first), t.iGM(h = t.CRH()) && (s.ceilLabelElement = h.first), t.iGM(h = t.CRH()) && (s.minHandleLabelElement = h.first), t.iGM(h = t.CRH()) && (s.maxHandleLabelElement = h.first), t.iGM(h = t.CRH()) && (s.combinedLabelElement = h.first), t.iGM(h = t.CRH()) && (s.ticksElement = h.first)
                            }
                        },
                        hostAttrs: [1, "ngx-slider"],
                        hostVars: 8,
                        hostBindings: function(i, s) {
                            1 & i && t.NdJ("resize", function(_) {
                                return s.onResize(_)
                            }, !1, t.Jf7), 2 & i && (t.uIk("disabled", s.sliderElementDisabledAttr)("aria-label", s.sliderElementAriaLabel), t.ekj("vertical", s.sliderElementVerticalClass)("animate", s.sliderElementAnimateClass)("with-legend", s.sliderElementWithLegendClass))
                        },
                        inputs: {
                            value: "value",
                            highValue: "highValue",
                            options: "options",
                            manualRefresh: "manualRefresh",
                            triggerFocus: "triggerFocus"
                        },
                        outputs: {
                            valueChange: "valueChange",
                            highValueChange: "highValueChange",
                            userChangeStart: "userChangeStart",
                            userChange: "userChange",
                            userChangeEnd: "userChangeEnd"
                        },
                        features: [t._Bn([Ie]), t.TTD],
                        decls: 29,
                        vars: 13,
                        consts: [
                            ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-left-out-selection"],
                            ["leftOuterSelectionBar", ""],
                            [1, "ngx-slider-span", "ngx-slider-bar"],
                            ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-right-out-selection"],
                            ["rightOuterSelectionBar", ""],
                            ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-full-bar"],
                            ["fullBar", ""],
                            ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-selection-bar"],
                            ["selectionBar", ""],
                            [1, "ngx-slider-span", "ngx-slider-bar", "ngx-slider-selection", 3, "ngStyle"],
                            ["ngxSliderHandle", "", 1, "ngx-slider-span", "ngx-slider-pointer", "ngx-slider-pointer-min", 3, "ngStyle"],
                            ["minHandle", ""],
                            ["ngxSliderHandle", "", 1, "ngx-slider-span", "ngx-slider-pointer", "ngx-slider-pointer-max", 3, "ngStyle"],
                            ["maxHandle", ""],
                            ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-limit", "ngx-slider-floor"],
                            ["floorLabel", ""],
                            ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-limit", "ngx-slider-ceil"],
                            ["ceilLabel", ""],
                            ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-model-value"],
                            ["minHandleLabel", ""],
                            ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-model-high"],
                            ["maxHandleLabel", ""],
                            ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-combined"],
                            ["combinedLabel", ""],
                            ["ngxSliderElement", "", 1, "ngx-slider-ticks", 3, "hidden"],
                            ["ticksElement", ""],
                            ["class", "ngx-slider-tick", 3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"],
                            [1, "ngx-slider-tick", 3, "ngClass", "ngStyle"],
                            [3, "template", "tooltip", "placement"],
                            ["class", "ngx-slider-span ngx-slider-tick-value", 3, "template", "tooltip", "placement", "content", 4, "ngIf"],
                            ["class", "ngx-slider-span ngx-slider-tick-legend", 3, "innerHTML", 4, "ngIf"],
                            [1, "ngx-slider-span", "ngx-slider-tick-value", 3, "template", "tooltip", "placement", "content"],
                            [1, "ngx-slider-span", "ngx-slider-tick-legend", 3, "innerHTML"]
                        ],
                        template: function(i, s) {
                            1 & i && (t.TgZ(0, "span", 0, 1), t._UZ(2, "span", 2), t.qZA(), t.TgZ(3, "span", 3, 4), t._UZ(5, "span", 2), t.qZA(), t.TgZ(6, "span", 5, 6), t._UZ(8, "span", 2), t.qZA(), t.TgZ(9, "span", 7, 8), t._UZ(11, "span", 9), t.qZA(), t._UZ(12, "span", 10, 11)(14, "span", 12, 13)(16, "span", 14, 15)(18, "span", 16, 17)(20, "span", 18, 19)(22, "span", 20, 21)(24, "span", 22, 23), t.TgZ(26, "span", 24, 25), t.YNc(28, He, 4, 9, "span", 26), t.qZA()), 2 & i && (t.xp6(6), t.ekj("ngx-slider-transparent", s.fullBarTransparentClass), t.xp6(3), t.ekj("ngx-slider-draggable", s.selectionBarDraggableClass), t.xp6(2), t.Q6J("ngStyle", s.barStyle), t.xp6(1), t.Q6J("ngStyle", s.minPointerStyle), t.xp6(2), t.Udp("display", s.range ? "inherit" : "none"), t.Q6J("ngStyle", s.maxPointerStyle), t.xp6(12), t.ekj("ngx-slider-ticks-values-under", s.ticksUnderValuesClass), t.Q6J("hidden", !s.showTicks), t.xp6(2), t.Q6J("ngForOf", s.ticks))
                        },
                        dependencies: function() {
                            return [u.mk, u.sg, u.O5, u.PC, St, Yt, Dt, $e]
                        },
                        styles: [".ngx-slider{display:inline-block;position:relative;height:4px;width:100%;margin:35px 0 15px;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;touch-action:pan-y}  .ngx-slider.with-legend{margin-bottom:40px}  .ngx-slider[disabled]{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-pointer{cursor:not-allowed;background-color:#d8e0f3}  .ngx-slider[disabled] .ngx-slider-draggable{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-selection{background:#8b91a2}  .ngx-slider[disabled] .ngx-slider-tick{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-tick.ngx-slider-selected{background:#8b91a2}  .ngx-slider .ngx-slider-span{white-space:nowrap;position:absolute;display:inline-block}  .ngx-slider .ngx-slider-base{width:100%;height:100%;padding:0}  .ngx-slider .ngx-slider-bar-wrapper{left:0;box-sizing:border-box;margin-top:-16px;padding-top:16px;width:100%;height:32px;z-index:1}  .ngx-slider .ngx-slider-draggable{cursor:move}  .ngx-slider .ngx-slider-bar{left:0;width:100%;height:4px;z-index:1;background:#d8e0f3;border-radius:2px}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-transparent .ngx-slider-bar{background:0 0}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-left-out-selection .ngx-slider-bar{background:#df002d}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-right-out-selection .ngx-slider-bar{background:#03a688}  .ngx-slider .ngx-slider-selection{z-index:2;background:#0db9f0;border-radius:2px}  .ngx-slider .ngx-slider-pointer{cursor:pointer;width:32px;height:32px;top:-14px;background-color:#0db9f0;z-index:3;border-radius:16px}  .ngx-slider .ngx-slider-pointer:after{content:'';width:8px;height:8px;position:absolute;top:12px;left:12px;border-radius:4px;background:#fff}  .ngx-slider .ngx-slider-pointer:hover:after{background-color:#fff}  .ngx-slider .ngx-slider-pointer.ngx-slider-active{z-index:4}  .ngx-slider .ngx-slider-pointer.ngx-slider-active:after{background-color:#451aff}  .ngx-slider .ngx-slider-bubble{cursor:default;bottom:16px;padding:1px 3px;color:#55637d;font-size:16px}  .ngx-slider .ngx-slider-bubble.ngx-slider-limit{color:#55637d}  .ngx-slider .ngx-slider-ticks{box-sizing:border-box;width:100%;height:0;position:absolute;left:0;top:-3px;margin:0;z-index:1;list-style:none}  .ngx-slider .ngx-slider-ticks-values-under .ngx-slider-tick-value{top:auto;bottom:-36px}  .ngx-slider .ngx-slider-tick{text-align:center;cursor:pointer;width:10px;height:10px;background:#d8e0f3;border-radius:50%;position:absolute;top:0;left:0;margin-left:11px}  .ngx-slider .ngx-slider-tick.ngx-slider-selected{background:#0db9f0}  .ngx-slider .ngx-slider-tick-value{position:absolute;top:-34px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0)}  .ngx-slider .ngx-slider-tick-legend{position:absolute;top:24px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);max-width:50px;white-space:normal}  .ngx-slider.vertical{position:relative;width:4px;height:100%;margin:0 20px;padding:0;vertical-align:baseline;touch-action:pan-x}  .ngx-slider.vertical .ngx-slider-base{width:100%;height:100%;padding:0}  .ngx-slider.vertical .ngx-slider-bar-wrapper{top:auto;left:0;margin:0 0 0 -16px;padding:0 0 0 16px;height:100%;width:32px}  .ngx-slider.vertical .ngx-slider-bar{bottom:0;left:auto;width:4px;height:100%}  .ngx-slider.vertical .ngx-slider-pointer{left:-14px!important;top:auto;bottom:0}  .ngx-slider.vertical .ngx-slider-bubble{left:16px!important;bottom:0}  .ngx-slider.vertical .ngx-slider-ticks{height:100%;width:0;left:-3px;top:0;z-index:1}  .ngx-slider.vertical .ngx-slider-tick{vertical-align:middle;margin-left:auto;margin-top:11px}  .ngx-slider.vertical .ngx-slider-tick-value{left:24px;top:auto;-webkit-transform:translate(0,-28%);transform:translate(0,-28%)}  .ngx-slider.vertical .ngx-slider-tick-legend{top:auto;right:24px;-webkit-transform:translate(0,-28%);transform:translate(0,-28%);max-width:none;white-space:nowrap}  .ngx-slider.vertical .ngx-slider-ticks-values-under .ngx-slider-tick-value{bottom:auto;left:auto;right:24px}  .ngx-slider *{transition:none}  .ngx-slider.animate .ngx-slider-bar-wrapper{transition:.3s linear}  .ngx-slider.animate .ngx-slider-selection{transition:background-color .3s linear}  .ngx-slider.animate .ngx-slider-pointer{transition:.3s linear}  .ngx-slider.animate .ngx-slider-pointer:after{transition:.3s linear}  .ngx-slider.animate .ngx-slider-bubble{transition:.3s linear}  .ngx-slider.animate .ngx-slider-bubble.ngx-slider-limit{transition:opacity .3s linear}  .ngx-slider.animate .ngx-slider-bubble.ngx-slider-combined{transition:opacity .3s linear}  .ngx-slider.animate .ngx-slider-tick{transition:background-color .3s linear}"]
                    }), b
                })(),
                $e = (() => {
                    class b {}
                    return b.\u0275fac = function(i) {
                        return new(i || b)
                    }, b.\u0275cmp = t.Xpm({
                        type: b,
                        selectors: [
                            ["ngx-slider-tooltip-wrapper"]
                        ],
                        inputs: {
                            template: "template",
                            tooltip: "tooltip",
                            placement: "placement",
                            content: "content"
                        },
                        decls: 2,
                        vars: 2,
                        consts: [
                            [4, "ngIf"],
                            [4, "ngTemplateOutlet", "ngTemplateOutletContext"],
                            [1, "ngx-slider-inner-tooltip"]
                        ],
                        template: function(i, s) {
                            1 & i && (t.YNc(0, ie, 2, 6, "ng-container", 0), t.YNc(1, Ve, 3, 3, "ng-container", 0)), 2 & i && (t.Q6J("ngIf", s.template), t.xp6(1), t.Q6J("ngIf", !s.template))
                        },
                        dependencies: [u.O5, u.tP],
                        styles: [".ngx-slider-inner-tooltip[_ngcontent-%COMP%]{height:100%}"]
                    }), b
                })(),
                ze = (() => {
                    class b {}
                    return b.\u0275fac = function(i) {
                        return new(i || b)
                    }, b.\u0275mod = t.oAB({
                        type: b
                    }), b.\u0275inj = t.cJS({
                        imports: [u.ez]
                    }), b
                })();
            var _e = c(5551);

            function Je(b, a) {
                if(1 & b) {
                    const i = t.EpF();
                    t.ynx(0), t.TgZ(1, "button", 4), t.NdJ("click", function() {
                        t.CHM(i);
                        const h = t.oxw();
                        return t.KtG(h.reset())
                    }), t._UZ(2, "CrownCrete-icon", 5), t._uU(3, " reset "), t.qZA(), t.TgZ(4, "button", 6), t.NdJ("click", function() {
                        t.CHM(i);
                        const h = t.oxw();
                        return t.KtG(h.reset())
                    }), t._UZ(5, "CrownCrete-icon", 5), t.qZA(), t.BQk()
                }
            }
            let Qe = (() => {
                class b {
                    constructor() {
                        this.cdr = (0, t.f3M)(t.sBO), this._max = 1, this._min = 0, this._value = void 0, this._initialValue = this._value || 0, this.showReset = !0, this.disabled = !1, this.withLabel = !0, this.slideAppendix = "", this.orientation = d.i5.portrait, this.valueChange = new t.vpe
                    }
                    set value(i) {
                        i !== this._value && (void 0 !== this._value && this.valueChange.emit(i), this._value = i), this.cdr.markForCheck()
                    }
                    get value() {
                        return null != this._value ? this._value : this._min
                    }
                    set min(i) {
                        this._min !== i && (this._min = i, this._initialValue < this._min && (this._initialValue = this._min)), this.cdr.markForCheck()
                    }
                    get min() {
                        return this._min
                    }
                    set max(i) {
                        this._max !== i && (this._max = i), this.cdr.markForCheck()
                    }
                    get max() {
                        return this._max
                    }
                    get hostCls() {
                        return this.orientation ? this.orientation === d.i5.landscape ? "landscape" : "portrait" : ""
                    }
                    get options() {
                        return {
                            floor: this._min,
                            ceil: this._max,
                            vertical: this.orientation === d.i5.portrait,
                            rightToLeft: !1,
                            disabled: this.disabled,
                            hideLimitLabels: !0,
                            showSelectionBar: !0,
                            hidePointerLabels: !this.withLabel,
                            translate: i => `${i}${this.slideAppendix}`
                        }
                    }
                    ngOnInit() {
                        null == this._value && (this._value = this._min), this._initialValue = this._value, this.cdr.markForCheck()
                    }
                    reset() {
                        this.value = this._initialValue || 0
                    }
                }
                return b.\u0275fac = function(i) {
                    return new(i || b)
                }, b.\u0275cmp = t.Xpm({
                    type: b,
                    selectors: [
                        ["CrownCrete-slider"]
                    ],
                    hostAttrs: [1, "CrownCrete-slider"],
                    hostVars: 2,
                    hostBindings: function(i, s) {
                        2 & i && t.Tol(s.hostCls)
                    },
                    inputs: {
                        showReset: "showReset",
                        disabled: "disabled",
                        withLabel: "withLabel",
                        slideAppendix: "slideAppendix",
                        orientation: "orientation",
                        value: "value",
                        min: "min",
                        max: "max"
                    },
                    outputs: {
                        valueChange: "valueChange"
                    },
                    standalone: !0,
                    features: [t.jDz],
                    decls: 4,
                    vars: 5,
                    consts: [
                        [1, "slider-container"],
                        [1, "slider-wrapper"],
                        [3, "options", "value", "valueChange"],
                        [4, "ngIf"],
                        ["CrownCrete-button", "", 1, "outline", "reverse", "small", 3, "click"],
                        ["name", "fl_trash_o"],
                        ["CrownCrete-icon-button", "", 1, "outline", "small", 3, "click"]
                    ],
                    template: function(i, s) {
                        1 & i && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "ngx-slider", 2), t.NdJ("valueChange", function(_) {
                            return s.value = _
                        }), t.qZA()(), t.YNc(3, Je, 6, 0, "ng-container", 3), t.qZA()), 2 & i && (t.xp6(1), t.ekj("reseting", s.showReset), t.xp6(1), t.Q6J("options", s.options)("value", s.value), t.xp6(1), t.Q6J("ngIf", s.showReset))
                    },
                    dependencies: [u.ez, u.O5, f.c, ze, ve, ue.UX, _e.K],
                    encapsulation: 2,
                    changeDetection: 0
                }), b
            })()
        },
        6348: K => {
            "use strict";
            var v = {
                single_source_shortest_paths: function(c, t, u) {
                    var d = {},
                        f = {};
                    f[t] = 0;
                    var w, x, C, E, Y, N, m = v.PriorityQueue.make();
                    for(m.push(t, 0); !m.empty();)
                        for(C in E = (w = m.pop()).cost, Y = c[x = w.value] || {}) Y.hasOwnProperty(C) && (N = E + Y[C], (typeof f[C] > "u" || f[C] > N) && (f[C] = N, m.push(C, N), d[C] = x));
                    if(typeof u < "u" && typeof f[u] > "u") {
                        var $ = ["Could not find a path from ", t, " to ", u, "."].join("");
                        throw new Error($)
                    }
                    return d
                },
                extract_shortest_path_from_predecessor_list: function(c, t) {
                    for(var u = [], d = t; d;) u.push(d), d = c[d];
                    return u.reverse(), u
                },
                find_path: function(c, t, u) {
                    var d = v.single_source_shortest_paths(c, t, u);
                    return v.extract_shortest_path_from_predecessor_list(d, u)
                },
                PriorityQueue: {
                    make: function(c) {
                        var d, t = v.PriorityQueue,
                            u = {};
                        for(d in c = c || {}, t) t.hasOwnProperty(d) && (u[d] = t[d]);
                        return u.queue = [], u.sorter = c.sorter || t.default_sorter, u
                    },
                    default_sorter: function(c, t) {
                        return c.cost - t.cost
                    },
                    push: function(c, t) {
                        this.queue.push({
                            value: c,
                            cost: t
                        }), this.queue.sort(this.sorter)
                    },
                    pop: function() {
                        return this.queue.shift()
                    },
                    empty: function() {
                        return 0 === this.queue.length
                    }
                }
            };
            K.exports = v
        },
        6236: K => {
            "use strict";
            K.exports = function(c) {
                for(var t = [], u = c.length, d = 0; d < u; d++) {
                    var f = c.charCodeAt(d);
                    if(f >= 55296 && f <= 56319 && u > d + 1) {
                        var m = c.charCodeAt(d + 1);
                        m >= 56320 && m <= 57343 && (f = 1024 * (f - 55296) + m - 56320 + 65536, d += 1)
                    }
                    f < 128 ? t.push(f) : f < 2048 ? (t.push(f >> 6 | 192), t.push(63 & f | 128)) : f < 55296 || f >= 57344 && f < 65536 ? (t.push(f >> 12 | 224), t.push(f >> 6 & 63 | 128), t.push(63 & f | 128)) : f >= 65536 && f <= 1114111 ? (t.push(f >> 18 | 240), t.push(f >> 12 & 63 | 128), t.push(f >> 6 & 63 | 128), t.push(63 & f | 128)) : t.push(239, 191, 189)
                }
                return new Uint8Array(t).buffer
            }
        },
        5646: (K, v, c) => {
            const u = c(5704),
                d = c(8573),
                f = c(9326),
                m = c(226);

            function w(x, C, E, Y, q) {
                const N = [].slice.call(arguments, 1),
                    P = N.length,
                    V = "function" == typeof N[P - 1];
                if(!V && !u()) throw new Error("Callback required as last argument");
                if(!V) {
                    if(P < 1) throw new Error("Too few arguments provided");
                    return 1 === P ? (E = C, C = Y = void 0) : 2 === P && !C.getContext && (Y = E, E = C, C = void 0), new Promise(function($, I) {
                        try {
                            const J = d.create(E, Y);
                            $(x(J, C, Y))
                        } catch (J) {
                            I(J)
                        }
                    })
                }
                if(P < 2) throw new Error("Too few arguments provided");
                2 === P ? (q = E, E = C, C = Y = void 0) : 3 === P && (C.getContext && typeof q > "u" ? (q = Y, Y = void 0) : (q = Y, Y = E, E = C, C = void 0));
                try {
                    const $ = d.create(E, Y);
                    q(null, x($, C, Y))
                } catch ($) {
                    q($)
                }
            }
            v.rT = w.bind(null, f.render), v.hz = w.bind(null, f.renderToDataURL), v.toString = w.bind(null, function(x, C, E) {
                return m.render(x, E)
            })
        },
        5704: K => {
            K.exports = function() {
                return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
            }
        },
        8298: (K, v, c) => {
            const t = c(2230).getSymbolSize;
            v.getRowColCoords = function(d) {
                if(1 === d) return [];
                const f = Math.floor(d / 7) + 2,
                    m = t(d),
                    w = 145 === m ? 26 : 2 * Math.ceil((m - 13) / (2 * f - 2)),
                    x = [m - 7];
                for(let C = 1; C < f - 1; C++) x[C] = x[C - 1] - w;
                return x.push(6), x.reverse()
            }, v.getPositions = function(d) {
                const f = [],
                    m = v.getRowColCoords(d),
                    w = m.length;
                for(let x = 0; x < w; x++)
                    for(let C = 0; C < w; C++) 0 === x && 0 === C || 0 === x && C === w - 1 || x === w - 1 && 0 === C || f.push([m[x], m[C]]);
                return f
            }
        },
        9321: (K, v, c) => {
            const t = c(4059),
                u = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

            function d(f) {
                this.mode = t.ALPHANUMERIC, this.data = f
            }
            d.getBitsLength = function(m) {
                return 11 * Math.floor(m / 2) + m % 2 * 6
            }, d.prototype.getLength = function() {
                return this.data.length
            }, d.prototype.getBitsLength = function() {
                return d.getBitsLength(this.data.length)
            }, d.prototype.write = function(m) {
                let w;
                for(w = 0; w + 2 <= this.data.length; w += 2) {
                    let x = 45 * u.indexOf(this.data[w]);
                    x += u.indexOf(this.data[w + 1]), m.put(x, 11)
                }
                this.data.length % 2 && m.put(u.indexOf(this.data[w]), 6)
            }, K.exports = d
        },
        7701: K => {
            function v() {
                this.buffer = [], this.length = 0
            }
            v.prototype = {
                get: function(c) {
                    const t = Math.floor(c / 8);
                    return 1 == (this.buffer[t] >>> 7 - c % 8 & 1)
                },
                put: function(c, t) {
                    for(let u = 0; u < t; u++) this.putBit(1 == (c >>> t - u - 1 & 1))
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(c) {
                    const t = Math.floor(this.length / 8);
                    this.buffer.length <= t && this.buffer.push(0), c && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
                }
            }, K.exports = v
        },
        9088: K => {
            function v(c) {
                if(!c || c < 1) throw new Error("BitMatrix size must be defined and greater than 0");
                this.size = c, this.data = new Uint8Array(c * c), this.reservedBit = new Uint8Array(c * c)
            }
            v.prototype.set = function(c, t, u, d) {
                const f = c * this.size + t;
                this.data[f] = u, d && (this.reservedBit[f] = !0)
            }, v.prototype.get = function(c, t) {
                return this.data[c * this.size + t]
            }, v.prototype.xor = function(c, t, u) {
                this.data[c * this.size + t] ^= u
            }, v.prototype.isReserved = function(c, t) {
                return this.reservedBit[c * this.size + t]
            }, K.exports = v
        },
        6323: (K, v, c) => {
            const t = c(6236),
                u = c(4059);

            function d(f) {
                this.mode = u.BYTE, "string" == typeof f && (f = t(f)), this.data = new Uint8Array(f)
            }
            d.getBitsLength = function(m) {
                return 8 * m
            }, d.prototype.getLength = function() {
                return this.data.length
            }, d.prototype.getBitsLength = function() {
                return d.getBitsLength(this.data.length)
            }, d.prototype.write = function(f) {
                for(let m = 0, w = this.data.length; m < w; m++) f.put(this.data[m], 8)
            }, K.exports = d
        },
        1690: (K, v, c) => {
            const t = c(5448),
                u = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                d = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
            v.getBlocksCount = function(m, w) {
                switch(w) {
                    case t.L:
                        return u[4 * (m - 1) + 0];
                    case t.M:
                        return u[4 * (m - 1) + 1];
                    case t.Q:
                        return u[4 * (m - 1) + 2];
                    case t.H:
                        return u[4 * (m - 1) + 3];
                    default:
                        return
                }
            }, v.getTotalCodewordsCount = function(m, w) {
                switch(w) {
                    case t.L:
                        return d[4 * (m - 1) + 0];
                    case t.M:
                        return d[4 * (m - 1) + 1];
                    case t.Q:
                        return d[4 * (m - 1) + 2];
                    case t.H:
                        return d[4 * (m - 1) + 3];
                    default:
                        return
                }
            }
        },
        5448: (K, v) => {
            v.L = {
                bit: 1
            }, v.M = {
                bit: 0
            }, v.Q = {
                bit: 3
            }, v.H = {
                bit: 2
            }, v.isValid = function(u) {
                return u && typeof u.bit < "u" && u.bit >= 0 && u.bit < 4
            }, v.from = function(u, d) {
                if(v.isValid(u)) return u;
                try {
                    return function c(t) {
                        if("string" != typeof t) throw new Error("Param is not a string");
                        switch(t.toLowerCase()) {
                            case "l":
                            case "low":
                                return v.L;
                            case "m":
                            case "medium":
                                return v.M;
                            case "q":
                            case "quartile":
                                return v.Q;
                            case "h":
                            case "high":
                                return v.H;
                            default:
                                throw new Error("Unknown EC Level: " + t)
                        }
                    }(u)
                } catch {
                    return d
                }
            }
        },
        2903: (K, v, c) => {
            const t = c(2230).getSymbolSize;
            v.getPositions = function(f) {
                const m = t(f);
                return [
                    [0, 0],
                    [m - 7, 0],
                    [0, m - 7]
                ]
            }
        },
        6327: (K, v, c) => {
            const t = c(2230),
                f = t.getBCHDigit(1335);
            v.getEncodedBits = function(w, x) {
                const C = w.bit << 3 | x;
                let E = C << 10;
                for(; t.getBCHDigit(E) - f >= 0;) E ^= 1335 << t.getBCHDigit(E) - f;
                return 21522 ^ (C << 10 | E)
            }
        },
        9240: (K, v) => {
            const c = new Uint8Array(512),
                t = new Uint8Array(256);
            (function() {
                let d = 1;
                for(let f = 0; f < 255; f++) c[f] = d, t[d] = f, d <<= 1, 256 & d && (d ^= 285);
                for(let f = 255; f < 512; f++) c[f] = c[f - 255]
            })(), v.log = function(d) {
                if(d < 1) throw new Error("log(" + d + ")");
                return t[d]
            }, v.exp = function(d) {
                return c[d]
            }, v.mul = function(d, f) {
                return 0 === d || 0 === f ? 0 : c[t[d] + t[f]]
            }
        },
        5134: (K, v, c) => {
            const t = c(4059),
                u = c(2230);

            function d(f) {
                this.mode = t.KANJI, this.data = f
            }
            d.getBitsLength = function(m) {
                return 13 * m
            }, d.prototype.getLength = function() {
                return this.data.length
            }, d.prototype.getBitsLength = function() {
                return d.getBitsLength(this.data.length)
            }, d.prototype.write = function(f) {
                let m;
                for(m = 0; m < this.data.length; m++) {
                    let w = u.toSJIS(this.data[m]);
                    if(w >= 33088 && w <= 40956) w -= 33088;
                    else {
                        if(!(w >= 57408 && w <= 60351)) throw new Error("Invalid SJIS character: " + this.data[m] + "\nMake sure your charset is UTF-8");
                        w -= 49472
                    }
                    w = 192 * (w >>> 8 & 255) + (255 & w), f.put(w, 13)
                }
            }, K.exports = d
        },
        6485: (K, v) => {
            v.Patterns = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            };

            function t(u, d, f) {
                switch(u) {
                    case v.Patterns.PATTERN000:
                        return (d + f) % 2 == 0;
                    case v.Patterns.PATTERN001:
                        return d % 2 == 0;
                    case v.Patterns.PATTERN010:
                        return f % 3 == 0;
                    case v.Patterns.PATTERN011:
                        return (d + f) % 3 == 0;
                    case v.Patterns.PATTERN100:
                        return (Math.floor(d / 2) + Math.floor(f / 3)) % 2 == 0;
                    case v.Patterns.PATTERN101:
                        return d * f % 2 + d * f % 3 == 0;
                    case v.Patterns.PATTERN110:
                        return (d * f % 2 + d * f % 3) % 2 == 0;
                    case v.Patterns.PATTERN111:
                        return (d * f % 3 + (d + f) % 2) % 2 == 0;
                    default:
                        throw new Error("bad maskPattern:" + u)
                }
            }
            v.isValid = function(d) {
                return null != d && "" !== d && !isNaN(d) && d >= 0 && d <= 7
            }, v.from = function(d) {
                return v.isValid(d) ? parseInt(d, 10) : void 0
            }, v.getPenaltyN1 = function(d) {
                const f = d.size;
                let m = 0,
                    w = 0,
                    x = 0,
                    C = null,
                    E = null;
                for(let Y = 0; Y < f; Y++) {
                    w = x = 0, C = E = null;
                    for(let q = 0; q < f; q++) {
                        let N = d.get(Y, q);
                        N === C ? w++ : (w >= 5 && (m += w - 5 + 3), C = N, w = 1), N = d.get(q, Y), N === E ? x++ : (x >= 5 && (m += x - 5 + 3), E = N, x = 1)
                    }
                    w >= 5 && (m += w - 5 + 3), x >= 5 && (m += x - 5 + 3)
                }
                return m
            }, v.getPenaltyN2 = function(d) {
                const f = d.size;
                let m = 0;
                for(let w = 0; w < f - 1; w++)
                    for(let x = 0; x < f - 1; x++) {
                        const C = d.get(w, x) + d.get(w, x + 1) + d.get(w + 1, x) + d.get(w + 1, x + 1);
                        (4 === C || 0 === C) && m++
                    }
                return 3 * m
            }, v.getPenaltyN3 = function(d) {
                const f = d.size;
                let m = 0,
                    w = 0,
                    x = 0;
                for(let C = 0; C < f; C++) {
                    w = x = 0;
                    for(let E = 0; E < f; E++) w = w << 1 & 2047 | d.get(C, E), E >= 10 && (1488 === w || 93 === w) && m++, x = x << 1 & 2047 | d.get(E, C), E >= 10 && (1488 === x || 93 === x) && m++
                }
                return 40 * m
            }, v.getPenaltyN4 = function(d) {
                let f = 0;
                const m = d.data.length;
                for(let x = 0; x < m; x++) f += d.data[x];
                return 10 * Math.abs(Math.ceil(100 * f / m / 5) - 10)
            }, v.applyMask = function(d, f) {
                const m = f.size;
                for(let w = 0; w < m; w++)
                    for(let x = 0; x < m; x++) f.isReserved(x, w) || f.xor(x, w, t(d, x, w))
            }, v.getBestMask = function(d, f) {
                const m = Object.keys(v.Patterns).length;
                let w = 0,
                    x = 1 / 0;
                for(let C = 0; C < m; C++) {
                    f(C), v.applyMask(C, d);
                    const E = v.getPenaltyN1(d) + v.getPenaltyN2(d) + v.getPenaltyN3(d) + v.getPenaltyN4(d);
                    v.applyMask(C, d), E < x && (x = E, w = C)
                }
                return w
            }
        },
        4059: (K, v, c) => {
            const t = c(6859),
                u = c(7526);
            v.NUMERIC = {
                id: "Numeric",
                bit: 1,
                ccBits: [10, 12, 14]
            }, v.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            }, v.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            }, v.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            }, v.MIXED = {
                bit: -1
            }, v.getCharCountIndicator = function(m, w) {
                if(!m.ccBits) throw new Error("Invalid mode: " + m);
                if(!t.isValid(w)) throw new Error("Invalid version: " + w);
                return w >= 1 && w < 10 ? m.ccBits[0] : w < 27 ? m.ccBits[1] : m.ccBits[2]
            }, v.getBestModeForData = function(m) {
                return u.testNumeric(m) ? v.NUMERIC : u.testAlphanumeric(m) ? v.ALPHANUMERIC : u.testKanji(m) ? v.KANJI : v.BYTE
            }, v.toString = function(m) {
                if(m && m.id) return m.id;
                throw new Error("Invalid mode")
            }, v.isValid = function(m) {
                return m && m.bit && m.ccBits
            }, v.from = function(m, w) {
                if(v.isValid(m)) return m;
                try {
                    return function d(f) {
                        if("string" != typeof f) throw new Error("Param is not a string");
                        switch(f.toLowerCase()) {
                            case "numeric":
                                return v.NUMERIC;
                            case "alphanumeric":
                                return v.ALPHANUMERIC;
                            case "kanji":
                                return v.KANJI;
                            case "byte":
                                return v.BYTE;
                            default:
                                throw new Error("Unknown mode: " + f)
                        }
                    }(m)
                } catch {
                    return w
                }
            }
        },
        9782: (K, v, c) => {
            const t = c(4059);

            function u(d) {
                this.mode = t.NUMERIC, this.data = d.toString()
            }
            u.getBitsLength = function(f) {
                return 10 * Math.floor(f / 3) + (f % 3 ? f % 3 * 3 + 1 : 0)
            }, u.prototype.getLength = function() {
                return this.data.length
            }, u.prototype.getBitsLength = function() {
                return u.getBitsLength(this.data.length)
            }, u.prototype.write = function(f) {
                let m, w, x;
                for(m = 0; m + 3 <= this.data.length; m += 3) w = this.data.substr(m, 3), x = parseInt(w, 10), f.put(x, 10);
                const C = this.data.length - m;
                C > 0 && (w = this.data.substr(m), x = parseInt(w, 10), f.put(x, 3 * C + 1))
            }, K.exports = u
        },
        1845: (K, v, c) => {
            const t = c(9240);
            v.mul = function(d, f) {
                const m = new Uint8Array(d.length + f.length - 1);
                for(let w = 0; w < d.length; w++)
                    for(let x = 0; x < f.length; x++) m[w + x] ^= t.mul(d[w], f[x]);
                return m
            }, v.mod = function(d, f) {
                let m = new Uint8Array(d);
                for(; m.length - f.length >= 0;) {
                    const w = m[0];
                    for(let C = 0; C < f.length; C++) m[C] ^= t.mul(f[C], w);
                    let x = 0;
                    for(; x < m.length && 0 === m[x];) x++;
                    m = m.slice(x)
                }
                return m
            }, v.generateECPolynomial = function(d) {
                let f = new Uint8Array([1]);
                for(let m = 0; m < d; m++) f = v.mul(f, new Uint8Array([1, t.exp(m)]));
                return f
            }
        },
        8573: (K, v, c) => {
            const t = c(2230),
                u = c(5448),
                d = c(7701),
                f = c(9088),
                m = c(8298),
                w = c(2903),
                x = c(6485),
                C = c(1690),
                E = c(3035),
                Y = c(8421),
                q = c(6327),
                N = c(4059),
                P = c(248);

            function z(U, S, Q) {
                const H = U.size,
                    X = q.getEncodedBits(S, Q);
                let B, M;
                for(B = 0; B < 15; B++) M = 1 == (X >> B & 1), U.set(B < 6 ? B : B < 8 ? B + 1 : H - 15 + B, 8, M, !0), U.set(8, B < 8 ? H - B - 1 : B < 9 ? 15 - B - 1 + 1 : 15 - B - 1, M, !0);
                U.set(H - 8, 8, 1, !0)
            }

            function Z(U, S, Q, H) {
                let X;
                if(Array.isArray(U)) X = P.fromArray(U);
                else {
                    if("string" != typeof U) throw new Error("Invalid data");
                    {
                        let dt = S;
                        if(!dt) {
                            const yt = P.rawSplit(U);
                            dt = Y.getBestVersionForData(yt, Q)
                        }
                        X = P.fromString(U, dt || 40)
                    }
                }
                const B = Y.getBestVersionForData(X, Q);
                if(!B) throw new Error("The amount of data is too big to be stored in a QR Code");
                if(S) {
                    if(S < B) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + B + ".\n")
                } else S = B;
                const M = function p(U, S, Q) {
                        const H = new d;
                        Q.forEach(function(W) {
                            H.put(W.mode.bit, 4), H.put(W.getLength(), N.getCharCountIndicator(W.mode, U)), W.write(H)
                        });
                        const M = 8 * (t.getSymbolTotalCodewords(U) - C.getTotalCodewordsCount(U, S));
                        for(H.getLengthInBits() + 4 <= M && H.put(0, 4); H.getLengthInBits() % 8 != 0;) H.putBit(0);
                        const tt = (M - H.getLengthInBits()) / 8;
                        for(let W = 0; W < tt; W++) H.put(W % 2 ? 17 : 236, 8);
                        return function L(U, S, Q) {
                            const H = t.getSymbolTotalCodewords(S),
                                B = H - C.getTotalCodewordsCount(S, Q),
                                M = C.getBlocksCount(S, Q),
                                W = M - H % M,
                                dt = Math.floor(H / M),
                                yt = Math.floor(B / M),
                                It = yt + 1,
                                mt = dt - yt,
                                Ct = new E(mt);
                            let pt = 0;
                            const Ft = new Array(M),
                                at = new Array(M);
                            let rt = 0;
                            const oe = new Uint8Array(U.buffer);
                            for(let Tt = 0; Tt < M; Tt++) {
                                const Ut = Tt < W ? yt : It;
                                Ft[Tt] = oe.slice(pt, pt + Ut), at[Tt] = Ct.encode(Ft[Tt]), pt += Ut, rt = Math.max(rt, Ut)
                            }
                            const Vt = new Uint8Array(H);
                            let bt, vt, ht = 0;
                            for(bt = 0; bt < rt; bt++)
                                for(vt = 0; vt < M; vt++) bt < Ft[vt].length && (Vt[ht++] = Ft[vt][bt]);
                            for(bt = 0; bt < mt; bt++)
                                for(vt = 0; vt < M; vt++) Vt[ht++] = at[vt][bt];
                            return Vt
                        }(H, U, S)
                    }(S, Q, X),
                    tt = t.getSymbolSize(S),
                    W = new f(tt);
                return function V(U, S) {
                        const Q = U.size,
                            H = w.getPositions(S);
                        for(let X = 0; X < H.length; X++) {
                            const B = H[X][0],
                                M = H[X][1];
                            for(let tt = -1; tt <= 7; tt++)
                                if(!(B + tt <= -1 || Q <= B + tt))
                                    for(let W = -1; W <= 7; W++) M + W <= -1 || Q <= M + W || U.set(B + tt, M + W, tt >= 0 && tt <= 6 && (0 === W || 6 === W) || W >= 0 && W <= 6 && (0 === tt || 6 === tt) || tt >= 2 && tt <= 4 && W >= 2 && W <= 4, !0)
                        }
                    }(W, S),
                    function $(U) {
                        const S = U.size;
                        for(let Q = 8; Q < S - 8; Q++) {
                            const H = Q % 2 == 0;
                            U.set(Q, 6, H, !0), U.set(6, Q, H, !0)
                        }
                    }(W),
                    function I(U, S) {
                        const Q = m.getPositions(S);
                        for(let H = 0; H < Q.length; H++) {
                            const X = Q[H][0],
                                B = Q[H][1];
                            for(let M = -2; M <= 2; M++)
                                for(let tt = -2; tt <= 2; tt++) U.set(X + M, B + tt, -2 === M || 2 === M || -2 === tt || 2 === tt || 0 === M && 0 === tt, !0)
                        }
                    }(W, S), z(W, Q, 0), S >= 7 && function J(U, S) {
                        const Q = U.size,
                            H = Y.getEncodedBits(S);
                        let X, B, M;
                        for(let tt = 0; tt < 18; tt++) X = Math.floor(tt / 3), B = tt % 3 + Q - 8 - 3, M = 1 == (H >> tt & 1), U.set(X, B, M, !0), U.set(B, X, M, !0)
                    }(W, S),
                    function F(U, S) {
                        const Q = U.size;
                        let H = -1,
                            X = Q - 1,
                            B = 7,
                            M = 0;
                        for(let tt = Q - 1; tt > 0; tt -= 2)
                            for(6 === tt && tt--;;) {
                                for(let W = 0; W < 2; W++)
                                    if(!U.isReserved(X, tt - W)) {
                                        let dt = !1;
                                        M < S.length && (dt = 1 == (S[M] >>> B & 1)), U.set(X, tt - W, dt), B--, -1 === B && (M++, B = 7)
                                    } if(X += H, X < 0 || Q <= X) {
                                    X -= H, H = -H;
                                    break
                                }
                            }
                    }(W, M), isNaN(H) && (H = x.getBestMask(W, z.bind(null, W, Q))), x.applyMask(H, W), z(W, Q, H), {
                        modules: W,
                        version: S,
                        errorCorrectionLevel: Q,
                        maskPattern: H,
                        segments: X
                    }
            }
            v.create = function(S, Q) {
                if(typeof S > "u" || "" === S) throw new Error("No input text");
                let X, B, H = u.M;
                return typeof Q < "u" && (H = u.from(Q.errorCorrectionLevel, u.M), X = Y.from(Q.version), B = x.from(Q.maskPattern), Q.toSJISFunc && t.setToSJISFunction(Q.toSJISFunc)), Z(S, X, H, B)
            }
        },
        3035: (K, v, c) => {
            const t = c(1845);

            function u(d) {
                this.genPoly = void 0, this.degree = d, this.degree && this.initialize(this.degree)
            }
            u.prototype.initialize = function(f) {
                this.degree = f, this.genPoly = t.generateECPolynomial(this.degree)
            }, u.prototype.encode = function(f) {
                if(!this.genPoly) throw new Error("Encoder not initialized");
                const m = new Uint8Array(f.length + this.degree);
                m.set(f);
                const w = t.mod(m, this.genPoly),
                    x = this.degree - w.length;
                if(x > 0) {
                    const C = new Uint8Array(this.degree);
                    return C.set(w, x), C
                }
                return w
            }, K.exports = u
        },
        7526: (K, v) => {
            const c = "[0-9]+";
            let u = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
            u = u.replace(/u/g, "\\u");
            const d = "(?:(?![A-Z0-9 $%*+\\-./:]|" + u + ")(?:.|[\r\n]))+";
            v.KANJI = new RegExp(u, "g"), v.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), v.BYTE = new RegExp(d, "g"), v.NUMERIC = new RegExp(c, "g"), v.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
            const f = new RegExp("^" + u + "$"),
                m = new RegExp("^" + c + "$"),
                w = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
            v.testKanji = function(C) {
                return f.test(C)
            }, v.testNumeric = function(C) {
                return m.test(C)
            }, v.testAlphanumeric = function(C) {
                return w.test(C)
            }
        },
        248: (K, v, c) => {
            const t = c(4059),
                u = c(9782),
                d = c(9321),
                f = c(6323),
                m = c(5134),
                w = c(7526),
                x = c(2230),
                C = c(6348);

            function E(J) {
                return unescape(encodeURIComponent(J)).length
            }

            function Y(J, z, F) {
                const p = [];
                let L;
                for(; null !== (L = J.exec(F));) p.push({
                    data: L[0],
                    index: L.index,
                    mode: z,
                    length: L[0].length
                });
                return p
            }

            function q(J) {
                const z = Y(w.NUMERIC, t.NUMERIC, J),
                    F = Y(w.ALPHANUMERIC, t.ALPHANUMERIC, J);
                let p, L;
                return x.isKanjiModeEnabled() ? (p = Y(w.BYTE, t.BYTE, J), L = Y(w.KANJI, t.KANJI, J)) : (p = Y(w.BYTE_KANJI, t.BYTE, J), L = []), z.concat(F, p, L).sort(function(U, S) {
                    return U.index - S.index
                }).map(function(U) {
                    return {
                        data: U.data,
                        mode: U.mode,
                        length: U.length
                    }
                })
            }

            function N(J, z) {
                switch(z) {
                    case t.NUMERIC:
                        return u.getBitsLength(J);
                    case t.ALPHANUMERIC:
                        return d.getBitsLength(J);
                    case t.KANJI:
                        return m.getBitsLength(J);
                    case t.BYTE:
                        return f.getBitsLength(J)
                }
            }

            function I(J, z) {
                let F;
                const p = t.getBestModeForData(J);
                if(F = t.from(z, p), F !== t.BYTE && F.bit < p.bit) throw new Error('"' + J + '" cannot be encoded with mode ' + t.toString(F) + ".\n Suggested mode is: " + t.toString(p));
                switch(F === t.KANJI && !x.isKanjiModeEnabled() && (F = t.BYTE), F) {
                    case t.NUMERIC:
                        return new u(J);
                    case t.ALPHANUMERIC:
                        return new d(J);
                    case t.KANJI:
                        return new m(J);
                    case t.BYTE:
                        return new f(J)
                }
            }
            v.fromArray = function(z) {
                return z.reduce(function(F, p) {
                    return "string" == typeof p ? F.push(I(p, null)) : p.data && F.push(I(p.data, p.mode)), F
                }, [])
            }, v.fromString = function(z, F) {
                const L = function V(J) {
                        const z = [];
                        for(let F = 0; F < J.length; F++) {
                            const p = J[F];
                            switch(p.mode) {
                                case t.NUMERIC:
                                    z.push([p, {
                                        data: p.data,
                                        mode: t.ALPHANUMERIC,
                                        length: p.length
                                    }, {
                                        data: p.data,
                                        mode: t.BYTE,
                                        length: p.length
                                    }]);
                                    break;
                                case t.ALPHANUMERIC:
                                    z.push([p, {
                                        data: p.data,
                                        mode: t.BYTE,
                                        length: p.length
                                    }]);
                                    break;
                                case t.KANJI:
                                    z.push([p, {
                                        data: p.data,
                                        mode: t.BYTE,
                                        length: E(p.data)
                                    }]);
                                    break;
                                case t.BYTE:
                                    z.push([{
                                        data: p.data,
                                        mode: t.BYTE,
                                        length: E(p.data)
                                    }])
                            }
                        }
                        return z
                    }(q(z, x.isKanjiModeEnabled())),
                    Z = function $(J, z) {
                        const F = {},
                            p = {
                                start: {}
                            };
                        let L = ["start"];
                        for(let Z = 0; Z < J.length; Z++) {
                            const U = J[Z],
                                S = [];
                            for(let Q = 0; Q < U.length; Q++) {
                                const H = U[Q],
                                    X = "" + Z + Q;
                                S.push(X), F[X] = {
                                    node: H,
                                    lastCount: 0
                                }, p[X] = {};
                                for(let B = 0; B < L.length; B++) {
                                    const M = L[B];
                                    F[M] && F[M].node.mode === H.mode ? (p[M][X] = N(F[M].lastCount + H.length, H.mode) - N(F[M].lastCount, H.mode), F[M].lastCount += H.length) : (F[M] && (F[M].lastCount = H.length), p[M][X] = N(H.length, H.mode) + 4 + t.getCharCountIndicator(H.mode, z))
                                }
                            }
                            L = S
                        }
                        for(let Z = 0; Z < L.length; Z++) p[L[Z]].end = 0;
                        return {
                            map: p,
                            table: F
                        }
                    }(L, F),
                    U = C.find_path(Z.map, "start", "end"),
                    S = [];
                for(let Q = 1; Q < U.length - 1; Q++) S.push(Z.table[U[Q]].node);
                return v.fromArray(function P(J) {
                    return J.reduce(function(z, F) {
                        const p = z.length - 1 >= 0 ? z[z.length - 1] : null;
                        return p && p.mode === F.mode ? (z[z.length - 1].data += F.data, z) : (z.push(F), z)
                    }, [])
                }(S))
            }, v.rawSplit = function(z) {
                return v.fromArray(q(z, x.isKanjiModeEnabled()))
            }
        },
        2230: (K, v) => {
            let c;
            const t = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
            v.getSymbolSize = function(d) {
                if(!d) throw new Error('"version" cannot be null or undefined');
                if(d < 1 || d > 40) throw new Error('"version" should be in range from 1 to 40');
                return 4 * d + 17
            }, v.getSymbolTotalCodewords = function(d) {
                return t[d]
            }, v.getBCHDigit = function(u) {
                let d = 0;
                for(; 0 !== u;) d++, u >>>= 1;
                return d
            }, v.setToSJISFunction = function(d) {
                if("function" != typeof d) throw new Error('"toSJISFunc" is not a valid function.');
                c = d
            }, v.isKanjiModeEnabled = function() {
                return typeof c < "u"
            }, v.toSJIS = function(d) {
                return c(d)
            }
        },
        6859: (K, v) => {
            v.isValid = function(t) {
                return !isNaN(t) && t >= 1 && t <= 40
            }
        },
        8421: (K, v, c) => {
            const t = c(2230),
                u = c(1690),
                d = c(5448),
                f = c(4059),
                m = c(6859),
                x = t.getBCHDigit(7973);

            function E(N, P) {
                return f.getCharCountIndicator(N, P) + 4
            }

            function Y(N, P) {
                let V = 0;
                return N.forEach(function($) {
                    const I = E($.mode, P);
                    V += I + $.getBitsLength()
                }), V
            }
            v.from = function(P, V) {
                return m.isValid(P) ? parseInt(P, 10) : V
            }, v.getCapacity = function(P, V, $) {
                if(!m.isValid(P)) throw new Error("Invalid QR Code version");
                typeof $ > "u" && ($ = f.BYTE);
                const z = 8 * (t.getSymbolTotalCodewords(P) - u.getTotalCodewordsCount(P, V));
                if($ === f.MIXED) return z;
                const F = z - E($, P);
                switch($) {
                    case f.NUMERIC:
                        return Math.floor(F / 10 * 3);
                    case f.ALPHANUMERIC:
                        return Math.floor(F / 11 * 2);
                    case f.KANJI:
                        return Math.floor(F / 13);
                    default:
                        return Math.floor(F / 8)
                }
            }, v.getBestVersionForData = function(P, V) {
                let $;
                const I = d.from(V, d.M);
                if(Array.isArray(P)) {
                    if(P.length > 1) return function q(N, P) {
                        for(let V = 1; V <= 40; V++)
                            if(Y(N, V) <= v.getCapacity(V, P, f.MIXED)) return V
                    }(P, I);
                    if(0 === P.length) return 1;
                    $ = P[0]
                } else $ = P;
                return function C(N, P, V) {
                    for(let $ = 1; $ <= 40; $++)
                        if(P <= v.getCapacity($, V, N)) return $
                }($.mode, $.getLength(), I)
            }, v.getEncodedBits = function(P) {
                if(!m.isValid(P) || P < 7) throw new Error("Invalid QR Code version");
                let V = P << 12;
                for(; t.getBCHDigit(V) - x >= 0;) V ^= 7973 << t.getBCHDigit(V) - x;
                return P << 12 | V
            }
        },
        9326: (K, v, c) => {
            const t = c(3239);
            v.render = function(m, w, x) {
                let C = x,
                    E = w;
                typeof C > "u" && (!w || !w.getContext) && (C = w, w = void 0), w || (E = function d() {
                    try {
                        return document.createElement("canvas")
                    } catch {
                        throw new Error("You need to specify a canvas element")
                    }
                }()), C = t.getOptions(C);
                const Y = t.getImageWidth(m.modules.size, C),
                    q = E.getContext("2d"),
                    N = q.createImageData(Y, Y);
                return t.qrToImageData(N.data, m, C),
                    function u(f, m, w) {
                        f.clearRect(0, 0, m.width, m.height), m.style || (m.style = {}), m.height = w, m.width = w, m.style.height = w + "px", m.style.width = w + "px"
                    }(q, E, Y), q.putImageData(N, 0, 0), E
            }, v.renderToDataURL = function(m, w, x) {
                let C = x;
                return typeof C > "u" && (!w || !w.getContext) && (C = w, w = void 0), C || (C = {}), v.render(m, w, C).toDataURL(C.type || "image/png", (C.rendererOpts || {}).quality)
            }
        },
        226: (K, v, c) => {
            const t = c(3239);

            function u(m, w) {
                const x = m.a / 255,
                    C = w + '="' + m.hex + '"';
                return x < 1 ? C + " " + w + '-opacity="' + x.toFixed(2).slice(1) + '"' : C
            }

            function d(m, w, x) {
                let C = m + w;
                return typeof x < "u" && (C += " " + x), C
            }
            v.render = function(w, x, C) {
                const E = t.getOptions(x),
                    Y = w.modules.size,
                    q = w.modules.data,
                    N = Y + 2 * E.margin,
                    P = E.color.light.a ? "<path " + u(E.color.light, "fill") + ' d="M0 0h' + N + "v" + N + 'H0z"/>' : "",
                    V = "<path " + u(E.color.dark, "stroke") + ' d="' + function f(m, w, x) {
                        let C = "",
                            E = 0,
                            Y = !1,
                            q = 0;
                        for(let N = 0; N < m.length; N++) {
                            const P = Math.floor(N % w),
                                V = Math.floor(N / w);
                            !P && !Y && (Y = !0), m[N] ? (q++, N > 0 && P > 0 && m[N - 1] || (C += Y ? d("M", P + x, .5 + V + x) : d("m", E, 0), E = 0, Y = !1), P + 1 < w && m[N + 1] || (C += d("h", q), q = 0)) : E++
                        }
                        return C
                    }(q, Y, E.margin) + '"/>',
                    J = '<svg xmlns="http://www.w3.org/2000/svg" ' + (E.width ? 'width="' + E.width + '" height="' + E.width + '" ' : "") + 'viewBox="0 0 ' + N + " " + N + '" shape-rendering="crispEdges">' + P + V + "</svg>\n";
                return "function" == typeof C && C(null, J), J
            }
        },
        3239: (K, v) => {
            function c(t) {
                if("number" == typeof t && (t = t.toString()), "string" != typeof t) throw new Error("Color should be defined as hex string");
                let u = t.slice().replace("#", "").split("");
                if(u.length < 3 || 5 === u.length || u.length > 8) throw new Error("Invalid hex color: " + t);
                (3 === u.length || 4 === u.length) && (u = Array.prototype.concat.apply([], u.map(function(f) {
                    return [f, f]
                }))), 6 === u.length && u.push("F", "F");
                const d = parseInt(u.join(""), 16);
                return {
                    r: d >> 24 & 255,
                    g: d >> 16 & 255,
                    b: d >> 8 & 255,
                    a: 255 & d,
                    hex: "#" + u.slice(0, 6).join("")
                }
            }
            v.getOptions = function(u) {
                u || (u = {}), u.color || (u.color = {});
                const f = u.width && u.width >= 21 ? u.width : void 0;
                return {
                    width: f,
                    scale: f ? 4 : u.scale || 4,
                    margin: typeof u.margin > "u" || null === u.margin || u.margin < 0 ? 4 : u.margin,
                    color: {
                        dark: c(u.color.dark || "#000000ff"),
                        light: c(u.color.light || "#ffffffff")
                    },
                    type: u.type,
                    rendererOpts: u.rendererOpts || {}
                }
            }, v.getScale = function(u, d) {
                return d.width && d.width >= u + 2 * d.margin ? d.width / (u + 2 * d.margin) : d.scale
            }, v.getImageWidth = function(u, d) {
                const f = v.getScale(u, d);
                return Math.floor((u + 2 * d.margin) * f)
            }, v.qrToImageData = function(u, d, f) {
                const m = d.modules.size,
                    w = d.modules.data,
                    x = v.getScale(m, f),
                    C = Math.floor((m + 2 * f.margin) * x),
                    E = f.margin * x,
                    Y = [f.color.light, f.color.dark];
                for(let q = 0; q < C; q++)
                    for(let N = 0; N < C; N++) {
                        let P = 4 * (q * C + N),
                            V = f.color.light;
                        q >= E && N >= E && q < C - E && N < C - E && (V = Y[w[Math.floor((q - E) / x) * m + Math.floor((N - E) / x)] ? 1 : 0]), u[P++] = V.r, u[P++] = V.g, u[P++] = V.b, u[P] = V.a
                    }
            }
        }
    }
]);
//# sourceMappingURL=95.bf3fbbcaf672d8d7.js.map