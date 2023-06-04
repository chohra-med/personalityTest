import {RootState} from '../rootReducer';

const isDarkMode = (state: RootState) => state.appConfig.isDarkMode;

const selectAppLanguage = (state: RootState) => state.appConfig.appLanguage;

export default {
  isDarkMode,
  selectAppLanguage,
};
