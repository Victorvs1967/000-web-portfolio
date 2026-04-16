import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mail } from '../model/mail.model';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private http = inject(HttpClient);

  sendMail(message: Mail): Observable<any> {
    return this.http.post<Mail>(environment.baseUrl.concat(environment.mailUrl), message);
  }
}
