import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface Login {
  email: string;
  password: string;
}

export const createLoginForm = (initData?: Login) => {
  return new FormGroup({
    email: new FormControl<string>(
      initData?.email ?? '',
      {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.email,
        ]
      }),
    password: new FormControl<string>(
      initData?.password ?? '',
      {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ]
      })
  })
};

export type CreateLoginForm = ReturnType<typeof createLoginForm>;