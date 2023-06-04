import { PayloadAction, createSlice} from '@reduxjs/toolkit';

import {AppConfigConfigurationState, AppLanguageType} from './appConfigModel';

let initialState: AppConfigConfigurationState = {
  isDarkMode: false,
  appLanguage: AppLanguageType.ENGLISH,
};

const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.appLanguage = action.payload;
    },
    toggleDarkMode: state => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const toastActions = {
  ...appConfigSlice.actions,
};

export default appConfigSlice.reducer;
