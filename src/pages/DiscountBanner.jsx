import React from 'react';

const DiscountBanner = () => {
  return (
    <section
      className="relative w-full max-w-5xl mx-auto py-12 px-6 sm:px-12 text-center rounded-xl overflow-hidden shadow-lg my-12"
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: 'linear-gradient(120deg, #fde68a, #fb923c, #f97316, #facc15)',
        backgroundSize: '300% 300%',
        animation: 'slideBG 8s ease infinite',
      }}
    >
      <style>{`
        @keyframes slideBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes gradientText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes flashBorder {
          0%, 100% { border-color: #facc15; }
          50% { border-color: #f97316; }
        }

        @keyframes pulseIcon {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.6; }
          100% { transform: scale(1); opacity: 1; }
        }

        .gradient-text {
          background: linear-gradient(90deg, #facc15, #fb923c, #f97316);
          background-size: 200% 200%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: gradientText 5s infinite linear;
        }

        .flashing-border {
          border: 3px solid #facc15;
          animation: flashBorder 1s infinite;
        }

        .pulsing-icon {
          display: inline-block;
          animation: pulseIcon 1.2s infinite;
        }
      `}</style>

      <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-orange-800">
        <span className="pulsing-icon">🎉</span> Limited Time Offer!
      </h2>

      <p className="text-orange-900 mb-8 text-lg sm:text-xl font-medium">
        Get <strong className="text-orange-950 font-bold">30% off</strong> on your first purchase. Use code{' '}
        <span className="bg-white text-orange-600 px-3 py-1 rounded-full font-mono text-base sm:text-lg flashing-border">
          WELCOME30
        </span>{' '}
        at checkout.
      </p>

      <button className="bg-white text-orange-700 font-semibold px-10 py-4 rounded-full text-lg sm:text-xl transition duration-200 flashing-border hover:shadow-xl">
        Shop Now
      </button>
    </section>
  );
};

export default DiscountBanner;
