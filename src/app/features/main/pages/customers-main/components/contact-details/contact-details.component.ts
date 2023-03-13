import { Component, OnInit } from '@angular/core';
import { ContactsStoreService } from '../../store/contacts-store.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  readonly contact$ = this.contactStore.contact$;

  constructor(private readonly contactStore: ContactsStoreService) { }

  ngOnInit(): void {
    console.log("contact$: ", this.contact$);
  }

}
