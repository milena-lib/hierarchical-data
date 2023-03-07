import { NestedTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Customer } from 'src/app/features/main/model/customer.model';
import { CustomersMainStoreService } from '../../store/customers-main-store.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListComponent implements OnInit, OnChanges {
  @Input() customers!: Customer[];

  // readonly treeControl = new NestedTreeControl<Customer>(node => node.children);
  //readonly dataSource = new MatTreeNestedDataSource<Customer>();
  readonly dataSource = new MatTableDataSource<Customer>();
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

  //setSelectedCustomer(product: Customer) {
    //this.store.setSelectedProduct(product.id);
  //}

}
