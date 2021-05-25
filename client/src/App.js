import './App.css';
import Navbar from './navbar'
import Scrape from './scrape'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Web Scrapping</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9"> 
              <Scrape></Scrape>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
