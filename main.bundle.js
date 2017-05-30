webpackJsonp([1,5],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NEW_FAV_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NewFavCharAction; });
var NEW_FAV_CHARACTER = '[UI] New Fav character';
var NewFavCharAction = (function () {
    function NewFavCharAction(payload) {
        this.payload = payload;
        this.type = NEW_FAV_CHARACTER;
    }
    return NewFavCharAction;
}());

//# sourceMappingURL=favorite-char.actions.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOAD_MOVIE_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviedbLoadComplete; });
var LOAD_MOVIE_COMPLETE = '[Moviedb] Movie loaded Complete';
var MoviedbLoadComplete = (function () {
    function MoviedbLoadComplete(payload) {
        this.payload = payload;
        this.type = LOAD_MOVIE_COMPLETE;
    }
    return MoviedbLoadComplete;
}());

//# sourceMappingURL=moviedb.actions.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOAD_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_ALL_PEOPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GET_NEXT_PAGE_PEOPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GET_ALL_PEOPLE_COMPLETE; });
/* unused harmony export SwapiLoadPersonAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SwapiLoadPersonComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SwapiGetAllPeopleAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SwapiGetAllPeopleComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SwapiGetNextPagePeoplAction; });
var LOAD = '[Swapi] Person Load';
var LOAD_COMPLETE = '[Swapi] person Load Complete';
var GET_ALL_PEOPLE = '[Swapi] Get all people';
var GET_NEXT_PAGE_PEOPLE = '[Swapi] Get the next page of people';
var GET_ALL_PEOPLE_COMPLETE = '[Swapi] get all people Complete';
var SwapiLoadPersonAction = (function () {
    function SwapiLoadPersonAction(payload) {
        this.payload = payload;
        this.type = LOAD;
    }
    return SwapiLoadPersonAction;
}());

var SwapiLoadPersonComplete = (function () {
    function SwapiLoadPersonComplete(payload) {
        this.payload = payload;
        this.type = LOAD_COMPLETE;
    }
    return SwapiLoadPersonComplete;
}());

var SwapiGetAllPeopleAction = (function () {
    function SwapiGetAllPeopleAction() {
        this.type = GET_ALL_PEOPLE;
    }
    return SwapiGetAllPeopleAction;
}());

var SwapiGetAllPeopleComplete = (function () {
    function SwapiGetAllPeopleComplete(payload) {
        this.payload = payload;
        this.type = GET_ALL_PEOPLE_COMPLETE;
    }
    return SwapiGetAllPeopleComplete;
}());

var SwapiGetNextPagePeoplAction = (function () {
    function SwapiGetNextPagePeoplAction(payload) {
        this.payload = payload;
        this.type = GET_NEXT_PAGE_PEOPLE;
    }
    return SwapiGetNextPagePeoplAction;
}());

//# sourceMappingURL=people.actions.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NEW_WORST_CHAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NewWorstCharAction; });
var NEW_WORST_CHAR = '[UI] New Worst character';
var NewWorstCharAction = (function () {
    function NewWorstCharAction(payload) {
        this.payload = payload;
        this.type = NEW_WORST_CHAR;
    }
    return NewWorstCharAction;
}());

//# sourceMappingURL=worst-char.actions.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MOVIEDB_API_KEY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return POSTER_PATH; });
/* unused harmony export MOVIE_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SEARCH_MOVIE; });
var MOVIEDB_API_KEY = '7d9cfd196419289854a7c13b6d97e57f';
var MOVIEDB_URL = 'https://api.themoviedb.org/3';
// Creates the url for the poster image from the posterPath
var POSTER_PATH = function (posterPath) { return "http://image.tmdb.org/t/p/w185/" + posterPath; };
/**
 *  Generate the Url for the movie database
 *  This is used so that we can pull up movie posters
 */
var MOVIE_URL = function (movieId) { return MOVIEDB_URL + "/movie/" + movieId + "?api_key=\"" + MOVIEDB_API_KEY + "\"&language=en-US"; };
var SEARCH_MOVIE = function (title, year) {
    return MOVIEDB_URL + "/search/movie?api_key=" + MOVIEDB_API_KEY + "&language=en-US&query=" + title + "&page=1&include_adult=false&year=" + year;
};
//# sourceMappingURL=moviedb.variables.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_moviedb_variables__ = __webpack_require__(161);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviedbService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoviedbService = (function () {
    function MoviedbService(http) {
        this.http = http;
    }
    MoviedbService.prototype.searchMovies = function (title, year) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_moviedb_variables__["a" /* SEARCH_MOVIE */](title, year)).map(function (res) { return res.json(); });
    };
    return MoviedbService;
}());
MoviedbService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], MoviedbService);

