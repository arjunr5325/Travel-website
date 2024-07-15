
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "../src/components/Pages/Home"
import Signup from './components/Pages/Signup'
import Services from './components/Pages/Services'
import Product from './components/Pages/Product'
import './App.css'



function App() {
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Services" element={<Services />} />
        <Route exact path="/Product" element={<Product/>}/>


      </Routes>
    </Router>
  )
}

export default App
