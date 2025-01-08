import { Component } from 'react';
import './Segments.css';

class Segments extends Component {
  segments = [
    { id: 1, name: 'Residential', image: 'public/assets/residential.png' },
    { id: 2, name: 'Institutional', image: 'public/assets/institutional.png' },
    { id: 3, name: 'Commercial', image: 'public/assets/commercial.png' }
  ];

  render() {
    return (
      <section className="segments">
        <div className='segement-info'>
          <i><img src="/public/assets/segmenticon.png"/></i>
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