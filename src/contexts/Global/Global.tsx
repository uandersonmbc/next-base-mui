import { createContext, useContext, useMemo, useReducer } from 'react';
import { PaletteMode } from '@mui/material';

import { GlobalAction, reducer, StateType } from '@/reducers/globalReducer';

type Dispatch = {
  dispatch: (action: GlobalAction) => void;
};

const GlobalStateContext = createContext<StateType | undefined>(undefined);
const GlobalDispatchContext = createContext<Dispatch | undefined>(undefined);

export const useGlobalState = () => {
  const state = useContext(GlobalStateContext);

  if (!state)
    throw new Error(
      'useGlobalState should be inside GlobalStateContext Provider'
    );

  return state;
};

export const useGlobalDispatch = () => {
  const dispatch = useContext(GlobalDispatchContext);

  if (!dispatch)
    throw new Error(
      'useGlobalDispatch should be inside GlobalDispatchContext Provider'
    );

  return dispatch;
};

const initialState: StateType = {
  theme: 'light'
};

const Global = ({
  children,
  theme = 'light'
}: {
  children: React.ReactNode;
  theme: PaletteMode;
}) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    theme: theme
  });

  const actions = useMemo(
    () => ({
      dispatch
    }),
    []
  );

  return (
    <GlobalDispatchContext.Provider value={actions}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

export default Global;
