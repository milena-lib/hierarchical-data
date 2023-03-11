import { Injectable } from '@angular/core';
import { map, Observable, startWith, Subject } from 'rxjs';
import { CustomersApiService } from '../api/customers-api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchStoreService {
  readonly allItems = this.custApi.customers; //VALUES_FOR_RONI_DEMO;
  
  results$ = new Subject<any>();

  constructor(private readonly custApi: CustomersApiService) { }

  setFilter(userInput$: Observable<string | null>) {
    userInput$.pipe(
          startWith(''),
          map(searchWord => this.allItems.filter(p => p.id.toLowerCase().includes(searchWord!.toLowerCase()))))
         .subscribe(item => {
          debugger;
    
          this.results$.next(item);
        });
  }
  
}
