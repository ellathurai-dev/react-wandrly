import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import goaImage from "../assets/goa.jpg";

function Trips() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchInput, setSearchInput] = useState(
    searchParams.get("search") || ""
  );

  const [categoryInput, setCategoryInput] = useState(
    searchParams.get("category") || "All"
  );

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "All";

  const trips = [
    {
      id: 1,
      name: "Kerala Explorer",
      location: "Kochi • Munnar • Alleppey",
      category: "Popular",
      duration: "5 Days / 4 Nights",
      price: 18999,
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 2,
      name: "Goa Escape",
      location: "Panaji • Baga • Calangute",
      category: "Beach",
      duration: "4 Days / 3 Nights",
      price: 14999,
      image: goaImage
    },
    {
      id: 3,
      name: "Dubai Experience",
      location: "Dubai • Desert Safari • Burj Khalifa",
      category: "International",
      duration: "6 Days / 5 Nights",
      price: 54999,
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 4,
      name: "Bali Escape",
      location: "Ubud • Kuta • Nusa Penida",
      category: "International",
      duration: "7 Days / 6 Nights",
      price: 62999,
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 5,
      name: "Manali Adventure",
      location: "Manali • Solang Valley • Rohtang",
      category: "Adventure",
      duration: "5 Days / 4 Nights",
      price: 21999,
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 6,
      name: "Royal Rajasthan",
      location: "Jaipur • Udaipur • Jodhpur",
      category: "Culture",
      duration: "6 Days / 5 Nights",
      price: 24999,
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80"
    }
  ];

  const filteredTrips = trips.filter((trip) => {
    const searchText =
      trip.name.toLowerCase().includes(search.toLowerCase()) ||
      trip.location.toLowerCase().includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || trip.category === category;

    return searchText && categoryMatch;
  });

  function handleSearch() {
    const params = {};

    if (searchInput.trim() !== "") {
      params.search = searchInput.trim();
    }

    if (categoryInput !== "All") {
      params.category = categoryInput;
    }

    setSearchParams(params);
  }

  function handleClear() {
    setSearchInput("");
    setCategoryInput("All");
    setSearchParams({});
  }

  return (
    <div className="trips-page">

      <section className="page-hero">
        <div>
          <p className="section-title">
            TRAVEL PACKAGES
          </p>

          <h1>Find Your Perfect Trip</h1>

          <p>
            Choose from exciting travel packages and
            start planning your next adventure.
          </p>
        </div>
      </section>

      <section className="section">

        <div className="trip-filter">

          <div>
            <label>Search Destination</label>

            <input
              type="text"
              placeholder="Search Kerala, Goa, Dubai..."
              value={searchInput}
              onChange={(event) =>
                setSearchInput(event.target.value)
              }
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </div>

          <div>
            <label>Trip Type</label>

            <select
              value={categoryInput}
              onChange={(event) =>
                setCategoryInput(event.target.value)
              }
            >
              <option value="All">
                All Trips
              </option>

              <option value="Popular">
                Popular
              </option>

              <option value="Beach">
                Beach
              </option>

              <option value="Adventure">
                Adventure
              </option>

              <option value="International">
                International
              </option>

              <option value="Culture">
                Culture
              </option>
            </select>
          </div>

          <button onClick={handleSearch}>
            Search
          </button>

        </div>

        <div className="section-header">

          <div>
            <p className="section-title">
              POPULAR PACKAGES
            </p>

            <h2>
              Explore Our Trips
            </h2>
          </div>

          <p>
            {filteredTrips.length} trips found
          </p>

        </div>

        {filteredTrips.length > 0 ? (

          <div className="trip-grid">

            {filteredTrips.map((trip) => (

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
                    {trip.category.toUpperCase()}
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

                    <Link
                      to={`/trips/${trip.id}`}
                    >
                      View Details
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="no-results">

            <h2>
              No trips found
            </h2>

            <p>
              Try searching for another destination
              or select a different trip type.
            </p>

            <button onClick={handleClear}>
              Show All Trips
            </button>

          </div>

        )}

      </section>

    </div>
  );
}

export default Trips;