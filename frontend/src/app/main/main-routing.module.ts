import { NgModule } from '@angular/core';
import { HomeComponent } from './component/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { BlogsComponent } from './component/blogs/blogs.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { MainComponent } from './component/main/main.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  {
    path: '', component: MainComponent, canDeactivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'blogs', component: BlogsComponent },
      { path: 'contacts', component: ContactsComponent },
    ],
  },
];

@NgModule({
  declarations: [ ],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ],
})
export class MainRoutingModule { }
