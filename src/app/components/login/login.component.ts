import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { createLoginForm, ILogin } from '../../models/login.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../store/app.actions';
import { authSelector } from '../../store/app.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  loginForm = createLoginForm();
  auth$ = this.store.select(authSelector);

  constructor(
    private store: Store,
  ) { }

  submitLoginForm = () => {
    console.log(this.loginForm.getRawValue());
    this.store.dispatch(AuthActions.loginRequestAction({
      payload: {
        email: 'EMAIL',
        password: '123456',
      } as ILogin
    }))
  };

  display = () => {
    console.log('CLICKED');
  };
}
