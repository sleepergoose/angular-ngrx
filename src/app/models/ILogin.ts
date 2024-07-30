import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

export interface ILogin {
  email: string, 
  password: string,
}

export const createLoginForm = () => new FormGroup({
  email: new FormControl<string>('', {
    validators: [
      Validators.required,
      Validators.email,
    ],
  }),
  password: new FormControl<string>('', {
    validators: [
      Validators.required,
      Validators.pattern(/^[a-z0-9!@#$%&]{8,20}$/i),
    ],
  }),    
});

export type LoginForm = ReturnType<typeof createLoginForm>;