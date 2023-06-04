import 'jest-styled-components';
import 'jest-styled-components/native';

import { RenderOptions, render } from '@testing-library/react-native';
import React, { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { RootState } from '../src/redux/rootReducer';
import { store } from '../src/redux/store';
import { lightTheme as Theme } from './src/theme';
import { AppThemeProvider } from '../src/containers/AppThemeProvider';

// eslint-disable-next-line no-undef
export const mockedNavigate = jest.fn();
// eslint-disable-next-line no-undef
export const mockedNavigateDispatch = jest.fn();
// eslint-disable-next-line no-undef
jest.mock('@react-navigation/native', () => {
  return {
    // @ts-ignore
    // eslint-disable-next-line no-undef
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
      dispatch: mockedNavigateDispatch,
      params: { hideAnimation: true },
    }),
  };
});

export const getTestWrapperComponents = (
  children: ReactNode,
  { redux }: { redux?: boolean } = {},
) => {
  const wrapper: { Component: any; props: any }[] = [
    { Component: AppThemeProvider, props: { theme: Theme } },
  ];

  if (redux) {
    wrapper.push({ Component: Provider, props: { store } });
  }

  let innerContent = <>{children}</>;

  wrapper.forEach(({ Component, props }) => {
    innerContent = <Component {...props}>{innerContent}</Component>;
  });

  return innerContent;
};

export const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <AppThemeProvider >{children}</AppThemeProvider>
    </Provider>
  );
};

export const customRender = (
  children: ReactElement,
  options: RenderOptions = {},
) => render(children, { wrapper: AllTheProviders, ...options });

export const sleep = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

// @ts-ignore
export const getState: () => RootState = () => store.getState();
