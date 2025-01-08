import { Component } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ProductCategories from './components/ProductCategories/ProductCategories';
import Segments from './components/Segments/Segments';
import TrendingProducts from './components/TrendingProducts/TrendingProducts';
import InteriorDesign from './components/interior/InteriorDesign';
import ProcessPage from './components/ProcessPage/ProcessPage';
import About from './components/About/About';
import WhyViber from './components/WhyViber/WhyViber';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <Home />
          <ProductCategories />
          <Segments />
          <TrendingProducts />
          <InteriorDesign/>
          <About />
          <ProcessPage />
          <WhyViber />
          <Footer/>
        </main>
      </div>
    );
  }
}

export default App;