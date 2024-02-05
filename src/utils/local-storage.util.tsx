import { InitialContext } from '../models/multi-steps.model';

export enum LoadStateKey {
  MULTI_STEPS_CONTEXT = 'multiStepsContext'
}
interface LoadState {
  (key: LoadStateKey): InitialContext | null;
}

interface SaveState {
  (key: string, state: InitialContext): void;
}

export const loadState: LoadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (!serializedState) return undefined; 
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState: SaveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    return 'Error saving state to local storage.'
  }
};
