import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Checkout from './component/Checkout/Checkout';
import { useState } from 'react';

function App() {
  const [isVisible, setVisible] = useState(false);
  return (
    <div className="App">
      <div className='min-height flex bg-gray flex-col'>
        <Header setVisible={setVisible} />
        <Home />
        {
          isVisible === true && <Checkout setVisible={setVisible} />
        }
      </div>
    </div>
  );
}

export default App;
