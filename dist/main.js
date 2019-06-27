(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _basics_basics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basics/basics.component */ "./src/app/basics/basics.component.ts");
/* harmony import */ var _per_per_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./per/per.component */ "./src/app/per/per.component.ts");
/* harmony import */ var _stat_leaders_stat_leaders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stat-leaders/stat-leaders.component */ "./src/app/stat-leaders/stat-leaders.component.ts");
/* harmony import */ var _foster_foster_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./foster/foster.component */ "./src/app/foster/foster.component.ts");
/* harmony import */ var _height_height_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./height/height.component */ "./src/app/height/height.component.ts");
/* harmony import */ var _per_advanced_stats_per_advanced_stats_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./per-advanced-stats/per-advanced-stats.component */ "./src/app/per-advanced-stats/per-advanced-stats.component.ts");










var routes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    }, {
        path: 'basics',
        component: _basics_basics_component__WEBPACK_IMPORTED_MODULE_4__["BasicsComponent"],
    }, {
        path: 'per',
        component: _per_per_component__WEBPACK_IMPORTED_MODULE_5__["PerComponent"],
    }, {
        path: 'stat-leaders',
        component: _stat_leaders_stat_leaders_component__WEBPACK_IMPORTED_MODULE_6__["StatLeadersComponent"],
    }, {
        path: 'foster',
        component: _foster_foster_component__WEBPACK_IMPORTED_MODULE_7__["FosterComponent"],
    }, {
        path: 'height',
        component: _height_height_component__WEBPACK_IMPORTED_MODULE_8__["HeightComponent"],
    }, {
        path: 'per-advanced-stats',
        component: _per_advanced_stats_per_advanced_stats_component__WEBPACK_IMPORTED_MODULE_9__["PerAdvancedStatsComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'nba-data';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _basics_basics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basics/basics.component */ "./src/app/basics/basics.component.ts");
/* harmony import */ var _per_per_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./per/per.component */ "./src/app/per/per.component.ts");
/* harmony import */ var _stat_leaders_stat_leaders_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stat-leaders/stat-leaders.component */ "./src/app/stat-leaders/stat-leaders.component.ts");
/* harmony import */ var _foster_foster_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./foster/foster.component */ "./src/app/foster/foster.component.ts");
/* harmony import */ var _height_height_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./height/height.component */ "./src/app/height/height.component.ts");
/* harmony import */ var _per_advanced_stats_per_advanced_stats_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./per-advanced-stats/per-advanced-stats.component */ "./src/app/per-advanced-stats/per-advanced-stats.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _basics_basics_component__WEBPACK_IMPORTED_MODULE_8__["BasicsComponent"],
                _per_per_component__WEBPACK_IMPORTED_MODULE_9__["PerComponent"],
                _stat_leaders_stat_leaders_component__WEBPACK_IMPORTED_MODULE_10__["StatLeadersComponent"],
                _foster_foster_component__WEBPACK_IMPORTED_MODULE_11__["FosterComponent"],
                _height_height_component__WEBPACK_IMPORTED_MODULE_12__["HeightComponent"],
                _per_advanced_stats_per_advanced_stats_component__WEBPACK_IMPORTED_MODULE_13__["PerAdvancedStatsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/basics/basics.component.html":
/*!**********************************************!*\
  !*** ./src/app/basics/basics.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\"> \n  <div class=\"page\">\n    <div class=\"point-leaders\">\n        <h2 class=\"page-title\"><u>BASICS</u></h2>\n        <p>\n          On the home page we walked through how to find the top scorers from\n          our Kaggle dataset file <span>2012-18_playerBoxScore.csv</span>.  These same \n          three lines of code, again seen below, can be used to find out the top \n          ten leaders in any statistic that exists as a column in the data frame.\n          To do just that, all you need to do is replace \"playPTS\" in both the \n          first and second line of code with the head of any other column \"playAST\" \n          for example.\n        </p>\n        <img src=\"../../assets/screenshots/home/top_total_code.png\" alt=\"\" width=\"90%\">\n      </div>\n      <hr>\n\n    <div class=\"columns\">\n      <p class=\"check-columns\">\n        If you'd like to see all the columns that are available to you, all you need to do \n        is enter your is add \".columns\" after the name of your data frame. <span>Rememebr that \n        our original data frame with ALL player boxscore data is named df.</span>\n      </p>\n      <img src=\"../../assets/screenshots/stat-leaders/columns.png\" alt=\"\" width=\"60%\">\n    </div>\n    <hr>\n\n    <div class=\"matplotlib\">\n      <h3><u>MATPLOTLIB</u></h3>\n      <p>\n        As previously stated, MatPlotLib is used to visualize our data.  \n        We can use the top ten point leaders dataframe we put together \n        on the home page as an example... \n      </p>\n      <img src=\"../../assets/screenshots/stat-leaders/Screenshot (29).png\" width=\"80%\">\n    </div>\n\n    <div class=\"map\">\n      <p>\n        The two lines of code above alone are enough to create our chart.  The first \n        line creates our chart. First we set the axis equal to our data fram \"top_total_pts.\"\n        Second, we decide whta kind of chart it is \"plot.bar\" (In this case a bar graph).  We \n        set the y axis to the number of points scored while the x-axis will default to the \n        player name. All the \"rot=90\" does is rotate the ticks on the x-axis 90 degrees so that \n        the names don't overlap. After our chart is created in the first line of code, the second \n        line displays the chart seen to the right.  This chart does technically display the names \n        of our top ten scorers from 2012 through 2018 but without already knowing what information \n        is being displayed all we really know are names and numbers, and the numbers could refer to \n        anything.  How are we supposed to know that the numbers refer to points scored?  And this \n        chart hardly shows any distinction bewteen our ten players.  The 10th highest is well over \n        9,000 and the 2nd highest is under 12,000, so why does our chart's y-axis start at 0 when \n        the lowest value being displayed is over 9,000?\n      </p>\n      <img src=\"../../assets/charts/leaders/nba_point_leaders_default.png\" width=\"45%\">\n    </div>\n\n    <div class=\"detailed\">\n      <p>\n        Additional code can be added to our original two lines to make a much better visualization \n        of that same data.  We can even include a line of code that will save the chart as a jpeg \n        in our local directory.  Take a look at a more polished version of our code below.\n      </p>\n    </div>\n\n    <div class=\"chart\">\n      <img src=\"../../assets/charts/leaders/nba_point_leaders.png\" width=\"40%\">\n      <img src=\"../../assets/screenshots/stat-leaders/top_points_code.png\" width=\"55%\">\n    </div>\n\n    <div class=\"explanation\">\n      <p>\n        Above we've added a line of code each to add a x-axis label, a y-axis label, and a title. \n        Thanks to that, we can now clearly identify what information is being displayed in the \n        chart.  There are two more lines that we've added, the first is the \"ylim\" which allows \n        us to set the beginning and the end of our y-axis.  This allows for greater parity in our \n        chart so that the differences between the players point totals are more clear.  The other \n        was the previously mentioned line that creates and saves a jpeg image of our chart, now the \n        chart is readily available for use anywhere else we may want it.\n      </p>\n    </div>\n    <hr>\n\n    <div class=\"summary\">\n      <p class=\"move-on\">\n        Now that we have covered the basics, you can now navigate the rest of the site with a \n        better understanding of where the information originates, how it is manipulated to display \n        the exact information we were looking for, and how that information can be visually  \n        represented in a manner that most people find more pleasant than numbers alone.<br><br>\n      </p>\n      <p class=\"italic\">\n        The stat leaders page will contain many variations of the code above to see the leaders in \n        all major statistical catagories.  We can then see if there is any corilation between the \n        various stats (points, assists, rebounds, steals, blocks, 3-pointers, etc.).\n      </p>\n    </div>\n\n    <div class=\"navigate\">\n        <a [routerLink]=\"['/']\">PREVIOUS PAGE</a>\n        <a [routerLink]=\"['/stat-leaders']\">NEXT PAGE</a>\n    </div>\n  </div> \n</div> "

/***/ }),

/***/ "./src/app/basics/basics.component.scss":
/*!**********************************************!*\
  !*** ./src/app/basics/basics.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background-color: #17408B; }\n  .background .page {\n    width: 70vw;\n    padding: 15px;\n    margin-left: 15vw;\n    background-color: #FFFFFF; }\n  .background .page .point-leaders {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .point-leaders .page-title {\n        text-align: center;\n        -webkit-text-emphasis: bold;\n                text-emphasis: bold; }\n  .background .page .point-leaders p {\n        font-size: 18px;\n        text-indent: 5%; }\n  .background .page .point-leaders p span {\n          font-style: italic; }\n  .background .page .columns {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .columns .check-columns {\n        font-size: 20px;\n        padding-right: 25px;\n        text-align: center;\n        padding: 10px;\n        border: 2px solid #C9082A;\n        border-radius: 10px; }\n  .background .page .columns .check-columns span {\n          font-style: italic; }\n  .background .page .matplotlib {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .matplotlib h3 {\n        text-align: center; }\n  .background .page .matplotlib p {\n        font-size: 18px;\n        text-indent: 5%; }\n  .background .page .map {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .map p {\n        font-size: 18px;\n        text-indent: 5%; }\n  .background .page .detailed p {\n      font-size: 18px;\n      text-indent: 5%; }\n  .background .page .chart {\n      display: flex;\n      align-items: center;\n      justify-content: space-around; }\n  .background .page .explanation p {\n      font-size: 18px;\n      text-indent: 5%; }\n  .background .page .summary .move-on {\n      font-size: 18px;\n      text-indent: 5%; }\n  .background .page .summary .italic {\n      font-size: 18px;\n      text-indent: 5%;\n      font-style: italic; }\n  .background .page .navigate {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .navigate a {\n        color: #C9082A;\n        text-decoration: none;\n        font-weight: bold; }\n  .background .page .navigate a:hover {\n        color: #17408B; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzaWNzL0M6XFxVc2Vyc1xcMTg0NzNcXERvY3VtZW50c1xcY29kaW5nLXRlbXBsZVxccHJvamVjdHNcXG5iYS1kYXRhL3NyY1xcYXBwXFxiYXNpY3NcXGJhc2ljcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLHlCQUF5QixFQUFBO0VBRDVCO0lBSVEsV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIseUJBQXlCLEVBQUE7RUFQakM7TUFVWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHNCQUFzQixFQUFBO0VBWmxDO1FBZWdCLGtCQUFrQjtRQUNsQiwyQkFBbUI7Z0JBQW5CLG1CQUFtQixFQUFBO0VBaEJuQztRQW9CZ0IsZUFBZTtRQUNmLGVBQWUsRUFBQTtFQXJCL0I7VUF3Qm9CLGtCQUFrQixFQUFBO0VBeEJ0QztNQWdDWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDhCQUE4QixFQUFBO0VBbEMxQztRQXFDZ0IsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLHlCQUF5QjtRQUN6QixtQkFBbUIsRUFBQTtFQTFDbkM7VUE2Q29CLGtCQUFrQixFQUFBO0VBN0N0QztNQW1EWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHNCQUFzQixFQUFBO0VBckRsQztRQXdEZ0Isa0JBQWtCLEVBQUE7RUF4RGxDO1FBNERnQixlQUFlO1FBQ2YsZUFBZSxFQUFBO0VBN0QvQjtNQWtFWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDhCQUE4QixFQUFBO0VBcEUxQztRQXVFZ0IsZUFBZTtRQUNmLGVBQWUsRUFBQTtFQXhFL0I7TUE4RWdCLGVBQWU7TUFDZixlQUFlLEVBQUE7RUEvRS9CO01Bb0ZZLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsNkJBQTZCLEVBQUE7RUF0RnpDO01BMkZnQixlQUFlO01BQ2YsZUFBZSxFQUFBO0VBNUYvQjtNQW9HZ0IsZUFBZTtNQUNmLGVBQWUsRUFBQTtFQXJHL0I7TUEwR2dCLGVBQWU7TUFDZixlQUFlO01BQ2Ysa0JBQWtCLEVBQUE7RUE1R2xDO01BaUhZLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCLEVBQUE7RUFuSDFDO1FBdUhnQixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLGlCQUFpQixFQUFBO0VBekhqQztRQTRIZ0IsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYmFzaWNzL2Jhc2ljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5ke1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc0MDhCO1xyXG5cclxuICAgLnBhZ2V7XHJcbiAgICAgICAgd2lkdGg6IDcwdnc7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTV2dztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgXHJcbiAgICAgICAgLnBvaW50LWxlYWRlcnN7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICAucGFnZS10aXRsZXtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHRleHQtZW1waGFzaXM6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogNSU7XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbHVtbnN7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgICAgIC5jaGVjay1jb2x1bW5ze1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjQzkwODJBO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1hdHBsb3RsaWJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiA1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1hcHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiA1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRldGFpbGVke1xyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hhcnR7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmV4cGxhbmF0aW9ue1xyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdW1tYXJ5e1xyXG4gICAgICAgICAgICAubW92ZS1vbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiA1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC5pdGFsaWN7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogNSU7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYXZpZ2F0ZXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0M5MDgyQTtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzE3NDA4QjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgXHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/basics/basics.component.ts":
/*!********************************************!*\
  !*** ./src/app/basics/basics.component.ts ***!
  \********************************************/
