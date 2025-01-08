import { Component } from 'react';
import './About.css';

class About extends Component {
  features = [
    { id: 1, title: 'Inspired Living', description: 'Discover furniture that combines modern elegance with everyday comfort, crafted to make your home a reflection of your unique style.' },
    { id: 2, title: 'Exceptional Savings', description: 'By bridging the gap between you and trusted furniture makers, we bring you stunning pieces at prices that fit your budget.' },
    { id: 3, title: 'Easy Shopping', description: 'From quick browsing to fast delivery and easy assembly, we simplify every step of finding and enjoying your perfect furniture.' },
    { id: 4, title: 'Sustainable Options', description: 'Choose from sustainable furniture options crafted with the planet in mind—because style should never come at the cost of the environment.' }
  ];

  render() {
    return (
      <section className="about">
        <h2>About Us</h2>
        <p>Discover the epitome of luxury living with our exclusive furniture collection. Each piece 
          is meticulously crafted to</p>
          <p>bring sophistication and elegance to your home.</p>
        <div className='about-grids'>
          <div className="features-grid">
            {this.features.map(feature => (
              <div key={feature.id} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
          <div className='about-images'>
            <div className='about-image-grids'>
              <img src="https://res.cloudinary.com/drjvxkwkq/image/upload/v1736348452/about1_kg7pi2.png" className='img1'/>
              <img src="https://res.cloudinary.com/drjvxkwkq/image/upload/v1736348453/about3_uxyxl2.png" className='img3'/>
            </div>
            <div className='about-image-grids'>
              <img src="https://res.cloudinary.com/drjvxkwkq/image/upload/v1736348452/about2_yvrox4.png" className='img2'/>
              <img src="https://res.cloudinary.com/drjvxkwkq/image/upload/v1736348452/about4_n0uf4p.png" className='img4'/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;