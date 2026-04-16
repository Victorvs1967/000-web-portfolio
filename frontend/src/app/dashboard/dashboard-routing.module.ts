import { NgModule } from '@angular/core';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { GraphComponent } from './component/graph/graph.component';
import { ListUserComponent } from './component/list-user/list-user.component';
import { AuthGuard } from '../guard/auth.guard';
import { ListImageComponent } from './component/list-image/list-image.component';
import { ListProjectComponent } from './component/list-project/list-project.component';
import { ViewImageComponent } from './component/view-image/view-image.component';
import { ListSkillComponent } from './component/list-skill/list-skill.component';
import { ListPageComponent } from './component/list-page/list-page.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, canActivate: [AuthGuard], canDeactivate: [AuthGuard],
    children: [
      { path: '', component: GraphComponent },
      { path: 'users', component: ListUserComponent },
      { path: 'projects', component: ListProjectComponent },
      { path: 'pages', component: ListPageComponent },
      { path: 'skills', component: ListSkillComponent },
      { path: 'images', component: ListImageComponent },
      { path: 'viewImage/:id', component: ViewImageComponent },
    ]
  },
];

@NgModule({
  declarations: [ ],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ],
})
export class DashboardroutingModule { }
