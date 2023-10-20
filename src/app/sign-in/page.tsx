import { Box, Typography } from '@mui/material';
import Image from 'next/image';

function SignIn() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
          backgroundColor: '#f5f5f5'
        }}
      >
        <Image src="/images/login-bg.svg" alt="Logo" width={400} height={400} />
      </Box>
      <Box
        sx={{
          width: {
            xs: '100%',
            md: '50%'
          },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="h5" fontWeight={'bold'}>
          Welcome to the Sign In Page
        </Typography>
      </Box>
    </Box>
  );
}

export default SignIn;
