import React, { Component } from 'react'
import Staff from './Staff'

class Staff extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Staff: [],
    }
  }

  componentDidMount() {
    console.log('my component loaded painfully')

    fetch('https://events-84973.firebaseapp.com/staff')
      .then((response) => response.json())
      .then((dataReceived) => this.setState({ coffees: dataReceived }))
      .catch()
  }

  handleButtonClick(type) {
    this.setState({ coffees: null })
    fetch(`https://events-84973.firebaseapp.com/staff${type}`)
      .then((response) => response.json())
      .then((dataReceived) => this.setState({ coffees: dataReceived }))
      .catch()
  }

  render() {
    const { coffees } = this.state

    if (!coffees) {
      return <h2>Loading...</h2>
    }

    return (
      <>
        {this.state.coffees.map((coffee) => {
          return <SingleCoffee key={coffee.id} coffee={coffee} />
        })}
      </>
    )
  }
}

export default Staff
