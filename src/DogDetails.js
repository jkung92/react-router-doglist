import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DogDetails extends Component {
  render() {
    console.log(this.props.match.params, `this is the match params`);
    console.log(this.props.match, `this is the match prop`);
    const dogName = this.props.match.params.name;
    const currentDog = this.props.dogData.filter(
      dog => dog.name === dogName
    )[0];

    return (
      <div>
        <h1>Dog Details for {dogName}</h1>
        <img
          src={currentDog.src}
          alt="doge"
          style={{ width: '400px', borderRadius: '10px' }}
        />
        <h2>{currentDog.age} years old</h2>
        <ul>
          {currentDog.facts.map(fact => (
            <li> {fact} </li>
          ))}
        </ul>
        <Link to="/"> Go Back </Link>
      </div>
    );
  }
}

export default DogDetails;
