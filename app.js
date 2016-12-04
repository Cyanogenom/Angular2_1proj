System.register(["@angular/platform-browser-dynamic", "@angular/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var platform_browser_dynamic_1, core_1;
    var ArticleStruct, addArticle, addTopic;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ArticleStruct = (function () {
                function ArticleStruct(title, text, score) {
                    if (title === void 0) { title = "Test title!"; }
                    if (text === void 0) { text = "Test string!"; }
                    if (score === void 0) { score = 0; }
                    this.title = title;
                    this.text = text;
                    this.score = score;
                }
                ArticleStruct.prototype.up_score = function () {
                    this.score += 1;
                };
                ArticleStruct.prototype.down_score = function () {
                    this.score -= 1;
                };
                return ArticleStruct;
            }());
            addArticle = (function () {
                function addArticle() {
                    this.article = new ArticleStruct();
                }
                addArticle.prototype.up_score = function () {
                    this.article.up_score();
                    return false;
                };
                addArticle.prototype.down_score = function () {
                    this.article.down_score();
                    return false;
                };
                addArticle = __decorate([
                    core_1.Component({
                        selector: "show-articles",
                        inputs: ['article'],
                        template: "\n\t\t<div class = \"element_div\">\n\t\t\t<div class = \"conteiner\">\n\t\t\t\t<h4>Title: {{article.title}}</h4>\n\t\t\t\t<h5>Score: {{article.score}}</h5>\n\t\t\t</div>\n\t\t\t<p>{{article.text}}</p>\n\t\t\t<a href (click) = \"up_score()\">+</a>\n\t\t\t<a href (click) = \"down_score()\">-</a>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], addArticle);
                return addArticle;
            }());
            addTopic = (function () {
                function addTopic() {
                    this.articles = [new ArticleStruct()];
                }
                addTopic.prototype.add_text = function (title, text) {
                    this.articles.push(new ArticleStruct(title.value != "" ? title.value : "Default", text.value != "" ? text.value : "Default", 0));
                    title.value = "";
                    text.value = "";
                    //console.log(`Adding article title: ${title.value} and text: ${text.value}`);
                    //alert(`Adding article title: ${title.value} and text: ${text.value}`);
                };
                addTopic.prototype.sort_array = function () {
                    return this.articles.sort(function (a, b) { return b.score - a.score; });
                };
                addTopic = __decorate([
                    core_1.Component({
                        selector: "input-field",
                        directives: [addArticle],
                        template: "\n\t<div class = \"add_block\">\n\t\t<form>\n\t\t\t<div class = \"header\">\n\t\t\t\t<h3>Add a link</h3>\n\t\t\t</div>\n\t\t\t<div class = \"add_field\">\n\t\t\t\t<label for=\"link1\" accesskey=\"w\">Team:</label>\n\t\t\t\t<input type=\"text\" id=\"link1\" #new_team>\n\t\t\t</div>\n\t\t\t<div class = \"add_field\">\n\t\t\t\t<label for=\"link2\" accesskey=\"w\">Text:</label>\n\t\t\t\t<input type=\"text\" id=\"link2\" #new_text>\n\t\t\t</div>\n\t\t\t<button (click)=\"add_text(new_team, new_text)\" class=\"submit_button\"> \n\t\t\t\tSave text\n\t\t\t</button>\n\t\t</form>\n\t</div>\n\t<show-articles *ngFor=\"let article of sort_array()\" [article] = \"article\"></show-articles>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], addTopic);
                return addTopic;
            }());
            platform_browser_dynamic_1.bootstrap(addTopic);
        }
    }
});
//# sourceMappingURL=app.js.map