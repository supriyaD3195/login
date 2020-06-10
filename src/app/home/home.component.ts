import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 username:string;
 password:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  btnclick(){
if(this.username=="admin"  &&  this.password=="admin123")
{

 this.router.navigate(['/login']);
}
else{
alert("please correct your username and password");
}
  }}
