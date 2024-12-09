import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  route  = inject(Router)

  userObj: any={
    username: '', 
    userPassword: ''
  }

login(){
  if(this.userObj.username == 'ashish@test.com' && this.userObj.userPassword == '1234'){
    localStorage.setItem('loginUser', this.userObj.username)    
    this.route.navigateByUrl('/add-emp')
    alert("Login Successfully")
  }else{
    console.log(this.userObj.username, this.userObj.userPassword);
    alert('Input Invalid')
  }
}


}
