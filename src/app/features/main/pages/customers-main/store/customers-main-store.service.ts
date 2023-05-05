import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { Contacts } from '../../../model/customer.model';
import { CustomersApiService } from '../api/customers-api.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersMainStoreService implements OnDestroy {
  private readonly destroy$ = new Subject<void>();
  private readonly isBusySubject = new BehaviorSubject<boolean>(false);
  private readonly customersSubject = new BehaviorSubject<Contacts[]>([]);

  readonly isBusy$ = this.isBusySubject.pipe(distinctUntilChanged());
  readonly customers$ = this.customersSubject.asObservable();

  constructor(private readonly api: CustomersApiService) { }

  loadCustomers() {
    this.isBusySubject.next(true);
    this.api.getCustomers().pipe(
      takeUntil(this.destroy$)).subscribe(p => {
        // debugger;
        this.customersSubject.next(p);
        this.isBusySubject.next(false);
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
