import { Injectable } from '@angular/core';
import { map, Observable, startWith, Subject } from 'rxjs';
import { Contacts, Customers } from '../../../model/customer.model';
import { CustomersApiService } from '../api/customers-api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchStoreService {
  readonly allCustomers = this.custApi.contacts; //VALUES_FOR_RONI_DEMO;
  readonly customerContacts = this.custApi.customers;

  results$ = new Subject<Contacts[]>();
  custContacts$ = new Subject<Customers[]>();

  constructor(private readonly custApi: CustomersApiService) { }

  setFilter(userInput$: Observable<string | null>) {
    userInput$.pipe(
          startWith(''),
          map(searchWord => this.allCustomers.filter(p => searchWord && p.id.includes(searchWord))))
         .subscribe(item => {
          this.results$.next(item);
        });
  }

  loadContacts(customer: Contacts[]) {
    //this.customerContacts.filter(item => item.contact )
    console.log("customer: ", customer);

    const contacts = this.customerContacts.filter(x => x.contactId === customer[0]?.id);
    this.custContacts$.next(contacts);
    console.log("contacts: ", contacts);
  }
  
}
