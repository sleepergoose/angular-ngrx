import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { createLoginForm, ILogin, LoginForm } from '../../models/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  readonly form: LoginForm = createLoginForm();
  errorMessage = '';

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const formValue = this.form.getRawValue() as ILogin;
  }
}
