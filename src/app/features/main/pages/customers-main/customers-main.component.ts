import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { filter, interval, map, Subject, takeUntil } from 'rxjs';
import { CustomersMainStoreService } from './store/customers-main-store.service';
import sampleData from '../../../../../assets/data.json';
import { ActivatedRouteSnapshot, NavigationEnd, NavigationStart, Router, RouterEvent, RoutesRecognized } from '@angular/router';
import { HostListener } from '@angular/core';
import { PlatformLocation } from '@angular/common';

// @HostListener('window:popstate', ['$event'])
//   onpopstate(event) {
//     console.log('Back button pressed');
//   }

@Component({
  selector: 'app-customers-main',
  templateUrl: './customers-main.component.html',
  styleUrls: ['./customers-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
  
export class CustomersMainComponent implements OnInit {
  readonly customers$ = this.store.customers$; //this.store.filterProducts$;
  readonly isBusy$ = this.store.isBusy$;

  constructor(private readonly store: CustomersMainStoreService, 
    private readonly router: Router) {  
    //   router.events.pipe(
    //     filter((e: Event | RouterEvent): e is RouterEvent => e instanceof RouterEvent)
    //  ).subscribe((e: RouterEvent) => {
    //    // Do something
    //  });
    // this.router.events.pipe(
    //     filter((evt: Event): evt is RoutesRecognized => evt instanceof RoutesRecognized),
    //     map((evt: RoutesRecognized) => evt.state.root),
    // ).subscribe((rootRoute: ActivatedRouteSnapshot) => (
    //     // this._resolvedRoutes = this._getResolvedRoutes(rootRoute.children)
    // ));
    // router.events
    //   .pipe(filter<NavigationEnd>(event => event instanceof NavigationEnd))
    //   .subscribe(event => {});
  }

  ngOnInit(): void {
    
    this.store.loadCustomers();

    console.log("sampleData: ", sampleData);

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

  onClick() {
    alert("on click event");
  }

  onCtrlClick() {
    alert("on CTRL click event");
  }
}
