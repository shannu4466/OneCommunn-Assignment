import { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav>
          <div className="logo">
            <img src="https://res.cloudinary.com/drjvxkwkq/image/upload/v1736348452/logo_gmv0ou.png" alt="Logo" />
          </div>
          <div className="menu">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#living">Living</a></li>
              <li><a href="#storage">Storage</a></li>
              <li><a href="#dining">Dining</a></li>
              <li><a href="#bedroom">Bedroom</a></li>
              <li><a href="#matress">Matress</a></li>
              <li><a href="#study">Study</a></li>
              <li><a href="#office">Office</a></li>
              <li><a href="#outdoor">Outdoor</a></li>
            </ul>
          </div>
          <div className="user-actions">
            <i>
              <img src="https://res.cloudinary.com/drjvxkwkq/image/upload/v1736348459/Frame_n3btsy.png"/>
            </i>
            <i>
              <img src="https://res.cloudinary.com/drjvxkwkq/image/upload/v1736348459/usericon_eo5igb.png"/>
            </i>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;