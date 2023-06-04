import {createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from '../rootReducer';
import {Questions} from '~/api/types';
import questionApi from '~/api/questionApi/questionApi';

export const loadAllQuestions = createAsyncThunk<
  Questions,
  undefined,
  {state: RootState}
>('books/loadAllQuestions', () => {
  const response = questionApi.loadAllQuestions();
  return response;
});
