import { AuthService } from 'src/app/service/auth.service';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupComponent } from 'src/app/auth/component/signup/signup.component';
import { AdminService } from 'src/app/service/admin.service';
import { modal } from 'src/app/service/dialog.decorator';
import { AddImageComponent } from '../add-image/add-image.component';
import { AddProjectComponent } from '../add-project/add-project.component';
import { AddSkillComponent } from '../add-skill/add-skill.component';
import { AddPageComponent } from '../add-page/add-page.component';
import { HeaderComponent } from '../header/header.component';
import { MatSidenavContainer, MatSidenav } from '@angular/material/sidenav';
import { MatNavList, MatListItem } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { NgClass, AsyncPipe } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';

@Component({
<<<<<<< Updated upstream
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  auth = inject(AuthService);
  isAdmin?: Observable<boolean>;

  isExpand: boolean = true;

  constructor(
    private admin: AdminService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.isAdmin = this.auth.isAdmin;
    this.admin._reloadCurrentRoute();
  }

  @modal(SignupComponent, null, '700px')
  addUser() {
    this.router.navigate(['admin', 'users']);
  }

  @modal(AddProjectComponent, null, '700px')
  addProject() {
    this.router.navigate(['admin', 'projects']);
  }

  @modal(AddSkillComponent, null, '700px')
  addSkill() {
    this.router.navigate(['admin', 'skills']);
  }

  @modal(AddImageComponent, null, '700px')
  addImage() {
    this.router.navigate(['admin', 'images']);
  }

  @modal(AddPageComponent, null, '700px')
  addPage() {
    this.router.navigate(['admin', 'pages']);
  }
}
=======
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    imports: [HeaderComponent, MatSidenavContainer, MatSidenav, MatNavList, MatListItem, MatIcon, NgClass, RouterLink, MatTooltip, MatMenuTrigger, MatMenu, MatMenuItem, RouterOutlet, AsyncPipe]
})
export class DashboardComponent implements OnInit {

  auth = inject(AuthService);
  isAdmin?: Observable<boolean>;

  isExpand: boolean = true;

  constructor(
    private admin: AdminService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.isAdmin = this.auth.isAdmin;
    this.admin._reloadCurrentRoute();
  }

  @modal(SignupComponent, null, '700px')
  addUser() {
    this.router.navigate(['admin', 'users']);
  }

  @modal(AddProjectComponent, null, '700px')
  addProject() {
    this.router.navigate(['admin', 'projects']);
  }

  @modal(AddSkillComponent, null, '700px')
  addSkill() {
    this.router.navigate(['admin', 'skills']);
  }

  @modal(AddImageComponent, null, '700px')
  addImage() {
    this.router.navigate(['admin', 'images']);
  }

  @modal(AddPageComponent, null, '700px')
  addPage() {
    this.router.navigate(['admin', 'pages']);
  }
}
>>>>>>> Stashed changes
