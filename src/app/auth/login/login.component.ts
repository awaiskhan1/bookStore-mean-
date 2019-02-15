import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/comman-service/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	constructor(private userService : UserService, private router: Router, private snackbar: MatSnackBar) { }
	data = {
		email:'',
		password: ''
	};
	ngOnInit() {
	}
	submitMethod(){
		if(this.data.email && this.data.password){
			this.userService.loginUser(this.data).subscribe((r) =>{
				console.log('get the result ------------->', r);
				if(!r){
					this.snackbar.open('Incorrect Email, Password', 'Error', {
						duration: 4000
					});
				}
				else{
					this.router.navigate(['/todolist', r]);
				}
			},(e) => {
				return console.log('postUser having error on enter data', { e });
			});
		}
		else{
			let c = 'Please Insert';
			c += (!this.data.email)? ' Email': '';
			c += (!this.data.password)? ' Password': '';
			this.snackbar.open(c, 'Error', {
				duration: 4000
			});
		}
	  }
	  public openSnackBar() {
		// this.snackBar.openFromComponent(PizzaPartyComponent, {
		//   duration: 500,
		// });
		// this.snackbar.open('Message archived', 'Undo', {
		// 	duration: 3000
		//   });
	  }

}

// tslint:disable-next-line:class-name

