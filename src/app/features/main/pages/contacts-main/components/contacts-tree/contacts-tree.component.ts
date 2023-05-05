import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Contacts, Customer } from 'src/app/features/main/model/customer.model';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { SearchStoreService } from '../../../customers-main/store/search-store.service';
import { ContactsStoreService } from '../../../customers-main/store/contacts-store.service';

@Component({
  selector: 'app-contacts-tree',
  templateUrl: './contacts-tree.component.html',
  styleUrls: ['./contacts-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsTreeComponent implements OnInit {
  treeControl = new NestedTreeControl<Contacts>(node => node.contact);
  dataSource = new MatTreeNestedDataSource<Contacts>();

  hasChild = (_: number, node: Contacts) => !!node.contact && node.contact.length > 0;
  
  constructor(private readonly storeSearch: SearchStoreService,
    private readonly contactStore: ContactsStoreService) { }

  ngOnInit(): void {
    this.storeSearch.results$.subscribe((event: Customer[]) => {
      if(event){
        this.storeSearch.loadContacts(event);
      }
    });

    this.storeSearch.custContacts$.subscribe((event: Contacts[]) => {
      this.dataSource.data = event;
      console.log("dataSource: ", this.dataSource.data);
    })
  }

  onSelectContact(node: Contacts) {
    this.contactStore.selectContact(node);

  }

}
