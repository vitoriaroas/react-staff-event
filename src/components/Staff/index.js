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
  handleButtonClick(type) {
    this.setState({ staff: null })
    fetch(`https://events-84973.firebaseapp.com/${type}`)
      .then((response) => response.json())
      .then((dataReceived) => this.setState({ staff: dataReceived }))
      .catch()
  }

  render() {
    const { staff } = this.state

    if (!staff) {
      return <h2>Loading...</h2>
    }
    return(
        <p>This is the staff</p>
    )
  }
}

export default Staff
