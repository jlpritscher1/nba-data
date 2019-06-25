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

module.exports = ".background {\n  background-color: #17408B; }\n  .background .page {\n    width: 70vw;\n    padding: 15px;\n    margin-left: 15vw;\n    background-color: #FFFFFF; }\n  .background .page .point-leaders {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .point-leaders .page-title {\n        text-align: center;\n        -webkit-text-emphasis: bold;\n                text-emphasis: bold; }\n  .background .page .point-leaders p {\n        font-size: 18px;\n        text-indent: 5%; }\n  .background .page .point-leaders p span {\n          font-style: italic; }\n  .background .page .columns {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .columns .check-columns {\n        font-size: 20px;\n        padding-right: 25px;\n        text-align: center;\n        padding: 10px;\n        border: 2px solid #C9082A;\n        border-radius: 10px; }\n  .background .page .columns .check-columns span {\n          font-style: italic; }\n  .background .page .matplotlib {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .matplotlib h3 {\n        text-align: center; }\n  .background .page .matplotlib p {\n        font-size: 18px;\n        text-indent: 5%; }\n  .background .page .map {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .map p {\n        font-size: 18px;\n        text-indent: 5%; }\n  .background .page .detailed p {\n      font-size: 18px;\n      text-indent: 5%; }\n  .background .page .chart {\n      display: flex;\n      align-items: center;\n      justify-content: space-around; }\n  .background .page .explanation p {\n      font-size: 18px;\n      text-indent: 5%; }\n  .background .page .summary .move-on {\n      font-size: 18px;\n      text-indent: 5%; }\n  .background .page .summary .italic {\n      font-size: 18px;\n      text-indent: 5%;\n      font-style: italic; }\n  .background .page .navigate {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .navigate a {\n        color: #C9082A;\n        text-decoration: none;\n        font-weight: bold; }\n  .background .page .navigate a:hover {\n        color: #17408B; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzaWNzL0M6XFxVc2Vyc1xcMTg0NzNcXERvY3VtZW50c1xcY29kaW5nLXRlbXBsZVxccHJvamVjdHNcXE5CQVxcbmJhLWRhdGEvc3JjXFxhcHBcXGJhc2ljc1xcYmFzaWNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0cseUJBQXlCLEVBQUE7RUFENUI7SUFJUSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix5QkFBeUIsRUFBQTtFQVBqQztNQVVZLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsc0JBQXNCLEVBQUE7RUFabEM7UUFlZ0Isa0JBQWtCO1FBQ2xCLDJCQUFtQjtnQkFBbkIsbUJBQW1CLEVBQUE7RUFoQm5DO1FBb0JnQixlQUFlO1FBQ2YsZUFBZSxFQUFBO0VBckIvQjtVQXdCb0Isa0JBQWtCLEVBQUE7RUF4QnRDO01BZ0NZLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCLEVBQUE7RUFsQzFDO1FBcUNnQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IseUJBQXlCO1FBQ3pCLG1CQUFtQixFQUFBO0VBMUNuQztVQTZDb0Isa0JBQWtCLEVBQUE7RUE3Q3RDO01BbURZLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsc0JBQXNCLEVBQUE7RUFyRGxDO1FBd0RnQixrQkFBa0IsRUFBQTtFQXhEbEM7UUE0RGdCLGVBQWU7UUFDZixlQUFlLEVBQUE7RUE3RC9CO01Ba0VZLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCLEVBQUE7RUFwRTFDO1FBdUVnQixlQUFlO1FBQ2YsZUFBZSxFQUFBO0VBeEUvQjtNQThFZ0IsZUFBZTtNQUNmLGVBQWUsRUFBQTtFQS9FL0I7TUFvRlksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw2QkFBNkIsRUFBQTtFQXRGekM7TUEyRmdCLGVBQWU7TUFDZixlQUFlLEVBQUE7RUE1Ri9CO01Bb0dnQixlQUFlO01BQ2YsZUFBZSxFQUFBO0VBckcvQjtNQTBHZ0IsZUFBZTtNQUNmLGVBQWU7TUFDZixrQkFBa0IsRUFBQTtFQTVHbEM7TUFpSFksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEIsRUFBQTtFQW5IMUM7UUF1SGdCLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsaUJBQWlCLEVBQUE7RUF6SGpDO1FBNEhnQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9iYXNpY3MvYmFzaWNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICMxNzQwOEI7XHJcblxyXG4gICAucGFnZXtcclxuICAgICAgICB3aWR0aDogNzB2dztcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXZ3O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICBcclxuICAgICAgICAucG9pbnQtbGVhZGVyc3tcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgIC5wYWdlLXRpdGxle1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1lbXBoYXNpczogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiA1JTtcclxuXHJcbiAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29sdW1uc3tcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgLmNoZWNrLWNvbHVtbnN7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNDOTA4MkE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWF0cGxvdGxpYntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWFwe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGV0YWlsZWR7XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jaGFydHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZXhwbGFuYXRpb257XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN1bW1hcnl7XHJcbiAgICAgICAgICAgIC5tb3ZlLW9ue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgLml0YWxpY3tcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiA1JTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hdmlnYXRle1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjQzkwODJBO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTc0MDhCO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxufSJdfQ== */"

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

module.exports = "footer {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  height: 100px; }\n  footer #logo {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    background: url('fireball.jpeg');\n    background-size: 105px 100px;\n    background-repeat: repeat-x; }\n  footer #logo .fireball {\n      width: 100px;\n      height: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcMTg0NzNcXERvY3VtZW50c1xcY29kaW5nLXRlbXBsZVxccHJvamVjdHNcXE5CQVxcbmJhLWRhdGEvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsYUFBYSxFQUFBO0VBSmpCO0lBT1EsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0NBQW9EO0lBQ3BELDRCQUE0QjtJQUM1QiwyQkFBMkIsRUFBQTtFQVpuQztNQWVZLFlBQVc7TUFDWCxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICAgICNsb2dvIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmlyZWJhbGwuanBlZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTA1cHggMTAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG5cclxuICAgICAgICAuZmlyZWJhbGx7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

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

