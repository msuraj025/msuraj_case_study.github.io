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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-font{\r\n    color: #116a65;\r\n    font-weight: 700;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <br>\r\n  <h3 style=\"text-align:center; color: blueviolet\">\r\n    Welcome to Quiz Application\r\n  </h3>\r\n  <br>\r\n  <!-- <h1 style=\"text-align:center\", style=\"color:  blueviolet;\">\r\n    Welcome to Quiz Application;\r\n  </h1> -->\r\n  <div class=\"card\" [hidden]=\"isQuestionCardShow\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\" style=\"text-align:center; color:  rgb(226, 43, 171);\">Choose Option </h5>\r\n      <!-- <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->\r\n      <div class=\"row justify-content-md-center\">\r\n        <div class=\"col-sm-12 col-lg-3\">\r\n          <button class=\"btn btn-block btn-outline-primary cursor-restriction\" (click)=\"addQuestion()\" style=\"margin-top: 24px; color: darkgoldenrod ;\">\r\n            Add Questions </button>\r\n\r\n        </div>\r\n        <div class=\"col-sm-12 col-lg-3\">\r\n          <button class=\"btn btn-block btn-outline-primary cursor-restriction\" style=\"margin-top: 24px; color: darkred;\" (click)=\"startQuiz()\">\r\n            Start Quiz </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\" [hidden]=\"!isQuestionCardShow\">\r\n    <div class=\"card-body\">\r\n      <form #questionTest=\"ngForm\" novalidate>\r\n        <div *ngFor=\"let ques of allQuestions\">\r\n          <div>{{ques.question}}</div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-md-3 col-form-label\">Choose Correct Option</label>\r\n            <div class=\"col-md-9 col-form-label\">\r\n              <div class=\"form-check form-check-inline mr-1\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"{{ques.id}}\" value=\"a\" [(ngModel)]=\"ques.selected\">\r\n                <label class=\"form-check-label\"> {{ques.a}} </label>\r\n              </div>\r\n              <div class=\"form-check form-check-inline mr-1\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"{{ques.id}}\" value=\"b\" [(ngModel)]=\"ques.selected\">\r\n                <label class=\"form-check-label\">{{ques.b}}</label>\r\n              </div>\r\n              <div class=\"form-check form-check-inline mr-1\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"{{ques.id}}\" value=\"c\" [(ngModel)]=\"ques.selected\">\r\n                <label class=\"form-check-label\">{{ques.c}}</label>\r\n              </div>\r\n              <div class=\"form-check form-check-inline mr-1\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"{{ques.id}}\" value=\"d\" [(ngModel)]=\"ques.selected\">\r\n                <label class=\"form-check-label\">{{ques.d}}</label>\r\n              </div>\r\n              <div class=\"form-check form-check-inline mr-1\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"{{ques.id}}\" value=\"e\" [(ngModel)]=\"ques.selected\">\r\n                <label class=\"form-check-label\">{{ques.e}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n        </div>\r\n      </form>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\" style=\"justify-content: center;display: flex;\">\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"HomePage()\" style=\"margin-right: 30px;\">Cancel</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitTest()\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div bsModal #submitModal=\"bs-modal\" class=\"modal fade\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body text-center\" style=\"color: #196f77;\">\r\n        <h4>Total Questions: {{allQuestions.length}} </h4>\r\n        <h4>\r\n          Total Answered: {{totalAnswered}}\r\n        </h4>\r\n        <h4>\r\n          Right Answer : {{rightAnswer}}\r\n        </h4>\r\n        <span>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"checkAnswers()\" style=\"margin-right: 17px;\"> Answers</button>\r\n        </span>\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"submitModal.hide()\" style=\"margin-left: 17px;\">Close</button>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n<!-- /.modal -->\r\n<div bsModal #addQuestionModal=\"bs-modal\" class=\"modal fade\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body text-center\" style=\"color: #196f77;\">\r\n        <form #questionForm=\"ngForm\"  novalidate>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 col-12 col-lg-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"question\" class=\"label-font\"> Add Question</label>\r\n                <span style=\"color:red;\" [hidden]=\"!(question?.invalid)\">*</span>\r\n                <input type=\"text\" class=\"form-control\" name=\"question\" placeholder=\"Enter Question\" [(ngModel)]=\"questionObj.question\" [ngClass]=\"{\r\n                      'is-invalid': question?.invalid && (question?.dirty ||question?.touched),\r\n                      'is-valid': question?.valid && (question?.dirty || question?.touched)\r\n                 }\" #question=\"ngModel\" required>\r\n                <div class=\"invalid-feedback\" *ngIf=\"question.errors && (question.dirty || question.touched)\">\r\n                  <p *ngIf=\"question.errors.required\">Question Description is required</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 col-12 col-lg-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"a\">Option a.</label>\r\n                <span style=\"color:red;\" [hidden]=\"!(a?.invalid)\">*</span>\r\n                <input type=\"text\" class=\"form-control\" name=\"a\" placeholder=\"Enter First Option\" [(ngModel)]=\"questionObj.a\" [ngClass]=\"{\r\n                              'is-invalid': a?.invalid && (a?.dirty ||a?.touched),\r\n                              'is-valid': a?.valid && (a?.dirty || a?.touched)\r\n                         }\" #a=\"ngModel\" required>\r\n                <div class=\"invalid-feedback\" *ngIf=\"a.errors && (a.dirty || a.touched)\">\r\n                  <p *ngIf=\"a.errors.required\">Option is required</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12 col-12 col-lg-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"b\">Option b.</label>\r\n                <span style=\"color:red;\" [hidden]=\"!(b?.invalid)\">*</span>\r\n                <input type=\"text\" class=\"form-control\" name=\"b\" placeholder=\"Enter Second Option\" [(ngModel)]=\"questionObj.b\" [ngClass]=\"{\r\n                          'is-invalid': b?.invalid && (b?.dirty ||b?.touched),\r\n                          'is-valid': b?.valid && (b?.dirty || b?.touched)\r\n                     }\" #b=\"ngModel\" required>\r\n                <div class=\"invalid-feedback\" *ngIf=\"b.errors && (b.dirty || b.touched)\">\r\n                  <p *ngIf=\"b.errors.required\">Option is required</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 col-12 col-lg-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"c\">Option c.</label>\r\n                <span style=\"color:red;\" [hidden]=\"!(c?.invalid)\">*</span>\r\n                <input type=\"text\" class=\"form-control\" name=\"c\" placeholder=\"Enter Third Option\" [(ngModel)]=\"questionObj.c\" [ngClass]=\"{\r\n                                'is-invalid': c?.invalid && (c?.dirty ||c?.touched),\r\n                                'is-valid': c?.valid && (c?.dirty || c?.touched)\r\n                           }\" #c=\"ngModel\" required>\r\n                <div class=\"invalid-feedback\" *ngIf=\"c.errors && (c.dirty || c.touched)\">\r\n                  <p *ngIf=\"c.errors.required\">Option is required</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12 col-12 col-lg-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"b\">Option d.</label>\r\n                <span style=\"color:red;\" [hidden]=\"!(d?.invalid)\">*</span>\r\n                <input type=\"text\" class=\"form-control\" name=\"d\" placeholder=\"Enter fourth Option\" [(ngModel)]=\"questionObj.d\" [ngClass]=\"{\r\n                            'is-invalid': d?.invalid && (d?.dirty ||d?.touched),\r\n                            'is-valid': d?.valid && (d?.dirty || d?.touched)\r\n                       }\" #d=\"ngModel\" required>\r\n                <div class=\"invalid-feedback\" *ngIf=\"d.errors && (d.dirty || d.touched)\">\r\n                  <p *ngIf=\"d.errors.required\">Option is required</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-md-12 label-font\">Choose Correct Answer Option\r\n              <span style=\"color:red;\" [hidden]=\"!(answer?.invalid)\">*</span>\r\n            </label>\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-check form-check-inline mr-2\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"answer\" value=\"a\" [(ngModel)]=\"questionObj.answer\" #answer=\"ngModel\" required>\r\n                <label class=\"form-check-label\">a.</label>\r\n              </div>\r\n              <div class=\"form-check form-check-inline mr-2\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"answer\" value=\"b\" [(ngModel)]=\"questionObj.answer\" #answer=\"ngModel\" required>\r\n                <label class=\"form-check-label\">b.</label>\r\n              </div>\r\n              <div class=\"form-check form-check-inline mr-2\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"answer\" value=\"c\" [(ngModel)]=\"questionObj.answer\" #answer=\"ngModel\" required>\r\n                <label class=\"form-check-label\">c.</label>\r\n              </div>\r\n              <div class=\"form-check form-check-inline mr-2\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"answer\" value=\"d\" [(ngModel)]=\"questionObj.answer\" #answer=\"ngModel\" required>\r\n                <label class=\"form-check-label\">d.</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <span>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitAddQuestion()\" [disabled]=\"questionForm.invalid\" [class.cursor-restriction]=\"questionForm.invalid\"\r\n            style=\"margin-right: 17px;\">ADD Question</button>\r\n        </span>\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"addQuestionModal.hide()\">Close</button>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n<!-- /.modal -->\r\n<div bsModal #answerModal=\"bs-modal\" class=\"modal fade\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body text-center\" style=\"color: #196f77;\">\r\n        <div *ngFor=\"let ques of allQuestions\" [style.color]=\"!ques.selected? '#ffc107' : ques.selected == ques.answer ? 'green': 'red'\">\r\n          <div>{{ques.question}}</div>\r\n          <div>Your Answer: {{ques[ques.selected]}}</div>\r\n          <div>Right Answer: {{ques.answer}}) {{ques[ques.answer]}}</div>\r\n          <hr>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"answerModal.hide()\" style=\"margin-left: 17px;\">Close</button>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n<!-- /.modal -->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _question_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question-class */ "./src/app/question-class.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(toastr) {
        this.toastr = toastr;
        this.isQuestionCardShow = false;
        this.totalAnswered = 0;
        this.questionObj = new _question_class__WEBPACK_IMPORTED_MODULE_2__["QuestionClass"]();
        this.answerArray = [];
        this.allQuestions = [{
                "id": 1,
                "question": " What is the mode of payment on EMI Store?",
                "a": "Cash on delivery",
                "b": "Debit / Credit Card",
                "c": "Bajaj Finserv EMI Network Card",
                "d": "Gift Vouchers",
                "e": "all of the above",
                "answer": "c"
            },
            {
                "id": 2,
                "question": "United Nation (UN) day is celebrated on",
                "a": "24th August",
                "b": "24th October",
                "c": "23th september",
                "d": "23th August",
                "e": "None Of The Above ",
                "answer": "b"
            },
            {
                "id": 3,
                "question": "Largest island in the world is?",
                "a": "New Guinea",
                "b": "Green Land",
                "c": "Sumatra",
                "d": "Indonesia",
                "e": "None Of The Above ",
                "answer": "b"
            },
            {
                "id": 4,
                "question": "First Indian to take hat-trick in Test cricket is?",
                "a": " Chetan Sharma",
                "b": "Kapil Dev",
                "c": "Harbhajan Singh",
                "d": "Irfan Pathan",
                "e": "None Of The Above ",
                "answer": "a"
            },
            {
                "id": 5,
                "question": "Name the COVID vaccine candidate manufactured by Bharat Biotech that has been approved by the Drug Controller General of India (DGCI)?",
                "a": "CoViD Shield",
                "b": "COVID Shield",
                "c": "Covaxin",
                "d": "Apna Vaccine",
                "e": "None Of The Above ",
                "answer": "c"
            }
        ];
    }
    /**Method call on submit the test */
    AppComponent.prototype.submitTest = function () {
        this.rightAnswer = 0;
        this.totalAnswered = 0;
        for (var i = 0; i < this.allQuestions.length; i++) {
            if ("selected" in this.allQuestions[i] && (this.allQuestions[i]["selected"] != null)) {
                this.totalAnswered++;
                if (this.allQuestions[i]["selected"] == this.allQuestions[i]["answer"]) {
                    this.rightAnswer++;
                }
            }
        }
        this.submitModal.show();
    };
    AppComponent.prototype.startQuiz = function () {
        for (var i = 0; i < this.allQuestions.length; i++) {
            if ("selected" in this.allQuestions[i]) {
                delete this.allQuestions[i]["selected"];
            }
        }
        this.questionTest.reset();
        this.isQuestionCardShow = true;
    };
    AppComponent.prototype.HomePage = function () {
        this.isQuestionCardShow = false;
    };
    AppComponent.prototype.addQuestion = function () {
        this.addQuestionModal.show();
    };
    AppComponent.prototype.submitAddQuestion = function () {
        var quesTemp = JSON.parse(JSON.stringify(this.questionObj));
        quesTemp["id"] = this.allQuestions.length + 1;
        this.allQuestions.push(quesTemp);
        this.questionForm.reset();
        this.toastr.success("Question Added Successfully!!");
        this.addQuestionModal.hide();
    };
    AppComponent.prototype.checkAnswers = function () {
        this.submitModal.hide();
        this.answerModal.show();
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitModal'),
        __metadata("design:type", _node_modules_ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], AppComponent.prototype, "submitModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addQuestionModal'),
        __metadata("design:type", _node_modules_ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], AppComponent.prototype, "addQuestionModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('answerModal'),
        __metadata("design:type", _node_modules_ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], AppComponent.prototype, "answerModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('questionForm'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "questionForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('questionTest'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "questionTest", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["AccordionModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/question-class.ts":
/*!***********************************!*\
  !*** ./src/app/question-class.ts ***!
  \***********************************/
/*! exports provided: QuestionClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionClass", function() { return QuestionClass; });
var QuestionClass = /** @class */ (function () {
    function QuestionClass() {
    }
    return QuestionClass;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Suraj\Documents\GitHub\Case_study\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map