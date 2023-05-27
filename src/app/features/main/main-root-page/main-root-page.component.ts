import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { NotificationComponent } from '../components/notification/notification.component';

@Component({
  selector: 'app-main-root-page',
  templateUrl: './main-root-page.component.html',
  styleUrls: ['./main-root-page.component.scss']
})
export class MainRootPageComponent implements OnInit {

  durationInSeconds = 5;

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  ngOnInit(): void {
  }

}
