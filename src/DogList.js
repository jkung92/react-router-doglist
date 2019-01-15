import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DogList extends Component {
  render() {
    const styleObj = {
      borderRadius: '50%',
      width: '200px',
      margin: '25px'
    };

    return (
      <div>
        <h1> HELLOZ. WE HAVE DOGZ. CLICK ON THEM FOR MORE INFO.</h1>
        <div style={{ display: 'inline-flex' }}>
          {this.props.dogData.map(dog => (
            <div>
              <Link to={`/dogs/${dog.name}`}>
                <img src={dog.src} alt="doge" style={styleObj} />
                <p>{dog.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DogList;
