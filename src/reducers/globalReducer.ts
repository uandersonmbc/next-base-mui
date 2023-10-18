import { PaletteMode } from '@mui/material';

export enum GlobalActionTypes {
  SET_THEME = 'SET_THEME'
}

interface UserLocal {
  accessToken?: string;
  reloadUserInfo?: {
    customAttributes: string;
  };
}

export type User = UserLocal | null | undefined;

export type GlobalAction = {
  type: GlobalActionTypes.SET_THEME;
  payload: PaletteMode;
};

export type StateType = {
  theme: PaletteMode;
};

const reducer = (state: StateType, action: GlobalAction): StateType => {
  switch (action.type) {
    case GlobalActionTypes.SET_THEME:
      document.cookie = `theme=${action.payload}`;
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
};

export { reducer };
