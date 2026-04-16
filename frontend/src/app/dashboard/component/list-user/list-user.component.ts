import { AuthService } from 'src/app/service/auth.service';
import { modal } from 'src/app/service/dialog.decorator';
import { map, Observable } from 'rxjs';
import { Component, OnInit, inject } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { User } from 'src/app/model/user.model';
import { ImageService } from 'src/app/service/image.service';
import { AnyDataSource } from 'src/app/data/data-source';
import { AlertDialogData } from 'src/app/model/alert-dialog.model';
import { AlertComponent } from 'src/app/component/alert/alert.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { MatCard, MatCardContent, MatCardTitle, MatCardHeader, MatCardActions } from '@angular/material/card';
import { MatDivider } from '@angular/material/list';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { NgStyle, AsyncPipe, DatePipe } from '@angular/common';
import { MatIconButton, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-list-user',
    templateUrl: './list-user.component.html',
    styleUrls: ['./list-user.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0', padding: '0', margin: '0' })),
            state('expanded', style({ height: '*', margin: '*' })),
            transition('expanded <=> collapsed', animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
    imports: [MatCard, MatCardContent, MatCardTitle, MatDivider, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, NgStyle, MatCardHeader, MatCardActions, MatIconButton, MatIcon, MatButton, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, AsyncPipe, DatePipe]
})
export class ListUserComponent implements OnInit {

  image = inject(ImageService);
  auth = inject(AuthService);

  isAdmin?: Observable<boolean>;

  static user: User;
  static alert: AlertDialogData = {
    title: "A you sure?",
    subtitle: "You can't get access to this user again.",
    message: "If you realy want to delete this user,",
  };

  displayedColumns: string[] = [ 'avatar', 'username', 'email', 'firstName', 'lastName', 'onCreate', 'role' ];
  dataSource: any;
  expandedElement: User | null | undefined;

  constructor(
    private admin: AdminService,
  ) {
    // this.reloadData();
  }

  ngOnInit(): void {
    this.isAdmin = this.auth.isAdmin;
    this.reloadData();
  }

  editUser(user: User) {
    ListUserComponent.user = user;
    this.getUser();
  }

  @modal(EditUserComponent, ListUserComponent.user)
  getUser() {
    this.admin._reloadCurrentRoute();
  }

  @modal(AlertComponent, ListUserComponent.alert)
  deleteUser(user: User) {
    this.admin.deleteUser(user.username).subscribe();
  }

  reloadData() {
    this.admin.getUserList()
      .pipe(map(data => data
        .filter(user => user.avatar)
          .map((user: any) =>
              this.image.img_download(user.avatar.id)
                .pipe(
                  map(img => {
                    user = { ...user, avatar: { ...user.avatar, avatarImg: img } };
                    data = [ ...data.filter(item => item.id !== user.id), user ];
                    this.dataSource = new AnyDataSource([ ...data ]);
                  })).subscribe()
        ))
      ).subscribe();
  }

  readImg(id: string): void {
    const style = { width: '100%', height: 'auto', radius: '.5rem' };
    this.image.download(id, style).subscribe();
  }

}
