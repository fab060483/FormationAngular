import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };
  private router = inject(Router)
  

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(this.loginData);
      this.router.navigate(['/articles'])
    }
  }
}
