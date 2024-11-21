import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable, map } from 'rxjs';
import { NaPipe } from './naPipe/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, JsonPipe, AsyncPipe, NaPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  
firstName: string = "this is a demo text to learn about inbuilt pipes in Angular"

currentDate: Date = new Date();
typeOfInput: string = "datetime-local"


currentTime: Observable<Date> = new Observable<Date>;

student: any = {
  name: "Ashish",
  city: "Patiala",
  empId: 5001, 
  age1: 24,
  age2: '',
  age3: undefined,
  age4: null
}

constructor(){
    this.currentTime = interval(1000).pipe(map(() => new Date()));
}

}
