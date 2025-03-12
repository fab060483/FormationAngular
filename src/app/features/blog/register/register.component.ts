import { Component, computed } from '@angular/core';
import { NgForm, FormGroup, FormsModule, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  form = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    prenom: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    dateNaissance: new FormControl('', [Validators.required, Validators.pattern('[0-9][0-9]/[0-9][0-9]/[0-9][0-9][0-9][0-9]')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    password2: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  nomErrors = computed(() => {
    const control = this.form.get('nom');
    if (control?.errors && control.touched) {
      if (control.errors['required']) return 'Nom requis';
      if (control.errors['pattern']) return 'Format invalide';
    }
    return null;
  });

  prenomErrors = computed(() => {
    const control = this.form.get('prenom');
    if (control?.errors && control.touched) {
      if (control.errors['required']) return 'Nom requis';
      if (control.errors['pattern']) return 'Format invalide';
    }
    return null;
  });

  dateNaissanceErrors = computed(() => {
    const control = this.form.get('dateNaissance');
    if (control?.errors && control.touched) {
      if (control.errors['required']) return 'Nom requis';
      if (control.errors['pattern']) return 'Format invalide';
    }
    return null;
  });
  
  emailErrors = computed(() => {
    const control = this.form.get('email');
    if (control?.errors && control.touched) {
      if (control.errors['required']) return 'Email requis';
      if (control.errors['email']) return 'Email invalide';
    }
    return null;
  });
  
  passwordErrors = computed(() => {
    const control = this.form.get('password');
    if (control?.errors && control.touched) {
      if (control.errors['required']) return 'Mot de passe requis';
      if (control.errors['minlength']) return 'Minimum 8 caractères';
    }
    return null;
  });

  password2Errors = computed(() => {
    const control = this.form.get('password2');
    if (control?.errors && control.touched) {
      if (control.errors['required']) return 'Mot de passe requis';
      if (control.errors['minlength']) return 'Minimum 8 caractères';
    }
    return null;
  });
  
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