var _a;
//# sourceMappingURL=moviedb.service.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_store_reducer__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(store$) {
        this.store$ = store$;
        this.pairs$ = store$.select(__WEBPACK_IMPORTED_MODULE_2__reducers_store_reducer__["f" /* getFilmPairs */]);
    }
    HomeComponent.prototype.ngOnInit = function () { };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'sw-home',
        template: __webpack_require__(577),
        styles: [__webpack_require__(364)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["g" /* Store */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_store_reducer__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeopleComponent = (function () {
    function PeopleComponent(store$) {
        this.store$ = store$;
        this.people$ = this.store$.select(__WEBPACK_IMPORTED_MODULE_2__reducers_store_reducer__["b" /* getAllPeople */]);
    }
    PeopleComponent.prototype.ngOnInit = function () { };
    return PeopleComponent;
}());
PeopleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'sw-people',
        template: __webpack_require__(579),
        styles: [__webpack_require__(366)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["g" /* Store */]) === "function" && _a || Object])
], PeopleComponent);

var _a;
//# sourceMappingURL=people.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwapiTemplateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SwapiTemplateComponent = (function () {
    function SwapiTemplateComponent() {
    }
    return SwapiTemplateComponent;
}());
SwapiTemplateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'sw-swapi-template',
        template: "\n\t\t<sw-nav></sw-nav>\n\t\t<div class=\"o-container u-pt\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t"
    })
], SwapiTemplateComponent);

//# sourceMappingURL=swapi-template.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store_devtools__ = __webpack_require__(148);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EnvironmentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.


var environment = {
    production: false
};
var EnvironmentModule = (function () {
    function EnvironmentModule() {
    }
    return EnvironmentModule;
}());
EnvironmentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store_devtools__["a" /* StoreDevtoolsModule */]
        ]
    })
], EnvironmentModule);

//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 259;


/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(166);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(571),
        styles: [__webpack_require__(368)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store_devtools__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swapi_swapi_module__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reducers_store_reducer__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__effects_film_effects__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__effects_people_effects__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_swapi_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_moviedb_service__ = __webpack_require__(162);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__swapi_swapi_module__["a" /* SwapiModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_9__reducers_store_reducer__["a" /* reducer */]),
            __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_10__effects_film_effects__["a" /* FilmEffects */]),
            __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_11__effects_people_effects__["a" /* PeopleEffects */]),
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension(),
            __WEBPACK_IMPORTED_MODULE_5__environments_environment__["b" /* EnvironmentModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__shared_swapi_service__["a" /* SwapiService */],
            __WEBPACK_IMPORTED_MODULE_13__shared_moviedb_service__["a" /* MoviedbService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_merge__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_retry__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__actions_swapi_film_actions__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions_moviedb_actions__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_swapi_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_moviedb_service__ = __webpack_require__(162);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var FilmEffects = (function () {
    function FilmEffects(actions$, swapiService, moviedbService) {
        var _this = this;
        this.actions$ = actions$;
        this.swapiService = swapiService;
        this.moviedbService = moviedbService;
        this.getAllFilms$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__actions_swapi_film_actions__["b" /* GET_ALL */])
            .startWith(__WEBPACK_IMPORTED_MODULE_10__actions_swapi_film_actions__["b" /* GET_ALL */])
            .switchMap(function () { return _this.swapiService.getAllFilms()
            .map(function (res) {
            return new __WEBPACK_IMPORTED_MODULE_10__actions_swapi_film_actions__["c" /* SwapiGetAllComplete */](res.results);
        })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_10__actions_swapi_film_actions__["c" /* SwapiGetAllComplete */]([])); }); });
        /**
         * For each result when we load all films we need to find the imdb id
         */
        this.getAllComplete$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__actions_swapi_film_actions__["a" /* GET_ALL_COMPLETE */])
            .map(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* toPayload */])
            .switchMap(function (films) {
            // here we need to kick off the loads for all the characters and
            return films.reduce(function (observable, film) { return observable.merge(_this.moviedbService.searchMovies(film.title, film.release_date.slice(0, 4))
                .map(function (result) { return result.results; })
                .map(function (titles) { return titles.reduce(function (prev, curr) { return prev; }); })
                .map(function (movie) { return new __WEBPACK_IMPORTED_MODULE_11__actions_moviedb_actions__["a" /* MoviedbLoadComplete */]({ movie: movie, swapi: film }); })); }, __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].of());
        });
    }
    return FilmEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Effect */])(),
    __metadata("design:type", Object)
], FilmEffects.prototype, "getAllFilms$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Effect */])(),
    __metadata("design:type", Object)
], FilmEffects.prototype, "getAllComplete$", void 0);
FilmEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_12__shared_swapi_service__["a" /* SwapiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__shared_swapi_service__["a" /* SwapiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_13__shared_moviedb_service__["a" /* MoviedbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__shared_moviedb_service__["a" /* MoviedbService */]) === "function" && _c || Object])
], FilmEffects);

