import { Footer, Home, Navbar } from "./Components";
import {
  Routes,
  Route,
} from "react-router-dom";
import { About, Contact } from "./Pages";

function App() {
  return (
    
    <div className="App">
     <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
