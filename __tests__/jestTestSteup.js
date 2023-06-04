

// This mock fixes a random error: 'ReferenceError: You are trying to `import` a file after the Jest environment has been torn down.'
jest.mock('@react-navigation/native/lib/commonjs/useLinking.native', () => ({
  default: () => ({ getInitialState: { then: jest.fn() } }),
  __esModule: true,
}));

jest.mock(
  'react-native-safe-area-context',
  () => require('react-native-safe-area-context/jest/mock').default,
);


jest.mock('redux-persist/lib/createPersistoid', () =>
  jest.fn(() => ({
    update: jest.fn(),
    flush: jest.fn(),
  })),
);

// NativeAnimatedHelper has moved path in our recent version of React Native.
// We should to mock the right path to avoid warnings
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');


jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);