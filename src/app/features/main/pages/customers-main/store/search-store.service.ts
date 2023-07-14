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
    console.log("userInput$: ", userInput$);
    userInput$.pipe(
          startWith(''),
          map(searchWord => this.allCustomers.filter(p => searchWord && p.id.includes(searchWord))))
         .subscribe(item => {
          
          this.results$.next(item);
        });

        // this.books$ = this.seaerchBooks.pipe(
      //   // wait 300ms after each keystroke before considering the term
      //   debounceTime(300),
      //   // ignore new term if same as previous term
      //   distinctUntilChanged(),
      //   // ignore new term if fewer than 3 characters
      //   filter((term: string) => term.length >= 3),
      //   // switch to new search observable each time the term changes
      //   switchMap((term: string) => this.seaerchBooksService.search(this.authorId, this.genere, term)),
    // );
  }

  loadContacts(customer: Contacts[]) {
    //this.customerContacts.filter(item => item.contact )
    console.log("customer: ", customer);

    const contacts = this.customerContacts.filter(x => x.contactId === customer[0]?.id);
    this.custContacts$.next(contacts);
    console.log("contacts: ", contacts);
  }
  
}