module.exports = ".background {\n  background-color: #17408B; }\n  .background .page {\n    width: 70vw;\n    padding: 15px;\n    margin-left: 15vw;\n    background-color: white; }\n  .background .page .heading .page-title {\n      text-align: center;\n      -webkit-text-emphasis: bold;\n              text-emphasis: bold; }\n  .background .page .heading p {\n      font-size: 18px;\n      text-indent: 5%; }\n  .background .page .heading p span {\n        font-style: italic; }\n  .background .page .heading ul {\n      color: #17408B; }\n  .background .page .heading ul li {\n        padding: 2px; }\n  .background .page .heading ul li a {\n          color: #C9082A; }\n  .background .page .heading ul li a:hover {\n          color: #17408B; }\n  .background .page .start {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .start p {\n        padding-right: 15px;\n        font-size: 18px;\n        margin-right: 5%;\n        text-indent: 5%; }\n  .background .page .start p span {\n          font-style: italic; }\n  .background .page .start .side h5 {\n        text-align: center; }\n  .background .page .start .side img {\n        transition: all .5s; }\n  .background .page .start .side img:hover {\n        cursor: pointer;\n        position: fixed;\n        top: 30%;\n        left: 30%;\n        transform: translate(-30%, -30%); }\n  .background .page .sf_df {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .sf_df p {\n        font-size: 18px;\n        text-indent: 5%; }\n  .background .page .sf_df p span {\n          font-style: italic; }\n  .background .page .sf_df .directions {\n        font-size: 24px;\n        text-indent: 0%; }\n  .background .page .mean {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .mean .right {\n        border-right: 3px solid #C9082A;\n        padding-right: 10px; }\n  .background .page .avgs p {\n      font-size: 18px;\n      text-indent: 5%; }\n  .background .page .top5 {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .top5 p {\n        font-size: 18px;\n        text-indent: 5%;\n        padding-right: 15px;\n        padding: 10px;\n        border: 2px solid #C9082A;\n        border-radius: 10px;\n        margin-right: 20px; }\n  .background .page .other4 {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .other4 p {\n        font-size: 18px;\n        padding-left: 25px;\n        padding: 10px;\n        border: 2px solid #C9082A;\n        border-radius: 10px;\n        margin-left: 20px; }\n  .background .page .others-avgs p {\n      font-size: 30px;\n      text-align: center; }\n  .background .page .others-avgs .two-images {\n      display: flex;\n      align-items: center;\n      justify-content: space-around; }\n  .background .page .others-avgs .two-images img {\n        border: 2px solid #17408B;\n        border-radius: 10px;\n        padding: 10px;\n        margin-bottom: 20px; }\n  .background .page .summary p {\n      font-size: 18px;\n      text-indent: 5%; }\n  .background .page .summary h3 {\n      text-align: center; }\n  .background .page .navigate {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .navigate a {\n        color: #C9082A;\n        text-decoration: none;\n        font-weight: bold; }\n  .background .page .navigate a:hover {\n        color: #17408B; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9zdGVyL0M6XFxVc2Vyc1xcMTg0NzNcXERvY3VtZW50c1xcY29kaW5nLXRlbXBsZVxccHJvamVjdHNcXE5CQVxcbmJhLWRhdGEvc3JjXFxhcHBcXGZvc3RlclxcZm9zdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCLEVBQUE7RUFEN0I7SUFJUyxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUIsRUFBQTtFQVBoQztNQVdnQixrQkFBa0I7TUFDbEIsMkJBQW1CO2NBQW5CLG1CQUFtQixFQUFBO0VBWm5DO01BZ0JpQixlQUFlO01BQ2YsZUFBZSxFQUFBO0VBakJoQztRQW9CcUIsa0JBQWtCLEVBQUE7RUFwQnZDO01BeUJnQixjQUFjLEVBQUE7RUF6QjlCO1FBNEJvQixZQUFZLEVBQUE7RUE1QmhDO1VBK0J3QixjQUFjLEVBQUE7RUEvQnRDO1VBa0N3QixjQUFjLEVBQUE7RUFsQ3RDO01BeUNZLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCLEVBQUE7RUEzQzFDO1FBOENnQixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixlQUFlLEVBQUE7RUFqRC9CO1VBb0RvQixrQkFBa0IsRUFBQTtFQXBEdEM7UUEwRG9CLGtCQUFrQixFQUFBO0VBMUR0QztRQThEb0IsbUJBQW1CLEVBQUE7RUE5RHZDO1FBa0VvQixlQUFlO1FBQ2YsZUFBZTtRQUNmLFFBQVE7UUFDUixTQUFTO1FBQ1QsZ0NBQStCLEVBQUE7RUF0RW5EO01BOEVZLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsc0JBQXNCLEVBQUE7RUFoRmxDO1FBbUZpQixlQUFlO1FBQ2YsZUFBZSxFQUFBO0VBcEZoQztVQXVGcUIsa0JBQWtCLEVBQUE7RUF2RnZDO1FBNEZpQixlQUFlO1FBQ2YsZUFBZSxFQUFBO0VBN0ZoQztNQW1HWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDhCQUE4QixFQUFBO0VBckcxQztRQXdHZ0IsK0JBQStCO1FBQy9CLG1CQUFtQixFQUFBO0VBekduQztNQStHZ0IsZUFBZTtNQUNmLGVBQWUsRUFBQTtFQWhIL0I7TUFxSFksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEIsRUFBQTtFQXZIMUM7UUEwSGdCLGVBQWU7UUFDZixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLGtCQUFrQixFQUFBO0VBaElsQztNQXFJWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDhCQUE4QixFQUFBO0VBdkkxQztRQTBJZ0IsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQixpQkFBaUIsRUFBQTtFQS9JakM7TUFxSmdCLGVBQWU7TUFDZixrQkFBa0IsRUFBQTtFQXRKbEM7TUEwSmdCLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsNkJBQTZCLEVBQUE7RUE1SjdDO1FBK0pvQix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixtQkFDSixFQUFBO0VBbktoQjtNQXlLZ0IsZUFBZTtNQUNmLGVBQWUsRUFBQTtFQTFLL0I7TUE4S2dCLGtCQUFrQixFQUFBO0VBOUtsQztNQW1MWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDhCQUE4QixFQUFBO0VBckwxQztRQXlMZ0IsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixpQkFBaUIsRUFBQTtFQTNMakM7UUE4TGdCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zvc3Rlci9mb3N0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzQwOEI7XHJcbiBcclxuICAgIC5wYWdle1xyXG4gICAgICAgICB3aWR0aDogNzB2dztcclxuICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1dnc7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgIC5wYWdlLXRpdGxle1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1lbXBoYXNpczogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiA1JTtcclxuXHJcbiAgICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICB1bHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTc0MDhCO1xyXG5cclxuICAgICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNDOTA4MkE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTc0MDhCO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLnN0YXJ0e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICBweyAgXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiA1JTtcclxuXHJcbiAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNpZGV7XHJcbiAgICAgICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGltZzpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzAlLC0zMCUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLnNmX2Rme1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiA1JTtcclxuXHJcbiAgICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAuZGlyZWN0aW9uc3tcclxuICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDAlO1xyXG4gICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLm1lYW57XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgICAgIC5yaWdodHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNDOTA4MkE7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hdmdze1xyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDUlO1xyXG4gICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudG9wNXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiA1JTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0M5MDgyQTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5vdGhlcjR7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0M5MDgyQTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm90aGVycy1hdmdze1xyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudHdvLWltYWdlc3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxNzQwOEI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN1bW1hcnl7XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogNSU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmF2aWdhdGV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNDOTA4MkE7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxNzQwOEI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG5cclxuICAgIH1cclxufSAiXX0= */"

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

