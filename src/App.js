import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Homepage from "./Pages/homepage"
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/Footer" element={<Footer/>}/>
      </Routes>
    </Router>
    
  
  );
}

export default App;
