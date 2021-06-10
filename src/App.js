
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    //  BEM convention
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
