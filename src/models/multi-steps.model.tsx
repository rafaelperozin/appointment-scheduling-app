export type AvailableSteps = 1 | 2 | 3 | 4 | 5;

export interface InitialContext {
  currentStep: AvailableSteps;
}

export interface MultiStepsContextProps {
  context: InitialContext;
  setContext: (theme: InitialContext) => void;
}

export interface MultiStepsContextProviderProps {
  children: React.ReactNode;
}

export interface UseMultiStepsContextReturn {
  context: InitialContext,
  setCurrentStep: SetCurrentStep,
}

export type SetCurrentStep = (currentStep: AvailableSteps) => void
