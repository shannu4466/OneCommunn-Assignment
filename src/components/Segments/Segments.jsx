import { Component } from 'react';
import './Segments.css';

class Segments extends Component {
  segments = [
    { id: 1, name: 'Residential', image: 'https://res.cloudinary.com/drjvxkwkq/image/upload/v1736348455/residential_seordx.png' },
    { id: 2, name: 'Institutional', image: 'https://res.cloudinary.com/drjvxkwkq/image/upload/v1736348457/institutional_mkkpxh.png' },
    { id: 3, name: 'Commercial', image: 'https://res.cloudinary.com/drjvxkwkq/image/upload/v1736348455/commercial_kpeswq.png' }
  ];

  render() {
    return (
      <section className="segments">
        <div className='segement-info'>
          <i><img src="https://res.cloudinary.com/drjvxkwkq/image/upload/v1736348454/segmenticon_yoe2e7.png"/></i>
          <h2>Segements</h2>
        </div>
        <div className="segments-grid">
          {this.segments.map(segment => (
            <div key={segment.id} className="segment-card">
              <img src={segment.image} alt={segment.name} />
              <h3>{segment.name}</h3>
              <button>View More</button>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Segments;