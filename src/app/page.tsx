import Button from '@mui/material/Button';
import { IconArrowLeft } from '@tabler/icons-react';

export default function Home() {
  return (
    <main>
      <Button variant='contained'>
        Hello World
        <IconArrowLeft />
      </Button>
    </main>
  );
}
