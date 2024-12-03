import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PipeComponent } from "./pipe/pipe.component";
import { TemplateFormValidationComponent } from "./template-form-validation/template-form-validation.component";
import { InputOutputReuseableComponent } from "./input-output-reuseable/input-output-reuseable.component";

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, EmployeeListComponent, AddEmployeeComponent, DataBindingComponent],
  imports: [RouterOutlet, CommonModule, RouterModule, TemplateFormValidationComponent, InputOutputReuseableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tuotorial';
}
