import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Contacts, Customers } from '../../../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersApiService {
  public contacts: Contacts[] = [ //אנשי קשר
    {
      id: '023564643',
      code: '1.8568.55',
      firstName: 'Dan',
      lastName: 'Cruze'
    },
    {
      id: '123564643',
      code: '1.8568.55',
      firstName: 'Jonn',
      lastName: 'Smith'
    },
    {
      id: '654958336',
      code: '1.10025.48',
      firstName: 'David',
      lastName: 'Cohen'
    },
    {
      id: '654958221',
      code: '1.10025.48',
      firstName: 'Elis',
      lastName: 'Daan'
    },
    {
      id: '654952222',
      code: '1.10025.48',
      firstName: 'Jenny',
      lastName: 'Daan'
    }
  ];

  public customers: Customers[] = [ //לקוחות
    {
      contactId: '654958336',
      id: '0',
      firstName: 'Ora',
      lastName: 'Ora',
      permLabel: '10',
      phone: '0524447778',
      email: '',
      userSiteSettings: true,
      userName: '',
      note: '',
      isActive: false
    },
    { 
      contactId: '654958336',
      id: '1',
      firstName: 'Israel',
      lastName: 'Israel',
      permLabel: '10',
      phone: '0524447778',
      email: '',
      userSiteSettings: true,
      userName: '',
      note: '',
      isActive: false,
      children: [
        {
          contactId: '',
          id: '1-0',
          firstName: 'Israel',
          lastName: 'Israel',
          permLabel: '20',
          phone: '0548899666',
          email: '',
          userSiteSettings: true,
          userName: '',
          note: '',
          isActive: false,
          children: [
            {
              contactId: '',
              id: '1-0-0',
              firstName: 'Israel',
              lastName: 'Israel',
              permLabel: '30',
              phone: '0502233555',
              email: '',
              userSiteSettings: true,
              userName: '',
              note: '',
              isActive: false
            }
          ]
        },
        {
          contactId: '',
          id: '1-1',
          firstName: 'Moshe',
          lastName: 'Moshe',
          permLabel: '20',
          phone: '0548899666',
          email: '',
          userSiteSettings: true,
          userName: '',
          note: '',
          isActive: false
        }
      ]
    },
    {
      contactId: '023564643',
      id: '2-0',
      firstName: 'Israel',
      lastName: 'Israel',
      permLabel: '10',
      phone: '0528899654',
      email: '',
      userSiteSettings: true,
      userName: '',
      note: '',
      isActive: false,
      children: [
        {
          contactId: '',
          id: '2-0-0',
          firstName: 'Israel',
          lastName: 'Israel',
          permLabel: '20',
          phone: '0547539512',
          email: '',
          userSiteSettings: true,
          userName: '',
          note: '',
          isActive: false,
          children: [
            {
              contactId: '',
              id: '2-0-0-0',
              firstName: 'Israel',
              lastName: 'Israel',
              permLabel: '30',
              phone: '0547854321',
              email: '',
              userSiteSettings: true,
              userName: '',
              note: '',
              isActive: false
            }
          ]
        },
        {
          contactId: '',
          id: '2-0-1',
          firstName: '',
          lastName: '',
          permLabel: '20',
          phone: '0548852333',
          email: '',
          userSiteSettings: true,
          userName: '',
          note: '',
          isActive: false
        }
      ]
    },
    { 
      contactId: '654958336',
      id: '2-1',
      firstName: 'Shalom',
      lastName: 'Shalom',
      permLabel: '10',
      phone: '0525666333',
      email: '',
      userSiteSettings: true,
      userName: '',
      note: '',
      isActive: false,
      children: [
        {
          contactId: '',
          id: '2-1-0',
          firstName: 'Shalom',
          lastName: 'Shalom',
          permLabel: '20',
          phone: '0507418526',
          email: '',
          userSiteSettings: true,
          userName: '',
          note: '',
          isActive: false
        }
      ]
    },
    { 
      contactId: '654958336',
      id: '2-2',
      firstName: 'Shalom',
      lastName: 'Shalom',
      permLabel: '10',
      phone: '0525666333',
      email: '',
      userSiteSettings: true,
      userName: '',
      note: '',
      isActive: false,
      children: [
        {
          contactId: '',
          id: '2-2-0',
          firstName: 'Shalom',
          lastName: 'Shalom',
          permLabel: '20',
          phone: '0507418526',
          email: '',
          userSiteSettings: true,
          userName: '',
          note: '',
          isActive: false,
          children: [
            {
              contactId: '',
              id: '2-2-1',
              firstName: 'Shalom',
              lastName: 'Shalom',
              permLabel: '30',
              phone: '0547546123',
              email: '',
              userSiteSettings: true,
              userName: '',
              note: '',
              isActive: false
            }
          ]
        }
      ]
    }
  ]
  

  constructor() { }

  getCustomers(): Observable<Contacts[]> {
    return of(this.contacts).pipe(delay(1500));
  }
}
