import {by, element, expect} from 'detox';

export const isHomeScreen = async () => {
  const homeScreen = element(by.id('screen.HomeScreen'));
  await expect(homeScreen).toBeVisible();
};

export const isPersonalityTestScreen = async () => {
  //   const bookScreen = element(by.id(`screen.Book${bookId}`));
  const personalityTestScreen = element(by.id(`screen.PersonalityTestScreen`));
  await expect(personalityTestScreen).toBeVisible();
};
