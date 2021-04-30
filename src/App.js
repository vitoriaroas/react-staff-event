import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
// import Footer from './components/Footer'
import Staff from './components/Staff'
import Events from './components/Events'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header className="App-header"></Header>
        <section className="main-section">
          <Switch>
            <Route path="/events" component={Events} />
            <Route path="/staff" component={Staff} />
            <Route path="/" component={Main} />
          </Switch>
        </section>
        {/* <Footer /> */}
      </div>
    </Router>
  )
}

export default App
