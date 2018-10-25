webpackJsonp([3],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.monitorRoot = 'MonitorPage';
        this.batteryRoot = 'BatteryPage';
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Projects\VSCode\Swen325A3\src\pages\tabs\tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="monitorRoot" tabTitle="Monitor" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="batteryRoot" tabTitle="Battery" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Projects\VSCode\Swen325A3\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/battery/battery.module": [
		455,
		1
	],
	"../pages/monitor/monitor.module": [
		456,
		0
	],
	"../pages/tabs/tabs.module": [
		457,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(356);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Chart


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/battery/battery.module#BatteryPageModule', name: 'BatteryPage', segment: 'battery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/monitor/monitor.module#MonitorPageModule', name: 'MonitorPage', segment: 'monitor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__["ChartsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 165,
	"./af.js": 165,
	"./ar": 166,
	"./ar-dz": 167,
	"./ar-dz.js": 167,
	"./ar-kw": 168,
	"./ar-kw.js": 168,
	"./ar-ly": 169,
	"./ar-ly.js": 169,
	"./ar-ma": 170,
	"./ar-ma.js": 170,
	"./ar-sa": 171,
	"./ar-sa.js": 171,
	"./ar-tn": 172,
	"./ar-tn.js": 172,
	"./ar.js": 166,
	"./az": 173,
	"./az.js": 173,
	"./be": 174,
	"./be.js": 174,
	"./bg": 175,
	"./bg.js": 175,
	"./bm": 176,
	"./bm.js": 176,
	"./bn": 177,
	"./bn.js": 177,
	"./bo": 178,
	"./bo.js": 178,
	"./br": 179,
	"./br.js": 179,
	"./bs": 180,
	"./bs.js": 180,
	"./ca": 181,
	"./ca.js": 181,
	"./cs": 182,
	"./cs.js": 182,
	"./cv": 183,
	"./cv.js": 183,
	"./cy": 184,
	"./cy.js": 184,
	"./da": 185,
	"./da.js": 185,
	"./de": 186,
	"./de-at": 187,
	"./de-at.js": 187,
	"./de-ch": 188,
	"./de-ch.js": 188,
	"./de.js": 186,
	"./dv": 189,
	"./dv.js": 189,
	"./el": 190,
	"./el.js": 190,
	"./en-au": 191,
	"./en-au.js": 191,
	"./en-ca": 192,
	"./en-ca.js": 192,
	"./en-gb": 193,
	"./en-gb.js": 193,
	"./en-ie": 194,
	"./en-ie.js": 194,
	"./en-il": 195,
	"./en-il.js": 195,
	"./en-nz": 196,
	"./en-nz.js": 196,
	"./eo": 197,
	"./eo.js": 197,
	"./es": 198,
	"./es-do": 199,
	"./es-do.js": 199,
	"./es-us": 200,
	"./es-us.js": 200,
	"./es.js": 198,
	"./et": 201,
	"./et.js": 201,
	"./eu": 202,
	"./eu.js": 202,
	"./fa": 203,
	"./fa.js": 203,
	"./fi": 204,
	"./fi.js": 204,
	"./fo": 205,
	"./fo.js": 205,
	"./fr": 206,
	"./fr-ca": 207,
	"./fr-ca.js": 207,
	"./fr-ch": 208,
	"./fr-ch.js": 208,
	"./fr.js": 206,
	"./fy": 209,
	"./fy.js": 209,
	"./gd": 210,
	"./gd.js": 210,
	"./gl": 211,
	"./gl.js": 211,
	"./gom-latn": 212,
	"./gom-latn.js": 212,
	"./gu": 213,
	"./gu.js": 213,
	"./he": 214,
	"./he.js": 214,
	"./hi": 215,
	"./hi.js": 215,
	"./hr": 216,
	"./hr.js": 216,
	"./hu": 217,
	"./hu.js": 217,
	"./hy-am": 218,
	"./hy-am.js": 218,
	"./id": 219,
	"./id.js": 219,
	"./is": 220,
	"./is.js": 220,
	"./it": 221,
	"./it.js": 221,
	"./ja": 222,
	"./ja.js": 222,
	"./jv": 223,
	"./jv.js": 223,
	"./ka": 224,
	"./ka.js": 224,
	"./kk": 225,
	"./kk.js": 225,
	"./km": 226,
	"./km.js": 226,
	"./kn": 227,
	"./kn.js": 227,
	"./ko": 228,
	"./ko.js": 228,
	"./ky": 229,
	"./ky.js": 229,
	"./lb": 230,
	"./lb.js": 230,
	"./lo": 231,
	"./lo.js": 231,
	"./lt": 232,
	"./lt.js": 232,
	"./lv": 233,
	"./lv.js": 233,
	"./me": 234,
	"./me.js": 234,
	"./mi": 235,
	"./mi.js": 235,
	"./mk": 236,
	"./mk.js": 236,
	"./ml": 237,
	"./ml.js": 237,
	"./mn": 238,
	"./mn.js": 238,
	"./mr": 239,
	"./mr.js": 239,
	"./ms": 240,
	"./ms-my": 241,
	"./ms-my.js": 241,
	"./ms.js": 240,
	"./mt": 242,
	"./mt.js": 242,
	"./my": 243,
	"./my.js": 243,
	"./nb": 244,
	"./nb.js": 244,
	"./ne": 245,
	"./ne.js": 245,
	"./nl": 246,
	"./nl-be": 247,
	"./nl-be.js": 247,
	"./nl.js": 246,
	"./nn": 248,
	"./nn.js": 248,
	"./pa-in": 249,
	"./pa-in.js": 249,
	"./pl": 250,
	"./pl.js": 250,
	"./pt": 251,
	"./pt-br": 252,
	"./pt-br.js": 252,
	"./pt.js": 251,
	"./ro": 253,
	"./ro.js": 253,
	"./ru": 254,
	"./ru.js": 254,
	"./sd": 255,
	"./sd.js": 255,
	"./se": 256,
	"./se.js": 256,
	"./si": 257,
	"./si.js": 257,
	"./sk": 258,
	"./sk.js": 258,
	"./sl": 259,
	"./sl.js": 259,
	"./sq": 260,
	"./sq.js": 260,
	"./sr": 261,
	"./sr-cyrl": 262,
	"./sr-cyrl.js": 262,
	"./sr.js": 261,
	"./ss": 263,
	"./ss.js": 263,
	"./sv": 264,
	"./sv.js": 264,
	"./sw": 265,
	"./sw.js": 265,
	"./ta": 266,
	"./ta.js": 266,
	"./te": 267,
	"./te.js": 267,
	"./tet": 268,
	"./tet.js": 268,
	"./tg": 269,
	"./tg.js": 269,
	"./th": 270,
	"./th.js": 270,
	"./tl-ph": 271,
	"./tl-ph.js": 271,
	"./tlh": 272,
	"./tlh.js": 272,
	"./tr": 273,
	"./tr.js": 273,
	"./tzl": 274,
	"./tzl.js": 274,
	"./tzm": 275,
	"./tzm-latn": 276,
	"./tzm-latn.js": 276,
	"./tzm.js": 275,
	"./ug-cn": 277,
	"./ug-cn.js": 277,
	"./uk": 278,
	"./uk.js": 278,
	"./ur": 279,
	"./ur.js": 279,
	"./uz": 280,
	"./uz-latn": 281,
	"./uz-latn.js": 281,
	"./uz.js": 280,
	"./vi": 282,
	"./vi.js": 282,
	"./x-pseudo": 283,
	"./x-pseudo.js": 283,
	"./yo": 284,
	"./yo.js": 284,
	"./zh-cn": 285,
	"./zh-cn.js": 285,
	"./zh-hk": 286,
	"./zh-hk.js": 286,
	"./zh-tw": 287,
	"./zh-tw.js": 287
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 411;

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Projects\VSCode\Swen325A3\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Projects\VSCode\Swen325A3\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[333]);
//# sourceMappingURL=main.js.map