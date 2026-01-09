import heroBg from "../assets/main_background.jpg";

const Hero = () => {
  return (
    <section 
      className="relative h-[70vh] bg-cover bg-center font-serif"
      style={{ 
        backgroundImage: `url(${heroBg})`,

      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 p-10 max-w-20xl mx-auto px- grid md:grid-cols-2 gap-20">

        {/* LEFT: INTRO CARD */}
        <div className="bg-white/90 backdrop-blur p-3 rounded-xl shadow-lg">
          <h1 className="text-2.54xl font-bold text-gray-900 mb-4">
            Welcome to Promos 
          </h1>
          <h3 className="text-black font-serif">
            Your One Stop Solution For Customer
          </h3>
          <br />
          <p className="text-gray-700">
              Our venture is building a performance-driven customer acquisition platform that enables brands 
              and local businesses to reliably convert marketing spend into measurable customer growth. 
              Promoters and businesses submit a clear contract that specifies how many customers or
               leads they want, along with their target audience, location, budget, and timeline.
                The platform then designs and executes tailored promotion campaigns focused on achieving 
                those specific acquisition goals rather than just generating views or clicks
                The core value proposition is outcome-based promotion at an affordable price,
                 making structured marketing accessible to businesses that may not have in-house expertise or 
                 large budgets. By combining multiple channels and data-driven optimization, the service
                  continuously improves targeting and conversion, helping clients reach high-intent 
                  customers more efficiently. Transparent reporting provides visibility into key metrics
                   such as cost per acquired customer and overall return on investment, enabling better planning 
                   and smarter allocation of marketing spend.Over time, the Over time, the platform builds a rich dataset of campaign 
                   performance across different sectors and regions, which strengthens 
                   its ability to predict results and refine strategies for future clients. 
                   This creates a scalable and defensible business model where each new campaign 
                   contributes to better benchmarks, improved efficiency, and stronger outcomes
                    for promoters and businesses. As a result, the company is well positioned to
                     become a trusted growth partner for businesses that want simple, contract-based
                      access to consistent and predictable customer acquisitionplatform builds a rich
                       dataset of campaign performance across different sectors and regions,
                        which strengthens its ability to predict results and refine strategies for future clients. 
                        This creates a scalable and defensible business model where each new campaign contributes
                         to better benchmarks, improved efficiency, and stronger outcomes for promoters and businesses.
                          As a result, the company is well positioned to become a trusted growth partner for businesses 
                          that want simple, contract-based access to consistent and predictable customer acquisition
​ </p>
        </div>

        {/* RIGHT: COMPANY DETAILS ON IMAGE */}
        <div className="text-white space-y-6">
          <h2 className="text-4xl font-bold">
            We Build Your Genuine Customer 
          </h2>

          <p className="text-lg text-gray-200">
            Our team are Dedicated To Find Your Best Customer On Diffrent Plateform Who Are genuinely Intrested In Buying Your Product .
          </p>

          <ul className="space-y-3 text-lg">
            <li>✔ Google Ads :- Run Your Products Ads On Google</li>
            <li>✔ Facebook :- Run Your Products Ads On Facebook</li>
            <li>✔ Promote By suitable Content Creators</li>
            <li>✔ Run Ads On Specific Apps Where You Can Gain The Customer</li>
          </ul>

          <button className="mt-4 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
