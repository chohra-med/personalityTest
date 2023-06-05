import {Question} from '~/api/types';
import {RootState, store} from '../store';
import questionsAdapter from './questionsAdapter';

const questionsSelectors = questionsAdapter.getSelectors<RootState>(
  s => s.questions,
);

//@ts-ignore
export const selectAllQuestions = () =>questionsSelectors.selectAll(store.getState());

export const selectLengthOfAllQuestions = () => selectAllQuestions.length;

export const selectQuestionById =
  (questionId: Question['id']) => (state: RootState) =>
    questionsSelectors.selectById(state, questionId);
