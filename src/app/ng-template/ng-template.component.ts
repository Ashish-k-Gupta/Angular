import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css'
})
export class NgTemplateComponent {

isUserLoggedIN: boolean = false;
loggerUserName: string = "Ashish"

@ViewChild('dynamicTemplate') dynamicTemp: TemplateRef<any>| undefined
@ViewChild('dynamicContainer', {read: ViewContainerRef}) dynaCont: ViewContainerRef| undefined


loadTemplate(){
  if(this.dynamicTemp){
    this.dynaCont?.createEmbeddedView(this.dynamicTemp)
  }
}

}
