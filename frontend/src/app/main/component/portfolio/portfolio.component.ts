import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';
import { Page } from 'src/app/model/page.model';
import { Project } from 'src/app/model/project.model';
import { AdminService } from 'src/app/service/admin.service';
import { ImageService } from 'src/app/service/image.service';
import { PageService } from 'src/app/service/page.service';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
    imports: [FaIconComponent]
})
export class PortfolioComponent implements OnInit {

  pages = inject(PageService);
  title = inject(Title);
  github = faGithub;
  eye = faEye;
  page?: Page;

  projects: Project[] = [];

  constructor(private admin: AdminService, private image: ImageService) {
    this.admin.getProjectList()
      .pipe(
        map(data => {
          data.forEach(project => {
            console.log(project);
            this.projects = [...this.projects, project];
            const style = { width: '100%', height: '300px', radius: '1rem' };
            this.image.download(project.image.id, style).subscribe();
          });
          this.title.setTitle('Portfolio');
        })
      ).subscribe();
  }

  ngOnInit(): void {
    this.pages.getPage('portfolio')
      .pipe(
        map(page => this.page = page)
      ).subscribe();
  }

}
