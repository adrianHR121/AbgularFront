import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {
    // Verificar si el usuario ha iniciado sesión
    if (!this.isLoggedIn()) {
      console.log("ya padrino");
    }
  }

  isLoggedIn(): boolean {
    // Implementa la lógica para verificar si el usuario ha iniciado sesión
    // Puedes usar una variable de estado o un servicio para rastrear el estado de inicio de sesión
    // En este ejemplo, asumiremos que isLoggedIn devuelve true si el usuario ha iniciado sesión
    // Reemplaza esta lógica con tu propia implementación de inicio de sesión

    // Ejemplo básico: verifica si existe un valor en el sessionStorage
    return sessionStorage.getItem('loggedIn') === 'true';
  }
}
