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
import { CustomerComponent } from './pages/customers-main/components/customer/customer.component';
import { ContactsTreeComponent } from './pages/contacts-main/components/contacts-tree/contacts-tree.component';
import { ContactDetailsComponent } from './pages/customers-main/components/contact-details/contact-details.component';
import { MatIconModule } from '@angular/material/icon';
import { ContactsMainComponent } from './pages/contacts-main/contacts-main.component';
import { ContactsTreeComponentTemp } from './pages/customers-main/components/contacts-tree/contacts-tree.component';
import { GeneralRootPageComponent } from './general-root-page/general-root-page.component';
import { GeneralRoutingModule } from './general-routing.module';
// import { SpecialCharacterDirective } from './directives/special-character.directive';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    MainRootPageComponent,
    CustomersMainComponent,
    CustomerListComponent,
    CustomerComponent,
    ContactsTreeComponent,
    ContactDetailsComponent,
    ContactsMainComponent,
    ContactsTreeComponentTemp,
    GeneralRootPageComponent    
    // SpecialCharacterDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTreeModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MainRoutingModule,
    GeneralRoutingModule,
    MatIconModule,
    SearchComponent,
    MatSnackBarModule
  ]
})
export class MainModule { }
