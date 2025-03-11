import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  nom: string = '';
  prenom: string = '';
  //dateNaissance: date = '';
  login: string = '';
  password: string = '';
}