module.exports = "<div class=\"background\">\n  <div class=\"page\">\n    <div class=\"intro\">\n      <h2><u>HOW DOES HEIGHT AFFECT PLAYER'S STATS?</u></h2>\n      <P>\n        You don't need to be a data scientist to know that height is an important aspect of basketball.  \n         Basketball is a vertical game and the closer to the basket you are the easier the game becomes.  \n         On the flip side however, bigger people tend to be slower and less coordinated and speed and \n         coordination are another two important skills to have.  So how does an NBA players height \n         generally effect their statistical output?  We can compare a player's height to any number of \n         other stats to see if there are coorilations between how tall they are and the numbers they \n         put up.\n      </P>\n      <p>\n        This page will contain all the code writen to obtain our data.  We will only skip over repeated \n        tasks like creating similar charts for various statistical catagories.  The first several lines \n        of code will all have already come up earlier on this site.\n      </p>\n    </div>\n\n    <div class=\"code\">\n      <img src=\"../../assets/screenshots/height/one.png\" width=\"90%\">\n      <p>\n        Cells one through four, <span>shown above</span>, get us set up to do our analysis.  Cell-1 \n        imports the python libraries that we need, cell-2 reads our data file so we have access to our \n        CSV file in Jupyter Notebook.  In cell-3 we take a look at all of our dataframes columns so we \n        know what how our information is organized, and how it can then be sorted.  Cell-4 is really the \n        beginning of our analysis, it displays the average number of minute played per game for every \n        play in every game for all six NBA seasons in our dataframe.<br><br>\n      </p>\n      <img src=\"../../assets/screenshots/height/Screenshot (95).png\" width=\"90%\">\n      <p>\n        We found out in cell-4 that the average number of mins per player per game was a little under 23 \n        MPG.  In cell-5 we then remove any row in which the player played less than 20 minutes in a game.  \n        We don't want to only keep games above the mean, but we do want to get rid of row of players that \n        hardly played as they will throw off our statistical averages.  If a player played at least 20 of \n        48 minutes in a game they had a fair chance to make their contribution.\n      </p>\n      <p>\n        In cell-6 we create a new dataframe that only has a single row for each individual player, and all \n        of their stats are averaged instead of having exact statistics for every single game in six years. \n        We will come back to avgs_df shortly.\n      </p>\n      <p>\n        In cell-7, we once again create a new data frame that only includes player's boxscores from games \n        that they won.  Then we print the first few rows to confirm that the value of the teamRslt column \n        in every row is 'Win'.  \n      </p>\n      <img src=\"../../assets/screenshots/height/three.png\" width=\"90%\">\n      <p>\n        In cell-8 we are adding a new column to the totals_df data frame.  This column will contain the total \n        number of team wins that each player has. Since we removed all Loses from the data frame we can simply \n        count the number of values in the teamRslt column and that is equal to the number of wins that player \n        was a part of.  <span>Note that the warning above is telling us that we are adding a column to a \n        portion of a full dataframe, but we only want to work with a part of the full data frame that we \n        originally started with</span>.\n      </p>\n      <img src=\"../../assets/screenshots/height/four.png\" width=\"90%\">\n      <p>\n        In cell-9 we reduce totals_df down to only two columns, <span>plus the index</span>, into another data \n        frame named player_wins_df.  Cell-10 serves only as a remimder what columns currently exist in avgs._df.  \n        Then in cell-11,the data frames avgs_df and players_win_df are joined together by the shared column \n        playDispNm.  Now we have each players height, and the number of wins they've been a part of together in \n        the same data frame.\n      </p>\n      <img class=\"enlarge\" src=\"../../assets/screenshots/height/five.png\" width=\"90%\">\n      <p>\n        Cell-12 checks how many rows there are in final_df.  Each row is a unique player with the averages from a \n        total of six seasons worth of stats.  We take two steps in cell-13, first we add a column named players@height.\n        All player's height are listed in an exact number of inches, so many players will be listed at the same height.  \n        For each player, the players@height column will be filled with the number of players that are the same height as \n        them (<span>Each player themselves is also included in the count</span>). We are adding this column to further \n        clean our data even further to create our analysis more reliable.  We want to make sure that each listed height \n        has several players at that listed height so indivudla players can't drastically shift our results.  We then \n        remove rows where the value of the players@height column is less than five if there are five players at a \n        given height then we can consider it a reasonable sample size. Checking the new lenght of final_df we can see \n        that we removed 12 players from our data frame.  Two of which were undersized fan favorites Isaiah Thomas and \n        Nate Robinson who are both exceptions  to the generic prerequisites to be an NBA player.\n      </p>\n      <p>\n        Cell-14 sets three new variations of final_df so that we can chart the top ten results when the list is sorted \n        by different columns.  Cell-15 charts the top ten listed heights that resulted in the most team wins.  Cells \n        16 and 17 then chart the the number of wins based on a player's weight, and then a combination of height and \n        weight. <span>The 2nd and 3rd graph mya not be as accurate as the first because we did not clean the data \n        in the weight column so one or two players could have too large a significance on our results</span>.  All \n        three graphs are seen below.\n      </p>\n    </div>\n\n    <div class=\"graphs\">\n      <img src=\"../../assets/charts/height/wins-height.png\" width=\"30%\">\n      <img src=\"../../assets/charts/height/wins-weight.png\" width=\"30%\">\n      <img src=\"../../assets/charts/height/wins-body.png\" width=\"30%\">\n    </div>\n\n    <div class=\"counts\">\n      <p>To the right is a list of how many players were listed at each height.  This list alone is strong indicator \n        of the state of the NBA.  The most common height in our list is 6ft 9in!  And 6ft 6in is the lowest highest \n        of the five most common.  There definitetly were fewer players around and under 6ft.\n      </p>\n      <img src=\"../../assets/screenshots/height/seven.png\" width=\"60%\">\n    </div>\n    \n    <div class=\"stats\">\n      <img src=\"../../assets/screenshots/height/eight.png\" width=\"90%\">\n      <p>\n        In cell-19 we set four new variables to see how a player's height compares two four other NBA stats.  We'll \n        check points, assists, rebounds, and 3-Point Fieldgoal Percentage.  Cell-20 show the code to create the graph \n        comparing a player's height to how many points they score per game.  All four graphs can be seen below.\n      </p>\n      <img src=\"../../assets/charts/height/points_height.png\" width=\"90%\">\n      <img src=\"../../assets/charts/height/assists_height.png\" width=\"90%\">\n      <img src=\"../../assets/charts/height/rebounds_height.png\" width=\"90%\">\n      <img src=\"../../assets/charts/height/3pt_pct_height.png\" width=\"90%\">\n    </div>\n\n    <div class=\"navigate\">\n        <a [routerLink]=\"['/foster']\">PREVIOUS PAGE</a>\n      <a [routerLink]=\"['/per']\">NEXT PAGE</a>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/height/height.component.scss":
/*!**********************************************!*\
  !*** ./src/app/height/height.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background-color: #17408B; }\n  .background .page {\n    width: 70vw;\n    margin-left: 15vw;\n    padding: 15px;\n    background-color: #FFFFFF; }\n  .background .page .intro {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .intro h2 {\n        text-align: center; }\n  .background .page .intro p {\n        text-indent: 5%;\n        font-size: 18px;\n        width: 90%; }\n  .background .page .code {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .code p {\n        text-indent: 5%;\n        font-size: 18px;\n        width: 90%; }\n  .background .page .code img {\n        padding-right: 4%; }\n  .background .page .code .enlarge:hover {\n        cursor: pointer;\n        transform: scale(1.5); }\n  .background .page .graphs {\n      display: flex;\n      align-items: center;\n      justify-content: space-around; }\n  .background .page .graphs img {\n        padding: 3px;\n        border: 5px solid #C9082A;\n        border-radius: 5px;\n        background-color: #17408B;\n        transition: all .2s; }\n  .background .page .graphs img:hover {\n        cursor: pointer;\n        transform: scale(2); }\n  .background .page .counts {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .counts p {\n        text-indent: 5%;\n        font-size: 18px;\n        width: 90%;\n        border: 2px solid #C9082A;\n        border-radius: 10px;\n        padding: 10px;\n        margin-left: 5%; }\n  .background .page .stats {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .stats p {\n        text-indent: 5%;\n        font-size: 18px;\n        width: 90%; }\n  .background .page .stats img {\n        padding: 10px; }\n  .background .page .navigate {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .navigate a {\n        color: #C9082A;\n        text-decoration: none;\n        font-weight: bold; }\n  .background .page .navigate a:hover {\n        color: #17408B; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVpZ2h0L0M6XFxVc2Vyc1xcMTg0NzNcXERvY3VtZW50c1xcY29kaW5nLXRlbXBsZVxccHJvamVjdHNcXE5CQVxcbmJhLWRhdGEvc3JjXFxhcHBcXGhlaWdodFxcaGVpZ2h0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCLEVBQUE7RUFEN0I7SUFJUSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix5QkFBeUIsRUFBQTtFQVBqQztNQVVZLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsc0JBQXNCLEVBQUE7RUFabEM7UUFlZ0Isa0JBQWtCLEVBQUE7RUFmbEM7UUFtQmdCLGVBQWU7UUFDZixlQUFlO1FBQ2YsVUFBVSxFQUFBO0VBckIxQjtNQTBCWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHNCQUFzQixFQUFBO0VBNUJsQztRQStCZ0IsZUFBZTtRQUNmLGVBQWU7UUFDZixVQUFVLEVBQUE7RUFqQzFCO1FBcUNnQixpQkFBaUIsRUFBQTtFQXJDakM7UUF5Q2dCLGVBQWU7UUFDZixxQkFBcUIsRUFBQTtFQTFDckM7TUErQ1ksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw2QkFBNkIsRUFBQTtFQWpEekM7UUFvRGdCLFlBQVk7UUFDWix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixtQkFBbUIsRUFBQTtFQXhEbkM7UUE0RGdCLGVBQWU7UUFDZixtQkFBbUIsRUFBQTtFQTdEbkM7TUFrRVksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEIsRUFBQTtFQXBFMUM7UUF1RWdCLGVBQWU7UUFDZixlQUFlO1FBQ2YsVUFBVTtRQUNWLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLGVBQWUsRUFBQTtFQTdFL0I7TUFrRlksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixzQkFBc0IsRUFBQTtFQXBGbEM7UUF1RmdCLGVBQWU7UUFDZixlQUFlO1FBQ2YsVUFBVSxFQUFBO0VBekYxQjtRQTZGZ0IsYUFBYSxFQUFBO0VBN0Y3QjtNQWtHWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDhCQUE4QixFQUFBO0VBcEcxQztRQXdHZ0IsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixpQkFBaUIsRUFBQTtFQTFHakM7UUE2R2dCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hlaWdodC9oZWlnaHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHsgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzQwOEI7XHJcblxyXG4gICAucGFnZXtcclxuICAgICAgICB3aWR0aDogNzB2dztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTV2dztcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblxyXG4gICAgICAgIC5pbnRyb3tcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvZGV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAuZW5sYXJnZTpob3ZlcntcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLmdyYXBoc3tcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjQzkwODJBO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3NDA4QjtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGltZzpob3ZlcntcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb3VudHN7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogNSU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0M5MDgyQTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3RhdHN7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hdmlnYXRle1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjQzkwODJBO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTc0MDhCO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICBcclxuICAgIH1cclxufSJdfQ== */"

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

