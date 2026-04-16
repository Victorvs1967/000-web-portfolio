import { modal } from 'src/app/service/dialog.decorator';
import { ImageService } from 'src/app/service/image.service';
import { Component, EventEmitter, inject, OnInit, Output, Renderer2 } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { StyleManagerService } from 'src/app/service/style-manager.service';
import { AdminService } from 'src/app/service/admin.service';
import { LoginComponent } from 'src/app/auth/component/login/login.component';
import { AlertComponent } from 'src/app/component/alert/alert.component';
import { User } from 'src/app/model/user.model';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { NgStyle, AsyncPipe } from '@angular/common';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';

@Component({
<<<<<<< Updated upstream
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() taggledEvent: any = new EventEmitter();

  private styleManager = inject(StyleManagerService);
  private _renderer = inject(Renderer2);

  isDark: boolean;
  isLogin: Observable<boolean> | undefined;

  file: string | undefined;
  isUser: User | undefined;

  constructor(
    private image: ImageService,
    private admin: AdminService,
    private auth: AuthService,
    private router: Router,
  ) {
    this.isDark = this.styleManager.isDark;
  }

  ngOnInit(): void {
    this.isLogin = this.auth.isLoggedIn;
    this.admin.getUser(this.auth.getUser())
      .pipe(
        map(user => {
          this.isUser = user;
          if (user.avatar) {
            this.image.img_download(user.avatar.id)
              .pipe(
                map(img => this.file = img)
              )
             .subscribe();
          }
        })
      )
      .subscribe();
  }

  @modal(LoginComponent)
  login() {
    this.router.navigate(['admin']);
  }

  @modal(AlertComponent, AlertComponent.defaultAlertData)
  logout() {
    this.auth.logout();
    this.router.navigate(['home']);
  }

  taggledAction() {
    this.taggledEvent.emit('');
  }

  toggleDarkTheme() {
    this.styleManager.toggleDarkTheme(this._renderer);
    this.isDark = this.styleManager.isDark;
  }
}
=======
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [MatToolbar, MatIconButton, MatIcon, RouterLink, NgStyle, MatMenuTrigger, MatMenu, MatMenuItem, AsyncPipe]
})
export class HeaderComponent implements OnInit {

  @Output() taggledEvent: any = new EventEmitter();

  private styleManager = inject(StyleManagerService);
  private _renderer = inject(Renderer2);

  isDark: boolean;
  isLogin: Observable<boolean> | undefined;

  file: string | undefined;
  isUser: User | undefined;

  constructor(
    private image: ImageService,
    private admin: AdminService,
    private auth: AuthService,
    private router: Router,
  ) {
    this.isDark = this.styleManager.isDark;
  }

  ngOnInit(): void {
    this.isLogin = this.auth.isLoggedIn;
    this.admin.getUser(this.auth.getUser())
      .pipe(
        map(user => {
          this.isUser = user;
          if (user.avatar) {
            this.image.img_download(user.avatar.id)
              .pipe(
                map(img => this.file = img)
              )
             .subscribe();
          }
        })
      )
      .subscribe();
  }

  @modal(LoginComponent)
  login() {
    this.router.navigate(['admin']);
  }

  @modal(AlertComponent, AlertComponent.defaultAlertData)
  logout() {
    this.auth.logout();
    this.router.navigate(['home']);
  }

  taggledAction() {
    this.taggledEvent.emit('');
  }

  toggleDarkTheme() {
    this.styleManager.toggleDarkTheme(this._renderer);
    this.isDark = this.styleManager.isDark;
  }
}
>>>>>>> Stashed changes
