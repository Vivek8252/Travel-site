function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-5xl font-bold">Explore the World with Nandi Travels</h1>
        <p className="mt-4 text-lg">Best packages, affordable prices & unforgettable memories</p>
        <a href="/packages" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          View Packages
        </a>
      </section>

      {/* Packages Preview */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Popular Packages</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border p-4 rounded shadow">
            <h3 className="font-bold text-xl">🌴 Goa Tour</h3>
            <p>3 Nights / 4 Days</p>
            <p className="font-semibold text-blue-600 mt-2">₹15,000</p>
          </div>
          <div className="border p-4 rounded shadow">
            <h3 className="font-bold text-xl">🏔 Manali Trip</h3>
            <p>4 Nights / 5 Days</p>
            <p className="font-semibold text-blue-600 mt-2">₹20,000</p>
          </div>
          <div className="border p-4 rounded shadow">
            <h3 className="font-bold text-xl">🕌 Varanasi Darshan</h3>
            <p>2 Nights / 3 Days</p>
            <p className="font-semibold text-blue-600 mt-2">₹10,000</p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
