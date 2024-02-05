import { DefaultStepProps } from './MultiStepsBooking'

export const PickSlotStep = ({ onStepChange }: DefaultStepProps) => {
  return (
    <main>
      <div className='steps__title'>
        <p className='steps__title--primary'>{`Find a slot`}</p>
        <p className='steps__title--secondary'>{`Date and time that suits you.`}</p>
      </div>
      <div className="steps__content">
        <p className='steps__text'>{`Double-check your agenda before confirming the appointment. We will save this time to you and later cancellation could have cost.`}</p>
        {/* TODO: date and time picker based on guide availability */}
        {/* TODO: lock unavailable days and past days in the date picker */}
        <input type="date" name="date" />
        <select name="time">
          <option value="">{'Select a time'}</option>
          <option value="10">{'10am'}</option>
          <option value="11">{'11am'}</option>
          <option value="15">{'3pm'}</option>
          <option value="19">{'7pm'}</option>
        </select>
      </div>
      <button onClick={onStepChange}>{`Confirm Slot`}</button>
    </main>
  )
}
