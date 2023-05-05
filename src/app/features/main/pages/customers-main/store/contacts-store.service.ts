import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customers } from '../../../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsStoreService {
  private readonly contactSubject = new BehaviorSubject<Customers | null>(null);
  readonly contact$ = this.contactSubject.asObservable();

  constructor() { }

  selectContact(contact: Customers) {
    this.contactSubject.next(contact);
  }
}
