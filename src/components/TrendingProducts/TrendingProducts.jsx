import { Component } from 'react';
import './TrendingProducts.css';

class TrendingProducts extends Component {
  state = {
    products: [
      { id: 1, name: 'Luxury Bed Set', image: 'https://res.cloudinary.com/drjvxkwkq/image/upload/v1736349225/bedsheet_arxors.png' },
      { id: 2, name: 'Luxury Sofa Set', image: 'https://res.cloudinary.com/drjvxkwkq/image/upload/v1736349226/sofa_zud7cn.png' },
      { id: 3, name: 'Luxury Dining Table', image: 'https://res.cloudinary.com/drjvxkwkq/image/upload/v1736349226/dining_pnsxvv.png' },
      { id: 4, name: 'Luxury Bed Set', image: 'https://res.cloudinary.com/drjvxkwkq/image/upload/v1736349225/bedsheet2_kqp5zm.png' },
      { id: 5, name: 'Elegant Candle Set', image: 'https://res.cloudinary.com/drjvxkwkq/image/upload/v1736349225/candleset_w1xv71.png' },
      { id: 6, name: 'Elegant Sofa Set', image: 'https://res.cloudinary.com/drjvxkwkq/image/upload/v1736349226/sofaset_tmzx6h.png' },
      { id: 7, name: 'Fruit Platter', image: 'https://res.cloudinary.com/drjvxkwkq/image/upload/v1736349226/fruitplatter_qgydu1.png' },
      { id: 8, name: 'Elegant Candle set', image: 'https://res.cloudinary.com/drjvxkwkq/image/upload/v1736349225/candle_f3zwks.png' }
    ]
  };

  render() {
    return (
      <section className="trending-products">
        <div className='segement-info'>
          <i><img src="https://res.cloudinary.com/drjvxkwkq/image/upload/v1736348459/trendingicon_fppjr8.png"/></i>
          <h2>Trending Products</h2>
        </div>
        <div className="products-grid">
          {this.state.products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button className='enquire'>Enquire Now</button>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default TrendingProducts;