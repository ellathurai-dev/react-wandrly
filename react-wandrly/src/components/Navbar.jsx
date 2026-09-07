import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <NavLink to="/" className="logo">
        Wanderly
      </NavLink>

      <div className="nav-links">

        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/trips">
          Trips
        </NavLink>

        <NavLink to="/destinations">
          Destinations
        </NavLink>

        <NavLink to="/bookings">
          Bookings
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>

        <NavLink to="/profile">
          Profile
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;