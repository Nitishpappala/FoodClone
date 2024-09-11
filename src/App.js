import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuScreen from "./screens/MenuScreen";
import Contactus from "./screens/Contactus";
import Aboutus from "./screens/Aboutus";
import Home from "./screens/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/" element={<MenuScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
