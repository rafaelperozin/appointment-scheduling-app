import { DefaultStepProps } from './MultiStepsBooking'

export const IntroStep = ({ onStepChange }: DefaultStepProps) => {
  return (
    <main>
      <div className='steps__title'>
        <p className='steps__title--primary'>{`Book an appointment`}</p>
        <p className='steps__title--secondary'>{`with your spiritual guide.`}</p>
      </div>
      <div className="steps__content">
        <ul className='steps__list'>
          <li className='steps__list-item'>{`Choose your guide.`}</li>
          <li className='steps__list-item'>{`Find a time that suits to you.`}</li>
          <li className='steps__list-item'>{`Pay for the service.`}</li>
          <li className='steps__list-item'>{`Receive for the service.`}</li>
          <li className='steps__list-item'>{`Provide a feedback about your experience.`}</li>
        </ul>
      </div>
      <button onClick={onStepChange}>{`Start Booking`}</button>
    </main>
  )
}
