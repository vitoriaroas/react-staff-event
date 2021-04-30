import React, { Component } from 'react'

class Events extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: []
        }
    }
    componentDidMount() {
        fetch('https://events-84973.firebaseapp.com/events')
        .then(response => response.json())
        .then(data => this.setState({events: data}))
        .catch(err => console.log(err))
    }
    render() {
        return (
            <>
            <h2>Events:</h2>
            </>
        )
    }
}

export default Events