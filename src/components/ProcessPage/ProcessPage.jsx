import { Component } from 'react';
import './ProcessPage.css';

class ProcessPage extends Component {
  render() {
    return (
      <div className="process-container">
        <h1 className="process-title">Our Process</h1>
        <div className="steps">
          <div className="step">
            <img src="src/assets/step1.png"/>
            <div>
                <h2>Step 1: Select your dream model</h2>
                <p>Identify the style that best suits your space and personality. From modern minimalism to classic elegance, choose what resonates with you.</p>
            </div>
          </div>
          <div className="step">
          <img src="src/assets/step2.png"/>
            <div>
                <h2>Step 2: Customize to your requirement</h2>
                <p>Choose from a variety of premium materials such as rich woods, luxurious fabrics, and robust metals to complement your style.</p>
            </div>
          </div>
          <div className="step">
          <img src="src/assets/step3.png"/>
            <div>
                <h2>Step 3: Order confirmation</h2>
                <p>Accurate measurements ensure your furniture fits perfectly, maximizing space and functionality.</p>
            </div>
          </div>
          <div className="step">
          <img src="src/assets/step4.png"/>
            <div>
                <h2>Step 4: Quality check</h2>
                <p>Enjoy seamless delivery and professional installation services with every purchase.</p>
            </div>
          </div>
          <div className="step">
          <img src="src/assets/step5.png"/>
            <div>
                <h2>Step 5: Order processing</h2>
                <p>Your order is carefully reviewed and processed to ensure all details are correct before moving to production.</p>
            </div>
          </div>
          <div className="step">
          <img src="src/assets/step6.png"/>
            <div>
                <h2>Step 6: Delivery</h2>
                <p>Our commitment to quality ensures your satisfaction with every piece you choose.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProcessPage;
