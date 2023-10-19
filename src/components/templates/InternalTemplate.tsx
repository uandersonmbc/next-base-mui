'use client';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import Sidebar from '@/components/organisms/Sidebar';

interface InternalTemplateProps {
  children: React.ReactNode;
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

function InternalTemplate({ children }: InternalTemplateProps) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}

export default InternalTemplate;
