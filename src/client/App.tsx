import { ThemeProvider } from '@emotion/react';
import { theme } from './theme/mui-system-theme.ts';
import Nav from './components/nav/Nav.tsx';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen flex flex-col font-inter">
        <Nav />
      </div>
    </ThemeProvider>
  );
}
