import {by, device, element} from 'detox';
import {isHomeScreen, isPersonalityTestScreen} from './common/screenChecker';

describe('Show the User Workflow', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show Home Screen successfully', async () => {
    await isHomeScreen();
  });

  it('should navigate to Personality Test Screen', async () => {
    const startTestButton = await element(by.id('button.startTest'));
    await startTestButton.tap();
    await isPersonalityTestScreen();
  });
});
