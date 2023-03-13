import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contacts } from '../../../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsStoreService {
  private readonly contactSubject = new BehaviorSubject<Contacts | null>(null);
  readonly contact$ = this.contactSubject.asObservable();

  constructor() { }

  selectContact(contact: Contacts) {
    this.contactSubject.next(contact);
  }
}
