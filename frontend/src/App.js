import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListaDipendentiComponent from './components/ListaDipendentiComponent';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <div className="container">
        <ListaDipendentiComponent/>
      </div>
      <FooterComponent/>
    </div>
  );
}

export default App;
