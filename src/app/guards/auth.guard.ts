import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AuthState } from '../store/reducers/auth.reducer';
import { selectAuthUser } from '../store/selectors/auth.selectors';
import { catchError, of, switchMap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<AuthState>);
  const router = inject(Router);

  return store.pipe(
    select(selectAuthUser),
    switchMap(state => {
      if (state) {
        return of(true);
      } else {
        router.navigate(['/login']);
        return of(false);
      }
    }),
    catchError(() => {
      router.navigate(['/login']);
      return of(false);
    }),
  )
};
