import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
      </Router>
    </div>
  );
}

export default App;