module.exports = ".welcome {\n  background-image: url('analytics.jpg');\n  margin: 0;\n  width: 100%; }\n  .welcome .intro {\n    width: 70%;\n    margin-left: 15%;\n    border: 3px solid #FFFFFF;\n    padding: 5px;\n    padding-right: 19px;\n    display: flex;\n    align-items: center;\n    flex-direction: column; }\n  .welcome .intro h2 {\n      text-align: center;\n      color: #FFFFFF; }\n  .welcome .intro p {\n      text-indent: 5%;\n      font-size: 18px;\n      color: #FFFFFF;\n      width: 90%; }\n  .welcome .intro p a {\n        color: #FFFFFF; }\n  .welcome .intro p a:hover {\n        color: #17408B; }\n  .welcome .intro .overview {\n      text-align: center;\n      color: #FFFFFF;\n      font-size: 20px;\n      text-indent: 5%; }\n  .welcome .image {\n    padding-top: 15px; }\n  .welcome .image img {\n      display: flex;\n      align-items: flex-end;\n      justify-content: space-between;\n      width: 22vw;\n      margin-left: 2vw;\n      padding-bottom: 5px; }\n  .welcome .links {\n    color: #FFFFFF;\n    width: 33vw;\n    margin-top: 0;\n    margin-right: 40%;\n    margin-left: 2vw;\n    text-indent: 5%; }\n  .welcome .links ul {\n      margin: 0%; }\n  .welcome .links ul h3 {\n        text-indent: 25%; }\n  .welcome .links ul li {\n        padding-bottom: 15px; }\n  .welcome .links ul li a {\n          color: #FFFFFF;\n          font-size: 20px; }\n  .welcome .links ul li a:hover {\n          color: #17408B; }\n  .background {\n  background-color: #17408B; }\n  .background .page {\n    width: 70%;\n    margin-left: 15%;\n    background-color: #FFFFFF;\n    padding: 15px; }\n  .background .page h1 {\n      text-align: center; }\n  .background .page p {\n      text-indent: 5%;\n      font-size: 18px; }\n  .background .page p a {\n        color: #C9082A; }\n  .background .page p a:hover {\n        color: #17408B; }\n  .background .page .jupyter {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .jupyter .imports {\n        display: flex;\n        align-items: center;\n        flex-direction: column; }\n  .background .page .jupyter .imports p {\n          text-indent: 5%;\n          width: 90%; }\n  .background .page .jupyter .page-title {\n        text-align: center; }\n  .background .page .jupyter p {\n        font-size: 18px; }\n  .background .page .jupyter .shape {\n        display: flex;\n        align-items: center;\n        justify-content: space-around; }\n  .background .page .jupyter .shape .frame-shape {\n          width: 80%;\n          padding-right: 5px;\n          margin: 0;\n          padding-top: 25px;\n          text-indent: 5%; }\n  .background .page .jupyter .shape .frame-shape span {\n            font-style: italic; }\n  .background .page .jupyter .shape .shape-img {\n          padding: 5px;\n          border: 2px solid red;\n          border-radius: 10px; }\n  .background .page .jupyter .large {\n        margin: 0px; }\n  .background .page .jupyter .output {\n        display: flex;\n        align-items: center;\n        justify-content: space-around;\n        text-indent: 5%; }\n  .background .page .jupyter .output .explain-groupby {\n          padding-right: 10px; }\n  .background .page .example1 {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .example1 p {\n        text-indent: 5%; }\n  .background .page .basics {\n      text-indent: 4%;\n      text-align: center;\n      width: 90%; }\n  .background .page .navigate {\n      display: flex;\n      padding-top: 25px;\n      padding-left: 80%; }\n  .background .page .navigate a {\n        color: #C9082A;\n        text-decoration: none;\n        font-weight: bold; }\n  .background .page .navigate a:hover {\n        color: #17408B; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXDE4NDczXFxEb2N1bWVudHNcXGNvZGluZy10ZW1wbGVcXHByb2plY3RzXFxOQkFcXG5iYS1kYXRhL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQTBEO0VBQzFELFNBQVM7RUFDVCxXQUFXLEVBQUE7RUFIZjtJQU1RLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0IsRUFBQTtFQWI5QjtNQWlCWSxrQkFBa0I7TUFDbEIsY0FBYyxFQUFBO0VBbEIxQjtNQXNCWSxlQUFlO01BQ2YsZUFBZTtNQUNmLGNBQWM7TUFDZCxVQUFVLEVBQUE7RUF6QnRCO1FBNEJnQixjQUNKLEVBQUE7RUE3Qlo7UUErQmdCLGNBQWMsRUFBQTtFQS9COUI7TUFvQ1ksa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxlQUFlO01BQ2YsZUFBZSxFQUFBO0VBdkMzQjtJQTZDUSxpQkFBaUIsRUFBQTtFQTdDekI7TUFnRFEsYUFBYTtNQUNiLHFCQUFxQjtNQUNyQiw4QkFBOEI7TUFDOUIsV0FBVztNQUNYLGdCQUFnQjtNQUNoQixtQkFBbUIsRUFBQTtFQXJEM0I7SUEwRFEsY0FBYztJQUNkLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7RUEvRHZCO01Ba0VZLFVBQVUsRUFBQTtFQWxFdEI7UUFxRWdCLGdCQUFnQixFQUFBO0VBckVoQztRQXlFZ0Isb0JBQW9CLEVBQUE7RUF6RXBDO1VBNEVvQixjQUFjO1VBQ2QsZUFBZSxFQUFBO0VBN0VuQztVQWdGb0IsY0FBYyxFQUFBO0VBT2xDO0VBQ0kseUJBQXlCLEVBQUE7RUFEN0I7SUFJUSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixhQUFhLEVBQUE7RUFQckI7TUFVWSxrQkFBa0IsRUFBQTtFQVY5QjtNQWNZLGVBQWU7TUFDZixlQUFlLEVBQUE7RUFmM0I7UUFrQmdCLGNBQWMsRUFBQTtFQWxCOUI7UUFxQmdCLGNBQWMsRUFBQTtFQXJCOUI7TUEwQlksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixzQkFBc0IsRUFBQTtFQTVCbEM7UUErQmdCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsc0JBQXNCLEVBQUE7RUFqQ3RDO1VBb0NrQixlQUFlO1VBQ2YsVUFBVSxFQUFBO0VBckM1QjtRQTBDZ0Isa0JBQWtCLEVBQUE7RUExQ2xDO1FBOENnQixlQUFlLEVBQUE7RUE5Qy9CO1FBa0RnQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLDZCQUE2QixFQUFBO0VBcEQ3QztVQXVEb0IsVUFBVTtVQUNWLGtCQUFrQjtVQUNsQixTQUFTO1VBQ1QsaUJBQWlCO1VBQ2pCLGVBQWUsRUFBQTtFQTNEbkM7WUE4RHdCLGtCQUFrQixFQUFBO0VBOUQxQztVQWtFb0IsWUFBWTtVQUNaLHFCQUFxQjtVQUNyQixtQkFBbUIsRUFBQTtFQXBFdkM7UUF5RWdCLFdBQVcsRUFBQTtFQXpFM0I7UUE2RWdCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsNkJBQTZCO1FBQzdCLGVBQWUsRUFBQTtFQWhGL0I7VUFtRm9CLG1CQUFtQixFQUFBO0VBbkZ2QztNQTBGWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHNCQUFzQixFQUFBO0VBNUZsQztRQStGZ0IsZUFBZSxFQUFBO0VBL0YvQjtNQW9HWSxlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLFVBQVUsRUFBQTtFQXRHdEI7TUEwR1ksYUFBYTtNQUNiLGlCQUFpQjtNQUNqQixpQkFBaUIsRUFBQTtFQTVHN0I7UUErR2dCLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsaUJBQWlCLEVBQUE7RUFqSGpDO1FBb0hnQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZXsgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYW5hbHl0aWNzLmpwZycpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5pbnRyb3tcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTlweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICB0ZXh0LWluZGVudDogNSU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcblxyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxNzQwOEI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5vdmVydmlld3tcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWluZGVudDogNSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5pbWFnZXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICBcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHdpZHRoOiAyMnZ3O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAydnc7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmtze1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIHdpZHRoOiAzM3Z3O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJ2dztcclxuICAgICAgICB0ZXh0LWluZGVudDogNSU7XHJcblxyXG4gICAgICAgIHVse1xyXG4gICAgICAgICAgICBtYXJnaW46IDAlO1xyXG5cclxuICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogMjUlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzE3NDA4QjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc0MDhCO1xyXG4gXHJcbiAgICAucGFnZXtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDUlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcblxyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNDOTA4MkE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTc0MDhCO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuanVweXRlcntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgIC5pbXBvcnRze1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiA1JTtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnBhZ2UtdGl0bGV7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zaGFwZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLmZyYW1lLXNoYXBle1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogNSU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2hhcGUtaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sYXJnZXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAub3V0cHV0e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiA1JTtcclxuXHJcbiAgICAgICAgICAgICAgICAuZXhwbGFpbi1ncm91cGJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAuZXhhbXBsZTF7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmFzaWNze1xyXG4gICAgICAgICAgICB0ZXh0LWluZGVudDogNCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYXZpZ2F0ZXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogODAlO1xyXG5cclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjQzkwODJBO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTc0MDhCO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

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

