import logo from "../assets/cust.jpg"; 
const page_describes = () => {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-center px-6 py-20"
      style={{
        backgroundImage:
          `url(${logo})`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-3xl text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
         What is Promos ?
        </h1>

        <p className="text-base md:text-lg text-gray-200 mb-8">
          We Promote Your Products To Give You The Customer and Reach Through Multiple Steps 
        </p>

         <h1 className="text-3xl md:text-4xl font-bold mb-6">
         Why Promos ?
        </h1>

         <p className="text-base md:text-lg text-gray-200 mb-8">
          Dont Stuck In The Hustle Of Promotion We Will DO Your Work In Very Affordable Price 
        </p>

        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl text-base md:text-lg font-medium transition"
        >
          See How We Work
        </a>
      </div>
    </section>
  );
};
export default page_describes;
