function About() {
  return (
    <div className="about-page">

      <section className="page-hero">
        <div>
          <p className="section-title">
            ABOUT WANDERLY
          </p>

          <h1>
            Making Travel Simple
          </h1>

          <p>
            We help travelers discover destinations,
            compare trips and plan memorable journeys.
          </p>
        </div>
      </section>

      <section className="section about-content">

        <div>
          <p className="section-title">
            OUR STORY
          </p>

          <h2>
            Travel should be exciting,
            not stressful.
          </h2>

          <p>
            Wanderly is designed as a simple travel
            booking platform where travelers can explore
            destinations and discover suitable travel packages.
          </p>

          <p>
            From peaceful beaches and beautiful mountains
            to exciting international destinations, Wanderly
            brings different travel experiences together in one place.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80"
            alt="Travel"
          />
        </div>

      </section>

      <section className="section">

        <div className="center-heading">
          <p className="section-title">
            WHAT WE VALUE
          </p>

          <h2>
            Our Mission
          </h2>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">🧭</div>

            <h3>
              Easy Planning
            </h3>

            <p>
              Make your travel planning simple and organized.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌎</div>

            <h3>
              Explore More
            </h3>

            <p>
              Discover destinations and experiences
              from different parts of the world.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">❤️</div>

            <h3>
              Better Experiences
            </h3>

            <p>
              Create memorable journeys with carefully
              selected travel packages.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🤝</div>

            <h3>
              Traveler First
            </h3>

            <p>
              Keep the traveler's needs at the center
              of the experience.
            </p>
          </div>

        </div>

      </section>

      <section className="about-stats">

        <div className="about-stat">
          <h2>50+</h2>
          <p>Destinations</p>
        </div>

        <div className="about-stat">
          <h2>120+</h2>
          <p>Packages</p>
        </div>

        <div className="about-stat">
          <h2>5K+</h2>
          <p>Travelers</p>
        </div>

        <div className="about-stat">
          <h2>4.8</h2>
          <p>Rating</p>
        </div>

      </section>

    </div>
  );
}

export default About;