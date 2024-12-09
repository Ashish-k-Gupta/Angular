import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DecoratorsComponent } from "../decorators/decorators.component";
import { ViewchildComponent } from "../viewchild/viewchild.component";
import { NgSelectComponent } from "../ng-select/ng-select.component";
import { NgContainerComponent } from "../ng-container/ng-container.component";
import { NgTemplateComponent } from "../ng-template/ng-template.component";
import { LifeCycleEventComponent } from "../life-cycle-event/life-cycle-event.component";
import { MyButtonComponent } from "../my-button/my-button.component";
import { InputOutputReuseableComponent } from "../input-output-reuseable/input-output-reuseable.component";
import { TemplateFormValidationComponent } from "../template-form-validation/template-form-validation.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, DecoratorsComponent, ViewchildComponent, NgSelectComponent, NgContainerComponent, NgTemplateComponent, LifeCycleEventComponent, MyButtonComponent, InputOutputReuseableComponent, TemplateFormValidationComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  clickCout: number = 0

  route = inject(Router)

  addNumber(val: number){
    this.clickCout = this.clickCout + val
  }

  logout(){
    localStorage.removeItem('loginUser')
    localStorage.clear()
    this.route.navigateByUrl('/login')
  }

}
