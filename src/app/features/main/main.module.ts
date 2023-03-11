import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRootPageComponent } from './main-root-page/main-root-page.component';
import { CustomersMainComponent } from './pages/customers-main/customers-main.component';
import { MainRoutingModule } from './main-routing.module';
import { MatTreeModule } from '@angular/material/tree';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerListComponent } from './pages/customers-main/components/customer-list/customer-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchComponent } from './components/search/search.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    MainRootPageComponent,
    CustomersMainComponent,
    CustomerListComponent    
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTreeModule,
    MatTableModule,
    MatProgressSpinnerModule,
    SearchComponent
  ]
})
export class MainModule { }
