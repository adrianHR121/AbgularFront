import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  username = '';
  password = '';
  showError = false;

  constructor(private router: Router) { }

  onSubmit() {
    // Aquí puedes realizar la validación del inicio de sesión
    // Puedes comparar el username y password ingresados con valores predefinidos

    // Ejemplo de validación básica
    if (this.username === 'usuario' && this.password === 'contraseña') {
      console.log("si jala");
      this.router.navigate(['home/info-home']); // Redirigir a la página principal
    } else {
      this.showError = true;
    }
  }
}
