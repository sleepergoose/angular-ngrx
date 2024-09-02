import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserStore } from './app.reducers';

export const selectAuth = createFeatureSelector<IUserStore>('auth');

export const authSelector = createSelector(
  selectAuth,
  (state: IUserStore) => state,
);