import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  baseUrl: string = 'https://projectapi.gerasim.in/api/complaint/'




  constructor(private http: HttpClient) { }

  getDeptDataYt()  {
   return this.http.get(`${this.baseUrl}getParentDepartment`);
  }

  addDepDataYt(obj: any){
   return this.http.post(`${this.baseUrl}AddNewDepartment`, obj)
  }
}
