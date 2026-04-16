import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainDataService {

  http = inject(HttpClient);

  constructor() { }

  loadData(): Observable<any> {
    return this.http.get('assets/data/main-pages.json')
  }

}
