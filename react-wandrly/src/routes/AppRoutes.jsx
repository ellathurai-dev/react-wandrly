import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import Trips from "../pages/Trips";
import Destinations from "../pages/Destinations";
import Bookings from "../pages/Bookings";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";

import TripDetails from "../pages/TripDetails";
import TripOverview from "../pages/TripOverview";
import TripItinerary from "../pages/TripItinerary";
import TripReviews from "../pages/TripReviews";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/trips" element={<Trips />} />

        {/* Nested Trip Routes */}

        <Route
          path="/trips/:id"
          element={<TripDetails />}
        >
          <Route
            index
            element={<TripOverview />}
          />

          <Route
            path="overview"
            element={<TripOverview />}
          />

          <Route
            path="itinerary"
            element={<TripItinerary />}
          />

          <Route
            path="reviews"
            element={<TripReviews />}
          />
        </Route>


        <Route
          path="/destinations"
          element={<Destinations />}
        />

        <Route
          path="/bookings"
          element={<Bookings />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="*"
          element={
            <div className="page">
              <h1>Page Not Found</h1>
              <p>
                The page you are looking for does not exist.
              </p>
            </div>
          }
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default AppRoutes;