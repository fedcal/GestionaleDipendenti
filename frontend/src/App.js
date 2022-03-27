import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListaDipendentiComponent from './components/ListaDipendentiComponent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        
        <HeaderComponent/>
        <div className='container'>
          <Routes>
            <Route path="/" element={<ListaDipendentiComponent/>}/>
          </Routes>
        </div>
        <FooterComponent/>
        
      </Router>
    </div>
  );
}

export default App;
