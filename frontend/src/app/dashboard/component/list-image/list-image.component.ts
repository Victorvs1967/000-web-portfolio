import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { Component, inject } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ImageService } from 'src/app/service/image.service';
import { ProjectListComponent } from './project-list/project-list.component';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/list';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
<<<<<<< Updated upstream
  selector: 'app-list-image',
  templateUrl: './list-image.component.html',
  styleUrls: ['./list-image.component.scss']
})
export class ListImageComponent {

  auth = inject(AuthService);
  isAdmin: Observable<boolean>;

  images: any[] = [];

  constructor(
    private image: ImageService,
    private _bottomSheet: MatBottomSheet,
  ) {
    this.isAdmin = this.auth.isAdmin;
    this.viewList();
  }

  viewList() {
    this.image.list().subscribe(data => {
      data.forEach(item => {
        this.images = [...this.images, item];
        const style = { width: '100%', height: 'auto', radius: '.5rem' };
        this.image.download(item.id, style).subscribe();
      });
    });
  }

  delete(id: string): void {
    this.image.delete(id).subscribe(() => {
      const items = document.querySelectorAll('li');
      if (items !== null) items.forEach(item => item.innerHTML = '');
      this.viewList();
    });
  }

  toProject(image: any) {
    this._bottomSheet.open(ProjectListComponent, { data: { image } });
  }
}
=======
    selector: 'app-list-image',
    templateUrl: './list-image.component.html',
    styleUrls: ['./list-image.component.scss'],
    imports: [MatCard, MatCardContent, MatCardTitle, MatDivider, MatButton, RouterLink, AsyncPipe]
})
export class ListImageComponent {

  auth = inject(AuthService);
  isAdmin: Observable<boolean>;

  images: any[] = [];

  constructor(
    private image: ImageService,
    private _bottomSheet: MatBottomSheet,
  ) {
    this.isAdmin = this.auth.isAdmin;
    this.viewList();
  }

  viewList() {
    this.image.list().subscribe(data => {
      data.forEach(item => {
        this.images = [...this.images, item];
        const style = { width: '100%', height: 'auto', radius: '.5rem' };
        this.image.download(item.id, style).subscribe();
      });
    });
  }

  delete(id: string): void {
    this.image.delete(id).subscribe(() => {
      const items = document.querySelectorAll('li');
      if (items !== null) items.forEach(item => item.innerHTML = '');
      this.viewList();
    });
  }

  toProject(image: any) {
    this._bottomSheet.open(ProjectListComponent, { data: { image } });
  }
}
>>>>>>> Stashed changes
