import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { AboutComponent } from './component/about/about.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { BlogsComponent } from './component/blogs/blogs.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { ControlsComponent } from './component/controls/controls.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './component/main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule,
        MaterialUiModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        MainComponent,
        HomeComponent,
        AboutComponent,
        PortfolioComponent,
        BlogsComponent,
        ContactsComponent,
        ControlsComponent,
    ]
})
export class MainModule { }
