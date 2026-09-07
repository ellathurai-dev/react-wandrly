import { Link, Outlet, useParams } from "react-router-dom";

function TripDetails() {

  const { id } = useParams();

  const trips = [
    {
      id: "1",
      name: "Kerala Explorer",
      location: "Kerala, India",
      duration: "5 Days / 4 Nights",
      price: 18999,
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
      description:
        "Explore the beautiful landscapes of Kerala with a relaxing journey through Kochi, Munnar and Alleppey."
    },
    {
      id: "2",
      name: "Goa Escape",
      location: "Goa, India",
      duration: "4 Days / 3 Nights",
      price: 14999,
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f1",
      description:
        "Enjoy the beaches, food and beautiful sunsets of Goa with an exciting holiday package."
    },
    {
      id: "3",
      name: "Dubai Experience",
      location: "Dubai, UAE",
      duration: "6 Days / 5 Nights",
      price: 54999,
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      description:
        "Experience modern Dubai, desert adventures, amazing architecture and unforgettable city views."
    },
    {
      id: "4",
      name: "Bali Escape",
      location: "Bali, Indonesia",
      duration: "7 Days / 6 Nights",
      price: 62999,
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      description:
        "Discover tropical beaches, beautiful temples and peaceful natural landscapes in Bali."
    },
    {
      id: "5",
      name: "Manali Adventure",
      location: "Manali, India",
      duration: "5 Days / 4 Nights",
      price: 21999,
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      description:
        "Enjoy mountain views, adventure activities and beautiful valleys during your Manali trip."
    },
    {
      id: "6",
      name: "Royal Rajasthan",
      location: "Rajasthan, India",
      duration: "6 Days / 5 Nights",
      price: 24999,
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
      description:
        "Experience royal palaces, historic forts and the rich culture of Rajasthan."
    }
  ];


  const trip = trips.find(
    (item) => item.id === id
  );


  if (!trip) {
    return (
      <div className="page">
        <h1>Trip Not Found</h1>

        <p>
          Sorry, we could not find this trip.
        </p>

        <Link
          to="/trips"
          className="main-button"
        >
          Back to Trips
        </Link>
      </div>
    );
  }


  return (
    <div className="trip-details-page">

      <section className="trip-details-hero">

        <img
          src={trip.image}
          alt={trip.name}
        />

        <div className="trip-details-overlay">

          <p className="section-title">
            TRIP DETAILS
          </p>

          <h1>{trip.name}</h1>

          <p>
            📍 {trip.location}
          </p>

        </div>

      </section>


      <section className="trip-details-content">

        <div className="trip-main-content">

          <div className="trip-tabs">

            <Link to="overview">
              Overview
            </Link>

            <Link to="itinerary">
              Itinerary
            </Link>

            <Link to="reviews">
              Reviews
            </Link>

          </div>


          <div className="trip-outlet">
            <Outlet context={{ trip }} />
          </div>

        </div>


        <div className="booking-box">

          <p>STARTING FROM</p>

          <h2>
            ₹{trip.price.toLocaleString("en-IN")}
          </h2>

          <span>
            per person
          </span>

          <hr />

          <div>
            <strong>Duration</strong>
            <p>{trip.duration}</p>
          </div>

          <div>
            <strong>Destination</strong>
            <p>{trip.location}</p>
          </div>

          <Link
            to="/bookings"
            className="main-button booking-button"
          >
            Book This Trip
          </Link>

        </div>

      </section>

    </div>
  );
}

export default TripDetails;