import {combineReducers} from '@reduxjs/toolkit';
import questionsReducter from './questions/questions';
import appConfigReducer from './appConfig/appConfig';

const rootReducer = combineReducers({
  questions: questionsReducter,
  appConfig: appConfigReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
