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
    }
  ];

  public customers: Customers[] = [ //לקוחות
    { 
      contactId: '654958336',
      id: '',
      firstName: 'Israel',
      lastName: 'Israel',
      permLabel: '10',
      phone: '0524447778',
      email: '',
      userSiteSettings: true,
      userName: '',
      note: '',
      contact: [
        {
          contactId: '',
          id: '',
          firstName: 'Israel',
          lastName: 'Israel',
          permLabel: '20',
          phone: '0548899666',
          email: '',
          userSiteSettings: true,
          userName: '',
          note: '',
          contact: [
            {
              contactId: '',
              id: '',
              firstName: 'Israel',
              lastName: 'Israel',
              permLabel: '30',
              phone: '0502233555',
              email: '',
              userSiteSettings: true,
              userName: '',
              note: '',
              contact: [
                {
                  contactId: '',
                  id: '',
                  firstName: 'Israel',
                  lastName: 'Israel',
                  permLabel: '40',
                  phone: '0545566333',
                  email: '',
                  userSiteSettings: true,
                  userName: '',
                  note: '',
                  contact: [
                    {
                      contactId: '',
                      id: '',
                      firstName: 'Israel',
                      lastName: 'Israel',
                      permLabel: '50',
                      phone: '0525544896',
                      email: '',
                      userSiteSettings: true,
                      userName: '',
                      note: ''
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      contactId: '023564643',
      id: '',
      firstName: 'Israel',
      lastName: 'Israel',
      permLabel: '10',
      phone: '0528899654',
      email: '',
      userSiteSettings: true,
      userName: '',
      note: '',
      contact: [
        {
          contactId: '',
          id: '',
          firstName: 'Israel',
          lastName: 'Israel',
          permLabel: '20',
          phone: '0547539512',
          email: '',
          userSiteSettings: true,
          userName: '',
          note: '',
          contact: [
            {
              contactId: '',
              id: '',
              firstName: 'Israel',
              lastName: 'Israel',
              permLabel: '30',
              phone: '0547854321',
              email: '',
              userSiteSettings: true,
              userName: '',
              note: ''
            }
          ]
        },
        {
          contactId: '',
          id: '',
          firstName: '',
          lastName: '',
          permLabel: '20',
          phone: '0548852333',
          email: '',
          userSiteSettings: true,
          userName: '',
          note: ''
        }
      ]
    },
    { 
      contactId: '654958336',
      id: '',
      firstName: 'Shalom',
      lastName: 'Shalom',
      permLabel: '10',
      phone: '0525666333',
      email: '',
      userSiteSettings: true,
      userName: '',
      note: '',
      contact: [
        {
          contactId: '',
          id: '',
          firstName: 'Shalom',
          lastName: 'Shalom',
          permLabel: '20',
          phone: '0507418526',
          email: '',
          userSiteSettings: true,
          userName: '',
          note: '',
          contact: [
            {
              contactId: '',
              id: '',
              firstName: 'Shalom',
              lastName: 'Shalom',
              permLabel: '30',
              phone: '0547546123',
              email: '',
              userSiteSettings: true,
              userName: '',
              note: '',
              contact: [
                {
                  contactId: '',
                  id: '',
                  firstName: 'Shalom',
                  lastName: 'Shalom',
                  permLabel: '40',
                  phone: '0509518524',
                  email: '',
                  userSiteSettings: true,
                  userName: '',
                  note: ''
                }
              ]
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
