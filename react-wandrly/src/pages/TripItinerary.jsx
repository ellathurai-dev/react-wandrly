import { useOutletContext } from "react-router-dom";

function TripItinerary() {

  const { trip } = useOutletContext();

  return (
    <div>

      <p className="section-title">
        ITINERARY
      </p>

      <h2>
        {trip.name} Itinerary
      </h2>


      <div className="itinerary">

        <div className="day">
          <span>01</span>

          <div>
            <h3>Arrival & Welcome</h3>
            <p>
              Arrive at the destination and check in
              to your hotel.
            </p>
          </div>
        </div>


        <div className="day">
          <span>02</span>

          <div>
            <h3>Explore the City</h3>
            <p>
              Visit popular attractions and discover
              local culture.
            </p>
          </div>
        </div>


        <div className="day">
          <span>03</span>

          <div>
            <h3>Adventure Day</h3>
            <p>
              Enjoy local activities and explore
              beautiful places.
            </p>
          </div>
        </div>


        <div className="day">
          <span>04</span>

          <div>
            <h3>Relax & Explore</h3>
            <p>
              Spend the day enjoying the destination
              at your own pace.
            </p>
          </div>
        </div>


        <div className="day">
          <span>05</span>

          <div>
            <h3>Departure</h3>
            <p>
              Check out and return home with
              wonderful memories.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default TripItinerary;