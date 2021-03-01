import { Component, OnInit } from '@angular/core';
import { UserInterfaceI } from 'src/app/shared/models/user.interface';
import { AuthService } from 'src/app/shared/services/auth.service';

import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) {}

  model: UserInterfaceI = {
    
    name: '',
    lastname: '',
    document: '',
    email: '',
    pass: '',
    pcia: '10',
  };
  public isError = false;
  public msgError = '';

  ngOnInit(): void {}
  /*
  onRegister(form: NgForm): void {
    console.log(
      'aqui datos',
      this.user.name,
      this.user.lastname,
      this.user.document,
      this.user.email,
      this.user.pass,
      this.user.cia
    );
    if (form.valid) {
      this.authService
        .registerUser(
          this.user.name,
          this.user.lastname,
          this.user.document,
          this.user.email,
          this.user.pass,
          this.user.cia
        )
        .subscribe(
          (user) => {
            this.authService.setUser(user);
            const token = user.id;
            this.authService.setToken(token);
            this.router.navigate(['/']);
            location.reload();
          },
          (res) => {
            console.log('aqui error', res);
            this.msgError = res.error.error.details.messages.email;
            this.onIsError();
          }
        );
    } else {
      this.onIsError();
    }
  }*/

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

  onSubmit() {
    console.log(this.model);

    this.authService.createUser(this.model) .subscribe((response: UserInterfaceI)=>console.log());


  }
}
