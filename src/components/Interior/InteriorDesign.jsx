import { Component } from 'react';
import './InteriorDesign.css';

class InteriorDesign extends Component {
  render() {
    return (
      <div className='interior-design'>
        <h1>Interior Designing</h1>
        <p>Kitchen Interior - Let us help you design your kitchen. Leave the worry of mixing and matching furniture behind. Set up your<br/>
        space confidently by purchasing the complete look for a seamless experience.</p>
        <button>Know More</button>
        <img src="\src\assets\interiorDesign.png"/>
      </div>
    );
  }
}

export default InteriorDesign;