/*! exports provided: BasicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicsComponent", function() { return BasicsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicsComponent = /** @class */ (function () {
    function BasicsComponent() {
    }
    BasicsComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    BasicsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basics',
            template: __webpack_require__(/*! ./basics.component.html */ "./src/app/basics/basics.component.html"),
            styles: [__webpack_require__(/*! ./basics.component.scss */ "./src/app/basics/basics.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicsComponent);
    return BasicsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div id=\"logo\"></div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  height: 100px; }\n  footer #logo {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    background: url('fireball.jpeg');\n    background-size: 105px 100px;\n    background-repeat: repeat-x; }\n  footer #logo .fireball {\n      width: 100px;\n      height: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcMTg0NzNcXERvY3VtZW50c1xcY29kaW5nLXRlbXBsZVxccHJvamVjdHNcXG5iYS1kYXRhL3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTtFQUpqQjtJQU9RLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdDQUFvRDtJQUNwRCw0QkFBNEI7SUFDNUIsMkJBQTJCLEVBQUE7RUFabkM7TUFlWSxZQUFXO01BQ1gsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuXHJcbiAgICAjbG9nbyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2ZpcmViYWxsLmpwZWcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwNXB4IDEwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuXHJcbiAgICAgICAgLmZpcmViYWxse1xyXG4gICAgICAgICAgICB3aWR0aDoxMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/foster/foster.component.html":
/*!**********************************************!*\
  !*** ./src/app/foster/foster.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <div class=\"page\">\n    <div class=\"heading\">\n      <h2 class=\"page-title\"><u>THE ROCKETS  v.  SCOTT FOSTER</u></h2>\n      <p>\n        For the last couple of seasons both players and staff of the Houston Rockets organization\n        have complained about the officiating of one specific referee, Scott Foster.  The Rockets \n        style of player is very unique and liekly varies more from the league mean more so than any \n        other team which could lead to slight differences in the way that their games are officiated \n        <span>(Human Error).</span>  However the members of the Rockets, specifically their two best \n        players James Harden and Chris Paul have singled out a single official, <span>out of roughly \n        75 NBA referees</span>, as being biased towards their team and on more than one occasion \n        have blamed Foster for a Rockets loss.  So the question here is are the Rockets correct that \n        Scott Foster is personally biased against the Rockets?  Or do the Rockets just like to complain \n        and blame others for their own shortcomings?<br><br> <span>Check out the links below to read more about \n        the ongoing confilct between Scott Foster and the Rockets organization.</span>\n      </p>\n      <ul>\n        <li><a href=\"https://ftw.usatoday.com/2019/02/james-harden-referee\" target=\"_blank\">A history of James Harden's beef with referee Scott Foster</a></li>\n        <li><a href=\"https://www.espn.com/nba/story/_/id/26051817/james-harden-says-scott-foster-officiate-rockets-games\" target=\"_blank\">James Harden says Scott Foster shouldn't officiate Rockets games</a></li>\n        <li><a href=\"https://houseofhouston.com/2019/04/30/houston-rockets-james-harden-scott-foster-team-dictate-narrative/\" target=\"_blank\">Houston Rockets: Team should not let Scott Foster dictate the narrative</a></li>\n        <li><a href=\"https://www.sfgate.com/warriors/article/NBA-referee-Scott-Foster-Rockets-Warriors-Game-2-13807222.php\" target=\"_blank\">Scott Foster, who has long history with Rockets, to referee Game 2 of Rockets-Warriors series</a></li>\n        <li><a href=\"https://www.theringer.com/nba/2019/4/30/18524450/warriors-rockets-officiating-faq\" target=\"_blank\">Will Rockets-Warriors Be Defined by the Officiating?</a></li>\n      </ul>\n      <hr>\n    </div>\n\n    <div class=\"start\">\n      <p>\n        For this data-analysis, we will be moving away from our our players file <span>2012-18_playerBoxScore.csv</span> and onto \n        another file from the same dataset called <span>2012-18_officialBoxScore.csv</span>.  This file has substantially more columns \n        than the player boxscore file.  Its shape is 44,284 rows by 119 columns and although we will need every row, the majority of \n        the columns are superfluous and won't be needed for our research. As you can see to the right, Jupyter Notebook won't display \n        every column because there are too many.  And in Excel's standard view  at one time you can view columns \"A\" through \"S\"\n        but given that the spreadsheet goes all the way to column \"DO\" this also is an inadequate way to go about viewing the columns.\n        You can add <span>.values</span> to <span>df.columns</span> to display all 119 columns and then we can decide which ones we need.\n      </p>\n      <div class=\"side\">\n        <h5><u>Hover over Images to Enlarge</u></h5>\n        <img src=\"../../assets/screenshots/foster/fullcsv.png\" width=\"100%\">\n        <img src=\"../../assets/screenshots/foster/columns_119.png\" width=\"100%\">\n      </div>\n    </div>\n\n    <div class=\"sf_df\">\n      <p>\n        If we only wanted to get rid of a few columns we could use <span>.drop()</span> and indicate what columns we wanted to get rid of \n        in the parenthesis.  However, we want to get rid of more columns than we want to keep so we will create a new dataframe sf_df \n        <span>(Scott-Foster-Data-Frame)</span> and select the columns we do want from our original data frame as seen below.\n      </p>\n      <img src=\"../../assets/screenshots/foster/sf_df.png\" width=\"90%\">\n      <p>\n        As you can see we still have all 44,284 rows but we have eliminated 100 columns that we didn't need.  Not only does doing this make \n        our data easier to navigate, but now those columns don't need to be searched and NumPy will be able to do its calculations more quickly.  \n      </p>\n      <p>\n        We want to be able to search games reffed by Scott Foster, but currently the referees first and last names are kept seperate, and there \n        could be more than one ref with the first name Scott or the last name Foster.  We need to add a new column called 'name' to our data frame \n        that contains the information in both the columns 'offLNm' and 'offFNm'.\n      </p>\n      <img src=\"../../assets/screenshots/foster/Screenshot (41).png\" width=\"90%\">\n      <p>\n        Now we have a 20th column called <span>name</span> which can now be used to sort games by each refferee.  So now lets create two new data \n        frames one only with games reffed by Scott Foster, and the other with every game not reffed by Foster.\n      </p>\n      <img src=\"../../assets/screenshots/foster/with-or-without.png\" width=\"90%\">\n      <p class=\"directions\">\n        Next we want to reduce both of our data frames down to only include Rockets games.\n      </p>\n      <img src=\"../../assets/screenshots/foster/rockets_games.png\" width=\"90%\">\n      <p class=\"directions\">\n        Now we can compare the Rockets statical performance when Foster is or is not the referee.\n      </p>\n    </div>\n\n    <div class=\"mean\">\n      <img class=\"right\" src=\"../../assets/screenshots/foster/not_sf_avgs.png\" width=\"25%\">\n      <img class=\"right\" src=\"../../assets/screenshots/foster/sf_avgs.png\" width=\"25%\">\n      <img src=\"../../assets/screenshots/foster/avgs_difference.png\" width=\"40%\">\n    </div>\n\n    <div class=\"avgs\">\n      <p>\n        We can use <span>.mean()</span> to find the average of every column in a data frame.\n        The first image is the Rocket's averages in games Scott Foster doesn't ref.  The second \n        is the Rocket's average when Foster is the ref.  And the image on the right displays \n        the difference between the averages in the first two.\n      </p>\n      <p>\n        The only stat listed above that remotely suggests that Scott Foster is biased against \n        the Rockets is that the Rockets have 1 1/2 more personal fouls called against them \n        when Foster is the ref.  However that point can largely be negated by the fact that \n        the Rockets also get over 2 1/2 more free throw attempts when Foster is the ref.  This \n        suggests that Scott Foster does in fact call a tighter game with more fouls than other \n        referees.\n      </p>\n      <hr>\n    </div>\n\n    <div class=\"top5\">\n      <p>\n        Scott Foster is one of the most experienced referees in the NBA.  From 2012 through 2018, \n        there are only three referees who reffed more games than Foster.  Let's quickly check a \n        few other experienced refs and the Rocket's statistical averages while they're reffing.  \n      </p>\n      <img src=\"../../assets/screenshots/foster/games-reffed.png\" width=\"60%\">\n    </div>\n\n    <div class=\"other4\">\n      <img src=\"../../assets/screenshots/foster/Screenshot (55).png\" width=\"60%\">\n      <p>\n        We can create new data frames for each of our experienced referees listed above to see if the \n        Rocket's performance is greatly impacted by the referee.\n      </p> \n    </div>\n\n    <div class=\"others-avgs\">\n      <p>\n        The images below show the difference in the Rocket's performance when Scott Foster is the ref \n        compared to other experieced referees.\n      </p>\n      <div class=\"two-images\">\n        <img src=\"../../assets/screenshots/foster/goble.png\" width=\"40%\">\n        <img src=\"../../assets/screenshots/foster/fitz.png\" width=\"40%\">\n      </div>\n      <div class=\"two-images\">\n          <img src=\"../../assets/screenshots/foster/zarba.png\" width=\"40%\">\n          <img src=\"../../assets/screenshots/foster/davis.png\" width=\"40%\">\n      </div>\n    </div>\n\n    <div class=\"summary\">\n      <p>\n        Comparing Scott Foster against other experiecned referees while reffing the Rockets has not shown\n        any significant deviation from the mean. More than anything this shows that Scott Foster calls more \n        fouls than other referees regardless of the team.  The only stat the changes drastically is the \n        steal to turnover ratio, but the reason for that is that there are very few steals and turnovers in \n        a game compared to stats like points or rebounds.  Due to the lower volume a small change in the \n        number of steals, or turnovers, leads to a much more signifcant change in the ratio.  This ratio \n        is largely unaffected by the referee.\n      </p>\n      <h3><u>IN SUMMARY</u></h3>\n      <p>\n        There is little to no quantifiable information that suggests that Scott Foster is biased against \n        the Houston Rockets.  Following a loss to the Los Angeles Lakers on Febuary 22nd, 2019 James Harden \n        was quoted saying \"Scott Foster, man. I never really talk about officiating or anything like that, \n        but just rude and arrogant. I mean, you aren’t able to talk to him throughout the course of the game, \n        and it’s like, how do you build that relationship with officials? And it’s not even that call. It’s \n        just who he is on that floor.\"  Shortly after that, Harden went on to say \"For sure, it’s personal. \n        For sure. I don’t think he should be able to even officiate our games anymore, honestly.\"\n      </p>\n      <p>\n        Harden's statements seem to be a more accurate representation of the relationship bewteen Foster \n        and the Rockets than any quantifiable statistic.  Members of the Rockets like to complain to the \n        refs while Scott Foster doesn't like to be complained to.  personally they may not liek each other \n        but ultmately that has no impact on the way Foster refs each game.\n      </p>\n    </div>\n\n    <div class=\"navigate\">\n      <a [routerLink]=\"['/stat-leaders']\">PREVIOUS PAGE</a>\n      <a [routerLink]=\"['/height']\">NEXT PAGE</a>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/foster/foster.component.scss":
/*!**********************************************!*\
  !*** ./src/app/foster/foster.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background-color: #17408B; }\n  .background .page {\n    width: 70vw;\n    padding: 15px;\n    margin-left: 15vw;\n    background-color: white; }\n  .background .page .heading .page-title {\n      text-align: center;\n      -webkit-text-emphasis: bold;\n              text-emphasis: bold; }\n  .background .page .heading p {\n      font-size: 18px;\n      text-indent: 5%; }\n  .background .page .heading p span {\n        font-style: italic; }\n  .background .page .heading ul {\n      color: #17408B; }\n  .background .page .heading ul li {\n        padding: 2px; }\n  .background .page .heading ul li a {\n          color: #C9082A; }\n  .background .page .heading ul li a:hover {\n          color: #17408B; }\n  .background .page .start {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .start p {\n        padding-right: 15px;\n        font-size: 18px;\n        margin-right: 5%;\n        text-indent: 5%; }\n  .background .page .start p span {\n          font-style: italic; }\n  .background .page .start .side h5 {\n        text-align: center; }\n  .background .page .start .side img {\n        transition: all .5s; }\n  .background .page .start .side img:hover {\n        cursor: pointer;\n        position: fixed;\n        top: 30%;\n        left: 30%;\n        transform: translate(-30%, -30%); }\n  .background .page .sf_df {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .sf_df p {\n        font-size: 18px;\n        text-indent: 5%; }\n  .background .page .sf_df p span {\n          font-style: italic; }\n  .background .page .sf_df .directions {\n        font-size: 24px;\n        text-indent: 0%; }\n  .background .page .mean {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .mean .right {\n        border-right: 3px solid #C9082A;\n        padding-right: 10px; }\n  .background .page .avgs p {\n      font-size: 18px;\n      text-indent: 5%; }\n  .background .page .top5 {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .top5 p {\n        font-size: 18px;\n        text-indent: 5%;\n        padding-right: 15px;\n        padding: 10px;\n        border: 2px solid #C9082A;\n        border-radius: 10px;\n        margin-right: 20px; }\n  .background .page .other4 {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .other4 p {\n        font-size: 18px;\n        padding-left: 25px;\n        padding: 10px;\n        border: 2px solid #C9082A;\n        border-radius: 10px;\n        margin-left: 20px; }\n  .background .page .others-avgs p {\n      font-size: 30px;\n      text-align: center; }\n  .background .page .others-avgs .two-images {\n      display: flex;\n      align-items: center;\n      justify-content: space-around; }\n  .background .page .others-avgs .two-images img {\n        border: 2px solid #17408B;\n        border-radius: 10px;\n        padding: 10px;\n        margin-bottom: 20px; }\n  .background .page .summary p {\n      font-size: 18px;\n      text-indent: 5%; }\n  .background .page .summary h3 {\n      text-align: center; }\n  .background .page .navigate {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .navigate a {\n        color: #C9082A;\n        text-decoration: none;\n        font-weight: bold; }\n  .background .page .navigate a:hover {\n        color: #17408B; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9zdGVyL0M6XFxVc2Vyc1xcMTg0NzNcXERvY3VtZW50c1xcY29kaW5nLXRlbXBsZVxccHJvamVjdHNcXG5iYS1kYXRhL3NyY1xcYXBwXFxmb3N0ZXJcXGZvc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QixFQUFBO0VBRDdCO0lBSVMsV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUJBQXVCLEVBQUE7RUFQaEM7TUFXZ0Isa0JBQWtCO01BQ2xCLDJCQUFtQjtjQUFuQixtQkFBbUIsRUFBQTtFQVpuQztNQWdCaUIsZUFBZTtNQUNmLGVBQWUsRUFBQTtFQWpCaEM7UUFvQnFCLGtCQUFrQixFQUFBO0VBcEJ2QztNQXlCZ0IsY0FBYyxFQUFBO0VBekI5QjtRQTRCb0IsWUFBWSxFQUFBO0VBNUJoQztVQStCd0IsY0FBYyxFQUFBO0VBL0J0QztVQWtDd0IsY0FBYyxFQUFBO0VBbEN0QztNQXlDWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDhCQUE4QixFQUFBO0VBM0MxQztRQThDZ0IsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsZUFBZSxFQUFBO0VBakQvQjtVQW9Eb0Isa0JBQWtCLEVBQUE7RUFwRHRDO1FBMERvQixrQkFBa0IsRUFBQTtFQTFEdEM7UUE4RG9CLG1CQUFtQixFQUFBO0VBOUR2QztRQWtFb0IsZUFBZTtRQUNmLGVBQWU7UUFDZixRQUFRO1FBQ1IsU0FBUztRQUNULGdDQUErQixFQUFBO0VBdEVuRDtNQThFWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHNCQUFzQixFQUFBO0VBaEZsQztRQW1GaUIsZUFBZTtRQUNmLGVBQWUsRUFBQTtFQXBGaEM7VUF1RnFCLGtCQUFrQixFQUFBO0VBdkZ2QztRQTRGaUIsZUFBZTtRQUNmLGVBQWUsRUFBQTtFQTdGaEM7TUFtR1ksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEIsRUFBQTtFQXJHMUM7UUF3R2dCLCtCQUErQjtRQUMvQixtQkFBbUIsRUFBQTtFQXpHbkM7TUErR2dCLGVBQWU7TUFDZixlQUFlLEVBQUE7RUFoSC9CO01BcUhZLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCLEVBQUE7RUF2SDFDO1FBMEhnQixlQUFlO1FBQ2YsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQixrQkFBa0IsRUFBQTtFQWhJbEM7TUFxSVksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEIsRUFBQTtFQXZJMUM7UUEwSWdCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsaUJBQWlCLEVBQUE7RUEvSWpDO01BcUpnQixlQUFlO01BQ2Ysa0JBQWtCLEVBQUE7RUF0SmxDO01BMEpnQixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDZCQUE2QixFQUFBO0VBNUo3QztRQStKb0IseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsbUJBQ0osRUFBQTtFQW5LaEI7TUF5S2dCLGVBQWU7TUFDZixlQUFlLEVBQUE7RUExSy9CO01BOEtnQixrQkFBa0IsRUFBQTtFQTlLbEM7TUFtTFksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEIsRUFBQTtFQXJMMUM7UUF5TGdCLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsaUJBQWlCLEVBQUE7RUEzTGpDO1FBOExnQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb3N0ZXIvZm9zdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc0MDhCO1xyXG4gXHJcbiAgICAucGFnZXtcclxuICAgICAgICAgd2lkdGg6IDcwdnc7XHJcbiAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXZ3O1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgIC5oZWFkaW5ne1xyXG4gICAgICAgICAgICAucGFnZS10aXRsZXtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHRleHQtZW1waGFzaXM6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogNSU7XHJcblxyXG4gICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgdWx7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzE3NDA4QjtcclxuXHJcbiAgICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQzkwODJBO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzE3NDA4QjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC5zdGFydHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgcHsgIFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogNSU7XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zaWRle1xyXG4gICAgICAgICAgICAgICAgaDV7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbWc6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwJSwtMzAlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC5zZl9kZntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogNSU7XHJcblxyXG4gICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgLmRpcmVjdGlvbnN7XHJcbiAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAwJTtcclxuICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC5tZWFue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICAucmlnaHR7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjQzkwODJBO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYXZnc3tcclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiA1JTtcclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRvcDV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogNSU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNDOTA4MkE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAub3RoZXI0e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNDOTA4MkE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5vdGhlcnMtYXZnc3tcclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnR3by1pbWFnZXN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMTc0MDhCO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdW1tYXJ5e1xyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDUlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hdmlnYXRle1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjQzkwODJBO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTc0MDhCO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICB9XHJcbn0gIl19 */"

/***/ }),

/***/ "./src/app/foster/foster.component.ts":
/*!********************************************!*\
  !*** ./src/app/foster/foster.component.ts ***!
  \********************************************/
/*! exports provided: FosterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FosterComponent", function() { return FosterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FosterComponent = /** @class */ (function () {
    function FosterComponent() {
    }
    FosterComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    FosterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-foster',
            template: __webpack_require__(/*! ./foster.component.html */ "./src/app/foster/foster.component.html"),
            styles: [__webpack_require__(/*! ./foster.component.scss */ "./src/app/foster/foster.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FosterComponent);
    return FosterComponent;
}());



/***/ }),

/***/ "./src/app/height/height.component.html":
/*!**********************************************!*\
  !*** ./src/app/height/height.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <div class=\"page\">\n    <div class=\"intro\">\n      <h2><u>HOW DOES HEIGHT AFFECT PLAYER'S STATS?</u></h2>\n      <P>\n        You don't need to be a data scientist to know that height is an important aspect of basketball.  \n         Basketball is a vertical game and the closer to the basket you are the easier the game becomes.  \n         On the flip side however, bigger people tend to be slower and less coordinated and speed and \n         coordination are another two important skills to have.  So how does an NBA players height \n         generally effect their statistical output?  We can compare a player's height to any number of \n         other stats to see if there are coorilations between how tall they are and the numbers they \n         put up.\n      </P>\n      <p>\n        This page will contain all the code writen to obtain our data.  We will only skip over repeated \n        tasks like creating similar charts for various statistical catagories.  The first several lines \n        of code will all have already come up earlier on this site.\n      </p>\n    </div>\n\n    <div class=\"code\">\n      <img src=\"../../assets/screenshots/height/one.png\" width=\"90%\">\n      <p>\n        Cells one through four, <span>shown above</span>, get us set up to do our analysis.  Cell-1 \n        imports the python libraries that we need, cell-2 reads our data file so we have access to our \n        CSV file in Jupyter Notebook.  In cell-3 we take a look at all of our dataframes columns so we \n        know what how our information is organized, and how it can then be sorted.  Cell-4 is really the \n        beginning of our analysis, it displays the average number of minute played per game for every \n        play in every game for all six NBA seasons in our dataframe.<br><br>\n      </p>\n      <img src=\"../../assets/screenshots/height/Screenshot (95).png\" width=\"90%\">\n      <p>\n        We found out in cell-4 that the average number of mins per player per game was a little under 23 \n        MPG.  In cell-5 we then remove any row in which the player played less than 20 minutes in a game.  \n        We don't want to only keep games above the mean, but we do want to get rid of row of players that \n        hardly played as they will throw off our statistical averages.  If a player played at least 20 of \n        48 minutes in a game they had a fair chance to make their contribution.\n      </p>\n      <p>\n        In cell-6 we create a new dataframe that only has a single row for each individual player, and all \n        of their stats are averaged instead of having exact statistics for every single game in six years. \n        We will come back to avgs_df shortly.\n      </p>\n      <p>\n        In cell-7, we once again create a new data frame that only includes player's boxscores from games \n        that they won.  Then we print the first few rows to confirm that the value of the teamRslt column \n        in every row is 'Win'.  \n      </p>\n      <img src=\"../../assets/screenshots/height/three.png\" width=\"90%\">\n      <p>\n        In cell-8 we are adding a new column to the totals_df data frame.  This column will contain the total \n        number of team wins that each player has. Since we removed all Loses from the data frame we can simply \n        count the number of values in the teamRslt column and that is equal to the number of wins that player \n        was a part of.  <span>Note that the warning above is telling us that we are adding a column to a \n        portion of a full dataframe, but we only want to work with a part of the full data frame that we \n        originally started with</span>.\n      </p>\n      <img src=\"../../assets/screenshots/height/four.png\" width=\"90%\">\n      <p>\n        In cell-9 we reduce totals_df down to only two columns, <span>plus the index</span>, into another data \n        frame named player_wins_df.  Cell-10 serves only as a remimder what columns currently exist in avgs._df.  \n        Then in cell-11,the data frames avgs_df and players_win_df are joined together by the shared column \n        playDispNm.  Now we have each players height, and the number of wins they've been a part of together in \n        the same data frame.\n      </p>\n      <img class=\"enlarge\" src=\"../../assets/screenshots/height/five.png\" width=\"90%\">\n      <p>\n        Cell-12 checks how many rows there are in final_df.  Each row is a unique player with the averages from a \n        total of six seasons worth of stats.  We take two steps in cell-13, first we add a column named players@height.\n        All player's height are listed in an exact number of inches, so many players will be listed at the same height.  \n        For each player, the players@height column will be filled with the number of players that are the same height as \n        them (<span>Each player themselves is also included in the count</span>). We are adding this column to further \n        clean our data even further to create our analysis more reliable.  We want to make sure that each listed height \n        has several players at that listed height so indivudla players can't drastically shift our results.  We then \n        remove rows where the value of the players@height column is less than five if there are five players at a \n        given height then we can consider it a reasonable sample size. Checking the new lenght of final_df we can see \n        that we removed 12 players from our data frame.  Two of which were undersized fan favorites Isaiah Thomas and \n        Nate Robinson who are both exceptions  to the generic prerequisites to be an NBA player.\n      </p>\n      <p>\n        Cell-14 sets three new variations of final_df so that we can chart the top ten results when the list is sorted \n        by different columns.  Cell-15 charts the top ten listed heights that resulted in the most team wins.  Cells \n        16 and 17 then chart the the number of wins based on a player's weight, and then a combination of height and \n        weight. <span>The 2nd and 3rd graph mya not be as accurate as the first because we did not clean the data \n        in the weight column so one or two players could have too large a significance on our results</span>.  All \n        three graphs are seen below.\n      </p>\n    </div>\n\n    <div class=\"graphs\">\n      <img src=\"../../assets/charts/height/wins-height.png\" width=\"30%\">\n      <img src=\"../../assets/charts/height/wins-weight.png\" width=\"30%\">\n      <img src=\"../../assets/charts/height/wins-body.png\" width=\"30%\">\n    </div>\n\n    <div class=\"counts\">\n      <p>To the right is a list of how many players were listed at each height.  This list alone is strong indicator \n        of the state of the NBA.  The most common height in our list is 6ft 9in!  And 6ft 6in is the lowest height \n        of the five most common.  There definitetly were fewer players around and under 6ft.\n      </p>\n      <img src=\"../../assets/screenshots/height/seven.png\" width=\"60%\">\n    </div>\n    \n    <div class=\"stats\">\n      <img src=\"../../assets/screenshots/height/eight.png\" width=\"90%\">\n      <p>\n        In cell-19 we set four new variables to see how a player's height compares two four other NBA stats.  We'll \n        check points, assists, rebounds, and 3-Point Fieldgoal Percentage.  Cell-20 show the code to create the graph \n        comparing a player's height to how many points they score per game.  All four graphs can be seen below.\n      </p>\n      <img src=\"../../assets/charts/height/points_height.png\" width=\"90%\">\n      <img src=\"../../assets/charts/height/assists_height.png\" width=\"90%\">\n      <img src=\"../../assets/charts/height/rebounds_height.png\" width=\"90%\">\n      <img src=\"../../assets/charts/height/3pt_pct_height.png\" width=\"90%\">\n    </div>\n\n    <div class=\"navigate\">\n        <a [routerLink]=\"['/foster']\">PREVIOUS PAGE</a>\n      <a [routerLink]=\"['/per']\">NEXT PAGE</a>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/height/height.component.scss":
/*!**********************************************!*\
  !*** ./src/app/height/height.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background-color: #17408B; }\n  .background .page {\n    width: 70vw;\n    margin-left: 15vw;\n    padding: 15px;\n    background-color: #FFFFFF; }\n  .background .page .intro {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .intro h2 {\n        text-align: center; }\n  .background .page .intro p {\n        text-indent: 5%;\n        font-size: 18px;\n        width: 90%; }\n  .background .page .code {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .code p {\n        text-indent: 5%;\n        font-size: 18px;\n        width: 90%; }\n  .background .page .code img {\n        padding-right: 4%; }\n  .background .page .code .enlarge:hover {\n        cursor: pointer;\n        transform: scale(1.5); }\n  .background .page .graphs {\n      display: flex;\n      align-items: center;\n      justify-content: space-around; }\n  .background .page .graphs img {\n        padding: 3px;\n        border: 5px solid #C9082A;\n        border-radius: 5px;\n        background-color: #17408B;\n        transition: all .2s; }\n  .background .page .graphs img:hover {\n        cursor: pointer;\n        transform: scale(2); }\n  .background .page .counts {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .counts p {\n        text-indent: 5%;\n        font-size: 18px;\n        width: 90%;\n        border: 2px solid #C9082A;\n        border-radius: 10px;\n        padding: 10px;\n        margin-left: 5%; }\n  .background .page .stats {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .stats p {\n        text-indent: 5%;\n        font-size: 18px;\n        width: 90%; }\n  .background .page .stats img {\n        padding: 10px; }\n  .background .page .navigate {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .navigate a {\n        color: #C9082A;\n        text-decoration: none;\n        font-weight: bold; }\n  .background .page .navigate a:hover {\n        color: #17408B; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVpZ2h0L0M6XFxVc2Vyc1xcMTg0NzNcXERvY3VtZW50c1xcY29kaW5nLXRlbXBsZVxccHJvamVjdHNcXG5iYS1kYXRhL3NyY1xcYXBwXFxoZWlnaHRcXGhlaWdodC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QixFQUFBO0VBRDdCO0lBSVEsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IseUJBQXlCLEVBQUE7RUFQakM7TUFVWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHNCQUFzQixFQUFBO0VBWmxDO1FBZWdCLGtCQUFrQixFQUFBO0VBZmxDO1FBbUJnQixlQUFlO1FBQ2YsZUFBZTtRQUNmLFVBQVUsRUFBQTtFQXJCMUI7TUEwQlksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixzQkFBc0IsRUFBQTtFQTVCbEM7UUErQmdCLGVBQWU7UUFDZixlQUFlO1FBQ2YsVUFBVSxFQUFBO0VBakMxQjtRQXFDZ0IsaUJBQWlCLEVBQUE7RUFyQ2pDO1FBeUNnQixlQUFlO1FBQ2YscUJBQXFCLEVBQUE7RUExQ3JDO01BK0NZLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsNkJBQTZCLEVBQUE7RUFqRHpDO1FBb0RnQixZQUFZO1FBQ1oseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsbUJBQW1CLEVBQUE7RUF4RG5DO1FBNERnQixlQUFlO1FBQ2YsbUJBQW1CLEVBQUE7RUE3RG5DO01Ba0VZLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCLEVBQUE7RUFwRTFDO1FBdUVnQixlQUFlO1FBQ2YsZUFBZTtRQUNmLFVBQVU7UUFDVix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixlQUFlLEVBQUE7RUE3RS9CO01Ba0ZZLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsc0JBQXNCLEVBQUE7RUFwRmxDO1FBdUZnQixlQUFlO1FBQ2YsZUFBZTtRQUNmLFVBQVUsRUFBQTtFQXpGMUI7UUE2RmdCLGFBQWEsRUFBQTtFQTdGN0I7TUFrR1ksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEIsRUFBQTtFQXBHMUM7UUF3R2dCLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsaUJBQWlCLEVBQUE7RUExR2pDO1FBNkdnQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9oZWlnaHQvaGVpZ2h0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7ICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc0MDhCO1xyXG5cclxuICAgLnBhZ2V7XHJcbiAgICAgICAgd2lkdGg6IDcwdnc7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1dnc7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cclxuICAgICAgICAuaW50cm97XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiA1JTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb2Rle1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiA1JTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLmVubGFyZ2U6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC5ncmFwaHN7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgI0M5MDgyQTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzQwOEI7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbWc6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY291bnRze1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNDOTA4MkE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0YXRze1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiA1JTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYXZpZ2F0ZXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0M5MDgyQTtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzE3NDA4QjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/height/height.component.ts":
/*!********************************************!*\
  !*** ./src/app/height/height.component.ts ***!
  \********************************************/
/*! exports provided: HeightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeightComponent", function() { return HeightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeightComponent = /** @class */ (function () {
    function HeightComponent() {
    }
    HeightComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    HeightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-height',
            template: __webpack_require__(/*! ./height.component.html */ "./src/app/height/height.component.html"),
            styles: [__webpack_require__(/*! ./height.component.scss */ "./src/app/height/height.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeightComponent);
    return HeightComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <div class=\"page\">\n    <h1 class=\"title\"><u>NBA - SICS</u></h1>\n    <p class=\"overview\">\n      Here at NBA-SICS a variety of NBA data hs been manipulated, analyzed,  and displayed in an easy to read format.\n      It is our belief that sports statistics is a fun and easy way to learn the basics of data analysis.  We hope \n      people will find the information on this site both interesting and informative.  Get an understanding of the \n      programs that we will be using and of how we get our data here on the homepage and then go on to navigate the \n      site as you please.\n    </p>\n    <p>\n      The first program you will need to download in order to do the kind of analysis seen on this site is called \n      Anaconda.  <a href=\"https://www.anaconda.com/distribution/\" target=\"_blank\">Anaconda</a> is an open-source prgram that easily \n      allows you to work with multiple coding programs / languages which makes it easy to transition from one program \n      to another.  You can download Anaconda at the link above.  One of the packages included with your Anaconda \n      download is called <a href=\"https://jupyter.org/\" target=\"_blank\">Jupyter Notebook</a>.  It is in Jupyter Notebook that we will \n      perform all of our analysis.   \n    </p>\n    <p>\n      In addition to Jupyter Notebook, you will need to set up a Conda Environment on your machine. You create this \n      envirnment on the command line of your computer.  Follow the instructions <a href=\"https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#creating-an-environment-with-commands\" target=\"_blank\">HERE</a> \n      to create your conda Environment.  There are more links below to videos that can help you acomplishing the \n      requirements listed above.\n    </p>\n  </div>\n</div>\n\n<div class=\"welcome\">\n\n  <div class=\"intro\">\n    <h2><u>Where Does Our Data Come From?</u></h2>\n    <p>\n      Gathering data and displaying it in an easy to read manner is a time consuming task.\n      This site would not be possible if the necesary NBA statistics were not already assembled\n      and presented in an easily manipulated format.  All the information on this site comes directly\n      from databases from kaggle.com. <a href=\"https://kaggle.com/datasets\" target=\"_blank\">KAGGLE</a>  is a crowed-sourced \n      platform that, among other things, allows its users to to submit their own databases and allows other \n      users to download and work with those databases. Thanks to Kaggle, anyone with access to the internet \n      can have almost immediate access to detailed information on a wide range of topics.\n    </p>\n  </div>\n\n  <div class=\"image\">\n      <img class=\"sunset\" src=\"../../assets/images/sunset.jpg\">\n  </div>\n\n  <div class=\"links\">\n    <ul>\n      <h3><u>HELP LINKS</u></h3>\n      <li><a href=\"https://www.youtube.com/watch?v=T8wK5loXkXg\" target=\"_blank\">INSTALL ANACONDA (Windows)</a></li>\n      <li><a href=\"https://www.youtube.com/watch?v=YJC6ldI3hWk&t=3s\" target=\"_blank\">INSTALL ANACONDA (MAC)</a></li>\n      <li><a href=\"https://www.youtube.com/watch?v=3i0YNcgmGZ8\" target=\"_blank\">INSTALL ANACONDA (Linux)</a></li>\n      <li><a href=\"https://www.youtube.com/watch?v=jZ952vChhuI\" target=\"_blank\">INTRO TO JUPYTER NOTEBOOK</a></li>\n      <li><a href=\"https://www.youtube.com/watch?v=EGaw6VXV3GI\" target=\"_blank\">CONDA ENVIRONMENTS</a></li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"background\">\n  <div class=\"page\">\n    <div class=\"jupyter\">\n      <div class=\"imports\">\n        <h2 class=\"page-title\"><u>How Do We Work With Our Data?</u></h2>\n        <p>\n          To perform our data analysis, we will be working in a program called Jupyter Notebook.\n          jupyter.org would define Jupyter Notebook as \"An open-source web application that allows \n          you to create and share documents that contain live code, equations, visualizations and \n          narrative text.\" Here we will go over how to import data files, manipulate those files, \n          and visually display organized information.\n        </p>\n        <img src=\"../../assets/screenshots/home/origin.png\" width=\"70%\">\n        <p>\n          The image above is screenshot taken in Jupyter Notebook.  It is the very beginning of\n          the document.  In this notebook Python is the primary language that jupyter understands\n          and we immediately import the libraries in python that we will be working with. To do \n          basic data analysis in python Pandas, NumPy, and MatPlotLib are the three python libraries\n          that need to be imported into your workspace. We import them as abreviated versions of \n          themselves sothat the full name doesn't need to be typed out each time. Pandas allow you to\n          import files as data frames, or arrays, that can be manipulated.  NumPy is what does all of\n          your mathematical calcualtions for you, it is specifically made to work with numerical arrays.\n          And finally, MatPlotLib is used to visually display your information.<br><br>\n        </p>\n        <p>\n          We then use the function read_csv, which is built into pandas, to bring our file downloaded \n          from Kaggle into our notebook. We set it equal to df for \"Data Frame.\"  The data frame that \n          we are now working with in jupyter notebook contains NBA player box score data from 2012-2018.\n          There will be a row from every player that played in every game for six seasons, so this is a \n          relatively large dataset.\n        </p>\n        <img src=\"../../assets/screenshots/home/df_head.png\" width=\"90%\">\n      </div>\n\n      <div class=\"shape\">\n        <p class=\"frame-shape\">\n          df.head() calls the first five rows of our data frame, <span>you can also put a number inside \n          the parrenthesis to display an exact number of rows</span>. As you can see in the bottom left \n          corner of the image above, the data we called is five rows by 44 columns.  Notice the \"...\" in \n          between the columns 'teamDayOff' and 'playFT%'.  44 columns is too wide to display them \n          all so jupyter notebook displays the first columns and the last columns and informs you \n          that it is not displaying every column. To see the total size of a data frame use the \n          .shape function. This will output the number of rows and the number of columns in a data \n          frame.\n        </p>\n        <img src=\"../../assets/screenshots/home/df_size.png\" class=\"shape-img\" width=\"30%\">\n      </div>\n\n      <p class=\"large\">\n        As you can see to the right, our entire data frame consists of 115,713 rows and 44 columns. There is no \n        good way to look at all of this information at once which is why the tools summarized above \n        are so helpful in analizing large blocks of data.\n      </p>\n\n      <div class=\"example1\">\n        <p>\n          Now that we have access to all of out boxscore data inside of Jupyter Notebook we can begin to manipulate \n          it into cleaner, more organized chunks of data.  For example, lets start by seeing what NBA players scored \n          the most points in the six seasons from 2012-2018.  To do that we would write the code seen below...\n        </p>\n        <img src=\"../../assets/screenshots/home/top_total_code.png\" alt=\"\" width=\"90%\">\n      </div>\n      <div class=\"output\">\n        <p class=\"explain-groupby\">\n          From all 44 columns the only two we need to see which players scored the most points are \"playDispNm\" which \n          is the player's name, and \"playPTS\" which is of course the number points that player scored.  So, in the first \n          line of code we create a new data frame called \"top_total_pts\" which is equal only to the two specified \n          columns from our original data frame \"df\".  In the second line, we reorganize the data that now exists in \n          top_total_pts.  First we use the groupby() function in combination with the .sum() funtion so that now instead \n          of having a row for every game a player played in six years, we will only have a single column for each player.\n          Every other column will total (or sum) every row that exist for a player and provide totals over our six year \n          span. At this point we have the total number of points scored by each player from 2012-2018 but we are specifically \n          interested in which players scored the most points.  So now we will use the sort_values() function to sort our list \n          of names based on how many points they scored.  As a default, the players would be ordered from smallest to largest, \n          but we want the largest numbers first so we include \"ascending=False\" to display our list in descending order.  And \n          Finally, we again use .head() but this time we put the #10 inside so that we will get the top ten results.  The third \n          line simply calls the data frame so that our ntoebook will output our disired information as seen to the right.\n        </p>\n        <img src=\"../../assets/screenshots/home/top_total_output.png\" alt=\"\" width=\"40%\">\n      </div>\n\n      <p class=\"basics\">\n        On the basics page we will go into more detail regarding the leaders in other important statistical catagories as \n        well as an explanation of MatPlotLib which we will use to chart the data we organized on this page.  For many, a visual \n        representation of data is easier to understand compared to the raw data seen above.\n      </p>\n\n    </div>\n\n    <div class=\"navigate\">\n        <a [routerLink]=\"['/basics']\">NEXT PAGE</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome {\n  background-image: url('analytics.jpg');\n  margin: 0;\n  width: 100%; }\n  .welcome .intro {\n    width: 70%;\n    margin-left: 15%;\n    border: 3px solid #FFFFFF;\n    padding: 5px;\n    padding-right: 19px;\n    display: flex;\n    align-items: center;\n    flex-direction: column; }\n  .welcome .intro h2 {\n      text-align: center;\n      color: #FFFFFF; }\n  .welcome .intro p {\n      text-indent: 5%;\n      font-size: 18px;\n      color: #FFFFFF;\n      width: 90%; }\n  .welcome .intro p a {\n        color: #FFFFFF; }\n  .welcome .intro p a:hover {\n        color: #17408B; }\n  .welcome .intro .overview {\n      text-align: center;\n      color: #FFFFFF;\n      font-size: 20px;\n      text-indent: 5%; }\n  .welcome .image {\n    padding-top: 15px; }\n  .welcome .image img {\n      display: flex;\n      align-items: flex-end;\n      justify-content: space-between;\n      width: 22vw;\n      margin-left: 2vw;\n      padding-bottom: 5px; }\n  .welcome .links {\n    color: #FFFFFF;\n    width: 33vw;\n    margin-top: 0;\n    margin-right: 40%;\n    margin-left: 2vw;\n    text-indent: 5%; }\n  .welcome .links ul {\n      margin: 0%; }\n  .welcome .links ul h3 {\n        text-indent: 25%; }\n  .welcome .links ul li {\n        padding-bottom: 15px; }\n  .welcome .links ul li a {\n          color: #FFFFFF;\n          font-size: 20px; }\n  .welcome .links ul li a:hover {\n          color: #17408B; }\n  .background {\n  background-color: #17408B; }\n  .background .page {\n    width: 70%;\n    margin-left: 15%;\n    background-color: #FFFFFF;\n    padding: 15px; }\n  .background .page h1 {\n      text-align: center; }\n  .background .page p {\n      text-indent: 5%;\n      font-size: 18px; }\n  .background .page p a {\n        color: #C9082A; }\n  .background .page p a:hover {\n        color: #17408B; }\n  .background .page .jupyter {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .jupyter .imports {\n        display: flex;\n        align-items: center;\n        flex-direction: column; }\n  .background .page .jupyter .imports p {\n          text-indent: 5%;\n          width: 90%; }\n  .background .page .jupyter .page-title {\n        text-align: center; }\n  .background .page .jupyter p {\n        font-size: 18px; }\n  .background .page .jupyter .shape {\n        display: flex;\n        align-items: center;\n        justify-content: space-around; }\n  .background .page .jupyter .shape .frame-shape {\n          width: 80%;\n          padding-right: 5px;\n          margin: 0;\n          padding-top: 25px;\n          text-indent: 5%; }\n  .background .page .jupyter .shape .frame-shape span {\n            font-style: italic; }\n  .background .page .jupyter .shape .shape-img {\n          padding: 5px;\n          border: 2px solid red;\n          border-radius: 10px; }\n  .background .page .jupyter .large {\n        margin: 0px; }\n  .background .page .jupyter .output {\n        display: flex;\n        align-items: center;\n        justify-content: space-around;\n        text-indent: 5%; }\n  .background .page .jupyter .output .explain-groupby {\n          padding-right: 10px; }\n  .background .page .example1 {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .example1 p {\n        text-indent: 5%; }\n  .background .page .basics {\n      text-indent: 4%;\n      text-align: center;\n      width: 90%; }\n  .background .page .navigate {\n      display: flex;\n      padding-top: 25px;\n      padding-left: 80%; }\n  .background .page .navigate a {\n        color: #C9082A;\n        text-decoration: none;\n        font-weight: bold; }\n  .background .page .navigate a:hover {\n        color: #17408B; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXDE4NDczXFxEb2N1bWVudHNcXGNvZGluZy10ZW1wbGVcXHByb2plY3RzXFxuYmEtZGF0YS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUEwRDtFQUMxRCxTQUFTO0VBQ1QsV0FBVyxFQUFBO0VBSGY7SUFNUSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCLEVBQUE7RUFiOUI7TUFpQlksa0JBQWtCO01BQ2xCLGNBQWMsRUFBQTtFQWxCMUI7TUFzQlksZUFBZTtNQUNmLGVBQWU7TUFDZixjQUFjO01BQ2QsVUFBVSxFQUFBO0VBekJ0QjtRQTRCZ0IsY0FDSixFQUFBO0VBN0JaO1FBK0JnQixjQUFjLEVBQUE7RUEvQjlCO01Bb0NZLGtCQUFrQjtNQUNsQixjQUFjO01BQ2QsZUFBZTtNQUNmLGVBQWUsRUFBQTtFQXZDM0I7SUE2Q1EsaUJBQWlCLEVBQUE7RUE3Q3pCO01BZ0RRLGFBQWE7TUFDYixxQkFBcUI7TUFDckIsOEJBQThCO01BQzlCLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsbUJBQW1CLEVBQUE7RUFyRDNCO0lBMERRLGNBQWM7SUFDZCxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBO0VBL0R2QjtNQWtFWSxVQUFVLEVBQUE7RUFsRXRCO1FBcUVnQixnQkFBZ0IsRUFBQTtFQXJFaEM7UUF5RWdCLG9CQUFvQixFQUFBO0VBekVwQztVQTRFb0IsY0FBYztVQUNkLGVBQWUsRUFBQTtFQTdFbkM7VUFnRm9CLGNBQWMsRUFBQTtFQU9sQztFQUNJLHlCQUF5QixFQUFBO0VBRDdCO0lBSVEsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsYUFBYSxFQUFBO0VBUHJCO01BVVksa0JBQWtCLEVBQUE7RUFWOUI7TUFjWSxlQUFlO01BQ2YsZUFBZSxFQUFBO0VBZjNCO1FBa0JnQixjQUFjLEVBQUE7RUFsQjlCO1FBcUJnQixjQUFjLEVBQUE7RUFyQjlCO01BMEJZLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsc0JBQXNCLEVBQUE7RUE1QmxDO1FBK0JnQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHNCQUFzQixFQUFBO0VBakN0QztVQW9Da0IsZUFBZTtVQUNmLFVBQVUsRUFBQTtFQXJDNUI7UUEwQ2dCLGtCQUFrQixFQUFBO0VBMUNsQztRQThDZ0IsZUFBZSxFQUFBO0VBOUMvQjtRQWtEZ0IsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiw2QkFBNkIsRUFBQTtFQXBEN0M7VUF1RG9CLFVBQVU7VUFDVixrQkFBa0I7VUFDbEIsU0FBUztVQUNULGlCQUFpQjtVQUNqQixlQUFlLEVBQUE7RUEzRG5DO1lBOER3QixrQkFBa0IsRUFBQTtFQTlEMUM7VUFrRW9CLFlBQVk7VUFDWixxQkFBcUI7VUFDckIsbUJBQW1CLEVBQUE7RUFwRXZDO1FBeUVnQixXQUFXLEVBQUE7RUF6RTNCO1FBNkVnQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLDZCQUE2QjtRQUM3QixlQUFlLEVBQUE7RUFoRi9CO1VBbUZvQixtQkFBbUIsRUFBQTtFQW5GdkM7TUEwRlksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixzQkFBc0IsRUFBQTtFQTVGbEM7UUErRmdCLGVBQWUsRUFBQTtFQS9GL0I7TUFvR1ksZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixVQUFVLEVBQUE7RUF0R3RCO01BMEdZLGFBQWE7TUFDYixpQkFBaUI7TUFDakIsaUJBQWlCLEVBQUE7RUE1RzdCO1FBK0dnQixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLGlCQUFpQixFQUFBO0VBakhqQztRQW9IZ0IsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWV7IFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2FuYWx5dGljcy5qcGcnKTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAuaW50cm97XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNGRkZGRkY7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE5cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDUlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG5cclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTc0MDhCO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAub3ZlcnZpZXd7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDUlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuaW1hZ2V7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB3aWR0aDogMjJ2dztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMnZ3O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5saW5rc3tcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICB3aWR0aDogMzN2dztcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAydnc7XHJcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDUlO1xyXG5cclxuICAgICAgICB1bHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwJTtcclxuXHJcbiAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDI1JTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxNzQwOEI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3NDA4QjtcclxuIFxyXG4gICAgLnBhZ2V7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuXHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiA1JTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjQzkwODJBO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzE3NDA4QjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmp1cHl0ZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICAuaW1wb3J0c3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogNSU7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wYWdlLXRpdGxle1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2hhcGV7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICAgICAgICAgICAgICAgIC5mcmFtZS1zaGFwZXtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDUlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNoYXBlLWltZ3tcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGFyZ2V7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm91dHB1dHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogNSU7XHJcblxyXG4gICAgICAgICAgICAgICAgLmV4cGxhaW4tZ3JvdXBieXtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLmV4YW1wbGUxe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiA1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJhc2ljc3tcclxuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDQlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmF2aWdhdGV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDgwJTtcclxuXHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0M5MDgyQTtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzE3NDA4QjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div id=\"logo\"></div>\n</header>\n\n<nav>\n  <a [routerLink]=\"['/']\">HOME</a>\n  <a [routerLink]=\"['/basics']\">BASICS</a>\n  <a [routerLink]=\"['/stat-leaders']\">STAT LEADERS</a>\n  <a [routerLink]=\"['/foster']\">ROCKETS  v.<br> SCOTT FOSTER</a>\n  <a [routerLink]=\"['/height']\">STATS BY<br>PLAYER HEIGHT</a>\n  <a [routerLink]=\"['/per']\">P.E.R. /<br> 16 SEASONS</a>\n  <a [routerLink]=\"['/per-advanced-stats']\">ADVANCED STAT<br> COMPARISONS</a>\n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  height: 100px; }\n  header #logo {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    background: url('fireball.jpeg');\n    background-size: 105px 100px;\n    background-repeat: repeat-x; }\n  header #logo .fireball {\n      width: 100px;\n      height: 100px; }\n  nav {\n  display: flex;\n  height: 50px;\n  width: 100%;\n  font-size: 12px;\n  justify-content: space-around;\n  align-items: center;\n  background-color: #C9082A;\n  font-weight: bold; }\n  nav a {\n    color: #FFFFFF;\n    transition: all .2s ease;\n    text-decoration: none !important;\n    text-align: center; }\n  nav a:hover {\n    cursor: pointer;\n    transform: scale(1.8);\n    color: #17408B; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxVc2Vyc1xcMTg0NzNcXERvY3VtZW50c1xcY29kaW5nLXRlbXBsZVxccHJvamVjdHNcXG5iYS1kYXRhL3NyY1xcYXBwXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTtFQUpqQjtJQU9RLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdDQUFvRDtJQUNwRCw0QkFBNEI7SUFDNUIsMkJBQTJCLEVBQUE7RUFabkM7TUFlWSxZQUFXO01BQ1gsYUFBYSxFQUFBO0VBS3pCO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBO0VBUnJCO0lBV1ksY0FBYztJQUNkLHdCQUF3QjtJQUN4QixnQ0FBZ0M7SUFDaEMsa0JBQWtCLEVBQUE7RUFkOUI7SUFrQlksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICAgICNsb2dvIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmlyZWJhbGwuanBlZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTA1cHggMTAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG5cclxuICAgICAgICAuZmlyZWJhbGx7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDOTA4MkE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuOCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTc0MDhCO1xyXG4gICAgICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/per-advanced-stats/per-advanced-stats.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/per-advanced-stats/per-advanced-stats.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <div class=\"page\">\n    <div class=\"heading\">\n      <h2><u>ADVANCED STAT COMPARISONS</u></h2>\n      <p>\n        Player Efficiency Rating is one of many <span>Advanced Stats</span> that are used in the NBA to \n        help better understand a player's contribution to a team.  It always allows comparisons of players \n        from different NBA eras.  For example, in recent years scoring has gone up significantly.  In the \n        2017-18 NBA season, the average number of points per game was 106.3 PPG up from 95.6 during the \n        1997-98 season.  We would want those number to be relative when comping the offesnive out put of \n        Devin Booker and Michael Jordan.  On this page, we compare the relationship between PER and other \n        advanced stats.  Some of the stats we will be comparing to PER are <span>Usage Rate</span> (USG), \n        <span>Value Added</span> (VA), and <span>Estimated Wins Added</span> (EWA).\n      </p>\n\n      <p>\n        Below is an example of the code we will use to create scatter plots of the 1,000 highest PER seasons\n        compared to the other stats listed above.  Several of such plots can be found below.\n      </p>\n\n      <img src=\"../../assets/screenshots/adv-stat-comps/Screenshot (105).png\" width=\"90%\">\n      <img src=\"../../assets/charts/adv-stat-comps/per-usg.png\" width=\"90%\">\n      <img src=\"../../assets/charts/adv-stat-comps/per-va.png\" width=\"90%\">\n      <img src=\"../../assets/charts/adv-stat-comps/per-ewa.png\" width=\"90%\">\n      <img src=\"../../assets/charts/adv-stat-comps/per-mpg.png\" width=\"90%\">\n\n      <p>\n        As you can see all four graphs above, especially the first three, follow a very similar pattern.  That is \n        not surprising as all the statistics we compared would all be considered positive statistics, meaning that \n        a higher value for any of them would imply a better basketball player, while having a high turnover ratio \n        would indicated a less talented basketball player.  We can also see the relative accuracy of all of these \n        statistics by the way no individual, basic stat, can disproportionately impact the whole of an advanced \n        stat.<br><br>\n        You can see an inverse relationship in the graph below where PER is compared against the previsouly \n        mentioned Turnover Ratio. Notice that where the turnover ratio is at its highest is where PER is at \n        its lowest.\n      </p>\n\n      <img src=\"../../assets/charts/adv-stat-comps/per-to.png\" width=\"90%\">\n\n      <div class=\"navigate\">\n        <a [routerLink]=\"['/per']\">PREVIOUS PAGE</a>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/per-advanced-stats/per-advanced-stats.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/per-advanced-stats/per-advanced-stats.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background-color: #17408B; }\n  .background .page {\n    width: 70vw;\n    margin-left: 15vw;\n    padding: 15px;\n    background-color: #FFFFFF; }\n  .background .page .heading {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .heading h2 {\n        text-align: center; }\n  .background .page .heading p {\n        text-indent: 5%;\n        font-size: 18px;\n        width: 90%; }\n  .background .page .heading img {\n        margin-bottom: 10%;\n        padding: 5px;\n        border: 3px solid #17408B; }\n  .background .page .navigate {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .navigate a {\n        color: #C9082A;\n        text-decoration: none;\n        font-weight: bold; }\n  .background .page .navigate a:hover {\n        color: #17408B; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyLWFkdmFuY2VkLXN0YXRzL0M6XFxVc2Vyc1xcMTg0NzNcXERvY3VtZW50c1xcY29kaW5nLXRlbXBsZVxccHJvamVjdHNcXG5iYS1kYXRhL3NyY1xcYXBwXFxwZXItYWR2YW5jZWQtc3RhdHNcXHBlci1hZHZhbmNlZC1zdGF0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QixFQUFBO0VBRDdCO0lBSVEsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IseUJBQXlCLEVBQUE7RUFQakM7TUFVWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHNCQUFzQixFQUFBO0VBWmxDO1FBZWdCLGtCQUFrQixFQUFBO0VBZmxDO1FBbUJnQixlQUFlO1FBQ2YsZUFBZTtRQUNmLFVBQVUsRUFBQTtFQXJCMUI7UUF5QmdCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1oseUJBQ0osRUFBQTtFQTVCWjtNQWdDWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDhCQUE4QixFQUFBO0VBbEMxQztRQXFDZ0IsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixpQkFBaUIsRUFBQTtFQXZDakM7UUEwQ2dCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Blci1hZHZhbmNlZC1zdGF0cy9wZXItYWR2YW5jZWQtc3RhdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHsgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzQwOEI7XHJcblxyXG4gICAucGFnZXtcclxuICAgICAgICB3aWR0aDogNzB2dztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTV2dztcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblxyXG4gICAgICAgIC5oZWFkaW5ne1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzE3NDA4QlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmF2aWdhdGV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0M5MDgyQTtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzE3NDA4QjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/per-advanced-stats/per-advanced-stats.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/per-advanced-stats/per-advanced-stats.component.ts ***!
  \********************************************************************/
/*! exports provided: PerAdvancedStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerAdvancedStatsComponent", function() { return PerAdvancedStatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PerAdvancedStatsComponent = /** @class */ (function () {
    function PerAdvancedStatsComponent() {
    }
    PerAdvancedStatsComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    PerAdvancedStatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-per-advanced-stats',
            template: __webpack_require__(/*! ./per-advanced-stats.component.html */ "./src/app/per-advanced-stats/per-advanced-stats.component.html"),
            styles: [__webpack_require__(/*! ./per-advanced-stats.component.scss */ "./src/app/per-advanced-stats/per-advanced-stats.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PerAdvancedStatsComponent);
    return PerAdvancedStatsComponent;
}());



/***/ }),

/***/ "./src/app/per/per.component.html":
/*!****************************************!*\
  !*** ./src/app/per/per.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <div class=\"page\"> \n    <div class=\"per-heading\">\n      <h2 class=\"page-title\"><u>PLAYER EFFICIENCY RATING</u></h2>\n      <p> \n        Player Efficiency Rating, or PER, is an NBA advanced stat that can be used to determine the quality\n        of play of individual players. Since a team needs different players to fill different roles, no classic\n        statistic will be an adequate identifier of how good a player is performing. John Hollinger, a columnist\n        at ESPN came up with the formuala for PER as a way to have a single stat to quantify the value of a players\n        contribution to his team. And although the statistic is far from perfect it remains a strong indicator of\n        a players value. (See the formual for PER and learn more about it at \n        <a href=\"https://www.basketball-reference.com/about/per.html/\" target=\"_blank\">basketball-reference.com</a>).\n      </p>\n    </div> \n\n    <div class=\"sixteen\">\n      <p>\n        PER can be used to compare two players against one another, even if ones a guard and the other's a center,\n        but it can also be using to track an individual players overall performance over an extended period of time.\n        In this example we are working with season-long player stats beginning with the 2002/03 season through the\n        2017/18 season, a range of 16 years. To the right, you can see a portion of the raw data that we pulled from \n        <a href=\"https://www.kaggle.com/datasets\" target=\"_blank\">Kaggle</a>.\n      </p>\n      <img src=\"../../assets/screenshots/per/raw-data.png\" alt=\"\" width=\"60%\">\n    </div>\n    <div class=\"ten416\">\n      <p>\n        In this image you can see the top PER performers from the 2002/03 season. Each row in the table\n        contains one players statistical information for one season.  This file contains information on 16 seasons,\n        so the most rows any given player could have is 16. Coincdnetly, there are exactly ten players who played\n        in all 16 season from 2002 through 2017 and it is those players that we will be looking at. More specifically,\n        we will look at each player's PER by year to see if there is any corilation between the players by year....\n        Does each player have a steady decline as they get older? Do any players get better with age? Was a specific \n        year better or worse for these players accross the board? Using basic data analysis tools we can answer all of \n        these questions, and many more. \n      </p>\n      <p>\n        So how did we find out that that there were ten  players whos played in all 16 seasons we are working with?  \n        We know that each player shows up once per season, so we know that the number of times a player appears is \n        equal to the number of seasons they played.  So how to we go about totaling the number of seasons each player \n        played?  And how to we make that number available to us in our data frame?\n      </p>\n      <img src=\"../../assets/screenshots/per/tenby16.png\" width=\"80%\">\n      <p>\n        What we need to do is count the number of times each player appears, and then append that number to each row. \n        <span>If a player played in 16 seasons, the number 16 should appear in all 16 of that players rows.</span>  \n        In the image above, cells one and two were importing the needed librarys and reading our CSV file as we have\n        done before.  In cell three we view all the columns to we know what data we do or don't have, <span>note that \n        this dataset has far less columns then the sets we've used previously.</span> In cell four, we are adding a \n        new column to our data frame that we will name <span>COUNTS</span>.  The right side of the equation in cell four \n        determines what value will be filled into each row in the <span>COUNTS</span> column.  We group the data frame by each \n        player's name and then count the number <span>PER</span> values each player have that 'count' is then the value \n        added in the <span>COUNTS</span> column.  When we print our the columns again we can now see that <span>COUNTS</span>\n        is the last column in our data frame. In cell five we determine how many players played in all sixteen seasons.  We \n        limit our data frame to inlcude only rows where the value of <span>COUNTS</span> is equal to 16.  We then need to \n        divide that number by 16 because each player in that set appears 16 times and we only want to know one instance of \n        each player.  \n    </div>\n\n    <div class=\"ten-players\">\n      <div class=\"all-16\">\n        <p>Here we set a new data frame, <span>df_16</span>, to only include the ten players that played all sixteen seasons.</p>\n        <img src=\"../../assets/screenshots/per/df_16.png\" width=\"80%\">\n      </div>\n      <div class=\"each-player\">\n        <p>And then here we break that data frame down even samller into ten new ones.  (<span>One data frame for each player</span>)</p>\n        <img src=\"../../assets/screenshots/per/ten_df_16.png\" width=\"80%\">\n      </div>\n    </div>\n\n    <div class=\"per-graph-code\">\n      <p>\n        We can now create line graphs for each player that demsontrate their PER by season.  below is the code used to create the graph of \n        Dirk Nowitzki, but for all the players the code remains the same other than which data frame we're using, the graph's title, and \n        of course the name of the jpeg file.\n      </p>\n      <img src=\"../../assets/screenshots/per/line_plot.png\" width=\"80%\">\n      <p>\n        Below are the charted PER stats for each player.  Note that the scale of these charts are not identical (<span>the range of the \n          y-axis' are different</span>).  This is because these charts are meant to clearly display the fluctuation of each player's \n          efficiency on a year to year basis and not to compare one player to another.\n      </p>\n    </div>\n\n    <div class=\"graphs\">\n      <div class=\"fiveg\">\n        <img src=\"../../assets/charts/player_rating/dirk_per.png\" width=\"19%\">\n        <img src=\"../../assets/charts/player_rating/jamal_per.png\" width=\"19%\">\n        <img src=\"../../assets/charts/player_rating/jason_per.png\" width=\"19%\">\n        <img src=\"../../assets/charts/player_rating/joe_per.png\" width=\"19%\">\n        <img src=\"../../assets/charts/player_rating/manu_per.png\" width=\"19%\">\n        <img src=\"../../assets/charts/player_rating/pau_per.png\" width=\"19%\">\n        <img src=\"../../assets/charts/player_rating/tony_per.png\" width=\"19%\">\n        <img src=\"../../assets/charts/player_rating/tyson_per.png\" width=\"19%\">\n        <img src=\"../../assets/charts/player_rating/vince_per.png\" width=\"19%\">\n        <img src=\"../../assets/charts/player_rating/zach_per.png\" width=\"19%\">\n      </div>\n\n      <div class=\"graph-sum\">\n        <p>\n          There are far too many unknowns to take too much away from these graphs.  For example, they do not consider the players actual \n          age or what team they are on. Playing around other good players will lift your own level of play and inversely it is dificult to \n          perform well when you don't have other strong players around you.  These graphs do indicate that there is not a linear trajectory \n          of a players career, <span>players are always going to have their ups and their downs</span>.  Beyond that the only CLEAR takeaway\n          is the obvious one is that as players age their bodies physically deteriorate and their performance will suffer later in their \n          careers.  Regardless of their level of performance playing at least 16 years in the NBA is a noteworthy feat in and of itself.\n        </p>\n      </div>\n      <hr>\n\n      <div class=\"all-in-one\">\n        <p>\n          Below we can see how these ten players player efficiency ratings compare to one another, the code to plot this graph can be found \n          at the bottom.\n        </p>\n        <img src=\"../../assets/charts/player_rating/all_per.png\" width=\"90%\">\n        <h3>CODE BELOW...</h3>\n        <hr><hr><hr><hr><hr>\n        <img src=\"../../assets/screenshots/per/all_per_graph_code.png\" width=\"90%\">\n      </div>\n    </div>\n\n    <div class=\"navigate\">\n        <a [routerLink]=\"['/height']\">PREVIOUS PAGE</a>\n        <a [routerLink]=\"['/per-advanced-stats']\">NEXT PAGE</a>\n    </div>\n    \n  </div>\n</div>   "

/***/ }),

/***/ "./src/app/per/per.component.scss":
/*!****************************************!*\
  !*** ./src/app/per/per.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background-color: #17408B; }\n  .background .page {\n    width: 70vw;\n    margin-left: 15vw;\n    padding: 15px;\n    background-color: #FFFFFF; }\n  .background .page .per-heading .page-title {\n      text-align: center; }\n  .background .page .per-heading p {\n      text-indent: 5%;\n      font-size: 18px; }\n  .background .page .per-heading p a {\n        color: #C9082A; }\n  .background .page .per-heading p a:hover {\n        color: #17408B; }\n  .background .page .sixteen {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .sixteen p {\n        padding-right: 25px;\n        text-indent: 10%;\n        font-size: 18px; }\n  .background .page .sixteen p a {\n          color: #C9082A; }\n  .background .page .sixteen p a:hover {\n          color: #17408B; }\n  .background .page .sixteen img:hover {\n        cursor: pointer;\n        transform: scale(1.5); }\n  .background .page .ten416 {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .ten416 p {\n        text-indent: 5%;\n        font-size: 18px; }\n  .background .page .ten416 p span {\n          font-style: italic; }\n  .background .page .ten-players {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding-bottom: 20px; }\n  .background .page .ten-players .all-16 {\n        width: 40%;\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        border: 2px solid #C9082A;\n        border-radius: 10px;\n        margin-right: 20px;\n        padding-bottom: 10px; }\n  .background .page .ten-players .all-16 p {\n          width: 60%;\n          text-align: center;\n          font-size: 18px; }\n  .background .page .ten-players .all-16 p span {\n            font-style: italic; }\n  .background .page .ten-players .each-player {\n        width: 60%;\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        border: 2px solid #C9082A;\n        border-radius: 10px;\n        padding-bottom: 10px; }\n  .background .page .ten-players .each-player p {\n          width: 85%;\n          text-align: center;\n          text-indent: 5%;\n          font-size: 18px; }\n  .background .page .ten-players .each-player p span {\n            font-style: italic; }\n  .background .page .per-graph-code {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .per-graph-code p {\n        font-size: 18px;\n        text-indent: 5%; }\n  .background .page .per-graph-code p span {\n          font-style: italic; }\n  .background .page .per-graph-code img {\n        padding-bottom: 30px; }\n  .background .page .graphs .fiveg img {\n      padding: 3px;\n      border: 1px solid #C9082A;\n      border-radius: 5px;\n      background-color: #17408B;\n      transition: all .2s; }\n  .background .page .graphs .fiveg img:hover {\n      cursor: pointer;\n      transform: scale(2); }\n  .background .page .graphs .graph-sum p {\n      font-size: 18px;\n      text-indent: 5%; }\n  .background .page .graphs .graph-sum p span {\n        font-style: italic; }\n  .background .page .graphs .all-in-one {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .graphs .all-in-one p {\n        font-size: 28px;\n        text-align: center; }\n  .background .page .graphs .all-in-one h3 {\n        padding-top: 50px;\n        text-align: center; }\n  .background .page .graphs .all-in-one hr {\n        padding: 20px;\n        color: #C9082A;\n        background-color: #C9082A;\n        width: 90%; }\n  .background .page .graphs .all-in-one img {\n        padding: 20px; }\n  .background .page .navigate {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .navigate a {\n        color: #C9082A;\n        text-decoration: none;\n        font-weight: bold; }\n  .background .page .navigate a:hover {\n        color: #17408B; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyL0M6XFxVc2Vyc1xcMTg0NzNcXERvY3VtZW50c1xcY29kaW5nLXRlbXBsZVxccHJvamVjdHNcXG5iYS1kYXRhL3NyY1xcYXBwXFxwZXJcXHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QixFQUFBO0VBRDdCO0lBSVEsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IseUJBQXlCLEVBQUE7RUFQakM7TUFXZ0Isa0JBQWtCLEVBQUE7RUFYbEM7TUFlZ0IsZUFBZTtNQUNmLGVBQWUsRUFBQTtFQWhCL0I7UUFtQm9CLGNBQWMsRUFBQTtFQW5CbEM7UUFzQm9CLGNBQWMsRUFBQTtFQXRCbEM7TUE2QlksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEIsRUFBQTtFQS9CMUM7UUFtQ2dCLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsZUFBZSxFQUFBO0VBckMvQjtVQXlDb0IsY0FBYyxFQUFBO0VBekNsQztVQTRDb0IsY0FBYyxFQUFBO0VBNUNsQztRQWlEZ0IsZUFBZTtRQUNmLHFCQUFxQixFQUFBO0VBbERyQztNQXVEWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHNCQUFzQixFQUFBO0VBekRsQztRQTREZ0IsZUFBZTtRQUNmLGVBQWUsRUFBQTtFQTdEL0I7VUFnRW9CLGtCQUFrQixFQUFBO0VBaEV0QztNQXNFWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDhCQUE4QjtNQUM5QixvQkFBb0IsRUFBQTtFQXpFaEM7UUE0RWdCLFVBQVU7UUFDVixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixvQkFBb0IsRUFBQTtFQW5GcEM7VUFzRm9CLFVBQVU7VUFDVixrQkFBa0I7VUFDbEIsZUFBZSxFQUFBO0VBeEZuQztZQTJGd0Isa0JBQWtCLEVBQUE7RUEzRjFDO1FBa0dnQixVQUFVO1FBQ1YsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQixvQkFBb0IsRUFBQTtFQXhHcEM7VUEyR29CLFVBQVU7VUFDVixrQkFBa0I7VUFDbEIsZUFBZTtVQUNmLGVBQWUsRUFBQTtFQTlHbkM7WUFpSHdCLGtCQUFrQixFQUFBO0VBakgxQztNQXdIWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHNCQUFzQixFQUFBO0VBMUhsQztRQTZIZ0IsZUFBZTtRQUNmLGVBQWUsRUFBQTtFQTlIL0I7VUFpSW9CLGtCQUFrQixFQUFBO0VBakl0QztRQXNJZ0Isb0JBQW9CLEVBQUE7RUF0SXBDO01BNklvQixZQUFZO01BQ1oseUJBQXlCO01BQ3pCLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIsbUJBQW1CLEVBQUE7RUFqSnZDO01BcUpvQixlQUFlO01BQ2YsbUJBQW1CLEVBQUE7RUF0SnZDO01BNEpvQixlQUFlO01BQ2YsZUFBZSxFQUFBO0VBN0puQztRQWdLd0Isa0JBQWtCLEVBQUE7RUFoSzFDO01Bc0tnQixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHNCQUFzQixFQUFBO0VBeEt0QztRQTJLb0IsZUFBZTtRQUNmLGtCQUFrQixFQUFBO0VBNUt0QztRQWdMb0IsaUJBQWlCO1FBQ2pCLGtCQUFrQixFQUFBO0VBakx0QztRQXFMb0IsYUFBYTtRQUNiLGNBQWM7UUFDZCx5QkFBeUI7UUFDekIsVUFBVSxFQUFBO0VBeEw5QjtRQTRMb0IsYUFBYSxFQUFBO0VBNUxqQztNQW1NWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDhCQUE4QixFQUFBO0VBck0xQztRQXlNZ0IsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixpQkFBaUIsRUFBQTtFQTNNakM7UUE4TWdCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Blci9wZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHsgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzQwOEI7XHJcblxyXG4gICAucGFnZXtcclxuICAgICAgICB3aWR0aDogNzB2dztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTV2dztcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblxyXG4gICAgICAgIC5wZXItaGVhZGluZ3tcclxuICAgICAgICAgICAgLnBhZ2UtdGl0bGV7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogNSU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0M5MDgyQTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxNzQwOEI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC5zaXh0ZWVue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG5cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogMTAlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNDOTA4MkE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTc0MDhCO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbWc6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZW40MTZ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGVuLXBsYXllcnN7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAuYWxsLTE2e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNDOTA4MkE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5lYWNoLXBsYXllcntcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjQzkwODJBO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBlci1ncmFwaC1jb2Rle1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiA1JTtcclxuXHJcbiAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ncmFwaHN7XHJcbiAgICAgICAgICAgIC5maXZlZ3tcclxuICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0M5MDgyQTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3NDA4QjtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGltZzpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmdyYXBoLXN1bXtcclxuICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiA1JTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYWxsLWluLW9uZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGhye1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNDOTA4MkE7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0M5MDgyQTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmF2aWdhdGV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNDOTA4MkE7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxNzQwOEI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/per/per.component.ts":
/*!**************************************!*\
  !*** ./src/app/per/per.component.ts ***!
  \**************************************/
/*! exports provided: PerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerComponent", function() { return PerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PerComponent = /** @class */ (function () {
    function PerComponent() {
    }
    PerComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    PerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-per',
            template: __webpack_require__(/*! ./per.component.html */ "./src/app/per/per.component.html"),
            styles: [__webpack_require__(/*! ./per.component.scss */ "./src/app/per/per.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PerComponent);
    return PerComponent;
}());



/***/ }),

/***/ "./src/app/stat-leaders/stat-leaders.component.html":
/*!**********************************************************!*\
  !*** ./src/app/stat-leaders/stat-leaders.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <div class=\"page\">\n    <div class=\"points\">\n      <h2 class=\"page-title\"><u>POINT LEADERS</u></h2>\n      <p>\n        Let's again look at our chart of total points scored from 2012-18 and compare that against the \n        points per game average, or PPG, and see how those charts compare to one another.  We would obviosuly \n        expect a direct relationship between the total number of points, and the average number of points \n        scored in each indivudual game.\n      </p>\n      <div class=\"point-charts\">\n        <img src=\"../../assets/charts/leaders/nba_point_leaders.png\" width=\"45%\">\n        <img src=\"../../assets/charts/leaders/nba_ppg_leaders.png\" width=\"45%\">\n      </div>\n      <p>\n        If you review the two charts above, you will quickyl recognize some \n        similarities bewteen the two.  For example,  The top five total point \n        scorers are the exact same top five as the PPG leaders.  With only ten \n        spots on each list, there are eight players that appear on both lists.  \n        None of that should be particularly surprising because every team plays \n        the same number of games so the highest per game averages should also be \n        the overall point leaders.\n      </p>\n      <p>\n        let's then take a look at the the outlyers, or the two players on each list \n        that do not appear on the other...  The two players were made the PPG list but \n        not the total points list were DeMarcus Cousins and Kobe Bryant, and with basic \n        knowledge of the NBA it is rather  easy to figure out why despite having high \n        PPG numbers but not total points.  DeMarcus Cousins has suffered multiple serious \n        injurys over the last few years meaning he didn't play in a large number of games \n        despite his strong performce when he does play.  Kobe Bryant also missed time due\n        to injury, but the real reason he hasn't played nearly as many games as the players \n        on the Point Leaders chart because he retired following the 2015/16 NBA season which \n        means that there were two full years, or 164 games that he missed at the end of our \n        range from 2012-2018.\n      </p>\n      <p>\n        Not always, but frequently you will need to have some understanding of the data you're \n        working with so you can make accurate inferences regarding the outcome of you're data analysis.\n        Now review the the graphs below and see if you can find any relationships between the various \n        statistics.\n      </p>\n      <hr>\n    </div>\n\n    <div class=\"graphs\">\n      <h2><u>OTHER STAT LEADERS</u></h2>\n      <div class=\"section\">\n        <img src=\"../../assets/charts/leaders/nba_3PM_leaders.png\" width=\"45%\">\n        <img src=\"../../assets/charts/leaders/nba_3PA_leaders.png\" width=\"45%\">\n      </div>\n      <hr>\n      <div class=\"section\">\n        <img src=\"../../assets/charts/leaders/nba_ast_leaders.png\" width=\"45%\">\n        <img src=\"../../assets/charts/leaders/nba_turnover_leaders.png\" width=\"45%\">\n      </div>\n      <hr>\n      <div class=\"section\">\n        <img src=\"../../assets/charts/leaders/nba_wins_leaders.png\" width=\"45%\">\n        <img src=\"../../assets/charts/leaders/nba_minutes_played_leaders.png\" width=\"45%\">\n      </div>\n      <hr>\n    </div>\n\n    <p>\n      With zero knowledge regarding the NBA, the eight graphs on this page can still \n      provide some valuable information.  However for those who do know the NBA in \n      some detail can take away much more and will truely understand why certain \n      players are or are not on these top ten lists.  Knowing each players team is \n      also an important factor that these graphs don't display but would be consdiered \n      \"common knowledge\" to millions of people. <span>Especially when cosnidering the \n      bottom two that compare team wins and MPG of each individual player.</span>\n    </p>\n\n    <!-- <div class=\"form\">\n      <h3>Using your own NBA knowledge in conjunction with the charts above, what inferences can you make?</h3>\n      <form class=\"inferences\">\n        <input name=\"name\" type=\"text\" placeholder=\"ENTER YOUR NAME\" class=\"input\"><br>\n        <textarea name=\"analysis\" rows=\"10\" cols=\"30\" placeholder=\"WRITE OUT YOUR ANALYSIS HERE...\" class=\"input\"></textarea><br>\n        <button onclick=\"submitAnalysis()\" class=\"submit-btn\" type=\"button\">SUBMIT ANALYSIS</button>\n      </form>\n    </div> -->\n\n    <div class=\"navigate\">\n        <a [routerLink]=\"['/basics']\">PREVIOUS PAGE</a>\n        <a [routerLink]=\"['/foster']\">NEXT PAGE</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/stat-leaders/stat-leaders.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/stat-leaders/stat-leaders.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background-color: #17408B; }\n  .background .page {\n    width: 70vw;\n    padding: 15px;\n    margin-left: 15vw;\n    background-color: white; }\n  .background .page p {\n      text-indent: 5%; }\n  .background .page .points {\n      font-size: 18px;\n      text-indent: 5%; }\n  .background .page .points .page-title {\n        text-align: center; }\n  .background .page .points .point-charts {\n        display: flex;\n        align-items: center;\n        justify-content: space-around; }\n  .background .page .graphs .section {\n      display: flex;\n      align-items: center;\n      justify-content: space-around; }\n  .background .page .graphs h2 {\n      text-align: center; }\n  .background .page p {\n      font-size: 18px; }\n  .background .page p span {\n        font-style: italic; }\n  .background .page .form {\n      padding-bottom: 50px; }\n  .background .page .form h3 {\n        text-align: center; }\n  .background .page .form .inferences .input {\n        width: 60%;\n        margin-top: 15px;\n        margin-left: 20%;\n        color: #C9082A;\n        background-color: rgba(0, 0, 0, 0.9);\n        font-size: 18px; }\n  .background .page .form .inferences .submit-btn {\n        margin-top: 15px;\n        margin-left: 20%;\n        font-weight: 600;\n        color: #17408B;\n        background-color: #FFFFFF;\n        border: 2px solid #C9082A; }\n  .background .page .navigate {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .navigate a {\n        color: #C9082A;\n        text-decoration: none;\n        font-weight: bold; }\n  .background .page .navigate a:hover {\n        color: #17408B; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdC1sZWFkZXJzL0M6XFxVc2Vyc1xcMTg0NzNcXERvY3VtZW50c1xcY29kaW5nLXRlbXBsZVxccHJvamVjdHNcXG5iYS1kYXRhL3NyY1xcYXBwXFxzdGF0LWxlYWRlcnNcXHN0YXQtbGVhZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QixFQUFBO0VBRDdCO0lBSVMsV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUJBQXVCLEVBQUE7RUFQaEM7TUFVYSxlQUFlLEVBQUE7RUFWNUI7TUFlWSxlQUFlO01BQ2YsZUFBZSxFQUFBO0VBaEIzQjtRQW1CaUIsa0JBQWtCLEVBQUE7RUFuQm5DO1FBd0JnQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLDZCQUE2QixFQUFBO0VBMUI3QztNQWdDZ0IsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw2QkFBNkIsRUFBQTtFQWxDN0M7TUFzQ2lCLGtCQUFrQixFQUFBO0VBdENuQztNQTJDYSxlQUFlLEVBQUE7RUEzQzVCO1FBOENpQixrQkFBa0IsRUFBQTtFQTlDbkM7TUFtRFksb0JBQW9CLEVBQUE7RUFuRGhDO1FBc0RnQixrQkFBa0IsRUFBQTtFQXREbEM7UUEyRG9CLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxvQ0FBaUM7UUFDakMsZUFBZSxFQUFBO0VBaEVuQztRQW9Fb0IsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLHlCQUF5QjtRQUN6Qix5QkFBeUIsRUFBQTtFQXpFN0M7TUErRVksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEIsRUFBQTtFQWpGMUM7UUFxRmdCLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsaUJBQWlCLEVBQUE7RUF2RmpDO1FBMEZnQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdGF0LWxlYWRlcnMvc3RhdC1sZWFkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc0MDhCO1xyXG4gXHJcbiAgICAucGFnZXtcclxuICAgICAgICAgd2lkdGg6IDcwdnc7XHJcbiAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXZ3O1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICB0ZXh0LWluZGVudDogNSU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgXHJcblxyXG4gICAgICAgICAucG9pbnRze1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiA1JTtcclxuXHJcbiAgICAgICAgICAgICAucGFnZS10aXRsZXtcclxuICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLnBvaW50LWNoYXJ0c3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgLmdyYXBoc3tcclxuICAgICAgICAgICAgIC5zZWN0aW9ue1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcblxyXG4gICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC5mb3Jte1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuXHJcbiAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaW5mZXJlbmNlc3tcclxuICAgICAgICAgICAgICAgIC5pbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0M5MDgyQTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4OyAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc3VibWl0LWJ0bntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxNzQwOEI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjQzkwODJBO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC5uYXZpZ2F0ZXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0M5MDgyQTtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzE3NDA4QjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/stat-leaders/stat-leaders.component.ts":
/*!********************************************************!*\
  !*** ./src/app/stat-leaders/stat-leaders.component.ts ***!
  \********************************************************/
/*! exports provided: StatLeadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatLeadersComponent", function() { return StatLeadersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatLeadersComponent = /** @class */ (function () {
    function StatLeadersComponent() {
    }
    StatLeadersComponent.prototype.submitAnalysis = function () {
        console.log(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"].name);
    };
    StatLeadersComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    StatLeadersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stat-leaders',
            template: __webpack_require__(/*! ./stat-leaders.component.html */ "./src/app/stat-leaders/stat-leaders.component.html"),
            styles: [__webpack_require__(/*! ./stat-leaders.component.scss */ "./src/app/stat-leaders/stat-leaders.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatLeadersComponent);
    return StatLeadersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\18473\Documents\coding-temple\projects\nba-data\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map