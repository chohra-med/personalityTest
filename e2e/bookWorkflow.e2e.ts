import {by, device, element} from 'detox';
import {isBookListScreen, isBookScreen} from './common/screenChecker';

describe('Show the User Workflow', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show Book List successfully', async () => {
    await isBookListScreen();
  });

  it('should navigate to Book Screen', async () => {
    const bookId = '2';
    const bookCardPressable = await element(by.id(`bookCard.${bookId}`));
    await bookCardPressable.tap();
    await isBookScreen(bookId);
  });
});
