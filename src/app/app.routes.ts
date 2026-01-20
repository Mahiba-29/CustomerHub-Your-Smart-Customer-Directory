import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'add-customer', component: AddCustomerComponent }
];