var _a, _b, _c;
//# sourceMappingURL=film.effects.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_from__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_merge__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions_people_actions__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions_swapi_film_actions__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_swapi_service__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var PeopleEffects = (function () {
    function PeopleEffects(actions$, swapiService) {
        var _this = this;
        this.actions$ = actions$;
        this.swapiService = swapiService;
        this.loadPerson$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_people_actions__["a" /* LOAD */])
            .map(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* toPayload */])
            .switchMap(function (url) { return _this.swapiService.getResourceByURL(url)
            .map(function (res) {
            return new __WEBPACK_IMPORTED_MODULE_11__actions_people_actions__["b" /* SwapiLoadPersonComplete */](res);
        })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["Observable"].of(); }); });
        this.loadOnFilmComplete$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__actions_swapi_film_actions__["a" /* GET_ALL_COMPLETE */])
            .map(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* toPayload */])
            .switchMap(function (films) { return films
            .reduce(function (prev, film) { return prev.concat(film.characters.slice(0, 3).slice()); }, [])
            .filter(function (item, idx, arr) { return arr.indexOf(item) === idx; })
            .map(function (url) { return _this.swapiService.getResourceByURL(url).retry(2)
            .map(function (person) { return new __WEBPACK_IMPORTED_MODULE_11__actions_people_actions__["b" /* SwapiLoadPersonComplete */](person); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["Observable"].of(); }); })
            .reduce(function (prev, curr) { return prev.merge(curr); }); });
        this.getAllPeople$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_people_actions__["c" /* GET_ALL_PEOPLE */])
            .startWith(function () { return new __WEBPACK_IMPORTED_MODULE_11__actions_people_actions__["d" /* SwapiGetAllPeopleAction */](); })
            .switchMap(function () { return _this.swapiService.getAllPeople()
            .switchMap(function (res) { return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["Observable"].from([new __WEBPACK_IMPORTED_MODULE_11__actions_people_actions__["e" /* SwapiGetAllPeopleComplete */](res.results), new __WEBPACK_IMPORTED_MODULE_11__actions_people_actions__["f" /* SwapiGetNextPagePeoplAction */](res.next)]); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["Observable"].of(); }); });
        this.getNextPage$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_people_actions__["g" /* GET_NEXT_PAGE_PEOPLE */])
            .map(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* toPayload */])
            .filter(function (i) { return i !== null; })
            .switchMap(function (url) { return _this.swapiService.getResourceByURL(url)
            .switchMap(function (res) { return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["Observable"].from([new __WEBPACK_IMPORTED_MODULE_11__actions_people_actions__["e" /* SwapiGetAllPeopleComplete */](res.results), new __WEBPACK_IMPORTED_MODULE_11__actions_people_actions__["f" /* SwapiGetNextPagePeoplAction */](res.next)]); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["Observable"].of(); }); });
    }
    return PeopleEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Effect */])(),
    __metadata("design:type", Object)
], PeopleEffects.prototype, "loadPerson$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Effect */])(),
    __metadata("design:type", Object)
], PeopleEffects.prototype, "loadOnFilmComplete$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Effect */])(),
    __metadata("design:type", Object)
], PeopleEffects.prototype, "getAllPeople$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Effect */])(),
    __metadata("design:type", Object)
], PeopleEffects.prototype, "getNextPage$", void 0);
PeopleEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_13__shared_swapi_service__["a" /* SwapiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__shared_swapi_service__["a" /* SwapiService */]) === "function" && _b || Object])
], PeopleEffects);

var _a, _b;
//# sourceMappingURL=people.effects.js.map

/***/ }),

