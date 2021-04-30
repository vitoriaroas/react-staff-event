import React, { Component } from 'react'

class Staff extends Component {
  constructor(props) {
    super(props)
    this.state = {
      staff: [],
    }
  }

  componentDidMount() {
    console.log('my component loaded painfully')

    fetch('https://events-84973.firebaseapp.com/staff')
      .then((response) => response.json())
      .then((dataReceived) => this.setState({ staff: dataReceived }))
      .catch()
  }

  render() {
    const { staff } = this.state
    console.log(staff)
    return (
      <>
      {!staff ? <p>Loading...</p> : staff.map(staff => {
        return (
          <div>
            <h2> {staff.fullName}</h2>
            <p> {staff.fullTime} </p>
            <p>{staff.hourlyRate}</p>
            <p>{staff.position}</p>
            <p>{staff.events}</p>
            <br />
          </div>)

      })}
        </>
        )
    
    }
}

export default Staff
