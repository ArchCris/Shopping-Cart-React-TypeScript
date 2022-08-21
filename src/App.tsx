import {Routes,Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import Home from "./pages/Home"
import Store from "./pages/Store"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import {shoppingCartProvider} from "./context/shoppingCartContext"

function App() {
  return(
  <shoppingCartProvider>
    <Navbar/>
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Container>
  </shoppingCartProvider>
  )
}

export default App
