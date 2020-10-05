import * as React from 'react';
import { ThemeProvider } from '@sajari-dev/react-components';

const ContextProvider: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default ContextProvider;
