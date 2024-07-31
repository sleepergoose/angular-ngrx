import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { createLoginForm, ILogin, LoginForm } from '../../models/ILogin';
import { Observable } from 'rxjs';
import { IUser } from '../../models/IUser';
import { select, Store } from '@ngrx/store';
import { selectAuthError, selectAuthUser } from '../../store/selectors/auth.selectors';
import { loginRequest } from '../../store/actions/auth.actions';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

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
  styleUrl: './login.component.sass',
})
export class LoginComponent {
  readonly form: LoginForm = createLoginForm();

  user$: Observable<IUser | null>;
  error$: Observable<string | null>;

  constructor(
    private store: Store,
    private router: Router,
  ) {
    this.user$ = this.store.pipe(select(selectAuthUser));
    this.error$ = this.store.pipe(select(selectAuthError));

    this.user$.pipe(
      takeUntilDestroyed(),
    ).subscribe((user) => {
      if (user) {
        router.navigate(['/']);
      }
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.getRawValue() as ILogin;

    this.store.dispatch(loginRequest({ email, password }));
  }
}