/***/ 287:
/***/ (function(module, exports) {

//# sourceMappingURL=film.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_swapi_film_actions__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_moviedb_actions__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_config_moviedb_variables__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_swapi_service__ = __webpack_require__(58);
/* harmony export (immutable) */ __webpack_exports__["a"] = SWAPI_FILM_REDUCER;
/* unused harmony export getIds */
/* unused harmony export getEntities */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAllFilms; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};





var initialState = {
    entities: {},
    ids: []
};
function SWAPI_FILM_REDUCER(state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        /**
         * When all the films are returned we get them in a list of swapi films
         */
        case __WEBPACK_IMPORTED_MODULE_1__actions_swapi_film_actions__["a" /* GET_ALL_COMPLETE */]:
            var films = payload;
            var entities = films.reduce(function (prev, film) {
                var swapiId = __WEBPACK_IMPORTED_MODULE_4__shared_swapi_service__["a" /* SwapiService */].GET_ID_FROM_SWAPI_URL(film.url);
                var defaultEntity = state.entities[swapiId] || {};
                return __assign({}, prev, (_a = {}, _a[swapiId] = __assign({}, defaultEntity, { swapiId: swapiId, swapi: film }), _a));
                var _a;
            }, {});
            var ids = films.map(function (film) { return __WEBPACK_IMPORTED_MODULE_4__shared_swapi_service__["a" /* SwapiService */].GET_ID_FROM_SWAPI_URL(film.url); });
            return Object.assign({}, state, {
                ids: ids,
                entities: entities
            });
        case __WEBPACK_IMPORTED_MODULE_2__actions_moviedb_actions__["b" /* LOAD_MOVIE_COMPLETE */]:
            var movie = payload.movie;
            var film = payload.swapi;
            var swapId = __WEBPACK_IMPORTED_MODULE_4__shared_swapi_service__["a" /* SwapiService */].GET_ID_FROM_SWAPI_URL(film.url);
            var entity = Object.assign({}, state.entities[swapId] || {}, {
                movieDbId: movie.id,
                movieDb: movie,
                posterPath: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__shared_config_moviedb_variables__["b" /* POSTER_PATH */])(movie.poster_path)
            });
            return Object.assign({}, state, {
                entities: Object.assign({}, state.entities, (_b = {},
                    _b[swapId] = entity,
                    _b)),
                ids: state.ids
            });
        default:
            return state;
    }
    var _b;
}
var getIds = function (state) { return state.ids; };
var getEntities = function (state) { return state.entities; };
var getAllFilms = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getIds, getEntities, function (ids, entities) { return ids.map(function (id) { return entities[id]; }); });
//# sourceMappingURL=films.reducer.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_people_actions__ = __webpack_require__(159);
/* harmony export (immutable) */ __webpack_exports__["a"] = SWAPI_PEOPLE_REDUCER;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getEntities; });
/* unused harmony export getIds */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllPeople; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = {
    entities: {},
    ids: []
};
function SWAPI_PEOPLE_REDUCER(state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_people_actions__["h" /* LOAD_COMPLETE */]:
            {
                var person = payload;
                var id = person.url;
                var entities = Object.assign({}, state.entities, (_b = {},
                    _b[id] = person,
                    _b));
                var ids = state.ids.indexOf(id) > -1 ? state.ids : state.ids.concat([id]);
                return Object.assign({}, state, {
                    entities: entities,
                    ids: ids
                });
            }
        // add the new people to the existing ones
        case __WEBPACK_IMPORTED_MODULE_1__actions_people_actions__["i" /* GET_ALL_PEOPLE_COMPLETE */]:
            {
                var people = payload;
                var newIds = people.map(function (person) { return person.url; });
                var ids = state.ids.concat(newIds).filter(function (item, idx, arr) { return arr.indexOf(item) === idx; });
                var entities = Object.assign({}, state.entities, __assign({}, people.reduce(function (prev, person) {
                    return (__assign({}, prev, (_a = {},
                        _a[person.url] = person,
                        _a)));
                    var _a;
                }, {})));
                return __assign({}, state, {
                    entities: entities,
                    ids: ids
                });
            }
        default:
            return state;
    }
    var _b;
}
;
var getEntities = function (state) { return state.entities; };
var getIds = function (state) { return state.ids; };
var getAllPeople = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getEntities, getIds, function (entities, ids) { return ids.map(function (id) { return entities[id]; }); });
//# sourceMappingURL=people.reducer.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_favorite_char_actions__ = __webpack_require__(157);
/* harmony export (immutable) */ __webpack_exports__["a"] = FAV_REDUCER;

var initialState = null;
function FAV_REDUCER(state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_favorite_char_actions__["a" /* NEW_FAV_CHARACTER */]:
            var char = payload;
            return char.url;
        default:
            return state;
    }
}
;
//# sourceMappingURL=favorite-char.reducer.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_worst_char_actions__ = __webpack_require__(160);
/* harmony export (immutable) */ __webpack_exports__["a"] = WORST_REDUCER;

var initialState = null;
function WORST_REDUCER(state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_worst_char_actions__["a" /* NEW_WORST_CHAR */]:
            var char = payload;
            return char.url;
        default:
            return state;
    }
}
;
//# sourceMappingURL=worst-char.reducer.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_reducers_favorite_char_reducer__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_reducers_worst_char_reducer__ = __webpack_require__(291);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UI_REDUCER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFavChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getWorstChar; });



var reducers = {
    favoriteChar: __WEBPACK_IMPORTED_MODULE_1__ui_reducers_favorite_char_reducer__["a" /* default */],
    worstChar: __WEBPACK_IMPORTED_MODULE_2__ui_reducers_worst_char_reducer__["a" /* default */]
};
var UI_REDUCER = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["h" /* combineReducers */])(reducers);
var getFavChar = function (state) { return state.favoriteChar; };
var getWorstChar = function (state) { return state.worstChar; };
//# sourceMappingURL=ui-state.reducer.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PEOPLE_URL; });
/* unused harmony export GET_PERSON_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FILMS_URL; });
/* unused harmony export GET_FILM_URL */
/* unused harmony export SPECIES_URL */
/* unused harmony export GET_SPECIES_URL */
/* unused harmony export STARSHIPS_URL */
/* unused harmony export GET_STARSHIP_URL */
/* unused harmony export PLANETS_URL */
/* unused harmony export GET_PLANET_URL */
/* unused harmony export VEHICLES_URL */
/* unused harmony export GET_VEHICLE_URL */
var SWAPI_URL = 'https://swapi.co/api';
/**
 * Generate all the urls for the star wars api
 */
