import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MaterialUiModule,
        ReactiveFormsModule,
        LoginComponent,
        SignupComponent,
    ],
})
export class AuthModule { }
