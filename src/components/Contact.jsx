const Contact = () => {
  return (
    <section className="w-full bg-gray-100 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get In Touch
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have questions or want to grow your business with genuine customers?
            Fill out the form below and we’ll get back to you shortly.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* LEFT: CONTACT INFO */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Contact Information
              </h3>
              <p className="text-gray-600">
                Reach out to us directly or leave your details and we’ll contact you.
              </p>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>📧 Email: <span className="font-medium">jnishant794@gmail.com</span></p>
              <p>📞 Phone: <span className="font-medium">+91 9XXXXXXXXX</span></p>
              <p>📍 Location: <span className="font-medium">Delhi , India </span></p>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <form className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about your requirements..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
