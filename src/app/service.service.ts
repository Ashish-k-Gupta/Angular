import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public baseUrl = "http://127.0.0.1:8000/api/";
  public token: string | null = "";
  public headers: HttpHeaders;
  public isLoggedIn: any;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {

    // if (isPlatformBrowser(this.platformId) && typeof localStorage !== 'undefined') {
    //   this.isLoggedIn = localStorage.getItem('loggedIn');
    //   this.token = localStorage.getItem("token");
    // }

    // this.token = this.getLocalStorageItem('token');
    // localStorage.setItem("token",this.token)
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer 11111111111111111111"
    })
  }

  // private handleError(error: HttpErrorResponse): Observable<never> {
  //   // if (error.status === 401) {
  //   //   if (isPlatformBrowser(this.platformId)){
  //   //     localStorage.clear();
  //   //     this.router.navigate(['/login']);
  //   //     window.location.reload();
  //   //   }
  //   // }
  //   return error;
  // }


  getRequest<T>(
    url: string,
    urlParams?: any
  ): Observable<T> {
    let fullUrl = `${this.baseUrl}${url}`;
    return this.http.get<T>(fullUrl, { headers: this.headers, params: urlParams }).pipe();
  }

  postRequest(
    url: string,
    data: any,
  ): Observable<any> {
    let fullUrl = `${this.baseUrl}${url}`
    return this.http.post(fullUrl, data, { headers: this.headers }).pipe();
  }

  // putRequest(
  //   url: string,
  //   data: any,
  // ): Observable<any> {
  //   let fullUrl = `${this.baseUrl}${url}`;
  //   return this.http.put(fullUrl, data, { headers: this.headers }).pipe(catchError(this.handleError.bind(this)));
  // }

  // deleteRequest(
  //   url: string,
  // ): Observable<any> {
  //   let fullUrl = `${this.baseUrl}${url}`;
  //   return this.http.delete(fullUrl, { headers: this.headers }).pipe(catchError(this.handleError.bind(this)));
  // }


  // postFormRequest(
  //   url: string,
  //   data: any,
  // ): Observable<any> {
  //   let fullUrl = `${this.baseUrl}${url}`
  //   return this.http.post(fullUrl, data, { headers: this.headers }).pipe(catchError(this.handleError.bind(this)))
  // }
}