module.exports = "header {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  height: 100px; }\n  header #logo {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    background: url('fireball.jpeg');\n    background-size: 105px 100px;\n    background-repeat: repeat-x; }\n  header #logo .fireball {\n      width: 100px;\n      height: 100px; }\n  nav {\n  display: flex;\n  height: 50px;\n  width: 100%;\n  font-size: 12px;\n  justify-content: space-around;\n  align-items: center;\n  background-color: #C9082A;\n  font-weight: bold; }\n  nav a {\n    color: #FFFFFF;\n    transition: all .2s ease;\n    text-decoration: none !important;\n    text-align: center; }\n  nav a:hover {\n    cursor: pointer;\n    transform: scale(1.8);\n    color: #17408B; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxVc2Vyc1xcMTg0NzNcXERvY3VtZW50c1xcY29kaW5nLXRlbXBsZVxccHJvamVjdHNcXE5CQVxcbmJhLWRhdGEvc3JjXFxhcHBcXG5hdlxcbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsYUFBYSxFQUFBO0VBSmpCO0lBT1EsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0NBQW9EO0lBQ3BELDRCQUE0QjtJQUM1QiwyQkFBMkIsRUFBQTtFQVpuQztNQWVZLFlBQVc7TUFDWCxhQUFhLEVBQUE7RUFLekI7RUFDSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUE7RUFSckI7SUFXWSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyxrQkFBa0IsRUFBQTtFQWQ5QjtJQWtCWSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcblxyXG4gICAgI2xvZ28ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9maXJlYmFsbC5qcGVnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDVweCAxMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcblxyXG4gICAgICAgIC5maXJlYmFsbHtcclxuICAgICAgICAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5uYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M5MDgyQTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS44KTtcclxuICAgICAgICAgICAgY29sb3I6ICMxNzQwOEI7XHJcbiAgICAgICAgfVxyXG59Il19 */"

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

