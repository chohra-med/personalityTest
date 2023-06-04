import {by, element, expect} from 'detox';

export const isBookListScreen = async () => {
  const bookListScreen = element(by.id('screen.BookListScreen'));
  await expect(bookListScreen).toBeVisible();
};

export const isBookScreen = async (bookId: string) => {
//   const bookScreen = element(by.id(`screen.Book${bookId}`));
  const bookScreen = element(by.id(`screen.Book`));
  await expect(bookScreen).toBeVisible();
};
