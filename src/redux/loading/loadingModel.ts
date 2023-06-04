export type ActionPrefixesToCheck = 'books' | 'authors';

export interface RequestState {
  isLoading: boolean;
  isLoaded: boolean;
}

export interface LoadingState {
  books: RequestState;
  authors: RequestState;
}
