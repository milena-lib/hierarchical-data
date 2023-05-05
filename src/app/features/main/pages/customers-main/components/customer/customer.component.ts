import { Component, OnInit } from '@angular/core';
import { SearchStoreService } from '../../store/search-store.service';
import { Customer } from 'src/app/features/main/model/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  readonly searchResults$ = this.storeSearch.results$;  
  
  constructor(private readonly storeSearch: SearchStoreService) { }

  ngOnInit(): void {
  }

  goResults(item: Customer) {
    console.log("result: ", item);
  }

}
