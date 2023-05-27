import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersMainComponent } from './pages/customers-main/customers-main.component';
import { GeneralRootPageComponent } from './general-root-page/general-root-page.component';

const routes: Routes = [{
    path: '', component: GeneralRootPageComponent, children: [
        { path: 'customers', component: CustomersMainComponent }
    ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]  
})
export class GeneralRoutingModule { }