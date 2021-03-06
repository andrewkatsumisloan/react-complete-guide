import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium'

import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  // If state changes, DOM will be re-rendered.
  state = {
    persons: [
      { id: 'uniqueid1', name: 'Andrew', age: 22 },
      { id: 'uniqueid2', name: 'Jesus', age: 2021 },
      { id: 'uniqueid3', name: 'Carole Baskin', age: 59 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  nameChangedHandler = (event, id) => {
    // personIndex will equal the index of the person whose id is equal to the one passed in.
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Use this syntax because person is an object, therefore persons would be a refernce if we just set it to this.state.persons[personIndex]
    const person = {
      ...this.state.persons[personIndex]
    };

    // Alternative approach, less modern
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '2x solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor = 'orange'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red') // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold]
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1> Hi, I am a React App. </h1>
          <p className={classes.join(' ')}> This is really working! </p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
  };
}
export default Radium(App);

