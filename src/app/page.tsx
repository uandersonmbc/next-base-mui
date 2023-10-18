'use client';
import { Button } from '@mui/material';

import { useGlobalDispatch } from '@/contexts/Global/Global';
import { GlobalActionTypes } from '@/reducers/globalReducer';

export default function Home() {
  const { dispatch } = useGlobalDispatch();
  return (
    <main>
      <h1>Home</h1>

      <Button
        onClick={() =>
          dispatch({ type: GlobalActionTypes.SET_THEME, payload: 'dark' })
        }
      >
        Dark
      </Button>
      <Button
        onClick={() =>
          dispatch({ type: GlobalActionTypes.SET_THEME, payload: 'light' })
        }
      >
        Light
      </Button>
    </main>
  );
}
