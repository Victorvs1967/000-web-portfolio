import { Component, Input } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Project } from 'src/app/model/project.model';
import { AdminService } from 'src/app/service/admin.service';
import { MatNavList, MatListItem } from '@angular/material/list';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss'],
    imports: [MatNavList, MatListItem]
})
export class ProjectListComponent {

  projects: Project[] = []

  constructor(private _bottomSheetRef: MatBottomSheetRef<ProjectListComponent>, private admin: AdminService) {
    this.admin.getProjectList().subscribe(data => data.forEach(project => this.projects = [ ...this.projects, project ]));
  }

  toProject(id: string): void {
    const data: any = this._bottomSheetRef.containerInstance._config.data;
    this.admin.getProject(id).subscribe(project => {
      project.image = data.image;
      this.admin.editProject(project).subscribe({
        next: () => alert(`Image "${data.image.name}" add success...`),
        error: err => alert(err.message)
      });
    });
    this._bottomSheetRef.dismiss();
  }
}
