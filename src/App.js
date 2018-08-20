import React, { Component } from 'react';
import './App.css';
import Output from './UserOutput/UserOutput';
import Input from './UserInput/UserInput'

class App extends Component {
  state = {
    userName2: "Supermarketa",
    dynamic: "dynamic"
  }

  inputHandler = (event) => {
    this.setState({userName2: event.target.value})
  }

  render() {
    return (
      <div>
        <div className="div-1">
          <p className="alert alert-primary">React Exercise [Udemy]</p>
          <h5>Instructions:</h5>
          <ul>
            <li>Create TWO new components: UserInput and UserOutput</li>
            <li>UserInput should hold an input element, UserOutput two paragraphs</li>
            <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
            <li> Pass a username (of your choice) to UserOutput via props and display it there</li>
            <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
            <li>Add a method to manipulate the state (=> an event-handler method)</li>
            <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
            <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
            <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
            <li>Add styling of your choice to your components/ elements in the components.</li>
          </ul>
          <hr/><hr/>
        </div>
        <div>
        <Input 
          typed={this.inputHandler} /* only pass reference, do not execute it here [no parentheses!] */
          currentName = {this.state.userName2}/> {/*two way data binding*/}
        <Output userName='Marketa' description="hardcoded"/>  {/*hardcoded userName passed as props to Output*/}
        <Output userName={this.state.userName2} description={this.state.dynamic}/> {/*userName2 passed via state*/}
       </div>
      </div>
    );
  }
}

export default App;
