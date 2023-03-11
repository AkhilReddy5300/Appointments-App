// Write your code here
import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {title: '', date: '', appointmentList: []}

  onTitle = event => {
    this.setState({title: event.target.value})
  }

  onDate = event => {
    this.setState({date: event.target.value})
  }

  submitPage = event => {
    event.preventDefault()
    const {title, date, appointmentList} = this.state
    const newList = {
      id: uuidv4(),
      title,
      date,
      appointmentList,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newList],
      title: '',
      date: '',
    }))
  }

  onStarItem = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(each => {
        if (each.id === id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  starredItems = () => {
    const {appointmentList} = this.state
    const filterItems = appointmentList.filter(each => each.isStarred === true)

    this.setState({appointmentList: filterItems})
  }

  render() {
    const {title, date, appointmentList} = this.state

    return (
      <div className="bg-cont">
        <div className="card">
          <h1 className="header">Add Appointment</h1>
          <div className="details-cont">
            <div>
              <form onSubmit={this.submitPage}>
                <label htmlFor="label1" className="label">
                  TITLE
                </label>
                <br />
                <input
                  type="text"
                  id="label1"
                  placeholder="Title"
                  className="input"
                  onChange={this.onTitle}
                  value={title}
                />
                <br />
                <label htmlFor="label2" className="label">
                  DATE
                </label>
                <br />
                <input
                  type="date"
                  id="label2"
                  placeholder="dd/mm/yyyy"
                  className="input"
                  onChange={this.onDate}
                  value={date}
                />
                <br />
                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="image"
              />
            </div>
          </div>
          <hr />
          <div className="lists-cont">
            <h1 className="para2">Appointments</h1>
            <button
              className="button2"
              type="button"
              onClick={this.starredItems}
            >
              Starred
            </button>
          </div>
          <ul className="ul">
            {appointmentList.map(each => (
              <AppointmentItem
                key={each.id}
                item={each}
                onStarItem={this.onStarItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
