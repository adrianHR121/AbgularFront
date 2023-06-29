import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MenuJSService} from "./../menu-js.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private _cargaScript:MenuJSService ){
    _cargaScript.Cargar(["menu"]);
  }
}
