import { Component } from 'react';
import './WhyViber.css';

class WhyViber extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Why Vibrer Stands Out?</h1>
        <div className="grid">
          <div className="card">
            <div className="icon">📦</div>
            <h2>500 + Collections</h2>
            <p>Our journey begins with a comprehensive understanding of your unique style and space requirements.</p>
          </div>
          <div className="card">
            <div className="icon">🧵</div>
            <h2>300 + Fabrics</h2>
            <p>Our journey begins with a comprehensive understanding of your unique style and space requirements.</p>
          </div>
          <div className="card">
            <div className="icon">✔️</div>
            <h2>Top-notch Quality</h2>
            <p>Our journey begins with a comprehensive understanding of your unique style and space requirements.</p>
          </div>
          <div className="card">
            <div className="icon">🎨</div>
            <h2>Colour and Length customization</h2>
            <p>Our journey begins with a comprehensive understanding of your unique style and space requirements.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WhyViber;
