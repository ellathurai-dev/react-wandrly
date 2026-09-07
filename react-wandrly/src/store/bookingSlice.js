import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: []
};

const bookingSlice = createSlice({
  name: "bookings",

  initialState,

  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },

    deleteBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        (booking) => booking.id !== action.payload
      );
    },

    updateBooking: (state, action) => {
      const index = state.bookings.findIndex(
        (booking) => booking.id === action.payload.id
      );

      if (index !== -1) {
        state.bookings[index] = action.payload;
      }
    }
  }
});

export const {
  addBooking,
  deleteBooking,
  updateBooking
} = bookingSlice.actions;

export default bookingSlice.reducer;