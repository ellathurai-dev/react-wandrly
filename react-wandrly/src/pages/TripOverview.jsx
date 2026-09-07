import { useOutletContext } from "react-router-dom";

function TripOverview() {

  const { trip } = useOutletContext();

  return (
    <div>

      <p className="section-title">
        OVERVIEW
      </p>

      <h2>
        About {trip.name}
      </h2>

      <p className="trip-description">
        {trip.description}
      </p>


      <div className="included-section">

        <h3>
          What's Included?
        </h3>

        <div className="included-grid">

          <div>
            <span>🏨</span>
            <p>Hotel Stay</p>
          </div>

          <div>
            <span>🍽️</span>
            <p>Breakfast</p>
          </div>

          <div>
            <span>🚗</span>
            <p>Transportation</p>
          </div>

          <div>
            <span>🧭</span>
            <p>Tour Guide</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default TripOverview;