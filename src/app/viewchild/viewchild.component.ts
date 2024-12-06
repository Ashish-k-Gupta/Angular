import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent implements AfterViewInit{

 @ViewChild('txt') textBox?: ElementRef;

 ngAfterViewInit(): void {
   const value = this.textBox?.nativeElement.value;
   
 }


}
