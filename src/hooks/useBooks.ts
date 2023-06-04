import React, {useEffect, useCallback} from 'react';
import {Book} from '~/api/types';
import {useSelector} from 'react-redux';
import useActions from '~/hooks/useActions';
import {booksActions, booksSelectors} from '~/redux/questions/books';
import {authorsActions} from '~/redux/authors/authors';

export const useBooks = () => {
  const books: Book[] = useSelector(booksSelectors.selectAllBooks);

  const [loadAllBooks, loadAllAuthors] = useActions([
    booksActions.loadAllBooks,
    authorsActions.loadAllAuthors,
  ]);
  const loadAllData = useCallback(async () => {
    await Promise.all([loadAllBooks(), loadAllAuthors()]);
    return Promise.resolve();
  }, [loadAllBooks, loadAllAuthors]);

  useEffect(() => {
    loadAllData();
  }, [loadAllAuthors]);

  return {books};
};
