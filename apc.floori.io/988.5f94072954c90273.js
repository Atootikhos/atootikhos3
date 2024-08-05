(function () {
    try {
        var T = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
            M = (new Error).stack;
        M && (T._sentryDebugIds = T._sentryDebugIds || {}, T._sentryDebugIds[M] = "d53bddc0-f54c-4c5b-8196-bb2ed858b005", T._sentryDebugIdIdentifier = "sentry-dbid-d53bddc0-f54c-4c5b-8196-bb2ed858b005")
    } catch {}
})(), (self.webpackChunkCrownCrete = self.webpackChunkCrownCrete || []).push([
    [988], {
        7988: (T, M, a) => {
            a.r(M), a.d(M, {
                BaseRoomsLayoutComponent: () => Ft,
                featureDialogCaller: () => H.H
            });
            var o = a(2560),
                c = a(4666),
                I = a(7759),
                v = a(7879),
                R = a(5924);
            a(7714);
            var A = a(3280),
                Q = a(1989),
                m = a(1121);
            a(4132);
            var _ = a(5551);
            let io = (() => {
                class e {}
                return e.\u0275fac = function (t) {
                    return new(t || e)
                }, e.\u0275mod = o.oAB({
                    type: e
                }), e.\u0275inj = o.cJS({
                    imports: [c.ez, _.K]
                }), e
            })();
            var x = a(1378),
                ro = a(1511),
                C = a(7549),
                L = a(8281),
                P = a(9739),
                f = a(6096),
                U = a(1339),
                J = a(635),
                u = a(9337),
                F = a(2673),
                lo = a(3158),
                ao = a(591),
                so = a(745),
                co = a(8653),
                mo = a(4351),
                po = a(2566),
                go = a(4874),
                Z = a(8951),
                fo = a(5713),
                D = a(2874);
            let k = (() => {
                class e extends L.m1 {
                    constructor(t, n, i, l, s, d) {
                        super({
                            isMobile: t.isMobile,
                            uploading: !1
                        }), this.deviceService = t, this.appFacade = n, this.configProvider = i, this.navigation = l, this.roomsProvider = s, this.roomsApi = d, this.trackingProvider = (0, o.f3M)(m.Hj), this.uploadTimeMax = 10, this.vm$ = this.select(g => {
                            const p = g.progress || 0;
                            return {
                                isMobile: g.isMobile,
                                uploading: g.uploading,
                                disabled: (p || 0) > 0 && p <= 100
                            }
                        }), this.progress$ = this.select(g => g.progress || 0).pipe((0, U.g)(20)), this.header$ = this.configProvider.companyConfig$?.pipe((0, J.U)(g => {
                            const p = {
                                ...g.company?.header
                            };
                            return p && !p?.customImagesEnabled && (p.imageDesktopUrl = "/assets/images/full_preview.png", p.imageMobileUrl = "/assets/images/mobile_preview.png"), p
                        })), this.validFiles = m.Ff.validFileTypes, this.timerInProgress = !1
                    }
                    get uploading() {
                        return this.get().uploading
                    }
                    uploadImage(t) {
                        if (!t?.name || !t.name.match(m.Ff.validImagesRegex)) return;
                        const n = Date.now();
                        this.appFacade.visitorId.pipe((0, u.b)(() => {
                            this.patchState({
                                uploading: !0
                            })
                        }), (0, F.w)(i => this.roomsApi.createVisitorRoom(t, i || "", l => {
                            const s = .4 * l;
                            if (this.patchState({
                                    progress: s
                                }), s >= 39) {
                                const d = Math.floor(this.uploadTimeMax - (Date.now() - n) / 1e3);
                                this.manualProgressUpdater(d)
                            }
                        })), (0, lo.K)(() => (this.patchState({
                            progress: 0
                        }), this.timerInProgress = !1, ao.E)), (0, J.U)(i => (this.appFacade.updateVisitorId(i?.visitorId), i)), (0, u.b)(() => {
                            this.roomsProvider.setRoomUploading(!0)
                        }), (0, U.g)(50), (0, u.b)(i => {
                            const l = {
                                name: i?.room?.name,
                                image: {
                                    medium: i?.room?.thumbnail,
                                    large: i?.room?.image
                                },
                                image4k: i?.room?.image4k,
                                id: i?.roomId,
                                category: i?.room?.category,
                                visitorRoom: i?.room?.visitorRoom
                            };
                            this.roomsProvider.setActiveRoom(l), i?.room && this.roomsProvider.updateRooms(l), this.trackingProvider.track(f.y8.photoUploaded)
                        }), (0, U.g)(50), (0, F.w)(i => this.navigation.goToRoom({
                            uid: i.roomId || ""
                        })), (0, u.b)(() => {
                            this.timerInProgress = !1, this.patchState({
                                uploading: !1,
                                progress: 100
                            })
                        })).subscribe()
                    }
                    manualProgressUpdater(t) {
                        this.timerInProgress || (this.timerInProgress = !0, (0, so.of)(!0).pipe((0, F.w)(() => (0, co.F)(1e3)), (0, J.U)(() => -1), (0, mo.R)((n, i) => n + i, t), (0, po.o)(n => n > 0), (0, go.O)(t), (0, Z.R)(this.destroy$), (0, u.b)(() => {
                            const {
                                progress: n
                            } = this.get();
                            this.patchState({
                                progress: Math.min((n || 0) + 8, 95)
                            })
                        })).subscribe())
                    }
                }
                return e.\u0275fac = function (t) {
                    return new(t || e)(o.LFG(P.U8), o.LFG(fo.lF), o.LFG(f.FI), o.LFG(f.YD), o.LFG(f.XZ), o.LFG(f.O7))
                }, e.\u0275prov = o.Yz7({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();

            function uo(e, r) {
                if (1 & e) {
                    const t = o.EpF();
                    o.TgZ(0, "button", 3), o.NdJ("click", function () {
                        o.CHM(t);
                        const i = o.oxw(2);
                        return o.KtG(i.openFilters())
                    }), o._UZ(1, "CrownCrete-icon", 4), o.qZA()
                }
            }

            function ho(e, r) {
                if (1 & e) {
                    const t = o.EpF();
                    o.TgZ(0, "button", 5), o._UZ(1, "CrownCrete-icon", 6), o.TgZ(2, "input", 7), o.NdJ("change", function (i) {
                        o.CHM(t);
                        const l = o.oxw(2);
                        return o.KtG(l.photoInputUpload(i))
                    }), o.qZA()()
                }
                if (2 & e) {
                    const t = o.oxw().ngrxLet,
                        n = o.oxw();
                    o.xp6(2), o.Q6J("accept", n.validFileTypes)("disabled", t.data.uploading)
                }
            }

            function _o(e, r) {
                if (1 & e && (o.ynx(0), o.YNc(1, uo, 2, 0, "button", 1), o.YNc(2, ho, 3, 2, "button", 2), o.BQk()), 2 & e) {
                    const t = r.ngrxLet,
                        n = o.oxw();
                    o.xp6(1), o.Q6J("ngIf", n.showFilters), o.xp6(1), o.Q6J("ngIf", !t.data.uploading)
                }
            }
            const xo = function (e) {
                return {
                    data: e
                }
            };
            let vo = (() => {
                class e {
                    constructor() {
                        this.store = (0, o.f3M)(k), this.vm$ = this.store.vm$, this.validFileTypes = this.store.validFiles, this.showFilters = !0, this.openFiltersDialog = new o.vpe
                    }
                    photoInputUpload(t) {
                        this.store.uploadImage(t.target.files?. [0]), t.target.value = ""
                    }
                    openFilters() {
                        this.openFiltersDialog.emit()
                    }
                }
                return e.\u0275fac = function (t) {
                    return new(t || e)
                }, e.\u0275cmp = o.Xpm({
                    type: e,
                    selectors: [
                        ["CrownCrete-floating-actions-rooms"]
                    ],
                    hostAttrs: [1, "CrownCrete-floating-actions-rooms"],
                    inputs: {
                        showFilters: "showFilters"
                    },
                    outputs: {
                        openFiltersDialog: "openFiltersDialog"
                    },
                    standalone: !0,
                    features: [o.jDz],
                    decls: 1,
                    vars: 3,
                    consts: [
                        [4, "ngrxLet"],
                        ["CrownCrete-icon-button", "", "class", "outline big", 3, "click", 4, "ngIf"],
                        ["class", "CrownCrete-icon-button primary big", 4, "ngIf"],
                        ["CrownCrete-icon-button", "", 1, "outline", "big", 3, "click"],
                        ["name", "fl_search_o"],
                        [1, "CrownCrete-icon-button", "primary", "big"],
                        ["name", "fl_camera_o"],
                        ["type", "file", 1, "CrownCrete-pointer", 3, "accept", "disabled", "change"]
                    ],
                    template: function (t, n) {
                        1 & t && o.YNc(0, _o, 3, 2, "ng-container", 0), 2 & t && o.Q6J("ngrxLet", o.VKq(1, xo, n.vm$))
                    },
                    dependencies: [c.ez, c.O5, I.c, _.K, C._N, C.eJ],
                    styles: [".CrownCrete-floating-actions-rooms{display:flex;flex-direction:column}.CrownCrete-floating-actions-rooms .CrownCrete-icon-button,.CrownCrete-floating-actions-rooms .CrownCrete-button{position:relative;margin-top:.75rem;align-self:baseline}.CrownCrete-floating-actions-rooms .CrownCrete-icon-button input[type=file],.CrownCrete-floating-actions-rooms .CrownCrete-button input[type=file]{position:absolute;opacity:0;inset:0}\n"],
                    encapsulation: 2
                }), e
            })();
            var Co = a(8590),
                bo = a(9310),
                b = a(852);

            function yo(e, r) {
                if (1 & e) {
                    const t = o.EpF();
                    o.TgZ(0, "button", 6), o._UZ(1, "CrownCrete-icon", 7), o._uU(2), o.ALo(3, "flTranslate"), o.TgZ(4, "input", 8), o.NdJ("change", function (i) {
                        o.CHM(t);
                        const l = o.oxw(2);
                        return o.KtG(l.photoInputUpload(i))
                    }), o.qZA()()
                }
                if (2 & e) {
                    const t = o.oxw().ngrxLet,
                        n = o.oxw();
                    o.Q6J("disabled", t.data.uploading), o.xp6(2), o.hij(" ", o.lcZ(3, 3, "uploadPhoto"), " "), o.xp6(2), o.Q6J("accept", n.validFileTypes)
                }
            }

            function To(e, r) {
                if (1 & e && (o.TgZ(0, "div", 9), o._UZ(1, "img", 10), o.qZA()), 2 & e) {
                    const t = o.oxw().ngrxLet;
                    o.xp6(1), o.Q6J("src", t.header.imageDesktopUrl, o.LSH)
                }
            }

            function Mo(e, r) {
                if (1 & e && (o.TgZ(0, "p", 11), o._uU(1), o.ALo(2, "flTranslate"), o.qZA(), o._UZ(3, "CrownCrete-progress-loader", 12)), 2 & e) {
                    const t = o.oxw().ngrxLet;
                    o.xp6(1), o.hij(" ", o.lcZ(2, 2, "rooms.photoUploading"), " "), o.xp6(2), o.Q6J("mainLabel", t.progress)
                }
            }

            function wo(e, r) {
                1 & e && o.GkF(0)
            }

            function Ro(e, r) {
                if (1 & e && (o.ynx(0), o.YNc(1, wo, 1, 0, "ng-container", 20), o.BQk()), 2 & e) {
                    o.oxw(3);
                    const t = o.MAs(2);
                    o.xp6(1), o.Q6J("ngTemplateOutlet", t)
                }
            }

            function Fo(e, r) {
                if (1 & e && (o.TgZ(0, "div", 17)(1, "p", 18), o._uU(2), o.ALo(3, "flTranslate"), o.TgZ(4, "span"), o._uU(5), o.ALo(6, "flTranslate"), o.qZA()(), o.TgZ(7, "p", 11), o._uU(8), o.ALo(9, "flTranslate"), o.qZA(), o.YNc(10, Ro, 2, 1, "ng-container", 19), o.qZA()), 2 & e) {
                    const t = o.oxw(2).ngrxLet;
                    o.xp6(2), o.hij(" ", o.lcZ(3, 4, "rooms.marketingHeader1"), " "), o.xp6(3), o.hij(" ", o.lcZ(6, 6, "rooms.marketingHeader2"), ""), o.xp6(3), o.hij(" ", o.lcZ(9, 8, "rooms.marketingSubHeader"), " "), o.xp6(2), o.Q6J("ngIf", !(null != t.data && t.data.disabled))
                }
            }

            function Zo(e, r) {
                1 & e && o.GkF(0)
            }

            function ko(e, r) {
                if (1 & e && (o.ynx(0), o.YNc(1, Zo, 1, 0, "ng-container", 20), o.BQk()), 2 & e) {
                    o.oxw(3);
                    const t = o.MAs(2);
                    o.xp6(1), o.Q6J("ngTemplateOutlet", t)
                }
            }

            function Oo(e, r) {
                if (1 & e && (o.TgZ(0, "div", 17)(1, "p", 18), o._uU(2), o.TgZ(3, "span"), o._uU(4), o.qZA()(), o.TgZ(5, "p", 11), o._uU(6), o.qZA(), o.YNc(7, ko, 2, 1, "ng-container", 19), o.qZA()), 2 & e) {
                    const t = o.oxw(2).ngrxLet;
                    o.xp6(2), o.hij(" ", t.header.titleBlack, " "), o.xp6(2), o.hij(" ", t.header.titleColored, ""), o.xp6(2), o.hij(" ", t.header.subTitle, " "), o.xp6(1), o.Q6J("ngIf", !(null != t.data && t.data.disabled))
                }
            }

            function Io(e, r) {
                if (1 & e && (o.TgZ(0, "div", 13), o.YNc(1, Fo, 11, 10, "div", 14), o.YNc(2, Oo, 8, 4, "div", 14), o.TgZ(3, "div", 15), o._UZ(4, "img", 16), o.qZA()()), 2 & e) {
                    const t = o.oxw().ngrxLet;
                    o.xp6(1), o.Q6J("ngIf", !(null != t.header && t.header.customHeaderEnabled)), o.xp6(1), o.Q6J("ngIf", null == t.header ? null : t.header.customHeaderEnabled), o.xp6(2), o.Q6J("src", t.header.imageMobileUrl ? t.header.imageMobileUrl : t.header.imageDesktopUrl, o.LSH)
                }
            }

            function Ao(e, r) {
                1 & e && o.GkF(0)
            }

            function Lo(e, r) {
                if (1 & e && (o.TgZ(0, "div", 13)(1, "div", 21), o.YNc(2, Ao, 1, 0, "ng-container", 20), o.qZA()()), 2 & e) {
                    o.oxw();
                    const t = o.MAs(6);
                    o.xp6(2), o.Q6J("ngTemplateOutlet", t)
                }
            }

            function Po(e, r) {
                1 & e && o.GkF(0)
            }

            function Uo(e, r) {
                1 & e && (o.TgZ(0, "div", 28)(1, "h4", 29), o._uU(2), o.ALo(3, "flTranslate"), o.TgZ(4, "span"), o._uU(5), o.ALo(6, "flTranslate"), o.qZA()(), o.TgZ(7, "p"), o._uU(8), o.ALo(9, "flTranslate"), o.qZA()()), 2 & e && (o.xp6(2), o.hij(" ", o.lcZ(3, 3, "rooms.marketingHeader1"), " "), o.xp6(3), o.hij(" ", o.lcZ(6, 5, "rooms.marketingHeader2"), ""), o.xp6(3), o.hij(" ", o.lcZ(9, 7, "rooms.marketingSubHeader"), " "))
            }

            function Jo(e, r) {
                if (1 & e && (o.TgZ(0, "div", 28)(1, "h4", 29), o._uU(2), o.TgZ(3, "span"), o._uU(4), o.qZA()(), o.TgZ(5, "p"), o._uU(6), o.qZA()()), 2 & e) {
                    const t = o.oxw(2).ngrxLet;
                    o.xp6(2), o.hij(" ", t.header.titleBlack, " "), o.xp6(2), o.hij(" ", t.header.titleColored, ""), o.xp6(2), o.hij(" ", t.header.subTitle, " ")
                }
            }

            function No(e, r) {
                1 & e && o.GkF(0)
            }

            function Bo(e, r) {
                if (1 & e) {
                    const t = o.EpF();
                    o.TgZ(0, "div", 22)(1, "div", 23), o.YNc(2, Po, 1, 0, "ng-container", 20), o.YNc(3, Uo, 10, 9, "div", 24), o.YNc(4, Jo, 7, 3, "div", 24), o.qZA(), o.TgZ(5, "div", 25), o.NdJ("statusChange", function (i) {
                        o.CHM(t);
                        const l = o.oxw(2);
                        return o.KtG(l.fileStatusChange(i))
                    }), o._UZ(6, "input", 26)(7, "CrownCrete-icon", 27), o.TgZ(8, "p", 11), o._uU(9), o.ALo(10, "flTranslate"), o.qZA(), o.YNc(11, No, 1, 0, "ng-container", 20), o.qZA()()
                }
                if (2 & e) {
                    const t = o.oxw().ngrxLet,
                        n = o.MAs(4),
                        i = o.MAs(2),
                        l = o.oxw();
                    o.xp6(2), o.Q6J("ngTemplateOutlet", n), o.xp6(1), o.Q6J("ngIf", !(null != t.header && t.header.customHeaderEnabled)), o.xp6(1), o.Q6J("ngIf", null == t.header ? null : t.header.customHeaderEnabled), o.xp6(2), o.Q6J("accept", l.validFileTypes), o.xp6(3), o.hij(" ", o.lcZ(10, 6, "rooms.photoUpload"), " "), o.xp6(2), o.Q6J("ngTemplateOutlet", i)
                }
            }

            function So(e, r) {
                1 & e && o.GkF(0)
            }

            function Qo(e, r) {
                1 & e && o.GkF(0)
            }

            function Do(e, r) {
                if (1 & e && (o.TgZ(0, "div", 22)(1, "div", 23), o.YNc(2, So, 1, 0, "ng-container", 20), o.qZA(), o.TgZ(3, "div", 30), o.YNc(4, Qo, 1, 0, "ng-container", 20), o.qZA()()), 2 & e) {
                    o.oxw();
                    const t = o.MAs(4),
                        n = o.MAs(6);
                    o.xp6(2), o.Q6J("ngTemplateOutlet", t), o.xp6(2), o.Q6J("ngTemplateOutlet", n)
                }
            }

            function jo(e, r) {
                if (1 & e && (o.ynx(0), o.YNc(1, yo, 5, 5, "ng-template", null, 1, o.W1O), o.YNc(3, To, 2, 1, "ng-template", null, 2, o.W1O), o.YNc(5, Mo, 4, 4, "ng-template", null, 3, o.W1O), o.YNc(7, Io, 5, 3, "div", 4), o.YNc(8, Lo, 3, 1, "div", 4), o.YNc(9, Bo, 12, 8, "div", 5), o.YNc(10, Do, 5, 2, "div", 5), o.BQk()), 2 & e) {
                    const t = r.ngrxLet;
                    o.xp6(7), o.Q6J("ngIf", !t.data.uploading), o.xp6(1), o.Q6J("ngIf", t.data.uploading), o.xp6(1), o.Q6J("ngIf", !t.data.uploading), o.xp6(1), o.Q6J("ngIf", t.data.uploading)
                }
            }
            const Ho = function (e, r, t) {
                return {
                    data: e,
                    progress: r,
                    header: t
                }
            };
            let Eo = (() => {
                class e {
                    constructor() {
                        this.store = (0, o.f3M)(k), this.vm$ = this.store.vm$, this.progress$ = this.store.progress$, this.header$ = this.store.header$, this.validFileTypes = this.store.validFiles
                    }
                    fileStatusChange(t) {
                        t?.type !== x.Oh.drop || !t.file || this.store.uploadImage(t.file)
                    }
                    photoInputUpload(t) {
                        this.store.uploadImage(t.target.files?. [0]), t.target.value = ""
                    }
                }
                return e.\u0275fac = function (t) {
                    return new(t || e)
                }, e.\u0275cmp = o.Xpm({
                    type: e,
                    selectors: [
                        ["CrownCrete-room-upload"]
                    ],
                    hostAttrs: [1, "CrownCrete-room-upload"],
                    standalone: !0,
                    features: [o.jDz],
                    decls: 1,
                    vars: 5,
                    consts: [
                        [4, "ngrxLet"],
                        ["uploadBtn", ""],
                        ["previewFull", ""],
                        ["loader", ""],
                        ["class", "mobile", 4, "ngIf"],
                        ["class", "full", 4, "ngIf"],
                        [1, "CrownCrete-button", "primary", "upload-btn", 3, "disabled"],
                        ["name", "fl_camera_o"],
                        ["type", "file", 1, "CrownCrete-pointer", 3, "accept", "change"],
                        [1, "rooms-upload-full-preview"],
                        ["alt", "full preview", "loading", "lazy", 3, "src"],
                        [1, "CrownCrete-caption", "CrownCrete-semi-regular"],
                        [1, "room-upload-progress", 3, "mainLabel"],
                        [1, "mobile"],
                        ["class", "room-upload-marketing", 4, "ngIf"],
                        [1, "room-upload-preview"],
                        ["alt", "mobile-preview", "loading", "lazy", 3, "src"],
                        [1, "room-upload-marketing"],
                        [1, "CrownCrete-subtitle", "CrownCrete-bold", "rooms-upload-title"],
                        [4, "ngIf"],
                        [4, "ngTemplateOutlet"],
                        [1, "room-uploading-mobile"],
                        [1, "full"],
                        [1, "rooms-marketing-full"],
                        ["class", "marketing-text", 4, "ngIf"],
                        ["CrownCreteFileDrop", "", "overCls", "over", 1, "rooms-upload-drop-zone", 3, "statusChange"],
                        ["CrownCreteFileDropZone", "", "type", "file", 1, "CrownCrete-pointer", 3, "accept"],
                        ["name", "fl_photo_s", 1, "drop-icon"],
                        [1, "marketing-text"],
                        [1, "CrownCrete-semi-bold", "rooms-upload-title"],
                        [1, "room-uploading-full"]
                    ],
                    template: function (t, n) {
                        1 & t && o.YNc(0, jo, 11, 4, "ng-container", 0), 2 & t && o.Q6J("ngrxLet", o.kEZ(1, Ho, n.vm$, n.progress$, n.header$))
                    },
                    dependencies: [c.ez, c.O5, c.tP, Co.au, v.N, b.X, _.K, P.QS, x.GN, x.pb, bo.f, C._N, C.eJ],
                    styles: [".CrownCrete-room-upload{position:relative;display:flex;flex-direction:column;align-items:center;background-color:var(--flg-bg);border-radius:var(--fl-border-radius-md)}.CrownCrete-room-upload .rooms-upload-title{margin-bottom:1.5rem}.CrownCrete-room-upload .rooms-upload-title span{color:var(--fl-primary)}.CrownCrete-room-upload p{margin-bottom:1.5rem}.CrownCrete-room-upload .mobile{display:flex;width:100%;justify-content:space-between;padding:1.125rem 1rem;background-color:var(--fl-bg100);border-radius:var(--fl-border-radius-md)}.CrownCrete-room-upload .mobile .room-upload-marketing{display:flex;flex-direction:column;margin-right:1.875rem;padding-top:.75rem;max-width:50%}.CrownCrete-room-upload .mobile .room-upload-marketing p{margin-bottom:1.5rem}.CrownCrete-room-upload .mobile .room-upload-preview img{width:120px}.CrownCrete-room-upload .mobile .room-uploading-mobile{display:flex;flex-direction:column;width:inherit;align-items:center;padding:2rem 0}@media (min-width: 768px){.CrownCrete-room-upload .mobile{display:none}}.CrownCrete-room-upload .full{display:none;background-color:var(--fl-bg100);border-radius:var(--fl-border-radius-md)}@media (min-width: 768px){.CrownCrete-room-upload .full{display:flex;width:100%;justify-content:space-between;padding:var(--fl-y-padding-md) var(--fl-x-padding-md)}}.CrownCrete-room-upload .full .rooms-marketing-full{display:flex;max-width:70%}.CrownCrete-room-upload .full .marketing-text{margin:0 40px;display:flex;flex-direction:column;justify-content:center}@media (min-width: 768px){.CrownCrete-room-upload .full .rooms-upload-full-preview img{height:198px}}@media (min-width: 1024px){.CrownCrete-room-upload .full .rooms-upload-full-preview img{height:226px}}.CrownCrete-room-upload .full .rooms-upload-drop-zone{border-radius:var(--fl-border-radius);border:1px dashed var(--fl-border-clr);background-color:var(--fl-bg200);width:35%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 10%;position:relative}.CrownCrete-room-upload .full .rooms-upload-drop-zone.over{opacity:.5}.CrownCrete-room-upload .full .rooms-upload-drop-zone p{text-align:center}.CrownCrete-room-upload .full .rooms-upload-drop-zone .drop-icon{color:var(--fl-primary);margin-bottom:24px}.CrownCrete-room-upload .full .rooms-upload-drop-zone .upload-btn{align-self:initial}.CrownCrete-room-upload .full .room-uploading-full{display:flex;flex-direction:column;flex:1 auto;align-items:center;justify-content:center}.CrownCrete-room-upload .upload-btn{position:relative;align-self:baseline}.CrownCrete-room-upload input[type=file]{position:absolute;opacity:0;inset:0}.CrownCrete-room-upload .room-upload-progress{width:100%;max-width:300px}.CrownCrete-room-upload.small .full{align-items:center;padding:var(--fl-y-padding) var(--fl-x-padding)}.CrownCrete-room-upload.small .full .rooms-upload-full-preview,.CrownCrete-room-upload.small .full .drop-icon,.CrownCrete-room-upload.small .full .marketing-text p{display:none}.CrownCrete-room-upload.small .full h4{margin-bottom:0}.CrownCrete-room-upload.small .full .rooms-upload-drop-zone{width:auto;border:none;margin:0;padding:0;background-color:transparent}.CrownCrete-room-upload.small .full .rooms-upload-drop-zone p{display:none}.CrownCrete-room-upload.small .full .rooms-upload-title{font-weight:700;font-size:1rem;line-height:1.25rem}\n"],
                    encapsulation: 2,
                    changeDetection: 0
                }), e
            })();
            var Yo = a(2960);

            function $o(e, r) {
                if (1 & e) {
                    const t = o.EpF();
                    o.ynx(0), o.TgZ(1, "div", 3), o.NdJ("click", function () {
                        const l = o.CHM(t).$implicit,
                            s = o.oxw(2);
                        return o.KtG(s.selectRoom(l))
                    }), o.TgZ(2, "div", 4)(3, "p", 5), o._uU(4), o.ALo(5, "flTranslate"), o.qZA(), o._UZ(6, "CrownCrete-icon", 6), o.qZA(), o._UZ(7, "div", 7), o.ALo(8, "resolveImg"), o.qZA(), o.BQk()
                }
                if (2 & e) {
                    const t = r.$implicit,
                        n = r.index,
                        i = o.oxw().index,
                        l = o.oxw();
                    o.xp6(1), o.Q6J("ngStyle", l.getRoomsItemHeight(n * l.columnsNumber + i)), o.xp6(3), o.Oqu(o.lcZ(5, 5, "ichoose")), o.xp6(3), o.Udp("background-image", "url(" + o.lcZ(8, 7, t.image) + ")"), o.Q6J("CrownCreteSkeletonLoader", l.loading)
                }
            }

            function zo(e, r) {
                if (1 & e && (o.ynx(0), o.TgZ(1, "div", 1), o.YNc(2, $o, 9, 9, "ng-container", 2), o.qZA(), o.BQk()), 2 & e) {
                    const t = r.index,
                        n = o.oxw();
                    o.xp6(2), o.Q6J("ngForOf", n.getRooms(t))("ngForTrackBy", n.trackBy)
                }
            }
            let Go = (() => {
                class e {
                    constructor() {
                        this.cdr = (0, o.f3M)(o.sBO), this.defaultColumnsNumber = 6, this.roomSelected = new o.vpe, this.loading = !1
                    }
                    set rooms(t) {
                        this._rooms = t, this.cdr.markForCheck()
                    }
                    set roomsItemHeights(t) {
                        this._roomsItemHeights = t, this.cdr.markForCheck()
                    }
                    set columnsNumber(t) {
                        this._columnsNumber = t, this._columnsIteration = this.getSequence(t), this.cdr.markForCheck()
                    }
                    get rooms() {
                        return this._rooms || []
                    }
                    get columnsNumber() {
                        return this._columnsNumber || this.defaultColumnsNumber
                    }
                    get columnsIteration() {
                        return this._columnsIteration || this.getSequence(this.columnsNumber)
                    }
                    trackBy(t, n) {
                        return n.id
                    }
                    getRooms(t) {
                        return this._rooms?.filter((n, i) => i % this.columnsNumber === t) || []
                    }
                    getRoomsItemHeight(t) {
                        return this._roomsItemHeights?. [t] || {
                            height: "234px",
                            "line-height": "234px"
                        }
                    }
                    selectRoom(t) {
                        t && this.roomSelected.emit(t)
                    }
                    getSequence(t) {
                        return Array.from({
                            length: t
                        }, (n, i) => i)
                    }
                }
                return e.\u0275fac = function (t) {
                    return new(t || e)
                }, e.\u0275cmp = o.Xpm({
                    type: e,
                    selectors: [
                        ["CrownCrete-rooms-mosaic"]
                    ],
                    hostAttrs: [1, "CrownCrete-rooms-mosaic"],
                    inputs: {
                        loading: "loading",
                        rooms: "rooms",
                        roomsItemHeights: "roomsItemHeights",
                        columnsNumber: "columnsNumber"
                    },
                    outputs: {
                        roomSelected: "roomSelected"
                    },
                    standalone: !0,
                    features: [o.jDz],
                    decls: 1,
                    vars: 1,
                    consts: [
                        [4, "ngFor", "ngForOf"],
                        [1, "room-items-column"],
                        [4, "ngFor", "ngForOf", "ngForTrackBy"],
                        [1, "room-item-wrapper", 3, "ngStyle", "click"],
                        [1, "room-item-overlay"],
                        [1, "fl-mr-4"],
                        ["name", "fl_arrow_left_long_o"],
                        [1, "room-item", 3, "CrownCreteSkeletonLoader"]
                    ],
                    template: function (t, n) {
                        1 & t && o.YNc(0, zo, 3, 2, "ng-container", 0), 2 & t && o.Q6J("ngForOf", n.columnsIteration)
                    },
                    dependencies: [c.ez, c.sg, c.PC, Yo.xj, x.TJ, v.N, b.X, _.K],
                    styles: [".CrownCrete-rooms-mosaic{display:flex;flex-direction:row}.CrownCrete-rooms-mosaic .room-items-column{display:flex;flex-direction:column;flex:1;margin-right:1rem}.CrownCrete-rooms-mosaic .room-items-column:last-child{margin-right:0}.CrownCrete-rooms-mosaic .room-item-wrapper{cursor:pointer;margin:0 0 1rem;display:inline-block;width:100%;border-radius:var(--fl-border-radius);overflow:hidden;position:relative;z-index:3}.CrownCrete-rooms-mosaic .room-item-wrapper .room-item-overlay{display:none;position:absolute;inset:0;background-color:var(--fl-overlay);z-index:1}.CrownCrete-rooms-mosaic .room-item-wrapper .room-item-overlay p,.CrownCrete-rooms-mosaic .room-item-wrapper .room-item-overlay CrownCrete-icon{color:var(--fl-bg)}@media (hover: hover) and (pointer: fine){.CrownCrete-rooms-mosaic .room-item-wrapper:hover .room-item-overlay{display:flex;justify-content:center;align-items:center}.CrownCrete-rooms-mosaic .room-item-wrapper:hover .room-item{transform:scale(1.15);-webkit-transform:translateZ(0) scale(1.15);transition:all .2s ease-in-out}}.CrownCrete-rooms-mosaic .room-item{cursor:pointer;margin:0 0 1rem;display:inline-block;width:100%;height:100%;background-position:center;background-repeat:no-repeat;background-size:cover;border-radius:inherit}\n"],
                    encapsulation: 2,
                    changeDetection: 0
                }), e
            })();
            var j = a(9403),
                Vo = a(2996),
                y = a(2508),
                w = a(7258);

            function Ko(e, r) {
                if (1 & e) {
                    const t = o.EpF();
                    o.TgZ(0, "CrownCrete-checkbox", 5), o.NdJ("ngModelChange", function (i) {
                        const s = o.CHM(t).$implicit,
                            d = o.oxw();
                        return o.KtG(d.selectionMap[s.value] = i)
                    }), o.TgZ(1, "span"), o._uU(2), o.qZA()()
                }
                if (2 & e) {
                    const t = r.$implicit,
                        n = o.oxw();
                    o.Q6J("ngModel", n.selectionMap[t.value]), o.xp6(2), o.Oqu(t.label)
                }
            }
            let qo = (() => {
                class e {
                    constructor(t, n) {
                        this.dialogRef = t, this.data = n, this.selectionMap = {}, this.items = n?.items || [], this.parseSelection()
                    }
                    trackBy(t, n) {
                        return n.value
                    }
                    confirm() {
                        const t = Object.keys(this.selectionMap).filter(n => this.selectionMap[n]);
                        this.dialogRef.close(t)
                    }
                    parseSelection() {
                        !this.data.selection || this.data.selection.forEach(t => this.selectionMap[t] = !0)
                    }
                }
                return e.\u0275fac = function (t) {
                    return new(t || e)(o.Y36(R.JH), o.Y36(f.wM))
                }, e.\u0275cmp = o.Xpm({
                    type: e,
                    selectors: [
                        ["CrownCrete-rooms-filters-dialog"]
                    ],
                    standalone: !0,
                    features: [o.jDz],
                    decls: 9,
                    vars: 8,
                    consts: [
                        ["CrownCrete-dialog-header", ""],
                        ["CrownCrete-dialog-content", ""],
                        [3, "ngModel", "ngModelChange", 4, "ngFor", "ngForOf", "ngForTrackBy"],
                        ["CrownCrete-dialog-actions", ""],
                        [1, "CrownCrete-button", "primary", "big", 3, "click"],
                        [3, "ngModel", "ngModelChange"]
                    ],
                    template: function (t, n) {
                        1 & t && (o.TgZ(0, "div", 0), o._uU(1), o.ALo(2, "flTranslate"), o.qZA(), o.TgZ(3, "section", 1), o.YNc(4, Ko, 3, 2, "CrownCrete-checkbox", 2), o.qZA(), o.TgZ(5, "div", 3)(6, "button", 4), o.NdJ("click", function () {
                            return n.confirm()
                        }), o._uU(7), o.ALo(8, "flTranslate"), o.qZA()()), 2 & t && (o.xp6(1), o.hij(" ", o.lcZ(2, 4, "rooms.filter.selectRoom"), "\n"), o.xp6(3), o.Q6J("ngForOf", n.items)("ngForTrackBy", n.trackBy), o.xp6(3), o.hij(" ", o.lcZ(8, 6, "rooms.filter.save"), " "))
                    },
                    dependencies: [c.ez, c.sg, v.N, b.X, j.A, R.wC, w.VA, w.hE, Vo.i, y.u5, y.JJ, y.On],
                    styles: ["[_nghost-%COMP%]{background-color:var(--fl-bg);height:100%;display:flex;flex-direction:column}@media (min-width: 768px){[_nghost-%COMP%]{display:none}}[_nghost-%COMP%]   .CrownCrete-dialog-content[_ngcontent-%COMP%]{padding-top:var(--fl-x-padding-md);padding-bottom:var(--fl-x-padding-md)}[_nghost-%COMP%]   .CrownCrete-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .CrownCrete-checkbox[_ngcontent-%COMP%]{background-color:transparent;margin:0;padding:0 0 .75rem}"],
                    changeDetection: 0
                }), e
            })();
            var N = a(116),
                Xo = a(6562),
                O = a(8977),
                Wo = a(6646),
                ot = a(9904),
                tt = a(1062),
                et = a(1945);

            function nt(e, r) {
                if (1 & e && (o.TgZ(0, "CrownCrete-radio", 7), o._UZ(1, "img", 8), o.TgZ(2, "span"), o._uU(3), o.ALo(4, "flTranslate"), o.qZA()()), 2 & e) {
                    const t = r.$implicit;
                    o.Q6J("value", t.code), o.xp6(1), o.Q6J("src", t.flag, o.LSH)("alt", t.code), o.xp6(2), o.Oqu(o.lcZ(4, 4, t.language) || t.code)
                }
            }

            function it(e, r) {
                if (1 & e) {
                    const t = o.EpF();
                    o.TgZ(0, "div", 5), o.NdJ("ngModelChange", function (i) {
                        o.CHM(t);
                        const l = o.oxw();
                        return o.KtG(l.currentLang = i)
                    }), o.YNc(1, nt, 5, 6, "CrownCrete-radio", 6), o.qZA()
                }
                if (2 & e) {
                    const t = o.oxw();
                    o.Q6J("ngModel", t.currentLang), o.xp6(1), o.Q6J("ngForOf", t.langs)("ngForTrackBy", t.trackByLangCode)
                }
            }
            let rt = (() => {
                class e {
                    constructor(t) {
                        this.langs = [], this.trackByLangCode = (n, i) => i.code, this.langs = [...t?.langs], this.currentLang = t?.currentLang?.code
                    }
                }
                return e.\u0275fac = function (t) {
                    return new(t || e)(o.Y36(f.wM))
                }, e.\u0275cmp = o.Xpm({
                    type: e,
                    selectors: [
                        ["CrownCrete-lang-dialog"]
                    ],
                    hostAttrs: [1, "CrownCrete-lang-dialog"],
                    standalone: !0,
                    features: [o.jDz],
                    decls: 9,
                    vars: 8,
                    consts: [
                        ["CrownCrete-dialog-header", ""],
                        ["CrownCrete-dialog-content", ""],
                        ["CrownCrete-radio-group", "", 3, "ngModel", "ngModelChange", 4, "ngIf"],
                        ["CrownCrete-dialog-actions", ""],
                        [1, "CrownCrete-button", "primary", "big", "CrownCrete-w100prc", 3, "CrownCrete-dialog-close"],
                        ["CrownCrete-radio-group", "", 3, "ngModel", "ngModelChange"],
                        [3, "value", 4, "ngFor", "ngForOf", "ngForTrackBy"],
                        [3, "value"],
                        ["loading", "lazy", 1, "fl-mr-12", 3, "src", "alt"]
                    ],
                    template: function (t, n) {
                        1 & t && (o.TgZ(0, "div", 0), o._uU(1), o.ALo(2, "flTranslate"), o.qZA(), o.TgZ(3, "section", 1), o.YNc(4, it, 2, 3, "div", 2), o.qZA(), o.TgZ(5, "div", 3)(6, "button", 4), o._uU(7), o.ALo(8, "flTranslate"), o.qZA()()), 2 & t && (o.xp6(1), o.hij(" ", o.lcZ(2, 4, "changeLanguage"), "\n"), o.xp6(3), o.Q6J("ngIf", null == n.langs ? null : n.langs.length), o.xp6(2), o.Q6J("CrownCrete-dialog-close", n.currentLang), o.xp6(1), o.hij(" ", o.lcZ(8, 6, "chooseLanguage"), " "))
                    },
                    dependencies: [c.ez, c.sg, c.O5, j.A, v.N, b.X, R.wC, w.VA, w.BK, w.hE, ot.Iu, tt.B, et.z, y.u5, y.JJ, y.On],
                    styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1;height:100%;background-color:var(--fl-bg);border-radius:var(--fl-border-radius)}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{width:2rem;height:1.5rem;border-radius:var(--fl-border-radius)}@media (min-width: 768px){[_nghost-%COMP%]   section[_ngcontent-%COMP%]{min-width:440px;max-width:65vw}}"],
                    changeDetection: 0
                }), e
            })();
            var H = a(5596);
            let E = (() => {
                class e extends L.m1 {
                    constructor() {
                        super({
                            loading: !0,
                            langs: Object.values(m.AM),
                            filtersSelection: []
                        }), this.configProvider = (0, o.f3M)(f.FI), this.navigationProvider = (0, o.f3M)(f.YD), this.roomsProvider = (0, o.f3M)(f.XZ), this.translationsProvider = (0, o.f3M)(m.pp), this.injector = (0, o.f3M)(o.lqb), this.device = (0, o.f3M)(P.U8), this.dialog = (0, o.f3M)(f._R), this.tracking = (0, o.f3M)(m.Hj), this.uploadStore = (0, o.f3M)(k), this.windowRef = (0, o.f3M)(m.Kz), this.rooms$ = this.select(t => ({
                            rooms: t.rooms,
                            filters: t.filters,
                            showFilters: (t.filters?.length || 0) > 1,
                            columns: t.columns
                        })), this.vm$ = this.select(t => ({
                            lang: t.currentLang,
                            logo: t.logo,
                            loading: t.loading,
                            uploadVisible: !!t.uploadVisible,
                            filtersSelection: t.filtersSelection,
                            vendorUrl: t.vendorUrl || "",
                            ctaButton: t.ctaButton,
                            hideHeader: t.hideHeader
                        })), this.showLangs$ = this.select(t => (t.langs?.length || 0) > 1), this.filterRooms$ = this.effect(t => t.pipe((0, u.b)(n => {
                            const i = n || [],
                                l = this.get().roomsMap || {};
                            if (!n?.length) return void this.patchState({
                                filtersSelection: [],
                                rooms: Object.values(l) || []
                            });
                            const s = Object.values(l || {}).filter(d => i.includes(d.category));
                            this.patchState({
                                rooms: s,
                                filtersSelection: n
                            })
                        }))), this.uploadVisibilityChange = this.updater((t, n) => ({
                            ...t,
                            uploadVisible: n
                        })), this.connectToStore(), this.connectToUploadStore(), this.loadRooms(), this.watchResize(), this.checkFeatures()
                    }
                    set containerElRef(t) {
                        t && this.patchState({
                            containerElRef: t
                        })
                    }
                    ctaAction(t) {
                        t?.url && this.navigationProvider.goToUrl(t.url)
                    }
                    goToRoom(t) {
                        if (t && !this.uploadStore.uploading) {
                            const {
                                rooms: n
                            } = this.get(), i = n?.find(l => l.id === t);
                            this.navigationProvider.goToRoom({
                                uid: t
                            }), this.tracking.track(f.y8.roomSelected, {
                                room_name: i?.name || "other"
                            })
                        }
                    }
                    openRoomFilters() {
                        const {
                            filters: t,
                            filtersSelection: n
                        } = this.get();
                        this.dialog.open(qo, {
                            panelClass: m.bj.centerOverlay,
                            containerClass: m.bj.stretchWrapper,
                            data: {
                                items: t || [],
                                selection: n
                            }
                        }).beforeClosed().pipe((0, N.h)(i => !!i), (0, u.b)(i => {
                            this.filterRooms$(i || [])
                        })).subscribe()
                    }
                    openLangSelect() {
                        const {
                            currentLang: t,
                            langs: n
                        } = this.get();
                        this.dialog.open(rt, {
                            backdropClass: m.bj.darkOverlay,
                            panelClass: m.bj.centerOverlay,
                            containerClass: m.bj.stretchWrapper,
                            data: {
                                langs: n || [],
                                currentLang: t || m.AM.en
                            }
                        }).beforeClosed().pipe((0, N.h)(i => !!i), (0, u.b)(i => this.configProvider.changeLang(i || D.lI.en))).subscribe()
                    }
                    loadRooms() {
                        this.roomsProvider.setEstimation(void 0), this.connectToRooms(), this.roomsProvider.loadRooms(), this.calculateColumnsNumber()
                    }
                    openVendorUrl() {
                        const t = this.get().vendorUrl;
                        !t || this.navigationProvider.goToUrl(t)
                    }
                    connectToRooms() {
                        (0, Xo.a)([this.roomsProvider.loadingRooms$.pipe((0, O.x)()), this.roomsProvider.rooms$]).pipe((0, O.x)(([t], [n]) => t === n), (0, F.w)(([t, n]) => {
                            const {
                                cacheUploadedRooms: i
                            } = this.get();
                            let l = t ? [] : [...n.baseRooms];
                            i || (l = l.filter(p => !p.items.visitorRoom));
                            const s = {};
                            l.forEach(p => {
                                s[p.key] = p.items
                            });
                            const [d, g] = this.parseRooms(l);
                            return this.patchState({
                                roomsMap: s,
                                loading: t,
                                rooms: t ? new Array(20).fill({}) : d,
                                filters: t ? new Array(10).fill({}) : g
                            }), this.translationsProvider.langChange$
                        }), (0, O.x)(), (0, u.b)(() => {
                            const {
                                filters: t
                            } = this.get();
                            this.patchState({
                                filters: t?.filter(n => n?.value).map(n => ({
                                    ...n,
                                    label: this.translationsProvider.translate(`room.filter.label_room_types.${n.value}`)
                                }))
                            })
                        })).subscribe()
                    }
                    connectToStore() {
                        this.configProvider.companyConfig$.pipe((0, Z.R)(this.destroy$), (0, u.b)(t => {
                            this.patchState({
                                logo: t.logoUrl,
                                langs: Object.values(m.AM).filter(n => t.langs?.includes(n.code)),
                                currentLang: m.AM[t?.currentLang || D.lI.en],
                                vendorUrl: t.company?.vendorUrl,
                                ctaButton: t.company?.dynamicFeatures?.roomsCtaButton,
                                hideHeader: t.company?.hideHeader,
                                cacheUploadedRooms: !!t.company?.cacheUploadedRooms
                            })
                        })).subscribe()
                    }
                    parseRooms(t) {
                        const n = {};
                        return [t?.map(l => {
                            const s = l?.items?.category;
                            return n[s] || (n[s] = {
                                key: l.key,
                                value: s,
                                label: this.translationsProvider.translate(`room.filter.label_room_types.${s||"other"}`)
                            }), l.items
                        }).sort((l, s) => Number(!!s?.visitorRoom) - Number(!!l?.visitorRoom)), Object.values(n)]
                    }
                    connectToUploadStore() {
                        this.uploadStore.select(t => t.uploading).pipe((0, Z.R)(this.destroy$), (0, O.x)(), (0, N.h)(t => t && this.device.isMobileSize), (0, u.b)(() => {
                            const {
                                containerElRef: t
                            } = this.get();
                            t && (t.nativeElement.scrollTop = 0)
                        })).subscribe()
                    }
                    checkFeatures() {
                        this.injector.runInContext(() => {
                            (0, H.H)("roomsMessage", f.dR.roomsFeatureInfo).pipe((0, Z.R)(this.destroy$)).subscribe()
                        })
                    }
                    watchResize() {
                        (0, Wo.T)((0, A.R)(this.windowRef, "resize"), (0, A.R)(this.windowRef, "orientationchange")).pipe((0, Q.b)(5)).subscribe(() => {
                            this.calculateColumnsNumber()
                        })
                    }
                    calculateColumnsNumber() {
                        const t = this.device.viewport?.width;
                        this.patchState((t || 0) >= m.Ff.screenBreakpoints.desktopRaw ? {
                            columns: 6
                        } : (t || 0) >= m.Ff.screenBreakpoints.tabletRaw ? {
                            columns: 4
                        } : {
                            columns: 2
                        })
                    }
                }
                return e.\u0275fac = function (t) {
                    return new(t || e)
                }, e.\u0275prov = o.Yz7({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();

            function lt(e, r) {
                1 & e && o._UZ(0, "CrownCrete-icon", 4)
            }

            function at(e, r) {
                if (1 & e) {
                    const t = o.EpF();
                    o.TgZ(0, "div", 1), o.NdJ("click", function () {
                        const l = o.CHM(t).$implicit,
                            s = o.oxw();
                        return o.KtG(s.onChipClick(l))
                    }), o.TgZ(1, "p", 2), o._uU(2), o.qZA(), o.YNc(3, lt, 1, 0, "CrownCrete-icon", 3), o.qZA()
                }
                if (2 & e) {
                    const t = r.$implicit,
                        n = o.oxw();
                    o.ekj("selected", n.selectedMap[t.value]), o.Q6J("CrownCreteSkeletonLoader", n.loading), o.xp6(2), o.Oqu(t.label), o.xp6(1), o.Q6J("ngIf", n.showClear)
                }
            }
            let st = (() => {
                class e {
                    constructor() {
                        this.loading = !1, this.multi = !1, this.showClear = !1, this.selectionChanged = new o.vpe, this.cdr = (0, o.f3M)(o.sBO), this._items = [], this._selected = {}
                    }
                    set items(t) {
                        this._items = [...t], this.cdr.markForCheck()
                    }
                    get items() {
                        return this._items
                    }
                    set selected(t) {
                        t?.forEach(n => this._selected[n] = n), this.cdr.markForCheck()
                    }
                    get selectedMap() {
                        return this._selected
                    }
                    trackBy(t, n) {
                        return n.key
                    }
                    onChipClick(t) {
                        this.multi ? this.selectedMap[t.value] = this.selectedMap[t.value] ? "" : t.value : this._selected = {
                            [t.value]: this.selectedMap[t.value] ? "" : t.value
                        };
                        const n = Object.keys(this.selectedMap).filter(i => !!this.selectedMap[i]);
                        this.selectionChanged.emit(n)
                    }
                }
                return e.\u0275fac = function (t) {
                    return new(t || e)
                }, e.\u0275cmp = o.Xpm({
                    type: e,
                    selectors: [
                        ["CrownCrete-chips"]
                    ],
                    hostAttrs: [1, "CrownCrete-chips"],
                    inputs: {
                        loading: "loading",
                        multi: "multi",
                        showClear: "showClear",
                        items: "items",
                        selected: "selected"
                    },
                    outputs: {
                        selectionChanged: "selectionChanged"
                    },
                    standalone: !0,
                    features: [o.jDz],
                    decls: 1,
                    vars: 2,
                    consts: [
                        ["class", "CrownCrete-chip CrownCrete-d-inline-flex CrownCrete-align-items-center CrownCrete-pointer", 3, "selected", "CrownCreteSkeletonLoader", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"],
                        [1, "CrownCrete-chip", "CrownCrete-d-inline-flex", "CrownCrete-align-items-center", "CrownCrete-pointer", 3, "CrownCreteSkeletonLoader", "click"],
                        [1, "CrownCrete-caption", "CrownCrete-semi-regular", "CrownCrete-pointer"],
                        ["name", "fl_close", 4, "ngIf"],
                        ["name", "fl_close"]
                    ],
                    template: function (t, n) {
                        1 & t && o.YNc(0, at, 4, 5, "div", 0), 2 & t && o.Q6J("ngForOf", n.items)("ngForTrackBy", n.trackBy)
                    },
                    dependencies: [c.ez, c.sg, c.O5, _.K, x.TJ],
                    encapsulation: 2,
                    changeDetection: 0
                }), e
            })();

            function ct(e, r) {
                1 & e && (o.ynx(0), o._uU(1), o.ALo(2, "flTranslate"), o.BQk()), 2 & e && (o.xp6(1), o.hij(" ", o.lcZ(2, 1, "filter"), ""))
            }
            const mt = function (e) {
                return {
                    count: e
                }
            };

            function dt(e, r) {
                if (1 & e && (o.ynx(0), o._uU(1), o.ALo(2, "flTranslate"), o.BQk()), 2 & e) {
                    const t = o.oxw();
                    o.xp6(1), o.hij(" ", o.xi3(2, 1, "filters", o.VKq(4, mt, t.selection.length)), "")
                }
            }
            const pt = function () {
                return []
            };
            let gt = (() => {
                class e {
                    constructor() {
                        this.loading = !1, this.selection = [], this.selectionChanged = new o.vpe, this.filterDialogClick = new o.vpe
                    }
                    openDialog() {
                        this.filterDialogClick.emit()
                    }
                }
                return e.\u0275fac = function (t) {
                    return new(t || e)
                }, e.\u0275cmp = o.Xpm({
                    type: e,
                    selectors: [
                        ["CrownCrete-rooms-filters"]
                    ],
                    hostAttrs: [1, "CrownCrete-room-filters"],
                    inputs: {
                        loading: "loading",
                        selection: "selection",
                        items: "items"
                    },
                    outputs: {
                        selectionChanged: "selectionChanged",
                        filterDialogClick: "filterDialogClick"
                    },
                    standalone: !0,
                    features: [o.jDz],
                    decls: 13,
                    vars: 13,
                    consts: [
                        [1, "room-filters-text"],
                        [1, "CrownCrete-bold", "fl-mb-4"],
                        [1, "CrownCrete-caption", "CrownCrete-semi-regular"],
                        [1, "room-filters-container"],
                        ["CrownCrete-button", "", 1, "outline", "reverse", 3, "click"],
                        ["name", "fl_search_o"],
                        [4, "ngIf"],
                        [3, "loading", "items", "selected", "multi", "selectionChanged"]
                    ],
                    template: function (t, n) {
                        1 & t && (o.TgZ(0, "div", 0)(1, "p", 1), o._uU(2), o.ALo(3, "flTranslate"), o.qZA(), o.TgZ(4, "p", 2), o._uU(5), o.ALo(6, "flTranslate"), o.qZA()(), o.TgZ(7, "div", 3)(8, "button", 4), o.NdJ("click", function () {
                            return n.openDialog()
                        }), o._UZ(9, "CrownCrete-icon", 5), o.YNc(10, ct, 3, 3, "ng-container", 6), o.YNc(11, dt, 3, 6, "ng-container", 6), o.qZA(), o.TgZ(12, "CrownCrete-chips", 7), o.NdJ("selectionChanged", function (l) {
                            return n.selectionChanged.emit(l)
                        }), o.qZA()()), 2 & t && (o.xp6(2), o.Oqu(o.lcZ(3, 8, "rooms.noPhoto")), o.xp6(3), o.Oqu(o.lcZ(6, 10, "rooms.selectScene")), o.xp6(5), o.Q6J("ngIf", !n.selection.length), o.xp6(1), o.Q6J("ngIf", !!n.selection.length), o.xp6(1), o.Q6J("loading", !!n.loading)("items", n.items || o.DdM(12, pt))("selected", n.selection)("multi", !0))
                    },
                    dependencies: [c.ez, c.O5, I.c, _.K, st, v.N, b.X],
                    styles: [".CrownCrete-room-filters{display:flex;justify-content:space-between}@media (min-width: 768px){.CrownCrete-room-filters .room-filters-text{text-align:center}}.CrownCrete-room-filters .room-filters-container .CrownCrete-button{width:164px;position:relative}@media (max-width: 767px){.CrownCrete-room-filters CrownCrete-chips{display:none}}@media (min-width: 768px){.CrownCrete-room-filters{flex-direction:column}.CrownCrete-room-filters .room-filters-container{margin-top:16px}.CrownCrete-room-filters .room-filters-container .CrownCrete-button{display:none}}\n"],
                    encapsulation: 2,
                    changeDetection: 0
                }), e
            })();
            const ft = ["roomsContainer"];

            function ut(e, r) {
                if (1 & e && o._UZ(0, "CrownCrete-icon", 26), 2 & e) {
                    const t = o.oxw(3).ngrxLet;
                    o.Q6J("name", t.data.ctaButton.icon)
                }
            }

            function ht(e, r) {
                if (1 & e && (o.ynx(0), o._uU(1), o.ALo(2, "flTranslate"), o.BQk()), 2 & e) {
                    const t = o.oxw(3).ngrxLet;
                    o.xp6(1), o.hij(" ", o.lcZ(2, 1, t.data.ctaButton.label), " ")
                }
            }

            function _t(e, r) {
                if (1 & e) {
                    const t = o.EpF();
                    o.TgZ(0, "div", 22)(1, "button", 23), o.NdJ("click", function () {
                        o.CHM(t);
                        const i = o.oxw(2).ngrxLet,
                            l = o.oxw();
                        return o.KtG(l.ctaAction(i.data.ctaButton))
                    }), o.YNc(2, ut, 1, 1, "CrownCrete-icon", 24), o.YNc(3, ht, 3, 3, "ng-container", 25), o.qZA()()
                }
                if (2 & e) {
                    const t = o.oxw(2).ngrxLet;
                    o.xp6(2), o.Q6J("ngIf", null == t.data || null == t.data.ctaButton ? null : t.data.ctaButton.icon), o.xp6(1), o.Q6J("ngIf", null == t.data.ctaButton ? null : t.data.ctaButton.label)
                }
            }

            function xt(e, r) {
                if (1 & e) {
                    const t = o.EpF();
                    o.TgZ(0, "button", 27), o.NdJ("click", function () {
                        o.CHM(t);
                        const i = o.oxw(3);
                        return o.KtG(i.openLangSelect())
                    }), o._UZ(1, "img", 28), o._uU(2), o.ALo(3, "flTranslate"), o.qZA()
                }
                if (2 & e) {
                    const t = o.oxw(2).ngrxLet;
                    o.xp6(1), o.Q6J("src", null == t.data.lang ? null : t.data.lang.flag, o.LSH)("alt", null == t.data.lang ? null : t.data.lang.code), o.xp6(1), o.hij(" ", o.lcZ(3, 3, null == t.data.lang ? null : t.data.lang.language), " ")
                }
            }

            function vt(e, r) {
                if (1 & e && o._UZ(0, "CrownCrete-icon", 26), 2 & e) {
                    const t = o.oxw(3).ngrxLet;
                    o.Q6J("name", t.data.ctaButton.icon)
                }
            }

            function Ct(e, r) {
                if (1 & e && (o.ynx(0), o._uU(1), o.ALo(2, "flTranslate"), o.BQk()), 2 & e) {
                    const t = o.oxw(3).ngrxLet;
                    o.xp6(1), o.hij(" ", o.lcZ(2, 1, t.data.ctaButton.label), " ")
                }
            }

            function bt(e, r) {
                if (1 & e) {
                    const t = o.EpF();
                    o.TgZ(0, "div", 29)(1, "button", 30), o.NdJ("click", function () {
                        o.CHM(t);
                        const i = o.oxw(2).ngrxLet,
                            l = o.oxw();
                        return o.KtG(l.ctaAction(i.data.ctaButton))
                    }), o.YNc(2, vt, 1, 1, "CrownCrete-icon", 24), o.YNc(3, Ct, 3, 3, "ng-container", 25), o.qZA()()
                }
                if (2 & e) {
                    const t = o.oxw(2).ngrxLet;
                    o.xp6(2), o.Q6J("ngIf", null == t.data || null == t.data.ctaButton ? null : t.data.ctaButton.icon), o.xp6(1), o.Q6J("ngIf", null == t.data.ctaButton ? null : t.data.ctaButton.label)
                }
            }

            function yt(e, r) {
                if (1 & e) {
                    const t = o.EpF();
                    o.TgZ(0, "nav")(1, "div", 11)(2, "div", 12)(3, "div", 13)(4, "img", 14), o.NdJ("click", function () {
                        o.CHM(t);
                        const i = o.oxw(2);
                        return o.KtG(i.openVendorUrl())
                    }), o.qZA()(), o.TgZ(5, "div", 15), o.YNc(6, _t, 4, 2, "div", 16), o.TgZ(7, "div", 17), o.YNc(8, xt, 4, 5, "button", 18), o.qZA()()(), o.YNc(9, bt, 4, 2, "div", 19), o.TgZ(10, "div", 20), o._UZ(11, "CrownCrete-room-upload", 21), o.qZA()()()
                }
                if (2 & e) {
                    const t = o.oxw().ngrxLet,
                        n = o.oxw();
                    o.ekj("cta", t.data.ctaButton), o.xp6(4), o.ekj("CrownCrete-pointer", !!t.data.vendorUrl), o.Q6J("src", t.data.logo || n.CrownCreteLogo, o.LSH), o.xp6(2), o.Q6J("ngIf", null == t.data || null == t.data.ctaButton ? null : t.data.ctaButton.visible), o.xp6(2), o.Q6J("ngIf", t.showLangs), o.xp6(1), o.Q6J("ngIf", null == t.data || null == t.data.ctaButton ? null : t.data.ctaButton.visible), o.xp6(1), o.ekj("floating", !t.data.uploadVisible)
                }
            }

            function Tt(e, r) {
                if (1 & e) {
                    const t = o.EpF();
                    o.TgZ(0, "div", 31)(1, "CrownCrete-rooms-filters", 32), o.NdJ("filterDialogClick", function () {
                        o.CHM(t);
                        const i = o.oxw(2);
                        return o.KtG(i.openFiltersDialog())
                    })("selectionChanged", function (i) {
                        o.CHM(t);
                        const l = o.oxw(2);
                        return o.KtG(l.filterRooms(i))
                    }), o.qZA()()
                }
                if (2 & e) {
                    const t = o.oxw().ngrxLet;
                    o.ekj("floating", !t.data.uploadVisible), o.xp6(1), o.Q6J("loading", !!t.data.loading)("items", t.roomsVm.filters)("selection", t.data.filtersSelection)
                }
            }
            const Mt = function () {
                return []
            };

            function wt(e, r) {
                if (1 & e) {
                    const t = o.EpF();
                    o.ynx(0), o.YNc(1, yt, 12, 10, "nav", 1), o.TgZ(2, "section", 2, 3)(4, "CrownCrete-room-upload", 4), o.NdJ("visible", function (i) {
                        o.CHM(t);
                        const l = o.oxw();
                        return o.KtG(l.uploadVisibilityChange(i))
                    }), o.qZA(), o.TgZ(5, "CrownCrete-floating-actions-rooms", 5), o.NdJ("openFiltersDialog", function () {
                        o.CHM(t);
                        const i = o.oxw();
                        return o.KtG(i.openFiltersDialog())
                    }), o.qZA(), o.TgZ(6, "div", 6), o.YNc(7, Tt, 2, 5, "div", 7), o.TgZ(8, "div", 8)(9, "div", 9)(10, "CrownCrete-rooms-mosaic", 10), o.NdJ("roomSelected", function (i) {
                        o.CHM(t);
                        const l = o.oxw();
                        return o.KtG(l.selectRoom(i))
                    }), o.qZA()()()()(), o.BQk()
                }
                if (2 & e) {
                    const t = r.ngrxLet,
                        n = o.oxw();
                    o.xp6(1), o.Q6J("ngIf", !(null != t.data && t.data.hideHeader)), o.xp6(1), o.ekj("spacer", !t.data.uploadVisible), o.xp6(2), o.Q6J("CrownCreteSkeletonLoader", !!t.data.loading), o.xp6(1), o.ekj("visible", !t.data.uploadVisible), o.Q6J("showFilters", t.roomsVm.showFilters), o.xp6(1), o.ekj("focused", !t.data.uploadVisible), o.xp6(1), o.Q6J("ngIf", t.roomsVm.showFilters), o.xp6(3), o.Q6J("loading", !!t.data.loading)("rooms", t.roomsVm.rooms || o.DdM(14, Mt))("roomsItemHeights", n.roomsItemHeights)("columnsNumber", t.roomsVm.columns || 6)
                }
            }
            const Rt = function (e, r, t) {
                return {
                    data: e,
                    roomsVm: r,
                    showLangs: t
                }
            };
            let Ft = (() => {
                class e {
                    constructor() {
                        this.store = (0, o.f3M)(E), this.vm$ = this.store.vm$, this.showLangs$ = this.store.showLangs$, this.rooms$ = this.store.rooms$, this.CrownCreteLogo = m.Ff.CrownCreteLogo, this.roomsItemAvailableHeights = ["234px", "136px", "164px", "234px", "234px"], this.roomsItemHeights = []
                    }
                    ngAfterViewInit() {
                        this.generateRoomsItemHeights(), this.store.containerElRef = this.containerElRef
                    }
                    generateRoomsItemHeights() {
                        for (let t = 0; t < 100; t++) {
                            const n = Math.floor(Math.random() * this.roomsItemAvailableHeights.length),
                                i = this.roomsItemAvailableHeights[n];
                            this.roomsItemHeights[t] = {
                                height: i,
                                "line-height": i
                            }
                        }
                    }
                    openLangSelect() {
                        this.store.openLangSelect()
                    }
                    selectRoom(t) {
                        this.store.goToRoom(t.id || "")
                    }
                    filterRooms(t) {
                        t && this.store.filterRooms$(t)
                    }
                    openFiltersDialog() {
                        this.store.openRoomFilters()
                    }
                    uploadVisibilityChange(t) {
                        this.store.uploadVisibilityChange(t)
                    }
                    openVendorUrl() {
                        this.store.openVendorUrl()
                    }
                    ctaAction(t) {
                        t && this.store.ctaAction(t)
                    }
                }
                return e.\u0275fac = function (t) {
                    return new(t || e)
                }, e.\u0275cmp = o.Xpm({
                    type: e,
                    selectors: [
                        ["CrownCrete-default-rooms-layout"]
                    ],
                    viewQuery: function (t, n) {
                        if (1 & t && o.Gf(ft, 5), 2 & t) {
                            let i;
                            o.iGM(i = o.CRH()) && (n.containerElRef = i.first)
                        }
                    },
                    hostAttrs: [1, "CrownCrete-base-rooms-layout"],
                    standalone: !0,
                    features: [o._Bn([(0, L.E6)(E), k]), o.jDz],
                    decls: 1,
                    vars: 5,
                    consts: [
                        [4, "ngrxLet"],
                        [3, "cta", 4, "ngIf"],
                        [1, "CrownCrete-rooms-container"],
                        ["roomsContainer", ""],
                        ["CrownCreteVisibilityChange", "", 3, "CrownCreteSkeletonLoader", "visible"],
                        [3, "showFilters", "openFiltersDialog"],
                        [1, "rooms-content"],
                        ["class", "rooms-filters", 3, "floating", 4, "ngIf"],
                        [1, "CrownCrete-rooms-wrapper"],
                        [1, "mosaic-wrapper"],
                        [3, "loading", "rooms", "roomsItemHeights", "columnsNumber", "roomSelected"],
                        [1, "header-wrapper"],
                        [1, "header"],
                        [1, "CrownCrete-logo-wrapper"],
                        ["alt", "company logo", "loading", "lazy", 3, "src", "click"],
                        [1, "header-right-side"],
                        ["class", "header-cta-wrapper", 4, "ngIf"],
                        [1, "CrownCrete-lang-wrapper"],
                        ["CrownCrete-button", "", "class", "outline small fl-ml-16", 3, "click", 4, "ngIf"],
                        ["class", "rooms-cta-wrapper", 4, "ngIf"],
                        [1, "floating-upload"],
                        [1, "small"],
                        [1, "header-cta-wrapper"],
                        ["CrownCrete-button", "", 1, "outline", "reverse", "small", 3, "click"],
                        [3, "name", 4, "ngIf"],
                        [4, "ngIf"],
                        [3, "name"],
                        ["CrownCrete-button", "", 1, "outline", "small", "fl-ml-16", 3, "click"],
                        [1, "fl-mr-8", 3, "src", "alt"],
                        [1, "rooms-cta-wrapper"],
                        ["CrownCrete-button", "", 1, "outline", "reverse", 3, "click"],
                        [1, "rooms-filters"],
                        [3, "loading", "items", "selection", "filterDialogClick", "selectionChanged"]
                    ],
                    template: function (t, n) {
                        1 & t && o.YNc(0, wt, 11, 15, "ng-container", 0), 2 & t && o.Q6J("ngrxLet", o.kEZ(1, Rt, n.vm$, n.rooms$, n.showLangs$))
                    },
                    dependencies: [c.ez, c.O5, C._N, C.eJ, I.c, R.wC, ro.A, v.N, b.X, Eo, io, x.TJ, _.K, Go, x.Zu, vo, gt],
                    styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;height:inherit}@media (min-width: 768px){[_nghost-%COMP%]{max-height:100dvh;height:100%}}[_nghost-%COMP%]   .CrownCrete-logo-wrapper[_ngcontent-%COMP%]{position:relative;height:40px;max-width:55%}[_nghost-%COMP%]   .CrownCrete-logo-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}[_nghost-%COMP%]   .header-right-side[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   .rooms-cta-wrapper[_ngcontent-%COMP%]{margin:var(--fl-y-padding) 0 var(--fl-y-padding-md)}@media (min-width: 768px){[_nghost-%COMP%]   .rooms-cta-wrapper[_ngcontent-%COMP%]{display:none}}[_nghost-%COMP%]   .rooms-cta-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .CrownCrete-floating-actions-rooms[_ngcontent-%COMP%]{position:absolute;right:var(--fl-x-padding);bottom:var(--fl-y-padding);display:none;z-index:4}[_nghost-%COMP%]   .CrownCrete-floating-actions-rooms.visible[_ngcontent-%COMP%]{display:flex}@media (min-width: 768px){[_nghost-%COMP%]   .CrownCrete-floating-actions-rooms[_ngcontent-%COMP%]{display:none!important}}[_nghost-%COMP%]   .rooms-filters[_ngcontent-%COMP%]{padding:32px 0 16px}@media (min-width: 768px){[_nghost-%COMP%]   .rooms-filters[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:40px 0 16px}[_nghost-%COMP%]   .rooms-filters.floating[_ngcontent-%COMP%]   .CrownCrete-room-filters[_ngcontent-%COMP%]{position:sticky;top:0}}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]{min-height:calc(var(--fl-y-padding-md) + 32px);margin-bottom:32px}@media (max-width: 767px){[_nghost-%COMP%]   nav.cta[_ngcontent-%COMP%]{min-height:calc(var(--fl-y-padding-md) + 72px);margin-bottom:52px}}@media (min-width: 768px){[_nghost-%COMP%]   nav[_ngcontent-%COMP%]{margin-bottom:22px}}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;z-index:5;padding:var(--fl-y-padding-md) var(--fl-x-padding) 0}@media (min-width: 768px){[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]{padding:var(--fl-y-padding-md) var(--fl-x-padding-md) 0}}@media (max-width: 767px){[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .header-cta-wrapper[_ngcontent-%COMP%]{display:none}}@media (max-width: 767px){[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .floating-upload[_ngcontent-%COMP%]{display:none}}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .floating-upload[_ngcontent-%COMP%]:not(.floating){display:none}@media (min-width: 768px){[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .floating-upload.floating[_ngcontent-%COMP%]{padding-top:10px;padding-bottom:30px;display:block;background-color:var(--fl-bg)}}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;z-index:2}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:1rem}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .CrownCrete-lang-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:16px;height:12px;border-radius:4px}[_nghost-%COMP%]   .CrownCrete-rooms-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;overflow:auto;padding:0 var(--fl-x-padding)}@media (min-width: 768px){[_nghost-%COMP%]   .CrownCrete-rooms-container[_ngcontent-%COMP%]{padding:0 var(--fl-x-padding-md)}[_nghost-%COMP%]   .CrownCrete-rooms-container.spacer[_ngcontent-%COMP%]   .CrownCrete-room-upload[_ngcontent-%COMP%]{opacity:0}}[_nghost-%COMP%]   .rooms-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}@media (min-width: 768px){[_nghost-%COMP%]   .rooms-content[_ngcontent-%COMP%]   .CrownCrete-rooms-wrapper[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   .rooms-content.focused[_ngcontent-%COMP%]{position:relative}}"],
                    changeDetection: 0
                }), e
            })()
        }
    }
]);