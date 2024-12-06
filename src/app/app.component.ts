import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TemplateFormValidationComponent } from "./template-form-validation/template-form-validation.component";
import { InputOutputReuseableComponent } from "./input-output-reuseable/input-output-reuseable.component";
import { MyButtonComponent } from "./my-button/my-button.component";
import { LifeCycleEventComponent } from "./life-cycle-event/life-cycle-event.component";
import { NgTemplateComponent } from "./ng-template/ng-template.component";
import { NgContainerComponent } from "./ng-container/ng-container.component";
import { NgSelectComponent } from "./ng-select/ng-select.component";

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, EmployeeListComponent, AddEmployeeComponent, DataBindingComponent],
  imports: [RouterOutlet, CommonModule, RouterModule, TemplateFormValidationComponent, InputOutputReuseableComponent, MyButtonComponent, LifeCycleEventComponent, NgTemplateComponent, NgContainerComponent, NgSelectComponent],
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
