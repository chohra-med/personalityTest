import {Question} from '~/api/types';
import {RootState, store} from '../store';
import questionsAdapter from './questionsAdapter';

const booksSelectors = questionsAdapter.getSelectors<RootState>(
  s => s.questions,
);

//@ts-ignore
export const selectAllBooks = () => booksSelectors.selectAll(store.getState());

export const selectBookById =
  (questionId: Question['id']) => (state: RootState) =>
    booksSelectors.selectById(state, questionId);
