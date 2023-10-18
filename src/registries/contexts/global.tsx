'use client';

import { PaletteMode } from '@mui/material';

import Global from '@/contexts/Global/Global';

function GlobalStateProvider({
  children,
  theme
}: {
  children: React.ReactNode;
  theme: PaletteMode;
}) {
  return <Global theme={theme}>{children}</Global>;
}

export default GlobalStateProvider;
