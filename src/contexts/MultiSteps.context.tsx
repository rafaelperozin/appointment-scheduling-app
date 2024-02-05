import { createContext, useState } from 'react';
import {
  InitialContext,
  MultiStepsContextProps,
  MultiStepsContextProviderProps
} from '../models/multi-steps.model';
import { LoadStateKey, loadState, saveState } from '../utils/local-storage.util';

const initialContext: InitialContext = loadState(LoadStateKey.MULTI_STEPS_CONTEXT) || {
  currentStep: 1
};

export const MultiStepsContext = createContext<MultiStepsContextProps | null>(null);

export const MultiStepsContextProvider = ({ children }: MultiStepsContextProviderProps) => {
  const [context, setContext] = useState<InitialContext>(initialContext);

  const updateContext = (newContext: InitialContext) => {
    setContext(newContext);
    saveState(LoadStateKey.MULTI_STEPS_CONTEXT, newContext);
  };
  
  return (
    <MultiStepsContext.Provider value={{context, setContext: updateContext}}>
      {children}
    </MultiStepsContext.Provider>
  );
}
