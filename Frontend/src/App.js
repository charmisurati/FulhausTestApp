import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Data from './data.json'

function App() {
  return (
    <div className="App">
      <div className='min-height flex bg-gray flex-col'>
        <Header />
        <Home Data={Data} />
      </div>
    </div>
  );
}

export default App;
