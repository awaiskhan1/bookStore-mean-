import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/comman-service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService, private router :Router) { }
  public data = new userDetail();
  public conformPass;
  ngOnInit() {
  }

  submitMethod(){
		console.log('getting signup logout ==============>', this.data);
    this.userService.postUser(this.data).subscribe(r => {
      console.log('postUser handeled scusessfully', {r});
      this.router.navigate(['/todolist', r]);
      }, e => {
        console.log('postUser having error on enter data', {e});
      });
  	}

}

// tslint:disable-next-line:class-name
export class userDetail {
  name: String;
  username: String;
  email: String;
  password: String;
  phone: String;
}


