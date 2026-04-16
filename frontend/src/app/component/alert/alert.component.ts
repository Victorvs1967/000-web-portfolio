import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogTitle, MatDialogClose } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AlertDialogData } from 'src/app/model/alert-dialog.model';
import { AuthService } from 'src/app/service/auth.service';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/list';
import { AsyncPipe } from '@angular/common';

@Component({
<<<<<<< Updated upstream
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  static defaultAlertData = {
    title: 'A you sure?',
    subtitle: 'You can login again when you want.',
    message: 'If you want to logout current user,',
  };

  isAdmin: Observable<boolean> | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AlertDialogData,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.isAdmin = this.auth.isAdmin;
    this.data = this.data ? this.data : AlertComponent.defaultAlertData;
  }
}
=======
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    imports: [CdkScrollable, MatDialogContent, MatDialogTitle, MatIcon, MatIconButton, MatDialogClose, MatDivider, AsyncPipe]
})
export class AlertComponent implements OnInit {

  static defaultAlertData = {
    title: 'A you sure?',
    subtitle: 'You can login again when you want.',
    message: 'If you want to logout current user,',
  };

  isAdmin: Observable<boolean> | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AlertDialogData,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.isAdmin = this.auth.isAdmin;
    this.data = this.data ? this.data : AlertComponent.defaultAlertData;
  }
}
>>>>>>> Stashed changes
