import './App.css';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Products   />
      
    </div>
  );
}

export default App;
