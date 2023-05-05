import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Customers, Contacts } from 'src/app/features/main/model/customer.model';
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
  treeControl = new NestedTreeControl<Customers>(node => node.contact);
  dataSource = new MatTreeNestedDataSource<Customers>();

  hasChild = (_: number, node: Customers) => !!node.contact && node.contact.length > 0;
  
  constructor(private readonly storeSearch: SearchStoreService,
    private readonly contactStore: ContactsStoreService) { }

  ngOnInit(): void {
    this.storeSearch.results$.subscribe((event: Contacts[]) => {
      if(event){
        this.storeSearch.loadContacts(event);
      }
    });

    this.storeSearch.custContacts$.subscribe((event: Customers[]) => {
      this.dataSource.data = event;
      console.log("dataSource: ", this.dataSource.data);
    })
  }

  onSelectContact(node: Customers) {
    this.contactStore.selectContact(node);

  }

}