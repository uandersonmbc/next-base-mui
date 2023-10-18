'use client';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useGlobalState } from '@/contexts/Global/Global';

import NextAppDirEmotionCacheProvider from './EmotionCache';
import { darkTheme, lightTheme } from './themes';

function ThemeRegistry({
  children
}: {
  children: React.ReactNode;
  theme: 'light' | 'dark';
}) {
  const globalState = useGlobalState();

  const theme = createTheme({
    ...(globalState.theme === 'dark' ? darkTheme : lightTheme)
  });

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}

export default ThemeRegistry;
