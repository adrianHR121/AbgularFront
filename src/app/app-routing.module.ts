import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CitasComponent } from './citas/citas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AnuarioComponent } from './anuario/anuario.component';
import { InfoHomeComponent } from './info-home/info-home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', component: MenuComponent, outlet: 'secondary' },
      { path: 'citas', component: CitasComponent },
      { path: 'perfil', component:PerfilComponent},
      {path: 'anuario', component:AnuarioComponent},
      {path: 'info-home', component: InfoHomeComponent}
    ]
  }
];


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
