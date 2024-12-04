import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {

@Input() btnClass: string = ''
@Input() btnText: string = ''

@Output() myButtonClick = new EventEmitter<number>;

onClick(val: number){
  this.myButtonClick.emit(val)
}
}
