import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addBooking,
  deleteBooking,
  updateBooking
} from "../store/bookingSlice";

function Bookings() {
  const dispatch = useDispatch();

  const bookings = useSelector(
    (state) => state.bookings.bookings
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    date: "",
    travelers: "1"
  });

  const [errors, setErrors] = useState({});
  const [editingId, setEditingId] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function validateForm() {
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length !== 10) {
      newErrors.phone =
        "Phone number must be 10 digits";
    }

    if (formData.destination === "") {
      newErrors.destination =
        "Select a destination";
    }

    if (formData.date === "") {
      newErrors.date = "Select a travel date";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const booking = {
      id:
        editingId !== null
          ? editingId
          : Date.now(),
      ...formData
    };

    if (editingId !== null) {
      dispatch(updateBooking(booking));
      setEditingId(null);
    } else {
      dispatch(addBooking(booking));
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      date: "",
      travelers: "1"
    });

    setErrors({});
  }

  function handleEdit(booking) {
    setFormData({
      name: booking.name,
      email: booking.email,
      phone: booking.phone,
      destination: booking.destination,
      date: booking.date,
      travelers: booking.travelers
    });

    setEditingId(booking.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (confirmDelete) {
      dispatch(deleteBooking(id));
    }
  }

  function cancelEdit() {
    setEditingId(null);

    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      date: "",
      travelers: "1"
    });

    setErrors({});
  }

  return (
    <div className="bookings-page">

      <section className="page-hero">

        <div>
          <p className="section-title">
            PLAN YOUR JOURNEY
          </p>

          <h1>
            Book Your Trip
          </h1>

          <p>
            Fill in the details below to create your
            travel booking.
          </p>
        </div>

      </section>

      <section className="section">

        <div className="booking-layout">

          <div className="booking-form-card">

            <p className="section-title">
              {editingId !== null
                ? "UPDATE BOOKING"
                : "NEW BOOKING"}
            </p>

            <h2>
              {editingId !== null
                ? "Update Your Booking"
                : "Book a Trip"}
            </h2>

            <form onSubmit={handleSubmit}>

              <div className="form-group">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />

                {errors.name && (
                  <small className="form-error">
                    {errors.name}
                  </small>
                )}

              </div>

              <div className="form-group">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />

                {errors.email && (
                  <small className="form-error">
                    {errors.email}
                  </small>
                )}

              </div>

              <div className="form-group">

                <label>
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter 10 digit phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />

                {errors.phone && (
                  <small className="form-error">
                    {errors.phone}
                  </small>
                )}

              </div>

              <div className="form-group">

                <label>
                  Destination
                </label>

                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                >

                  <option value="">
                    Select Destination
                  </option>

                  <option value="Kerala">
                    Kerala
                  </option>

                  <option value="Goa">
                    Goa
                  </option>

                  <option value="Dubai">
                    Dubai
                  </option>

                  <option value="Bali">
                    Bali
                  </option>

                  <option value="Manali">
                    Manali
                  </option>

                  <option value="Rajasthan">
                    Rajasthan
                  </option>

                </select>

                {errors.destination && (
                  <small className="form-error">
                    {errors.destination}
                  </small>
                )}

              </div>

              <div className="form-row">

                <div className="form-group">

                  <label>
                    Travel Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />

                  {errors.date && (
                    <small className="form-error">
                      {errors.date}
                    </small>
                  )}

                </div>

                <div className="form-group">

                  <label>
                    Travelers
                  </label>

                  <select
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                  >

                    <option value="1">
                      1 Traveler
                    </option>

                    <option value="2">
                      2 Travelers
                    </option>

                    <option value="3">
                      3 Travelers
                    </option>

                    <option value="4">
                      4 Travelers
                    </option>

                    <option value="5">
                      5 Travelers
                    </option>

                    <option value="6">
                      6 Travelers
                    </option>

                  </select>

                </div>

              </div>

              <div className="form-buttons">

                <button
                  type="submit"
                  className="main-button"
                >
                  {editingId !== null
                    ? "Update Booking"
                    : "Create Booking"}
                </button>

                {editingId !== null && (
                  <button
                    type="button"
                    className="cancel-button"
                    onClick={cancelEdit}
                  >
                    Cancel
                  </button>
                )}

              </div>

            </form>

          </div>

          <div className="booking-info-card">

            <p className="section-title">
              WANDERLY
            </p>

            <h2>
              Your next adventure starts here.
            </h2>

            <p>
              Create your booking and manage your
              trips easily.
            </p>

            <div className="booking-info-item">
              <span>✓</span>
              <p>Easy booking process</p>
            </div>

            <div className="booking-info-item">
              <span>✓</span>
              <p>Flexible travel plans</p>
            </div>

            <div className="booking-info-item">
              <span>✓</span>
              <p>Simple booking management</p>
            </div>

          </div>

        </div>

      </section>

      <section className="section bookings-list-section">

        <div className="section-header">

          <div>
            <p className="section-title">
              MY BOOKINGS
            </p>

            <h2>
              Your Travel Bookings
            </h2>
          </div>

          <p>
            {bookings.length} booking(s)
          </p>

        </div>

        {bookings.length === 0 ? (

          <div className="no-results">

            <h2>
              No bookings yet
            </h2>

            <p>
              Create your first booking using the
              form above.
            </p>

          </div>

        ) : (

          <div className="bookings-list">

            {bookings.map((booking) => (

              <div
                className="booking-item"
                key={booking.id}
              >

                <div className="booking-item-main">

                  <div className="booking-icon">
                    ✈️
                  </div>

                  <div>

                    <h3>
                      {booking.destination}
                    </h3>

                    <p>
                      {booking.name}
                    </p>

                    <span>
                      {booking.date} •{" "}
                      {booking.travelers} traveler(s)
                    </span>

                  </div>

                </div>

                <div className="booking-actions">

                  <button
                    onClick={() =>
                      handleEdit(booking)
                    }
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(booking.id)
                    }
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

    </div>
  );
}

export default Bookings;