import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const ServiceCarousel = ({ services = [], interval = 3000 }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);
  const timerRef = useRef(null);

  const total = services.length;

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));

  // Auto slide
  useEffect(() => {
    if (!paused) {
      timerRef.current = setInterval(next, interval);
    }
    return () => clearInterval(timerRef.current);
  }, [paused, interval]);

  return (
    <section
      className="relative w-full py-16 md:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div className="flex justify-center gap-10 items-stretch">
          {Array.from({ length: visibleCount }).map((_, i) => {
            const serviceIndex = (index + i) % total;
            return (
              <ServiceCard
                key={serviceIndex}
                service={services[serviceIndex]}
                onNext={next}
                onPrev={prev}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;
