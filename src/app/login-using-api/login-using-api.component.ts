import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-using-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-using-api.component.html',
  styleUrl: './login-using-api.component.css'
})
export class LoginUsingAPIComponent {

apiUserObj: any ={
  email: '',
  password: ''
}

route  = inject(Router)
http = inject(HttpClient)

apiLogin(){
  this.http.post("https://projectapi.gerasim.in/api/UserApp/login", this.apiUserObj).subscribe((res:any) =>{
    if(res.result){
      console.log(this.apiUserObj.email, this.apiUserObj.password);
      
      alert("login Success")
      localStorage.setItem('loginUser', res.data)
      this.route.navigateByUrl('add-emp')
    }else{
      alert(res.message)
      console.log(this.apiUserObj.email, this.apiUserObj.password);
    }
  })
}

}
