import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class BookingDetailsComponent extends Component {
  render() {
    return (
      <div className="bookingDetailsComponent">
        <div className="bookingDetailsComponent--wrapper">
            <h2>Booking details</h2>
            <div className="check__group">
                <p>Check-in</p>
                <span><svg><use href="image/sprite.svg#icon-calendar"></use></svg>Friday, 1 May 2018</span>
            </div>
            <div className="check__group">
                <p>Check-out</p>
                <span><svg><use href="image/sprite.svg#icon-calendar"></use></svg>Friday, 14 May 2018</span>
            </div>
            <div className="chooseDifferentDates">
                <NavLink to="/overview">Choose different dates</NavLink>
            </div>
            <div className="stayDuration">
                <p>Length of stay</p>
                <span>2 nights</span>
            </div>
            <div className="selectedRooms">
                <p>Selected rooms</p>
                <span>2 x Deluxe Rooms</span>
            </div>
            <div className="chooseDifferentDates">
                <NavLink to="/overview">Choose different rooms</NavLink>
            </div>
        </div>
        {/* bookingDetailsComponent */}
      </div>
    )
  }
}
export default BookingDetailsComponent;