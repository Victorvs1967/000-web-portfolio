import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogTitle, MatDialogClose, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { Page } from 'src/app/model/page.model';
import { PageService } from 'src/app/service/page.service';
import { MatIconButton, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/list';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
<<<<<<< Updated upstream
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.sass']
})
export class AddPageComponent implements OnInit {

  createForm?: UntypedFormGroup;
  page?: Page;

  constructor(
    private formBuilder: FormBuilder,
    private pageService: PageService,
    @Inject(MAT_DIALOG_DATA) public data: Page,
  ) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      name: ['', [ Validators.required ]],
      title: [''],
      subtitle: [''],
      description: [''],
      payload: [''],
    });
  }

  submitPage() {
    this.page = this.createForm?.value;
    if (this.page) {
      this.page.payload = JSON.parse(this.createForm?.value.payload);
      this.pageService.addPage(this.page)
        .subscribe();
    }
  }

}
=======
    selector: 'app-add-page',
    templateUrl: './add-page.component.html',
    styleUrls: ['./add-page.component.sass'],
    imports: [MatDialogTitle, MatIconButton, MatDialogClose, MatIcon, MatDivider, ReactiveFormsModule, CdkScrollable, MatDialogContent, MatFormField, MatLabel, MatInput, MatHint, MatDialogActions, MatButton]
})
export class AddPageComponent implements OnInit {

  createForm?: UntypedFormGroup;
  page?: Page;

  constructor(
    private formBuilder: FormBuilder,
    private pageService: PageService,
    @Inject(MAT_DIALOG_DATA) public data: Page,
  ) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      name: ['', [ Validators.required ]],
      title: [''],
      subtitle: [''],
      description: [''],
      payload: [''],
    });
  }

  submitPage() {
    this.page = this.createForm?.value;
    if (this.page) {
      this.page.payload = JSON.parse(this.createForm?.value.payload);
      this.pageService.addPage(this.page)
        .subscribe();
    }
  }

}
>>>>>>> Stashed changes
