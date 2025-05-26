import React, { useState, useEffect, useRef } from "react";

const dealsData = [
  {
    id: 1,
    title: "50% Off on Summer Collection",
    description: "Get ready for summer with half-price styles.",
    image:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=800&q=80",
    dealEnds: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    originalPrice: 100,
    discountPercent: 50,
  },
  {
    id: 2,
    title: "Buy 1 Get 1 Free - Shoes",
    description: "Step out in style with our exclusive BOGO deal.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    dealEnds: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    originalPrice: 80,
    discountPercent: 50,
  },
  {
    id: 3,
    title: "25% Off on Electronics",
    description: "Upgrade your gadgets with great discounts.",
    image:
      "https://images.unsplash.com/photo-1510552776732-03e61cf4b144?auto=format&fit=crop&w=800&q=80",
    dealEnds: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    originalPrice: 200,
    discountPercent: 25,
  },
  {
    id: 4,
    title: "30% Off Home Appliances",
    description: "Make your home smarter with amazing offers.",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
    dealEnds: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    originalPrice: 350,
    discountPercent: 30,
  },
  {
    id: 5,
    title: "Flash Sale: 40% Off",
    description: "Limited time flash sale on selected items.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    dealEnds: new Date(Date.now() + 12 * 60 * 60 * 1000),
    originalPrice: 120,
    discountPercent: 40,
  },
];

function formatTimeLeft(endTime) {
  const total = Date.parse(endTime) - Date.now();
  if (total <= 0) return "00 : 00 : 00 : 00";

  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  const pad = (num) => (num < 10 ? `0${num}` : num);

  return `${pad(days)} : ${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`;
}

const DealsSection = () => {
  const [timeLeft, setTimeLeft] = useState(formatTimeLeft(dealsData[0].dealEnds));
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(formatTimeLeft(dealsData[0].dealEnds));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320; // a bit wider for bigger cards
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

          /* Hide scrollbar */
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;  
            scrollbar-width: none;  
          }
        `}
      </style>

      <section
        className="font-poppins px-6 py-10 bg-white max-w-full"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="flex items-center justify-between mb-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 flex items-center gap-4 select-none">
            <span>🔥 Hot Deals & Sales</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-orange-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-orange-600 font-semibold text-lg tracking-widest tabular-nums select-text">
              {timeLeft}
            </span>
          </h2>

          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="p-3 rounded-full bg-orange-100 text-orange-700 hover:bg-orange-200 shadow-md transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="p-3 rounded-full bg-orange-100 text-orange-700 hover:bg-orange-200 shadow-md transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar max-w-7xl mx-auto"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {dealsData.map(
            ({
              id,
              title,
              description,
              image,
              originalPrice,
              discountPercent,
              dealEnds,
            }) => {
              const discountedPrice = (
                originalPrice *
                (1 - discountPercent / 100)
              ).toFixed(2);

              return (
                <div
                  key={id}
                  className="flex-shrink-0 w-80 bg-orange-50 rounded-xl shadow-lg hover:shadow-2xl transition p-5 scroll-snap-align-start flex flex-col"
                >
                  <img
                    src={image}
                    alt={title}
                    className="rounded-lg w-full h-48 object-cover mb-4 shadow-md"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-semibold text-orange-700 mb-1">{title}</h3>
                  <p className="text-gray-700 mb-3 flex-grow">{description}</p>

                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-gray-500 line-through text-sm">
                        ${originalPrice.toFixed(2)}
                      </span>
                      <span className="text-orange-700 font-bold text-lg">
                        ${discountedPrice}
                      </span>
                      <span className="text-green-600 font-semibold text-sm bg-green-100 px-2 py-0.5 rounded">
                        -{discountPercent}%
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-600 font-semibold mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 16h-1v-4h-1m1-4h.01M12 19a7 7 0 100-14 7 7 0 000 14z"
                        />
                      </svg>
                      <span>
                        Ends in{" "}
                        {formatTimeLeft(dealEnds)}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="mt-auto bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-md transition shadow"
                    onClick={() => alert(`Deal grabbed: ${title}`)}
                  >
                    Grab Deal
                  </button>
                </div>
              );
            }
          )}
        </div>
      </section>
    </>
  );
};

export default DealsSection;
