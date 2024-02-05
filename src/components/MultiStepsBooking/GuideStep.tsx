import { DefaultStepProps } from './MultiStepsBooking'

export const GuideStep = ({ onStepChange }: DefaultStepProps) => {
  return (
    <main>
      <div className='steps__title'>
        <p className='steps__title--primary'>{`Choose a guide`}</p>
        <p className='steps__title--secondary'>{`Carefully curated by our team.`}</p>
      </div>
      <div className="steps__content">
        <p className='steps__text'>{`You can select a random guide or pay extra 20% to choose your prefered spiritual guide.`}</p>
        {/* TODO: a form with searc and dropdown to select a guide */}
        <select name="guide">
          <option value="random">Random</option>
          <option value="desiree">Desiree</option>
          <option value="michael">Michael</option>
          <option value="sarah">Sarah</option>
        </select>
      </div>
      <button onClick={onStepChange}>{`Find a Slot`}</button>
    </main>
  )
}
