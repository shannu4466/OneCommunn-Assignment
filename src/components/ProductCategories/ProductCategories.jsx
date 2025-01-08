import { Component } from 'react';
import './ProductCategories.css';

class ProductCategories extends Component {
  categories = [
    { id: 1, name: 'Living Room', image: 'https://res.cloudinary.com/drjvxkwkq/image/upload/v1736348457/Living_qdxfm7.png' },
    { id: 2, name: 'Dining', image: 'https://res.cloudinary.com/drjvxkwkq/image/upload/v1736348453/dining_ux8dqe.png' },
    { id: 3, name: 'Bed Room', image: 'https://res.cloudinary.com/drjvxkwkq/image/upload/v1736348453/bedroom_xdxegp.png' },
    { id: 4, name: 'Office', image: 'https://res.cloudinary.com/drjvxkwkq/image/upload/v1736348453/office_pj4amb.png' },
    { id: 5, name: 'Storage', image: 'https://res.cloudinary.com/drjvxkwkq/image/upload/v1736348458/storage_k1wcsj.png' },
    { id: 6, name: 'Study Room', image: 'https://res.cloudinary.com/drjvxkwkq/image/upload/v1736348458/study_vxmjhw.png' }
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