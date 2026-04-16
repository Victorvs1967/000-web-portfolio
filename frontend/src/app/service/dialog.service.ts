import { MatDialog } from '@angular/material/dialog';
import { inject, Injectable } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  matDialog = inject(MatDialog);
  private static instance: DialogService | null = null;

  constructor() {
    DialogService.instance = this;
  }

  public static getInstance() {
    return DialogService.instance;
  }

  openDialog<T>(data: any, component: ComponentType<T>, width: string) {
    return this.matDialog.open(component, {
      width: width,
      data: data,
      disableClose: true,
    })
    .afterClosed();
  }
}
