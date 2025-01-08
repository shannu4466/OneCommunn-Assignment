import { Component } from 'react';
import './TrendingProducts.css';

class TrendingProducts extends Component {
  state = {
    products: [
      { id: 1, name: 'Luxury Bed Set', image: 'public/assets/trendin/bedsheet.png' },
      { id: 2, name: 'Luxury Sofa Set', image: 'public/assets/trendin/sofa.png' },
      { id: 3, name: 'Luxury Dining Table', image: 'public/assets/trendin/dining.png' },
      { id: 4, name: 'Luxury Bed Set', image: 'public/assets/trendin/bedsheet2.png' },
      { id: 5, name: 'Elegant Candle Set', image: 'public/assets/trendin/candleset.png' },
      { id: 6, name: 'Elegant Sofa Set', image: 'public/assets/trendin/sofaset.png' },
      { id: 7, name: 'Fruit Platter', image: 'public/assets/trendin/fruitplatter.png' },
      { id: 8, name: 'Elegant Candle set', image: 'public/assets/trendin/candle.png' }
    ]
  };

  render() {
    return (
      <section className="trending-products">
        <div className='segement-info'>
          <i><img src="src\assets\trendingicon.png"/></i>
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