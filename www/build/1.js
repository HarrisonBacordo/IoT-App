webpackJsonp([1],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatteryPageModule", function() { return BatteryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__battery__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BatteryPageModule = /** @class */ (function () {
    function BatteryPageModule() {
    }
    BatteryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__battery__["a" /* BatteryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__battery__["a" /* BatteryPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ng2_charts__["ChartsModule"]
            ],
        })
    ], BatteryPageModule);
    return BatteryPageModule;
}());

//# sourceMappingURL=battery.module.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatteryPage; });
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
 * Generated class for the BatteryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BatteryPage = /** @class */ (function () {
    function BatteryPage(events, navCtrl, navParams) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['living room', 'kitchen', 'dining room', 'toilet', 'bedroom'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [100, 100, 100, 100, 100], label: 'Battery Levels' },
        ];
        events.subscribe('battery_level_update', function (data) {
            console.log("Event triggered");
            _this.updateBatteryLevels(data);
        });
    }
    BatteryPage.prototype.updateBatteryLevels = function (data) {
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        switch (data.location) {
            case 'living':
                clone[0].data[0] = data.battery_level;
                break;
            case 'kitchen':
                clone[0].data[1] = data.battery_level;
                break;
            case 'dining':
                clone[0].data[2] = data.battery_level;
                break;
            case 'toilet':
                clone[0].data[3] = data.battery_level;
                break;
            case 'bedroom':
                clone[0].data[4] = data.battery_level;
                break;
        }
        this.barChartData = clone;
    };
    BatteryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-battery',template:/*ion-inline-start:"C:\Projects\VSCode\Swen325A3\src\pages\battery\battery.html"*/'<!--\n  Generated template for the BatteryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Battery</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-title>Sensor battery levels:</ion-title>\n  <ion-row>\n    <div style="margin: auto auto">\n      <div style="display: block" *ngIf="barChartData">\n        <canvas baseChart\n                [datasets]="barChartData"\n                [labels]="barChartLabels"\n                [options]="barChartOptions"\n                [legend]="barChartLegend"\n                [chartType]="barChartType">\n        </canvas>\n      </div>\n    </div>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Projects\VSCode\Swen325A3\src\pages\battery\battery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], BatteryPage);
    return BatteryPage;
}());

//# sourceMappingURL=battery.js.map

/***/ })

});
//# sourceMappingURL=1.js.map