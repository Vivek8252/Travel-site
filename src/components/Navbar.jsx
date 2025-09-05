import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-blue-600 text-white px-6 py-4 shadow-md">
      <h1 className="text-xl font-bold">✈️ Nandi Travels</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/about" className="hover:text-gray-200">About</Link>
        <Link to="/packages" className="hover:text-gray-200">Packages</Link>
        <Link to="/contact" className="hover:text-gray-200">Contact</Link>
      </div>
    </nav>
  );
}
export default Navbar;
