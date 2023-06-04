import {Action} from '@reduxjs/toolkit';

import {
  isFulfilledAction,
  isPendingAction,
  isRejectedAction,
} from '~/utils/helpers/actionHelper';

import {ActionPrefixesToCheck, LoadingState} from './loadingModel';

const initialState: LoadingState = {
  books: {isLoaded: false, isLoading: false},
  authors: {isLoaded: false, isLoading: false},
};

// list of reducer names to save loading states for
const actionPrefixedToCheck: Array<ActionPrefixesToCheck> = [
  'books',
  'authors',
];

// Every redux action runs in this loadingReducer / function
function loadingReducer(
  state = initialState,
  {type: actionType}: Action<string>,
): LoadingState {
  const isPending = isPendingAction(actionType);
  const isFulfilled = isFulfilledAction(actionType);
  const isRejected = isRejectedAction(actionType);

  // only handle pending, fulfilled, rejected actions
  // other actions will be ignored
  if (!isPending && !isFulfilled && !isRejected) {
    return state;
  }

  // Find out which reducer the action is coming from
  let newState: LoadingState | null = null;
  const foundPrefix: keyof LoadingState | undefined =
    actionPrefixedToCheck.find(prefix => actionType.startsWith(`${prefix}/`));

  if (typeof foundPrefix !== 'string') {
    return state;
  }

  // This results in a new loading state e.g. { ..., user: { loading: true, isLoaded: false }, ...}
  // Depending on the action
  newState = {
    ...state,
    [foundPrefix]: {
      isLoading: isPending,
      isLoaded: isFulfilled ? isFulfilled : !!state[foundPrefix]?.isLoaded,
    },
  };

  if (newState) {
    return newState;
  }

  return state;
}

export default loadingReducer;
