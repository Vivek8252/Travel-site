function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-6">
      <p>© {new Date().getFullYear()} Nandi Travels. All Rights Reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:text-blue-400">Facebook</a>
        <a href="#" className="hover:text-blue-400">Instagram</a>
        <a href="#" className="hover:text-blue-400">WhatsApp</a>
      </div>
    </footer>
  );
}
export default Footer;
