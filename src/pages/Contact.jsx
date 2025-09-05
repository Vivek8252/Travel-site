function Contact() {
  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
        <textarea placeholder="Your Message" className="w-full p-3 border rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
      <div className="mt-6">
        <p>📞 Phone: +91 9876543210</p>
        <p>📧 Email: info@nanditravels.com</p>
        <a href="https://wa.me/919876543210" target="_blank" className="text-green-600 font-semibold block mt-2">
          💬 Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
export default Contact;
