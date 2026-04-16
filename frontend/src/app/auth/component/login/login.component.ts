import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogTitle, MatDialogClose, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { AuthService } from 'src/app/service/auth.service';
import { LoginData } from 'src/app/model/login-data.model';
import { SignupComponent } from '../signup/signup.component';
import { modal } from 'src/app/service/dialog.decorator';
import { MatIconButton, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/list';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [MatDialogTitle, MatIconButton, MatDialogClose, MatIcon, MatDivider, ReactiveFormsModule, CdkScrollable, MatDialogContent, MatFormField, MatLabel, MatInput, MatHint, MatDialogActions, MatButton]
})
export class LoginComponent implements OnInit {

  loginForm?: UntypedFormGroup;

  isLogin: Observable<boolean> | undefined;
  isAdmin: Observable<boolean> | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: LoginData,
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  submitLogin() {
    this.auth.login(this.loginForm?.value)
    .pipe(map(res => {
      this.isLogin = this.auth.isLoggedIn;
      this.isAdmin = this.auth.isAdmin;
    }))
    .subscribe(() => this.router.navigate(['admin']));
  }

  @modal(SignupComponent)
  signup() {
    this.router.navigate(['admin']);
  }
}
