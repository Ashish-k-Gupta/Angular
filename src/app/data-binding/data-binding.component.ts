<<<<<<< HEAD
import { NgClass, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [NgClass, FormsModule, NgIf],
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'] // Fixed typo from styleUrl to styleUrls
})
export class DataBindingComponent {
  courseName: string = "Angular-18";
  essay: string = "";
  selectedValue: string = 'select';
 
  inputType = {
    radio: 'radio',
    checkbox: 'checkbox',
    text: 'text'
  };

  myClassName: string = 'bg-primary';
  allClasses = {
    'bg-primary': true,
    'bg-danger': true
  };

  rollNo: number = 21;
  isIndian: boolean = false;
  currentDate: Date = new Date();

  isPrimary = true;
  isDisabled = true;
  isLarge = false;

  num1: string = '';
  num2: string = '';

  isChecked: boolean = false;
  selectedCountry: string = "";

  cityArray: string[] = [];
  
  // Change studentList to use the Student type
  studentList: Student[] = [
    { studId: 11, isActive: true, marks: 33, name: "Ashish", age: 24, rollNum: 79 },
    { studId: 22, isActive: false, marks: 56, name: "Karan", age: 23, rollNum: 74 },
    { studId: 33, isActive: false, marks: 83, name: "Lovedeep", age: 25, rollNum: 75 }
  ];

  borderClasses: string = "none"


  toggleClass() {
    this.isPrimary = !this.isPrimary;
    this.isDisabled = !this.isDisabled;
  }

  constructor() {}

  showAlert(message: string) {
    alert(message);
  }

  firstName = signal("Ashish Gupta");

  changeCourseName() {
    this.courseName = this.courseName === "Angular-18" ? "React-6" : "Angular-18";
    this.firstName.set(this.firstName() === "Ashish Gupta" ? "Ashish Kumar Gupta" : "Ashish Gupta");
  }

  isVisible: boolean = true;
  isButtonVisible: "Show" | "Hide" = "Hide";

  hideAndShow() {
    this.isVisible = !this.isVisible;
    this.isButtonVisible = this.isButtonVisible === "Hide" ? "Show" : "Hide";
  }

  spreadDivBgColor: string = '';
  
  changeRed():void{
    this.borderClasses = "borderRed"
  }
  changeBlue():void{
    this.borderClasses = "borderBlue"
  }
  changeGreen():void{
    this.borderClasses = "borderGreen"
  }


  customStyle: any ={
    'color': 'white',
    'background-color': 'red',
    'width': '200px',
    'height': '200px',
    'border': '2px solid green',
    'border-radius': '50%',
    'text-align': 'center'
  }





}

// Define the Student interface
interface Student {
  studId: number;
  name: string;
  age: number;
  rollNum: number;
  isActive: boolean;
  marks: number
=======
import { NgClass, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [NgClass, FormsModule, NgIf],
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'] // Fixed typo from styleUrl to styleUrls
})
export class DataBindingComponent {
  courseName: string = "Angular-18";
  essay: string = "";
  selectedValue: string = 'select';
 
  inputType = {
    radio: 'radio',
    checkbox: 'checkbox',
    text: 'text'
  };

  myClassName: string = 'bg-primary';
  allClasses = {
    'bg-primary': true,
    'bg-danger': true
  };

  rollNo: number = 21;
  isIndian: boolean = false;
  currentDate: Date = new Date();

  isPrimary = true;
  isDisabled = true;
  isLarge = false;

  num1: string = '';
  num2: string = '';

  isChecked: boolean = false;
  selectedCountry: string = "";

  cityArray: string[] = [];
  
  // Change studentList to use the Student type
  studentList: Student[] = [
    { studId: 11, isActive: true, marks: 33, name: "Ashish", age: 24, rollNum: 79 },
    { studId: 22, isActive: false, marks: 56, name: "Karan", age: 23, rollNum: 74 },
    { studId: 33, isActive: false, marks: 83, name: "Lovedeep", age: 25, rollNum: 75 }
  ];

  borderClasses: string = "none"


  toggleClass() {
    this.isPrimary = !this.isPrimary;
    this.isDisabled = !this.isDisabled;
  }

  constructor() {}

  showAlert(message: string) {
    alert(message);
  }

  firstName = signal("Ashish Gupta");

  changeCourseName() {
    this.courseName = this.courseName === "Angular-18" ? "React-6" : "Angular-18";
    this.firstName.set(this.firstName() === "Ashish Gupta" ? "Ashish Kumar Gupta" : "Ashish Gupta");
  }

  isVisible: boolean = true;
  isButtonVisible: "Show" | "Hide" = "Hide";

  hideAndShow() {
    this.isVisible = !this.isVisible;
    this.isButtonVisible = this.isButtonVisible === "Hide" ? "Show" : "Hide";
  }

  spreadDivBgColor: string = '';
  
  changeRed():void{
    this.borderClasses = "borderRed"
  }
  changeBlue():void{
    this.borderClasses = "borderBlue"
  }
  changeGreen():void{
    this.borderClasses = "borderGreen"
  }


  customStyle: any ={
    'color': 'white',
    'background-color': 'red',
    'width': '200px',
    'height': '200px',
    'border': '2px solid green',
    'border-radius': '50%',
    'text-align': 'center'
  }





}

// Define the Student interface
interface Student {
  studId: number;
  name: string;
  age: number;
  rollNum: number;
  isActive: boolean;
  marks: number
>>>>>>> master
}