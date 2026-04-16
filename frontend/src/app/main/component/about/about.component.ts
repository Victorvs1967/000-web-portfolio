import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { PageService } from 'src/app/service/page.service';
import { Page } from 'src/app/model/page.model';
import { MatIcon } from '@angular/material/icon';
import { NgStyle } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
<<<<<<< Updated upstream
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  pageService = inject(PageService);

  faBrifcace = faBriefcase;

  heroPage?: Page;
  skills: string[] = [];
  years: string[] = [];

  constructor() {
    this.getHero();
  }

  getHero() {
    this.pageService.getPage('about')
      .pipe(
        map(page => {
          this.heroPage = page;
          this.skills = Object.keys(this.heroPage?.payload.skills);
          this.years = Object.keys(this.heroPage?.payload.cv);
        }))
      .subscribe();
  }
}
=======
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    imports: [MatIcon, NgStyle, FaIconComponent]
})
export class AboutComponent {

  pageService = inject(PageService);

  faBrifcace = faBriefcase;

  heroPage?: Page;
  skills: string[] = [];
  years: string[] = [];

  constructor() {
    this.getHero();
  }

  getHero() {
    this.pageService.getPage('about')
      .pipe(
        map(page => {
          this.heroPage = page;
          this.skills = Object.keys(this.heroPage?.payload.skills);
          this.years = Object.keys(this.heroPage?.payload.cv);
        }))
      .subscribe();
  }
}
>>>>>>> Stashed changes
