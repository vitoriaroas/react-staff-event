import React, { Component } from 'react'

class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
    }
  }
  componentDidMount() {
    fetch('https://events-84973.firebaseapp.com/events')
      .then((response) => response.json())
      .then((data) => this.setState({ events: data }))
      .catch((err) => console.log(err))
  }
  render() {
    const { events } = this.state
    return (
      <>
        <h2>Events:</h2>
        {!events ? (
          <p>Loading...</p>
        ) : (
          events.map((event) => {
            return (
              <div>
                <h2> {event.name}</h2>
                <p> {event.address} </p>
                <p>{event.attire}</p>
                <p>{event.date}</p>
                <p>{event.eventType}</p>
                <p>{event.host}</p>
                <br />
              </div>
            )
          })
        )}
      </>
    )
  }
}

export default Events
