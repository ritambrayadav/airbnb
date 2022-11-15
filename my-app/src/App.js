
import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive,  } from './component/data';
import Header from './component/Header';

function App() {
  
  return (
    <div className="App">
      <h2>React multi carousel</h2>
      <Carousel responsive={responsive}>
        
      </Carousel>;
    </div>
  );
}

export default App;
