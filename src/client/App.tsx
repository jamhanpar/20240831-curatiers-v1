import { ThemeProvider } from '@emotion/react';
import { styled } from '@mui/system';
import { theme } from './theme/mui-system-theme.ts';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="bg-teal-200 min-h-screen flex flex-col font-roboto">
        hello world
      </div>
    </ThemeProvider>
  );
}