module.exports = ".background {\n  background-color: #17408B; }\n  .background .page {\n    width: 70vw;\n    margin-left: 15vw;\n    padding: 15px;\n    background-color: #FFFFFF; }\n  .background .page .heading {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .heading h2 {\n        text-align: center; }\n  .background .page .heading p {\n        text-indent: 5%;\n        font-size: 18px;\n        width: 90%; }\n  .background .page .heading img {\n        margin-bottom: 10%;\n        padding: 5px;\n        border: 3px solid #17408B; }\n  .background .page .navigate {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .navigate a {\n        color: #C9082A;\n        text-decoration: none;\n        font-weight: bold; }\n  .background .page .navigate a:hover {\n        color: #17408B; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyLWFkdmFuY2VkLXN0YXRzL0M6XFxVc2Vyc1xcMTg0NzNcXERvY3VtZW50c1xcY29kaW5nLXRlbXBsZVxccHJvamVjdHNcXE5CQVxcbmJhLWRhdGEvc3JjXFxhcHBcXHBlci1hZHZhbmNlZC1zdGF0c1xccGVyLWFkdmFuY2VkLXN0YXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCLEVBQUE7RUFEN0I7SUFJUSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix5QkFBeUIsRUFBQTtFQVBqQztNQVVZLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsc0JBQXNCLEVBQUE7RUFabEM7UUFlZ0Isa0JBQWtCLEVBQUE7RUFmbEM7UUFtQmdCLGVBQWU7UUFDZixlQUFlO1FBQ2YsVUFBVSxFQUFBO0VBckIxQjtRQXlCZ0Isa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWix5QkFDSixFQUFBO0VBNUJaO01BZ0NZLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCLEVBQUE7RUFsQzFDO1FBcUNnQixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLGlCQUFpQixFQUFBO0VBdkNqQztRQTBDZ0IsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGVyLWFkdmFuY2VkLXN0YXRzL3Blci1hZHZhbmNlZC1zdGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5keyAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3NDA4QjtcclxuXHJcbiAgIC5wYWdle1xyXG4gICAgICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXZ3O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHJcbiAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogNSU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjMTc0MDhCXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYXZpZ2F0ZXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjQzkwODJBO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTc0MDhCO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICB9XHJcbn0iXX0= */"

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

