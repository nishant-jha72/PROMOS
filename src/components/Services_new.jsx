const Services_new = () => {
  return (
    <main className="pt-28 bg-gray-50">

      {/* PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Services & How We Work
        </h1>
        <p className="text-gray-600 max-w-3xl">
          At Promos, we focus on delivering genuine customers by using
          data-driven strategies, targeted platforms, and ethical promotion methods.
        </p>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Service Overview
          </h2>
          <p className="text-gray-700 max-w-4xl leading-relaxed">
            Promos is not a traditional advertising agency. We do not believe in
            pushing ads to random users. Instead, our services are designed to
            connect businesses with people who already show interest in similar
            products or services.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">
            Services We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <ServiceBlock
              title="Google Ads Targeting"
              text="We use intent-based Google Ads to reach users who are actively
              searching for products or services similar to yours. This ensures
              higher conversion and lower wastage."
            />

            <ServiceBlock
              title="Social Media Advertising"
              text="We promote products on platforms like Facebook by targeting users
              based on interests, behavior, and engagement patterns."
            />

            <ServiceBlock
              title="Content Creator Promotion"
              text="Instead of aggressive ads, we collaborate with suitable content
              creators who already have trust among their audience."
            />

            <ServiceBlock
              title="App & Niche Platform Ads"
              text="For specific products, we use niche apps and platforms where the
              target audience is already present."
            />

          </div>
        </div>
      </section>

      {/* HOW WE EXECUTE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">
            How We Execute Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <StepCard
              step="Step 1"
              title="Requirement Analysis"
              text="Businesses contact us via the website. We analyze the product,
              audience, and goals before starting any promotion."
            />

            <StepCard
              step="Step 2"
              title="Platform Selection"
              text="We identify the most effective platforms such as Google, social
              media, creators, or apps based on audience behavior."
            />

            <StepCard
              step="Step 3"
              title="Campaign Planning"
              text="Campaigns are designed with clear messaging, ethical practices,
              and a focus on genuine interest rather than forced clicks."
            />

            <StepCard
              step="Step 4"
              title="Launch & Monitoring"
              text="Promotions are launched and continuously monitored to improve
              engagement and conversion quality."
            />

            <StepCard
              step="Step 5"
              title="Optimization"
              text="Based on performance data, we refine targeting, creatives,
              and platforms to maximize results."
            />

            <StepCard
              step="Step 6"
              title="Result Delivery"
              text="Businesses receive genuine leads and interested customers
              instead of random traffic."
            />

          </div>
        </div>
      </section>

      {/* WHY CHOOSE PROMOS */}
      <section className="py-20 bg-gray-900 text-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Why Choose Promos
          </h2>

          <ul className="space-y-4 max-w-3xl">
            <li>✔ Focus on genuine customer intent</li>
            <li>✔ Ethical and transparent promotions</li>
            <li>✔ Platform-specific strategies</li>
            <li>✔ No unnecessary data collection</li>
            <li>✔ Scalable for future backend integration</li>
          </ul>
        </div>
      </section>

    </main>
  );
};

/* ---------- SMALL COMPONENTS ---------- */

const ServiceBlock = ({ title, text }) => (
  <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{text}</p>
  </div>
);

const StepCard = ({ step, title, text }) => (
  <div className="bg-gray-50 p-6 rounded-xl shadow">
    <span className="text-sm text-blue-600 font-semibold">{step}</span>
    <h4 className="text-lg font-semibold mt-2 mb-2">{title}</h4>
    <p className="text-gray-600 leading-relaxed">{text}</p>
  </div>
);

export default Services_new;
