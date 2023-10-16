import { Box, Typography } from '@mui/material';

interface SidebarProps {
  title: string;
}

function Sidebar({ title }: SidebarProps) {
  return (
    <Box>
      <Typography>{title}</Typography>
    </Box>
  );
}

export default Sidebar;
