import Auth from '@/components/Auth';
import theme from '@/shared/theme';
import {
  Box,
  ThemeProvider,
} from '@mui/material';

import styles from './page.module.css';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box component="main" className={styles.main}>
      </Box>
    </ThemeProvider>
  );
}