var PEOPLE_URL = SWAPI_URL + "/people";
var GET_PERSON_URL = function (personId) { return PEOPLE_URL + "/" + personId; };
var FILMS_URL = SWAPI_URL + "/films/";
var GET_FILM_URL = function (filmId) { return FILMS_URL + "/" + filmId; };
var SPECIES_URL = SWAPI_URL + "/species/";
var GET_SPECIES_URL = function (speciesId) { return SPECIES_URL + "/" + speciesId; };
var STARSHIPS_URL = SWAPI_URL + "/starships/";
var GET_STARSHIP_URL = function (starshipId) { return STARSHIPS_URL + "/" + starshipId; };
var PLANETS_URL = SWAPI_URL + "/planets/";
var GET_PLANET_URL = function (planetId) { return PLANETS_URL + "/" + planetId; };
var VEHICLES_URL = SWAPI_URL + "/vehicles/";
var GET_VEHICLE_URL = function (vehicleId) { return VEHICLES_URL + "/" + vehicleId; };
//# sourceMappingURL=swapi.variables.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_c3__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_c3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_c3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrawlChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrawlChartComponent = (function () {
    function CrawlChartComponent(renderer, elRef) {
        this.renderer = renderer;
        this.elRef = elRef;
        this.chart = __WEBPACK_IMPORTED_MODULE_1_c3__["generate"]({
            data: {
                columns: [],
                type: 'bar'
            },
            bar: {
                width: {
                    ratio: 0.5
                }
            }
        });
    }
    Object.defineProperty(CrawlChartComponent.prototype, "data", {
        set: function (value) {
            this.chart.load(value);
            this.chart.flush();
        },
        enumerable: true,
        configurable: true
    });
    CrawlChartComponent.prototype.ngOnInit = function () {
        this.renderer.appendChild(this.elRef.nativeElement, this.chart.element);
    };
    CrawlChartComponent.prototype.ngAfterViewChecked = function () {
        this.chart.flush();
    };
    CrawlChartComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeChild(this.elRef.nativeElement, this.chart.element);
    };
    return CrawlChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CrawlChartComponent.prototype, "data", null);
CrawlChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'sw-crawl-chart',
        template: __webpack_require__(572),
        styles: [__webpack_require__(359)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* Renderer2 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object])
], CrawlChartComponent);

var _a, _b;
//# sourceMappingURL=crawl-chart.component.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_film__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_film___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_film__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilmCardComponent = (function () {
    function FilmCardComponent() {
    }
    FilmCardComponent.prototype.ngOnInit = function () {
    };
    FilmCardComponent.prototype.filterSelectCharacters = function (characters) {
        return characters.filter(function (person) { return person instanceof Object; }).filter(function (i, idx) { return idx < 3; });
    };
    return FilmCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_film__["IFilm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_film__["IFilm"]) === "function" && _a || Object)
], FilmCardComponent.prototype, "film", void 0);
FilmCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'sw-film-card',
        template: __webpack_require__(573),
        styles: [__webpack_require__(360)]
    }),
    __metadata("design:paramtypes", [])
], FilmCardComponent);

var _a;
//# sourceMappingURL=film-card.component.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeopleListComponent = (function () {
    function PeopleListComponent() {
    }
    PeopleListComponent.prototype.ngOnInit = function () { };
    return PeopleListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], PeopleListComponent.prototype, "people", void 0);
PeopleListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'sw-people-list',
        template: __webpack_require__(574),
        styles: [__webpack_require__(361)]
    }),
    __metadata("design:paramtypes", [])
], PeopleListComponent);

//# sourceMappingURL=people-list.component.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleSmallDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeopleSmallDetailComponent = (function () {
    function PeopleSmallDetailComponent() {
    }
    return PeopleSmallDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], PeopleSmallDetailComponent.prototype, "person", void 0);
PeopleSmallDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'sw-people-small-detail',
        template: __webpack_require__(575),
        styles: [__webpack_require__(362)]
    }),
    __metadata("design:paramtypes", [])
], PeopleSmallDetailComponent);

//# sourceMappingURL=people-small-detail.component.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmPairsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilmPairsComponent = (function () {
    function FilmPairsComponent() {
    }
    return FilmPairsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], FilmPairsComponent.prototype, "filmPairs", void 0);
FilmPairsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'sw-film-pairs',
        template: __webpack_require__(576),
        styles: [__webpack_require__(363)]
    }),
    __metadata("design:paramtypes", [])
], FilmPairsComponent);

//# sourceMappingURL=film-pairs.component.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent(router) {
        this.router = router;
    }
    return NavComponent;
}());
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'sw-nav',
        template: __webpack_require__(578),
        styles: [__webpack_require__(365)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], NavComponent);

