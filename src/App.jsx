import { Component } from 'react';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home';
import ProductCategories from './components/ProductCategories/ProductCategories.jsx';
import Segments from './components/Segments/Segments.jsx';
import TrendingProducts from './components/TrendingProducts/TrendingProducts.jsx';
import InteriorDesign from './components/interior/InteriorDesign.jsx';
import ProcessPage from './components/ProcessPage/ProcessPage.jsx';
import About from './components/About/About.jsx';
import WhyViber from './components/WhyViber/WhyViber.jsx';
import Footer from './components/Footer/Footer.jsx';

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