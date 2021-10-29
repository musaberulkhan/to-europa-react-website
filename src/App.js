import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Banner></Banner>
      </Router>
    </div>
  );
}

export default App;