var _a;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_store_reducer__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_favorite_char_actions__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_worst_char_actions__ = __webpack_require__(160);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SideBarComponent = (function () {
    function SideBarComponent(store$) {
        this.store$ = store$;
        this.worstSelect = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.favSelect = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.favoriteChar$ = this.store$.select(__WEBPACK_IMPORTED_MODULE_3__reducers_store_reducer__["c" /* getFavChar */]);
        this.worstChar$ = this.store$.select(__WEBPACK_IMPORTED_MODULE_3__reducers_store_reducer__["d" /* getWorstChar */]);
        this.crawlChart$ = this.store$.select(__WEBPACK_IMPORTED_MODULE_3__reducers_store_reducer__["e" /* getAllFilms */])
            .map(function (films) { return ({
            columns: films.map(function (film) { return [film.swapi.title, film.swapi.opening_crawl.split(/[ ]|\r\n/).length]; })
        }); });
        this.characters$ = this.store$.select(__WEBPACK_IMPORTED_MODULE_3__reducers_store_reducer__["b" /* getAllPeople */]);
        this.worstSubscription = this.worstSelect.valueChanges.subscribe(this.selectWorst.bind(this));
        this.favSubscription = this.favSelect.valueChanges.subscribe(this.selectFav.bind(this));
    }
    SideBarComponent.prototype.selectWorst = function (character) {
        this.store$.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_worst_char_actions__["b" /* NewWorstCharAction */](character));
    };
    ;
    SideBarComponent.prototype.selectFav = function (character) {
        this.store$.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_favorite_char_actions__["b" /* NewFavCharAction */](character));
    };
    ;
    SideBarComponent.prototype.ngOnDestroy = function () {
        this.worstSubscription.unsubscribe();
        this.favSubscription.unsubscribe();
    };
    return SideBarComponent;
}());
SideBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'sw-side-bar',
        template: __webpack_require__(580),
        styles: [__webpack_require__(367)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["g" /* Store */]) === "function" && _a || Object])
], SideBarComponent);

var _a;
//# sourceMappingURL=side-bar.component.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_home_home_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_people_people_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swapi_template_component__ = __webpack_require__(165);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwapiRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__swapi_template_component__["a" /* SwapiTemplateComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__containers_home_home_component__["a" /* HomeComponent */] },
            { path: 'people', component: __WEBPACK_IMPORTED_MODULE_3__containers_people_people_component__["a" /* PeopleComponent */] }
        ]
    },
];
var SwapiRoutingModule = (function () {
    function SwapiRoutingModule() {
    }
    return SwapiRoutingModule;
}());
SwapiRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], SwapiRoutingModule);

//# sourceMappingURL=swapi-routing.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swapi_routing_module__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_film_card_film_card_component__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_home_home_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_side_bar_side_bar_component__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_crawl_chart_crawl_chart_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers_people_people_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__swapi_template_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__containers_nav_nav_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_people_list_people_list_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_people_small_detail_people_small_detail_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__containers_film_pairs_film_pairs_component__ = __webpack_require__(298);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwapiModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var SwapiModule = (function () {
    function SwapiModule() {
    }
    return SwapiModule;
}());
SwapiModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__components_film_card_film_card_component__["a" /* FilmCardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__containers_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__containers_side_bar_side_bar_component__["a" /* SideBarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_crawl_chart_crawl_chart_component__["a" /* CrawlChartComponent */],
            __WEBPACK_IMPORTED_MODULE_10__containers_people_people_component__["a" /* PeopleComponent */],
            __WEBPACK_IMPORTED_MODULE_11__swapi_template_component__["a" /* SwapiTemplateComponent */],
            __WEBPACK_IMPORTED_MODULE_12__containers_nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_people_list_people_list_component__["a" /* PeopleListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_people_small_detail_people_small_detail_component__["a" /* PeopleSmallDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_15__containers_film_pairs_film_pairs_component__["a" /* FilmPairsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__swapi_routing_module__["a" /* SwapiRoutingModule */]
        ],
        providers: [],
    })
], SwapiModule);

//# sourceMappingURL=swapi.module.js.map

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "sw-side-bar {\n  width: 300px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".c-navigation {\n  background-color: #007991;\n  color: #BCD8C1;\n  height: 36px;\n  line-height: 36px; }\n  .c-navigation .c-navigation__item {\n    margin-right: 0px;\n    padding-right: 8px;\n    padding-left: 8px;\n    position: relative; }\n    .c-navigation .c-navigation__item a {\n      display: block; }\n    .c-navigation .c-navigation__item:hover {\n      background-color: #006477; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_core_compose__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_core_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ngrx_core_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngrx_store_localstorage__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngrx_store_localstorage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngrx_store_localstorage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ramda__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reselect__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__films_reducer__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__people_reducer__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ui_state_reducer__ = __webpack_require__(292);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* unused harmony export getFilmState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getAllFilms; });
/* unused harmony export getPeopleState */
/* unused harmony export getPeopleEntities */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAllPeople; });
/* unused harmony export getUIState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getFavChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getWorstChar; });
/* unused harmony export getAllFilmsFat */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getFilmPairs; });








