const Blogs = () => {
  return (
    <main className="pt-28 bg-gray-50">

      {/* BLOG HEADER */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Building Promos: From Planning to Execution
        </h1>
        <p className="text-gray-600 max-w-3xl">
          A detailed breakdown of how Promos was planned, developed, and how the
          backend will be completed in the next phase.
        </p>
      </section>

      {/* BLOG CONTENT */}
      <section className="max-w-4xl mx-auto px-6 pb-24 space-y-14 text-gray-800 leading-relaxed">

        {/* INTRO */}
        <article>
          <h2 className="text-2xl font-semibold mb-3">The Idea Behind Promos</h2>
          <p>
            Promos started with a simple observation — most businesses waste money
            on promotions that reach the wrong audience. I wanted to build a
            platform that focuses on quality over quantity by targeting users who
            are genuinely interested in a product.
          </p>
        </article>

        {/* PLANNING */}
        <article>
          <h2 className="text-2xl font-semibold mb-3">
            One Month of Planning & Frontend Execution
          </h2>
          <p>
            I invested more than one month planning and building Promos before
            releasing the first version. This phase was not about speed, but about
            getting the structure right.
          </p>
          <p className="mt-4">
            During this time, I focused on:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Designing a clean, responsive UI using React and Tailwind CSS</li>
            <li>Structuring the application into reusable components</li>
            <li>Creating clear user journeys for businesses</li>
            <li>Ensuring accessibility and mobile-first responsiveness</li>
            <li>Adding trust elements like privacy disclaimers and clear messaging</li>
          </ul>
        </article>

        {/* DEVELOPMENT PROCESS */}
        <article>
          <h2 className="text-2xl font-semibold mb-3">
            Development Approach
          </h2>
          <p>
            Instead of building everything at once, I followed an incremental
            development approach. Each section of the website — Hero, Services,
            Insights, Contact, and Documentation — was built and tested separately.
          </p>
          <p className="mt-4">
            This helped in maintaining code quality, avoiding layout issues, and
            ensuring scalability for future features.
          </p>
        </article>

        {/* BACKEND PLAN */}
        <article>
          <h2 className="text-2xl font-semibold mb-3">
            Backend Roadmap (Node.js / C#)
          </h2>
          <p>
            The next major phase of Promos is backend development. I plan to use
            either <strong>Node.js</strong> or <strong>C# (.NET)</strong> depending
            on scalability and deployment requirements.
          </p>

          <p className="mt-4">
            The backend will handle:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Secure form submissions from the Contact page</li>
            <li>User inquiries and lead management</li>
            <li>Campaign data storage and retrieval</li>
            <li>Admin dashboard APIs</li>
            <li>Authentication and basic access control</li>
          </ul>
        </article>

        {/* ONE MONTH PLAN */}
        <article>
          <h2 className="text-2xl font-semibold mb-3">
            One-Month Backend Execution Plan
          </h2>
          <p>
            The backend will be completed in a structured one-month timeline to
            ensure stability and maintainability.
          </p>

          <div className="mt-4 space-y-3">
            <p><strong>Week 1:</strong> Database design, API structure, and project setup</p>
            <p><strong>Week 2:</strong> Contact form APIs, validation, and email notifications</p>
            <p><strong>Week 3:</strong> Admin dashboard APIs and data management</p>
            <p><strong>Week 4:</strong> Testing, optimization, and deployment</p>
          </div>
        </article>

        {/* CONCLUSION */}
        <article>
          <h2 className="text-2xl font-semibold mb-3">
            Conclusion
          </h2>
          <p>
            Promos is not a rushed project — it is the result of careful planning,
            disciplined development, and a clear roadmap. By investing time in the
            foundation, the platform is built to scale smoothly in the future.
          </p>
        </article>

      </section>

    </main>
  );
};

export default Blogs;
