import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '../rootReducer';

const loadingSelector = (state: RootState) => state.loading;

const booksRequestState = createSelector(
  loadingSelector,
  state => state.books || {},
);

const authorsRequestState = createSelector(
  loadingSelector,
  state => state.authors || {},
);

export default {
  booksRequestState,
  authorsRequestState,
};
