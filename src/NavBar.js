import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const activeStyle = {
      fontWeight: 'bold',
      color: 'peachpuff'
    };

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink
          className="navbar-brand"
          exact
          to="/"
          activeStyle={activeStyle}
        >
          Home
        </NavLink>

        <div id="navbarNav">
          <ul className="navbar-nav">
            {this.props.dogData.map(dog => (
              <li>
                <NavLink to={`/dogs/${dog.name}`} activeStyle={activeStyle}>
                  <p>{dog.name}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
