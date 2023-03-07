import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRootPageComponent } from './main-root-page/main-root-page.component';
import { CustomersMainComponent } from './pages/customers-main/customers-main.component';

const routes: Routes = [{
    path: '', component: MainRootPageComponent, children: [
        { path: 'customers', component: CustomersMainComponent }
    ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]  
})
export class MainRoutingModule { }
