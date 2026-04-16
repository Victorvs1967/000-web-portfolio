import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { tap } from 'rxjs';
import { Page } from 'src/app/model/page.model';
import { ListPageComponent } from '../list-page/list-page.component';
import { PageService } from 'src/app/service/page.service';
import { MatDialogTitle, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatIconButton, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/list';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCardActions } from '@angular/material/card';

@Component({
    selector: 'app-edit-page',
    templateUrl: './edit-page.component.html',
    styleUrls: ['./edit-page.component.sass'],
    imports: [MatDialogTitle, MatIconButton, MatDialogClose, MatIcon, MatDivider, ReactiveFormsModule, CdkScrollable, MatDialogContent, MatFormField, MatLabel, MatInput, MatHint, MatCardActions, MatButton]
})
export class EditPageComponent {
  page: Page;

  editForm?: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private pageService: PageService,
  ) {
    this.page = ListPageComponent.page;
  }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      name: [this.page.name, [Validators.required]],
      title: [this.page.title],
      subtitle: [this.page.subtitle],
      description: [this.page.description],
      payload: [JSON.stringify(this.page.payload)],
      id: [this.page.id],
    });
  }

  submitPage() {
    if (this.page) {
      this.page.name = this.editForm?.value.name;
      this.page.title = this.editForm?.value.title;
      this.page.subtitle = this.editForm?.value.subtitle;
      this.page.description = this.editForm?.value.description;
      this.page.payload = JSON.parse(this.editForm?.value.payload);
      this.pageService.editPage(this.page).subscribe();
    }
  }

}
