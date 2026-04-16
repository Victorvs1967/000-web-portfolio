import { Injectable, NgModule } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable()
@NgModule()
export class JwtService {

  constructor() { }

  decodeToken(token: string): any {
    return JSON.parse(JSON.stringify(jwt_decode(token)));
  }
}
