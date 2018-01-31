import React, { Component } from 'react'
import './App.css'
import Form from './components/form/formContainer'
import View from './components/view/viewContainer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>React redux form</h1>
        </header>
        <Form />
        <View />
      </div>
    )
  }
}

export default App
