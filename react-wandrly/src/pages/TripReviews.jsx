import { useOutletContext } from "react-router-dom";

function TripReviews() {

  const { trip } = useOutletContext();

  return (
    <div>

      <p className="section-title">
        TRAVELER REVIEWS
      </p>

      <h2>
        Reviews for {trip.name}
      </h2>


      <div className="review-list">

        <div className="review-card">

          <div className="review-top">
            <div className="review-avatar">
              T
            </div>

            <div>
              <h4>Traveler</h4>
              <span>★★★★★</span>
            </div>
          </div>

          <p>
            The trip was well planned and the
            destination was beautiful. We really
            enjoyed the experience.
          </p>

        </div>


        <div className="review-card">

          <div className="review-top">
            <div className="review-avatar">
              A
            </div>

            <div>
              <h4>Traveler</h4>
              <span>★★★★★</span>
            </div>
          </div>

          <p>
            Everything was easy to understand and
            the itinerary helped us plan our trip.
          </p>

        </div>

      </div>

    </div>
  );
}

export default TripReviews;