module.exports = ".background {\n  background-color: #17408B; }\n  .background .page {\n    width: 70vw;\n    margin-left: 15vw;\n    padding: 15px;\n    background-color: #FFFFFF; }\n  .background .page .per-heading .page-title {\n      text-align: center; }\n  .background .page .per-heading p {\n      text-indent: 5%;\n      font-size: 18px; }\n  .background .page .per-heading p a {\n        color: #C9082A; }\n  .background .page .per-heading p a:hover {\n        color: #17408B; }\n  .background .page .sixteen {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .sixteen p {\n        padding-right: 25px;\n        text-indent: 10%;\n        font-size: 18px; }\n  .background .page .sixteen p a {\n          color: #C9082A; }\n  .background .page .sixteen p a:hover {\n          color: #17408B; }\n  .background .page .sixteen img:hover {\n        cursor: pointer;\n        transform: scale(1.5); }\n  .background .page .ten416 {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .ten416 p {\n        text-indent: 5%;\n        font-size: 18px; }\n  .background .page .ten416 p span {\n          font-style: italic; }\n  .background .page .ten-players {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding-bottom: 20px; }\n  .background .page .ten-players .all-16 {\n        width: 40%;\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        border: 2px solid #C9082A;\n        border-radius: 10px;\n        margin-right: 20px;\n        padding-bottom: 10px; }\n  .background .page .ten-players .all-16 p {\n          width: 60%;\n          text-align: center;\n          font-size: 18px; }\n  .background .page .ten-players .all-16 p span {\n            font-style: italic; }\n  .background .page .ten-players .each-player {\n        width: 60%;\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        border: 2px solid #C9082A;\n        border-radius: 10px;\n        padding-bottom: 10px; }\n  .background .page .ten-players .each-player p {\n          width: 85%;\n          text-align: center;\n          text-indent: 5%;\n          font-size: 18px; }\n  .background .page .ten-players .each-player p span {\n            font-style: italic; }\n  .background .page .per-graph-code {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .per-graph-code p {\n        font-size: 18px;\n        text-indent: 5%; }\n  .background .page .per-graph-code p span {\n          font-style: italic; }\n  .background .page .per-graph-code img {\n        padding-bottom: 30px; }\n  .background .page .graphs .fiveg img {\n      padding: 3px;\n      border: 1px solid #C9082A;\n      border-radius: 5px;\n      background-color: #17408B;\n      transition: all .2s; }\n  .background .page .graphs .fiveg img:hover {\n      cursor: pointer;\n      transform: scale(2); }\n  .background .page .graphs .graph-sum p {\n      font-size: 18px;\n      text-indent: 5%; }\n  .background .page .graphs .graph-sum p span {\n        font-style: italic; }\n  .background .page .graphs .all-in-one {\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n  .background .page .graphs .all-in-one p {\n        font-size: 28px;\n        text-align: center; }\n  .background .page .graphs .all-in-one h3 {\n        padding-top: 50px;\n        text-align: center; }\n  .background .page .graphs .all-in-one hr {\n        padding: 20px;\n        color: #C9082A;\n        background-color: #C9082A;\n        width: 90%; }\n  .background .page .graphs .all-in-one img {\n        padding: 20px; }\n  .background .page .navigate {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .navigate a {\n        color: #C9082A;\n        text-decoration: none;\n        font-weight: bold; }\n  .background .page .navigate a:hover {\n        color: #17408B; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyL0M6XFxVc2Vyc1xcMTg0NzNcXERvY3VtZW50c1xcY29kaW5nLXRlbXBsZVxccHJvamVjdHNcXE5CQVxcbmJhLWRhdGEvc3JjXFxhcHBcXHBlclxccGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCLEVBQUE7RUFEN0I7SUFJUSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix5QkFBeUIsRUFBQTtFQVBqQztNQVdnQixrQkFBa0IsRUFBQTtFQVhsQztNQWVnQixlQUFlO01BQ2YsZUFBZSxFQUFBO0VBaEIvQjtRQW1Cb0IsY0FBYyxFQUFBO0VBbkJsQztRQXNCb0IsY0FBYyxFQUFBO0VBdEJsQztNQTZCWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDhCQUE4QixFQUFBO0VBL0IxQztRQW1DZ0IsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixlQUFlLEVBQUE7RUFyQy9CO1VBeUNvQixjQUFjLEVBQUE7RUF6Q2xDO1VBNENvQixjQUFjLEVBQUE7RUE1Q2xDO1FBaURnQixlQUFlO1FBQ2YscUJBQXFCLEVBQUE7RUFsRHJDO01BdURZLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsc0JBQXNCLEVBQUE7RUF6RGxDO1FBNERnQixlQUFlO1FBQ2YsZUFBZSxFQUFBO0VBN0QvQjtVQWdFb0Isa0JBQWtCLEVBQUE7RUFoRXRDO01Bc0VZLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCO01BQzlCLG9CQUFvQixFQUFBO0VBekVoQztRQTRFZ0IsVUFBVTtRQUNWLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLG9CQUFvQixFQUFBO0VBbkZwQztVQXNGb0IsVUFBVTtVQUNWLGtCQUFrQjtVQUNsQixlQUFlLEVBQUE7RUF4Rm5DO1lBMkZ3QixrQkFBa0IsRUFBQTtFQTNGMUM7UUFrR2dCLFVBQVU7UUFDVixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLG9CQUFvQixFQUFBO0VBeEdwQztVQTJHb0IsVUFBVTtVQUNWLGtCQUFrQjtVQUNsQixlQUFlO1VBQ2YsZUFBZSxFQUFBO0VBOUduQztZQWlId0Isa0JBQWtCLEVBQUE7RUFqSDFDO01Bd0hZLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsc0JBQXNCLEVBQUE7RUExSGxDO1FBNkhnQixlQUFlO1FBQ2YsZUFBZSxFQUFBO0VBOUgvQjtVQWlJb0Isa0JBQWtCLEVBQUE7RUFqSXRDO1FBc0lnQixvQkFBb0IsRUFBQTtFQXRJcEM7TUE2SW9CLFlBQVk7TUFDWix5QkFBeUI7TUFDekIsa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixtQkFBbUIsRUFBQTtFQWpKdkM7TUFxSm9CLGVBQWU7TUFDZixtQkFBbUIsRUFBQTtFQXRKdkM7TUE0Sm9CLGVBQWU7TUFDZixlQUFlLEVBQUE7RUE3Sm5DO1FBZ0t3QixrQkFBa0IsRUFBQTtFQWhLMUM7TUFzS2dCLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsc0JBQXNCLEVBQUE7RUF4S3RDO1FBMktvQixlQUFlO1FBQ2Ysa0JBQWtCLEVBQUE7RUE1S3RDO1FBZ0xvQixpQkFBaUI7UUFDakIsa0JBQWtCLEVBQUE7RUFqTHRDO1FBcUxvQixhQUFhO1FBQ2IsY0FBYztRQUNkLHlCQUF5QjtRQUN6QixVQUFVLEVBQUE7RUF4TDlCO1FBNExvQixhQUFhLEVBQUE7RUE1TGpDO01BbU1ZLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCLEVBQUE7RUFyTTFDO1FBeU1nQixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLGlCQUFpQixFQUFBO0VBM01qQztRQThNZ0IsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGVyL3Blci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5keyAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3NDA4QjtcclxuXHJcbiAgIC5wYWdle1xyXG4gICAgICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXZ3O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHJcbiAgICAgICAgLnBlci1oZWFkaW5ne1xyXG4gICAgICAgICAgICAucGFnZS10aXRsZXtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiA1JTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQzkwODJBO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzE3NDA4QjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLnNpeHRlZW57XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcblxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAxMCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0M5MDgyQTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxNzQwOEI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGltZzpob3ZlcntcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRlbjQxNntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogNSU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZW4tcGxheWVyc3tcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgICAgIC5hbGwtMTZ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0M5MDgyQTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmVhY2gtcGxheWVye1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNDOTA4MkE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucGVyLWdyYXBoLWNvZGV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDUlO1xyXG5cclxuICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdyYXBoc3tcclxuICAgICAgICAgICAgLmZpdmVne1xyXG4gICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQzkwODJBO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc0MDhCO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZ3JhcGgtc3Vte1xyXG4gICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDUlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hbGwtaW4tb25le1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaHJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0M5MDgyQTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzkwODJBO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYXZpZ2F0ZXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0M5MDgyQTtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzE3NDA4QjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuIl19 */"

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

