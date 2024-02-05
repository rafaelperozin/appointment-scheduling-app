import { DefaultStepProps } from './MultiStepsBooking'

export const ProfileStep = ({ onStepChange }: DefaultStepProps) => {
  return (
    <main>
      <div className='steps__title'>
        <p className='steps__title--primary'>{`Your Personal Info`}</p>
        <p className='steps__title--secondary'>{`Tell more about yourself.`}</p>
      </div>
      <div className="steps__content">
        <p className='steps__text'>{`Our guides need some essential information about you. It helps to streight the connection even being away.`}</p>
        {/* TODO: date and time picker based on guide availability */}
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="phone" placeholder="Phone" />
        <p className='steps__text'>{`Once you confirm the appointment will open the payment portal.`}</p>
        <p className='steps__text'>{`Your appointment is confirmed upon successful payment and guide approval.`}</p>
        <p className='steps__text steps__text--small steps__text--warning'>{`Attention: From this point, cancellation may incur fees. See policies.`}</p>
      </div>
      <button onClick={onStepChange}>{`Confirm Apppointment`}</button>
    </main>
  )
}
