import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AnyDataSource } from 'src/app/data/data-source';
import { Page } from 'src/app/model/page.model';
import { AdminService } from 'src/app/service/admin.service';
import { AuthService } from 'src/app/service/auth.service';
import { modal } from 'src/app/service/dialog.decorator';
import { PageService } from 'src/app/service/page.service';
import { EditPageComponent } from '../edit-page/edit-page.component';
import { AlertDialogData } from 'src/app/model/alert-dialog.model';
import { AlertComponent } from 'src/app/component/alert/alert.component';
import { MatCard, MatCardContent, MatCardTitle, MatCardHeader, MatCardActions } from '@angular/material/card';
import { MatDivider } from '@angular/material/list';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
    selector: 'app-list-page',
    templateUrl: './list-page.component.html',
    styleUrls: ['./list-page.component.sass'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0', padding: '0', margin: '0' })),
            state('expanded', style({ height: '*', margin: '*' })),
            transition('expanded <=> collapsed', animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
    imports: [MatCard, MatCardContent, MatCardTitle, MatDivider, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatCardHeader, MatCardActions, MatIconButton, MatIcon, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, AsyncPipe, JsonPipe]
})
export class ListPageComponent implements OnInit {

  private auth = inject(AuthService);
  private admin = inject(AdminService);
  private pageService = inject(PageService);

  displayedColumns: string[] = [ 'name', 'title', 'subtitle', 'description', 'payload' ];
  dataSource: any;
  expandedElement: Page | null | undefined;

  isAdmin?: Observable<boolean>;

  static page: Page;
  static alert: AlertDialogData = {
    title: "A you sure?",
    subtitle: "You can't get access to this page content again.",
    message: "If you realy want to delete this page content,",
  };

  ngOnInit(): void {
    this.isAdmin = this.auth.isAdmin;
    this.reloadData();
    this.admin._reloadCurrentRoute();
  }

  reloadData() {
    this.pageService.getPageList()
      .pipe(map(data => this.dataSource = new AnyDataSource([ ...data ])))
      .subscribe();
  }

  editPage(page: Page) {
    ListPageComponent.page = page;
    this.getPage();
  }

  @modal(EditPageComponent, ListPageComponent.alert, '800px')
  getPage() {
  }

  @modal(AlertComponent, ListPageComponent.alert)
  deletePage(name: string) {
    this.pageService.deletePage(name).subscribe();
  }

}
