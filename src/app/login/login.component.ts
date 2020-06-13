import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  btnclick(): void {
    if (this.username === 'admin' && this.password === 'admin123') {
      this.router.navigate(['/secondPage']);
    } else {
      alert('please correct your username and password');
    }
  }
}
