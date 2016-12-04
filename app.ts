import { bootstrap } from "@angular/platform-browser-dynamic"; 
import { Component } from "@angular/core"; 

class ArticleStruct
{
	title: string;
	text: string;
	score: number;
	constructor(title = "Test title!", text = "Test string!", score = 0)
	{
		this.title = title;
		this.text = text;
		this.score = score;
	}	

	up_score(): void
	{
		this.score += 1;
	}
	down_score(): void
	{
		this.score -= 1;
	}
}

@Component(
{
	selector: "show-articles",
	inputs: ['article'],
	template:`
		<div class = "element_div">
			<div class = "conteiner">
				<h4>Title: {{article.title}}</h4>
				<h5>Score: {{article.score}}</h5>
			</div>
			<p>{{article.text}}</p>
			<a href (click) = "up_score()">+</a>
			<a href (click) = "down_score()">-</a>
		</div>
	`
})
class addArticle
{
	article: ArticleStruct;

	constructor()
	{
		this.article = new ArticleStruct();
	}

	up_score(): boolean
	{
		this.article.up_score();
		return false;
	}
	down_score(): boolean
	{
		this.article.down_score();
		return false;
	}
}


@Component(
{
	selector: "input-field",
	directives: [addArticle],
	template: `
	<div class = "add_block">
		<form>
			<div class = "header">
				<h3>Add a link</h3>
			</div>
			<div class = "add_field">
				<label for="link1" accesskey="w">Team:</label>
				<input type="text" id="link1" #new_team>
			</div>
			<div class = "add_field">
				<label for="link2" accesskey="w">Text:</label>
				<input type="text" id="link2" #new_text>
			</div>
			<button (click)="add_text(new_team, new_text)" class="submit_button"> 
				Save text
			</button>
		</form>
	</div>
	<show-articles *ngFor="let article of sort_array()" [article] = "article"></show-articles>
	`
})
class addTopic
{
	articles: ArticleStruct[];
	constructor()
	{
		this.articles = [new ArticleStruct()]
	}

	add_text(title: HTMLInputElement, text: HTMLInputElement
		): void
	{
		this.articles.push(new ArticleStruct(title.value != "" ? title.value : "Default", text.value != "" ? text.value : "Default", 0));
		title.value = "";
		text.value = "";
		//console.log(`Adding article title: ${title.value} and text: ${text.value}`);
		//alert(`Adding article title: ${title.value} and text: ${text.value}`);
	}
	sort_array(): ArticleStruct[]
	{
		return this.articles.sort((a: ArticleStruct, b: ArticleStruct) => b.score - a.score);
	}
}
bootstrap(addTopic);