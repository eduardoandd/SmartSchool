import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PerfilComponent } from './perfil/perfil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProductComponent } from './product/product.component';
import { StockComponent } from './stock/stock.component';
import { OrdersComponent } from './orders/orders.component';
import { DeliverysComponent } from './deliverys/deliverys.component';
import { SalesComponent } from './sales/sales.component';


const routes: Routes = [
  { path: '',redirectTo:'dashboard', pathMatch: 'full'  },
  { path: 'customers', component: CustomersComponent  },
  { path: 'employees', component: EmployeesComponent  },
  { path: 'products', component: ProductComponent  },
  { path: 'orders', component: OrdersComponent  },
  { path: 'deliverys', component: DeliverysComponent  },
  { path: 'sales', component: SalesComponent  },
  { path: 'stocks', component: StockComponent  },
  { path: 'perfil', component: PerfilComponent  },
  { path: 'dashboard', component: DashboardComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
