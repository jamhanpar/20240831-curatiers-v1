import { useTheme } from '@mui/system';

export function useIsDarkMode() {
  const theme = useTheme();
  return theme.palette.mode === 'dark';
}
