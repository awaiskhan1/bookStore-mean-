import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkTableModule} from '@angular/cdk/table';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { ListService } from 'src/app/comman-service/list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
	public ELEMENT_DATA :PeriodicElement[];
	constructor(private route: ActivatedRoute, private listService: ListService, private router : Router) { }
	dataSource;
	userName;
	imgFile;
	displayedColumns: string[] = ['isbn', 'title', 'author', 'published_year', 'publisher', 'pages', 'edit', 'delete'];

	@ViewChild(MatPaginator) paginator: MatPaginator;

	ngOnInit() {
		this.route.params.subscribe(e => {
			if(e._id){
				this.userName = e.name;
				console.log('param value ===========>',{e});
			}
		});
		this.listService.getBooks().subscribe((e)=> {
			this.ELEMENT_DATA = e;
			this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
			this.dataSource.paginator = this.paginator;
		}, (r) =>{
			console.log('get error ============>',r);
		});
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
	listEdit (e){
		this.router.navigate(['/editlist', e]);
	}
	listDelete (e){
		let c = confirm("are you want to delete task");
		if(c){
			this.listService.deleteBook(e._id).subscribe(r=>{
				this.ELEMENT_DATA = this.ELEMENT_DATA.filter( c => c['_id'] !== e._id);
				this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
			});
		}
	}
	methodCalled(){
		console.log('log form the button  ------------------=============>', this.imgFile);
	}
	// routes/photo
}

export interface PeriodicElement {
	// name: string;
	// position: number;
	// weight: number;
	// symbol: string;
	// edit? : string;
	// delete? : string;
	isbn: String;
    title: String;
    author: String;
    description: String;
    published_year: String;
    publisher: String;
}

// const ELEMENT_DATA: PeriodicElement[] = [
// 	{
// 		isbn: "9781593275846",
// 		title: "Eloquent JavaScript, Second Edition",
// 		author: "Marijn Haverbeke",
// 		published_year: "2014-12-14T00:00:00.000Z",
// 		publisher: "No Starch Press",
// 		pages: 472,
// 		description: "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
// 		website: "http://eloquentjavascript.net/"
// 	  },
// 	  {
// 		isbn: "9781449331818",
// 		title: "Learning JavaScript Design Patterns",
// 		author: "Addy Osmani",
// 		published_year: "2012-07-01T00:00:00.000Z",
// 		publisher: "O'Reilly Media",
// 		pages: 254,
// 		description: "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
// 		website: "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"
// 	  },
// 	  {
// 		isbn: "9781449365035",
// 		title: "Speaking JavaScript",
// 		author: "Axel Rauschmayer",
// 		published_year: "2014-02-01T00:00:00.000Z",
// 		publisher: "O'Reilly Media",
// 		pages: 460,
// 		description: "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
// 		website: "http://speakingjs.com/"
// 	  },
// 	  {
// 		isbn: "9781491950296",
// 		title: "Programming JavaScript Applications",
// 		author: "Eric Elliott",
// 		published_year: "2014-07-01T00:00:00.000Z",
// 		publisher: "O'Reilly Media",
// 		pages: 254,
// 		description: "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
// 		website: "http://chimera.labs.oreilly.com/books/1234000000262/index.html"
// 	  },
// 	  {
// 		isbn: "9781593277574",
// 		title: "Understanding ECMAScript 6",
// 		author: "Nicholas C. Zakas",
// 		published_year: "2016-09-03T00:00:00.000Z",
// 		publisher: "No Starch Press",
// 		pages: 352,
// 		description: "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
// 		website: "https://leanpub.com/understandinges6/read"
// 	  },
// 	  {
// 		isbn: "9781491904244",
// 		title: "You Don't Know JS",
// 		author: "Kyle Simpson",
// 		published_year: "2015-12-27T00:00:00.000Z",
// 		publisher: "O'Reilly Media",
// 		pages: 278,
// 		description: "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the You Don’t Know JS series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",
// 		website: "https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20&%20beyond"
// 	  },
// 	  {
// 		isbn: "9781449325862",
// 		title: "Git Pocket Guide",
// 		author: "Richard E. Silverman",
// 		published_year: "2013-08-02T00:00:00.000Z",
// 		publisher: "O'Reilly Media",
// 		pages: 234,
// 		description: "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience.",
// 		website: "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
// 	  },
// 	  {
// 		isbn: "9781449337711",
// 		title: "Designing Evolvable Web APIs with ASP.NET",
// 		author: "Glenn Block, et al.",
// 		published_year: "2014-04-07T00:00:00.000Z",
// 		publisher: "O'Reilly Media",
// 		pages: 538,
// 		description: "Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.",
// 		website: "http://chimera.labs.oreilly.com/books/1234000001708/index.html"
// 	  }
// ];
