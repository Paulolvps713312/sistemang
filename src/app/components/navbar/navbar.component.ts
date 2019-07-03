import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
})


export class NavBarComponent implements OnInit {

  constructor() { }

  token: string;

  ngOnInit() {}

  readLocalStorageValue(token: string): boolean {
    return localStorage.token != null;
  }

}
