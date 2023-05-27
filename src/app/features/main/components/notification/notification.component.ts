import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatSnackBarModule],
})
export class NotificationComponent implements OnInit {
  snackBarRef = inject(MatSnackBarRef);
  
  constructor() { }

  ngOnInit(): void {
  }

}
