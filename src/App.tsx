import './App.scss'
import { MultiStepsBooking } from './components/MultiStepsBooking/MultiStepsBooking'
import { MultiStepsContextProvider } from './contexts/MultiSteps.context';

const App = () => {
  return (
    <MultiStepsContextProvider>
      <MultiStepsBooking />
    </MultiStepsContextProvider>
  )
};

export default App