var reducers = {
    films: __WEBPACK_IMPORTED_MODULE_5__films_reducer__["a" /* SWAPI_FILM_REDUCER */],
    people: __WEBPACK_IMPORTED_MODULE_6__people_reducer__["a" /* SWAPI_PEOPLE_REDUCER */],
    ui: __WEBPACK_IMPORTED_MODULE_7__ui_state_reducer__["a" /* UI_REDUCER */]
};
var builtReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_core_compose__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ngrx_store_localstorage__["localStorageSync"])({
    keys: [
        'ui',
        'films',
        'people'
    ],
    rehydrate: true
}), __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* combineReducers */])(reducers);
function reducer(state, action) {
    return builtReducer(state, action);
}
/**
 * Selectors for the applciation
 */
// Film selectors
var getFilmState = function (state) { return state.films; };
var getAllFilms = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_reselect__["createSelector"])(getFilmState, __WEBPACK_IMPORTED_MODULE_5__films_reducer__["b" /* getAllFilms */]);
// People selectors
var getPeopleState = function (state) { return state.people; };
var getPeopleEntities = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_reselect__["createSelector"])(getPeopleState, __WEBPACK_IMPORTED_MODULE_6__people_reducer__["b" /* getEntities */]);
var getAllPeople = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_reselect__["createSelector"])(getPeopleState, __WEBPACK_IMPORTED_MODULE_6__people_reducer__["c" /* getAllPeople */]);
// ui reducers
var getUIState = function (state) { return state.ui; };
var getFavCharTemp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_reselect__["createSelector"])(getUIState, __WEBPACK_IMPORTED_MODULE_7__ui_state_reducer__["b" /* getFavChar */]);
var getFavChar = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_reselect__["createSelector"])(getFavCharTemp, getPeopleEntities, function (fav, people) { return people[fav]; });
var getWorstCharTemp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_reselect__["createSelector"])(getUIState, __WEBPACK_IMPORTED_MODULE_7__ui_state_reducer__["c" /* getWorstChar */]);
var getWorstChar = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_reselect__["createSelector"])(getWorstCharTemp, getPeopleEntities, function (worst, people) { return people[worst]; });
// rehydrates the films with characters
var getAllFilmsFat = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_reselect__["createSelector"])(getAllFilms, getPeopleEntities, function (films, people) {
    return __WEBPACK_IMPORTED_MODULE_3_ramda__["map"](__WEBPACK_IMPORTED_MODULE_3_ramda__["over"](__WEBPACK_IMPORTED_MODULE_3_ramda__["lensPath"](['swapi', 'characters']), __WEBPACK_IMPORTED_MODULE_3_ramda__["map"](function (url) { return people[url] || url; })))(films);
});
var getFilmPairs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_reselect__["createSelector"])(getAllFilmsFat, function (films) { return films.reduce(function (prev, film, idx) {
    if (idx % 2 === 0) {
        prev.push(films.slice(idx, idx + 2));
    }
    return prev;
}, []); });
//# sourceMappingURL=store.reducer.js.map

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 572:
/***/ (function(module, exports) {

module.exports = "<div id=\"TheChart\">\n</div>\n"

/***/ }),

/***/ 573:
/***/ (function(module, exports) {

module.exports = "<div class=\"o-grid\">\n\t<img [src]=\"film.posterPath\" />\n\t<div class=\"o-grid__col\">\n\t\t<h3>{{film.swapi.title}}</h3>\n\t</div>\n\t<div>\n\t\tDirector: {{film.swapi.director}}\n\t\t<ul class=\"o-list\">\n\t\t\t<li\n\t\t\t\tclass=\"o-list__item\" \n\t\t\t\t*ngFor=\"let character of filterSelectCharacters(film.swapi.characters||[])\">{{character.name}}</li>\n\t\t</ul>\n\t</div>\n</div>"

/***/ }),

/***/ 574:
/***/ (function(module, exports) {

module.exports = "<div class=\"o-grid\">\n  <sw-people-small-detail \n    class=\"o-grid__col u-1/6\"\n    *ngFor=\"let person of people\" \n    [person]=\"person\"></sw-people-small-detail>\n</div>"

/***/ }),

/***/ 575:
/***/ (function(module, exports) {

module.exports = "<div class=\"o-container o-grid\">\n\t<div class=\"o-grid__col u-2/2\">{{person.name}}</div>\n\t<div class=\"o-grid__col u-2/2 o-grid\">\n\t\t<div class=\"o-grid__col u-1/2\">Gender:</div>\n\t\t<div class=\"o-grid__col u-1/2\">{{person.gender}}</div>\n\t</div>\n</div>"

/***/ }),

/***/ 576:
/***/ (function(module, exports) {

module.exports = "<div class=\"o-grid o-container\">\n\t<div class=\"o-grid__col u-1/3 o-grid o-grid--equal-height o-container\" *ngFor=\"let pair of filmPairs\">\n\t\t<sw-film-card class=\"o-grid__col u-1/2\" *ngFor=\"let film of pair\" [film]=\"film\"></sw-film-card>\n\t</div>\n</div>"

/***/ }),

