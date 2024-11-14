import { NgClass, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [NgClass, FormsModule, NgIf],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})


export class DataBindingComponent {

  courseName: string = "Angular-18";
  essay: string = "";
  selectedValue: string = 'select';

  inputType ={
    radio: 'radio',
    checkbox: 'checkbox',
    text: 'text'
  }


  myClassName: string = 'bg-primary';

  

      allClasses =  {
        'bg-primary': true,
        'bg-danger': true
      }

  rollNo: number = 21;
  isIndian: boolean = false;
  currentDate:  Date = new Date();

  isPrimary = true;
  isDisabled = true;
  isLarge = false;

  toggleClass() {
    this.isPrimary = !this.isPrimary;
    this.isDisabled = !this.isDisabled;
  }

  constructor() {

  }

  showAlert(message: string){
    alert(message)
  }



  firstName = signal("Ashish Gupta")


  
  changeCourseName(){
    this.courseName = this.courseName === "Angular-18" ? "React-6" : "Angular-18"
    this.firstName.set(this.firstName() === "Ashish Gupta" ? "Ashish Kumar Gupta" : "Ashish Gupta")
  }

  isVisible: boolean = true;
  isButtonVisible: "Show" | "Hide" = "Hide"

  hideAndShow(){
    this.isVisible = this.isVisible === false ? true : false
    this.isButtonVisible = this.isButtonVisible === "Hide" ? "Show" : "Hide"
  }
}
