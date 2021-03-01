import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterfaceI, UserInterface } from '../models/user.interface';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';




@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseURL = environment.baseURLAPI2;
  constructor(private htttp: HttpClient) {}

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  registerUser(
    name: string,
    lastname: string,
    document: string,
    email: string,
    pass: string,
    cia: string
  ) {
    const url_api = 'https://pruebas.midasoft.co:5443/Apis_DLLO/Seleccion/';
    return this.htttp
      .post<UserInterfaceI>(
        url_api,
        {
          name: name,
          lastname: lastname,
          document: document,
          email: email,
          pass: pass,
          cia: cia,
        },
        { headers: this.headers }
      )
      .pipe(map((data) => data));
  }

  loginuser(email: string, password: string): Observable<any> {
    const companyId = 10;
    const desdeMs = true;
    const url_api =
      'https://pruebas.midasoft.co:5443/Apis_DLLO/Seleccion/login?include=user';
    return this.htttp
      .post<UserInterfaceI>(
        url_api,
        { password, companyId, email, desdeMs },
        { headers: this.headers }
      )
      .pipe(map((data) => data));
  }

  setUser(user: UserInterfaceI): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem('currentUser', user_string);
  }

  setToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  /*
  getCurrentUser(): UserInterface {
    let user_string = localStorage.getItem('currentUser');
    if (isNullOrUndefined(user_string)) {
      return null;
    } else {
      let user: UserInterface = JSON.parse(user_string);
      return user;
    }
  }
*/
  

  logoutUser() {
    let accessToken = localStorage.getItem('accessToken');
    const url_api = `https://pruebas.midasoft.co:5443/Apis_DLLO/Seleccion/logout?access_token=${accessToken}`;
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
    return this.htttp.post<UserInterfaceI>(url_api, { headers: this.headers });
  }

  createUser(user: UserInterfaceI): Observable<UserInterfaceI> {
    console.log('desde url', user);
    return this.htttp.post<UserInterfaceI>(this.baseURL, user);
  }
}
