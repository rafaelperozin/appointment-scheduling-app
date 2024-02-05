import { useCallback, useMemo, useRef } from 'react'
import { IntroStep } from './IntroStep';
import { GuideStep } from './GuideStep';
import { PickSlotStep } from './PickSlotStep';
import { ProfileStep } from './ProfileStep';
import { Confirmation } from './Confirmation';
import './MultiStepsBooking.style.scss';
import { AvailableSteps } from '../../models/multi-steps.model';
import { useMultiStepsContext } from '../../hooks/MultiStepsContext.hook';

interface StepsComponentsMap {
  [key: number]: () => JSX.Element;
}

type HandleStepChange = () => void;

export interface DefaultStepProps {
  onStepChange: () => void;
}

export const MultiStepsBooking = () => {
  const { context: {currentStep}, setCurrentStep } = useMultiStepsContext();
  const handleStepChange = useRef<HandleStepChange>(() => {});

  const StepsComponentsMap = useMemo<StepsComponentsMap>(() => ({
    1: () => <IntroStep onStepChange={handleStepChange.current} />,
    2: () => <GuideStep onStepChange={handleStepChange.current} />,
    3: () => <PickSlotStep onStepChange={handleStepChange.current} />,
    4: () => <ProfileStep onStepChange={handleStepChange.current} />,
    5: () => <Confirmation />
  }), []);

  const stepsLength = Object.keys(StepsComponentsMap).length;

  // It's a useRef because we have a circular dependency here.
  handleStepChange.current = useCallback(() => {
    if (currentStep < stepsLength) {
      const newStep = (currentStep + 1) as AvailableSteps;
      setCurrentStep(newStep);
    }
  }, [currentStep, setCurrentStep, stepsLength]);

  const CurrentStepComponent = StepsComponentsMap[currentStep];

  return (!CurrentStepComponent)
    ? <div>{`Sorry, no steps found`}.</div>
    : <CurrentStepComponent />;
}
