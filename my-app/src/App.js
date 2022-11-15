
import './App.css';
import './component/style.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive, productData } from './component/data';
import Header from './component/Header';
import Firstsec from './component/Firstsec';

function App() {
  const product = productData.map((item)=>(
    <Firstsec
    heading={item.heading}
    url={item.imageurl}
    price={item.price}
    description={item.description} />
  ))
  return (
    <div className="App">
      <Carousel responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}

export default App;
