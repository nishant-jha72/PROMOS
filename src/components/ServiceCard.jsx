import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service, onNext, onPrev }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!service.link) return;

    if (service.link.startsWith("http")) {
      window.open(service.link, "_blank");
    } else {
      navigate(service.link);
    }
  };

  return (
    <div
      className="group relative w-full max-w-[520px]
                 rounded-2xl overflow-hidden shadow-2xl"
      style={{
        backgroundImage: `url(${service.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col justify-between text-white min-h-[22rem]">
        <div>
          <h3 className="text-2xl font-bold mb-3">
            {service.title}
          </h3>

          <p className="text-gray-200 mb-4 leading-relaxed">
            {service.description}
          </p>

          <div className="bg-white/10 backdrop-blur rounded-lg p-3 text-sm">
            <strong>How it’s done:</strong>
            <p className="mt-1">{service.process}</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-6">
          {/* CTA Button */}
          <button
            onClick={handleClick}
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-sm font-medium transition"
          >
            Learn More
          </button>

          {/* Arrows */}
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
            <button
              onClick={onPrev}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-full"
            >
              ←
            </button>
            <button
              onClick={onNext}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-full"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
