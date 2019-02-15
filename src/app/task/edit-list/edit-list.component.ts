import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDatepickerModule, MatDatepicker, MatDatepickerInputEvent} from '@angular/material/datepicker';
import {CalendarModule} from 'primeng/calendar';
import { ListService } from 'src/app/comman-service/list.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})

export class EditListComponent implements OnInit {
	@ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;

	constructor(private route: ActivatedRoute,private listService: ListService, private router: Router) { }
	dataId;


	private btnName = 'Create';
	private mode = 'insert';
	public  data = {
		// isbn: '',
		// title: '',
		// author: '',
		// description: '',
		// published_year: '',
		// publisher: '',
	};
	ngOnInit() {
    	this.route.params.subscribe(e => {
			if(e._id){
				this.dataId = e._id;
				this.mode = 'edit';
				this.btnName = 'Modify';
				this.listService.getBook(this.dataId).subscribe(r=>{
					console.log('í got a book',r);
					this.data	= r;
				});
			}
			else {
				this.data = new PeriodicElement();
			}
		});
	}
	addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
		console.log(`${type}: ${event.value}`);
	}
	submitMethod(){
		console.log('getting logout ==============>', this.data);
		if(this.mode === 'insert'){
			this.listService.postBook(this.data).subscribe(r => console.log('postBook handeled scusessfully', {r}), e => console.log('postBook having error on enter data', {e}));
		}
		else{
			this.listService.updateBook(this.dataId,this.data).subscribe(r => console.log('updateBook handeled scusessfully', {r}), e => console.log('updateBook having error on enter data', {e}));
		}
		this.router.navigate(['/todolist', this.data]);
  	}
}
export class PeriodicElement {
	isbn: String;
    title: String;
    author: String;
    description: String;
    published_year: String;
    publisher: String;
	pages ? : number;
}

