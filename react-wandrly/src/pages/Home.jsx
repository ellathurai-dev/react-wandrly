import { Link } from "react-router-dom";
import goaImage from "../assets/goa.jpg";

function Home() {
  const destinations = [
    {
      name: "Kerala",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Goa",
      image: goaImage
    },
    {
      name: "Dubai",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const trips = [
    {
      id: 1,
      name: "Kerala Explorer",
      location: "Kochi • Munnar • Alleppey",
      duration: "5 Days / 4 Nights",
      price: 18999,
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 3,
      name: "Dubai Experience",
      location: "Dubai • Desert Safari • Burj Khalifa",
      duration: "6 Days / 5 Nights",
      price: 54999,
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 4,
      name: "Bali Escape",
      location: "Ubud • Kuta • Nusa Penida",
      duration: "7 Days / 6 Nights",
      price: 62999,
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80"
    }
  ];

  return (
    <div className="home-page">

      <section className="hero">

        <div className="hero-content">

          <p className="section-title">
            DISCOVER THE WORLD
          </p>

          <h1>
            Your Journey
            <br />
            Starts Here
          </h1>

          <p>
            Discover beautiful destinations, exciting
            experiences and unforgettable journeys with
            Wanderly.
          </p>

          <div className="hero-buttons">

            <Link
              to="/trips"
              className="main-button"
            >
              Explore Trips
            </Link>

            <Link
              to="/about"
              className="secondary-button"
            >
              Learn More
            </Link>

          </div>

        </div>

      </section>

      <section className="section">

        <div className="section-header">

          <div>
            <p className="section-title">
              TOP DESTINATIONS
            </p>

            <h2>
              Places Worth Exploring
            </h2>
          </div>

          <Link to="/destinations">
            View All
          </Link>

        </div>

        <div className="destination-grid">

          {destinations.map((destination) => (

            <div
              className="destination-card"
              key={destination.name}
            >

              <img
                src={destination.image}
                alt={destination.name}
              />

              <div className="destination-overlay">

                <h3>
                  {destination.name}
                </h3>

                <Link to="/destinations">
                  Explore
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

      <section className="section light-section">

        <div className="section-header">

          <div>
            <p className="section-title">
              POPULAR TRIPS
            </p>

            <h2>
              Explore Our Trips
            </h2>
          </div>

          <Link to="/trips">
            View All Trips
          </Link>

        </div>

        <div className="trip-grid">

          {trips.map((trip) => (

            <div
              className="trip-card"
              key={trip.id}
            >

              <img
                src={trip.image}
                alt={trip.name}
              />

              <div className="trip-info">

                <span className="trip-tag">
                  POPULAR
                </span>

                <h3>
                  {trip.name}
                </h3>

                <p>
                  📍 {trip.location}
                </p>

                <div className="trip-bottom">

                  <div>

                    <small>
                      {trip.duration}
                    </small>

                    <h4>
                      ₹{trip.price.toLocaleString("en-IN")}
                    </h4>

                  </div>

                  <Link to={`/trips/${trip.id}`}>
                    View Details
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      <section className="section">

        <div className="section-header">

          <div>
            <p className="section-title">
              WHY WANDERLY
            </p>

            <h2>
              Travel Made Simple
            </h2>
          </div>

        </div>

        <div className="features-grid">

          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Amazing Destinations</h3>
            <p>
              Explore carefully selected destinations
              for memorable travel experiences.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Best Travel Plans</h3>
            <p>
              Find travel packages that suit your
              budget and travel style.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🧭</div>
            <h3>Easy Planning</h3>
            <p>
              Plan your journey easily with simple
              trip details and itineraries.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3>Memorable Experiences</h3>
            <p>
              Create unforgettable memories wherever
              your journey takes you.
            </p>
          </div>

        </div>

      </section>

      <section className="stats-section">

        <div className="stats-grid">

          <div>
            <h2>25+</h2>
            <p>Destinations</p>
          </div>

          <div>
            <h2>50+</h2>
            <p>Travel Packages</p>
          </div>

          <div>
            <h2>1000+</h2>
            <p>Happy Travelers</p>
          </div>

          <div>
            <h2>4.8</h2>
            <p>Average Rating</p>
          </div>

        </div>

      </section>

      <section className="section">

        <div className="section-header">

          <div>
            <p className="section-title">
              TRAVELER STORIES
            </p>

            <h2>
              What Travelers Say
            </h2>
          </div>

        </div>

        <div className="testimonial-grid">

          <div className="testimonial-card">

            <div className="testimonial-avatar">
              T
            </div>

            <p>
              "Wanderly made planning our trip very
              simple. The itinerary was easy to follow
              and the destinations were amazing."
            </p>

            <h4>
              Traveler
            </h4>

          </div>

          <div className="testimonial-card">

            <div className="testimonial-avatar">
              A
            </div>

            <p>
              "The trip details were clear and helpful.
              We could easily choose the package that
              suited our plans."
            </p>

            <h4>
              Traveler
            </h4>

          </div>

          <div className="testimonial-card">

            <div className="testimonial-avatar">
              R
            </div>

            <p>
              "A simple and enjoyable way to discover
              new places and plan a holiday."
            </p>

            <h4>
              Traveler
            </h4>

          </div>

        </div>

      </section>

      <section className="cta-section">

        <div className="cta-content">

          <p className="section-title">
            START YOUR JOURNEY
          </p>

          <h2>
            Ready to Explore?
          </h2>

          <p>
            Your next adventure is waiting for you.
          </p>

          <Link
            to="/trips"
            className="main-button"
          >
            Browse Trips
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;