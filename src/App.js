import './App.css';

import Home from './components/Home';
import backgroundImage from './assets/bg.jpg';



function App() {
  return (
      <div
        className="App"
      >
        {Home()}
      </div>
  );
}

export default App;
