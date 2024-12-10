import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { RoutingComponent } from './routing/routing.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { CrudAPISComponent } from './crud-apis/crud-apis.component';
import { PipeComponent } from './pipe/pipe.component';
import { InputOutputReuseableComponent } from './input-output-reuseable/input-output-reuseable.component';
// import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginUsingAPIComponent } from './login-using-api/login-using-api.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { SignalComponent } from './signal/signal.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [


            {
                path: 'add-emp',
                component: AddEmployeeComponent,
                canActivate: [authGuard]
            },
            {
                path: 'emp-list',
                component: EmployeeListComponent,
                canActivate: [authGuard]
            },
            {
                path: 'data-binding',
                component: DataBindingComponent,
                canActivate: [authGuard]
            },
            {
                path: 'routing-examples',
                component: RoutingComponent,
                canActivate: [authGuard]
            },
            {
                path: 'swtich-case',
                component: SwitchCaseComponent,
                canActivate: [authGuard]
            },
            {
                path: 'crud-apis',
                component: CrudAPISComponent,
                canActivate: [authGuard]
            },
            {
                path: 'pipe',
                component: PipeComponent,
                canActivate: [authGuard]
            },
            {
                path: 'inputOutput',
                component: InputOutputReuseableComponent,
                canActivate: [authGuard]
            },
            {
                path: 'signal',
                component: SignalComponent,
                canActivate: [authGuard]
            }
        ]

            
        }
    
];
