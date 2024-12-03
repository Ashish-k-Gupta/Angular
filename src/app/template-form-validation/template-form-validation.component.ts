import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Student {
  [key: string]: any;
}



@Component({
  selector: 'app-template-form-validation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form-validation.component.html',
  styleUrl: './template-form-validation.component.css'
})



export class TemplateFormValidationComponent {



  studentObj: Student = {
    
  }

  formValue: any;
  onSubmit(){
    debugger
    this.formValue = this.studentObj
    console.log(this.formValue)
  }


  userList: any [] = []

  constructor(private http: HttpClient){
    this.getAllUser()
  }

  getAllUser(){
    this.http.get('https://127.0.0:8000/users').subscribe((result:any)=>{
      this.userList = result;
      console.log(result)
    })
  }



}


