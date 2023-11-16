import React from "react";
import otgg from "../assets/otgg.png";

const Hero = () => {
  return (
    <header className="w-full flex flex-col items-center p-8">
      <nav className="flex justify-between items-center w-full mb-6 pt-3">
        <img
          src={otgg}
          style={{ width: "30%" }}
          alt="sumz_logo"
          className="w-48 object-contain"
        />

        <button
          type="button"
          onClick={() => window.open("https://github.com/asappayy", "_blank")}
          className="purple_btn"
        >
          Wine-ly
        </button>
      </nav>

      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl textt font-bold leading-tight mb-4">
        Welcome to <br className="md:hidden" />
        <span className="purple_text">More-ly by Wine-ly</span>
      </h1>
      <h2 className="text-center desc text-lg md:text-xl lg:text-2xl mb-6">
        More-ly is your all-in-one solution for effortlessly handling and
        responding to reviews from top platforms like TripAdvisor, Google My
        Business, Booking.com, and Trustpilot. Seamlessly manage your hotel's
        online reputation with our intuitive dashboard, featuring AI-powered
        automatic responses and manual engagement options.
      </h2>
      <h4 className="text-purple-500 text-center mb-8">
        Elevate your guest interactions and stay ahead of the curve in the
        competitive world of{" "}
        <span
          className="purple_text"
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open("https://webdevill.netlify.app", "_blank")
          }
        >
          {" "}
          <a>hospitality</a>
        </span>{" "}
      </h4>

      {/* New component added below */}
      <LiveReviewsFeed />
    </header>
  );
};

const LiveReviewsFeed = () => {
  // Dummy data for reviews
  const reviewsData = [
    {
      platform: "TripAdvisor",
      rating: 4.5,
      text: "Great experience! Loved the hotel and the service.",
    },
    {
      platform: "Google My Business",
      rating: 4.2,
      text: "Beautiful hotel with excellent amenities.",
    },
    {
      platform: "Booking.com",
      rating: 4.0,
      text: "Comfortable stay and friendly staff.",
    },
    {
      platform: "Trustpilot",
      rating: 4.8,
      text: "Outstanding service! Highly recommended.",
    },
    // Add more dummy data as needed
  ];

  // Dummy function for generating responses with OpenAI
  const generateResponse = () => {
    // Implement OpenAI integration here
    // Placeholder for demonstration purposes
    return "Thank you for your kind words! We're glad you enjoyed your stay.";
  };

  return (
    <section className="w-full p-4 md:p-8 lg:max-w-2xl mx-auto">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-center">
        Live Reviews Feed
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviewsData.map((review, index) => (
          <div key={index} className="bg-white p-4 rounded shadow mb-4">
            <p className="font-semibold mb-1">{review.platform}</p>
            <p className="text-sm mb-1">Rating: {review.rating}</p>
            <p className="text mb-2">{review.text}</p>
            <p className="text-gray-600">
              {/* Placeholder for AI-generated response */}
              {generateResponse()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
