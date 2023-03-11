import { Component, OnInit } from '@angular/core';
import { SearchStoreService } from '../../store/search-store.service';

@Component({
  selector: 'app-contacts-tree',
  templateUrl: './contacts-tree.component.html',
  styleUrls: ['./contacts-tree.component.scss']
})
export class ContactsTreeComponent implements OnInit {
  //readonly customerResults$ = this.storeSearch.results$;  

  constructor(private readonly storeSearch: SearchStoreService) { }

  ngOnInit(): void {
    //this.storeSearch.loadContacts(this.customerResults$);
    this.storeSearch.results$.subscribe((event: any) => {
      if(event){
        this.storeSearch.loadContacts(event);
      }
    })
  }

}
