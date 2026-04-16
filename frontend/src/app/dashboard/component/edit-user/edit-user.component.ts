import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Role } from 'src/app/model/role.model';
import { UserRole } from 'src/app/model/user-role.model';
import { User } from 'src/app/model/user.model';
import { Image } from 'src/app/model/image.model';
import { AdminService } from 'src/app/service/admin.service';
import { ImageService } from 'src/app/service/image.service';
import { ListUserComponent } from '../list-user/list-user.component';
import { MatDialogTitle, MatDialogClose, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatIconButton, MatMiniFabButton, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/list';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
<<<<<<< Updated upstream
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  roles: UserRole[] = [
    { value: Role.ADMIN, viewValue: Role.ADMIN },
    { value: Role.USER, viewValue: Role.USER },
    { value: Role.MANAGER, viewValue: Role.MANAGER },
  ];

  editForm?: UntypedFormGroup;
  isLogin: Observable<boolean> | undefined;
  isAdmin: Observable<boolean> | undefined;

  user?: User;
  photo: Image;
  avatar: Image;
  currentPhoto?: File;
  currentAvatar?: File;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private admin: AdminService,
    private image: ImageService,
  ) {
    this.user = ListUserComponent.user;
    this.photo = this.user.photo;
    this.avatar = this.user.avatar;

    this.editForm = this.formBuilder.group({
      username: [this.user.username, [Validators.required]],
      email: [this.user.email, [Validators.required, Validators.email]],
      firstName: [this.user.firstName],
      lastName: [this.user.lastName],
      phone: [this.user.phone],
      address: [this.user.address],
      role: [this.user.role],
      photo: [this.photo],
      avatar: [this.avatar],
    });
  }

  ngOnInit(): void { }

  submitEdit() {
    if (this.user) {
      this.user.username = this.editForm?.value.username;
      this.user.email = this.editForm?.value.email;
      this.user.firstName = this.editForm?.value.firstName;
      this.user.lastName = this.editForm?.value.lastName;
      this.user.phone = this.editForm?.value.phone;
      this.user.address = this.editForm?.value.address;
      this.user.role = this.editForm?.value.role;
      this.user.photo = this.editForm?.value.photo;
      this.user.avatar = this.editForm?.value.avatar;
      this.admin.editUser(this.user).subscribe();
    }
  }

  selectPhoto(event: any) {
    this.currentPhoto = event.target.files[0];
    if (this.currentPhoto) this.photo.name = this.currentPhoto.name;
  }

  uploadPhoto(event: any) {
    event.preventDefault();
    if (this.currentPhoto) this.image.upload(this.currentPhoto).subscribe(response => this.photo.id = response.id);
  }

  selectAvatar(event: any) {
    this.currentAvatar = event.target.files[0];
    if (this.currentAvatar) this.avatar.name = this.currentAvatar.name;
  }

  uploadAvatar(event: any) {
    event.preventDefault();
    if (this.currentAvatar) this.image.upload(this.currentAvatar).subscribe(response => this.avatar.id = response.id);
  }

}
=======
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.scss'],
    imports: [MatDialogTitle, MatIconButton, MatDialogClose, MatIcon, MatDivider, ReactiveFormsModule, CdkScrollable, MatDialogContent, MatFormField, MatLabel, MatInput, MatHint, MatSelect, MatOption, MatToolbar, MatMiniFabButton, MatDialogActions, MatButton]
})
export class EditUserComponent implements OnInit {

  roles: UserRole[] = [
    { value: Role.ADMIN, viewValue: Role.ADMIN },
    { value: Role.USER, viewValue: Role.USER },
    { value: Role.MANAGER, viewValue: Role.MANAGER },
  ];

  editForm?: UntypedFormGroup;
  isLogin: Observable<boolean> | undefined;
  isAdmin: Observable<boolean> | undefined;

  user?: User;
  photo: Image;
  avatar: Image;
  currentPhoto?: File;
  currentAvatar?: File;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private admin: AdminService,
    private image: ImageService,
  ) {
    this.user = ListUserComponent.user;
    this.photo = this.user.photo;
    this.avatar = this.user.avatar;

    this.editForm = this.formBuilder.group({
      username: [this.user.username, [Validators.required]],
      email: [this.user.email, [Validators.required, Validators.email]],
      firstName: [this.user.firstName],
      lastName: [this.user.lastName],
      phone: [this.user.phone],
      address: [this.user.address],
      role: [this.user.role],
      photo: [this.photo],
      avatar: [this.avatar],
    });
  }

  ngOnInit(): void { }

  submitEdit() {
    if (this.user) {
      this.user.username = this.editForm?.value.username;
      this.user.email = this.editForm?.value.email;
      this.user.firstName = this.editForm?.value.firstName;
      this.user.lastName = this.editForm?.value.lastName;
      this.user.phone = this.editForm?.value.phone;
      this.user.address = this.editForm?.value.address;
      this.user.role = this.editForm?.value.role;
      this.user.photo = this.editForm?.value.photo;
      this.user.avatar = this.editForm?.value.avatar;
      this.admin.editUser(this.user).subscribe();
    }
  }

  selectPhoto(event: any) {
    this.currentPhoto = event.target.files[0];
    if (this.currentPhoto) this.photo.name = this.currentPhoto.name;
  }

  uploadPhoto(event: any) {
    event.preventDefault();
    if (this.currentPhoto) this.image.upload(this.currentPhoto).subscribe(response => this.photo.id = response.id);
  }

  selectAvatar(event: any) {
    this.currentAvatar = event.target.files[0];
    if (this.currentAvatar) this.avatar.name = this.currentAvatar.name;
  }

  uploadAvatar(event: any) {
    event.preventDefault();
    if (this.currentAvatar) this.image.upload(this.currentAvatar).subscribe(response => this.avatar.id = response.id);
  }

}
>>>>>>> Stashed changes
