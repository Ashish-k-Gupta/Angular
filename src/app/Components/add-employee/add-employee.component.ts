import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  userList: any [] = []

  constructor(private http: HttpClient){
    this.getAllUser()
  }

  getAllUser(){
    this.http.get('http://127.0.0.1:8000/users').subscribe((result:any)=>{
      this.userList = result;
      console.log("rrrrrrrrrrrrrrrrrrr",this.userList)
    })
  }
}
