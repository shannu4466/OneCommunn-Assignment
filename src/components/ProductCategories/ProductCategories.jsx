import { Component } from 'react';
import './ProductCategories.css';

class ProductCategories extends Component {
  categories = [
    { id: 1, name: 'Living Room', image: 'src/assets/Living.png' },
    { id: 2, name: 'Dining', image: 'src/assets/dining.png' },
    { id: 3, name: 'Bed Room', image: 'src/assets/bedroom.png' },
    { id: 4, name: 'Office', image: 'src/assets/office.png' },
    { id: 5, name: 'Storage', image: 'src/assets/storage.png' },
    { id: 6, name: 'Study Room', image: 'src/assets/study.png' }
  ];

  render() {
    return (
      <section className="product-categories">
        <div className='product-cate-heading'>
          <h2>Product Categories</h2>
        </div>
        <div className="categories-grid">
          {this.categories.map(category => (
            <div key={category.id} className="category-card">
              <h3>{category.name}</h3>
              <img src={category.image} alt={category.name} className='category-image' />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default ProductCategories;