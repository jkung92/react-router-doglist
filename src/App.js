import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import { Route, Switch, Redirect } from 'react-router-dom';
import DogList from './DogList.js';
import DogDetails from './DogDetails.js';
import whiskey from './dogpics/whiskey.jpg';
import hazel from './dogpics/hazel.jpg';
import tubby from './dogpics/tubby.jpg';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: 'Whiskey',
        age: 5,
        src: whiskey,
        facts: [
          'Whiskey loves eating popcorn.',
          'Whiskey is a terrible guard dog.',
          'Whiskey wants to cuddle with you!'
        ]
      },
      {
        name: 'Hazel',
        age: 0,
        src: hazel,
        facts: [
          'Hazel has soooo much energy!',
          'Hazel is highly intelligent.',
          'Hazel loves people more than dogs.'
        ]
      },
      {
        name: 'Tubby',
        age: 4,
        src: tubby,
        facts: [
          'Tubby is really stupid.',
          'Tubby does not like walks.',
          'Angelina hates Tubby.'
        ]
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <NavBar dogData={this.props.dogs} />
        <Switch>
          <Route
            exact
            path="/dogs"
            render={() => <DogList dogData={this.props.dogs} />}
          />
          <Route
            path="/dogs/:name"
            render={routeProps => (
              <DogDetails {...routeProps} dogData={this.props.dogs} />
            )}
          />
          <Redirect to="/dogs" />
        </Switch>
      </div>
    );
  }
}

export default App;
