import {createSlice} from '@reduxjs/toolkit';

import * as questionsActions from './questionsActions';
import questionsAdapter from './questionsAdapter';
import * as questionsSelectors from './questionsSelectors';

const initialState = questionsAdapter.getInitialState();

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      questionsActions.loadAllQuestions.fulfilled,
      questionsAdapter.setAll,
    );
  },
});

export {questionsActions, questionsSelectors};

export default questionsSlice.reducer;
