import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserStore } from '../reducers/user.reducers';

export const selectAuth = createFeatureSelector<IUserStore>('auth');

export const authSelector = createSelector(
  selectAuth,
  (state: IUserStore) => state,
);