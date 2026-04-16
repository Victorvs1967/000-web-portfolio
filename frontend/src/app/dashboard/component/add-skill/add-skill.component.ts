import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogTitle, MatDialogClose, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { Skill } from 'src/app/model/skill.model';
import { AdminService } from 'src/app/service/admin.service';
import { MatIconButton, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/list';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
    selector: 'app-add-skill',
    templateUrl: './add-skill.component.html',
    styleUrls: ['./add-skill.component.scss'],
    imports: [MatDialogTitle, MatIconButton, MatDialogClose, MatIcon, MatDivider, ReactiveFormsModule, CdkScrollable, MatDialogContent, MatFormField, MatLabel, MatInput, MatHint, MatDialogActions, MatButton]
})
export class AddSkillComponent implements OnInit {

  createForm?: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private admin: AdminService,
    @Inject(MAT_DIALOG_DATA) public data: Skill,
  ) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      percent: [''],
    });
  }

  submitSkill() {
    this.admin.addSkill(this.createForm?.value).subscribe();
  }

}
