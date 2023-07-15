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
  // changeDetection: ChangeDetectionStrategy.OnPush
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
      console.log("event: ", event);
    })
  }

  selectedNodes: Customers[]=[];
  onSelectContact(node: Customers) {
    
    if(this.selectedNodes.length <= 1){
      node.isActive = !node.isActive;
      this.setSelectedsNodes(node);

      console.log("dataSource: ", this.dataSource);
      console.log("selectedNodes: ", this.selectedNodes);
      return;
    }

    this.selectedNodes = [];
    
    this.dataSource.data.forEach((item: Customers) => {
      item.isActive = false;            

      this.setSelectedsNodes(node);
      
      if(item.contact?.length) {
        this.setChildren(item.contact[0], node);
      }
    });

    if(this.selectedNodes.length === 0){
      node.isActive = true;      
    }else{
      node.isActive = !node.isActive;
    }

    this.setSelectedsNodes(node);

    console.log("dataSource: ", this.dataSource);
    console.log("selectedNodes: ", this.selectedNodes);
  }

  setChildren(item: Customers, selectedNode: Customers){
    console.log("child: ", item);

    item.isActive = false;  

    this.setSelectedsNodes(item);

    if(item.contact?.length) {
      this.setChildren(item.contact[0], selectedNode);
    }
  }

  onSelectMultiContacts(node: Customers) {
    node.isActive = !node.isActive;

    this.setSelectedsNodes(node);
    console.log("selectedNodes: ", this.selectedNodes);
  }

  setSelectedsNodes(node: Customers) {
    const index = this.selectedNodes.indexOf(node);
    
    if(node.isActive) {
      if(index === -1) {
        this.selectedNodes.push(node);
      }      
    }else{
      this.selectedNodes.splice(index, 1);
    }
  }

}
