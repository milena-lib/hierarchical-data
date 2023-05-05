import { NestedTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Contacts } from 'src/app/features/main/model/customer.model';
import { CustomersMainStoreService } from '../../store/customers-main-store.service';
import { MatTableDataSource } from '@angular/material/table';
import { SearchStoreService } from '../../store/search-store.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListComponent implements OnInit, OnChanges {
  @Input() customers!: Contacts[];

  // readonly treeControl = new NestedTreeControl<Customer1>(node => node.children);
  //readonly dataSource = new MatTreeNestedDataSource<Customer1>();
  readonly dataSource = new MatTableDataSource<Contacts>();
  readonly displayedColumns = ['id', 'code', 'firstName', 'lastName'];

  constructor(private readonly store: CustomersMainStoreService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['customers']) {
      // debugger;
      this.dataSource.data = this.customers;
    }
  }

  //setSelectedCustomer(product: Customer1) {
    //this.store.setSelectedProduct(product.id);
  //}

}
