import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ServiceService } from '../service.service';
import { DepartmentService } from '../service/department.service';


interface User {
  name?: string;
  email?: string;
  password?: string
}

interface NewDept{
  departmentId?: any;
  departmentName: any;
  departmentLogo: any;

}

@Component({
  selector: 'app-crud-apis',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './crud-apis.component.html',
  styleUrl: './crud-apis.component.css'
})



export class CrudAPISComponent implements OnInit {

  newUser: FormGroup;
  userList: User[] =[];



  newDeptForm!: FormGroup;
  deptList: any[] = [];

  regex: RegExp = /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;  // Correct regex


  constructor (private http: HttpClient,private api:ServiceService, private deptSrv: DepartmentService, private fb: FormBuilder){

    this.newUser = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email, ),
      password: new FormControl('', Validators.pattern(this.regex))
    })
  }
  

  ngOnInit(): void {
    this.newDeptForm = this.fb.group({
      departmentId: [null, Validators.required],
      departmentName: ['', Validators.required],
      departmentLogo: ['', Validators.required]
    });
  }


  getUserList(){
    this.api.getRequest<any>('country').subscribe({
      next: (res) =>{
        console.log("country list data",res.list);
        let namesArrY = [];
        for (const item of res.list){
          namesArrY.push(item.name)
        }
        this.userList = namesArrY;
      },
      error: (err) =>{
        console.log('Error Fetching users', err)
      }
    })

}



addUserToList() {
  if (this.newUser.valid) {
    this.api.postRequest('country', {name:"india"}).subscribe({
      next: (res) => {
        console.log("country add data",res)
        this.userList.push(res)
        // this.getUserList()
        alert(`${this.newUser.get('name')?.value} Added Successfully`);
        this.newUser.reset(); 
      },
      error: (err: any) => {
        console.error('Error adding user', err);
      }
    });
  } else {
    Object.keys(this.newUser.controls).forEach(field => {
      const control = this.newUser.get(field);
      control?.markAsTouched();
    });
  }
}



    getYtData(){
      this.deptSrv.getDeptDataYt().subscribe((res:any) =>{
        this.deptList = res.data;
        console.log(this.deptList)
        for(const item of res.data){
          console.log(item.departmentName)
        }
      })
    }


    addDept():void{

      if(this.newDeptForm.invalid){
        alert('Please fill valid data.')
        return
      }
      this.deptSrv.addDepDataYt(this.newDeptForm.value).subscribe({
        next: (res) =>{
          console.log("Department Added successfully:", res);
          // alert("Department added successfully!");
          // this.getYtData();
        },
        error: (err) => {
          console.error("Error adding department:", err);
          alert("There was an error adding the department. Please try again later.");
        }
      })
    }



}
