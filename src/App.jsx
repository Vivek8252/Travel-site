import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-blue-600 text-white px-6 py-4 shadow-md">
        <h1 className="text-xl font-bold">✈️ Travel Site</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/packages" className="hover:text-gray-200">Packages</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
