import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogTitle, MatDialogClose, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { ImageService } from 'src/app/service/image.service';
import { MatIconButton, MatMiniFabButton, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/list';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
<<<<<<< Updated upstream
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm?: UntypedFormGroup;

  photo = { id: '', name: '' };
  avatar = { id: '', name: '' };
  currentPhoto?: File;
  currentAvatar?: File;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private auth: AuthService,
    private image: ImageService,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      firstName: [''],
      lastName: [''],
      phone: [''],
      address: [''],
      photo: this.photo,
      avatar: this.avatar,
    });
  }

  submitSignup() {
    this.auth.signup(this.signupForm?.value).subscribe();
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
    if (this.currentAvatar) this.image.upload(this.currentAvatar)
      .subscribe(response => this.avatar.id = response.id);
  }

}
=======
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    imports: [MatDialogTitle, MatIconButton, MatDialogClose, MatIcon, MatDivider, ReactiveFormsModule, CdkScrollable, MatDialogContent, MatFormField, MatLabel, MatInput, MatHint, MatToolbar, MatMiniFabButton, MatDialogActions, MatButton]
})
export class SignupComponent implements OnInit {

  signupForm?: UntypedFormGroup;

  photo = { id: '', name: '' };
  avatar = { id: '', name: '' };
  currentPhoto?: File;
  currentAvatar?: File;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private auth: AuthService,
    private image: ImageService,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      firstName: [''],
      lastName: [''],
      phone: [''],
      address: [''],
      photo: this.photo,
      avatar: this.avatar,
    });
  }

  submitSignup() {
    this.auth.signup(this.signupForm?.value).subscribe();
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
    if (this.currentAvatar) this.image.upload(this.currentAvatar)
      .subscribe(response => this.avatar.id = response.id);
  }

}
>>>>>>> Stashed changes