module.exports = ".background {\n  background-color: #17408B; }\n  .background .page {\n    width: 70vw;\n    padding: 15px;\n    margin-left: 15vw;\n    background-color: white; }\n  .background .page p {\n      text-indent: 5%; }\n  .background .page .points {\n      font-size: 18px;\n      text-indent: 5%; }\n  .background .page .points .page-title {\n        text-align: center; }\n  .background .page .points .point-charts {\n        display: flex;\n        align-items: center;\n        justify-content: space-around; }\n  .background .page .graphs .section {\n      display: flex;\n      align-items: center;\n      justify-content: space-around; }\n  .background .page .graphs h2 {\n      text-align: center; }\n  .background .page p {\n      font-size: 18px; }\n  .background .page p span {\n        font-style: italic; }\n  .background .page .form {\n      padding-bottom: 50px; }\n  .background .page .form h3 {\n        text-align: center; }\n  .background .page .form .inferences .input {\n        width: 60%;\n        margin-top: 15px;\n        margin-left: 20%;\n        color: #C9082A;\n        background-color: rgba(0, 0, 0, 0.9);\n        font-size: 18px; }\n  .background .page .form .inferences .submit-btn {\n        margin-top: 15px;\n        margin-left: 20%;\n        font-weight: 600;\n        color: #17408B;\n        background-color: #FFFFFF;\n        border: 2px solid #C9082A; }\n  .background .page .navigate {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .background .page .navigate a {\n        color: #C9082A;\n        text-decoration: none;\n        font-weight: bold; }\n  .background .page .navigate a:hover {\n        color: #17408B; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdC1sZWFkZXJzL0M6XFxVc2Vyc1xcMTg0NzNcXERvY3VtZW50c1xcY29kaW5nLXRlbXBsZVxccHJvamVjdHNcXE5CQVxcbmJhLWRhdGEvc3JjXFxhcHBcXHN0YXQtbGVhZGVyc1xcc3RhdC1sZWFkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCLEVBQUE7RUFEN0I7SUFJUyxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUIsRUFBQTtFQVBoQztNQVVhLGVBQWUsRUFBQTtFQVY1QjtNQWVZLGVBQWU7TUFDZixlQUFlLEVBQUE7RUFoQjNCO1FBbUJpQixrQkFBa0IsRUFBQTtFQW5CbkM7UUF3QmdCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsNkJBQTZCLEVBQUE7RUExQjdDO01BZ0NnQixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDZCQUE2QixFQUFBO0VBbEM3QztNQXNDaUIsa0JBQWtCLEVBQUE7RUF0Q25DO01BMkNhLGVBQWUsRUFBQTtFQTNDNUI7UUE4Q2lCLGtCQUFrQixFQUFBO0VBOUNuQztNQW1EWSxvQkFBb0IsRUFBQTtFQW5EaEM7UUFzRGdCLGtCQUFrQixFQUFBO0VBdERsQztRQTJEb0IsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLG9DQUFpQztRQUNqQyxlQUFlLEVBQUE7RUFoRW5DO1FBb0VvQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QseUJBQXlCO1FBQ3pCLHlCQUF5QixFQUFBO0VBekU3QztNQStFWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDhCQUE4QixFQUFBO0VBakYxQztRQXFGZ0IsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixpQkFBaUIsRUFBQTtFQXZGakM7UUEwRmdCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N0YXQtbGVhZGVycy9zdGF0LWxlYWRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzQwOEI7XHJcbiBcclxuICAgIC5wYWdle1xyXG4gICAgICAgICB3aWR0aDogNzB2dztcclxuICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1dnc7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAgcHtcclxuICAgICAgICAgICAgIHRleHQtaW5kZW50OiA1JTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuXHJcbiAgICAgICAgIC5wb2ludHN7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDUlO1xyXG5cclxuICAgICAgICAgICAgIC5wYWdlLXRpdGxle1xyXG4gICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAucG9pbnQtY2hhcnRze1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAuZ3JhcGhze1xyXG4gICAgICAgICAgICAgLnNlY3Rpb257XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgcHtcclxuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbiAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLmZvcm17XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG5cclxuICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbmZlcmVuY2Vze1xyXG4gICAgICAgICAgICAgICAgLmlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQzkwODJBO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC45KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5zdWJtaXQtYnRue1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwOyBcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzE3NDA4QjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNDOTA4MkE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLm5hdmlnYXRle1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjQzkwODJBO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTc0MDhCO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufSJdfQ== */"

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

module.exports = __webpack_require__(/*! C:\Users\18473\Documents\coding-temple\projects\NBA\nba-data\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map