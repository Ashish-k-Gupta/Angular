
import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { RoutingComponent } from './routing/routing.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { CrudAPISComponent } from './crud-apis/crud-apis.component';
import { PipeComponent } from './pipe/pipe.component';
import { InputOutputReuseableComponent } from './input-output-reuseable/input-output-reuseable.component';

export const routes: Routes = [
    {
        path: 'add-emp',
        component: AddEmployeeComponent
    },
    {
        path: 'emp-list',
        component: EmployeeListComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path: 'routing-examples',
        component: RoutingComponent
    },
    {
        path: 'swtich-case',
        component: SwitchCaseComponent
    },
    {
        path: 'crud-apis',
        component: CrudAPISComponent
    },
    {
        path: 'pipe',
        component: PipeComponent
    },
    {
        path: 'inputOutput',
        component: InputOutputReuseableComponent
    },
];
