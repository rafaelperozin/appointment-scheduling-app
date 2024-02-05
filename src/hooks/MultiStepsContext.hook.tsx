import { useContext } from 'react';
import { MultiStepsContext } from '../contexts/MultiSteps.context';
import { UseMultiStepsContextReturn, SetCurrentStep } from '../models/multi-steps.model';

// eslint-disable-next-line react-refresh/only-export-components
export const useMultiStepsContext = (): UseMultiStepsContextReturn => {
  const multiStepsContext = useContext(MultiStepsContext);
  if (!multiStepsContext) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  const setCurrentStep: SetCurrentStep = (nextStep) => {
    multiStepsContext.setContext({
      ...multiStepsContext.context,
      currentStep: nextStep
    });
  }

  return {context: multiStepsContext.context, setCurrentStep};
}
