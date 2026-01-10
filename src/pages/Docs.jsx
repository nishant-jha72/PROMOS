import profile from "../assets/profile.jpeg"; // add your photo here

const Docs = () => {
  return (
    <main className="pt-28 bg-gray-50">

      {/* HERO / INTRO */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Documentation & About
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Welcome to the official documentation of <strong>Promos</strong>.
              This page explains who we are, what we do, and how our platform helps
              businesses connect with genuine customers.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end">
            <img
              src={profile}
              alt="Founder"
              className="w-48 h-48 rounded-full object-cover shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ABOUT YOU */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            About the Founder
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-4xl">
            Hi, I’m <strong>Nishant Jha</strong>, a software developer and the creator of
            Promos. I built this platform to solve a real problem — helping businesses
            reach customers who are genuinely interested in their products instead of
            wasting money on random promotions.
            <br /><br />
            With a strong background in development and problem-solving, my goal is to
            build reliable, ethical, and transparent digital solutions.
          </p>
        </div>
      </section>

      {/* ABOUT WEBSITE */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            About Promos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <p className="text-gray-700 leading-relaxed">
              Promos is a customer acquisition platform designed to help businesses
              find real, interested customers through smart promotions, ads, and
              content-driven marketing strategies.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Google Ads based targeting</li>
              <li>✔ Facebook & social media promotions</li>
              <li>✔ Content creator collaborations</li>
              <li>✔ App-based & niche targeting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">
            How the Platform Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Step 1</h3>
              <p className="text-gray-600">
                Businesses submit their requirements using the contact form.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Step 2</h3>
              <p className="text-gray-600">
                We analyze the product, target audience, and best platforms.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Step 3</h3>
              <p className="text-gray-600">
                Ads and promotions are launched to reach genuine buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Technology Stack
          </h2>

          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-700">
            <li>⚙ React.js</li>
            <li>⚙ Tailwind CSS</li>
            <li>⚙ Node.js (Planned)</li>
            <li>⚙ Secure APIs</li>
          </ul>
        </div>
      </section>

      {/* TRUST & PRIVACY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Privacy & Trust
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We respect user privacy and operate transparently.
            No personal data is misused. All images and content are used
            strictly for demonstration purposes.
          </p>
        </div>
      </section>

    </main>
  );
};

export default Docs;
