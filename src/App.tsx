import { Global, ThemeProvider } from '@emotion/react';
import { useRecoilValue } from 'recoil';

import { darkTheme, lightTheme } from '@/theme';
import GlobalStyle from '@/theme/globalStyle';
import { isDarkAtom } from './atoms';
import Home from './pages/Home';

function App(): JSX.Element {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Global styles={GlobalStyle(isDark ? darkTheme : lightTheme)} />
      <Home />
    </ThemeProvider>
  );
}

export default App;
