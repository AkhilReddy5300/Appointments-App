// Write your code here
import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {item, onStarItem} = props
  const {title, date, id, isStarred} = item

  const strDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const starItem = () => {
    onStarItem(id)
  }

  const imgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="lists">
      <div className="card2">
        <div className="cont-2">
          <p className="title">{title}</p>
          <button
            type="button"
            data-testid="star"
            className="button3"
            onClick={starItem}
          >
            <img src={imgUrl} alt="star" className="start-icon" />
          </button>
        </div>
        <p className="date">{strDate}</p>
      </div>
    </li>
  )
}
export default AppointmentItem
