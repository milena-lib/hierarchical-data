import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Contact, Customer, CustomerContacts } from 'src/app/features/main/model/customer.model';
import { SearchStoreService } from '../../store/search-store.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

@Component({
  selector: 'app-contacts-tree',
  templateUrl: './contacts-tree.component.html',
  styleUrls: ['./contacts-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsTreeComponent implements OnInit {
  treeControl = new NestedTreeControl<Contact>(node => node.contact);
  dataSource = new MatTreeNestedDataSource<Contact>();

  hasChild = (_: number, node: Contact) => !!node.contact && node.contact.length > 0;

  constructor(private readonly storeSearch: SearchStoreService) { }

  ngOnInit(): void {
    this.storeSearch.results$.subscribe((event: Customer[]) => {
      if(event){
        this.storeSearch.loadContacts(event);
      }
    });

    this.storeSearch.custContacts$.subscribe((event: CustomerContacts[]) => {
      this.dataSource.data = event[0].contact;
      console.log("dataSource: ", this.dataSource.data);
    })
  }

}
