import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Customer, CustomerFullDetails } from '../../../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersApiService {
  public customers: Customer[] = [
    {
      id: '023564643',
      code: '1.8568.55',
      firstName: 'Jonn',
      lastName: 'Smith'
    },
    {
      id: '654958336',
      code: '1.10025.48',
      firstName: 'David',
      lastName: 'Cohen'
    }
  ];

  public contacts: CustomerFullDetails[] = [
    { 
      contact: [
        {
          customerId: '654958336',
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
              customerId: '',
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
                  customerId: '',
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
                      customerId: '',
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
                          customerId: '',
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
        }
      ]
    },{ 
      contact: [
        {
          customerId: '023564643',
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
              customerId: '',
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
                  customerId: '',
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
              customerId: '',
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
        }
      ]
    },
    { 
      contact: [
        {
          customerId: '654958336',
          id: '',
          firstName: '',
          lastName: '',
          permLabel: '10',
          phone: '0525666333',
          email: '',
          userSiteSettings: true,
          userName: '',
          note: '',
          contact: [
            {
              customerId: '',
              id: '',
              firstName: '',
              lastName: '',
              permLabel: '20',
              phone: '0507418526',
              email: '',
              userSiteSettings: true,
              userName: '',
              note: '',
              contact: [
                {
                  customerId: '',
                  id: '',
                  firstName: '',
                  lastName: '',
                  permLabel: '30',
                  phone: '0547546123',
                  email: '',
                  userSiteSettings: true,
                  userName: '',
                  note: '',
                  contact: [
                    {
                      customerId: '',
                      id: '',
                      firstName: '',
                      lastName: '',
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
    }

  ]
  

  constructor() { }

  getCustomers(): Observable<Customer[]> {
    return of(this.customers).pipe(delay(1500));
  }
}
