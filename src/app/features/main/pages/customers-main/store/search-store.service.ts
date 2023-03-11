import { Injectable } from '@angular/core';
import { map, Observable, startWith, Subject } from 'rxjs';
import { Customer, CustomerFullDetails } from '../../../model/customer.model';
import { CustomersApiService } from '../api/customers-api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchStoreService {
  readonly allCustomers = this.custApi.customers; //VALUES_FOR_RONI_DEMO;
  readonly customerContacts = this.custApi.contacts;

  results$ = new Subject<any>();
  custContacts$ = new Subject<CustomerFullDetails[]>();

  constructor(private readonly custApi: CustomersApiService) { }

  setFilter(userInput$: Observable<string | null>) {
    userInput$.pipe(
          startWith(''),
          map(searchWord => this.allCustomers.filter(p => searchWord && p.id.includes(searchWord))))
         .subscribe(item => {
          this.results$.next(item);
        });
  }

  loadContacts(customer: any[]) {
    //this.customerContacts.filter(item => item.contact )
    console.log("customer: ", customer);

    const contacts = this.customerContacts.filter(x => x.contact[0].customerId === customer[0].id);
    
    console.log("contacts: ", contacts);
  }
  
}
