import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import NsutState from './Context/NsutState';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <NsutState>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </NsutState>

    </div>
  );
}

export default App;
