import { Component} from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { SwitchCaseComponent } from "../switch-case/switch-case.component";

@Component({
  selector: 'app-routing',
  standalone: true,
  imports: [RouterLink, RouterModule, SwitchCaseComponent],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.css'
})
export class RoutingComponent {
  
  constructor(private router: Router){

  }

  routeToAddEmp(){
    this.router.navigateByUrl("add-emp")
  }
  routeToDataBinding(){
    this.router.navigateByUrl("data-binding")
  }
  routeToEmpList(){
    this.router.navigateByUrl("emp-list")
  }

}
