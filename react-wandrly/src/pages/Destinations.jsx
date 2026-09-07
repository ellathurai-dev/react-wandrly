import useFetch from "../hooks/useFetch";

function Destinations() {
  const fallbackDestinations = [
    {
      id: 1,
      name: "Kerala",
      place: "India"
    },
    {
      id: 2,
      name: "Goa",
      place: "India"
    },
    {
      id: 3,
      name: "Dubai",
      place: "UAE"
    },
    {
      id: 4,
      name: "Bali",
      place: "Indonesia"
    },
    {
      id: 5,
      name: "Manali",
      place: "India"
    },
    {
      id: 6,
      name: "Rajasthan",
      place: "India"
    }
  ];

  const {
    data: destinations,
    loading
  } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    fallbackDestinations
  );

  return (
    <div className="destinations-page">

      <section className="page-hero">

        <div>
          <p className="section-title">
            DESTINATION GUIDE
          </p>

          <h1>
            Popular Destinations
          </h1>

          <p>
            Discover amazing places and plan your
            next unforgettable journey.
          </p>
        </div>

      </section>

      <section className="section">

        <div className="section-header">

          <div>
            <p className="section-title">
              EXPLORE THE WORLD
            </p>

            <h2>
              Places Worth Exploring
            </h2>
          </div>

        </div>

        {loading ? (

          <div className="loading-box">
            <h3>
              Loading destinations...
            </h3>
          </div>

        ) : (

          <div className="api-destination-grid">

            {destinations.slice(0, 6).map(
              (destination, index) => {

                const names = [
                  "Kerala",
                  "Goa",
                  "Dubai",
                  "Bali",
                  "Manali",
                  "Rajasthan"
                ];

                const places = [
                  "India",
                  "India",
                  "UAE",
                  "Indonesia",
                  "India",
                  "India"
                ];

                const destinationName =
                  destination.name || names[index];

                const destinationPlace =
                  destination.place || places[index];

                return (
                  <div
                    className="api-destination-card"
                    key={destination.id}
                  >

                    <div className="api-destination-icon">
                      🌍
                    </div>

                    <div>
                      <h3>
                        {destinationName}
                      </h3>

                      <p>
                        {destinationPlace}
                      </p>

                      <span>
                        Explore beautiful places,
                        local culture and memorable
                        travel experiences.
                      </span>
                    </div>

                  </div>
                );
              }
            )}

          </div>

        )}

      </section>

    </div>
  );
}

export default Destinations;