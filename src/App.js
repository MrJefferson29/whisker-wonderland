import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Shelter from './Components/Shelter';
import Barbet from './Components/Barbet';
import Eskimo from './Components/Eskimo';
import Barbado from './Components/Barbado';
import Shih from './Components/Shih';
import Chi from './Components/Chi';
import Yorkie from './Components/Yorkie';
import About from './Components/About';
import Team from './Components/Team';
import Terms from './Components/Terms';

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route exact path ='/' element={<Home />} />
          <Route exact path='/adopt-shelter' element={<Shelter />} />
          <Route exact path='/adopt-shelter/barbet' element={<Barbet />} />
          <Route exact path='/adopt-shelter/american-eskimo' element={<Eskimo />} />
          <Route exact path='/adopt-shelter/barbado-d-teicera' element={<Barbado />} />
          <Route exact path='/adopt-shelter/shih-tzu' element={<Shih />} />
          <Route exact path='/adopt-shelter/chihuahua' element={<Chi />} />
          <Route exact path='/adopt-shelter/yorkshire-terrier' element={<Yorkie />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/meet-the-team' element={<Team />} />
          <Route exact path='/terms-and-conditions' element={<Terms />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