/***/ 577:
/***/ (function(module, exports) {

module.exports = "<div class=\"o-container\">\n\t<div class=\"o-media\">\n\t\t<sw-side-bar class=\"o-media__fixed\"></sw-side-bar>\n\t\t<sw-film-pairs class=\"o-media__fluid\" [filmPairs]=\"pairs$ | async\"></sw-film-pairs>\n\t</div>\n</div>"

/***/ }),

/***/ 578:
/***/ (function(module, exports) {

module.exports = "<div class=\"c-navigation\">\n\t<div class=\"o-container\">\n\t\t<ul class=\"c-navigation__list o-list o-list--inline\">\n\t\t\t<li class=\"c-navigation__item o-list__item\"><a [routerLink]=\"['']\">Home</a></li>\n\t\t\t<li class=\"c-navigation__item o-list__item\"><a [routerLink]=\"['/people']\">People</a></li>\n\t\t</ul>\n\t</div>\n</div>"

/***/ }),

/***/ 579:
/***/ (function(module, exports) {

module.exports = "<sw-people-list [people]=\"people$ | async\">\n</sw-people-list>"

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_swapi_variables__ = __webpack_require__(293);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwapiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SwapiService = (function () {
    function SwapiService(http) {
        this.http = http;
    }
    SwapiService.GET_ID_FROM_SWAPI_URL = function (url) {
        return url.split('/').filter(function (i) { return i; }).pop();
    };
    SwapiService.prototype.getAllFilms = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_swapi_variables__["a" /* FILMS_URL */]).map(function (res) { return res.json(); });
    };
    SwapiService.prototype.getAllPeople = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_swapi_variables__["b" /* PEOPLE_URL */]).map(function (res) { return res.json(); });
    };
    SwapiService.prototype.getResourceByURL = function (url) {
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    return SwapiService;
}());
SwapiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], SwapiService);

var _a;
//# sourceMappingURL=swapi.service.js.map

/***/ }),

/***/ 580:
/***/ (function(module, exports) {

module.exports = "<div class=\"o-grid o-container\">\n\t<div class=\"o-grid__col u-2/2\">\n\t\t<h3>Favorite Character</h3>\n\t\t<sw-people-small-detail *ngIf=\"favoriteChar$ | async; else noFavChar; let favorite\" [person]=\"favorite\">\n\t\t</sw-people-small-detail>\n\t</div>\n\t<div class=\"o-grid__col u-2/2\">\n\t\t<h3>Worst Character</h3>\n\t\t<sw-people-small-detail *ngIf=\"worstChar$ | async; else noWorstChar; let favorite\" [person]=\"favorite\">\n\t\t</sw-people-small-detail>\n\t</div>\n\t<div class=\"o-grid__col u-2/2\">\n\t\t<h3>Crawl Word Counts</h3>\n\t\t<sw-crawl-chart [data]=\"crawlChart$ | async\"></sw-crawl-chart>\n\t</div>\n</div>\n<ng-template #noFavChar>\n\tNo Character selected\n</ng-template>\n<ng-template #noWorstChar>\n\tNo Character selected\n\t<select [formControl]=\"worstSelect\">\n\t\t<option>- Select -</option>\n\t\t<ng-template ngFor let-character [ngForOf]=\"characters$ | async\">\n\t\t\t<option [ngValue]=\"character\">{{character.name}}</option>\n\t\t</ng-template>\n\t</select>\n</ng-template>"

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(260);


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LOAD */
/* unused harmony export LOAD_COMPLETE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_ALL_COMPLETE; });
/* unused harmony export SwapiLoadAction */
/* unused harmony export SwapiLoadComplete */
/* unused harmony export SwapiGetAllAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SwapiGetAllComplete; });
var LOAD = '[Swapi] Film Load';
var LOAD_COMPLETE = '[Swapi] film Load Complete';
var GET_ALL = '[Swapi] All Films';
var GET_ALL_COMPLETE = '[Swapi] All Films Complete';
var SwapiLoadAction = (function () {
    function SwapiLoadAction(payload) {
        this.payload = payload;
        this.type = LOAD;
    }
    return SwapiLoadAction;
}());

var SwapiLoadComplete = (function () {
    function SwapiLoadComplete(payload) {
        this.payload = payload;
        this.type = LOAD_COMPLETE;
    }
    return SwapiLoadComplete;
}());

var SwapiGetAllAction = (function () {
    function SwapiGetAllAction() {
        this.type = GET_ALL;
    }
    return SwapiGetAllAction;
}());

var SwapiGetAllComplete = (function () {
    function SwapiGetAllComplete(payload) {
        this.payload = payload;
        this.type = GET_ALL_COMPLETE;
    }
    return SwapiGetAllComplete;
}());

//# sourceMappingURL=swapi-film.actions.js.map

/***/ })

},[623]);
//# sourceMappingURL=main.bundle.js.map