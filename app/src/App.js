import './App.css';
import NavBar from './Components/navbar';
import Home from './screen/Home';
import About from './screen/about';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/footer';
function App() {
  return (
    <Router>
<div>
   <NavBar></NavBar>
   <Routes>
      <Route exact path="/" element={<Home/>}></Route> 
      <Route exact path="/about" element={<About/>}></Route> 
   </Routes>
   <Footer/>
</div>
</Router>

  );
}


export default App;
