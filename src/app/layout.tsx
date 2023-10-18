import { PaletteMode } from '@mui/material';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';

import GlobalStateProvider from '@/registries/contexts/global';
import ThemeRegistry from '@/registries/theme/ThemeProvider';

import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const theme = (cookieStore.get('theme')?.value || 'light') as PaletteMode;

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <GlobalStateProvider theme={theme}>
          <ThemeRegistry theme={theme}>{children}</ThemeRegistry>
        </GlobalStateProvider>
      </body>
    </html>
  );
}
