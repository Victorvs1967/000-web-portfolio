import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Skill } from 'src/app/model/skill.model';
import { AdminService } from 'src/app/service/admin.service';
import { ListSkillComponent } from '../list-skill/list-skill.component';
import { MatDialogTitle, MatDialogClose, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatIconButton, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/list';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
<<<<<<< Updated upstream
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.scss']
})
export class EditSkillComponent implements OnInit {

  skill?: Skill;

  editForm?: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private admin: AdminService,
  ) { }

  ngOnInit(): void {
    this.skill = ListSkillComponent.skill;
    this.editForm = this.formBuilder.group({
      name: [this.skill.name, [Validators.required]],
      description: [this.skill.description, [Validators.required]],
      percent: this.skill.percent,
      id: this.skill.id
    });
  }

  submitSkill() {
    this.admin.editSkill(this.editForm?.value).subscribe();
  }


}
=======
    selector: 'app-edit-skill',
    templateUrl: './edit-skill.component.html',
    styleUrls: ['./edit-skill.component.scss'],
    imports: [MatDialogTitle, MatIconButton, MatDialogClose, MatIcon, MatDivider, ReactiveFormsModule, CdkScrollable, MatDialogContent, MatFormField, MatLabel, MatInput, MatHint, MatDialogActions, MatButton]
})
export class EditSkillComponent implements OnInit {

  skill?: Skill;

  editForm?: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private admin: AdminService,
  ) { }

  ngOnInit(): void {
    this.skill = ListSkillComponent.skill;
    this.editForm = this.formBuilder.group({
      name: [this.skill.name, [Validators.required]],
      description: [this.skill.description, [Validators.required]],
      percent: this.skill.percent,
      id: this.skill.id
    });
  }

  submitSkill() {
    this.admin.editSkill(this.editForm?.value).subscribe();
  }


}
>>>>>>> Stashed changes
