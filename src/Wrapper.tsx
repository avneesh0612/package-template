import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import theme from './theme';

export interface IProvider {
  children: React.ReactNode;
}

export const Provider: React.FC<IProvider> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
