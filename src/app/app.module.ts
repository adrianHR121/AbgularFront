import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importación necesaria para trabajar con formularios
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';

import {MenuJSService} from "./menu-js.service";

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CitasComponent } from './citas/citas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AnuarioComponent } from './anuario/anuario.component';
import { InfoHomeComponent } from './info-home/info-home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    CitasComponent,
    PerfilComponent,
    AnuarioComponent,
    InfoHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Agrega FormsModule aquí para trabajar con formularios
    AppRoutingModule,
    IonicModule
  ],
  providers: [
    MenuJSService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
