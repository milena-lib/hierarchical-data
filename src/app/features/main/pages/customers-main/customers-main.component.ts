import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';
import { CustomersMainStoreService } from './store/customers-main-store.service';

@Component({
  selector: 'app-customers-main',
  templateUrl: './customers-main.component.html',
  styleUrls: ['./customers-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersMainComponent implements OnInit {
  readonly customers$ = this.store.customers$; //this.store.filterProducts$;
  readonly isBusy$ = this.store.isBusy$;

  constructor(private readonly store: CustomersMainStoreService) { }

  ngOnInit(): void {
    this.store.loadCustomers();

    // this.obs.subscribe(val => console.log(val));
  } 
  
  // notifier = new Subject();
 
  // obs = interval(3000).pipe(takeUntil(this.notifier));
 
 
  // stopObs() {
  //   console.log(this.notifier);
  //   debugger;
  //   this.notifier.next(null);
  //   console.log(this.notifier);
  //   this.notifier.complete();
  //   console.log(this.notifier);
  // }

}
