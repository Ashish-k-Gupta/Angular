import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TemplateFormValidationComponent } from "./template-form-validation/template-form-validation.component";
import { InputOutputReuseableComponent } from "./input-output-reuseable/input-output-reuseable.component";
import { MyButtonComponent } from "./my-button/my-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, EmployeeListComponent, AddEmployeeComponent, DataBindingComponent],
  imports: [RouterOutlet, CommonModule, RouterModule, TemplateFormValidationComponent, InputOutputReuseableComponent, MyButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tuotorial';

  clickCout: number = 0

  addNumber(val: number){
    this.clickCout = this.clickCout + val
  }
}
