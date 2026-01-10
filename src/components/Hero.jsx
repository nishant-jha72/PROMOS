import heroBg from "../assets/main_background.jpg";

const Hero = () => {
  return (
    <section
      className="pt-20 relative w-full bg-cover bg-center font-serif overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT: INTRO CARD */}
          <div className="bg-white/90 backdrop-blur p-6 md:p-8 rounded-xl shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Welcome to Promos
            </h1>

            <h3 className="text-gray-800 font-medium mb-4">
              Your One Stop Solution For Customers
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Gain real customers for your business. Our team is dedicated
              to providing you with customers who are genuinely interested
              in your product.
              <br />
              <strong>
                To know more about our services, click on the Learn More button.
              </strong>
            </p>
          </div>

          {/* RIGHT: COMPANY DETAILS */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              We Build Genuine Customers
            </h2>

            <p className="text-lg text-gray-200">
              Our team is dedicated to finding your best customers across
              different platforms who are genuinely interested in buying
              your product.
            </p>

            <ul className="space-y-3 text-base md:text-lg">
              <li>✔ Google Ads – Run ads on Google</li>
              <li>✔ Facebook Ads – Promote on Facebook</li>
              <li>✔ Promotion via suitable content creators</li>
              <li>✔ Ads on specific apps to target customers</li>
            </ul>

            <button className="inline-block bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
