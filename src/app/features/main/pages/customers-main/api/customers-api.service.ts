import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Customer, CustomerFullDetails } from '../../../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersApiService {
  customers: Customer[] = [
    {
      id: '023564643',
      code: '1.8568.55',
      firstName: 'Jonn',
      lastName: 'Smith'
    }
  ];

  contacts: CustomerFullDetails[] = [
    { 
      contact: [
        {
          id: '',
          firstName: '',
          lastName: '',
          permLabel: '',
          phone: '',
          email: '',
          userSiteSettings: true,
          userName: '',
          note: '',
          contact: [
            {
              id: '',
              firstName: '',
              lastName: '',
              permLabel: '',
              phone: '',
              email: '',
              userSiteSettings: true,
              userName: '',
              note: '',
              contact: [
                {
                  id: '',
                  firstName: '',
                  lastName: '',
                  permLabel: '',
                  phone: '',
                  email: '',
                  userSiteSettings: true,
                  userName: '',
                  note: '',
                  contact: [
                    {
                      id: '',
                      firstName: '',
                      lastName: '',
                      permLabel: '',
                      phone: '',
                      email: '',
                      userSiteSettings: true,
                      userName: '',
                      note: '',
                      contact: [
                        {
                          id: '',
                          firstName: '',
                          lastName: '',
                          permLabel: '',
                          phone: '',
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
          id: '',
          firstName: '',
          lastName: '',
          permLabel: '',
          phone: '',
          email: '',
          userSiteSettings: true,
          userName: '',
          note: '',
          contact: [
            {
              id: '',
              firstName: '',
              lastName: '',
              permLabel: '',
              phone: '',
              email: '',
              userSiteSettings: true,
              userName: '',
              note: '',
              contact: [
                {
                  id: '',
                  firstName: '',
                  lastName: '',
                  permLabel: '',
                  phone: '',
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
    },
    { 
      contact: [
        {
          id: '',
          firstName: '',
          lastName: '',
          permLabel: '',
          phone: '',
          email: '',
          userSiteSettings: true,
          userName: '',
          note: '',
          contact: [
            {
              id: '',
              firstName: '',
              lastName: '',
              permLabel: '',
              phone: '',
              email: '',
              userSiteSettings: true,
              userName: '',
              note: '',
              contact: [
                {
                  id: '',
                  firstName: '',
                  lastName: '',
                  permLabel: '',
                  phone: '',
                  email: '',
                  userSiteSettings: true,
                  userName: '',
                  note: '',
                  contact: [
                    {
                      id: '',
                      firstName: '',
                      lastName: '',
                      permLabel: '',
                      phone: '',
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
